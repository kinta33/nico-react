import styled from "styled-components";

export const Indent = (props) => {
  const { children } = props;
  return <SIndent>{children}</SIndent>;
};

const SIndent = styled.div`
  margin-left: 30px;
`;
