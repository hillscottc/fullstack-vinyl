import React from "react";
import "./AlbumAdd.css";

export default function AlbumAdd() {
  function handleAdd(e) {
    e.preventDefault();
    console.log("The link was clicked.");
  }
  function handleExport(e) {
    e.preventDefault();
    console.log("The link was clicked.");
  }
  return (
    <section className="album-add">
      <div className="album-add__header">
        <div className="album-add__header__title">Albums</div>
        <button className="album-add__btn" onClick={handleAdd}>
          New
        </button>
      </div>
      <button className="album-add__export-btn" onClick={handleExport}>
        Export to CSV
      </button>
    </section>
  );
}
