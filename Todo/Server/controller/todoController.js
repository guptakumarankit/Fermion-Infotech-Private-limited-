import Todo from "../Modules/todo.js";

export const addTodoController = async (req, res) => {
  try {
    const { name, email, task } = req.body;
    // console.log(name , email , task)

    if (!name || !email || !task) {
      return res
        .status(400)
        .json({ Message: "All Filed is required", Success: false });
    }

    const todoAdd = await Todo.create({name , email , task});
    console.log("AddTodo", todoAdd);

    res.json({ Message: "Todo Add Successfully", Success: true });
  } catch (error) {
    // console.log(error.message)
    res.status(500).json({ Message: error.message, Success: false });
  }
};

export const handleTodoListFetchController = async (req, res) => {
  try {
    const todoList = await Todo.find({});
    res.status(200).json({
      Message: "Fetch data SuccessFully",
      Success: true,
      data: todoList,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      success: false,
    });
  }
};

export const handleDeleteTodoController = async (req , res) => {
    try {
        const { id } = req.params;
        const deleteTodo = await Todo.findByIdAndDelete(id);
        if(!deleteTodo){
            res.status(500).json({
                message : "Todo doesn't find",
                success : false
            })
        }

        res.status(200).json({
            message : "Todo Delete SuccessFully",
            success : true,
            data : deleteTodo
        })
    } catch (error) {
        res.status(400).json({
            message : error.message,
            success : false
        })
    }
};

export const handleEditTodoController = async (req , res) => {
  const { id } = req.params;
  const { name , email , task } = req.body;
  try {
      const updatedTodo = await Todo.findByIdAndUpdate(
      id,
      { name, email, task },
      { new: true }
      );

        if(!updatedTodo){
            res.status(404).json({message : "Todo not found"})
        }

        res.status(200).json({message : "Edit Todo SuccessFully" , updatedTodo});
    } catch (error) {
        res.status(500).json({error:error.message})
    }
};
