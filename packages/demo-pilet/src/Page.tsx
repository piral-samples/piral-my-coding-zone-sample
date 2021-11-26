import * as React from "react";

interface TodoItem {
  id: number;
  title: string;
  completed: boolean;
}

interface PageProps {
  data: Array<TodoItem>;
}

const Page: React.FC<PageProps> = ({ data }) => (
  <div>
    <h1>Available Todos</h1>
    <ul>
      {data.map((todo) => (
        <li key={todo.id}>
          <span
            style={{ textDecoration: todo.completed ? "line-through" : "none" }}
          >
            {todo.title}
          </span>
        </li>
      ))}
    </ul>
  </div>
);

export default Page;
