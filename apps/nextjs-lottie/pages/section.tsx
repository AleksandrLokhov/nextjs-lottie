import React, { useState } from 'react';

import styles from './section.module.scss';
import ControlledLottiePlayer from './controlled-lottie-player';

const Section = () => {
  const [activeReaction, setActiveReaction] = useState(0);
  const handleChangeActive = (index: number) => {
    setActiveReaction(index);
  };
  return (
    <div className={styles.wrapperRow}>
      <ControlledLottiePlayer
        src={'/bear.json'}
        activeIndex={activeReaction}
        index={1}
        handleChangeActive={handleChangeActive}
        size={88}
      />
      <ControlledLottiePlayer
        src={'/bear.json'}
        activeIndex={activeReaction}
        index={2}
        handleChangeActive={handleChangeActive}
        size={88}
      />
      <ControlledLottiePlayer
        src={'/bear.json'}
        activeIndex={activeReaction}
        index={3}
        handleChangeActive={handleChangeActive}
        size={88}
      />
      <ControlledLottiePlayer
        src={'/bear.json'}
        activeIndex={activeReaction}
        index={4}
        handleChangeActive={handleChangeActive}
        size={88}
      />
    </div>
  );
};

export default Section;
