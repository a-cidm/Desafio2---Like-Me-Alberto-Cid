const express = require("express")
const cors = require("cors") // 1. Habilitar CORS
const { Pool } = require("pg") // 2. Usar pg para la base de datos

const app = express()
app.use(cors()) // 1. Habilitar CORS
app.use(express.json())

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "likeme",
  password: "toor",
  port: 5432,
})

app.get("/posts", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM posts")
    res.json(result.rows)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: "Error al obtener los posts" })
  }
})

app.post("/posts", async (req, res) => {
  const { titulo, img, descripcion } = req.body
  try {
    const result = await pool.query(
      "INSERT INTO posts (titulo, img, descripcion, likes) VALUES ($1, $2, $3, 0) RETURNING *",
      [titulo, img, descripcion]
    )
    res.status(201).json(result.rows[0])
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: "Error al crear el post" })
  }
})

app.delete("/posts/:id", async (req, res) => {
  const { id } = req.params
  try {
    await pool.query("DELETE FROM posts WHERE id = $1", [id])
    res.status(200).json({ message: "Post eliminado" })
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: "Error al eliminar el post" })
  }
})

app.put("/posts/like/:id", async (req, res) => {
  const { id } = req.params
  try {
    await pool.query("UPDATE posts SET likes = likes + 1 WHERE id = $1", [id])
    res.status(200).json({ message: "Like agregado" })
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: "Error al dar like" })
  }
})

app.listen(3000, () => {
  console.log("Servidor corriendo en puerto 3000")
})
