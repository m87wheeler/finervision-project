import styled, { css } from "styled-components";
import { ISCElementProps } from "./TextInput.types";

export const ElementStyles = css`
  height: 100%;
  width: 100%;
  padding: 0.5rem 0.75rem;
  font-size: var(--font-sm);
  border: none;
  border-radius: var(--border-radius);
  box-shadow: var(--inset-shadow);
`;

export const Element = styled.input<ISCElementProps>`
  ${ElementStyles};
  text-align: ${(p) => p.textAlign};

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &[type="number"] {
    -moz-appearance: textfield;
  }
`;

export const TextArea = styled.textarea`
  ${ElementStyles};
  resize: none;
  font-family: inherit;
`;
