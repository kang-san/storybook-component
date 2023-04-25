import styled, { css } from "styled-components";

const irHidden = css`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
`;

const outlineFocus = css`
  outline: 2px solid #f97066;
  outline-offset: 2px;
`;

const shadowSmall = css`
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
`;

const Toggle = styled.div`
  display: flex;
  cursor: pointer;
`;

const ToggleInput = styled.input.attrs({ type: "checkbox" })`
  ${irHidden};

  &:focus + label {
    ${outlineFocus};
  }

  &:checked + label {
    background-color: #f97066;

    &:hover {
      background-color: #f97066;
    }

    &:active {
      background-color: #f97066;
    }

    &::after {
      left: calc(100% - 28px);
    }
  }
`;

const ToggleLabel = styled.label`
  position: relative;
  width: 52px;
  height: 30px;
  border-radius: 100px;
  background-color: #98a2b3;
  ${shadowSmall};
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #98a2b3;
  }

  &:active {
    background-color: #98a2b3;
  }

  &::after {
    content: "";
    position: absolute;
    width: 26px;
    height: 26px;
    left: 2px;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    background-color: #fff;
    border-radius: 50%;
    transition: left 0.2s ease-in-out;
  }
`;

export { Toggle, ToggleInput, ToggleLabel };
