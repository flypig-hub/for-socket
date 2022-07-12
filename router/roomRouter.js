// const express = require("express");
// const roomController = require("../controller/roomController");
// //const authMiddleware = require("../middlewares/auth-middleware");
// const router = express.Router();

// //현재 방 표시
// router.get("/room", roomController.getRooms);

// //현재 방 표시
// router.get("/room", roomController.getRoom);

// //방 생성
// router.post("/room", authMiddleware, roomController.makeRoom);

// // 유저 입장 API
// router.post("/room/:roomId", roomController.joinRoom);

// // 유저 강퇴
// router.delete("/room/:userID", authMiddleware, roomController.kickUser);

// // 방 삭제 API(put)
// router.delete("/room/:roomId", authMiddleware, roomController.deleteRoom);
