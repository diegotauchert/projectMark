import { ReactElement, ReactNode } from 'react';

type tabsType = {
  children: ReactNode;
};

export const Tabs = ({ children }: tabsType): ReactElement => (
  <div className="tabs flex my-8 gap-4">
    {children}
  </div>
);