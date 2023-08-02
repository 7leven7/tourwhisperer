import { FunctionComponent, useRef } from "react";
import {
  NavRoot,
  GooglePlayParent,
  GooglePlayIcon,
  AppStoreIcon,
  FeaturesParent,
  Features,
  Logo,
  LogoIcon,
  TourWhisperer,
} from "./style";

const Header: FunctionComponent = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <NavRoot>
      <Logo>
        <LogoIcon alt="" src="/logo-icon.svg" />
        <TourWhisperer>Tour Whisperer</TourWhisperer>
      </Logo>
      <FeaturesParent>
        <Features onClick={() => scrollToSection("features")}>
          Features
        </Features>
        <Features onClick={() => scrollToSection("founders")}>Team</Features>
        <Features onClick={() => scrollToSection("about")}>About</Features>
      </FeaturesParent>
      <GooglePlayParent>
        <GooglePlayIcon alt="" src="/google-play@2x.png" />
        <AppStoreIcon alt="" src="/app-store@2x.png" />
      </GooglePlayParent>
    </NavRoot>
  );
};

export default Header;
