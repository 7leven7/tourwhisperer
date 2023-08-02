import styled from "styled-components";

const OurStoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(91.35deg, #fa485e 51.71%, #fb6645 100%);
  background-repeat: no-repeat;
  background-size: cover;
  height: auto;
  border-radius: 24px 24px 0px 0px;

  @media (max-width: 480px) {
    padding-bottom: 60px;
  }
`;

const OurStoryTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 72px;
  padding-bottom: 48px;
`;

const OurStoryTitle = styled.span`
  color: "#fff";
  text-align: center;
  font-size: 38px;
  font-weight: 500;
  line-height: 48px;
  padding-bottom: 48px;
`;

const OurStoryText = styled.span`
  color: "#fff";
  text-align: center;
  font-size: 20px;
  font-weight: 400;
  line-height: 32px;
  max-width: 644px;

  @media (max-width: 480px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`;

const OurStoryImageWrapper = styled.div`
  display: flex;
`;

const IconsWrapper = styled.div`
  display: flex;
  justify-content: flex-start;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
  }
`;

export {
  OurStoryWrapper,
  OurStoryTextWrapper,
  OurStoryTitle,
  OurStoryText,
  OurStoryImageWrapper,
  IconsWrapper,
};
