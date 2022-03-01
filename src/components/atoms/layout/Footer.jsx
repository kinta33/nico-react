import styled from "styled-components";

export const Footer = () => {
  return <SFooter>&copy; 2022 NTT DATA</SFooter>;
};

const SFooter = styled.header`
  background-color: #11999e;
  color: #fff;
  text-align: center;
  padding: 8px 0;
  bottom: 0;
  width: 100%;
`;
