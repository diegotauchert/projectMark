import Image from 'next/image'
import { Title } from './components/atoms/Title'
import { Button } from './components/atoms/Button'
import { TITLE, NEXT } from './constants/text'
import { Tabs } from './components/organisms/Tabs'
import { Tab } from './components/molecules/Tab'
import { Board } from './components/organisms/Board'
import { ColumnBoard } from './components/molecules/ColumnBoard'

export default function Home() {
  return (
    <main className="bg-primary flex flex-col min-h-screen pt-8 pb-3 px-3">
      <header className="flex justify-between">
        <Image
            src="/logo.svg"
            alt="ProjectMark Logo"
            width={37}
            height={37}
            priority
          />
          <nav>
            <ul>
              <li>
                <button type='button'>
                  <strong className='bg-gray800 text-white inline-block p-4 rounded-lg'>1</strong>
                  <span className="block text-small">Sales Pipeline Settings</span>
                </button>
              </li>
            </ul>
          </nav>
          <Button type='button'>{NEXT}</Button>
      </header>
      
      <section className="bg-white flex-1 flex flex-col rounded-xl p-8 min-h-auto h-full items-center">
        <Title>{TITLE}</Title>
        <Tabs>
          <Tab text="Basic"></Tab>
          <Tab text="Advanced"></Tab>
          <Tab text="Expert"></Tab>
          <Tab text="Custom"></Tab>
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
