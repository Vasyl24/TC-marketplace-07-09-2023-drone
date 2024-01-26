import {  useEffect } from 'react';

import { StyledSelectedFilters } from './SelectedFilters.styled';
import Reset from '../../../UI/Icon/Icon';

const SelectedFilters = ({ selectedFilters, setSelectedFilters }) => {
  useEffect(() => {
    console.log('Selected Filters:', selectedFilters);
  }, [selectedFilters]);

  const removeFilter = filter => {
    const updatedFilters = selectedFilters.filter(
      selectedFilter => selectedFilter !== filter
    );
    setSelectedFilters(updatedFilters);
  };

  const removeAllFilters = () => {
    const lastFilter = selectedFilters[selectedFilters.length - 1];
    setSelectedFilters([lastFilter]);
  };

  return (
    <StyledSelectedFilters>
      {selectedFilters.length > 1 &&
        selectedFilters.map((filter, index) => (
          <div key={index} className="selected-filter">
            {filter}
            <Reset
              id="reset"
              onClick={
                filter === 'Очистити все'
                  ? removeAllFilters
                  : () => removeFilter(filter)
              }
            />
          </div>
        ))}
    </StyledSelectedFilters>
  );
};

export default SelectedFilters;
