import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { useApi } from '../../contexts/ApiContext/ApiContext';

import ProductCard from '../UI/ProductCard/ProductCard';
import {
  PopularContainer,
  PopularTitle,
  StyledPopular,
} from './Popular.styled';
import { Link } from 'react-router-dom';

const Popular = () => {
  const { query } = useApi();

  const settings = {
    className: 'slider variable-width',
    infinite: false,
    speed: 500,
    variableWidth: true,
    arrows: false,
  };

  const cardWidth = '196px';
  const cardHeight = '344px';

  return (
    <StyledPopular className="popular">
      <PopularContainer>
        <PopularTitle>Найпопулярніші</PopularTitle>
        <Slider {...settings}>
          {query.map((item, index) => (
            <Link to={`drones/${item._id}`} key={index}>
              <ProductCard
                key={index}
                title={item.title}
                img={item.img}
                price={item.price}
                _id={item._id}
                width={cardWidth}
                height={cardHeight}
                showButton={false}
                sale={item.sale}
                discount={item.discount}
              />
            </Link>
          ))}
        </Slider>
      </PopularContainer>
    </StyledPopular>
  );
};

export default Popular;
