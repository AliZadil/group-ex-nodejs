import express from "express";

const app = express();
const port = 3000;

var var1 = 'hello 1';

app.get("/api/variable", (potato, tomato) => {
  tomato.json({value: var1});
});

app.post("/api/variable", (request, response) => {
  const { value } = request.body;
  var1 = value;
  response.json({ status: "success" });
});

app.put("/api/variable", (request, response) => {
  const { value } = request.body;
  var1 = value;
  response.json({ status: "success" });
});

app.delete("/api/variable", (potato, tomato) => {
  var1 = "";
  tomato.json({ status: "deleted" });
})

app.use(express.json());

app.listen(port, () => {
  console.log("On port:", port);
});