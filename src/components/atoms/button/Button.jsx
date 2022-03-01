import styled from "styled-components";

export const Button = (props) => {
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
    history = children,
    vote,
    nice
  } = props;
  if (nice) {
    return <NiceButton onClick={() => func(para)}>{children}</NiceButton>;
  } else if (vote) {
    return <VoteButton onClick={() => func(para)}>{children}</VoteButton>;
  } else {
    return <SButton onClick={() => func(para)}>{children}</SButton>;
  }
};

//voteだけスタイルを変えたい時はvote=trueになっているので、それを使って変更する。(どうするかは要調査^^;)
const SButton = styled.button`
  margin: 5px;
  padding: 5px 15px;

  font-size: 18px;
  color: #fff;
  text-align: center;
  vertical-align: middle;
  text-decoration: none;

  border: 2px solid #192f60;
  border-radius: 10px;
  background: #19448e;
  width: auto;
  cursor: pointer;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
  &:active {
    color: #ffffff;
    background: #192f60;
    opacity: 0.8;
  }

  @media screen and (max-width: 568px) {
    height: 2em;
    width: 98%;
    font-size: 0.9em;
    margin: 0.3em;
    padding: 0.3em;
    line-height: 0;
    letter-spacing: 0em;
    margin-top: 0.3em; /*段落と段落の間*/
    margin-bottom: 0em;
  }
`;

const NiceButton = styled(SButton)`
  background: #00afcc;
  border: 2px solid #008db7;
  &:active {
    background: #008db7;
  }
`;
const VoteButton = styled(SButton)`
  @media screen and (max-width: 568px) {
    margin: 5px;
    border-radius: 0.3em;
    height: 50px;
    width: 50px;
  }
`;
