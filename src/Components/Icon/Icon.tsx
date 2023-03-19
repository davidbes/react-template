import { FC } from 'react';
import { SvgComponent } from 'Types';
import * as icons from 'Assets/Icons';
import styles from './Icon.module.scss';

export enum IconName {
  ChevronRight = 'ChevronRight',
}

type IconProps = {
  icon: IconName;
};

export const Icon: FC<IconProps> = ({ icon }) => {
  const IconComponent: SvgComponent = icons[icon];
  return (
    <div className={styles.icon}>
      <IconComponent />
    </div>
  );
};
