import styled from "styled-components";

const FoundersWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 880px;

  @media (max-width: 480px) {
    height: auto;
  }
`;

const FoundersTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const FoundersTitle = styled.span`
  color: #fff;
  text-align: center;
  font-size: 38px;
  font-style: normal;
  font-weight: 500;
  line-height: 48px;
  padding-bottom: 48px;

  @media (max-width: 480px) {
    padding-top: 56px;
  }
`;

const FoundersText = styled.span`
  color: #fff;
  text-align: center;
  font-family: Rubik;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  max-width: 644px;

  @media (max-width: 480px) {
    font-size: 18px;
    padding-left: 20px;
    padding-right: 20px;
  }
`;

const FoundersImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 72px;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

const FounderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-between;
  padding-left: 98px;
  justify-content: center;

  @media (max-width: 950px) {
    padding-left: 30px;
  }

  @media (max-width: 480px) {
    padding-left: 0px;
  }
`;

const FounderImage = styled.img`
  padding-bottom: 40px;
  width: 100%;
  max-width: 300px;
`;

const FounderName = styled.span`
  color: #fff;
  text-align: center;
  font-size: 28px;
  font-weight: 400;
  line-height: 32px;
  padding-bottom: 16px;
`;

const FounderPosition = styled.span`
  color: #fff;
  text-align: center;
  font-size: 24px;
  font-weight: 300;
  line-height: 32px;

  @media (max-width: 480px) {
    padding-bottom: 24px;
  }
`;

export {
  FoundersWrapper,
  FoundersTextWrapper,
  FoundersTitle,
  FoundersText,
  FoundersImageWrapper,
  FounderWrapper,
  FounderImage,
  FounderName,
  FounderPosition,
};
