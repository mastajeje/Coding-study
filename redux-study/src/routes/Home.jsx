import { useState } from "react";
import { connect } from "react-redux";
import ToDo from "../components/ToDo";
import { add } from "../store";

function Home({ toDos, addToDo }) {
  const [text, setText] = useState("");

  const onChange = (e) => {
    setText(e.target.value);
  };
  console.log(toDos);
  const onSubmit = (e) => {
    e.preventDefault();
    addToDo(text);

    setText("");
  };
  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul>
        {toDos.map((toDo) => (
          <ToDo {...toDo} key={toDo.id} />
        ))}
      </ul>
    </>
  );
}

// this is a mapStateToProps function from react-redux
// object that returned from this function is added to props from react-router
function getCurrentState(state) {
  return { toDos: state };
}

function mapDispatchToProps(dispatch) {
  return {
    // creating new function as a prop
    addToDo: (text) => dispatch(add(text)),
  };
}

//mapDispatchToProps should always be second parameter
export default connect(getCurrentState, mapDispatchToProps)(Home);
