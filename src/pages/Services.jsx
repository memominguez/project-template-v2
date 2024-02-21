/* eslint-disable no-unused-vars */
import TopBanner from "../components/top-banner/TopBanner";
import SomeWorksMap from "../components/some-of-our-works/SomeWorksMap"
import MakeTogether from "../components/make-together/MakeTogether";
import MasterTouch from "../components/master-touch/MasterTouch";
import Slider from "../components/slider/Slider";
import ServiceList02 from "../components/services-list/ServiceList02";
import ServiceList01 from "../components/services-list/ServiceList01";

function ServicesPage() {
  return (
    <>
      <TopBanner title="Services" note="Home / Services" />    
      <ServiceList01 />
      <ServiceList02 />
      <SomeWorksMap longList={false} />
      <MakeTogether />
      <MasterTouch />
      <Slider />
    </>
  );
}

export default ServicesPage;
