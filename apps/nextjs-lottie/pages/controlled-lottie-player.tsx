import React, { useEffect, useRef, useState } from 'react';
import { IPlayerProps, Player } from '@lottiefiles/react-lottie-player';
import { AnimationItem } from 'lottie-web';
import styles from './lottie-player.module.scss';

interface ControlledLottiePlayerProps extends Partial<IPlayerProps> {
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
        <Player
          lottieRef={(instance) => {
            animationRef.current = instance;
          }}
          src={props.src ?? ''}
          {...props}
        />
      </div>
    </div>
  );
};

export default ControlledLottiePlayer;
