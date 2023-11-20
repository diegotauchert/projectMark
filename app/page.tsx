"use client";

import { useState } from 'react'
import { Title } from './components/atoms/Title'
import { TEXT_TITLE, TEXT_TAB_ITEM } from './constants/text'
import { Tabs } from './components/organisms/Tabs'
import { Tab } from './components/molecules/Tab'
import { Board } from './components/organisms/Board'
import { ColumnBoard } from './components/molecules/ColumnBoard'
import { Header } from './components/organisms/Header'

export default function Home() {
  const [selectedTab, setSelectedTab] = useState<string | null>(null);

  const handleTabClick = (text: string) => {
    setSelectedTab((prev) => (prev === text ? null : text));
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
          <ColumnBoard variant="s1" name="Lead" />
          <ColumnBoard variant="s2" name="RFP In Progress" />
          <ColumnBoard variant="s3" name="Submitted" />
          <ColumnBoard variant="s4" name="Won" />
          <ColumnBoard variant="s5" name="Lost" />
          <ColumnBoard variant="s6" name="Closed" />
        </Board>
      </section>
    </main>
  )
}
