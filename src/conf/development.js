module.exports = {
  PORT: process.env.PORT,
  DB: {
    username: process.env.USERBD,
    password: process.env.PASSBD,
    database: process.env.BDNAME,
    host: process.env.SERVERBD,
    dialect: "mysql",
    define: {
      timestamps: false,

      // Genera claves foraneas de este tipo user_id en vez de userId
      undescored: true,
    },
  },
};
