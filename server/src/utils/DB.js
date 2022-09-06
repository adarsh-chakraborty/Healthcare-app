module.exports = () => {
  return require('mongoose').connect(process.env.MONGODB_URI);
};
