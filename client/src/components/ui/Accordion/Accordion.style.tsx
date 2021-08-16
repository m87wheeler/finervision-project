import styled, { css } from "styled-components";

export const Container = styled.div`
  max-width: 60rem;
  margin: 0 auto;
  padding: 0.25rem;
  display: flex;
  flex-flow: column nowrap;
  gap: 0.25rem;
  background: var(--white);
  border-radius: 0.5rem;
  box-shadow: var(--drop-shadow);
`;

export const Section = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  grid-template-areas:
    "banner"
    "content";
  background: var(--form-bg);
  border-radius: var(--border-radius);
`;

export const Banner = styled.div`
  width: 100%;
  height: 3.5rem;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  background: linear-gradient(to bottom, var(--primary), var(--primary-dark));
  color: var(--white);
  font-size: var(--font-md);
  text-shadow: 1px 1px 2px var(--black);
  border-radius: inherit;
  cursor: pointer;

  &:hover {
    filter: brightness(1.025);
  }
`;

export const Content = styled.div<{ active: boolean }>`
  height: 100%;
  width: 100%;
  max-height: ${(p) => (p.active ? "100vh" : "0")};
  padding: ${(p) => (p.active ? "1rem" : "0 1rem")};
  display: flex;
  flex-flow: column nowrap;
  gap: 0.25em;
  overflow: hidden;
  transition: all 0.3s ease-in-out;

  ${(p) =>
    p.active &&
    css`
      transition-delay: 0.3s;
    `}
`;
