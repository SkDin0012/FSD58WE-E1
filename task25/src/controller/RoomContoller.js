const rooms = require('../models/room');

exports.createRoom = (req, res) => {
  const { numberOfSeats, amenities, pricePerHour } = req.body;
  const newRoom = {
    id: rooms.length + 1,
    numberOfSeats,
    amenities,
    pricePerHour,
  };
  rooms.push(newRoom);
  res.status(201).json(newRoom);
};

exports.listRooms = (req, res) => {
  res.status(200).json(rooms);
};
