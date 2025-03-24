import React from "react";
import {ClassName} from "@/types/types";
import {cn} from "@/lib/utils";
import {Container} from "@/components/shared/Container";
import {Logo} from "@/components/shared/Logo";
import {CircleCheck} from "lucide-react";

export const AboutMainList: React.FC<ClassName> = ({className}) => {

  const aboutList = [
    {
      name: "Поддержка",
      desc: "В Инфолазере вы получите отличную цену, мы поможем с организацией доставки и документационным сопровождением.",
    },
    {
      name: "Гарантия до 12 месяцев",
      desc: "Мы даем гарантию 12 месяцев на оборудование на территории всей России и странах СНГ.",
    },
    {
      name: "Большая база знаний",
      desc: "Более 100 статей на различные темы, которые отвечают на самые интересные и сложные вопросы общего характера.",
    }
  ];

  return (
    <section className={cn("py-7", className)}>
      <Container>
        <Container className={"max-w-[930px] text-center mb-10"}>
          <Logo className={"flex justify-center mb-3"} name={"logo"}/>
          <h3 className={"text-4xl font-semibold"}>Компания Infolaser подберет и модернизирует станок с ЧПУ под ваши
            задачи.
            <span
              className={"text-[#9298AF] ml-1"}>Мы обучим ваш персонал и обеспечим тех. поддержку на каждом этапе.</span>
          </h3>
        </Container>

        <dl className={"flex justify-between gap-x-5"}>
          {aboutList.map((item) => (
            <div key={item.name}>
              <dt className={"flex items-center gap-x-2 font-semibold mb-2"}>
                <CircleCheck fill={"#4F26E9"} className={"text-white"} size={20}/>
                {item.name}
              </dt>
              <dd className={"pl-7"}>{item.desc}</dd>
            </div>
          ))}
        </dl>

      </Container>
    </section>
  );
};
