import React from "react";
import AlbumRow from "./AlbumRow";
import "./AlbumList.css";

export default function AlbumList({ albums, deleteAlbum }) {
  function handleExport(e) {
    e.preventDefault();
    console.log("The link was clicked.");
  }

  return (
    <section>
      <div className="grid">
        <div className="grid__header">
          <div className="grid__header__item">Id</div>
          <div className="grid__header__item">Artist</div>
          <div className="grid__header__item">Title</div>
          <div className="grid__header__item">Year</div>
          <div className="grid__header__item">Condition</div>
          <div className="grid__header__item">Thumbnail</div>
          <div className="grid__header__item">Updated at</div>
          <div className="grid__header__item">Created at</div>
        </div>
        <div className="grid__body">
          {!albums && <div>"There is no album data available."</div>}
          {albums &&
            albums.map((album) => {
              return (
                <AlbumRow
                  key={album.id}
                  album={album}
                  deleteAlbum={deleteAlbum}
                />
              );
            })}
        </div>
        <button className="album-add__export-btn" onClick={handleExport}>
          Export to CSV
        </button>
      </div>
    </section>
  );
}
