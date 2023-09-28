import React, { useEffect, useRef, useState } from 'react';
import styles from './lottie-player.module.scss';
import {
  AnimationItem,
  DotLottiePlayer,
  Props,
  PlayerEvents,
} from '@dotlottie/react-player';
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
  const [playerReady, setPlayerReady] = useState(false);
  const { activeIndex, index, handleChangeActive, ...restProps } = props;

  const handlePlay = () => {
    props.handleChangeActive(props.index);
    if (animationRef.current) {
      if (playerReady) {
        animationRef.current.play(animationRef.current.name);
      }
    }
  };

  useEffect(() => {
    if (props.activeIndex !== props.index) {
      if (animationRef.current) {
        if (playerReady) {
          animationRef.current.stop(animationRef.current.name);
        }
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
        <DotLottiePlayer
          ref={animationRef}
          src={props.src ?? ''}
          onEvent={(event, params) => {
            if (event === PlayerEvents.Ready) {
              setPlayerReady(true);
            }
          }}
          {...restProps}
        />
      </div>
    </div>
  );
};

export default ControlledLottiePlayer;
