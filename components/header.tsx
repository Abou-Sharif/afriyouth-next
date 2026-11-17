"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { Icon, IconBox } from "./icon";
import { mainNav, programMenu } from "@/content/site";

const WIDE = "(min-width:1021px)";
const SMALL = "(max-width:1020px)";

export function Header() {
  const pathname = usePathname();
  const [solid, setSolid] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropOpen, setDropOpen] = useState(false);
  const sentinel = useRef<HTMLDivElement>(null);
  const header = useRef<HTMLElement>(null);
  const lastY = useRef(0);
  const closeTimer = useRef<ReturnType<typeof setTimeout>>(undefined);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
    setDropOpen(false);
    lastY.current = window.scrollY;
  }, []);

  // Transparent bar with the large logo at the top, compact solid bar once scrolled.
  useEffect(() => {
    const el = sentinel.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => setSolid(!entry.isIntersecting));
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // On small screens the bar slides away while scrolling down and returns on any upward scroll.
  // Only keyboard focus keeps it open, so a tapped menu button never pins it.
  useEffect(() => {
    const small = window.matchMedia(SMALL);
    let ticking = false;
    lastY.current = window.scrollY;
    const check = () => {
      ticking = false;
      const y = Math.max(0, window.scrollY);
      const dy = y - lastY.current;
      const active = document.activeElement;
      const keyboard =
        !!active && !!header.current?.contains(active) && active.matches(":focus-visible");
      if (
        !small.matches ||
        document.documentElement.classList.contains("menu-open") ||
        y < 120 ||
        keyboard
      ) {
        setHidden(false);
      } else if (dy > 6) setHidden(true);
      else if (dy < -6) setHidden(false);
      if (Math.abs(dy) > 6) lastY.current = y;
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(check);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock page scroll while the mobile panel is open.
  useEffect(() => {
    const wide = window.matchMedia(WIDE);
    document.documentElement.classList.toggle("menu-open", menuOpen && !wide.matches);
    return () => document.documentElement.classList.remove("menu-open");
  }, [menuOpen]);

  // Close everything on Escape, outside click, or when the layout switches to desktop.
  useEffect(() => {
    const wide = window.matchMedia(WIDE);
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      closeMenu();
    };
    const onClick = (e: MouseEvent) => {
      const target = e.target as Element;
      if (!target.closest(".nav-item")) setDropOpen(false);
      if (!target.closest("#nav,#menuBtn")) setMenuOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("click", onClick);
    wide.addEventListener("change", closeMenu);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("click", onClick);
      wide.removeEventListener("change", closeMenu);
    };
  }, [closeMenu]);

  const isWide = () => window.matchMedia(WIDE).matches;
  const onProgramsPath = pathname.startsWith("/programs");

  return (
    <>
      <div id="sentinel" ref={sentinel} />
      <header
        ref={header}
        className={`site-header${solid ? " solid" : ""}${hidden ? " is-hidden" : ""}`}
      >
        <div className="wrap bar">
          <Link className="brand" href="/" aria-label="AfriYouth Innovation Labs, home">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="b-full"
              src="/logo/logo-color.svg"
              alt="AfriYouth Innovation Labs"
              width={209}
              height={108}
            />
            <span className="b-mini" aria-hidden="true">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo/icon-color.svg" alt="" width={30} height={48} />
              <span className="b-text">
                <b>AfriYouth</b>Innovation Labs
              </span>
            </span>
          </Link>
          <button
            className="menu-btn"
            id="menuBtn"
            aria-expanded={menuOpen}
            aria-controls="nav"
            aria-label="Menu"
            onClick={() => setMenuOpen((o) => !o)}
          >
            <i />
            <i />
            <i />
          </button>
          <nav
            className={`nav${menuOpen ? " open" : ""}`}
            id="nav"
            aria-label="Main"
            onClick={(e) => {
              if ((e.target as Element).closest("a")) closeMenu();
            }}
          >
            <div
              className="nav-item"
              onMouseEnter={() => {
                if (!isWide()) return;
                clearTimeout(closeTimer.current);
                setDropOpen(true);
              }}
              onMouseLeave={() => {
                if (isWide()) closeTimer.current = setTimeout(() => setDropOpen(false), 160);
              }}
              onBlur={(e) => {
                if (!e.currentTarget.contains(e.relatedTarget)) setDropOpen(false);
              }}
            >
              <button
                className={`nav-link${onProgramsPath ? " is-current" : ""}`}
                type="button"
                aria-expanded={dropOpen}
                aria-controls="dd-programs"
                onClick={() => setDropOpen((o) => (isWide() ? true : !o))}
              >
                Programs
                <Icon name="chev" className="chev" />
              </button>
              <div className={`dd${dropOpen ? " open" : ""}`} id="dd-programs">
                <div className="dd-grid">
                  {programMenu.map((item) => (
                    <Link key={item.href} href={item.href} role="menuitem">
                      <IconBox name={item.icon} />
                      <span>
                        <b>{item.title}</b>
                        <span>{item.text}</span>
                      </span>
                    </Link>
                  ))}
                </div>
                <Link className="dd-all" href="/programs/">
                  See all programs
                  <Icon name="arrow" />
                </Link>
              </div>
            </div>
            {mainNav.map((item) => (
              <Link
                key={item.href}
                className="nav-link"
                href={item.href}
                aria-current={pathname === item.href ? "page" : undefined}
              >
                {item.label}
              </Link>
            ))}
            <Link className="btn btn-solid nav-cta" href="/contact/">
              Get in touch
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
}
