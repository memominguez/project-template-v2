/* eslint-disable no-unused-vars */
import HeroesRev1 from "../components/heroes-rev1/HeroesRev1";
import WeProvide from "../components/we-provide/WeProvide";
import SomeWorksMap from "../components/some-of-our-works/SomeWorksMap";
import UiUxBanner from "../components/uiux-banner/UiUxBanner";
import MasterTouch from "../components/master-touch/MasterTouch";
import MakeTogether from "../components/make-together/MakeTogether";
import Slider from "../components/slider/Slider";
import TheFacesMap from "../components/the-faces/TheFacesMap";
import BlogsMap from "../components/latest-blogs/BlogsMap";
import ServiceList01 from "../components/services-list/ServiceList01";

function HomePage() {   

  return (
    <>
      <HeroesRev1 />
      <WeProvide />
      <ServiceList01 />    
      <SomeWorksMap longList={false} />
      <UiUxBanner />
      <MasterTouch />
      <MakeTogether />    
      <TheFacesMap longList={false}/>
      <Slider />    
      <BlogsMap longList={false} />
    </>
  );
}

export default HomePage;
