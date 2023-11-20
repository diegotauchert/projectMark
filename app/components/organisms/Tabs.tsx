import { ReactElement, ReactNode } from 'react';

type tabsType = {
  children: ReactNode;
};

export const Tabs = ({ children }: tabsType): ReactElement => (
  <div role="list" className="tabs flex mt-10 mb-16 gap-4">
    {children}
  </div>
);