const createOrder = async (req, res) => {
	res.send("created");
};

const getAllOrders = async (req, res) => {
	res.send("get all");
};

const getSingleOrder = async (req, res) => {
	res.send("single");
};

const getCurrentUserOrders = async (req, res) => {
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
    getAllOrders,
    getSingleOrder,
    getCurrentUserOrders,
    updateOrder,
    deleteOrder,
}