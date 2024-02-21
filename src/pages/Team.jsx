/* eslint-disable no-unused-vars */
import MasterTouch from "../components/master-touch/MasterTouch";
import TheFacesMap from "../components/the-faces/TheFacesMap";
import TopBanner from "../components/top-banner/TopBanner";

function TeamPage() {
  return (
    <>
      <TopBanner title="Team" note="Home / Team" />
      <TheFacesMap longList={true} />
      <MasterTouch />
    </>
  );
}

export default TeamPage;
