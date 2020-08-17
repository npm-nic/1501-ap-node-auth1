const session = require("express-session");
const KnexSessionStore = require("connect-session-knex")(session);

const dbConnection = require("../../database/connection");

module.exports = {
  name: "monster",
  secret: "keep it secret, keep it safe!",
  cookie: {
    maxAge: 1000 * 60 * 10, // [2a] 10 minutes
    secure: process.env.COOKIE_SECURE || false, // [2b] if true, cooke is sent only over https
    httpOnly: true, // [2c] --> JavaScript cannot touch this cookie!
  },
  resave: false, // [2d]
  saveUninitialized: false, //  [2e] GDPR Compliance --> client should drive this <-- preference / guidelines set by company --> do not make this decision alone!
  store: new KnexSessionStore({
    //  [3]
    knex: dbConnection,
    tablename: "sessions",
    sidfieldname: "sid",
    createtable: true,
    clearInterval: 1000 * 60 * 60, //  [3_]
  }),
};
