import React from "react";

export interface IOption {
  _id: string;
  value: string | number;
}

export interface ISelectProps {
  id?: string;
  label?: string;
  name: string;
  value: string;
  options: IOption[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  style?: React.CSSProperties;
}
