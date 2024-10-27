const Expense = require("../models/Expense");

// Get all expenses for the logged-in user
exports.getExpenses = async (req, res) => {
  try {
    const expenses = await Expense.find({ user: req.user.id });
    res.json(expenses);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

// Add a new expense
exports.addExpense = async (req, res) => {
  const { amount, description, category } = req.body;

  try {
    const newExpense = new Expense({
      user: req.user.id,
      amount,
      description,
      category,
    });

    const expense = await newExpense.save();
    res.json(expense);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

// Delete an expense by ID
exports.deleteExpense = async (req, res) => {
  try {
    const expense = await Expense.findById(req.params.id);

    if (!expense) return res.status(404).json({ msg: "Expense not found" });

    if (expense.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "Unauthorized action" });
    }

    await expense.remove();
    res.json({ msg: "Expense removed" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};
