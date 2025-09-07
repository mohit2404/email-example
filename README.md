# Gmail Structured Data Email Sender

A Node.js project that sends beautifully formatted emails with **Gmail structured data markup** to create interactive appointment booking and hotel booking cards that appear above the email content in Gmail.

## ðŸŒŸ Features

- **ðŸ“… Appointment Booking Cards** - Interactive appointment confirmations with calendar integration
- **ðŸ¨ Hotel Booking Cards** - Rich hotel reservation confirmations with booking details
- **ðŸ“§ Professional Email Templates** - Beautifully designed, responsive HTML email templates
- **ðŸ”§ JSON-LD Structured Data** - Proper schema.org markup for Gmail card recognition
- **âš¡ Easy Integration** - Simple API for sending structured emails
- **ðŸ“± Mobile Optimized** - Cards work perfectly on Gmail mobile app

## ðŸš€ Quick Start

### 1. Install Dependencies

```bash
npm install nodemailer dotenv
```

### 2. Configure Environment

Copy `.env.example` to `.env` and configure your Gmail credentials:

```bash
cp .env.example .env
```

Edit `.env`:
```bash
EMAIL_USER=your-gmail@gmail.com
EMAIL_PASS=your-app-password
```

**Important**: You need to use a Gmail [App Password](https://support.google.com/accounts/answer/185833), not your regular password.

### 3. Create Templates Directory

```bash
mkdir templates
```

### 4. Test the System

```bash
# Run the test file to send example emails
node test.js

# Or run individual tests
npm test
```

## ðŸ“ Project Structure

```
gmail-structured-data-emails/
â”œâ”€â”€ index.js                    # Main entry point with Nodemailer setup
â”œâ”€â”€ templates/
â”‚   â”œâ”€â”€ appointmentBooking.js   # Appointment email template with JSON-LD
â”‚   â””â”€â”€ hotelBooking.js        # Hotel booking email template with JSON-LD
â”œâ”€â”€ test.js                    # Test file with example data
â”œâ”€â”€ package.json               # Project dependencies
â”œâ”€â”€ .env.example              # Environment variables template
â””â”€â”€ README.md                 # This file
```

## ðŸ“§ Template Files

You need to create the template files in the `templates/` directory. The complete template code is provided in the project files.

### templates/appointmentBooking.js

This file contains the HTML template with JSON-LD structured data for appointment booking emails. It includes:

- EventReservation schema markup
- Professional appointment confirmation design
- Customer and business information sections
- Action buttons for viewing/canceling appointments

### templates/hotelBooking.js

This file contains the HTML template with JSON-LD structured data for hotel booking emails. It includes:

- LodgingReservation schema markup
- Beautiful hotel booking confirmation design
- Check-in/check-out details with guest information
- Action buttons for viewing/modifying/canceling bookings

## ðŸ”§ Gmail App Password Setup

1. Enable 2-factor authentication on your Google account
2. Go to [Google Account Settings](https://myaccount.google.com/)
3. Security â†’ 2-Step Verification â†’ App passwords
4. Generate an app password for "Mail"
5. Use this 16-character password in your `.env` file

## ðŸ“± What You Get

When recipients open your emails in Gmail, they'll see interactive cards above the email content:

### Appointment Card Example:
- Shows appointment date, time, and location
- "Add to Calendar" functionality
- "Invite others" option
- Direct integration with Google Calendar

### Hotel Booking Card Example:
- Shows check-in/check-out dates
- Hotel name and address
- Number of nights
- "Modify booking" button

## ðŸŒ Important Notes

- **Timezone Format**: Always use ISO 8601 format with timezone (e.g., '2025-09-25T11:30:00+05:30')
- **Gmail Only**: Cards only appear in Gmail, not other email clients
- **Testing**: Use Gmail Markup Tester to validate your structured data
- **App Password**: Regular Gmail passwords won't work; you need an App Password

## ðŸ› ï¸ Troubleshooting

### Cards Not Showing
1. Validate JSON-LD using Gmail Markup Tester
2. Check that you're using proper ISO datetime format with timezone
3. Ensure your email has proper SPF/DKIM authentication
4. Cards may take a few minutes to appear

### Common Issues
- Missing timezone in datetime strings
- Invalid schema.org types
- Incorrect JSON-LD syntax
- Using regular password instead of App Password

## ðŸ“š Resources

- [Gmail Markup Documentation](https://developers.google.com/gmail/markup)
- [Schema.org Structured Data](https://schema.org/)
- [JSON-LD Format Guide](https://json-ld.org/)
- [Gmail App Passwords Setup](https://support.google.com/accounts/answer/185833)
- [Nodemailer Documentation](https://nodemailer.com/)

## ðŸ“„ License

MIT License - free to use for personal and commercial purposes.

---

**Happy Coding! ðŸš€**

Send beautiful, interactive emails that your users will love!
