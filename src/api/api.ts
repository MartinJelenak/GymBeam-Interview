import axios from "axios";

const API_BASE_URL = "https://66956bdb4bd61d8314cb3b25.mockapi.io";

export const updateTodoCompleted = async ({
  todoListId,
  todoId,
  completed,
}: {
  todoListId: string;
  todoId: string;
  completed: boolean;
}): Promise<any> => {
  const url = `${API_BASE_URL}/todoList/${todoListId}/todos/${todoId}`;
  const response = await axios.put(url, {
    completed,
  });
  return response.data;
};

export const createToDo = async ({
  todoListId,
  title,
  deadLine,
  tags,
  priority,
}: {
  todoListId: string;
  title: string;
  deadLine: String;
  tags: string[];
  priority: string;
}): Promise<any> => {
  const response = await axios.post(
    `${API_BASE_URL}/todoList/${todoListId}/todos`,
    {
      title,
      deadLine,
      completed: false,
      tags,
      priority,
    }
  );
  return response.data;
};

export const deleteToDo = async ({
  todoListId,
  todoId,
}: {
  todoListId: string;
  todoId: string;
}): Promise<any> => {
  const response = await axios.delete(
    `${API_BASE_URL}/todoList/${todoListId}/todos/${todoId}`
  );
  return response.data;
};

export const fetchToDoLists = async () => {
  const response = await axios.get(`${API_BASE_URL}/todoList`);
  return response.data;
};

export const fetchToDoListById = async (id: string) => {
  console.log("fetch from api", id, typeof id);
  const response = await axios.get(`${API_BASE_URL}/todoList/${id}`);
  console.log("response.data", response);
  return response.data;
};

export const createToDoList = async ({ name }: { name: string }) => {
  const response = await axios.post(`${API_BASE_URL}/todoList`, {
    name,
  });
  return response.data;
};

export const deleteToDoList = async (id: string) => {
  const response = await axios.delete(`${API_BASE_URL}/todoList/${id}`);
  return response.data;
};

export const updateToDoList = async (id: string, name: string) => {
  const response = await axios.put(`${API_BASE_URL}/todoList/${id}`, {
    name,
  });
  return response.data;
};
