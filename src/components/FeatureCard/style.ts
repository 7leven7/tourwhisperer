import styled from "styled-components";

const FeatureWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: auto;
  background-color: white;
  border-radius: 24px 24px 0px 0px;
  overflow: hidden;

  @media screen and (max-width: 440px) {
    flex-direction: column;
    height: auto;
  }
`;

const FeatureTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: baseline;
  padding: 110px 0px 110px 212px;
  text-align: left;

  @media screen and (max-width: 440px) {
    padding: 24px;
    align-items: center;
    order: 1;
  }
`;

const ImageFeatureWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  max-width: 700px;
  flex: 1;

  img {
    width: 100%;
    max-width: 100%;
    height: auto;
    transform-origin: bottom right;
    transform: scale(1);
    object-fit: contain;
    @media screen and (max-width: 768px) {
      transform: scale(1);
    }
  }

  @media screen and (max-width: 768px) {
    order: -1;
  }

  @media screen and (max-width: 440px) {
    order: 2;
    width: 100%;
    overflow: hidden;
  }
`;

const CheckOutSome = styled.div`
  display: flex;
  color: var(--off-black);
  font-size: 40px;
  line-height: 48px;
  font-weight: 600;
  width: 525px;
  padding-bottom: 56px;

  @media screen and (max-width: 440px) {
    text-align: left;
    max-width: 311px;
    font-size: 32px;
    line-height: 40px;
  }
`;

const SingleFeatureWrapper = styled.div`
  display: flex;
`;

const FText = styled.div`
  display: flex;
  flex-direction: column;
`;

const FeatureIcon = styled.div`
  display: flex;
  width: fit-content;
  height: fit-content;
  padding-right: 12px;
`;

const StyledSpan = styled.span`
  color: #2c3239;
  font-family: Rubik;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 28px;
  padding-bottom: 8px;

  @media screen and (max-width: 440px) {
    font-size: 20px;
  }
`;

const StyledTitle = styled.span`
  color: var(--off-black);
  text-align: left;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  max-width: 304px;
  padding-bottom: 24px;

  @media screen and (max-width: 440px) {
    font-size: 16px;
  }
`;

export {
  FeatureWrapper,
  FeatureTextWrapper,
  ImageFeatureWrapper,
  CheckOutSome,
  StyledSpan,
  StyledTitle,
  SingleFeatureWrapper,
  FText,
  FeatureIcon,
};
