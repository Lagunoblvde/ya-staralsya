// src/components/SongList.js
import React from 'react';
import styled from 'styled-components';
import SongCard from './SongCard';

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  
  & > div {
    flex: 1 1 calc(25% - 20px);
    max-width: calc(25% - 20px);
    box-sizing: border-box;
  }
`;

const SongList = ({ songs }) => (
  <List>
    {songs.slice(0, 10).map((song) => (
      <SongCard key={song.id} song={song} />
    ))}
  </List>
);

export default SongList;
