import { ReactElement, ReactNode } from 'react';

type titleType = {
  children: ReactNode;
};

export const Title = ({ children }: titleType): ReactElement => (
  <h1 className="font-semibold text-lg md:text-title text-gray800 mt-4">{children}</h1>
);