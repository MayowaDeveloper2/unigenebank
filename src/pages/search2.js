// eslint-disable-next-line
import React, { useState, useEffect, useRef } from 'react';
import SearchResults from '../components/resultsearch';
import useUtils from '../utils/useutils';

const SearchBar = () => {
  const {setToast} = useUtils()
  const [query, setQuery] = useState('');
  const [detailedResults, setDetailedResults] = useState([]);
  const [pending, setPending] = useState(false);
  const [seeSearch, setseeSearch] = useState(false);
  // const [fastaData, setFastaData] =  useState();

  // eslint-disable-next-line
  const fetchGENE = async (id) => {
    const endpoint = `https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esummary.fcgi?db=gene&id=${id}&retmode=json`;
    const response = await fetch(endpoint);
    const data = await response.json();
    console.log(data)
    // return data;
    if (pending) {
      // Do something while 'pending' is true
    }


      // const err = [];
    //   const detailedData = await Promise.all(
    //     geneIds?.slice(0, 5).map(async (id) => {
    //       const response = await fetch(`https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esummary.fcgi?db=gene&id=${id}&retmode=json`);
    //       if (!response.ok) {
    //         throw new Error('Network response was not ok');
    //       }
    //       const data = await response.json();
    //       // return data.result[id];
    //       console.log(data)
    //     })
    //   );
    //   // setDetailedResults(detailedData);
    //   // console.log(detailedData);
    //   // setseeSearch(true)
    // } catch (error) {
    //   console.error("There was a problem with the fetch operation:", error.message);
    // } finally {
    //   setPending(false);
    // }
  }

  const handleSearch = async () => {
    if(query === ""){
      setToast('Please enter a keyword');
      return;
    }
    try {
      setPending(true);
      const endpoint = `https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi?db=gene&term=${query}&retmode=json`;
      const response = await fetch(endpoint);
      if (!response.ok) {
        throw new Error(`Network response was not ok ${response.statusText}`);
      }
      const data = await response.json();
      const ids = data.esearchresult.idlist;  // limit to first 5 for testing
      handleDetailsFromID(ids)
      fetchFasta(ids)
      setPending(false)
    } catch (error) {
      console.error("There was an error with the fetch operation:", error);
    }
  };

  // eslint-disable-next-line
  const fetchFasta = async (ids) => {
    const url = `https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=nucleotide&id=${ids}&rettype=fasta&retmode=text`;
    const response = await fetch(url);
    const data = await response.text();
    console.log(data)
    // setFastaData(data);
};


  // eslint-disable-next-line
  const handleDetailsFromID = async (id) => {
    try {
      const endpoint = `https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esummary.fcgi?db=gene&id=${id}&retmode=json`;
      const response = await fetch(endpoint);
      if (!response.ok) {
        throw new Error(`Network response was not ok ${response.statusText}`);
      }
      const data = await response.json();
      const res  =  data?.result;
      console.log(Object.values(res))
      // console.log(typeof(res))
      setDetailedResults(Object.values(res));
      setseeSearch(true);
    } catch (error) {
      console.error("There was an error with the fetch operation:", error);
    }
  };  
  const [setSearchQuery] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const [dropdownItems ] = useState([
    'Global Database',
    'Unilorin Database',
  ]);
  const [selectedItem, setSelectedItem] = useState('Global Database');
  const [placeholderText, setPlaceholderText] = useState('Enter search term(s)');
  const dropdownRef = useRef(null);

  // const handleInputChange = (event) => {
  //  const query = event.target.value;
  //  setSearchQuery(query);
  // };

  const handleDropdownClick = () => {
    setShowDropdown(!showDropdown);
  };

  const handleDropdownItemClick = (item) => {
    setSearchQuery('');
    setSelectedItem(item); // Update the selected item state
    setShowDropdown(false);

    // Set the placeholder text based on the selected item
    if (item === 'Global Database') {
      setPlaceholderText('Enter search term(s)');
    } else if (item === 'Unilorin Database') {
      setPlaceholderText('Enter search terms(s)');
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

  return ( <>
     {selectedItem === 'Global Database' && ( // Conditionally render based on the selected item
        seeSearch && <SearchResults searchQuery={query} setseeSearch={setseeSearch} detailedResults={detailedResults} />
      )}
    <div className="search-bar-wrapper off-1">
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
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="search-input"
        />
      </div>
      <div>
        <i onClick={handleSearch} className="fas fa-regular fa-magnifying-glass" />
      </div>
    </div>
   </>
  );
};

export default SearchBar;
