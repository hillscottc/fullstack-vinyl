import React from "react";
import * as XDate from "xdate";
import "./AlbumRow.css";

export default function AlbumRow({ album, deleteAlbum, isOdd }) {
  const { id, artist, title, year, condition, created_at } = album;

  const handleDelete = (id, e) => {
    e.preventDefault();
    deleteAlbum(id);
  };

  const parsedCreateed = new XDate(created_at);
  const dateStr = parsedCreateed.toString("M/d/yy h(:mm)TT");

  const oddClass = isOdd ? "" : "odd";

  return (
    <div className={`album-row ${oddClass}`}>
      <button className="delBtn" onClick={(e) => handleDelete(id, e)}>X</button>
      <div className="album-row__field">{id}</div>
      <div className="album-row__field">{artist}</div>
      <div className="album-row__field">{title}</div>
      <div className="album-row__field">{year}</div>
      <div className="album-row__field">{condition}</div>
      <div className="album-row__field">{dateStr}</div>
    </div>
  );
}
