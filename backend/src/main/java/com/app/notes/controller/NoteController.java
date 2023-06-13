package com.app.notes.controller;

import com.app.notes.model.Note;
import com.app.notes.model.ServiceResponse;
import com.app.notes.service.INoteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("note")
@CrossOrigin("*")
public class NoteController {
    @Autowired
    private INoteService iNoteService;

    @GetMapping("/my-notes")
    public ResponseEntity<List<Note>> listMyNotes(){
        var result = iNoteService.findAllMyNotes();
        return new ResponseEntity<>(result, HttpStatus.OK);

    }
    @GetMapping("/archived-notes")
    public ResponseEntity<List<Note>> listArchivedNotes(){
        var result = iNoteService.findAllArchivedNotes();
        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    @PostMapping("/save")
    public ResponseEntity<ServiceResponse> save(@RequestBody Note note){
        ServiceResponse serviceResponse = new ServiceResponse();
        int result = iNoteService.save(note);
        if(result==1){
            serviceResponse.setMessage("Note saved with success");
        }
        return new ResponseEntity<>(serviceResponse, HttpStatus.OK);
    }

    @PutMapping("/update")
    public ResponseEntity<ServiceResponse> update(@RequestBody Note note){
        ServiceResponse serviceResponse = new ServiceResponse();
        int result = iNoteService.update(note);
        if(result==1){
            serviceResponse.setMessage("Note updated with success");
        }
        return new ResponseEntity<>(serviceResponse, HttpStatus.OK);
    }

    @DeleteMapping("delete/{id_note}")
    public ResponseEntity<ServiceResponse> update(@PathVariable int id_note) {
        ServiceResponse serviceResponse = new ServiceResponse();
        int result = iNoteService.deleteById(id_note);
        if(result==1){
            serviceResponse.setMessage("Note removed with success");
        }
        return new ResponseEntity<>(serviceResponse, HttpStatus.OK);

    }


}
