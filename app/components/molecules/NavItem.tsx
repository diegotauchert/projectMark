import { ReactElement } from 'react';

type navItemType = {
  item: number;
  text: string;
  active?: boolean
};

export const NavItem = ({ item, text, active }: navItemType): ReactElement => {
  const colorScheme = {
    active: 'bg-gray800 text-white',
    notActive: 'bg-white text-gray800 border border-blueBorder',
  }

  return (
    <div role="menuitem">
      <button type='button' title={text} aria-label={text}>
        <strong className={`inline-block font-normal px-5 py-3.5 rounded-2xl mb-1 text-mdLarge ${active ? colorScheme.active : colorScheme.notActive}`}>{item}</strong>
        <span className="block text-small font-medium text-gray800">{text}</span>
      </button>
    </div>
  )
};