import React, { useState } from "react";
import "./AlbumAdd.css";

export default function AlbumAdd({ createAlbum, showAddNew, handleHideNew }) {
  const [artist, setArtist] = useState("");
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      artist,
      title,
    };
    createAlbum(data);
  };

  const showNewClass = showAddNew ? "show-new" : "";

  return (
    <section className="album-add">
      <div className={`album-add__new ${showNewClass}`}>
        <h3>Add new</h3>
        <form onSubmit={handleSubmit}>
          <div className="search-param">
            <label htmlFor="newArtist">Artist: </label>
            <input
              id="newArtist"
              type="text"
              placeholder="Artist"
              value={artist}
              onChange={(e) => setArtist(e.target.value)}
            />
          </div>
          <div className="search-param">
            <label htmlFor="newTitle">Title: </label>
            <input
              id="newTitle"
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <input type="submit" value="Submit" />
            <button className="" onClick={(e) => handleHideNew(e)}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
