import axios from 'axios';

const BASE_URL = 'http://localhost:5000';
const TOKEN = JSON.parse(localStorage.getItem("token"));

const publicRequest = axios.create({
    baseUrl: BASE_URL
});

const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: { token: `Bearer ${TOKEN}` }
})


export const userRegistration = (formData) => publicRequest.post("/register", formData);

export const userLogin = (loginData) => publicRequest.post("/login", loginData);

export const getOtp = (email) => userRequest.post("/sendOtp", email);

export const resetPassword = (data) => userRequest.post("/resetpassword", data);

export const createFaq = (data) => userRequest.post("/addfaq", data);

export const getFaq = () => publicRequest.get("/faqlist");