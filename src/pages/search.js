import React, { useState, useEffect, useRef } from 'react';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const [dropdownItems, setDropdownItems] = useState([
    'Global Database',
    'Unilorin Database',
  ]);
  const [selectedItem, setSelectedItem] = useState('Global Database');
  const [placeholderText, setPlaceholderText] = useState('Enter search term(s) Entry ID(s)');
  const dropdownRef = useRef(null);

  const handleInputChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
  };

  const handleDropdownClick = () => {
    setDropdownItems(!dropdownItems);
  };

  const handleDropdownItemClick = (item) => {
    setSearchQuery('');
    setSelectedItem(item); // Update the selected item state
    setShowDropdown(false);

    // Set the placeholder text based on the selected item
    if (item === 'Global Database') {
      setPlaceholderText('Enter search term(s)');
    } else if (item === 'Unilorin Database') {
      setPlaceholderText('Enter search terms(s) e.g Covid-19');
    }
  };

  useEffect(() => {
    // Function to close the dropdown when a click occurs outside of it
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    }

    // Attach the event listener
    document.addEventListener('click', handleClickOutside);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className="search-bar-wrapper down-4 off-1">
      <div className={`dropdown ${showDropdown ? 'open' : ''}`} ref={dropdownRef}>
        <div onClick={handleDropdownClick} className="selected-item-box px12">
          {selectedItem} <i className='fa-solid fa-caret-down'></i>
        </div>
        {showDropdown && (
          <div className="dropdown-menu">
            {dropdownItems.map((item, index) => (
              <div key={index} onClick={() => handleDropdownItemClick(item)}>
                <div className="item-box">{item}</div>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="search-g">
        <input
          type="text"
          placeholder={placeholderText}
          value={searchQuery}
          onChange={handleInputChange}
          className="search-input"
        />
      </div>
      <div>
        <i className="fas fa-regular fa-magnifying-glass" />
      </div>
    </div>
  );
};

export default SearchBar;
