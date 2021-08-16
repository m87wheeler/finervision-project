export interface ISCContainerProps {
  gridTemplateRows?: string;
  gridTemplateColumns?: string;
  gridTemplateAreas?: string;
  gap?: string;
  rowGap?: string | number;
  columnGap?: string | number;
  alignItems?: string;
  alignContent?: string;
  justifyItems?: string;
  justifyContent?: string;
  alignSelf?: string;
  justifySelf?: string;
}

export interface IGridProps extends ISCContainerProps {
  style?: React.CSSProperties;
}
