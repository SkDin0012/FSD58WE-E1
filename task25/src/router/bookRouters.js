const express = require('express');
const { bookRoom, listBookings, listCustomers, customerBookingDetails } = require('../controller/BookingController');

const router = express.Router();

router.post('/', bookRoom);
router.get('/', listBookings);
router.get('/customers', listCustomers);
router.get('/customers/:customerName', customerBookingDetails);

module.exports = router;
