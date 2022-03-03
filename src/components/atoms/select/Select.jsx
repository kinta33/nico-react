import styled from "styled-components";

export const Select = (props) => {
  const { contents, contentsValue = contents, setFunc, title, value } = props;
  const onChangeList = (event) => setFunc(event.target.value);
  const options = [];

  for (let i = 0; i < contents.length; i++) {
    options.push(
      <option key={i} value={contentsValue[i]}>
        {contents[i]}
      </option>
    );
  }

  return (
    <SNowrap>
      {title === "" ? "" : `${title} `}
      <SList value={value} onChange={onChangeList}>
        {options}
      </SList>
      　
    </SNowrap>
  );
};
//voteだけスタイルを変えたい時はvote=trueになっているので、それを使って変更する。(どうするかは要調査^^;)
const SList = styled.select`
  margin: 2%;
  padding: 5px 15px;

  font-size: 18px;
  text-align: left;
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

const SNowrap = styled.div`
  display: inline-block;
`;
