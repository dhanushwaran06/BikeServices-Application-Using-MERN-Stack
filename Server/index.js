const express = require("express");
const { MongoClient, ObjectId } = require("mongodb");
const cors = require("cors");
const multer = require("multer");

const app = express();
app.use(cors());
app.use(express.json());

const CONNECTION_STRING =
  "mongodb+srv://ajdhanushjvl:E08pXPcv2GpcbnZn@cluster99.pjxc2ja.mongodb.net/?retryWrites=true&w=majority";

const DATABASE_NAME = "BIkeServices";
let database;

app.listen(5000, () => {
  MongoClient.connect(CONNECTION_STRING, (error, client) => {
    if (error) {
      console.error("Mongo DB Connection Error:", error);
    } else {
      database = client.db(DATABASE_NAME);
      console.log("Mongo DB Connection Successful");
    }
  });
});

app.get("/api/GetDatasCustomers", (req, res) => {
  database
    .collection("Customer")
    .find({})
    .toArray((error, result) => {
      if (error) {
        console.error("Error fetching data:", error);
        res.status(500).send("Internal Server Error");
      } else {
        res.send(result);
      }
    });
});

app.post("/api/AddDatasCustomers", multer().none(), (req, res) => {
  const newCustomer = {
    email: req.body.email,
    password: req.body.password,
  };

  database.collection("Customer").insertOne(newCustomer, (error) => {
    if (error) {
      console.error("Error adding customer:", error);
      res.status(500).send("Internal Server Error");
    } else {
      res.json("Added Successfully");
    }
  });
});

app.put("/api/UpdateDatasCustomers/:id", multer().none(), (req, res) => {
  const customerId = req.params.id;

  const updatedCustomer = {
    email: req.body.email,
    password: req.body.password,
  };

  database.collection("Customer").updateOne(
    { _id: ObjectId(customerId) }, // Assuming _id is the unique identifier
    { $set: updatedCustomer }, // Update fields specified in updatedCustomer
    (error) => {
      if (error) {
        console.error("Error updating customer:", error);
        res.status(500).send("Internal Server Error");
      } else {
        res.json("Updated Successfully");
      }
    },
  );
});

app.get("/api/GetDatasCustomers", (req, res) => {
  database
    .collection("Customer")
    .find({})
    .toArray((error, result) => {
      if (error) {
        console.error("Error fetching data:", error);
        res.status(500).send("Internal Server Error");
      } else {
        res.send(result);
      }
    });
});
//SHOPOWNERS
app.post("/api/AddDatasShopOwner", multer().none(), (req, res) => {
  const newShopOwner = {
    email: req.body.email,
    password: req.body.password,
  };

  database.collection("ShopOwner").insertOne(newShopOwner, (error) => {
    if (error) {
      console.error("Error adding ShopOwner:", error);
      res.status(500).send("Internal Server Error");
    } else {
      res.json("Added Successfully");
    }
  });
});

app.put("/api/UpdateDatasShopOwner/:id", multer().none(), (req, res) => {
  const ShopOwnerId = req.params.id;

  const updatedShopOwner = {
    email: req.body.email,
    password: req.body.password,
  };

  database.collection("ShopOwner").updateOne(
    { _id: ObjectId(ShopOwnerId) }, // Assuming _id is the unique identifier
    { $set: updatedShopOwner }, // Update fields specified in updatedCustomer
    (error) => {
      if (error) {
        console.error("Error updating ShopOwner:", error);
        res.status(500).send("Internal Server Error");
      } else {
        res.json("Updated Successfully");
      }
    },
  );
});
app.get("/api/GetDatasShopOwner", (req, res) => {
  database
    .collection("ShopOwner")
    .find({})
    .toArray((error, result) => {
      if (error) {
        console.error("Error fetching data:", error);
        res.status(500).send("Internal Server Error");
      } else {
        res.send(result);
      }
    });
});

// app.delete("/api/DeleteDatas/:id", (req, res) => {
//   const customerId = req.params.id;

//   database.collection("Customer").deleteOne(
//     { _id: ObjectId(customerId) }, // Assuming _id is the unique identifier
//     (error) => {
//       if (error) {
//         console.error("Error deleting customer:", error);
//         res.status(500).send("Internal Server Error");
//       } else {
//         res.json("Deleted Successfully");
//       }
//     }
//   );
// });
app.get("/services", (req, res) => {
  database
    .collection("service_details")
    .find({})
    .toArray((error, result) => {
      if (error) {
        console.error("Error fetching data:", error);
        res.status(500).send("Internal Server Error");
      } else {
        res.send(result);
      }
    });
});

app.post("/login", (req, res) => {
  if (req.body.type === "cutomer") {
    database
      .collection("Customer")
      .insertOne(req.body)
      .then((res) => res.status(200))
      .catch((err) => console.log(err));
  } else {
    database
      .collection("ShopOwner")
      .insertOne(req.body)
      .then((res) => res.status(200))
      .catch((err) => console.log(err));
  }
});

app.post("/book-service", (req, res) => {
  database
  .collection("services")
  .insertOne(req.body)
  .then((res) => res.status(200))
  .catch((err) => console.log(err));
});
