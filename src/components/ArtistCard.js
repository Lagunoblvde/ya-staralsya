import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  border: 2px solid #8a2be2;
  padding: 25px;
  margin: 15px;
  text-align: center;
  border-radius: 15px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  background-color: #f0f0f0;
  max-width: 250px;
`;

const ArtistImage = styled.img`
  border-radius: 50%;
  margin-bottom: 15px;
  width: 120px;
  height: 120px;
`;

const ArtistCard = ({ artist }) => {
  const imageUrl = artist.images && artist.images.length > 0 ? artist.images[0].url : 'https://via.placeholder.com/120';
  return (
    <Card>
      <ArtistImage src={imageUrl} alt={artist.name} />
      <h3>{artist.name}</h3>
      <p>Followers: {artist.followers.total.toLocaleString()}</p>
      <a href={artist.external_urls.spotify} target="_blank" rel="noopener noreferrer">
        Open in Spotify
      </a>
    </Card>
  );
};

export default ArtistCard;
