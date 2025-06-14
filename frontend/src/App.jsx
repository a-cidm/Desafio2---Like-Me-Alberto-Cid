import React, { useEffect, useState } from "react";
import Form from "./components/Form";
import Post from "./components/Post";
const urlBaseServer = "http://localhost:3000";

function App() {
  const [titulo, setTitulo] = useState("");
  const [imgSrc, setImgSrc] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    const res = await fetch(urlBaseServer + "/posts");
    const posts = await res.json();
    setPosts([...posts]);
  };

  const agregarPost = async () => {
    const post = { titulo, img: imgSrc, descripcion };
    await fetch(urlBaseServer + "/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(post),
    });
    getPosts();
  };

  const like = async (id) => {
    await fetch(urlBaseServer + `/posts/like/${id}`, {
      method: "PUT",
    });
    getPosts();
  };

  const eliminarPost = async (id) => {
    await fetch(urlBaseServer + `/posts/${id}`, {
      method: "DELETE",
    });
    getPosts();
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="App">
      <h2 className="py-5 text-center">&#128248; Like Me &#128248;</h2>
      <div className="row m-auto px-5">
        <div className="col-12 col-sm-4">
          <Form
            setTitulo={setTitulo}
            setImgSrc={setImgSrc}
            setDescripcion={setDescripcion}
            agregarPost={agregarPost}
          />
        </div>
        <div className="col-12 col-sm-8 px-5 row posts align-items-start">
          {posts.map((post) => (
            <Post
              key={post.id} // Usa el id del post
              post={post}
              like={like}
              eliminarPost={eliminarPost}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
