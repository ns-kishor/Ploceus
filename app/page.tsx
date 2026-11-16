"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { Skeleton } from "@/components/Skeleton";
import { isLang, setGlobalLang, type Lang } from "@/lib/i18n";
import { LandingPage } from "@/components/LandingPage";

const loadEditor = () => import("./Editor");
/* the editor chunk starts downloading as soon as this module runs, alongside hydration,
   instead of waiting for the first client render */
if (typeof window !== "undefined") void loadEditor();

const Editor = dynamic(loadEditor, { ssr: false, loading: () => null });

/** the static page: the editor's shell with nothing in it, standing over the editor until
 *  the document has been read, then fading away to show the real one in its place */
function Boot({ done }: { done: boolean }) {
  return (
    <div className="m3e-boot" data-done={done ? "" : undefined} aria-busy={!done} aria-hidden={done}>
      <Skeleton />
    </div>
  );
}

function initialLanguage(): Lang {
  try {
    const ui = JSON.parse(localStorage.getItem("m3e:ui") ?? "null");
    if (isLang(ui?.lang)) return ui.lang;
  } catch {}
  const language = (navigator.language ?? "").toLowerCase();
  return language.startsWith("zh") ? "zh" : language.startsWith("ko") ? "ko" : language.startsWith("ja") ? "ja" : "en";
}

/** how long the overlay takes to fade; matches .m3e-boot in globals.css */
const BOOT_FADE_MS = 420;

export default function Page() {
  const [lang, setLang] = useState<Lang | null>(null);
  const [phase, setPhase] = useState<"loading" | "fading" | "done">("loading");
  const [view, setView] = useState<"home" | "editor">("home");

  useEffect(() => {
    const initialLang = initialLanguage();
    document.documentElement.lang = initialLang;
    setGlobalLang(initialLang);
    setLang(initialLang);

    // If URL contains hash indicating editor or document, jump straight to editor
    if (typeof window !== "undefined") {
      const hash = window.location.hash;
      const search = window.location.search;
      if (
        hash.includes("app") ||
        hash.includes("canvas") ||
        hash.includes("editor") ||
        hash.includes("doc") ||
        search.includes("view=editor")
      ) {
        setView("editor");
      }

      const handleHashChange = () => {
        const curHash = window.location.hash;
        if (
          curHash.includes("app") ||
          curHash.includes("canvas") ||
          curHash.includes("editor") ||
          curHash.includes("doc")
        ) {
          setView("editor");
        } else if (!curHash || curHash === "#" || curHash === "#home") {
          setView("home");
        }
      };

      window.addEventListener("hashchange", handleHashChange);
      return () => window.removeEventListener("hashchange", handleHashChange);
    }
  }, []);

  useEffect(() => {
    if (phase !== "fading") return;
    const id = setTimeout(() => setPhase("done"), BOOT_FADE_MS);
    return () => clearTimeout(id);
  }, [phase]);

  const handleStartDesigning = () => {
    setView("editor");
    if (typeof window !== "undefined") {
      window.location.hash = "#app";
    }
  };

  const handleBackHome = () => {
    setView("home");
    if (typeof window !== "undefined") {
      window.location.hash = "";
    }
  };

  return (
    <>
      {view === "home" ? (
        <LandingPage onStartDesigning={handleStartDesigning} />
      ) : (
        <>
          {lang && (
            <Editor
              initialLang={lang}
              onReady={() => setPhase((p) => (p === "loading" ? "fading" : p))}
              onBackHome={handleBackHome}
            />
          )}
          {phase !== "done" && <Boot done={phase === "fading"} />}
        </>
      )}
    </>
  );
}
