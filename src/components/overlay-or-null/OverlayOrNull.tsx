import { OverlayProps } from './overlay-or-null-props.interface';
import './OverlayOrNull.scss';

export default function OverlayOrNull({
  isClicked,
}: OverlayProps): JSX.Element | null {
  const showOverlay: JSX.Element = (
    <div className={isClicked ? 'with-overlay' : ''}></div>
  );

  return isClicked ? showOverlay : null;
}
