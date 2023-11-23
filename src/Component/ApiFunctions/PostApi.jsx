// this page contains all the api function
import axios from "axios";

const SupportData = async (data) => {
  try {
    const response = await axios.post("http://localhost:4000/support", {
      data: data,
    });
    return response;
  } catch (error) {
    console.error(error);
  }
};

export default SupportData;
