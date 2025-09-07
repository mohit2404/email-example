const { sendAppointmentBookingEmail, sendHotelBookingEmail } = require('./index.js');

// Example appointment booking data
const sampleAppointmentData = {
    // Basic appointment info
    confirmationNumber: '25000378006',
    serviceName: 'PSK Gandhinagar',
    serviceDescription: 'Passport application appointment at PSK Gandhinagar office',

    // Date and time info (ISO format for structured data)
    appointmentDateTime: '2025-09-25T11:30:00+05:30', // IST timezone
    appointmentEndDateTime: '2025-09-25T12:30:00+05:30',
    appointmentDate: 'Thursday, 25 September 2025',
    appointmentTime: '11:30 AM - 12:30 PM (IST)',
    duration: 60,
    bookingTime: '2025-09-08T03:00:00+05:30',
    bookingDate: 'Monday, 8 September 2025',

    // Customer information
    customerName: 'John Smith',
    customerEmail: 'john.smith@example.com',
    customerPhone: '+91 96941 44118',

    // Business information
    businessName: 'Passport Seva Kendra',
    businessAddress: 'Gandhinagar',
    businessCity: 'Gandhinagar',
    businessState: 'Gujarat',
    businessZipCode: '382010',
    businessCountry: 'IN',
    businessPhone: '+91 1800 258 1800',
    businessEmail: 'info@passportindia.gov.in',

    // Action URLs
    appointmentDetailsUrl: 'https://portal2.passportindia.gov.in/AppOnlineProject/online/procFormAction',
    cancelAppointmentUrl: 'https://portal2.passportindia.gov.in/AppOnlineProject/online/cancel'
};

// Example hotel booking data  
const sampleHotelData = {
    // Basic booking info
    confirmationNumber: '610818326',
    hotelName: 'SSR-Shree Shyam Residency',
    hotelDescription: 'A premium hotel located in the heart of Khatu, offering comfortable accommodations',
    hotelStarRating: 4,

    // Hotel location
    hotelAddress: '44, Roengten Rd Near Entry Gate Diamond Waterpark, Ringas Road',
    hotelCity: 'Khatu',
    hotelState: 'Rajasthan',
    hotelZipCode: '332601',
    hotelCountry: 'IN',
    hotelPhone: '+91 96941 44118',
    hotelEmail: 'info@ssrshreeshyamresidency.com',
    hotelWebsite: 'https://www.ssrshreeshyamresidency.com',
    hotelImage: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop',

    // Booking dates (ISO format for structured data)
    checkinDateTime: '2025-09-09T11:00:00+05:30',
    checkoutDateTime: '2025-09-11T11:00:00+05:30', 
    checkinDate: 'Tuesday, 9 September 2025',
    checkinTime: '11:00 AM',
    checkoutDate: 'Thursday, 11 September 2025',
    checkoutTime: '11:00 AM',
    numberOfNights: 2,

    // Room and guest info
    roomType: 'Deluxe Room',
    numAdults: 2,
    numChildren: 0,

    // Guest information
    guestName: 'John Smith',
    guestEmail: 'john.smith@example.com', 
    guestPhone: '+91 96941 44118',

    // Booking details
    totalPrice: '4,500',
    currency: 'â‚¹',
    bookingDateTime: '2025-09-08T03:00:00+05:30',
    bookingDate: 'Monday, 8 September 2025',
    bookingAgentName: 'Your Booking Platform',
    bookingAgentUrl: 'https://yourbookingsite.com',

    // Action URLs
    bookingDetailsUrl: 'https://yourbookingsite.com/booking/610818326',
    modifyBookingUrl: 'https://yourbookingsite.com/modify/610818326',
    cancelBookingUrl: 'https://yourbookingsite.com/cancel/610818326'
};

// Test functions
async function testAppointmentBooking() {
    console.log('\nðŸ—“ï¸  Testing Appointment Booking Email...');
    console.log('=====================================');

    try {
        const recipientEmail = 'test@example.com'; // Change this to your test email
        const result = await sendAppointmentBookingEmail(sampleAppointmentData, recipientEmail);
        console.log('âœ… Appointment booking email sent successfully!');
        console.log('Message ID:', result.messageId);

        console.log('\nðŸ“§ Email Preview:');
        console.log('Subject:', `Appointment Confirmation - ${sampleAppointmentData.serviceName}`);
        console.log('To:', recipientEmail);
        console.log('Confirmation Number:', sampleAppointmentData.confirmationNumber);
        console.log('Date & Time:', sampleAppointmentData.appointmentTime);

    } catch (error) {
        console.error('âŒ Error sending appointment email:', error.message);
    }
}

// Main test function
async function runTests() {
    console.log('Gmail Structured Data Email Testing');
    console.log('===================================');
    console.log('Make sure to configure your .env file with EMAIL_USER and EMAIL_PASS');
    console.log('\nNote: These emails contain JSON-LD structured data that Gmail will');
    console.log('parse to show interactive cards above the email content.\n');

    // Check if environment variables are set
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
        console.log('âš ï¸  WARNING: Please create a .env file with the following:');
        console.log('EMAIL_USER=your-gmail@gmail.com');
        console.log('EMAIL_PASS=your-app-password');
        console.log('\nFor Gmail, you need to use an App Password, not your regular password.');
        console.log('Visit: https://support.google.com/accounts/answer/185833\n');
        return;
    }

    try {
        // Test appointment booking email
        await testAppointmentBooking();

        console.log('\nâœ¨ Test completed!');
        console.log('\nðŸ“± To see the Gmail structured data cards:');
        console.log('1. Check your Gmail inbox (or the recipient\'s inbox)');
        console.log('2. The structured data cards should appear above the email content');
        console.log('3. On mobile Gmail app, you\'ll see interactive appointment/hotel cards');
        console.log('4. You can add appointments to calendar or modify hotel bookings directly');

    } catch (error) {
        console.error('âŒ Test failed:', error.message);
    }
}

// Export for use in other files
module.exports = {
    sampleAppointmentData,
    sampleHotelData,
    runTests
};

// If this file is run directly, execute tests
if (require.main === module) {
    runTests();
}
