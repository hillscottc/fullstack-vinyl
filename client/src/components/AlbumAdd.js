import React, { useState } from "react";
import "./AlbumAdd.css";

export default function AlbumAdd({ createAlbum, showAddNew, handleHideNew }) {
  const [artist, setArtist] = useState("");
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [condition, setCondition] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      artist,
      title,
      year,
      condition,
    };
    createAlbum(data);
  };

  const showNewClass = showAddNew ? "show-new" : "";

  return (
    <main className="album-add">
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
          <div className="search-param">
            <label htmlFor="newYear">Year: </label>
            <input
              id="newYear"
              type="text"
              placeholder="2020"
              value={year}
              onChange={(e) => setYear(e.target.value)}
            />
          </div>
          <div className="search-param">
            <label htmlFor="newCondition">Condition: </label>
            <input
              id="newCondition"
              type="text"
              placeholder="good"
              value={condition}
              onChange={(e) => setCondition(e.target.value)}
            />
          </div>
          <div>
            <input className="add-btn" type="submit" value="Add" />
            &nbsp;&nbsp;
            <button className="cancel-btn" onClick={(e) => handleHideNew(e)}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
