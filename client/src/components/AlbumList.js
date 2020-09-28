import React from "react";
import * as XDate from "xdate";
import * as download from "downloadjs";
import AlbumRow from "./AlbumRow";
import "./AlbumList.css";

export default function AlbumList({ albums, deleteAlbum }) {
  const handleExport = (e) => {
    e.preventDefault();
    const csv = albumsToCsv();
    download(csv, "albums.csv", "text/plain");
  };

  const albumsToCsv = () => {
    let csv = "";
    for (let album of albums) {
      const { id, artist, title, year, condition, created_at } = album;
      const parsedCreateed = new XDate(created_at);
      const createdStr = parsedCreateed.toString("M/d/yy h(:mm)TT");
      csv += `${id},${title},${artist},${year},${condition},${createdStr}\n`;
    }
    return csv;
  };

  return (
    <main className="grid">
      <header className="grid__header">
        {["Id", "Artist", "Title", "Year", "Condition", "Created At"].map(
          (heading) => (
            <div key={heading} className="grid__header__item">
              {heading}
            </div>
          )
        )}
      </header>
      <section className="grid__body">
        {!albums && <div>"There is no album data available."</div>}
        {albums &&
          albums.map((album, ndx) => {
            const isOdd = ndx % 2 !== 0;
            return (
              <AlbumRow
                key={album.id}
                album={album}
                deleteAlbum={deleteAlbum}
                isOdd={isOdd}
              />
            );
          })}
      </section>
      <button className="export-btn" onClick={handleExport}>
        Export to CSV
      </button>
    </main>
  );
}
