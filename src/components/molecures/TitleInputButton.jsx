import styled from "styled-components";
import { Button } from "../atoms/button/Button";
import { DefaultInput } from "../atoms/input/DefaultInput";

export const TitleInputButton = (props) => {
  const {
    title,
    type,
    size,
    placeholder,

    setFunc,
    children,
    func,
    para,
    data,
    history
  } = props;
  return (
    <SContainer>
      {title}
      <DefaultInput
        type={type}
        size={size}
        placeholder={placeholder}
        setFunc={setFunc}
      />
      <Button func={func} para={para} data={data} history={history}>
        {children}
      </Button>
    </SContainer>
  );
};

const SContainer = styled.div`
  font-size: 20px;
`;
