module.exports = {
  PORT: process.env.PORT || 3000,
  security: {
    SESSION_SECRET: "YOUR_SESSION_SECRET_STRING",
  },

  search: {
    MAX_ITEMS_PER_PAGE: 5,
  },
};
