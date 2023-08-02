import { FunctionComponent, useRef } from "react";
import mobiles from "../../Assets/Images/features_section_image.png";
import textts from "../../Assets/Icons/texttospeech.png";
import discount from "../../Assets/Icons/getdiscount.png";
import plan from "../../Assets/Icons/plan.png";
import dark from "../../Assets/Icons/dark.png";

import {
  CheckOutSome,
  FText,
  FeatureIcon,
  FeatureTextWrapper,
  FeatureWrapper,
  ImageFeatureWrapper,
  SingleFeatureWrapper,
  StyledSpan,
  StyledTitle,
} from "./style";

const FeatureCard: FunctionComponent = () => {
  return (
    <FeatureWrapper id="features">
      <FeatureTextWrapper>
        <CheckOutSome>Check out some of our amazing features</CheckOutSome>
        <SingleFeatureWrapper>
          <FeatureIcon>
            <img src={textts} alt="textts" />
          </FeatureIcon>
          <FText>
            <StyledSpan>Explore your surroundings</StyledSpan>
            <StyledTitle>
            This innovative feature empowers you to explore all tourist attractions, no matter where you are in the world. With no need for additional apps or specific locations, you can effortlessly utilize this feature on your smartphone.
            </StyledTitle>
          </FText>
        </SingleFeatureWrapper>
        <SingleFeatureWrapper>
          <FeatureIcon>
            <img src={discount} alt="discount" />
          </FeatureIcon>
          <FText>
            <StyledSpan>Get tickets discount</StyledSpan>
            <StyledTitle>
            With this exclusive perk, you can enjoy discounted prices on tickets at all our partner attractions and restaurants. Unlock the full potential of your adventures as you explore various tourist destinations and savor delicious meals, all while saving money.
            </StyledTitle>
          </FText>
        </SingleFeatureWrapper>
        <SingleFeatureWrapper>
          <FeatureIcon>
            <img src={plan} alt="plan" />
          </FeatureIcon>
          <FText>
            <StyledSpan>Make a plan</StyledSpan>
            <StyledTitle>
            With this powerful tool, you can effortlessly save and organize your favorite places, creating personalized itineraries for your future adventures. Seamlessly save locations that pique your interest and explore them at your convenience.
            </StyledTitle>
          </FText>
        </SingleFeatureWrapper>
      </FeatureTextWrapper>
      <ImageFeatureWrapper>
        <img src={mobiles} alt="mobiles" />
      </ImageFeatureWrapper>
    </FeatureWrapper>
  );
};

export default FeatureCard;
