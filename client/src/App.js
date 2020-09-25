import React, { useState, useEffect } from "react";
import AlbumAdd from "./components/AlbumAdd";
import AlbumList from "./components/AlbumList";
import "./App.css";

const HOST_URL = "http://localhost:3001";

function App() {
  const [albums, setAlbums] = useState(false);

  function getAlbums() {
    fetch(HOST_URL)
      .then((response) => response.json())
      .then((data) => setAlbums(data));
  }
  function createAlbum() {
    let title = prompt("Enter album name");
    let email = prompt("Enter album title");

    fetch("http://localhost:3001/albums", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, email }),
    })
      .then((response) => {
        return response.text();
      })
      .then((data) => {
        alert(data);
        getAlbums();
      });
  }

  function deleteAlbum() {
    let id = prompt("Enter album id");

    fetch(`http://localhost:3001/albums/${id}`, {
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

  useEffect(() => {
    getAlbums();
  }, []);

  return (
    <div className="App">
      <h2>VinylStars</h2>
      <button onClick={createAlbum}>Add</button>
      &nbsp;&nbsp;
      <button onClick={deleteAlbum}>Delete</button>
      <AlbumAdd />
      <AlbumList albums={albums} />
    </div>
  );
}

export default App;
