// handler.js
const productsData = require('./productsData.json');

module.exports.getProductsList = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(productsData),
  };
};

module.exports.getProductsById = async (event) => {
  const productId = parseInt(event.pathParameters.productId);
  const product = productsData.find(p => p.id === productId);

  if (!product) {
    return {
      statusCode: 404,
      body: JSON.stringify({ message: 'Product not found' }),
    };
  }

  return {
    statusCode: 200,
    body: JSON.stringify(product),
  };
};