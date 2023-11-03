import NotesInput from './NotesInput';
import NotesItem from './NotesItem';

export default function NotesList({ notes, onDelete, onArchived }) {
  return (
    <>
      {notes.map((note) => (
        <NotesItem
          key={note.id}
          {...note}
          onDelete={onDelete}
          onArchived={onArchived}
        />
      ))}
    </>
  );
}
