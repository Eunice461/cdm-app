const getAllUsers = (req, res) => {
	res.send("all user");
};
const getSingleUser = (req, res) => {
	res.send("single user");
};
const getCurrentUser = (req, res) => {
	res.send("current user");
};
const updateUser = (req, res) => {
	res.send("update user");
};
const updateUserPassword = (req, res) => {
	res.send("update password");
};
const deleteUser = (req, res) => {
	res.send("deleted");
};

module.exports = {
    getAllUsers,
    getSingleUser,
    getCurrentUser,
    updateUser,
    updateUserPassword,
    deleteUser,
}