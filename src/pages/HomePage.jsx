import Navbar from '../components/Navbar/Navbar';
import PresaleSection from '../components/PresaleSection/PresaleSection';
import BannerSection from '../components/BannerSection/BannerSection';
import WhitepaperSection from '../components/WhitepaperSection/WhitepaperSection';

// import { Web3Button } from "@web3modal/react";

const HomePage = () => {
  return <>
    <Navbar />
    <PresaleSection />
    <BannerSection />
    <WhitepaperSection />
    {/* <Web3Button icon='show' label='Connect Wallet' balance='show'/> */}
  </>;
};

export default HomePage;
