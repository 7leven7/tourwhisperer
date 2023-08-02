import styled from "styled-components";

const NavRoot = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: var(--off-black);
  height: 72px;

  font-size: var(--font-size-base);
  color: var(--white);
  font-family: var(--font-rubik);
  z-index: 1;

  @media (max-width: 480px) {
    justify-content: space-around;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  font-size: var(--font-size-5xl);
`;

const GooglePlayParent = styled.div`
  display: flex;
  align-items: center;
  gap: var(--gap-xs);

  @media (max-width: 790px) {
    display: none;
  }

  @media (max-width: 480px) {
    display: none;
  }
`;

const FeaturesParent = styled.div`
  display: flex;
  align-items: center;
  gap: var(--gap-21xl);
`;

const GooglePlayIcon = styled.img`
  width: 125px;
  height: 38px;
  object-fit: cover;
`;
const AppStoreIcon = styled.img`
  width: 125px;
  height: 39px;
  object-fit: cover;
`;

const Features = styled.div`
  line-height: 28px;
  cursor: pointer;
`;

const LogoIcon = styled.img`
  width: 28px;
  height: 28.31px;
`;
const TourWhisperer = styled.div`
  line-height: 36px;
  font-weight: 500;
  @media (max-width: 480px) {
    display: none;
  }
`;

export {
  GooglePlayIcon,
  AppStoreIcon,
  GooglePlayParent,
  Features,
  FeaturesParent,
  LogoIcon,
  TourWhisperer,
  Logo,
  NavRoot,
};
