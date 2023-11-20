import { ReactElement, ReactNode } from 'react';

type navType = {
  children: ReactNode;
};

export const Nav = ({ children }: navType): ReactElement => (
  <div role="navigation" aria-label="Main Menu" className="flex gap-4 md:gap-10 ml-8 mb-6 md:mb-0">
    {children}
  </div>
);