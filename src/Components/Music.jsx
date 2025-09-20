import React from 'react';
import { Spotify } from 'react-spotify-embed';

export default function Music() {
  const tracks = [
    "https://open.spotify.com/track/4SWWe2OYC4mqf40Gc2RSdl?utm_source=generator",
    "https://open.spotify.com/track/3YRCqOhFifThpSRFJ1VWFM?utm_source=generator",
    "https://open.spotify.com/track/2e3Ea0o24lReQFR4FA7yXH?utm_source=generator",
    "https://open.spotify.com/track/3RkQ3UwOyPqpIiIvGVewuU?utm_source=generator",
    "https://open.spotify.com/track/6HSXNV0b4M4cLJ7ljgVVeh?utm_source=generator",
    "https://open.spotify.com/track/225xvV8r1yKMHErSWivnow?utm_source=generator",
    "https://open.spotify.com/track/1a019wP7IdYLexwbmfZPm3?utm_source=generator",
    "https://open.spotify.com/track/1WIbRLfwD5KXzlknWfyYQ3?utm_source=generator",
    "https://open.spotify.com/track/1Y7FQSN29oNXHZBGMkADeH?utm_source=generator",
    "https://open.spotify.com/track/53XM8O6sQ4YzCq2jYgXuC6?utm_source=generator",
    "https://open.spotify.com/track/2e9OK4HiyXyAH5oEtaxnIc?utm_source=generator",
    "https://open.spotify.com/track/2ctvdKmETyOzPb2GiJJT53?utm_source=generator",
    "https://open.spotify.com/track/5HNCy40Ni5BZJFw1TKzRsC?utm_source=generator",
    "https://open.spotify.com/track/0BR3iNqpitm79yVeXKr0h9?utm_source=generator",
    "https://open.spotify.com/track/1ZQGNfUsuE3ks0TbzOWfV2?utm_source=generator",
    "https://open.spotify.com/track/7ouS63cGMzAiIUKNdy7YwC?utm_source=generator",
    "https://open.spotify.com/track/23xOLfwyxqMbVFLEC32dY6?utm_source=generator",
  ];

  return (
  <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-5'>
      {tracks.map((link, index) => (
        <Spotify
          key={index}
          link={link}
        />
      ))}
    </div>
  );
}
