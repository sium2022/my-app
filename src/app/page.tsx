import Header from "./component/common/1-header";
import Banner from "./component/common/2-banner";
import OurClients from "./component/common/3-our-client";
import AboutUs from "./component/common/4-about-us";
import OurSupportPartner from "./component/common/5-our-support-partner";
import Service from "./component/common/6-service";
import Founder from "./component/common/7-founder";
import Team from "./component/common/8-team";
import SteveJobs from "./component/common/9-stevejobs";
import CeoQuote from "./component/common/11-ceoquote";
import Footer1 from "./component/common/12-footer1";
import Footer2 from "./component/common/13-footer2";
import Footer3 from "./component/common/14-footer3";

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
      <CeoQuote/>
      <Footer1/>
      <Footer2/>
      <Footer3/>

    </main>
  );
}
