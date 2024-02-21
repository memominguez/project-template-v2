import TopBanner from "../components/top-banner/TopBanner";
import WeProvide from "../components/we-provide/WeProvide";
import DisplayStopwatches from "../components/display-stopwatches/DisplayStopwatches";
import MasterTouch from "../components/master-touch/MasterTouch";
import Slider from "../components/slider/Slider";
import MakeTogether from "../components/make-together/MakeTogether";
import TheFacesMap from "../components/the-faces/TheFacesMap";

function AboutUsPage() {
  return (
    <>
      <TopBanner title="About Us" note="Home / About Us" />
      <WeProvide />
      <DisplayStopwatches />
      <MasterTouch />
      <Slider />
      <MakeTogether />
      <TheFacesMap longList={false} />
    </>
  );
}

export default AboutUsPage;
