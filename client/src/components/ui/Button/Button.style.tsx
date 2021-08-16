import styled from "styled-components";

export const Element = styled.button`
  min-width: 7rem;
  padding: 0.35rem 1rem;
  background: linear-gradient(
    to bottom,
    var(--secondary),
    var(--secondary-light)
  );
  color: var(--white);
  border: none;
  border-radius: var(--border-radius);
  font-size: var(--font-sm);
  letter-spacing: 0.025em;
  cursor: pointer;

  &:hover {
    filter: brightness(1.05);
  }
`;
