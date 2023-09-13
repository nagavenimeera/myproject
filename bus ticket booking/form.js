/ Function to generate a random 6-digit OTP
function generateOTP() {
    return Math.floor(100000 + Math.random() * 900000);
}

// Function to handle form submission
function handleSubmit(event) {
    event.preventDefault();

    // Generate a random OTP
    const otp = generateOTP();

    // Display the OTP
    const otpContainer = document.getElementById('otpContainer');
    const otpText = document.getElementById('otpText');
    otpText.textContent = `Your OTP is: ${otp}`;

    // You would typically send this OTP to a server for verification in a real application.
}

// Add a submit event listener to the form
const bookingForm = document.getElementById('bookingForm');
bookingForm.addEventListener('submit', handleSubmit);