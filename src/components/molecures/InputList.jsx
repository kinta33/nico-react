import styled from "styled-components";

export const InputList = (props) => {
  const { title, size, placeholder = "", listState } = props;

  const onChangeList = (event) => {
    const num = Number(event.target.id);
    const tmp = [...listState.list];
    tmp[num] = event.target.value;
    listState.setList(tmp);
    //listNumもnumも0起算
    alert(listState.listNum + "=" + (num + 1));
    if (listState.listNum === num + 1 && listState.listNum < title.length)
      listState.setListNum(listState.listNum + 1);
  };

  const list = [];
  for (let i = 0; i < listState.listNum; i++) {
    list.push(
      <SContainer key={i}>
        {title[i]}
        <SInput
          id={i}
          size={size}
          placeholder={placeholder}
          onChange={onChangeList}
          value={listState.list[i]}
        />
      </SContainer>
    );
  }
  return list;
};

const SContainer = styled.div`
  font-size: 20px;
`;

const SInput = styled.input`
  background: #ffffff;
  margin: 10px;
  padding: 3px;
  font-size: 20px;
  border: 2px solid #000000;
  border-radius: 5px;
  max-width: 95%;
  &:focus {
    color: #000000;
    background: #ffffff;
    border-color: dodgerBlue;
    box-shadow: 0 0 8px 0 dodgerBlue;
    outline: 0; /*chromeでの見え方調整用*/
  }
`;
