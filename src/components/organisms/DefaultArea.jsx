import styled from "styled-components";

export const DefaultArea = (props) => {
  const { children, pic } = props;
  return (
    <SContainer>
      <STitle>
        <SImage src={pic} alt="[グループ]" />
      </STitle>
      {children}
    </SContainer>
  );
};

const SContainer = styled.div`
  width: 96%;
  font-size: 20px;
  position: relative;
  margin: 45px 0px;
  padding: 5px 10px;
  border: solid 3px #000000;
  border-radius: 0 8px 8px 8px;
  background: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5);
  @media screen and (max-width: 568px) {
    max-width: 94%;
    margin: 2em 0em;
    padding: 2%;
  }
`;

const STitle = styled.span`
  position: absolute;
  display: inline-block;
  top: -38px;
  left: -3px;
  padding: 0 9px;
  height: 38px;
  line-height: 38px;
  background: #000000;
  border-radius: 5px 5px 0 0;
  box-shadow: 2px 0 3px rgba(0, 0, 0, 0.5);
`;
const SImage = styled.img`
  width: auto;
  height: 35px;
`;
