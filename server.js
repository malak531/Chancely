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
    EventDates: { type: String },
    RegistrationDeadline: { type: String },
    OfficialWebsite: { type: String },
    RegistrationLink: { type: String },
    EligibilityCriteria: { type: String },
    FundingType: { type: String },
    Picture: { type: String },
    OpportunityName: { type: String, required: true },
  }, { collection: 'opportunities' });
  
  const Opportunity = mongoose.model("Opportunity", OpportunitySchema, "opportunities");

  const AccountSchema = new mongoose.Schema({
    email: { type: String },
    password: { type: String },
    type: { type: String },
  }, { collection: 'account' });

  const Account = mongoose.model("account", AccountSchema, "account");


const app = express();
const PORT = 8080;

app.use(express.json());
// Serve static files from the build directory
app.use(express.static(path.join(__dirname, "build")));

app.get("/opportunities", async (req, res) => {
    try {
        // Fetch all documents from the opportunities collection
        const opportunities = await Opportunity.find({},{ OpportunityName: 1, _id: 0 });
        const opportunityNames = opportunities.map(opportunity => opportunity.OpportunityName);

    res.json(opportunityNames);
      } catch (error) {
        console.error("Error fetching opportunities:", error);
        res.status(500).json({ error: "Failed to fetch opportunities" });
      }
  });


// Handle any requests by sending the React app's index.html
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.get("/loginemails", async (req,res)=>{
    try {
        // Fetch all documents from the opportunities collection
        const accounts = await Account.find({});

        res.json(accounts);
      } catch (error) {
        console.error("Error fetching opportunities:", error);
        res.status(500).json({ error: "Failed to fetch opportunities" });
      }

});

app.listen(PORT, () => {
    console.log(`Server is running at http://ec2-13-61-3-118.eu-north-1.compute.amazonaws.com:8080/`);
});
