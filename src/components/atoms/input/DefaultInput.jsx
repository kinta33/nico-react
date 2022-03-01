import styled from "styled-components";

export const DefaultInput = (props) => {
  const { size = "100%", placeholder = "", setFunc } = props;
  const onChangeInput = (event) => setFunc(event.target.value);
  return (
    <SInput size={size} placeholder={placeholder} onChange={onChangeInput} />
  );
};

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
