const { conn } = require("../config/conn");
const getCollections = async () => {
  const [licences] = await conn.query("SELECT * FROM licence");
  return licences;
};

const getAll = async () => {
  const [rows] = await conn.query(
    "SELECT image_front, image_back, product_name, licence_name, price, dues, product_id FROM product, licence WHERE product.licence_id =  licence.licence_id"
  );
  return rows;
};

module.exports = {
  getAll,
  getCollections,
};
