import React, { useState } from 'react';
import { Dropdown, DropdownButton, DropdownItem } from 'react-bootstrap';
import ProductCard from '../UI/ProductCard/ProductCard';
import { useApi } from '../../contexts/ApiContext/ApiContext';
import {
  StyledFilterProducts,
  FilterProductsContainer,
  HeadFilterProducts,
  ProductsContent,
  FilterProductsContent,
} from './FilterProducts.styled';
import Filter from '../UI/Icon/Icon';
import FilterOptions from './FilterComponents/FilterOptions/FilterOptions';
import SelectedFilters from './FilterComponents/SelectedFilters/SelectedFilters';
import Presentation from './FilterComponents/Presentation/Presentation';
import ProductCardList from '../UI/ProductCardList/ProductCardList';
import { Link } from 'react-router-dom';

const FilterProducts = ({ selectedCategory }) => {
  const { query } = useApi();

  const [selectedItem, setSelectedItem] = useState('Популярні');
  const [selectedFilters, setSelectedFilters] = useState(['Очистити все']);
  const [displayMode, setDisplayMode] = useState('grid');
  // const [productId, setProductId] = useState(null);

  const handleSelect = item => {
    setSelectedItem(item);
  };

  const toggleDisplayMode = newMode => {
    setDisplayMode(newMode);
  };

  // const onClick = id => {
  // setProductId(id);
  // console.log('id', id);
  // };

  // useEffect(() => {
  //   fetchData();
  // }, [selectedCategory, fetchData]);

  return (
    <StyledFilterProducts>
      <FilterProductsContainer>
        <FilterOptions
          setSelectedFilters={setSelectedFilters}
          selectedFilters={selectedFilters}
        />
        <ProductsContent>
          <HeadFilterProducts>
            <div className="product-filter">
              <Filter id="filter" />
              <span>Фільтр</span>
            </div>
            <SelectedFilters
              selectedFilters={selectedFilters}
              setSelectedFilters={setSelectedFilters}
            />
            <Dropdown onSelect={handleSelect}>
              <DropdownButton title={selectedItem} className="dropdown-btn">
                <DropdownItem eventKey="Популярні">Популярні</DropdownItem>
                <DropdownItem eventKey="Новинки">Новинки</DropdownItem>
                <DropdownItem eventKey="Від дешевих">Від дешевих</DropdownItem>
                <DropdownItem eventKey="Від дорогих">Від дорогих</DropdownItem>
              </DropdownButton>
            </Dropdown>
            <Presentation onChangeDisplayMode={toggleDisplayMode} />
          </HeadFilterProducts>
          <FilterProductsContent>
            {query
              .filter(item => item.category === selectedCategory)
              .map((item, index) =>
                displayMode === 'list' && window.innerWidth >= 768 ? (
                  <Link to={`${item._id}`} key={index} style={{ flexGrow: 1 }}>
                    <ProductCardList
                      key={index}
                      title={item.title}
                      img={item.img}
                      price={item.price}
                      _id={item._id}
                      width="100%"
                      height="280px"
                      showButton={true}
                      sale={item.sale}
                      discount={item.discount}
                      category={item.category}
                      properties={item.properties}
                      stock={item.stock}
                      // onClick={onClick(item._id)}
                    />
                  </Link>
                ) : (
                  <Link
                    to={`${item._id}`}
                    key={index}
                    className="product-card-link"
                  >
                    <ProductCard
                      key={index}
                      title={item.title}
                      img={item.img}
                      price={item.price}
                      _id={item._id}
                      showButton={true}
                      sale={item.sale}
                      discount={item.discount}
                      category={item.category}
                      className="product-card"
                      // onClick={onClick(item._id)}
                    />
                  </Link>
                )
              )}
          </FilterProductsContent>
        </ProductsContent>
      </FilterProductsContainer>
    </StyledFilterProducts>
  );
};

export default FilterProducts;
