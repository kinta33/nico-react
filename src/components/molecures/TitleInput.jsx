import styled from "styled-components";
import { DefaultInput } from "../atoms/input/DefaultInput";

export const TitleInput = (props) => {
  const { title, size, placeholder, setFunc } = props;
  return (
    <SContainer>
      {title}
      <DefaultInput size={size} placeholder={placeholder} setFunc={setFunc} />
    </SContainer>
  );
};

const SContainer = styled.div`
  font-size: 20px;
`;
