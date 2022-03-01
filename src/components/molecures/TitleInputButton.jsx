import styled from "styled-components";
import { Button } from "../atoms/button/Button";
import { DefaultInput } from "../atoms/input/DefaultInput";

export const TitleInputButton = (props) => {
  const {
    title,
    size,
    placeholder,
    setFunc,
    children,
    func,
    para,
    his,
    history
  } = props;
  return (
    <SContainer>
      {title}
      <DefaultInput size={size} placeholder={placeholder} setFunc={setFunc} />
      <Button func={func} para={para} his={his} history={history}>
        {children}
      </Button>
    </SContainer>
  );
};

const SContainer = styled.div`
  font-size: 20px;
`;
