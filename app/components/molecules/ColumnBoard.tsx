import { ReactElement } from 'react';
import { boardColumnVariantEnum } from 'app/enums/variant'

type columnBoardType = {
  variant: boardColumnVariantEnum;
  name: string;
  enable: boolean;
};

export const ColumnBoard = ({ variant, name, enable }: columnBoardType): ReactElement => {
  const colorVariants = {
    s1: {bg: 'bg-s1Lighter', title: 'text-s1Darker', marker: 'bg-s1Light before:bg-s1', square: 'border-s1Light'},
    s2: {bg: 'bg-s2Lighter', title: 'text-s2Darker', marker: 'bg-s2Light before:bg-s2', square: 'border-s2Light'},
    s3: {bg: 'bg-s3Lighter', title: 'text-s3Darker', marker: 'bg-s3Light before:bg-s3', square: 'border-s3Light'},
    s4: {bg: 'bg-s4Lighter', title: 'text-s4Darker', marker: 'bg-s4Light before:bg-s4', square: 'border-s4Light'},
    s5: {bg: 'bg-s5Lighter', title: 'text-s5Darker', marker: 'bg-s5Light before:bg-s5', square: 'border-s5Light'},
    s6: {bg: 'bg-s6Lighter', title: 'text-s6Darker', marker: 'bg-s6Light before:bg-s6', square: 'border-s6Light'},
  }

  return (
    <div 
      className={`columnBoard p-3.5 w-full min-h-[558px] mb-4 bg-gradient-to-t from-white rounded-xl overflow-hidden ${colorVariants[variant].bg} ${enable ? 'visible' : 'hidden invisible'}`}
    >
      <h2 
        className={`uppercase font-semibold whitespace-nowrap text-sm truncate mb-3 ${colorVariants[variant].title}`}
        title={name}
      >
        {name}
      </h2>
      <div className={`marker w-7/12 h-[21.98px] rounded-full mb-2.5 before:block before:w-5/12 before:h-full before:rounded-full ${colorVariants[variant].marker}`}></div>
      <div className={`square scale-x-105 md:scale-x-110 origin-center w-full h-[174.94px] border rounded-xl ${colorVariants[variant].square}`}></div>
    </div>
  )
}