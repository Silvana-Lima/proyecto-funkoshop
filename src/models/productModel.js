const { conn } = require("../config/conn");

const getCollections = async () => {
  const [licences] = await conn.query("SELECT * FROM licence");
  return licences;
};

const getAll = async () => {
  const [products] = await conn.query(
    "SELECT product.product_id, product.image_front, product.image_back, product.product_name, licence.licence_name, product.price, product.product_description, product.dues FROM product, licence WHERE product.licence_id =  licence.licence_id"
  );
  return products;
};

const getProductById = async (id) => {
  const [product] = await conn.query(
    `SELECT product.product_id, product.image_front, product.image_back, product.product_name, licence.licence_name, product.price, product.product_description, product.dues FROM product, licence WHERE product.licence_id =  licence.licence_id and product_id = ${id}`
  );
  return product;
};

const getProductsByLicence = async (licenceName) => {
  const [productsByLicence] = await conn.query(
    `SELECT product.product_id, product.image_front, product.image_back, product.product_name, licence.licence_name, product.price, product.product_description, product.dues FROM product, licence WHERE product.licence_id =  licence.licence_id AND licence.licence_name = ${licenceName}`
  );
  return productsByLicence;
};

module.exports = {
  getAll,
  getCollections,
  getProductById,
  getProductsByLicence,
};
