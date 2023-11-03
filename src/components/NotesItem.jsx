import ItemBody from './ItemBody';
import ItemFooter from './ItemFooter';
import ItemTitle from './ItemTitle';

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
    <div>
      <ItemTitle title={title} />
      <ItemBody body={body} />
      <ItemFooter
        id={id}
        archived={archived}
        date={createdAt}
        onDelete={onDelete}
        onArchived={onArchived}
      />
    </div>
  );
}
