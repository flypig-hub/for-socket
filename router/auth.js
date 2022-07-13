const router = require("express").Router();
const passport = require("passport");
const authCtl = require("../controller/auth");
// const {
//   validateName,
//   validateNick,
//   validatePass,
//   validateRegister,
// } = require("../middlewares/validator");

router.post("/nameck",  authCtl.nameCheck);
router.post("/nickck",  authCtl.nickCheck);
router.post("/signup",  authCtl.createUser);
router.post("/login", authCtl.login);

//카카오
router.get("/kakao", passport.authenticate("kakao"));
router.get("/kakao/callback", authCtl.kakaoCallback);

//구글
router.get("/google", passport.authenticate("google", { scope: ["profile"] }));
router.get("/google/callback", authCtl.googleCallback);

module.exports = router;
