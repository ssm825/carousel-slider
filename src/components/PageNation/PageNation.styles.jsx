import styled from 'styled-components';

export const PageNationWrap = styled.ul`
  display: flex;
  justify-content: center;
  margin: 20px 0;
`;
export const PageItem = styled.li`
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
