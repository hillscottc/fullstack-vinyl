import React, { useState } from "react";
import "./AlbumAdd.css";

export default function AlbumAdd({ createAlbum }) {
  const [showNew, setShowNew] = useState(false);
  const [artist, setArtist] = useState("");
  const [title, setTitle] = useState("");

  function handleShowNew(e, setTo = true) {
    e.preventDefault();
    setShowNew(setTo);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      artist,
      title,
    };
    createAlbum(data);
  };

  const handleCancel = (e) => {
    e.preventDefault();
    setShowNew(false);
  };

  const showNewClass = showNew ? "show-new" : "";

  return (
    <section className="album-add">
      <div className="album-add__header">
        <div className="album-add__header__title">Albums</div>
        <button className="album-add__btn" onClick={handleShowNew}>
          New
        </button>
      </div>
      <div className={`album-add__new ${showNewClass}`}>
        <h2>Add new:</h2>

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
            <button className="" onClick={handleCancel}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
