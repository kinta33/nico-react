import styled from "styled-components";

export const Textarea = (props) => {
  const { cols, rows, placeholder = "", setFunc } = props;
  const onChangeTextarea = (event) => setFunc(event.target.value);
  return (
    <STextarea
      cols={cols}
      rows={rows}
      onChange={onChangeTextarea}
      placeholder={placeholder}
    />
  );
};

const STextarea = styled.textarea`
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
