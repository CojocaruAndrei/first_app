import axios from "axios";

const fetchData = async () => {
  try {
    const response = await axios.get(
      "https://my-json-server.typicode.com/CojocaruAndrei/my_mock_json/db"
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default fetchData;
