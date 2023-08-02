import { FunctionComponent } from "react";

import FeatureCard from "../components/FeatureCard/FeatureCard";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import dot from "../Assets/Icons/Rectangle 1.svg";
import google from "../Assets/Icons/pngwing 1.svg";
import app from "../Assets/Icons/pngwing 2.svg";
import headerImage from "../Assets/Images/header_image.png";

import {
  LandingDesktopRoot,
  Pngwing2Icon,
  AvailableOnAndroid,
  PersonalizedAndInteractive,
  UserFriendlyInterfaceFor,
  ImageWrapper,
  InfoWrapper,
  TextWrapper,
  IconWrapper,
} from "./style";
import FoundersPage from "../components/FoundersPage/FoundersPage";
import OurStoryPage from "../components/OurStoryPage/OurStoryPage";

const LandingDesktop: FunctionComponent = () => {
  return (
    <LandingDesktopRoot>
      <Header />
      <InfoWrapper>
        <TextWrapper>
          <AvailableOnAndroid>
            <img src={dot} alt="dot" style={{ paddingRight: "3px" }} />
            Coming soon for Android and iOS.
          </AvailableOnAndroid>
          <PersonalizedAndInteractive>
            Personalized and interactive travel experiences based on your
            interest.
          </PersonalizedAndInteractive>
          <UserFriendlyInterfaceFor>{`Discover the world like never before with our groundbreaking app that uncovers personalized and interactive travel experiences, no matter where you are on this magnificent planet. From bustling cities to remote paradises, immerse yourself in a globe-trotting adventure designed to match your interests and desires. With exclusive ticket discounts and a wealth of attractions at your fingertips, the world becomes your playground. Let the exploration of a lifetime unfold!`}</UserFriendlyInterfaceFor>
          <IconWrapper>
            <img alt="" src={google} />
            <Pngwing2Icon alt="" src={app} />
          </IconWrapper>
        </TextWrapper>
        <ImageWrapper>
          <img
            src={headerImage}
            alt="image"
            style={{
              width: "100%",
              maxWidth: "800px",
              minWidth: "400px",
              paddingBottom: "50px",
            }}
          />
        </ImageWrapper>
      </InfoWrapper>
      <FeatureCard />
      <FoundersPage />
      <OurStoryPage />
      <Footer />
    </LandingDesktopRoot>
  );
};

export default LandingDesktop;
