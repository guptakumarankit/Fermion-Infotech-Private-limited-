import React, { useEffect, useRef, useState } from "react";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";
import { todoBaseUrl } from "../instanceAxios";
import toast , { Toaster } from 'react-hot-toast'

const App = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [task, setTask] = useState("");

  const [todo, setTodo] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [search, setSearch] = useState("");
  const nameInputRef = useRef(null);

  // Fetch all todos
  const fetchTodo = async () => {
    try {
      const { data } = await todoBaseUrl.get('/todoList');
      // console.log(data.data);
      setTodo(data.data)
      setFilterData(data.data);
    } catch (error) {
      toast.error(error.message)
    }
  };

  useEffect(() => {
    fetchTodo();
  }, []);

  useEffect(() => {
    if(editingId && nameInputRef.current){
      nameInputRef.current.focus();
    }
  }, [editingId]);


  // Add or Edit Todo
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = { name, email, task };

    try {
      if (editingId) {
        const response = await todoBaseUrl.put(`/editTodo/${editingId}`, formData);
        if(response){
          toast.success("Edit data SuccessFully")
        }
        setEditingId(null);
      } else {
        const response = await todoBaseUrl.post('/addTodo' , formData);

        // filterData
        if(response){
          toast.success("Add Data SuccessFully!");
        }
      }
      setName("");
      setEmail("");
      setTask("");
      fetchTodo();
    } catch (error) {
      toast.error(error.message)
    }
  };

  // Delete Todo
  const handleDelete = async (id) => {
    try {
      const response = await todoBaseUrl.delete(`/deleteTodo/${id}`)
      if(!response){
        toast.error("Something went wrong!")
      }
      else{
        toast.success("Delete Todo SuccessFully");
      }
      fetchTodo();
    } catch (error) {
      toast.error(error.message);
    }
  };

  // Edit Todo
  const handleEdit = (todo) => {
    setName(todo.name);
    setEmail(todo.email);
    setTask(todo.task);
    setEditingId(todo._id);
  };

  // Search
  const handleSearch = () => {
     const data = todo.filter((item) => (
          item.name.toLowerCase().includes(search.toLowerCase()) ||
          item.email.toLowerCase().includes(search.toLowerCase())
     ));
     setFilterData(data);
     setSearch("");
  }

  return (
   <div className="flex flex-col gap-6  bg-gray-50 min-h-screen">
  <Toaster position="top-center" />

  <div className="bg-blue-500 text-white flex items-center justify-between p-4 shadow-md">
    <h1 className="text-4xl font-extrabold tracking-wide">TodoList</h1>
    <div className="flex items-center gap-3">
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-300 transition"
      />
      <IoSearchSharp
        className="text-3xl cursor-pointer hover:text-red-200 transition"
        onClick={handleSearch}
      />
    </div>
  </div>


  <form
    onSubmit={handleSubmit}
    className="flex flex-col gap-5 border p-8 rounded-2xl bg-white shadow-lg w-full max-w-lg mx-auto"
  >
    <h2 className="text-2xl font-semibold text-center text-gray-700">
      {editingId != null ? "Edit Todo" : "Add Todo"}
    </h2>
    <input
      type="text"
      placeholder="Name"
      value={name}
      onChange={(e) => setName(e.target.value)}
      ref={nameInputRef}
      required
      className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-300 transition"
    />
    <input
      type="email"
      placeholder="Email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      required
      className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-300 transition"
    />
    <input
      type="text"
      placeholder="Activity"
      value={task}
      onChange={(e) => setTask(e.target.value)}
      required
      className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-300 transition"
    />
    <button
      type="submit"
      className="bg-red-400 text-white font-semibold p-3 rounded-lg hover:bg-red-500 transition shadow-md"
    >
      {editingId ? "Update Todo" : "Add Todo"}
    </button>
  </form>

  <div className="overflow-auto max-h-[400px] mt-6 rounded-xl shadow-lg">
    <table className="w-full text-center border-collapse bg-white">
      <thead>
        <tr className="bg-red-100 text-gray-700 uppercase text-sm">
          <th className="border p-3">Id</th>
          <th className="border p-3">Name</th>
          <th className="border p-3">Email</th>
          <th className="border p-3">Task</th>
          <th className="border p-3">Actions</th>
        </tr>
      </thead>
      <tbody>
        {filterData.length > 0 &&
          filterData.map((item, idx) => (
            <tr
              key={item._id}
              className="hover:bg-red-50 transition"
            >
              <td className="border p-3">{idx + 1}</td>
              <td className="border p-3">{item.name}</td>
              <td className="border p-3">{item.email}</td>
              <td className="border p-3">{item.task}</td>
              <td className="border p-3 flex justify-center gap-4">
                <FaEdit
                  className="cursor-pointer text-blue-500 hover:text-blue-400 transition"
                  onClick={() => handleEdit(item)}
                />
                <MdDelete
                  className="cursor-pointer text-red-500 hover:text-red-400 transition"
                  onClick={() => handleDelete(item._id)}
                />
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  </div>
    </div>
  );
};

export default App;
