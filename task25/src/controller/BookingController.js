const bookings = require('../models/booking');
const rooms = require('../models/room');

exports.bookRoom = (req, res) => {
  const { customerName, date, startTime, endTime, roomId } = req.body;
  const isBooked = bookings.some(
    (booking) =>
      booking.roomId === roomId &&
      booking.date === date &&
      ((booking.startTime <= startTime && booking.endTime >= startTime) ||
        (booking.startTime <= endTime && booking.endTime >= endTime))
  );

  if (isBooked) {
    return res.status(400).json({ message: 'Room is already booked for the given time.' });
  }

  const newBooking = {
    id: bookings.length + 1,
    customerName,
    date,
    startTime,
    endTime,
    roomId,
  };
  bookings.push(newBooking);
  res.status(201).json(newBooking);
};

exports.listBookings = (req, res) => {
  res.status(200).json(bookings);
};

exports.listCustomers = (req, res) => {
  const customers = bookings.map((booking) => ({
    customerName: booking.customerName,
    roomName: rooms.find((room) => room.id === booking.roomId)?.name || 'Unknown',
    startTime: booking.startTime,
    endTime: booking.endTime,
  }));
  res.status(200).json(customers);
};

exports.customerBookingDetails = (req, res) => {
  const { customerName } = req.params;
  const customerBookings = bookings.filter((booking) => booking.customerName === customerName);
  res.status(200).json(customerBookings);
};
