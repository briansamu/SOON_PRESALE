import Navbar from '../components/Navbar/Navbar';
import PresaleSection from '../components/PresaleSection/PresaleSection';

// import { Web3Button } from "@web3modal/react";

const HomePage = () => {
  return <>
    <Navbar />
    <PresaleSection />
    {/* <Web3Button icon='show' label='Connect Wallet' balance='show'/> */}
  </>;
};

export default HomePage;
