const express = require("express");

const router = express.Router();

const articleCtrl = require("../controllers/articleController");

const auth = require("../authentification/authMiddleware");

router.get("/", articleCtrl.getAllArticles);
router.post("/", auth, articleCtrl.createArticle);
router.get("/:id", articleCtrl.getOneArticle);
router.put("/:id", auth, articleCtrl.modifyArticle);
router.delete("/:id", auth, articleCtrl.deleteArticle);

module.exports = router;
