import React, { useState } from "react";
import axios from "axios";

const ArtistSearch = ({ token }) => {
  const [searchKey, setSearchKey] = useState("");
  const [artists, setArtists] = useState([]);

  const searchArtists = async (e) => {
    e.preventDefault();
    const { data } = await axios.get("https://api.spotify.com/v1/search", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        q: searchKey,
        type: "artist",
        limit: 3,
      },
    });
    setArtists(data.artists.items);
  };

  const renderArtists = () => {
    return artists.map((artist) => (
      <div key={artist.id}>
        {artist.images.length ? (
          <img src={artist.images[1].url} alt="" />
        ) : (
          <div>No image</div>
        )}
        {artist.name}
      </div>
    ));
  };

  return (
    <form onSubmit={searchArtists}>
      <input type="text" onChange={(e) => setSearchKey(e.target.value)} />
      <button type="submit">Search</button>
      {renderArtists()}
    </form>
  );
};

export default ArtistSearch;
