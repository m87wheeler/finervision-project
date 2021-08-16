import { Container } from "./Grid.style";
import { IGridProps } from "./Grid.types";

const Grid: React.FC<IGridProps> = ({
  gridTemplateRows,
  gridTemplateColumns,
  gridTemplateAreas,
  gap,
  rowGap,
  columnGap,
  alignItems,
  alignContent,
  justifyItems,
  justifyContent,
  alignSelf,
  justifySelf,
  children,
  style,
}) => {
  return (
    <Container
      gridTemplateRows={gridTemplateRows}
      gridTemplateColumns={gridTemplateColumns}
      gridTemplateAreas={gridTemplateAreas}
      gap={gap}
      rowGap={rowGap}
      columnGap={columnGap}
      alignItems={alignItems}
      alignContent={alignContent}
      justifyItems={justifyItems}
      justifyContent={justifyContent}
      alignSelf={alignSelf}
      justifySelf={justifySelf}
      style={style}
    >
      {children}
    </Container>
  );
};

export default Grid;
