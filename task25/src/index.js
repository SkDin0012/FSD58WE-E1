const express = require('express');
const bodyParser = require('body-parser');
const roomRoutes = require('./router/roomRouters');
const bookingRoutes = require('./router/bookRouters');

const app = express();
const PORT = process.env.PORT || 3040;

app.use(bodyParser.json());

app.use('/rooms', roomRoutes);
app.use('/bookings', bookingRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
