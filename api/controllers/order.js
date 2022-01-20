const createOrder = (req, res) => {
    res.send('created')
}

const getAllOrder = (req, res) => {
	res.send("get all");
};

const getSingleOrder = (req, res) => {
	res.send("single");
};

const getCurrentUserOrder = (req, res) => {
	res.send("current user");
};

const updateOrder = (req, res) => {
	res.send("updated");
};

const deleteOrder = (req, res) => {
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