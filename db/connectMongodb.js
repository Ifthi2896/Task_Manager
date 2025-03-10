const mongoose = require("mongoose");

const connected = (URL) => {
  mongoose
    .connect(URL)
    .then(() => console.log("Mongodb is Connected Successfully"))
    .catch((error) =>
      console.log(`Mongodb is Not connected Successfully ${error}`)
    );
};

module.exports = connected;