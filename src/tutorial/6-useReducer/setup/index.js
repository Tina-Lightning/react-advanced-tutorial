import React, { useState, useReducer } from "react";
import Modal from "./Modal";
import { data } from "../../../data";

// If your app is simple you can use useState, but as it gets more complicated you should useReducer
// It will add more structure to your state
// useReducer relies heavily on redux
import { reducer } from "./reducer";

const defaultState = {
  people: [],
  isModalOpen: false,
  modalContent: "",
};
const Index = () => {
  const [name, setName] = useState("");
  // set up a state and a function
  // when we useReducer we get two things back: we're getting the state value and the dispatch function
  // the first thing we pass is the reducer function,
  // the difference between useState and useReducer
  // each and every time you want to do something with that whole state, you ALWAYS must use dispatch, and it's gonna go through the reducer
  // you can think of the reducer as something that takes the old state and takes something called action and spits abck that new state
  const [state, dispatch] = useReducer(reducer, defaultState);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      const newItem = { id: new Date().getTime().toString(), name };
      // here we ALWAYS need to pass an object with a property of the name "type" bc that is going to be our action, you need to set it to something and common practice is using uppercase
      // once you dispatch your action, then you handle it in your reducer
      dispatch({ type: "ADD_ITEM", payload: newItem });
      setName("");
    } else {
      dispatch({ type: "NO_VALUE" });
    }
  };
  const closeModal = () => {
    dispatch({ type: "CLOSE_MODAL" });
  };

  return (
    <>
      {state.isModalOpen && (
        <Modal closeModal={closeModal} modalContent={state.modalContent} />
      )}
      <form onSubmit={handleSubmit} className="form">
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button type="submit">add</button>
      </form>
      {state.people.map((person) => {
        return (
          <div key={person.id} className="item">
            <h4>{person.name}</h4>
            <button
              onClick={() =>
                dispatch({ type: "REMOVE_ITEM", payload: person.id })
              }
            >
              remove
            </button>
          </div>
        );
      })}
    </>
  );
};

export default Index;
