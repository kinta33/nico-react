import styled from "styled-components";
import picNicologo from "/src/pictures/nicologolong.png";

export const DefaultLayout = () => {
  return (
    <SHeader>
      <div>
        <img src={picNicologo} alt="[nicoロゴ]" />
      </div>
    </SHeader>
  );
};

const SHeader = styled.header`
  background-color: #11999e;
  color: #fff;
  text-align: center;
  padding: 0 0;
`;
