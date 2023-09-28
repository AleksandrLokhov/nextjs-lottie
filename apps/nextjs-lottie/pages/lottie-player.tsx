import React, { useRef, useState } from 'react';
import { IPlayerProps, Player } from '@lottiefiles/react-lottie-player';
import { AnimationItem } from 'lottie-web';
import styles from './lottie-player.module.scss';

interface LottiePlayerProps extends Partial<IPlayerProps> {
  size?: number;  
}

export const LottiePlayer = (props: LottiePlayerProps) => {
  const { size = 70 } = { ...props };
  const animationRef = useRef<AnimationItem | null>(null);
  const [isActive, setIsActive] = useState(false);

  const handlePlay = () => {
    setIsActive(true);
    if (animationRef.current) {
      animationRef.current.play();
    }
  };

  const handlePause = () => {
    if (animationRef.current) {
      animationRef.current.pause();
    }
  };

  return (
    <div
      onClick={() => handlePlay()}
      style={{ width: `${size}px`, aspectRatio: 1 }}
    >
      <div
        className={styles.imageWrapper.concat(
          ` ${isActive ? styles.active : null}`
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

export default LottiePlayer;
