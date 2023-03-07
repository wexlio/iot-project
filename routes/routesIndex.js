const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    header: "Lo hiciste bien",
    puntuacion: "20/20",
  });
});

router.get("/muestra", (req, res) => {
  res.json(global.datos);
});

router.post("/", (req, res) => {
  const { title, description } = req.body;
  console.log(req.body)
  
    global.datos = req.body;
    return res.json({
      message: "Datos recibidos correctamente"
    });

});

module.exports = router;
