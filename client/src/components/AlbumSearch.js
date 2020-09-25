import React from "react";
import "./AlbumSearch.css";

export default function AlbumSearch({ showSearch }) {
  const showSearchClass = showSearch ? "show-search" : "";

  return (
    <section className={`album-search ${showSearchClass}`}>
      <h3>Search</h3>
      <div className="search-param">
        <label htmlFor="searchArtist">Artist contains: </label>
        <input id="searchArtist" type="text" placeholder="Artist" />
      </div>
      <div className="search-param">
        <label htmlFor="searchTitle">Title contains: </label>
        <input id="searchTitle" type="text" placeholder="Title" />
      </div>
    </section>
  );
}
