const cluster = require("cluster");
const OS = require("os")
const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors({
  origin:"*",
}))




require("dotenv").config();
app.use(express.json())

const authRouter = require("./routes/auth.routes")
app.use('/auth', authRouter)



const actionRouter = require("./routes/action.routes")
app.use('/action', actionRouter)




if (cluster.isMaster) {
  const numCpus = OS.cpus().length;
  for (let i = 0; i < numCpus; i++) {
    cluster.fork();
  }
} else {
  app.listen(process.env.PORT, (err) => {
    if (err) console.error(err)
    console.log(`Worker ${process.pid} is running on port `, process.env.PORT);
    require("./configs/db.config")
  });
}
