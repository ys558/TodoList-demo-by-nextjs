"use client"
type TodoItemProps = {
  id: string;
  title: string;
  complete: boolean;
  toggleItem: (id: string, complete: boolean) => void;
  deleteItem: (id: string) => void;
};

const TodoItem = ({ id, title, complete, toggleItem, deleteItem }: TodoItemProps) => {
  return <li className="flex gap-1 items-center">
    <input
      id={id}
      type="checkbox"
      className="cursor-pointer peer"
      defaultChecked={complete} 
      onChange={e => toggleItem(id, e.target.checked)}
    />
    <label htmlFor={id} className="peer-checked:line-through">
      {title}
    </label>
    <div
      className="cursor-pointer rounded-full"
      onClick={() => deleteItem(id)}
    >
      ❌
    </div>
  </li>;
};

export default TodoItem;