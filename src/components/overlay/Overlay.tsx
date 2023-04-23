import { FC } from 'react';
import './Overlay.scss';

interface Props {
  isShown: boolean;
}

export const Overlay: FC<Props> = ({ isShown }) => (
  <>{isShown && <div className="overlay" />}</>
);
