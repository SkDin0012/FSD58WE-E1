const express = require('express');
const { createRoom, listRooms } = require('../controller/RoomContoller');

const router = express.Router();

router.post('/', createRoom);
router.get('/', listRooms);

module.exports = router;
