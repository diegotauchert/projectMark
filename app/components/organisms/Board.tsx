import { ReactElement, ReactNode } from 'react';

type boardType = {
  children: ReactNode;
};

export const Board = ({ children }: boardType): ReactElement => (
  <div className="board md:grid md:flex-1 w-full grid-flow-col auto-cols-fr grid-rows-1 gap-4 h-full justify-items-stretch items-stretch">
    {children}
  </div>
);