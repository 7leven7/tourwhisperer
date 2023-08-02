import React, { useRef } from "react";
import founder1 from "../../Assets/Images/Ellipse 8.png";
import founder2 from "../../Assets/Images/Ellipse 9.png";
import founder3 from "../../Assets/Images/Ellipse 10.png";

import {
  FoundersWrapper,
  FoundersTextWrapper,
  FoundersTitle,
  FoundersText,
  FoundersImageWrapper,
  FounderWrapper,
  FounderImage,
  FounderName,
  FounderPosition,
} from "./style";

const Founders = () => {
  return (
    <FoundersWrapper id="founders">
      <FoundersTextWrapper>
        <FoundersTitle>Founders</FoundersTitle>
      </FoundersTextWrapper>
      <FoundersImageWrapper>
        <FounderWrapper>
          <FounderImage src={founder1} alt="founder1" />
          <FounderName>Branko Kragovic</FounderName>
          <FounderPosition>Co-founder</FounderPosition>
        </FounderWrapper>
        <FounderWrapper>
          <FounderImage src={founder2} alt="founder2" />
          <FounderName>Strahinja Stanojevic</FounderName>
          <FounderPosition>Co-founder</FounderPosition>
        </FounderWrapper>
        <FounderWrapper>
          <FounderImage src={founder3} alt="founder2" />
          <FounderName>Uros Karic</FounderName>
          <FounderPosition>Co-founder</FounderPosition>
        </FounderWrapper>
      </FoundersImageWrapper>
    </FoundersWrapper>
  );
};

export default Founders;
