"use client";

import React, {useEffect, useRef, useState} from "react";
import Link from "next/link";
import {HeaderProductItem} from "@/components/shared/header/nav-items/Header-product-item";
import {cn} from "@/lib/utils";
import {Menu, X} from "lucide-react";
import {Overlay} from "@/components/shared/Overlay";
import {useClickAway} from "react-use";
import {HeaderAboutCompanyItem} from "@/components/shared/header/nav-items/Header-about-company-item";
import {HeaderServiceItem} from "@/components/shared/header/nav-items/Header-service-item";

export const HeaderNav: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef(null);
  const menuRef = useRef<HTMLButtonElement | null>(null);

  useClickAway(navRef, (event: MouseEvent | TouchEvent) => {
    const target = event.target as Node | null;

    if (menuRef.current && target && menuRef.current.contains(target)) {
      return
    }

    setIsMenuOpen(false);
  });

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <>

      <Overlay isOpen={isMenuOpen}/>

      <nav
        ref={navRef}
        className={cn(
          "bg-white ml-auto mr-4",
          "max-xl:fixed max-xl:top-20 max-xl:left-[-110%] max-xl:h-full max-xl:w-2/3 max-xl:transition-all max-xl:ease-in-out max-xl:duration-300 max-xl:shadow-lg max-xl:border-t max-xl:border-t-gray-300 max-xl:overflow-y-scroll max-xl:max-h-[90dvh]",
          isMenuOpen && "max-xl:left-0"
        )}
      >
        <ul className={cn(
          "flex flex-row items-center",
          "max-xl:flex-col max-xl:items-start"
        )}>

          <HeaderProductItem/>

          <HeaderAboutCompanyItem/>

          <li>
            <Link
              className={cn(
                'max-xl:w-full max-xl:justify-between max-xl:font-bold',
                "block px-2 hover:text-[#6941f9] transition-colors",
                "xl:py-1 xl:px-2",
              )}
              href={"/delivery"}>
              Оплата и доставка
            </Link>
          </li>

          <HeaderServiceItem/>

          <li>
            <Link
              className={cn(
                'max-xl:w-full max-xl:justify-between max-xl:font-bold',
                "block px-2 hover:text-[#6941f9] transition-colors",
                "xl:py-1 xl:px-2",
              )}
              href={"/contacts"}>
              Контакты
            </Link>
          </li>

        </ul>
      </nav>

      {/* Бургер кнопка */}
      <button
        ref={menuRef}
        className={cn(
          "xl:hidden",
          "max-xl:block max-xl:bg-gray-200 max-xl::hover:bg-gray-300 max-xl::transition max-xl:p-1 max-xl:rounded-md"
        )}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <X size={24}/> : <Menu size={24}/>}
      </button>
    </>

  );
};
