import { ReactElement, ReactNode } from 'react';

type navType = {
  children: ReactNode;
};

export const Nav = ({ children }: navType): ReactElement => (
  <div role="navigation" aria-label="Main Menu" className="flex justify-center gap-4 md:gap-10 md:ml-8 mb-6 md:mb-0">
    {children}
  </div>
);