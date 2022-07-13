const router = require("express").Router();
const studyRoomCtl = require("../controller/studyRoom");

// const authorization = require("../middlewares/auth-middlewares");

router.get("/list/all", studyRoomCtl.allRoomList);
router.get("/list/keyword/:roomPurpose", studyRoomCtl.keywordList);
router.post("/hostRoom",  studyRoomCtl.createRoom);
router.post("/enterRoom/:roomId",  studyRoomCtl.enterRoom);
router.delete("/exitRoom/:roomId",  studyRoomCtl.exitRoom);
router.post("/checkRoomPw/:roomId",  studyRoomCtl.checkRoomPw);

module.exports = router;
