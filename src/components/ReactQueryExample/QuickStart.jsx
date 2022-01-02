import React from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import GlobalLoader from "./GlobalLoader";
import { getTodos, postTodos } from "./my-apis";

export default function QuickStart() {
  const queryClient = useQueryClient();
  const query = useQuery("todos", getTodos);
  const mutation = useMutation(postTodos, {
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
    },
  });

  if (query.isLoading) {
    return <div>loading...</div>;
  }
  if (query.error) {
    return <div>Error...</div>;
  }
  console.log(query.data);

  return (
    <div>
      <GlobalLoader />
      <ul>
        {query.data.map((todo) => {
          return <li key={todo.id}>{todo.title}</li>;
        })}
      </ul>
      <button
        onClick={() => {
          mutation.mutate({
            id: Date.now(),
            title: "Learn React-Query",
          });
        }}
      >
        Add Todo
      </button>
    </div>
  );
}
