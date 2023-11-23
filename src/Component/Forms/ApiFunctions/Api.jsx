// this page contains all the api function
import axios from "axios";

const ContactDataApi = async (data) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_REACT_API_CONTACT_PAGE}/contact`,
      {
        data: data,
      }
    );
    return response;
  } catch (error) {
    console.error(error);
  }
};

export default ContactDataApi;
