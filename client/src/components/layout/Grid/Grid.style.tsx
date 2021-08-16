import styled from "styled-components";
import { ISCContainerProps } from "./Grid.types";

export const Container = styled.div<ISCContainerProps>`
  display: grid;
  grid-template-rows: ${(p) => p.gridTemplateRows || "auto"};
  grid-template-columns: ${(p) => p.gridTemplateColumns || "auto"};
  grid-template-areas: ${(p) => p.gridTemplateAreas};
  gap: ${(p) => p.gap};
  row-gap: ${(p) => p.rowGap};
  column-gap: ${(p) => p.columnGap};
  align-items: ${(p) => p.alignItems};
  align-content: ${(p) => p.alignContent};
  justify-items: ${(p) => p.justifyItems};
  justify-content: ${(p) => p.justifyContent};
  align-self: ${(p) => p.alignSelf};
  justify-self: ${(p) => p.justifySelf};
`;
