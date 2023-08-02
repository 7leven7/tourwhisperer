import React, { useRef } from "react";
import google from "../../Assets/Icons/pngwing 1.svg";
import apple from "../../Assets/Icons/pngwing 2.svg";
import {
  IconsWrapper,
  OurStoryText,
  OurStoryTextWrapper,
  OurStoryTitle,
  OurStoryWrapper,
} from "./style";
import { IconWrapper, Pngwing2Icon } from "../../pages/style";

const OurStoryPage = () => {
  return (
    <OurStoryWrapper id="about">
      <OurStoryTextWrapper>
        <OurStoryTitle>Our Story</OurStoryTitle>
        <OurStoryText>
        We are a trio of avid travelers, each with a strong engineering background, bound together by a shared vision to revolutionize travel experiences. Inspired by our global adventures, we proudly present our innovative app, where cutting-edge technology merges seamlessly with boundless wanderlust.
Our mission is simple yet profound: to empower travelers like you with personalized adventures and unlock exclusive ticket discounts worldwide. Whether you seek hidden gems or renowned landmarks, our app is designed to cater to your unique interests and make every journey unforgettable.
Join us on this thrilling and unforgettable journey of exploration, where cherished memories await – one adventure at a time. Together, let's redefine the way you discover the world, creating moments that will stay with you forever.
        </OurStoryText>
      </OurStoryTextWrapper>
      <IconsWrapper>
        <img src={google} alt="google" />
        <Pngwing2Icon alt="" src={apple} />
      </IconsWrapper>
    </OurStoryWrapper>
  );
};

export default OurStoryPage;
