const sqlite3 = require('sqlite3').verbose();

// open the database
let db = new sqlite3.Database('./bbantheon.db', sqlite3.OPEN_READWRITE, (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the chinook database.');
});

db.serialize(() => {
  db.each(`SELECT IDX, NAME, LEVEL FROM USER_INFO`, (err, row) => {
    if (err) {
      console.error(err.message);
    }
    console.log(`${row.IDX} , ${row.NAME} , ${row.LEVEL}`);
  });
});

db.close((err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Close the database connection.');
});