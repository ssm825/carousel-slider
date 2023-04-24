import * as Style from './Slider.styles';

const SliderItem = ({ item }) => {
  return (
    <>
      {item.map((item, index) => (
        <Style.Item key={index} style={{ background: item.color }}>
          <Style.Number>{item.id}</Style.Number>
        </Style.Item>
      ))}
    </>
  );
};

export default SliderItem;
