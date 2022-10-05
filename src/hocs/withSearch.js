import { useState, useEffect } from 'react';

const withSearch = (Component, dataPropName, data, filterableFields) => (props) => {
  const [filteredData, setFilteredData] = useState(data || []);
  const [searchInputValue, setSearchInputValue] = useState('');

  const [computedProps, setComputedProps] = useState(props);

  const handleSearchInputValueChange = (event) => {
    setSearchInputValue(event.target.value);
  };

  const handleFilterData = (data, filterableFields, searchTerm) => {
    setFilteredData(data.filter((entry) => filterableFields.some((field)=> entry[field].toLowerCase().includes(searchTerm.toLowerCase())
    )
    ));
  };

  useEffect(() => {
    if (!data || !filterableFields) return;
    handleFilterData(data, filterableFields, searchInputValue);
  }, [searchInputValue]);

  useEffect(() => {
    setComputedProps({
      ...props,
      [dataPropName]: filteredData,
    })
  }, [filteredData, props]);
  
  return (
    <>
    <input 
      type='search'
      placeholder={props.placeholder || 'Search'}
      value={searchInputValue}
      onChange={handleSearchInputValueChange}
    />
    <Component {...computedProps} />
    </>
  )
};

export default withSearch;