import styled from "styled-components";

export const DefaultButton = (props) => {
  const register = (para) => {
    alert(para);
    alert(children);
    if (history !== "") {
      his.setHistoryList([...his.historyList, history]);
    }
  };
  const {
    children,
    func = () => register(para),
    para,
    his,
    history = children
  } = props;
  return <SButton onClick={() => func(para)}>{children}</SButton>;
};

const SButton = styled.button`
  margin: 5px;
  padding: 5px 15px;

  font-size: 18px;
  text-align: center;
  vertical-align: middle;
  text-decoration: none;

  border: 2px solid #555555;
  border-radius: 10px;

  cursor: pointer;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;
