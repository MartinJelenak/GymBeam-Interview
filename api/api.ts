import axios from 'axios';

const API_BASE_URL = 'https://6602e5e39d7276a75554873a.mockapi.io/apiamcef/v1';

export const updateTodoCompleted = async ({ todoListId, todoId, completed }: { todoListId: string, todoId: string, completed: boolean }): Promise<any> => {
    const url = `${API_BASE_URL}/todolists/${todoListId}/todos/${todoId}`;
    const response = await axios.put(url, {
        completed,
    });
    return response.data;
};

export const createToDo = async ({ todoListId, title, description, deadline }: { todoListId: string, title: string, description: string, deadline: Date }): Promise<any> => {
    const response = await axios.post(`${API_BASE_URL}/todolists/${todoListId}/todos`, {
        title,
        description,
        deadline,
        completed: false,
    });
    return response.data;
}

export const deleteToDo = async ({ todoListId, todoId }: { todoListId: string, todoId: string }): Promise<any> => {
    const response = await axios.delete(`${API_BASE_URL}/todolists/${todoListId}/todos/${todoId}`);
    return response.data;
}





export const fetchToDoLists = async () => {
    const response = await axios.get(`${API_BASE_URL}/todolists`);
    return response.data;
}

export const createToDoList = async ({ name }: { name: string }) => {
    const response = await axios.post(`${API_BASE_URL}/todolists`, {
        name,
    });
    return response.data;
}

export const deleteToDoList = async (id: string) => {
    const response = await axios.delete(`${API_BASE_URL}/todolists/${id}`);
    return response.data;
}

export const updateToDoList = async (id: string, name: string) => {
    const response = await axios.put(`${API_BASE_URL}/todolists/${id}`, {
        name,
    });
    return response.data;
}