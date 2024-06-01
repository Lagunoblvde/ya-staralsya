import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  border: 2px solid #ff6347;
  padding: 25px;
  margin: 15px;
  text-align: center;
  border-radius: 15px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  background-color: #f0f0f0;
  max-width: 250px;
`;

const SongImage = styled.img`
  border-radius: 15px;
  margin-bottom: 15px;
  width: 120px;
  height: 120px;
`;

const Player = styled.audio`
  width: 100%;
  margin-top: 15px;
  border-radius: 15px;
  outline: none;

  &::-webkit-media-controls-panel {
    background-color: #ff6347;
    border-radius: 15px;
  }

  &::-webkit-media-controls-play-button,
  &::-webkit-media-controls-current-time-display,
  &::-webkit-media-controls-time-remaining-display,
  &::-webkit-media-controls-timeline {
    color: white;
  }
`;

const SongCard = ({ song }) => {
  const imageUrl = song.album.images && song.album.images.length > 0 ? song.album.images[0].url : 'https://via.placeholder.com/120';
  return (
    <Card>
      <SongImage src={imageUrl} alt={song.name} />
      <h3>{song.name}</h3>
      <p>{song.artists.map(artist => artist.name).join(', ')}</p>
      <Player controls src={song.preview_url}>
        Your browser does not support the audio element.
      </Player>
    </Card>
  );
};

export default SongCard;
