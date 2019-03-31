//file used to hold any methods that involved with any generation table.

const pool = require("../../databasePool");

class GenerationTable {
  // collect related methods for javascript
  static storeGeneration(generation) {
    //make storeGeneration function static so we dont have to directly make an instance. we can use the function directly with storeGeneration  (this.generation)
    pool.query(
      // goal is to insert data+generation entry into table.
      "INSERT INTO generation(expiration) VALUES($1) ", //schema for data we're going to insert is generation (expiration) $1 is the index of 1. PG index starts at 1 not 0.
      [generation.expiration], //array of generation.expiration value that will be inserted into our query string
      (error, response) => {
        // final parameter of the query, is error,response callback function.
        if (error) return console.error(error);
      }
    );
  }
}
module.exports = GenerationTable;
