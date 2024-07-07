const app = require("./app");

const PORT = process.env.DB_PORT;

app.listen(PORT, () => {
  console.log(process.env.DB_NAME);
  console.log(`Server is running on port ${PORT}`);
});
