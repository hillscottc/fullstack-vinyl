import React from "react";
import * as XDate from "xdate";
import "./AlbumRow.css";

export default function AlbumRow({ album, deleteAlbum }) {
  const {
    id,
    artist,
    title,
    year,
    condition,
    thumb,
    created_at,
    updated_at,
  } = album;

  const handleDelete = (id, e) => {
    e.preventDefault();
    deleteAlbum(id);
  };

  const parsedUpdated = new XDate(updated_at);
  const parsedCreateed = new XDate(created_at);
  const dateFormat = "M/d/yy h(:mm)TT";

  return (
    <div className="album-row">
      <button onClick={(e) => handleDelete(id, e)}>X</button>
      <div className="album-row__field">{id}</div>
      <div className="album-row__field">{artist}</div>
      <div className="album-row__field">{title}</div>
      <div className="album-row__field">{year}</div>
      <div className="album-row__field">{condition}</div>
      <div className="album-row__field">{thumb}</div>
      <div className="album-row__field">
        {parsedUpdated.toString(dateFormat)}
      </div>
      <div className="album-row__field">
        {parsedCreateed.toString(dateFormat)}
      </div>
    </div>
  );
}
