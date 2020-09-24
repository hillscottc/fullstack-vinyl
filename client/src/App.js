import React, { useState, useEffect } from "react";

function App() {
  const [albums, setAlbums] = useState(false);

  useEffect(() => {
    getAlbum();
  }, []);

  function getAlbum() {
    fetch("http://localhost:3001")
      .then((response) => {
        return response.text();
      })
      .then((data) => {
        setAlbums(data);
      });
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
        getAlbum();
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
        getAlbum();
      });
  }

  return (
    <div>
      {albums ? albums : "There is no album data available"}
      <br />
      <button onClick={createAlbum}>Add</button>
      <br />
      <button onClick={deleteAlbum}>Delete</button>
    </div>
  );
}

export default App;
