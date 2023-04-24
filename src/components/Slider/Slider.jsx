import { useEffect, useRef, useState } from 'react';
import { useInterval } from 'hook/useInterval';
import SliderItem from './SliderItem';
import PageNation from 'components/PageNation/PageNation';
import { SLIDER_DATA } from 'constants/sliderData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import * as Style from './Slider.styles';

// 무한 루프 슬라이더를 만들기 위해 복제
// 0(copy 3) -> 1(start) -> 2 -> 3 -> 4(copy 1)
const copiedData = [
  SLIDER_DATA[SLIDER_DATA.length - 1],
  ...SLIDER_DATA,
  SLIDER_DATA[0],
];

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(1);
  const [time, setTime] = useState(2000);
  const slideRef = useRef();

  useInterval(() => {
    setSlideIndex(slideIndex => slideIndex + 1);
  }, time);

  // infinite loop
  const handleInfiniteLoop = (condition, num) => {
    if (condition) {
      slideRef.current && (slideRef.current.style.transition = '0s');
      setSlideIndex(num);
      setTimeout(() => {
        slideRef.current &&
          (slideRef.current.style.transition = 'all 0.5s ease-in');
      }, 0);
    }
  };
  const moveToPrev = slideIndex === 0;
  const moveToNext = slideIndex > copiedData.length - 1;

  handleInfiniteLoop(moveToNext, 1);
  handleInfiniteLoop(moveToPrev, 3);

  useEffect(() => {
    if (slideIndex === copiedData.length - 1) {
      setTime(700);
    } else {
      setTime(2000);
    }
  }, [slideIndex]);

  // prev & next button
  const handleSlide = num => {
    return setSlideIndex(slideIndex + num);
  };

  return (
    <>
      <Style.Container>
        <Style.Slider
          width={copiedData.length}
          index={slideIndex}
          ref={slideRef}
        >
          <SliderItem item={copiedData} />
        </Style.Slider>
      </Style.Container>
      <PageNation slideIndex={slideIndex} />
      <Style.ButtonWrap>
        <Style.PrevBtn onClick={() => handleSlide(-1)}>
          <FontAwesomeIcon icon={faAngleLeft} />
        </Style.PrevBtn>
        <Style.NextBtn onClick={() => handleSlide(1)}>
          <FontAwesomeIcon icon={faAngleRight} />
        </Style.NextBtn>
      </Style.ButtonWrap>
    </>
  );
};

export default Slider;
