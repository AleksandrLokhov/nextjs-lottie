import React, { useEffect, useRef } from 'react';
import styles from './lottie-player.module.scss';
import { AnimationItem, DotLottiePlayer, Props } from '@dotlottie/react-player';
import '@dotlottie/react-player/dist/index.css';

interface ControlledLottiePlayerProps extends Partial<Props> {
  size?: number;
  activeIndex: number;
  index: number;
  handleChangeActive: (index: number) => void;
}

export const ControlledLottiePlayer = (props: ControlledLottiePlayerProps) => {
  const { size = 70 } = { ...props };
  const animationRef = useRef<AnimationItem | null>(null);

  const handlePlay = () => {
    props.handleChangeActive(props.index);
    if (animationRef.current) {
      animationRef.current.play();
    }
  };

  useEffect(() => {
    if (props.activeIndex !== props.index) {
      if (animationRef.current) {
        animationRef.current.stop();
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.activeIndex]);

  return (
    <div
      onClick={() => handlePlay()}
      style={{ width: `${size}px`, aspectRatio: 1 }}
    >
      <div
        className={styles.imageWrapper.concat(
          ` ${props.index === props.activeIndex ? styles.active : null}`
        )}
      >
        <DotLottiePlayer ref={animationRef} src={props.src ?? ''} {...props} />
      </div>
    </div>
  );
};

export default ControlledLottiePlayer;
