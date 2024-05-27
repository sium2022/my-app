import Header from "./component/common/1-header";
import Banner from "./component/common/2-banner";
import OurClients from "./component/common/3-our-client";
import AboutUs from "./component/common/4-about-us";
import OurSupportPartner from "./component/common/5-our-support-partner";
import Service from "./component/common/6-service";
import Founder from "./component/common/7-founder";
import Team from "./component/common/8-team";
import SteveJobs from "./component/common/9-stevejobs";

export default function Home() {
  return (
    <main>

      <Header/>
      <Banner/>
      <OurClients/>
      <AboutUs/>
      <OurSupportPartner/>
      <Service/>
      <Founder/>
      <Team/>
      <SteveJobs/>

    </main>
  );
}
