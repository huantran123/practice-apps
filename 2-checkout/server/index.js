require("dotenv").config();
const express = require("express");
const path = require("path");
const sessionHandler = require("./middleware/session-handler");
const logger = require("./middleware/logger");

// Establishes connection to the database on server start
const db = require("./db");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Adds `req.session_id` based on the incoming cookie value.
// Generates a new session if one does not exist.
app.use(sessionHandler);

// Logs the time, session_id, method, and url of incoming requests.
app.use(logger);

// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));

/****
 *
 *
 * Other routes here....
 *
 *
 */
app.post('/', (req, res) => {
  const {name, email, password, address, apt, city, state, zipcode, phone, credit, expiry, cvv, billingZip} = req.body;
  const session_id = req.session_id;

  db.connectAsync()
    .then(() => {
      const selectString = `SELECT * FROM responses WHERE session_id = "${session_id}"`;
      // const selectArg = [session_id];
      return db.queryAsync(selectString)
    })
    .then((data) => {
      console.log(data[0])
      if (data[0].length === 0) {
        const insertString = 'INSERT INTO responses(name, email, password, address, apt, city, state, zipcode, phone, credit, expiry, cvv, billingZip, session_id) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?)';
        const insertArg = [name, email, password, address, apt, city, state, zipcode, phone, credit, expiry, cvv, billingZip, session_id];
        db.queryAsync(insertString, insertArg)
      } else {
        throw new Error('Only allow 1 purchase per session')
      }
    })
    .then(() => {
      res.status(201).send('Successfully create in database');
    })
    .catch((err) => {
      res.status(201).send('Only allow 1 purchase per session')
    })


  // const insertString = 'INSERT INTO responses(name, email, password, address, apt, city, state, zipcode, phone, credit, expiry, cvv, billingZip, session_id) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?)';
  // const inserArg = [name, email, password, address, apt, city, state, zipcode, phone, credit, expiry, cvv, billingZip, session_id];
  // db.connectAsync()
  //   .then(() => {
  //     db.queryAsync(queryString, queryArg)
  //   })
  //   .then(() => {
  //     res.status(201).send('Successfully create in database');
  //   })
  //   .catch(() => {
  //     res.status(409).send('Unable to create purchase')
  //   })
})


app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
