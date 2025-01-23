import React from 'react';
import {cn} from "@/lib/utils";
import {ArrowUpDown} from "lucide-react";

interface Props {
  className?: string;
}


export const SortPopup: React.FC<Props> = ({className}) => {
  return (
    <div
      className={cn('inline-flex items-center gap-1 bg-gray-50 px-5 h-[52px] rounded-2xl cursor-pointer', className)}>
      <ArrowUpDown size={16}/>
      <b className="font-medium">Сортировать по:</b>
      <b className="text-primary">цене</b>
    </div>
  );
};
