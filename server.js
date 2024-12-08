const express = require("express");
const path = require("path");
const mongoose = require("mongoose");


const mongoURI = "mongodb+srv://s202156350:Zjmt2002@cluster0.rckvi.mongodb.net/chancely?retryWrites=true&w=majority";
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB successfully!");
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB:", err);
  });

  const OpportunitySchema = new mongoose.Schema({
    Type: { type: String },
    Field: { type: String },
    Country: { type: String },
    City: { type: String },
    Organization: { type: String },
    Venue: { type: String },
    Description: { type: String },
    OpportunityName: { type: String },
    Organization: { type: String },
    Criteria: { type: String },
    FundingType: { type: String },
    Picture: { type: String },
    RegistrationLink: { type: String },
    Website: { type: String },
    Deadline: { type: String, required: true },
    EventDate: { type: String, required: true },
  }, { collection: 'opportunities' });
  
  const Opportunity = mongoose.model("Opportunity", OpportunitySchema, "opportunities");

  const AccountSchema = new mongoose.Schema({
    email: { type: String },
    password: { type: String },
    type: { type: String },
  }, { collection: 'account' });

  const Account = mongoose.model("Account", AccountSchema, "account");


const app = express();
const PORT = 3001;

app.use(express.json());
// Serve static files from the build directory
app.use(express.static(path.join(__dirname, "build")));

app.get("/api/opportunities", async (req, res) => {
    try {
        const opportunities = await Opportunity.find({}); // Fetch all opportunities
        res.json(opportunities); // Send the full data to the frontend
      } catch (error) {
        console.error("Error fetching opportunities:", error);
        res.status(500).json({ error: "Failed to fetch opportunities" });
      }
  });

  app.get("/loginemails", async (req,res)=>{
    try {
        const accounts = await Account.find({}); // Fetch all documents
        res.json(accounts); // Return them in JSON format
      } catch (error) {
        console.error("Error fetching accounts:", error); // Log errors
        res.status(500).json({ error: "Failed to fetch accounts" }); // Return a 500 response
      }

});

// Handle any requests by sending the React app's index.html
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "build", "index.html"));
});



app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:3001`);
});
