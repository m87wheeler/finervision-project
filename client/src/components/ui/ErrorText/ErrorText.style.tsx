import styled from "styled-components";

export const Text = styled.p<{ error: boolean }>`
  width: 100%;
  height: 2rem;
  text-align: center;
  color: var(--danger);
  font-weight: 700;
  text-align: center;
  opacity: ${(p) => (p.error ? "1" : "0")};
  transition: opacity 0.3s ease-in-out;
`;
