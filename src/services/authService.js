import api from "./api";

/*
 * Send OTP
 */

const sendOtp = async (phoneNumber) => {
    const response = await api.post(
        "accounts/send-otp/",
        {
            phone_number: phoneNumber,
        }
    );

    return response.data;
};


/*
 * Verify OTP
 */

const verifyOtp = async (
    phoneNumber,
    otpCode
) => {
    const response = await api.post(
        "accounts/verify-otp/",
        {
            phone_number: phoneNumber,
            otp_code: otpCode,
        }
    );

    return response.data;
};


/*
 * Complete Profile
 */

const completeProfile = async (data) => {
    const response = await api.patch(
        "accounts/complete-profile/",
        data
    );

    return response.data;
};


/*
 * Refresh Token
 */

const refreshToken = async (refresh) => {
    const response = await api.post(
        "accounts/token/refresh/",
        {
            refresh,
        }
    );

    return response.data;
};


/*
 * Logout
 */

const logout = async (refresh) => {
    const response = await api.post(
        "accounts/logout/",
        {
            refresh,
        }
    );

    return response.data;
};


const authService = {
    sendOtp,
    verifyOtp,
    completeProfile,
    refreshToken,
    logout,
};

export default authService;