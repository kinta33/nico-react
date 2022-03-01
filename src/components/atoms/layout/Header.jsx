import styled from "styled-components";
import picNicologo from "./pictures/nicologolong.png";

export const Header = () => {
  return (
    <SHeader>
      <div>
        <SImg src={picNicologo} alt="[ロゴ]" />
      </div>
    </SHeader>
  );
};

const SHeader = styled.header`
  max-height: 64px;
  height: auto;
  background-color: #000;
  text-align: center;
  padding: 0 0;
  width: auto;
`;
const SImg = styled.img`
  max-height: 64px;
  max-width: 100%;
  @media screen and (max-width: 568px) {
    max-width: 100%;
    height: auto;
  }
`;
