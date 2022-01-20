const createProduct = (req, res) => {
    res.send('created')
}

const getAllProduct = (req, res) => {
	res.send("all");
};

const getSingleProduct = (req, res) => {
	res.send("single");
};

const updateProduct = (req, res) => {
	res.send("updated");
};

const deleteProduct = (req, res) => {
	res.send("dleted");
};

module.exports = {
    createProduct,
    getAllProduct,
    getSingleProduct,
    updateProduct,
    deleteProduct,
}


