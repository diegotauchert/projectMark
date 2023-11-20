import { ReactElement, ReactNode } from 'react';

type titleType = {
  children: ReactNode;
};

export const Title = ({ children }: titleType): ReactElement => (
  <h1 className="font-bold text-title text-gray800">{children}</h1>
);