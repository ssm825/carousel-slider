import { useEffect, useRef, useState } from 'react';
import { useInterval } from 'hook/useInterval';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

function Main() {
  const [slideIndex, setSlideIndex] = useState(1);
  const [time, setTime] = useState(1000);
  const slideRef = useRef();

  const copiedContent = [content[content.length - 1], ...content, content[0]];

  useInterval(() => {
    setSlideIndex(slideIndex => slideIndex + 1);
  }, time);

  console.log(slideIndex);
  if (slideIndex > copiedContent?.length - 1) {
    slideRef.current.style.transition = '0s';
    setSlideIndex(1);
    setTimeout(() => {
      slideRef.current.style.transition = 'all 0.5s ease-in';
    }, 0);
  }

  const handleSlide = num => {
    return setSlideIndex(slideIndex + num);
  };

  return (
    <Wrapper>
      <Container>
        <Slider width={copiedContent.length} index={slideIndex} ref={slideRef}>
          {copiedContent.map((item, index) => (
            <Item key={index} style={{ background: item.color }}>
              <Number>{item.id}</Number>
            </Item>
          ))}
        </Slider>
      </Container>
      <PageNationWrap>
        {content.map(number => (
          <PageItem
            key={number.id}
            className={number.id === slideIndex && 'select-page'}
          >
            {number.id}
          </PageItem>
        ))}
      </PageNationWrap>
      <ButtonWrap>
        <PrevBtn onClick={() => handleSlide(-1)}>
          <FontAwesomeIcon icon={faAngleLeft} />
        </PrevBtn>
        <NextBtn onClick={() => handleSlide(1)}>
          <FontAwesomeIcon icon={faAngleRight} />
        </NextBtn>
      </ButtonWrap>
    </Wrapper>
  );
}

const content = [
  {
    id: 1,
    color: '#38e5ff',
    label: '첫번째',
    maincontent: '첫번째입니다',
    subcontent:
      '강의입니다. 추천해요! 들어보세요!\n 매일 업데이트 되는 코드런 신규강의를 만나보세요!',
    gif: 'https://icons8.com/icon/g7FGqx8h2AxR/선물',
    button: '첫번째배너 🎁',
  },
  {
    id: 2,
    color: '#ffcb6b',
    label: '두번째',
    maincontent: '두번째입니다',
    subcontent:
      '강의입니다. 추천해요! 들어보세요!\n 매일 업데이트 되는 코드런 신규강의를 만나보세요!',
    button: '두번째배너',
  },
  {
    id: 3,
    color: '#929292',
    label: '세번째',
    maincontent: '세번째입니다',
    subcontent:
      '강의입니다. 추천해요! 들어보세요!\n 매일 업데이트 되는 코드런 신규강의를 만나보세요!',
    button: '세번째배너',
  },
];

export default Main;

const Wrapper = styled.main``;

//slider
const Container = styled.section`
  overflow: hidden;
`;

const Slider = styled.div(props => ({
  display: 'flex',
  width: `${props.width * 100}vw`,
  transform: `translateX(${-100 * props.index}vw)`,
  transition: 'all 0.5s ease-in',
}));

const Item = styled.div`
  width: 100vw;
  height: 300px;
  border: 1px solid white;
`;
const Number = styled.div`
  text-align: center;
  line-height: 300px;
  color: white;
  font-size: xxx-large;
  font-weight: 800;
`;

//pagenation
const PageNationWrap = styled.ul`
  display: flex;
  justify-content: center;
  margin: 20px 0;
`;
const PageItem = styled.li`
  margin: 0 3px;
  width: 25px;
  height: 25px;
  text-align: center;
  line-height: 25px;
  font-size: small;
  border-radius: 50%;
  background-color: lightgray;
  cursor: pointer;
  &:hover,
  &.select-page {
    color: white;
    background-color: darkgray;
  }
`;

// prev, next button
const ButtonWrap = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  width: 100%;
  top: 120px;
  padding: 10px;
`;
const Button = styled.button`
  width: 50px;
  height: 50px;
  background-color: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  &:hover,
  &.select-btn {
    opacity: 70%;
  }
`;
const PrevBtn = styled(Button)``;
const NextBtn = styled(Button)``;
