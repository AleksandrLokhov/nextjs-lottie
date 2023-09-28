import React, { useState } from 'react';

import styles from './section.module.scss';
import ControlledDotLottiePlayer from './controlled-dot-lottie-player';

const DotSection = () => {
  const [activeReaction, setActiveReaction] = useState(0);
  const handleChangeActive = (index: number) => {
    setActiveReaction(index);
  };
  return (
    <div className={styles.wrapperRow}>
      <ControlledDotLottiePlayer
        src={'/bear.lottie'}
        activeIndex={activeReaction}
        index={1}
        handleChangeActive={handleChangeActive}
        size={88}
      />
      <ControlledDotLottiePlayer
        src={'/bear.lottie'}
        activeIndex={activeReaction}
        index={2}
        handleChangeActive={handleChangeActive}
        size={88}
      />
      <ControlledDotLottiePlayer
        src={'/bear.lottie'}
        activeIndex={activeReaction}
        index={3}
        handleChangeActive={handleChangeActive}
        size={88}
      />
      <ControlledDotLottiePlayer
        src={'/bear.lottie'}
        activeIndex={activeReaction}
        index={4}
        handleChangeActive={handleChangeActive}
        size={88}
      />
    </div>
  );
};

export default DotSection;
