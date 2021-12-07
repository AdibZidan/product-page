import { OverlayProps } from './overlay-props.interface';
import './Overlay.scss';

function Overlay({ isClicked }: OverlayProps): JSX.Element {
  return (
    <div
      className={isClicked ? 'with-overlay' : ''}>
    </div>
  );
}

export default Overlay;
