import React, { useState, useEffect } from "react";
import AlbumAdd from "./components/AlbumAdd";
import AlbumList from "./components/AlbumList";
import AlbumSearch from "./components/AlbumSearch";
import "./App.css";

const HOST_URL = "http://localhost:3001";

function App() {
  const [albums, setAlbums] = useState(false);
  const [showAddNew, setShowAddNew] = useState(false);
  const [showSearch, setShowSearch] = useState(true);

  useEffect(() => {
    getAlbums();
  }, []);

  function getAlbums() {
    fetch(HOST_URL)
      .then((response) => response.json())
      .then((data) => setAlbums(data));
  }

  function getAlbumsByArtist(artist) {
    fetch(`${HOST_URL}/albums?artist=${artist}`)
      .then((response) => response.json())
      .then((data) => setAlbums(data));
  }

  function createAlbum(data) {
    fetch(`${HOST_URL}/albums`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        return response.text();
      })
      .then((data) => {
        alert(data);
        getAlbums();
      });
  }

  function deleteAlbum(id) {
    fetch(`${HOST_URL}/albums/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        return response.text();
      })
      .then((data) => {
        alert(data);
        getAlbums();
      });
  }

  const handleShowNew = (e) => {
    e.preventDefault();
    setShowAddNew(true);
    setShowSearch(false);
  };

  const handleHideNew = (e) => {
    e.preventDefault();
    setShowAddNew(false);
    setShowSearch(true);
  };

  return (
    <main className="App">
      <h1>VinylStars</h1>
      <h2>Albums </h2>
      <button className="album-add__btn" onClick={handleShowNew}>
        New
      </button>
      <AlbumAdd
        createAlbum={createAlbum}
        showAddNew={showAddNew}
        handleHideNew={handleHideNew}
      />
      <AlbumSearch
        showSearch={showSearch}
        getAlbumsByArtist={getAlbumsByArtist}
      />
      <AlbumList albums={albums} deleteAlbum={deleteAlbum} />
    </main>
  );
}

export default App;
