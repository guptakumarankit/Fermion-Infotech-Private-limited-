import { useSelector, useDispatch } from "react-redux";
import { AddTodo, RemoveTodo, EditTodo } from "./Redux/slices/OperationSlice";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";

const App = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.operation.todos);
  const [editId, setEditId] = useState(null);
  const [editing, setEditing] = useState(false);

  const inputRef = useRef(null);
  const [input, setInput] = useState("");

  const handleTodo = (e) => {
    e.preventDefault();
    if (editing) {
      dispatch(EditTodo({ id: editId, input: input }));
      setEditing(false);
      setEditId(null);
      setInput("");
    } else {
      dispatch(AddTodo(input));
      setInput("");
    }
  };

  const handleEdit = (id) => {
    const currTodo = todos.find((todo) => todo.id === id);
    // console.log("currTodo", currTodo.todo);
    setInput(currTodo.todo);
    // console.log("id" , id);
    setEditId(id);
    setEditing(true);
  };

  useEffect(() => {
    if (editing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [editing]);

  return (
   <>
  <div className="flex flex-col justify-center items-center gap-6 mt-10">
    <h3 className="text-2xl font-bold text-gray-800">Todo using Redux Toolkit</h3>

    <form
      onSubmit={handleTodo}
      className="flex flex-col bg-white shadow-lg p-6 rounded-xl w-80 sm:w-96 gap-4"
    >
      <div className="flex flex-col">
        <label className="text-gray-700 font-medium mb-1">Enter the todo</label>
        <input
          ref={inputRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder="Enter the todo..."
          required
          className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
        />
      </div>

      <button
        type="submit"
        className="bg-blue-500 text-white font-semibold py-2 rounded-lg shadow-md hover:bg-blue-600 transition-colors"
      >
        Add Todo
      </button>
    </form>
  </div>

  <div className="flex justify-center mt-8">
    <table className="min-w-[350px] sm:min-w-[600px] bg-white shadow-md rounded-lg overflow-hidden">
      <thead className="bg-blue-100">
        <tr>
          <th className="text-left py-2 px-4">ID</th>
          <th className="text-left py-2 px-4">Todo</th>
          <th className="text-center py-2 px-4">Operations</th>
        </tr>
      </thead>

      <tbody>
        {todos.length > 0 ? (
          todos.map((item) => (
            <tr key={item.id} className="border-b hover:bg-gray-50 transition-colors">
              <td className="py-2 px-4">{item.id}</td>
              <td className="py-2 px-4">{item.todo}</td>
              <td className="py-2 px-4 flex gap-2 justify-center">
                <button
                  onClick={() => dispatch(RemoveTodo(item.id))}
                  className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition-colors"
                >
                  Delete
                </button>
                <button
                  onClick={() => handleEdit(item.id)}
                  className="bg-yellow-400 text-white px-3 py-1 rounded-md hover:bg-yellow-500 transition-colors"
                >
                  Edit
                </button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="3" className="text-center py-4 text-gray-500">
              No todos added yet!
            </td>
          </tr>
        )}
      </tbody>
    </table>
  </div>
</>

  );
};

export default App;
