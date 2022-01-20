const createOrder = async (req, res) => {
	res.send("created");
};

const getAllOrder = async (req, res) => {
	res.send("get all");
};

const getSingleOrder = async (req, res) => {
	res.send("single");
};

const getCurrentUserOrder = async (req, res) => {
	res.send("current user");
};

const updateOrder = async (req, res) => {
	res.send("updated");
};

const deleteOrder = async (req, res) => {
	res.send("dleted");
};

module.exports = {
    createOrder,
    getAllOrder,
    getSingleOrder,
    getCurrentUserOrder,
    updateOrder,
    deleteOrder,
}