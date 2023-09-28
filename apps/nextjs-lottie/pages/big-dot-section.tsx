import React, { useState } from 'react';

import styles from './section.module.scss';
import ControlledDotLottiePlayer from './controlled-dot-lottie-player';

const BigDotSection = () => {
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
        size={1000}
      />
    </div>
  );
};

export default BigDotSection;
