"use server"

import axios from "axios"

export async function verifyCaptcha(token) {
  try {
    const res = await axios.post(
      `https://www.google.com/recaptcha/api/siteverify?secret=6LdlnyIpAAAAAD0qZvenrme5FhbmC7qeIL77GEor&response=${token}`
    )
    
    if (res.data.success) {
      return "success!"
    } else {
      console.error("reCAPTCHA verification failed:", res.data["error-codes"])
      throw new Error("reCAPTCHA verification failed")
    }
  } catch (error) {
    console.error("Error verifying reCAPTCHA:", error.message)
    throw new Error("Failed to verify reCAPTCHA")
  }
}