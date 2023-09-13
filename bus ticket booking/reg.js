// Function to generate a random 6-digit OTP
function generateOTP() {
    return Math.floor(100000 + Math.random() * 900000);
}

// Function to display the generated OTP
function displayOTP() {
    // Generate a random OTP
    const otp = generateOTP();

    // Display the OTP
    const otpContainer = document.getElementById('otpContainer');
    const otpText = document.getElementById('otpText');
    otpText.textContent = `Your OTP is: ${otp}`;
}
