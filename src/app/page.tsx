import TodoItem from "./components/TodoItem";
import { toggleItem, getTodoList, deleteItem } from "./request";
import Header from "./components/Header";

const Home = async () => {
  const todoList = await getTodoList();
  return (
    <>
      <Header />
      <ul className="pl-4">
        {todoList.map(({ id, complete, title }) => (
          <TodoItem
            key={id}
            id={id}
            title={title}
            complete={complete}
            toggleItem={toggleItem}
            deleteItem={deleteItem}
          />
        ))}
      </ul>
    </>
  );
};

export default Home;
