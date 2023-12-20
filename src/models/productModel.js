const { conn } = require("../config/conn");

const getCollections = async () => {
  const [licences] = await conn.query("SELECT * FROM licence");
  return licences;
};

const getAll = async () => {
  try {
    const [products] = await conn.query(
      "SELECT product.product_id, product.image_front, product.image_back, product.product_name, licence.licence_name, product.price, product.product_description, product.dues, product.sku FROM product, licence WHERE product.licence_id =  licence.licence_id"
    );
    return products;
  } catch (error) {
    return {
      error: true,
      message: `Hemos encontrado un error ${error}`,
    };
  } finally {
    conn.releaseConnection();
  }
};

const getProductById = async (id) => {
  try {
    const [product] = await conn.query(
      `SELECT product.*, category.category_name, licence.licence_name FROM (product LEFT JOIN category ON product.category_id = category.category_id ) LEFT JOIN licence ON product.licence_id =  licence.licence_id WHERE product.product_id =  ${id}`
    );
    return product;
  } catch (error) {
    return {
      error: true,
      message: `Hemos encontrado un error ${error}`,
    };
  } finally {
    conn.releaseConnection();
  }
};

const getProductsByLicence = async (licenceName) => {
  try {
    const [productsByLicence] = await conn.query(
      `SELECT product.product_id, product.image_front, product.image_back, product.product_name, licence.licence_name, product.price, product.product_description, product.dues FROM product, licence WHERE product.licence_id =  licence.licence_id AND licence.licence_name = ${licenceName}`
    );
    return productsByLicence;
  } catch (error) {
    return {
      error: true,
      message: `Hemos encontrado un error ${error}`,
    };
  } finally {
    conn.releaseConnection();
  }
};

const createItem = async (item) => {
  const insertItem = item.join(", ");
  console.log("Item to be inserted:", insertItem);
  try {
    const newItem = await conn.query(
      `INSERT INTO product (product_name,
        product_description, sku, price, dues, stock,  discount, category_id, licence_id, image_front, image_back) VALUES (${insertItem})`
    );
    console.log("EL  NUEVO ITEM ES ", newItem);
    return newItem;
  } catch (error) {
    return {
      error: true,
      message: `Hemos encontrado un error ${error}`,
    };
  } finally {
    conn.releaseConnection();
  }
};

module.exports = {
  getAll,
  getCollections,
  getProductById,
  getProductsByLicence,
  createItem,
};
