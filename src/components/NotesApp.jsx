import React from 'react';
import NotesList from './NotesList';
import NotesInput from './NotesInput';
import { getData, showFormattedDate } from '../database/source';
import NotesSearch from './NotesSearch';

export default class NotesApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getData(),
      filteredNotes: getData(),
    };
  }

  componentDidMount() {
    this.changeFormattedNotes(false);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.notes !== this.state.notes) {
      this.changeFormattedNotes();
    }
  }

  changeFormattedNotes = (archived) => {
    const formattedNotes = this.state.notes.map((note) => {
      return {
        ...note,
        createdAt: showFormattedDate(note.createdAt),
        updatedAt: showFormattedDate(note.createdAt),
      };
    });

    const filteredNotes = formattedNotes.filter((note) => {
      return note.archived === archived;
    });

    filteredNotes.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    this.setState({
      filteredNotes,
    });
  };

  onArchivedHandler = (id) => {
    const noteIndex = this.state.notes.findIndex((note) => note.id === id);

    if (noteIndex !== -1) {
      const updatedNotes = [...this.state.notes];
      const tempArchived = updatedNotes[noteIndex].archived;
      updatedNotes[noteIndex].archived = !tempArchived;

      this.setState({
        notes: updatedNotes,
      });
    }
  };

  onSubmitHandler = ({ title, body }) => {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            createdAt: new Date(),
            archived: false,
          },
        ],
      };
    });
  };

  onSearchHandler = (query) => {
    const filteredNotes = this.state.notes
      .filter((note) => {
        return note.title.toLowerCase().includes(query.toLowerCase());
      })
      .map((note) => {
        return {
          ...note,
          createdAt: showFormattedDate(note.createdAt),
        };
      });

    this.setState({
      filteredNotes,
    });
  };

  onDeleteHandler = (id) => {
    const filteredNotes = this.state.filteredNotes.filter(
      (note) => note.id !== id
    );

    this.setState({
      filteredNotes,
    });
  };

  render() {
    return (
      <>
        <NotesInput addNote={this.onSubmitHandler} />
        <NotesSearch searchNote={this.onSearchHandler} />
        <button onClick={() => this.changeFormattedNotes(false)}>
          NO Archived
        </button>
        <button onClick={() => this.changeFormattedNotes(true)}>
          Archived
        </button>
        <NotesList
          notes={this.state.filteredNotes}
          onDelete={this.onDeleteHandler}
          onArchived={this.onArchivedHandler}
        />
      </>
    );
  }
}
