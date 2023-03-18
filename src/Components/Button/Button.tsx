import classNames from 'classnames';
import { FC, ButtonHTMLAttributes } from 'react';
import { Link, To } from 'react-router-dom';
import styles from './Button.module.scss';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'destructive';
  to?: To; // TODO: if this is present it should have props of a LINK and not Button because we are changing components
  children?: never;
  label?: string;
  className?: string;
  isLoading?: boolean;
  leadingIcon?: 'string'; // TODO: change this when ICON is available
  trailingIcon?: 'string'; // TODO: change this when ICON is available
};

export const Button: FC<ButtonProps> = ({
  to,
  className,
  label,
  leadingIcon,
  trailingIcon,
  isLoading,
  variant = 'primary',
  type = 'button',
  ...otherButtonAttributes
}) => {
  const commonClassName = classNames(styles.button, styles[variant], className);

  const content = (
    <>
      <div className={classNames(isLoading && styles.isLoading)}>
        {leadingIcon && <div>icon-placeholder</div>}
        {label && <span>{label}</span>}
        {trailingIcon && <div>icon-placeholder</div>}
      </div>
      {isLoading && <div>loading-icon</div>}
    </>
  );

  return to ? (
    <Link className={commonClassName} to={to}>
      {content}
    </Link>
  ) : (
    <button type={type} className={commonClassName} {...otherButtonAttributes}>
      {content}
    </button>
  );
};
