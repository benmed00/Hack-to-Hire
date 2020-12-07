const express = require("express");

const router = express.Router();

const articleCtrl = require("../controllers/articleController");

const auth = require("../authentification/authMiddleware");

const authorize = require("../middleware/role");


router.get("/", authorize(), articleCtrl.getAllArticles);
router.post("/", authorize(), articleCtrl.createArticle);
router.get("/:id", authorize(), articleCtrl.getOneArticle);
router.put("/:id", authorize(), articleCtrl.modifyArticle);
router.delete("/:id", authorize(), articleCtrl.deleteArticle);

module.exports = router;
