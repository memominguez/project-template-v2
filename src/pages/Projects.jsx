/* eslint-disable no-unused-vars */
import TopBanner from "../components/top-banner/TopBanner";
import SomeWorksMap from "../components/some-of-our-works/SomeWorksMap";
import MakeTogether from "../components/make-together/MakeTogether";
import Slider from "../components/slider/Slider";

function ProjectsPage() {
  return (
    <>
      <TopBanner title="Projects" note="Home / Projects" />
      <SomeWorksMap longList={true} />
      <MakeTogether />
      <Slider />
    </>
  );
}

export default ProjectsPage;
