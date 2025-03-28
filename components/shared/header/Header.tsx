import React from "react";
import {Container} from "@/components/shared/Container";
import {HeaderContacts} from "@/components/shared/header/HeaderContacts";
import {HeaderSearchBtn} from "@/components/shared/header/HeaderSearchBtn";
import {Logo} from "@/components/shared/Logo";
import {HeaderNav} from "@/components/shared/header/HeaderNav";
import {HeaderCity} from "@/components/shared/header/HeaderCity";
import {HeaderCartBtn} from "@/components/shared/header/HeaderCartBtn";

export const Header: React.FC = () => {

  return (
    <header className="relative bg-white shadow shadow-gray-200/80 py-2 z-50">
      <Container className="flex items-center justify-between">

        <Logo name={"logo"} className="mr-7"/>

        <HeaderCity/>

        <HeaderNav/>

        <HeaderSearchBtn/>

        <HeaderCartBtn/>

        <HeaderContacts/>

      </Container>
    </header>
  );
};
