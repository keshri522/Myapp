const connection = require("../DatabaseConnection/config");

const postAllData = async (req, res) => {
  // const data = req.body;
  const { name, email, textarea } = req.body;

  try {
    const sql = "INSERT INTO contact (Name, Email, Message) VALUES (?, ?, ?)";
    const values = [name, email, textarea];

    connection.query(sql, values, (error, result) => {
      if (error) {
        console.error("Error executing MySQL query: ", error);
        res.status(500).json({ error: "Internal Server Error" });
        return;
      }

      res.status(200).json({
        result: result,
        success: true,
      });
    });
  } catch (error) {
    // console.error("Error in postAllData controller: ", error);
    res.status(400).json({ error: "Bad Request" });
  }
};
const ContacData = async (req, res) => {
  // console.log(req.body.data); // just for debugging

  const {
    activeCardT,
    email,
    first_name,
    last_name,
    message,
    selectedService,
    phone,
    services,
  } = req.body.data;

  const values = [
    activeCardT,
    email,
    first_name,
    last_name,
    message,
    selectedService,
    phone,
    services,
  ];

  try {
    const sql =
      "INSERT INTO Support (activeCardT, email, first_name, last_name, message, selectedService, phone, services) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";

    connection.query(sql, values, (error, result) => {
      if (error) {
        console.error("Error executing MySQL query: ", error);
        res.status(500).json({ error: "Internal Server Error" });
        return;
      }

      res.status(200).json({
        result: result,
        success: true,
      });
    });
  } catch (error) {
    console.error("Error in ContacData controller: ", error);
    res.status(400).json({ error: "Bad Request" });
  }
};

module.exports = { ContacData, postAllData };
