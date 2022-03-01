import styled from "styled-components";
import React from "react";

export const DefaultRadio = (props) => {
  const { select, onChange, text, value } = props;
  return (
    <SContainer>
      <SRadio
        type="radio"
        name="Vtype"
        value={value}
        checked={select === value}
        onChange={onChange}
      />
      <SRadioLabel />
      <div>{text}</div>
    </SContainer>
  );
};

const SContainer = styled.div`
  display: flex;
  align-items: center;
  height: 48px;
  position: relative;
`;

const SRadioLabel = styled.label`
  position: absolute;
  top: 25%;
  left: 4px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: white;
  border: 1px solid #bebebe;
`;

const SRadio = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  margin-right: 10px;
  &:hover ~ ${SRadioLabel} {
    background: #bebebe;
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 12px;
      height: 12px;
      margin: 6px;
      background: #eeeeee;
    }
  }
  ${(props) =>
    props.checked &&
    ` 
    &:checked + ${SRadioLabel} {
      background: #007290;
      border: 1px solid #007290;
      &::after {
        content: "";
        display: block;
        border-radius: 50%;
        width: 12px;
        height: 12px;
        margin: 6px;
        box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.1);
        background: white;
      }
    }
  `}
`;
