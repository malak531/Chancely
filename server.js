const express = require("express");
const path = require("path");
const mongoose = require("mongoose");

// use mongodb+srv://s202156350:Zjmt2002@cluster0.rckvi.mongodb.net/chancely?retryWrites=true&w=majority to connect with localhost
// const mongoURI = "mongodb+srv://vercel-admin-user:JKfvw12JgUJWkDL4@cluster0.rckvi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const mongoURI = "mongodb+srv://s202156350:Zjmt2002@cluster0.rckvi.mongodb.net/chancely?retryWrites=true&w=majority";
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB successfully!");
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB:", err);
  });

  const OpportunitySchema = new mongoose.Schema({
    Field: { type: String },
    City: { type: String },
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
    EventDate: { type: String},
    Country: { type: String },
    Type: { type: String },
  }, { collection: 'opportunities' });
  
  const Opportunity = mongoose.model("Opportunity", OpportunitySchema, "opportunities");

  const OrganizationSchema = new mongoose.Schema({
    organizationName: { type: String },
    country: { type: String },
    email: { type: String },
    industry: { type: String },
    organizationPassword: { type: String },
    organizationType: { type: String },
    overview: { type: String },
    logo: { type: String },
    backgroundImage: {type: String},
    organizationURL: { type: String },
  }, { collection: 'organization' });
  
  const Organization = mongoose.model("Organization", OrganizationSchema, "organization");

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

  app.get('/api/opportunity/:id', async (req, res) => {
    try {
      const opportunity = await Opportunity.findById(req.params.id);
      res.json(opportunity);
    } catch (err) {
      res.status(500).send('Server error');
    }
  });

  app.get("/api/organizations", async (req, res) => {
    try {
        const organizations = await Organization.find({}); // Fetch all organizations
        res.json(organizations); // Send the full data to the frontend
      } catch (error) {
        console.error("Error fetching organizations:", error);
        res.status(500).json({ error: "Failed to fetch organizations" });
      }
  });

  app.get("/api/organization/:id", async (req, res) => {
    try {
        const organization = await Organization.findById(req.params.id);
        res.json(organization);
      } catch (err) {
        res.status(500).send('Server error');
      }
  });
  app.get("/api/organizationEvents/:id", async (req, res) => {
    try {
        const organization = await Organization.findById(req.params.id);
        const events = await Opportunity.find()
        res.json(organization);
      } catch (err) {
        res.status(500).send('Server error');
      }
  });

  app.delete('/api/organization/:id', async (req, res) => {
    const { id } = req.params;
  
    try {
      // Delete organization from database
      const result = await Organization.findByIdAndDelete(id); // MongoDB example
  
      if (!result) {
        return res.status(404).send({ message: 'Organization not found' });
      }
  
      res.status(200).send({ message: 'Organization deleted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: 'Error deleting organization' });
    }
  });
  

  app.post("/api/eventCreation", async (req, res) => {
    try {

        const Picture = req.body.eventImage;
        const OpportunityName = req.body.eventTitle;
        const Type = req.body.eventType;
        const Country = req.body.eventLocation;
        const Venue = req.body.eventVenue;
        const FundingType = req.body.feesType;
        const EventDate = req.body.eventDates;
        const Criteria = req.body.joiningCriteria;
        const Description = req.body.eventDescription;
        const RegistrationLink = req.body.registrationLink;
        const Website = req.body.officialWebsite;
        const Deadline = req.body.Deadline;
        const City = req.body.eventCity;

     
   
      // Create a new Opportunity document
      const newOpportunity = new Opportunity({
        Field: Type,
        City,
        Venue,
        Description,
        OpportunityName,
        Organization: "Organization",
        Criteria,
        FundingType,
        Picture,
        RegistrationLink,
        Website,
        Deadline,
        EventDate,
        Country,
        Type,
      });
   
      // Save the opportunity to the database
      await newOpportunity.save();
   
      // Respond with the newly created opportunity
      res.status(201).json(newOpportunity);
    } catch (error) {
      console.error("Error saving opportunity:", error);
      res.status(500).json({ error: "Failed to create opportunity" });
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
