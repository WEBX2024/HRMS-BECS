import React, { useState } from "react";
import { User, Lock } from "lucide-react";
import Button from "../components/Button";
import toast, { Toaster } from "react-hot-toast";

const PassReset = () => {
  const [step, setStep] = useState(1); // 1: ID → Get OTP, 2: OTP verify, 3: Password reset
  const [userID, setUserID] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // 🔹 Step 1: Get OTP
  const handleGetOtp = async (e) => {
    e.preventDefault();
    try {
      // TODO: Backend call to send OTP using userID
      // Example: await fetch("/api/send-otp", { method: "POST", body: JSON.stringify({ userID }) });

      toast.success("OTP sent successfully to your registered email!", {
        position: "top-right",
      });
      setStep(2);
    } catch (err) {
      console.log(err); // For debugging
      toast.error("Failed to send OTP. Please try again.", {
        position: "top-right",
      });
    }
  };

  // 🔹 Step 2: Verify OTP
  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    try {
      // TODO: Backend call to verify OTP
      // Example: await fetch("/api/verify-otp", { method: "POST", body: JSON.stringify({ userID, otp }) });

      toast.success("OTP verified successfully!", { position: "top-right" });
      setStep(3);
    } catch (err) {
      console.log(err); // For debugging
      toast.error("Invalid OTP. Please try again.", { position: "top-right" });
    }
  };

  // 🔹 Step 3: Reset Password
  const handlePasswordReset = async (e) => {
    e.preventDefault();
    try {
      // TODO: Backend call to reset password
      // Example: await fetch("/api/reset-password", { method: "POST", body: JSON.stringify({ userID, newPassword, confirmPassword }) });

      toast.success("Password reset successful!", { position: "top-right" });
      // Optionally navigate to login page here
    } catch (err) {
      console.log(err); // For debugging
      toast.error("Password reset failed. Please try again.", {
        position: "top-right",
      });
    }
  };

  return (
    <>
      <Toaster /> 

      <div className="flex items-center justify-center h-screen bg-gradient-to-r from-red-900 via-white to-red-900">
        <div
          className="flex flex-col justify-center w-full max-w-md rounded-xl px-8 py-10 
                    border border-black/20 bg-white/10 backdrop-blur-md shadow-2xl 
                    text-white text-sm animate-fadeIn"
        >
          {/* Logo + Titles */}
          <div className="flex justify-center mb-4">
            <img
              src="/logo.png"
              alt="BECS Logo"
              className="w-16 h-16 object-contain"
            />
          </div>
          <h4 className="text-3xl font-semibold text-center text-black mb-2">
            BECS HRMS
          </h4>
          <h2 className="text-black text-xl text-center mb-8">
            Forgot Password
          </h2>

          {/* FORM */}
          <form
            onSubmit={
              step === 1
                ? handleGetOtp
                : step === 2
                ? handleVerifyOtp
                : handlePasswordReset
            }
          >
            {/* STEP 1 — Enter User ID */}
            {step === 1 && (
              <>
                <label
                  htmlFor="alphanumericField"
                  className="block mb-1 font-medium text-black"
                >
                  User ID
                </label>
                <div className="relative mb-6">
                  <User
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
                    size={18}
                  />
                  <input
                    type="text"
                    id="alphanumericField"
                    name="ID"
                    value={userID}
                    onChange={(e) => setUserID(e.target.value)}
                    pattern="[A-Za-z0-9]+"
                    title="Only alphanumeric characters are allowed"
                    placeholder="e.g: a1b2c3d4"
                    required
                    className="w-full p-2 pl-9 bg-transparent border border-gray-900 rounded-md 
                               focus:outline-none focus:ring-1 transition focus:ring-black focus:border-black 
                               placeholder-slate-500 text-black"
                  />
                </div>
                <div className="flex items-center justify-center">
                  <Button type="submit" text="Get OTP" />
                </div>
              </>
            )}

            {/* STEP 2 — Enter OTP */}
            {step === 2 && (
              <>
                <label
                  htmlFor="otpField"
                  className="block mb-1 font-medium text-black"
                >
                  Enter OTP
                </label>
                <div className="flex items-center gap-2 mb-6">
                  <input
                    type="text"
                    id="otpField"
                    name="otp"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    placeholder="Enter the OTP"
                    required
                    className="w-full p-2 bg-transparent border border-gray-900 rounded-md 
                               focus:outline-none focus:ring-1 transition focus:ring-black focus:border-black 
                               placeholder-slate-500 text-black"
                  />
                  <Button type="submit" text="Verify OTP" />
                </div>
              </>
            )}

            {/* STEP 3 — New Password */}
            {step === 3 && (
              <>
                <label
                  htmlFor="newPassword"
                  className="block mb-1 font-medium text-black"
                >
                  New Password
                </label>
                <div className="relative mb-4">
                  <Lock
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
                    size={18}
                  />
                  <input
                    type="password"
                    id="newPassword"
                    name="newPassword"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    placeholder="Enter new password"
                    required
                    className="w-full p-2 pl-9 bg-transparent border border-gray-900 rounded-md 
                               focus:outline-none focus:ring-1 transition focus:ring-black focus:border-black 
                               placeholder-slate-500 text-black"
                  />
                </div>

                <label
                  htmlFor="confirmPassword"
                  className="block mb-1 font-medium text-black"
                >
                  Confirm Password
                </label>
                <div className="relative mb-6">
                  <Lock
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
                    size={18}
                  />
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Confirm password"
                    required
                    className="w-full p-2 pl-9 bg-transparent border border-gray-900 rounded-md 
                               focus:outline-none focus:ring-1 transition focus:ring-black focus:border-black 
                               placeholder-slate-500 text-black"
                  />
                </div>

                <div className="flex items-center justify-center">
                  <Button type="submit" text="Confirm" />
                </div>
              </>
            )}
          </form>
        </div>
      </div>
    </>
  );
};

export default PassReset;
