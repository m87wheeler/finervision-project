import { ReactElement } from "react";

export interface IView {
  _id: string;
  title: string;
  component: ReactElement;
}

export interface IAccordionProps {
  onNext: () => void;
  onSubmit: () => void;
  onSelect: (n: number) => void;
  views: IView[];
  activeView: number;
}
