import '../style/NotesItem.css';

export default function NotesItem({
  id,
  title,
  body,
  archived,
  createdAt,
  onDelete,
  onArchived,
}) {
  return (
    <div className="note-item__container">
      <h2>{title}</h2>
      <div className="note-item__body">
        <p>{body}</p>
      </div>
      <div className="note-item__footer">
        <div className="buttons">
          <button onClick={() => onDelete(id)}>Delete</button>
          <button onClick={() => onArchived(id)}>
            {archived !== true ? 'Archived' : 'Back'}
          </button>
        </div>
        <p className="date">{createdAt}</p>
      </div>
      <hr />
    </div>
  );
}
