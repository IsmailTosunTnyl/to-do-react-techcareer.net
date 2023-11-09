import {
    createSlice,
    createAsyncThunk,
    createSelector,
    createEntityAdapter
} from "@reduxjs/toolkit";
import axios from "axios";

const POSTS_URL = 'http://localhost:8082/api/todo';



const initialState = {
    todos: [],
    status: 'idle',
    error: null,
    visible:true,
};




export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
    const response = await axios.get(POSTS_URL);
    console.log("fetchTodos");
    return response.data;
});

export const addTodoAsync = createAsyncThunk('todos/addTodoAsync', async (payload) => {
    const response = await axios.post(POSTS_URL, payload);
    return response.data;
});

export const updateTodoAsync = createAsyncThunk('todos/updateTodoAsync', async (payload) => {
    const response = await axios.patch(`${POSTS_URL}/${payload.id}`, payload);
    return response.data;
});

export const deleteTodoAsync = createAsyncThunk('todos/deleteTodoAsync', async (payload) => {
    const response = await axios.delete(`${POSTS_URL}/${payload.id}`);
    return response.data;
});



const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        doneTodos(state, action) {
           state.todos.map((todo) => {
                if (todo.status === true) {
                    todo.visible = true;
                }
                else
                    todo.visible = false;
              
            })
        },
        allTodos(state, action) {
            state.todos.map((todo) => {
                todo.visible = true;
            })
        },

        undoneTodos(state, action) {
            state.todos.map((todo) => {
                if (todo.status === false) {
                    todo.visible = true;
                }
                else
                    todo.visible = false;
            })
        },
        
  
      

        
        
    },
    extraReducers:{
        [fetchTodos.pending]: (state, action) => {
            state.status = 'loading';
        },
        [fetchTodos.fulfilled]: (state, action) => {
            state.status = 'succeeded';
            state.todos = state.todos.concat(action.payload);

        },
        [fetchTodos.rejected]: (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        },

        [addTodoAsync.fulfilled]: (state, action) => {
            state.todos.push({...action.payload,visible:true});
        },

        [updateTodoAsync.fulfilled]: (state, action) => {
            state.status = 'succeeded';
            const index = state.todos.findIndex((todo) => todo.id === action.payload.id);
            if (index !== -1) {
                state.todos[index].status = action.payload.status;
            }
        },
        [updateTodoAsync.rejected]: (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        },
        [deleteTodoAsync.fulfilled]: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
        },
    

    }

});

export const selectAllTodos = (state) => state.todos.todos;
export const selectTodoStatus = (state) => state.todos.status;
export const selectTodoError = (state) => state.todos.error;
export const { doneTodos,allTodos,undoneTodos } = todoSlice.actions;
export default todoSlice.reducer;


