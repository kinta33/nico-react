import styled from "styled-components";

export const Button = (props) => {
  const register = (para) => {
    alert(
      history +
        "," +
        para +
        "," +
        data.group +
        "," +
        data.color +
        "," +
        data.size +
        "," +
        data.speed
    );
    if (history !== "") {
      data.his.setHistoryList([...data.his.historyList, history]);
    }
  };
  const {
    children,
    func = () => register(para),
    para,
    data,
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
  @media screen and (max-width: 1024px) {
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
  background: blue;
  border: 2px solid blue;
  &:active {
    background: blue;
  }
`;
const VoteButton = styled(SButton)`
  background: #f8b500;
  border: 2px solid #ff8c00;
  &:active {
    background: #ff8500;
  }
  @media screen and (max-width: 568px) {
    margin: 5px;
    border-radius: 0.3em;
    height: 50px;
    width: 50px;
  }
`;
