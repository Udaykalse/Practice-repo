const express = require("express");

const app = express();

app.use(express.json());

const healthRoute = require("./routes/health.route");
app.use("/api", healthRoute);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});