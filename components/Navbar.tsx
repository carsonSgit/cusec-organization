"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/past-speakers", label: "Past Speakers" },
  { href: "/participant-schools", label: "Participating Schools" },
  { href: "/historic-sponsors", label: "Historic Sponsors" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className="cusec-navbar" data-open={open ? "true" : "false"} aria-label="Primary">
      <div className="cusec-navbar__inner">
        <Link href="/" className="cusec-navbar__wordmark">
          CUSEC
        </Link>
        <button
          type="button"
          className="cusec-navbar__toggle"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <span aria-hidden="true">{open ? "Close" : "Menu"}</span>
        </button>
        <ul className="cusec-navbar__links">
          {navLinks.map((link) => {
            const active = pathname.startsWith(link.href);
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`cusec-navbar__link${active ? " cusec-navbar__link--active" : ""}`}
                  aria-current={active ? "page" : undefined}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
