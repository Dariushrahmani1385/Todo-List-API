import Todo from "../models/Todo.js";

// Create Todo
export const createTodo = async (req, res) => {
  const { title, description } = req.body;
  const todo = await Todo.create({ title, description, user: req.user._id });
  res.status(201).json(todo);
};

// Get Todos with pagination, filtering, sorting
export const getTodos = async (req, res) => {
  const { page = 1, limit = 10, sort = "createdAt", title } = req.query;
  const query = { user: req.user._id };

  if (title) query.title = { $regex: title, $options: "i" };

  const todos = await Todo.find(query)
    .sort(sort)
    .skip((page - 1) * limit)
    .limit(Number(limit));

  const total = await Todo.countDocuments(query);

  res.json({ data: todos, page: Number(page), limit: Number(limit), total });
};

// Update Todo
export const updateTodo = async (req, res) => {
  const todo = await Todo.findById(req.params.id);
  if (!todo) return res.status(404).json({ message: "Todo not found" });
  if (todo.user.toString() !== req.user._id.toString())
    return res.status(403).json({ message: "Forbidden" });

  todo.title = req.body.title || todo.title;
  todo.description = req.body.description || todo.description;
  const updated = await todo.save();
  res.json(updated);
};

// Delete Todo
export const deleteTodo = async (req, res) => {
  const todo = await Todo.findById(req.params.id);
  if (!todo) return res.status(404).json({ message: "Todo not found" });
  if (todo.user.toString() !== req.user._id.toString())
    return res.status(403).json({ message: "Forbidden" });

  await todo.deleteOne();
  res.status(204).end();
};
