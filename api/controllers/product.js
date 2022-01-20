const createProduct = async (req, res) => {
	res.send("created");
};

const getAllProduct = async (req, res) => {
	res.send("all");
};

const getSingleProduct = async (req, res) => {
	res.send("single");
};

const updateProduct = async (req, res) => {
	res.send("updated");
};

const deleteProduct = async (req, res) => {
	res.send("dleted");
};

const uploadImage = async (req, res) => {
    res.send('uploaded')
}

module.exports = {
    createProduct,
    getAllProduct,
    getSingleProduct,
    updateProduct,
    deleteProduct,
}


