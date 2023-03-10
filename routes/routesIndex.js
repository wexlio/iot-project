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

router.post("/api", (req, res) => {
  const { title, description } = req.body;
  console.log(req.body);
  global.datos = req.body;
  
    return res.json({
      message: "Datos recibidos: "+title+", "+description,
    });
});

router.post("/led", (req, res) => {
  const { led } = req.body;
  console.log(req.body);
  global.led = req.body;
  if (led === true) {
    return res.json({
      message: "Encender-led",
    });
  }
  else if (led === false) {
    return res.json({
      message: "Apagar-led",
    });
  } else {
    return res.json({
      message: "El led no funciona",
    });
  }
});
router.get("/led", (req, res) => {
  
  if (global.led.led === true) {
    return res.send("Encender-led");
  }
  else if (global.led.led === false) {
    return res.send("Apagar-led");
  } else {
    return res.send("Algo malo ocurrió en el boton switch de react o se cayo react");
  }
});

module.exports = router;
