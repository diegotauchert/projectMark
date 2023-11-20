"use client";

import { useState } from 'react'
import { TEXT_TITLE, TEXT_TAB_ITEM, TEXT_BOARD_ITEM } from '@/constants/text'
import { Title } from '@/components/atoms/Title'
import { Tabs } from '@/components/organisms/Tabs'
import { Tab } from '@/components/molecules/Tab'
import { Board } from '@/components/organisms/Board'
import { ColumnBoard } from '@/components/molecules/ColumnBoard'
import { Header } from '@/components/organisms/Header'
import { getRandomInt } from '@/utils/helpers';
import { boardColumnVariant } from '@/enums/variant';
import { BOARD_SIZE } from '@/constants/rules';

export default function Home() {
  const [selectedTab, setSelectedTab] = useState<string | null>(null);
  const [boardSize, setBoardSize] = useState<number>(BOARD_SIZE);

  const handleTabClick = (text: string) => {
    setSelectedTab((prev) => (prev === text ? null : text));
    setBoardSize(text === selectedTab ? BOARD_SIZE : getRandomInt(1, BOARD_SIZE));
  };
  
  return (
    <main className="bg-primary flex flex-col min-h-screen pb-3 px-3">
      <Header />
      <section className="bg-white flex-1 flex flex-col rounded-xl p-8 min-h-auto h-full items-center">
        <Title>{TEXT_TITLE}</Title>
        <Tabs>
          {TEXT_TAB_ITEM.map(tab => 
            <Tab key={tab} text={tab} isChecked={selectedTab === tab} onTabClick={() => handleTabClick(tab)} />
          )}
        </Tabs>
        
        <Board>
          {TEXT_BOARD_ITEM.map((column:string, key:number) => {
            return <ColumnBoard key={column} variant={boardColumnVariant[key]} name={column} enable={boardSize > key} />
          })
          }
        </Board>
      </section>
    </main>
  )
}
