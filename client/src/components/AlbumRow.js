import React from "react";
import "./AlbumRow.css";

export default function AlbumRow({ album }) {
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

  return (
    <div className="album-row">
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
