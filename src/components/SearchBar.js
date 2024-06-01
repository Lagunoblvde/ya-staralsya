import React from 'react';
import styled from 'styled-components';

const SearchBarContainer = styled.div`
  margin: 40px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  padding: 15px;
  width: 350px;
  margin: 20px 0;
  border: 2px solid #8a2be2;
  border-radius: 10px;
  font-size: 18px;
`;

const Button = styled.button`
  padding: 15px 25px;
  margin: 15px;
  background-color: #ff6347;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-size: 18px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s, transform 0.3s;

  &:hover {
    background-color: #ff4500;
    transform: translateY(-3px);
  }

  &:active {
    background-color: #ff6347;
    transform: translateY(0);
  }
`;

const RadioLabel = styled.label`
  margin-right: 15px;
  font-size: 18px;
`;

const SearchBar = ({ query, setQuery, searchType, setSearchType, search, clearResults }) => (
  <SearchBarContainer>
    <Input
      type="text"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      placeholder="Search for music or artists"
    />
    <div>
      <Button onClick={search}>Search</Button>
    </div>
    <div>
      <RadioLabel>
        <input
          type="radio"
          value="track"
          checked={searchType === 'track'}
          onChange={() => setSearchType('track')}
        />
        Music
      </RadioLabel>
      <RadioLabel>
        <input
          type="radio"
          value="artist"
          checked={searchType === 'artist'}
          onChange={() => setSearchType('artist')}
        />
        Artists
      </RadioLabel>
    </div>
  </SearchBarContainer>
);

export default SearchBar;
