package com.app.notes.service;

import com.app.notes.model.Note;
import com.app.notes.repository.INoteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NoteService implements INoteService{

    @Autowired
    private INoteRepository iNoteRepository;
    @Override
    public List<Note> findAllMyNotes() {
        List<Note> list;
        try{
            list = iNoteRepository.findAllMyNotes();
        } catch (Exception e) {
            throw e;
        }
        return list;
    }

    @Override
    public List<Note> findAllArchivedNotes() {
        List<Note> list;
        try{
            list = iNoteRepository.findAllArchivedNotes();
        } catch (Exception e) {
            throw e;
        }
        return list;
    }

    @Override
    public int save(Note note) {
        int row;
        try{
            row = iNoteRepository.save(note);
        } catch (Exception e) {
            throw e;
        }
        return row;
    }

    @Override
    public int update(Note note) {
        int row;
        try{
            row = iNoteRepository.update(note);
        } catch (Exception e) {
            throw e;
        }
        return row;
    }

    @Override
    public int deleteById(int id_note) {
        int row;
        try{
            row = iNoteRepository.deleteById(id_note);
        } catch (Exception e) {
            throw e;
        }
        return row;
    }
}
