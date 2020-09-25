import React from "react";
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

  return (
    <div className="album-row">
      <button onClick={(e) => handleDelete(id, e)}>X</button>
      <div className="album-row__field">{id}</div>
      <div className="album-row__field">{artist}</div>
      <div className="album-row__field">{title}</div>
      <div className="album-row__field">{year}</div>
      <div className="album-row__field">{condition}</div>
      <div className="album-row__field">{thumb}</div>
      <div className="album-row__field">{updated_at}</div>
      <div className="album-row__field">{created_at}</div>
    </div>
  );
}
