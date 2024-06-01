// src/App.js
import React, { useState, useEffect } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';
import styled, { createGlobalStyle } from 'styled-components';
import SearchBar from './components/SearchBar';
import SongList from './components/SongList';
import ArtistList from './components/ArtistList';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Arial', sans-serif;
    background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
    color: #333;
  }
`;

const AppContainer = styled.div`
  text-align: center;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 3em;
  margin: 20px 0;
  color: #4A90E2;
`;

const ClearButton = styled.button`
  padding: 10px 20px;
  margin: 20px;
  background-color: #ff6347;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #ff4500;
  }
`;

const spotifyApi = new SpotifyWebApi();

function App() {
  const [query, setQuery] = useState('');
  const [searchType, setSearchType] = useState('track');
  const [results, setResults] = useState([]);
  const [token, setToken] = useState('');

  useEffect(() => {
    const clientId = '5c3604b300a04b5e9508fa1e430154c7';
    const clientSecret = '42ab67ed559243b0a7f1cc7ae99b01ba';

    const getToken = async () => {
      const result = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': 'Basic ' + btoa(clientId + ':' + clientSecret),
        },
        body: 'grant_type=client_credentials',
      });

      const data = await result.json();
      setToken(data.access_token);
      spotifyApi.setAccessToken(data.access_token);
    };

    getToken();
  }, []);

  const search = async () => {
    if (!token) return;

    try {
      const response = await spotifyApi.search(query, [searchType]);
      if (searchType === 'track') {
        setResults(response.tracks.items);
      } else if (searchType === 'artist') {
        setResults(response.artists.items);
      }
    } catch (error) {
      console.error('Error fetching the results', error);
    }
  };

  const clearResults = () => {
    setQuery('');
    setResults([]);
  };

  return (
    <AppContainer>
      <GlobalStyle />
      <Title>Поиск музыки</Title>
      <SearchBar
        query={query}
        setQuery={setQuery}
        searchType={searchType}
        setSearchType={setSearchType}
        search={search}
        clearResults={clearResults}
      />
      {results.length > 0 && <ClearButton onClick={clearResults}>Очистить</ClearButton>}
      {searchType === 'track' ? (
        <SongList songs={results} />
      ) : (
        <ArtistList artists={results} />
      )}
    </AppContainer>
  );
}

export default App;
