import styles from './index.module.scss';
import { Player } from '@lottiefiles/react-lottie-player';
import React, { useRef } from 'react';
import { AnimationItem } from 'lottie-web';
import LottiePlayer from './lottie-player';
import Section from './section';
import DotSection from './dot-section';
import BigDotSection from './big-dot-section';

export function Index() {
  const firstAnimationRef = useRef<AnimationItem | null>(null);

  const handlePlay = (ref: AnimationItem | null) => {
    if (ref) {
      ref.play();
    }
  };
  const handlePause = (ref: AnimationItem | null) => {
    if (ref) {
      ref.pause();
    }
  };

  return (
    <div className={styles.page}>
      <div className="wrapper">
        <div className="container">
          <div id="welcome">
            <h1>
              <span> Hello there, </span>
              Welcome nextjs-lottie 👋
            </h1>
          </div>
          <div className={styles.appWrapper}>
            <h1 style={{ fontSize: '24px', fontWeight: 700, paddingBlock: 24 }}>
              Lottie Animation on hover
            </h1>
            <div
              onMouseEnter={() => handlePlay(firstAnimationRef.current)}
              onMouseLeave={() => handlePause(firstAnimationRef.current)}
            >
              <Player
                src="https://assets4.lottiefiles.com/packages/lf20_gb5bmwlm.json"
                lottieRef={(instance) => {
                  firstAnimationRef.current = instance;
                }}
                loop
                style={{ height: '300px', width: '300px' }}
              />
            </div>
            <h1 style={{ fontSize: '24px', fontWeight: 700, paddingBlock: 24 }}>
              Lottie Section test
            </h1>
            <Section />
            <h1 style={{ fontSize: '24px', fontWeight: 700, paddingBlock: 24 }}>
              Sizes test
            </h1>
            <div className={styles.wrapperRow}>
              <LottiePlayer src={'/bear.json'} />
              <LottiePlayer src={'/bear.json'} size={88} />
              <LottiePlayer src={'/bear.json'} size={176} />
              <LottiePlayer src={'/bear.json'} size={264} />
            </div>
            <h1 style={{ fontSize: '24px', fontWeight: 700, paddingBlock: 24 }}>
              DotLottie Section test
            </h1>
            <DotSection />
            <h1
              style={{
                fontSize: '24px',
                fontWeight: 700,
                paddingBlock: 24,
                marginTop: 50,
                marginBottom: 50,
              }}
            >
              Below DotLottie file size is 18 kB
              <br />
              <br />
              Same Lottie files size is 144 kB
            </h1>
            <BigDotSection />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
