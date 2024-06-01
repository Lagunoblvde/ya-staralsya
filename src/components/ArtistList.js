import React from 'react';
import styled from 'styled-components';
import ArtistCard from './ArtistCard';

const List = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 30px;
  justify-items: center;
`;

const ArtistList = ({ artists }) => (
  <List>
    {artists.slice(0, 10).map((artist) => (
      <ArtistCard key={artist.id} artist={artist} />
    ))}
  </List>
);

export default ArtistList;
