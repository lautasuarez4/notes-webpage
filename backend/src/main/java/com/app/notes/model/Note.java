package com.app.notes.model;

import lombok.Data;
import org.springframework.data.annotation.Id;

import java.util.Date;

@Data
public class Note {

    @Id
    int id_note;
    String title;
    String content;
    Date lastUpdated;
    boolean archived;
    boolean deleted;

    public boolean getArchived(){
        return this.archived;
    }
    public boolean getDeleted(){
        return this.deleted;
    }

}
