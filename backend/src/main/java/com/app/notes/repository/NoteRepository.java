package com.app.notes.repository;

import com.app.notes.model.Note;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class NoteRepository implements INoteRepository {

    @Autowired
    private JdbcTemplate jdbcTemplate;
    @Override
    public List<Note> findAllMyNotes() {
        String SQL = "SELECT * FROM notes WHERE deleted=0 and archived=0";
        return jdbcTemplate.query(SQL, BeanPropertyRowMapper.newInstance(Note.class));
    }

    @Override
    public List<Note> findAllArchivedNotes() {
        String SQL = "SELECT * FROM notes WHERE deleted=0 and archived=1";
        return jdbcTemplate.query(SQL, BeanPropertyRowMapper.newInstance(Note.class));
    }

    @Override
    public int save(Note note) {
        String SQL = "INSERT INTO notes VALUES(default,?,?,?,?,?)";
        return jdbcTemplate.update(SQL, new Object[]{note.getTitle(), note.getContent(), note.getLastUpdated(), note.getArchived(), note.getDeleted()});
    }

    @Override
    public int update(Note note) {
        String SQL = "UPDATE notes SET title=?, content=?, lastUpdated=?, archived=?, deleted=? WHERE id_note = ?";
        return jdbcTemplate.update(SQL, new Object[]{note.getTitle(), note.getContent(), note.getLastUpdated(), note.getArchived(), note.getDeleted(), note.getId_note()});
    }

    @Override
    public int deleteById(int id) {
        String SQL = "UPDATE notes SET deleted=1 WHERE id_note=?";
        return jdbcTemplate.update(SQL, new Object[]{id});
    }
}
