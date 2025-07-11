import React from "react";
import {AdjustmentHeader} from "@/components/shared/adjustment/AdjustmentHeader";
import {AdjustmentForClients} from "@/components/shared/adjustment/AdjustmentForClients";
import {AdjustmentStages} from "@/components/shared/adjustment/AdjustmentStages";
import {ArticlesOnMain} from "@/components/shared/articles/ArticlesOnMain";
import {SocialBanner} from "@/components/shared/banners/SocialBanner";
import {getTranslations} from "next-intl/server";
import {Container} from "@/components/shared/Container";
import {SocialBannerMini} from "@/components/shared/banners/SocialBannerMini";

export async function generateMetadata({params: paramsPromise}: { params: Promise<{ locale: string }> }) {
  const {locale} = await paramsPromise;
  const t = await getTranslations({locale});

  return {
    title: `${t('adjustmentMetaTitle')}`,
    description: `${t('adjustmentMetaDescription')}`,
  };
}

const AdjustmentPage: React.FC = () => {

  const data_clients = [
    {
      id: 1,
      name: "Пуск и наладка лазерного оборудования",
      price: 10000,
      second_price: 150000
    },
    {
      id: 2,
      name: "Пуск и наладка фрезерного станка с чпу",
      price: 10000,
      second_price: 150000
    }
  ];

  const data_stages = [
    {
      id: 1,
      text: "Подготовка. Изучение исходных данных, знакомство с оборудованием, проверка комплектации и целостности"
    },
    {
      id: 2,
      text: "Установка оборудования. Станок не должен шататься, должен быть выставлен по уровню, подключен к сети и заземлен"
    },
    {
      id: 3,
      text: "Настройка системы управления. А в некоторых случаях и ПО"
    },
    {
      id: 4,
      text: "Проверка электроники"
    },
    {
      id: 5,
      text: "Проверка в процессе эксплуатации механических элементов оборудования"
    },
    {
      id: 6,
      text: "Подключение систем безопасности: охлаждения, стабилизаторов и т. д."
    },
    {
      id: 7,
      text: "Пробное тестирование работы станка на различных мощностях"
    }
  ];

  return (
    <section>
      <AdjustmentHeader/>

      <AdjustmentForClients className={"mb-15 max-md:mb-5"} data={data_clients}/>

      <AdjustmentStages className={"mb-25 max-md:mb-5"} data={data_stages}/>

      <ArticlesOnMain className={"mb-15 max-md:mb-5"}/>

      <div className={"max-md:hidden"}>
        <SocialBanner/>
      </div>
      <div className={"md:hidden max-md:block"}>
        <Container>
          <SocialBannerMini/>
        </Container>
      </div>

    </section>
  );
};

export default AdjustmentPage;
