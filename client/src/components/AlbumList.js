import React from "react";
import AlbumRow from "./AlbumRow";
import "./AlbumList.css";

export default function AlbumList({ albums }) {
  return (
    <section>
      <div className="search-param">
        <label htmlFor="searchTitle">Title contains</label>
        <input id="searchTitle" type="text" placeholder="Title" />
      </div>
      <div className="search-param">
        <label htmlFor="searchArtist">Artist Name contains</label>
        <input id="searchArtist" type="text" placeholder="Artist" />
      </div>
      <div className="search-grid">
        <div className="search-grid__header">
          <div className="search-grid__header__item">Id</div>
          <div className="search-grid__header__item">Artist</div>
          <div className="search-grid__header__item">Title</div>
          <div className="search-grid__header__item">Year</div>
          <div className="search-grid__header__item">Condition</div>
          <div className="search-grid__header__item">Thumbnail</div>
          <div className="search-grid__header__item">Updated at</div>
          <div className="search-grid__header__item">Created at</div>
        </div>
        <div className="search-grid__body">
          {!albums && <div>"There is no album data available."</div>}
          {albums &&
            albums.map((album) => {
              return <AlbumRow key={album.id} album={album} />;
            })}
        </div>
      </div>
    </section>
  );
}
