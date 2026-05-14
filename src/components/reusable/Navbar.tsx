"use client";
import { useState } from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { NAVBAR_DATA } from "@/constants";

export type NavItem = {
  title: string;
  href: string;
};

interface NavbarProps {
  brand?: {
    name: string;
    href: string;
  };
  navItems?: NavItem[];
  onNavItemClick?: (item: NavItem) => void;
}

const Navbar = ({
  brand = NAVBAR_DATA.brand,
  navItems = NAVBAR_DATA.navItems,
  onNavItemClick,
}: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (item: NavItem) => {
    setIsOpen(false);
    if (onNavItemClick) {
      onNavItemClick(item);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] border-b border-white/5 bg-[#0d1117]/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Brand/Logo */}
        <Link
          href={brand.href}
          className="text-xl font-bold tracking-tighter text-white"
        >
          <span className="primary-gradient">{brand.name}</span>
        </Link>

        {/* Mobile Toggle Button */}
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white transition hover:bg-white/10 md:hidden"
        >
          <Icon
            icon={
              isOpen ? "solar:close-circle-bold" : "solar:hamburger-menu-bold"
            }
            className="h-6 w-6"
          />
        </button>

        {/* Navigation Menu */}
        <nav
          className={`absolute left-0 right-0 top-full overflow-hidden bg-[#0d1117] border-b border-white/5 transition-all duration-300 md:static md:bg-transparent md:border-none md:block ${
            isOpen
              ? "max-h-[400px] opacity-100"
              : "max-h-0 opacity-0 md:opacity-100"
          } md:max-h-none`}
        >
          <ul className="flex flex-col gap-2 px-6 pb-6 pt-4 md:flex-row md:items-center md:gap-8 md:px-0 md:pb-0 md:pt-0">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => handleNavClick(item)}
                  className="group relative inline-block text-sm font-medium text-[#8b949e] transition-colors duration-200 hover:text-[#58a6ff] py-2 md:py-2"
                >
                  {item.title}
                  {/* Sliding Underline Effect */}
                  <span className="absolute bottom-[3px] left-0 h-[2px] w-0 bg-[#58a6ff] transition-[width] duration-300 ease-out group-hover:w-full" />
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
