import { SLIDER_DATA } from 'constants/sliderData';
import * as Style from './PageNation.styles';

const PageNation = ({ slideIndex }) => {
  return (
    <Style.PageNationWrap>
      {SLIDER_DATA.map(number => (
        <Style.PageItem
          key={number.id}
          className={number.id === slideIndex && 'select-page'}
        >
          {number.id}
        </Style.PageItem>
      ))}
    </Style.PageNationWrap>
  );
};

export default PageNation;
