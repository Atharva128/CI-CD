const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: "DevOps Project Running 🚀",
    version: "v1"
  });
});

router.get('/health', (req, res) => {
  res.status(200).json({ status: "OK" });
});

module.exports = router;