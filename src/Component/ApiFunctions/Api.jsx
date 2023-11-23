// this page contains all the api function
import axios from "axios";

const ContactDataApi = async (data) => {
  try {
    const response = await axios.post("http://localhost:4000/contact", {
      data: data,
    });
    return response;
  } catch (error) {
    console.error(error);
  }
};

export default ContactDataApi;
