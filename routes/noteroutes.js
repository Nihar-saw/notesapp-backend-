import express from "express";
import {
  createNote,
  getNotes,
  getNoteById,
  updateNote,
  deleteNote
} from "../controllers/noteController.js";

const router = express.Router();

router.route("/")
  .post(createNote)
  .get(getNotes);

router.route("/:id")
  .get(getNoteById)
  .put(updateNote)
  .delete(deleteNote);

export default router;