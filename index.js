const nodemailer = require('nodemailer');
const { getAppointmentBookingHTML } = require('./templates/appointmentBooking');
const { getHotelBookingHTML } = require('./templates/hotelBooking');
require('dotenv').config();

// Email transporter configuration
const transporter = nodemailer.createTransporter({
    service: 'gmail', // You can use other services like 'hotmail', 'yahoo', etc.
    auth: {
        user: process.env.EMAIL_USER, // Your email
        pass: process.env.EMAIL_PASS  // Your app password (not regular password)
    }
});

// Function to send appointment booking email
async function sendAppointmentBookingEmail(appointmentData, recipientEmail) {
    try {
        const htmlContent = getAppointmentBookingHTML(appointmentData);

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: recipientEmail,
            subject: `Appointment Confirmation - ${appointmentData.serviceName}`,
            html: htmlContent,
            text: `Your appointment for ${appointmentData.serviceName} has been confirmed for ${appointmentData.appointmentDate} at ${appointmentData.appointmentTime}. Confirmation number: ${appointmentData.confirmationNumber}`
        };

        const result = await transporter.sendMail(mailOptions);
        console.log('Appointment booking email sent successfully:', result.messageId);
        return result;
    } catch (error) {
        console.error('Error sending appointment booking email:', error);
        throw error;
    }
}

// Function to send hotel booking email
async function sendHotelBookingEmail(hotelData, recipientEmail) {
    try {
        const htmlContent = getHotelBookingHTML(hotelData);

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: recipientEmail,
            subject: `Hotel Booking Confirmed - ${hotelData.hotelName}`,
            html: htmlContent,
            text: `Your hotel booking at ${hotelData.hotelName} has been confirmed. Check-in: ${hotelData.checkinDate}, Check-out: ${hotelData.checkoutDate}. Confirmation number: ${hotelData.confirmationNumber}`
        };

        const result = await transporter.sendMail(mailOptions);
        console.log('Hotel booking email sent successfully:', result.messageId);
        return result;
    } catch (error) {
        console.error('Error sending hotel booking email:', error);
        throw error;
    }
}

// Export functions for use in other files
module.exports = {
    sendAppointmentBookingEmail,
    sendHotelBookingEmail,
    transporter
};

// If this file is run directly, execute test examples
if (require.main === module) {
    console.log('Gmail Structured Data Email Sender');
    console.log('===================================');
    console.log('Please run test.js to see example usage');
    console.log('Make sure to configure your .env file first');
}
