const http = require("http");
const express = require("express");
const mysql = require("mysql");
const path = require("path");
const cors = require("cors"); // cors 패키지 연결
const morgan = require("morgan");
// const UserRouter = require("./router/userRouter");
// const PostRouter = require("./router/postRouter");
// const LikeRouter = require("./router/likeRouter");
// const CommentRouter = require("./router/commentRouter")
const reqlogMiddleware = require("./middlewares/request-log-middleware");
const webSocket = require("./socket");
const app = express();
const httpServer = http.createServer(app);

//socket.io
// coconst SocketIO = require("socket.io");
// nst io = SocketIO(server, { path: "/socket.io" });
// socket.io
//require("dotenv").config(); // env 패키지 연결

const port = 8080;

const corsOption = {
  origin: ["http://localhost:3000", "*"],
  credentials: true,
};



//body parser
app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//미들웨어 실행
app.use(reqlogMiddleware);
app.use(cors(corsOption));

// 라우터 등록
app.get("/", (req, res) => {
  res.send("<h1>Hello world</h1>");
});

// app.use("/user", UserRouter);

// app.use("/post", PostRouter, LikeRouter, CommentRouter);

app.set("view engine", "pug", "ejs");
// app.set("views", __dirname + "/views");
// app.use("/public", express.static(__dirname + "/public"));
// app.get("/", (_, res) => res.render("home"));
// app.get("/*", (_, res) => res.redirect("/"));

app.listen(port, () => {
  console.log(port, "포트로 서버가 켜졌어요!");
});
webSocket(httpServer, app);
