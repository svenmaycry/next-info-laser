import Link from "next/link";
import {ChevronLeft} from "lucide-react";
import React from "react";
import {ArticleCategoriesProps, ClassName} from "@/types/types";
import {cn} from "@/lib/utils";

interface ArticlesGroupListUpd extends ClassName {
  categories: ArticleCategoriesProps[];
  activeCategory?: string;
}

export const ArticleCategories: React.FC<ArticlesGroupListUpd> = ({className, categories, activeCategory}) => {

  return (
    <aside className={cn("", className)}>
      <h2 className={"text-[22px] font-semibold mb-3"}>Разделы статей</h2>
      <ul className={"mb-4"}>
        {categories.map((section) => {
          const isActive = activeCategory === section.slug;
          
          return (
            <li key={section.id} className={"not-last:mb-3"}>
              {isActive ? (
                <div
                  className={cn(
                    "group flex gap-3 leading-5 transition-colors duration-300 text-red-400 hover:text-red-400 focus:text-red-400"
                  )}
                >
                  <div
                    className={"flex flex-shrink-0 items-center justify-center h-7 w-7 rounded-full bg-[#4F26E91A] rotate-180 p-0"}
                  >
                    <ChevronLeft size={"16"} className={"relative text-red-400"}/>
                  </div>
                  {section.title}
                </div>
              ) : (
                <Link
                  className={cn(
                    "group flex gap-3 hover:text-[#4F26E9] focus:text-[#4F26E9] leading-5 transition-colors duration-300",
                    isActive && "text-red-400 hover:text-red-400 focus:text-red-400"
                  )}
                  href={`/blog/${section.slug}`}
                >
                  <div
                    className={"flex flex-shrink-0 items-center justify-center h-7 w-7 rounded-full bg-[#4F26E91A] rotate-180 p-0"}
                  >
                    <ChevronLeft
                      size={"16"}
                      className={cn(
                        "relative text-[#4F26E9] transition-colors duration-300 group-hover:text-red-400 group-focus:text-red-400",
                        isActive && "text-red-400"
                      )}
                    />
                  </div>
                  {section.title}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
