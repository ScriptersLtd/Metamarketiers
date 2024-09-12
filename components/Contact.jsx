"use client";
import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useRef } from "react";
import { verifyCaptcha } from "@/app/api/Recaptcha/ServerActions";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import Footer from "./Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    message: "",
  });

  const handleInputChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const id = toast.loading("Sending Request ...", { autoClose: false });
    try {
      // Send formData to the "/api/contact" API endpoint
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const responseData = await response.text();
        toast.update(id, {
          render: responseData,
          type: "success",
          isLoading: false,
          autoClose: 5000,
        });
        setFormData({
          name: "",
          phoneNumber: "",
          email: "",
          message: "",
        });
      } else {
        const responseData = await response.json();
        toast.update(id, {
          render: responseData,
          type: "error",
          isLoading: false,
          autoClose: 5000,
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
  const recaptchaRef = useRef(null);
  const [isVerified, setIsverified] = useState(false);

  async function handleCaptchaSubmission(token) {
    // Server function to verify captcha
    await verifyCaptcha(token)
      .then(() => setIsverified(true))
      .catch(() => setIsverified(false));
  }
  return (
    <>
    <div className="flex flex-col justify-center items-center bg-neutral-950 min-h-screen">
      <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500 font-bold text-6xl sm:text-7xl md:text-8xl mt-24 text-center">
        CONTACT US
      </h1>
      <div className="absolute flex justify-center items-center h-screen w-screen ">
        <div className="top-52 right-[500px] h-[350px] w-[650px]  rounded-[220px] mix-blend-normal bg-purple-600 opacity-15 blur-3xl"></div>
        <div className="top-52 left-[300px] h-[600px] w-[600px] rounded-[220px] bg-blue-600 mix-blend-normal opacity-15 blur-3xl"></div>
      </div>
      <div className="rounded-xl backdrop-blur-lg p-5 bg-neutral-6  00/20 mt-12 max-w-6xl w-full select-none ">
        <form action="" onSubmit={onSubmit} className="flex flex-col gap-y-4 justify-center items-center">
          <input
            className="p-3 h-[60px] sm:h-[80px] md:h-[90px] rounded-xl w-full  focus:outline-purple-500 focus:outline-none focus:border-none  border border-gray-400 backdrop-blur-sm bg-neutral-950/40 text-xl sm:text-2xl md:text-3xl placeholder:text-neutral-500/70 text-neutral-200 "
            type="text"
            placeholder="Name"
            onChange={(e) => handleInputChange("name", e.target.value)}
          />
          <input
            className="p-3 h-[60px] sm:h-[80px] md:h-[90px] rounded-xl w-full  focus:outline-purple-500 focus:outline-none focus:border-none  border border-gray-400 backdrop-blur-sm bg-neutral-950/40 text-xl sm:text-2xl md:text-3xl placeholder:text-neutral-500/70 text-neutral-200 "
            type="text"
            placeholder="Phone Number"
            onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
          />
          <input
            className="p-3 h-[60px] sm:h-[80px] md:h-[90px] rounded-xl w-full  focus:outline-purple-500 focus:outline-none focus:border-none  border border-gray-400 backdrop-blur-sm bg-neutral-950/40 text-xl sm:text-2xl md:text-3xl placeholder:text-neutral-500/70 text-neutral-200 "
            type="text"
            placeholder="Email"
            onChange={(e) => handleInputChange("email", e.target.value)}
          />
          <textarea
            className="p-3 h-[290px] rounded-xl w-full  focus:outline-purple-500 focus:outline-none focus:border-none  border border-gray-400 backdrop-blur-sm bg-neutral-950/40 text-3xl placeholder:text-neutral-500/70 text-neutral-200 "
            type="text"
            placeholder="Message"
            onChange={(e) => handleInputChange("message", e.target.value)}
          />
          <div className="flex flex-col gap-y-2 py-10 justify-center items-center ">
            <ReCAPTCHA
            theme="dark"
              sitekey="6LdlnyIpAAAAAO3jl8iqrfTTTKr8Y3t3vcuqv6p9"
              ref={recaptchaRef}
              onChange={handleCaptchaSubmission}
              className="z-10"
            />
            <p className="text-black text-xs z-10">
              Please verify the Captcha to Submit
            </p>
            <button
              type="submit"
              className={`rounded-lg p-2 z-10 transition-all
              ${
                isVerified
                  ? "bg-gradient-to-r from-purple-500 to-blue-500 w-fit rounded-xl p-4 text-3xl text-neutral-100"
                  : "bg-gray-600 text-gray-400 text-3xl p-4"
              }`}
              disabled={!isVerified}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
        <ToastContainer
          position="top-left"
          autoClose={5000}
          hideProgressBar={false}
          closeOnClick
          rtl={false}
          theme="light"
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
    </div>
      
      <Footer line1={"Through best-in-class branding agency services, we fuse creativity with strategy, crafting visually striking and strategically sound brands that don’t just fit in—they dominate!"} heading={"The Digital Marketing Toolkit We Rely on for Powering Your Success"} button={"Talk to us!"} />

    </>
    );
};

export default Contact;
