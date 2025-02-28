'use client'

import React, {useEffect, useState} from 'react';
import {ClassName} from "@/types/types";
import {cn} from "@/lib/utils";
import {ChevronDown} from "lucide-react";
import {Overlay} from "@/components/shared/Overlay";

const citySubdomains: Record<string, string> = {
  "Санкт-Петербург": "spb",
  "Москва": "msk",
  "Казань": "kzn",
  "Воронеж": "vrn",
};

export const HeaderCity: React.FC<ClassName> = ({className}) => {
  const [isSpoilerOpen, setIsSpoilerOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState<string>("Санкт-Петербург");

  useEffect(() => {
    const storedCity = localStorage.getItem("selectedCity");
    if (storedCity) setSelectedCity(storedCity);
  }, []);

  useEffect(() => {
    if (isSpoilerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isSpoilerOpen]);

  const handleCitySelect = (city: string) => {
    setSelectedCity(city);
    localStorage.setItem("selectedCity", city);
    setIsSpoilerOpen(false);

    // Формируем новый URL с поддоменом
    const subdomain = citySubdomains[city];
    const currentDomain = window.location.hostname.replace(/^[^.]+/, ''); // Убираем текущий поддомен
    window.location.href = `https://${subdomain}${currentDomain}${window.location.pathname}`; // Редирект на новый поддомен
  };

  return (
    <>
      <Overlay isOpen={isSpoilerOpen}/>

      <div className={cn('relative mr-3', className)} onMouseLeave={() => setIsSpoilerOpen(false)}>
        <button
          className={cn(
            'flex items-center gap-x-1 text-[14px] bg-white hover:text-[#6941f9] transition-colors duration-300',
            isSpoilerOpen ? 'text-[#6941f9] before:content-[] before:absolute before:left-0 before:bottom-[-40px] before:h-[40px] before:w-full' : '',
          )}
          onMouseEnter={() => setIsSpoilerOpen(true)}
        >
          {selectedCity}
          <ChevronDown
            size={14}
            className={cn(
              "relative transition-all duration-300 ease-in-out",
              isSpoilerOpen ? "top-0.5" : " top-0"
            )}
          />
        </button>

        <div
          className={cn(
            'absolute top-[50px] right-0 bg-white border-t border-t-gray-300 rounded-md shadow-md transition-all duration-300 z-30',
            "xl:w-max xl:max-w-[250px]",
            isSpoilerOpen ? 'opacity-100 visible scale-100' : 'opacity-0 invisible scale-95'
          )}
        >
          <ul>
            {Object.keys(citySubdomains).map((city) => (
              <li key={city}>
                <button
                  className="block w-full text-left hover:text-[#6941f9] py-2 px-4"
                  onClick={() => handleCitySelect(city)}
                >
                  {city}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
