import { ReactElement } from 'react'
import Image from 'next/image'
import { NavItem } from '@/components/molecules/NavItem'
import { Nav } from '@/components/organisms/Nav'
import { Button } from '@/components/atoms/Button'
import { TEXT_NEXT,TEXT_NAV_ITEM } from '@/constants/text'

export const Header = (): ReactElement => (
  <header className="md:flex text-center items-center justify-between py-4 pl-2 pr-6">
    <Image
        src="/logo.svg"
        alt="ProjectMark Logo"
        width={37}
        height={37}
        className='mx-auto mb-6 md:mb-0 md:mx-0'
        priority
      />
      <Nav>
        {TEXT_NAV_ITEM.map((nav, key) => <NavItem key={nav} item={key+1} text={nav} active={key === 0 && true} />)}
      </Nav>
      <Button 
        type='button' 
        className="bg-blueHighlight rounded-full text-sm font-semibold py-2.5 px-5 text-white"
      >
        {TEXT_NEXT}
      </Button>
  </header>
);