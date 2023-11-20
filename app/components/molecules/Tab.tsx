import { ReactElement, ReactNode } from 'react';

type tabType = {
  text: string;
};

export const Tab = ({ text }: tabType): ReactElement => (
  <div className="tab">
    <input type="checkbox" id={`input-${text}`} />
    <label htmlFor={`input-${text}`}>{text}</label>
  </div>
);