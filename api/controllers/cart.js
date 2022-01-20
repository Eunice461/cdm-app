

const createCart = (req, res) => {
    res.send('crated')
}
const updateCart = (req, res) => {
    res.send('updated')
}
const deleteCart = (req, res) => {
	res.send("deleted");
};
const getUserCart = (req, res) => {
	res.send("get");
};
const getAllCart = (req, res) => {
	res.send("all");
};

module.exports = {
    createCart,
    updateCart,
    deleteCart,
    getUserCart,
    getAllCart
}