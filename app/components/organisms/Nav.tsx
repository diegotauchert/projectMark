import { ReactElement, ReactNode } from 'react';

type navType = {
  children: ReactNode;
};

export const Nav = ({ children }: navType): ReactElement => (
  <div role="navigation" aria-label="Main Menu" className="flex gap-10 ml-8">
    {children}
  </div>
);