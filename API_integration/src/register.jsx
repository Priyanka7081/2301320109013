import axios from "axios";

const registerUser = async () => {
  try {
    const response = await axios.post("http://20.244.56.144/evaluation-service/register", {
      email: "priyankau7081@gmail.com",
      name: "priyanka kumari",
      mobileNo: "7081550355",
      githubUsername: "priyanka7081",
      rollNo: "aa1bb",
      accessCode: "xgAsNC"
    });

    console.log("Registration successful:", response.data);
  } catch (error) {
    console.error("Registration failed:", error.response?.data || error.message);
  }
};