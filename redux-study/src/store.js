import { configureStore, createSlice } from "@reduxjs/toolkit";

// const ADD = "ADD";
// const DELETE = "DELETE";

const saveState = (state) => {
  localStorage.setItem("toDos", JSON.stringify(state));
};
const loadState = () => {
  const loadedTodo = localStorage.getItem("toDos");
  if (loadedTodo === null) {
    return [];
  }
  return JSON.parse(loadedTodo);
};

// const addToDo = (text) => {
//   return {
//     type: ADD,
//     text,
//   };
// };

// const deleteToDo = (id) => {
//   return {
//     type: DELETE,
//     id: parseInt(id),
//   };
// };

// const reducer = (state = [], action) => {
//   switch (action.type) {
//     // createAction(name of type).type returns type as a string
//     case addToDo.type:
//       // payload comes from actionCreators of mapDispatchToProps function
//       return [...state, { text: action.payload, id: Date.now() }];
//     case deleteToDo.type:
//       return state.filter((toDo) => toDo.id !== action.payload);
//     default:
//       return state;
//   }
// };

// creating action has shortened using redux-toolkit's createAction()

// const addToDo = createAction("ADD");
// const deleteToDo = createAction("DELETE");

// const reducer = createReducer([], {
//   [addToDo]: (state, action) => {
//     // this is possible because createReducer allows state mutation
//     state.push({ text: action.payload, id: Date.now() });
//   },
//   [deleteToDo]: (state, action) =>
//     state.filter((toDo) => toDo.id !== action.payload),
// });

const toDos = createSlice({
  name: "toDoReducer",
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push({ text: action.payload, id: Date.now() });
    },
    remove: (state, action) =>
      state.filter((toDo) => toDo.id !== action.payload),
  },
});

// const store = createStore(reducer, loadState());
const store = configureStore({
  reducer: toDos.reducer,
  preloadedState: loadState(),
});

store.subscribe(() => {
  saveState(store.getState());
});

export const { add, remove } = toDos.actions;

export default store;
