import { ReactElement, ReactNode } from 'react';

type titleType = {
  children: ReactNode;
};

export const Title = ({ children }: titleType): ReactElement => (
  <h1 className="font-semibold text-title text-gray800 mt-4">{children}</h1>
);