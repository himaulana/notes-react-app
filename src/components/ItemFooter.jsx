export default function ItemFooter({
  id,
  archived,
  date,
  onDelete,
  onArchived,
}) {
  return (
    <div>
      <button onClick={() => onDelete(id)}>Delete</button>
      <button onClick={() => onArchived(id)}>
        {archived !== true ? 'Archived' : 'Back'}
      </button>
      <p>{date}</p>
    </div>
  );
}
