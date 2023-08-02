import styled from "styled-components";

const NavRoot = styled.div`
  width: 100%;
  height: 46px;
  bottom: 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: "1B2027";
  height: 72px;
  font-size: var(--font-size-base);
  color: var(--white);
  font-family: var(--font-rubik);

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
    height: auto;
    padding: 12px 24px;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: var(--gap-11xs);
  font-size: var(--font-size-5xl);
  padding-left: 104px;

  @media (max-width: 480px) {
    padding-left: 0px;
    padding-bottom: 28px;
  }
`;

const TourWhisperer = styled.div`
  display: flex;
  line-height: 32px;
  font-weight: 300;
  padding-right: 104px;

  @media (max-width: 480px) {
    padding-right: 0px;
  }
`;

const Tourwhisperermailcom = styled.div`
  display: flex;
  line-height: 32px;
  font-weight: 500;

  @media (max-width: 480px) {
    padding-bottom: 16px;
  }
`;

const FeaturesParent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    padding-bottom: 16px;
  }
`;

const Features = styled.div`
  display: flex;
  line-height: 28px;
  cursor: pointer;
`;

const LogoIcon = styled.img`
  width: 28px;
  height: 28.31px;
`;

const TourWhisperer1 = styled.span`
  line-height: 36px;
  font-weight: 500;
`;

export {
  NavRoot,
  TourWhisperer,
  Tourwhisperermailcom,
  FeaturesParent,
  Features,
  LogoIcon,
  TourWhisperer1,
  Logo,
};
