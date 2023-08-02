import { FunctionComponent } from "react";
import {
  NavRoot,
  TourWhisperer,
  Tourwhisperermailcom,
  FeaturesParent,
  Features,
  Logo,
  LogoIcon,
  TourWhisperer1,
} from "./style";

const Footer: FunctionComponent = () => {
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
        <LogoIcon alt="" src="/logo-icon1.svg" />
        <TourWhisperer1>Tour Whisperer</TourWhisperer1>
      </Logo>
      <FeaturesParent>
        <Features onClick={() => scrollToSection("features")}>
          Features
        </Features>
        <Features onClick={() => scrollToSection("founders")}>Team</Features>
        <Features onClick={() => scrollToSection("about")}>About</Features>
      </FeaturesParent>
      <Tourwhisperermailcom>info@codepolyglots.com</Tourwhisperermailcom>
      <TourWhisperer>Tour Whisperer © 2023 - All Rights Reserved</TourWhisperer>
    </NavRoot>
  );
};

export default Footer;
