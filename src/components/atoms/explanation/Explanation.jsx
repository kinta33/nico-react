import styled from "styled-components";

export const Explanation = (props) => {
  const { children } = props;
  return <SExplanation>{children}</SExplanation>;
};

const SExplanation = styled.p`
  margin: 0px;
  padding: 0px 0px;
  font-size: 15px;
  text-align: left;
  text-decoration: none;
  border: none;
`;
