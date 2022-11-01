import React, { useEffect, useRef, useState } from 'react';
import ReactBeforeSliderComponent from 'react-before-after-slider-component';

import 'react-before-after-slider-component/dist/build.css';

const FIRST_IMAGE_DARK = {
  imageUrl: '/map-light/before.png',
  // imageUrl: '/map_part2/before_dark.png',
};
const SECOND_IMAGE_DARK = {
  imageUrl: '/map-light/after.png',
};
const FIRST_IMAGE = {
  imageUrl: '/map/before.png',
  // imageUrl: '/map_part2/before_light.png',
};
const SECOND_IMAGE = {
  imageUrl: '/map/after.png',
};
function timePhaseToCoordinadeDifferenceCoefficient(x: number) {
  return (Math.sin(x * Math.PI - Math.PI / 2) + 1) / 2;
}

const DEFAULT_DURATION = 1000;
type Animation = {
  start: number;
  end: number;
  duration: number;
};
const START_POSITION = 100;
const END_POSITION_1 = 0;
const ANIMATIONS: Animation[] = [
  {
    start: START_POSITION,
    end: END_POSITION_1,
    duration: DEFAULT_DURATION,
  },
  // pause
  {
    start: END_POSITION_1,
    end: START_POSITION,
    duration: DEFAULT_DURATION,
  },
  {
    start: START_POSITION,
    end: START_POSITION,
    duration: DEFAULT_DURATION,
  },
];

const BeforeAfter = () => {
  /** Delimiter start */
  const [delimiterPercentPosition, setDelimiterPercentPosition] =
    useState<number>(START_POSITION);
  /** Delimiter end */
  /** Animation start */
  const allAnimationsRef = useRef<Animation[]>([]);
  const animationStartTimeRef = useRef<number | null>(null);
  const animationPositionsRef = useRef<Animation | null>(null);
  const animate = (timestamp: number) => {
    let animationPositions = animationPositionsRef.current;

    if (!animationPositions) {
      let currentAnimation = allAnimationsRef.current.shift();
      if (!currentAnimation) {
        allAnimationsRef.current = [...ANIMATIONS];
        currentAnimation = allAnimationsRef.current.shift();
      }
      // @ts-ignore
      animationPositions = animationPositionsRef.current = currentAnimation;
    }

    let animationStartTime = animationStartTimeRef.current;
    if (!animationStartTime) {
      animationStartTime = animationStartTimeRef.current = timestamp;
    }

    const {
      // @ts-ignore
      start: animationStartPosition,
      // @ts-ignore
      end: animationEndPosition,
      // @ts-ignore
      duration: animationDuration,
    } = animationPositions;

    if (timestamp > animationStartTime + animationDuration) {
      // End of animation

      setDelimiterPercentPosition(animationEndPosition);
      animationPositionsRef.current = null;
      animationStartTimeRef.current = null;
    } else {
      const animationPhase =
        (timestamp - animationStartTime) / animationDuration;
      const coordinatesDifference =
        (animationEndPosition - animationStartPosition) *
        timePhaseToCoordinadeDifferenceCoefficient(animationPhase);

      setDelimiterPercentPosition(
        animationStartPosition + coordinatesDifference
      );
    }

    window.requestAnimationFrame(animate);
  };
  const demonstrate = () => {
    allAnimationsRef.current = [...ANIMATIONS];
    window.requestAnimationFrame(animate);
  };
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    if (!isVisible) {
      demonstrate();
      setIsVisible(true);
    }
  }, []);

  return (
    <div className='my-4 min-h-[500px] lg:min-h-[700px]'>
      <div className='text-1xl mb-8 p-8  text-center font-bold text-white dark:text-black lg:text-3xl'>
        Before and After using MAP
      </div>
      <div
        style={{
          gap: '50px',
          margin: '0 auto',
          justifyContent: 'center',
        }}
        className='pc_mapAndChains'
      >
        <img
          className='hidden w-[400px] dark:flex'
          src={'/map_part2/before_light.png'}
          alt=''
        />
        <img
          className='hidden w-[400px] dark:flex'
          src={'/map_part2/after_light.png'}
          alt=''
        />
        <img
          className='h-[400px] w-[400px] dark:hidden'
          src={'/map_part2/before_dark.png'}
          alt=''
        />
        <img
          className='h-[400px] w-[400px]  dark:hidden'
          src={'/map_part2/after_dark.png'}
          alt=''
        />
      </div>

      <div className='mobile_mapAndChains dark:hidden'>
        <ReactBeforeSliderComponent
          currentPercentPosition={delimiterPercentPosition}
          firstImage={FIRST_IMAGE}
          secondImage={SECOND_IMAGE}
          feelsOnlyTheDelimiter={true}
        />
      </div>
      <div className='mobile_mapAndChains hidden dark:flex'>
        <ReactBeforeSliderComponent
          currentPercentPosition={delimiterPercentPosition}
          firstImage={FIRST_IMAGE_DARK}
          secondImage={SECOND_IMAGE_DARK}
          feelsOnlyTheDelimiter={true}
        />
      </div>
    </div>
  );
};

export default BeforeAfter;
