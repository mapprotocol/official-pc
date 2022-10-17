import React, { useEffect, useRef, useState } from 'react';
import ReactBeforeSliderComponent from 'react-before-after-slider-component';
import VisibilitySensor from 'react-visibility-sensor';

import 'react-before-after-slider-component/dist/build.css';

const FIRST_IMAGE = {
  imageUrl: '/map/before.png',
};
const SECOND_IMAGE = {
  imageUrl: '/map/after.png',
};
function timePhaseToCoordinadeDifferenceCoefficient(x: number) {
  return (Math.sin(x * Math.PI - Math.PI / 2) + 1) / 2;
}

const DEFAULT_DURATION = 800;
type Animation = {
  start: number;
  end: number;
  duration: number;
};
const START_POSITION = 55;
const END_POSITION_1 = 35;
const END_POSITION_2 = 80;
const ANIMATIONS: Animation[] = [
  {
    start: START_POSITION,
    end: END_POSITION_1,
    duration: DEFAULT_DURATION,
  },
  // pause
  {
    start: END_POSITION_1,
    end: END_POSITION_1,
    duration: 30,
  },
  {
    start: END_POSITION_1,
    end: END_POSITION_2,
    duration: DEFAULT_DURATION,
  },
  {
    start: END_POSITION_2,
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
      const currentAnimation = allAnimationsRef.current.shift();
      if (!currentAnimation) {
        return;
      }
      animationPositions = animationPositionsRef.current = currentAnimation;
    }

    let animationStartTime = animationStartTimeRef.current;
    if (!animationStartTime) {
      animationStartTime = animationStartTimeRef.current = timestamp;
    }

    const {
      start: animationStartPosition,
      end: animationEndPosition,
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
    if (isVisible) {
      demonstrate();
      setInterval(demonstrate, 5000);
    }
  }, [isVisible]);

  return (
    <VisibilitySensor
      onChange={(visible: boolean) => {
        if (visible && !isVisible) setIsVisible(true);
      }}
    >
      <div className='my-4 min-h-[500px] lg:min-h-[700px]'>
        <div className='text-1xl mb-8 p-8  text-center font-bold text-white lg:text-3xl'>
          Before and After using MAP
        </div>
        <ReactBeforeSliderComponent
          currentPercentPosition={delimiterPercentPosition}
          firstImage={FIRST_IMAGE}
          secondImage={SECOND_IMAGE}
          onVisible={demonstrate}
        />
      </div>
    </VisibilitySensor>
  );
};

export default BeforeAfter;
