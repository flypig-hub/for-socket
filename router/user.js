const router = require("express").Router();
const mypageCtl = require("../controller/user");
// const upload = require("../middlewares/upload");
// const { validateNick } = require("../middlewares/validator");

// const authorization = require("../middlewares/auth-middlewares");

router.get("/mypage",  mypageCtl.checkUserInfo);
router.put("/info",  mypageCtl.updateUserInfo);
router.put("/status",  mypageCtl.updateUserStatus);
router.put(
  "/profileImg",
  authorization,
  
  mypageCtl.updateUserImg
);
router.get("/ranking", mypageCtl.showRanking);

module.exports = router;
