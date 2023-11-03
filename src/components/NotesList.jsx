import NotesItem from './NotesItem';

import '../style/NotesList.css';

export default function NotesList({ notes, onDelete, onArchived }) {
  return (
    <div className="notes-list">
      {notes.map((note) => (
        <NotesItem
          key={note.id}
          {...note}
          onDelete={onDelete}
          onArchived={onArchived}
        />
      ))}
    </div>
  );
}
