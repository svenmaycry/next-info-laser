import {BannerMain} from "@/components/shared/carousels/banners/Banner-main";
import {NewProductsSlider} from "@/components/shared/carousels/New-products-slider";
import {PartnersSlider} from "@/components/shared/carousels/Partners-slider";
import {UniqMachinesSlider} from "@/components/shared/carousels/Uniq-machines-slider";
import OfflineOrOnlineMain from "@/components/shared/OfflineOrOnlineMain";
import {SimplerTabsMain} from "@/components/shared/SimplerTabsMain";

export default function MainPage() {
  return (
    <>
      <BannerMain/>

      <NewProductsSlider/>

      <PartnersSlider/>

      <UniqMachinesSlider/>

      <OfflineOrOnlineMain/>

      <SimplerTabsMain/>
    </>
  );
}
