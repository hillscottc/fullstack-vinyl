import React, { useState, useEffect } from "react";
import "./AlbumSearch.css";

export default function AlbumSearch({ showSearch, getAlbumsByArtist }) {
  const [artist, setArtist] = useState("");

  useEffect(() => {
    getAlbumsByArtist(artist);
  }, [artist]);

  const handleArtist = (e) => {
    e.preventDefault();
    setArtist(e.target.value);
  };

  const showSearchClass = showSearch ? "show-search" : "";

  return (
    <main className={`album-search ${showSearchClass}`}>
      <h3>Search</h3>
      <div className="search-param">
        <label htmlFor="searchArtist">Artist contains: </label>
        <input
          id="searchArtist"
          type="text"
          placeholder="Artist"
          value={artist}
          onChange={handleArtist}
        />
      </div>
      {/* <div className="search-param">
        <label htmlFor="searchTitle">Title contains: </label>
        <input id="searchTitle" type="text" placeholder="Title" />
      </div> */}
    </main>
  );
}
