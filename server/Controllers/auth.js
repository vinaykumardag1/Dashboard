const User = require("../model/User");

const createUser = async (req, res) => {
    const { name, role, mobile } = req.body;
    const user = await User.findOne({ mobile });
    if (user) {
        return res.json({ message: "User already exists" });
    }
    const newUser = new User({ name, role, mobile });
    await newUser.save();
    res.json({ message: "User created successfully" });
};

const getUser = async (req, res) => {
    const users = await User.find();
    res.json(users);
};

const updateUser = async (req, res) => {
    const { id } = req.params;
    const { name, role, mobile } = req.body;
    try {
        const updatedUser = await User.findByIdAndUpdate(id, { name, role, mobile }, { new: true });
        res.json(updatedUser);
    } catch (error) {
        res.status(500).json({ message: "Error updating user", error });
    }
};

const deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
        await User.findByIdAndDelete(id);
        res.json({ message: "User deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting user", error });
    }
};

module.exports = {
    createUser,
    getUser,
    updateUser,
    deleteUser,
};