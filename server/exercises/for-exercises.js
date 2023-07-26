const db = require("../../server/database/db.json");

const forExercises = () => {
  const { value } = db;

  for (let i = 0; i <= value.length; i++) {
    console.log(i);
  }
};
