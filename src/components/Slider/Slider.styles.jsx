import styled from 'styled-components';

export const Container = styled.section`
  overflow: hidden;
`;

// slider
export const Slider = styled.div(props => ({
  display: 'flex',
  width: `${props.width * 100}vw`,
  transform: `translateX(${-100 * props.index}vw)`,
  transition: 'all 0.5s ease-in',
}));

// slider items
export const Item = styled.div`
  width: 100vw;
  height: 300px;
  border: 1px solid white;
`;
export const Number = styled.div`
  text-align: center;
  line-height: 300px;
  color: white;
  font-size: xxx-large;
  font-weight: 800;
`;

// prev, next button
export const ButtonWrap = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  width: 100%;
  top: 120px;
  padding: 10px;
`;
export const Button = styled.button`
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
export const PrevBtn = styled(Button)``;
export const NextBtn = styled(Button)``;
