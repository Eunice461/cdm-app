

const createCart = async (req, res) => {
	res.send("crated");
};
const updateCart = async (req, res) => {
	res.send("updated");
};
const deleteCart = async (req, res) => {
	res.send("deleted");
};
const getUserCart = async (req, res) => {
	res.send("get");
};
const getAllCart = async (req, res) => {
	res.send("all");
};

module.exports = {
    createCart,
    updateCart,
    deleteCart,
    getUserCart,
    getAllCart
}