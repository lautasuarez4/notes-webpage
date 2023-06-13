package com.app.notes.repository;

import com.app.notes.model.Note;

import java.util.List;

public interface INoteRepository {

    public List<Note> findAllMyNotes();
    public List<Note> findAllArchivedNotes();
    public int save(Note note);
    public int update(Note note);
    public int deleteById(int id);
}
