import Note from "../models/Note.js";

export const createNote = async (req, res) => {
  const { title, content } = req.body;
  const note = await Note.create({ title, content });
  res.status(201).json(note);
};

export const getNotes = async (req, res) => {
  const notes = await Note.find().sort({ createdAt: -1 });
  res.json(notes);
};

export const getNoteById = async (req, res) => {
  const note = await Note.findById(req.params.id);
  res.json(note);
};

export const updateNote = async (req, res) => {
  const { title, content } = req.body;
  const note = await Note.findByIdAndUpdate(
    req.params.id,
    { title, content },
    { new: true }
  );
  res.json(note);
};

export const deleteNote = async (req, res) => {
  await Note.findByIdAndDelete(req.params.id);
  res.json({ message: "Note deleted" });
};