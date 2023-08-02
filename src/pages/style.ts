import styled from "styled-components";

const LandingDesktopRoot = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--dark-mode-lightest);
  width: 100%;
  height: 100%;
  text-align: center;
  font-size: var(--font-size-xl);
  color: var(--white);
  font-family: var(--font-rubik);
`;

const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 621px;
  overflow: hidden;

  @media (max-width: 480px) {
    flex-direction: column;
    height: auto;
    padding-top: 48px;
    padding-left: 20px;
    padding-right: 20px;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  padding-left: 200px;

  @media (max-width: 480px) {
    padding-left: 32px;
  }
`;

const AvailableOnAndroid = styled.div`
  display: flex;
  line-height: 28px;
`;

const PersonalizedAndInteractive = styled.div`
  display: flex;
  font-size: 48px;
  line-height: 56px;
  text-align: left;
  max-width: 644px;
  padding-top: 16px;

  @media (max-width: 480px) {
    font-size: 36px;
    line-height: 44px;
  }
`;

const UserFriendlyInterfaceFor = styled.div`
  display: flex;
  line-height: 32px;
  font-weight: 300;
  text-align: left;
  max-width: 644px;
  padding-top: 16px;
  padding-bottom: 8px;

  @media (max-width: 480px) {
    font-size: 18px;
    line-height: 28px;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: flex-start;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
    padding-right: 35px;
  }
`;

const Pngwing2Icon = styled.img`
  padding-top: 21px;

  @media (max-width: 480px) {
    padding-top: 0px;
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  max-width: fit-content;
`;

export {
  Pngwing2Icon,
  AvailableOnAndroid,
  PersonalizedAndInteractive,
  UserFriendlyInterfaceFor,
  LandingDesktopRoot,
  InfoWrapper,
  TextWrapper,
  ImageWrapper,
  IconWrapper,
};
