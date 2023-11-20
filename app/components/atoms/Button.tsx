import { CSSProperties, ReactElement, ReactNode } from 'react';

type buttonType = {
  children: ReactNode;
  disabled?: boolean;
  onClick?: Function;
  type: "button" | "submit" | "reset" | undefined;
  id?: string;
  className?: string;
  style?: CSSProperties;
  ariaLabel?: string;
};

export const Button = ({
  children,
  onClick,
  disabled,
  className,
  type,
  id,
  style,
  ariaLabel
}: buttonType): ReactElement => (
  <button
    disabled={disabled}
    type={type}
    onClick={onClick?.()}
    className={`${className} disabled:border-gray-300 disabled:border-2 disabled:bg-white disabled:text-gray-300`}
    style={style}
    aria-label={ariaLabel}
    id={id}
  >
    {children}
  </button>
);

Button.defaultProps = {
  disabled: false,
  type: 'button',
  onClick: (): void => {},
  className: '',
  style: {},
  id: '',
  ariaLabel: ''
};