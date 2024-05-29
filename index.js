const express = require("express");
const app = express();
const fs = require("fs");
const PORT_URL = 3030;
const users = require("./users.json");

app.use(express.urlencoded({ extended: false }));

app.get("/", function(req, res) {
  const userList = users.map(user => `<li>${user.name}</li>`);
  res.send(`${userList.join("")}`);
})


app.get("/api/users", (req, res) => {
  res.json(users);
});


app.get("/api/users/:id", (req, res) => {
  let id = Number(req.params.id);
  let user = users.find((user) => user.id == id);
  
  if (id > users.length) {
    return res.json([{"error": `Id ${id} is not found`}]);
  }
  return res.json(user);
});

app.post("/api/users/", (req, res) => {
  // create user
  let body=req.body;
    users.push({...body, id:users.length+1});
    fs.writeFile('./users.json',JSON.stringify(users), (err,data) =>{
      return res.json(users);
    });
})

app.patch("/api/users/:id", (req, res) => {
  let id = Number(req.params.id);
  let user = users.find((user) => user.id == id);
  // console.log();
  if(id> users.length){
    return res.json({"error": `Id:- ${id} it not found`});
  }
  return res.json(user);
})

app.delete("/api/users/:id", (req, res) => {
  let id = Number(req.params.id);
  let user = users.filter(user => user.id !== id);
  fs.writeFile('./users.json',JSON.stringify(user), (err,data) =>{
    return res.json(data);
  });
})

app.listen(PORT_URL, (req, res) => {
  console.log(`port run successfully ${PORT_URL}`);
});
