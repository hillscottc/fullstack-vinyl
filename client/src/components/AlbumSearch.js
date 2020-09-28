import React, { useState, useEffect } from "react";
import "./AlbumSearch.css";

export default function AlbumSearch({ showSearch, getAlbumsByArtist }) {
  const [artist, setArtist] = useState("");

  useEffect(() => {
    getAlbumsByArtist(artist);
  }, [artist, getAlbumsByArtist]);

  const handleArtist = (e) => {
    e.preventDefault();
    setArtist(e.target.value);
  };

  const showSearchClass = showSearch ? "show-search" : "";

  return (
    <main className={`album-search ${showSearchClass}`}>
      <br />
      <div className="search-param">
        <label htmlFor="searchArtist">Filter by Artist: </label>
        <input
          id="searchArtist"
          type="text"
          placeholder="Artist"
          value={artist}
          onChange={handleArtist}
        />
      </div>
      <br />
    </main>
  );
}
