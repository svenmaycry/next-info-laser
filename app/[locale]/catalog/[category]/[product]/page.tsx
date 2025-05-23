import React from "react";
import {Container} from "@/components/shared/Container";
import {getOneProductBySlug} from "@/api/api";
import {cn} from "@/lib/utils";
import {ProductGallerySlider} from "@/components/shared/carousels/product/ProductGallerySlider";
import {AllCharacteristicsBtn} from "@/components/shared/btns/AllCharacteristicsBtnProduct";
import {Star} from "lucide-react";
import {ProductBenefitSpoilers} from "@/components/shared/product/ProductBenefitSpoilers";
import {OfflineOrOnlineMain} from "@/components/shared/banners/OfflineOrOnlineMain";
import {BannerProduct} from "@/components/shared/carousels/banners/BannerProduct";
import {ChooseLaserMachineSlider} from "@/components/shared/carousels/product/ChooseLaserMachineSlider";
import {PurchaseOrder} from "@/components/shared/PurchaseOrder";
import {ProductGeneralAccessoriesBanner} from "@/components/shared/product/ProductGeneralAccessoriesBanner";
import {ProductSystemBanner} from "@/components/shared/product/ProductSystemBanner";
import {ProductMarquee} from "@/components/shared/product/ProductMarquee";
import {ProductBenefitBanner} from "@/components/shared/product/ProductBenefitBanner";
import {ProductMaterialsTabs} from "@/components/shared/product/ProductMaterialsTabs";
import {ShortCharacteristics} from "@/components/shared/product/characteristics/ShortCharacteristics";
import {ProductPrices} from "@/components/shared/product/ProductPrices";
import {FullCharacteristics} from "@/components/shared/product/characteristics/FullCharacteristics";
import {ImportantCharacteristics} from "@/components/shared/product/characteristics/ImportantCharacteristics";
import {NecessaryProductsList} from "@/components/shared/product/NecessaryProductsList";
import {getTranslations} from "next-intl/server";

interface PageProps {
  params: Promise<{ product: string; category: string }>;
}

export async function generateMetadata(
  {
    params: paramsPromise
  }: {
    params: Promise<{ locale: string; product: string }>;
  }) {
  const {locale, product} = await paramsPromise;
  const t = await getTranslations({locale});

  const oneProduct = await getOneProductBySlug(product);

  return {
    title: oneProduct?.name
      ? `${oneProduct.name}`
      : t("productMetaTitle"),
    description: oneProduct?.description || "",
  };
}

const ProductPage: React.FC<PageProps> = async ({params}) => {
  const {product: productSlug} = await params;
  const product = await getOneProductBySlug(productSlug);

  if (!product) {
    return (
      <Container>
        <p>Продукт не найден</p>
      </Container>
    );
  }

  return (
    <>
      {/* Главная информация */}
      <section className={"mt-10 mb-15"}>
        <Container className="relative grid grid-cols-12 gap-10">

          <div className="col-start-1 col-end-7 auto-rows-max">
            <ProductGallerySlider
              className={"sticky top-3"}
              images={product.product_attachments ?? []}
              labels={product.labels}
            />
          </div>

          <div className="col-start-7 col-end-13">
            {/* Информация о продукте */}
            <div className={cn("mb-7")}>
              <h1 className={cn("text-4xl font-bold mb-3")}>
                {product.name}
              </h1>

              <div className={cn("flex items-center justify-between gap-3 font-semibold")}>
                <p>{product.description}</p>
                <span className={cn("flex items-center gap-0.5")}>
                {Array.from({length: 5}).map((_, index) => (
                  <Star
                    key={index}
                    className="fill-[var(--gold)] last:mr-2"
                    strokeWidth={0}
                    size={12}
                  />
                ))}
                  {product.rating}
              </span>
              </div>
            </div>

            <ShortCharacteristics characteristics={product.characteristics ?? []}/>

            <AllCharacteristicsBtn className={"mb-7"}/>

            <ProductPrices product={product}/>

            <NecessaryProductsList className={"mb-7"}/>

            <ProductSystemBanner className={"mb-7"}/>

            <ProductBenefitSpoilers/>
          </div>
        </Container>
      </section>

      <OfflineOrOnlineMain className={cn("mb-15")}/>

      {/* Полное описание + полные характеристики */}
      <div className={cn("mb-15")}>
        <Container className={cn("grid grid-cols-12 gap-10")}>

          {/* Полное описание + баннер */}
          <section className={cn("col-start-1 col-end-5 pt-8")}>
            <div className={"mb-5"}>
              <h2 className={"text-2xl font-semibold mb-5"}>Описание</h2>
              <p className={"font-semibold mb-2"}>
                Лазерный станок WATTSAN micro 0203 — малогабаритный настольный станок для мелкосерийного производства.
                Предназначен для лазерной резки и гравировки неметаллических материалов, дерева до 3 мм и пластика до
                5-6
                мм.
              </p>
              <p className={"text-sm text-[var(--gray-text)] mb-3"}>
                Прост в работе и в обслуживании, долговечен. Станок можно использовать в производстве рекламы, штампов,
                сувениров, персонализации продукции, деревообработке и полиграфии.
              </p>
              <p className={"text-sm text-[var(--gray-text)]"}>
                Рабочий стол станка имеет размер 200×300 мм. Мощность лазерной трубки составляет 40 Ватт. Чтобы данный
                станок прослужил вам дольше, рекомендуем сразу установить на него систему охлаждения для лазерной
                трубки.
                В качестве тюнинга, на станок можно установить более мощный лазерный излучатель.
              </p>
            </div>

            <BannerProduct/>
          </section>

          <FullCharacteristics characteristics={product.characteristics ?? []}/>

        </Container>
      </div>

      <ImportantCharacteristics className={"mb-15"} characteristics={product.characteristics ?? []}/>

      <ProductMaterialsTabs className={"mb-15"} materials={product.materials ?? []}/>

      <ChooseLaserMachineSlider className={"mb-15"}/>

      <ProductGeneralAccessoriesBanner className={"mb-15"}/>

      <ProductMarquee className={"mb-25"} images={product.product_attachments ?? []}/>

      <PurchaseOrder className={"mb-25"}/>

      <ProductBenefitBanner className={"mb-15"}/>
    </>
  );
};

export default ProductPage;