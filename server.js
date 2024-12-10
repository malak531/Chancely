const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const { type } = require("os");

const mongoURI = "mongodb+srv://s202156350:Zjmt2002@cluster0.rckvi.mongodb.net/chancely?retryWrites=true&w=majority";
let user ='websummit@gmail.com'; 
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
    organizationType: { type: String },
    overview: { type: String },
    logo: { type: String },
    organizationPassword: { type: String },
    organizationURL: { type: String },
    backgroundImage: {type: String},
    pending: {type: Boolean},
  }, { collection: 'organization' });
  
  const Organization = mongoose.model("Organization", OrganizationSchema, "organization");

  const AccountSchema = new mongoose.Schema({
    email: { type: String },
    password: { type: String },
    type: { type: String },
  }, { collection: 'account' });

  const Account = mongoose.model("Account", AccountSchema, "account");

  const UserSchema = new mongoose.Schema({
    firstName: { type: String },
    lastName: { type: String },
    email: { type: String },
    password: { type: String },
    fieldOfInterest: {type: Array},
    type: { type: String },
    
  }, { collection: 'user' });

  const User = mongoose.model("User", UserSchema, "user");


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
        const organizations = await Organization.find({pending: false}); // Fetch all organizations
        res.json(organizations); // Send the full data to the frontend
      } catch (error) {
        console.error("Error fetching organizations:", error);
        res.status(500).json({ error: "Failed to fetch organizations" });
      }
  });
  app.get("/api/organizationWithEmail", async (req, res) => {
    try {
        console.log("hello", user);
        const organizations = await Organization.find({email: user}); // Fetch all organizations
        res.json(organizations); // Send the full data to the frontend
      } catch (error) {
        console.error("Error fetching organizations:", error);
        res.status(500).json({ error: "Failed to fetch organizations" });
      }
  });
  app.post("/api/login-success", async (req, res) => {
    user = req.body.email;
  });
  
  app.get("/api/accounts", async (req, res) => {
    try {
        const accounts = await Account.find({}); // Fetch all organizations
        res.json(accounts); // Send the full data to the frontend
      } catch (error) {
        console.error("Error fetching accounts:", error);
        res.status(500).json({ error: "Failed to fetch accounts" });
      }
  });
  app.get("/api/organizationsPending", async (req, res) => {
    try {
        const organizations = await Organization.find({pending: true}); // Fetch all organizations
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
        // Fetch the organization by its ID
        const organization = await Organization.findById(req.params.id);
    
        if (!organization) {
          return res.status(404).send({ message: "Organization not found" });
        }
    
        // Find all opportunities associated with this organization's name
        const events = await Opportunity.find({ Organization: organization.organizationName });
    
        res.json({events});
      } catch (err) {
        console.error("Error fetching organization events:", err);
        res.status(500).send({ message: "Server error" });
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

  app.post('/api/organizations/:id', async (req, res) => {
    const { id } = req.params;  // Extract the organization ID from the URL parameters
    const { pending } = req.body.pending; 
    try {
      // Find the organization by its ID and update its 'pending' status
      const updatedOrganization = await Organization.findByIdAndUpdate(
        id, 
        { pending: false },  // Update the 'pending' field
 // Return the updated document
      );
  
      if (!updatedOrganization) {
        return res.status(404).json({ message: 'Organization not found' });
      }
  
      // Respond with the updated organization
      res.status(200).json(updatedOrganization);
    } catch (error) {
      console.error('Error updating organization:', error);
      res.status(500).json({ message: 'Server error' });
    }
  });
  

  app.post("/api/eventCreation", async (req, res) => {
    try {

        const Picture = "https://organization-logosss.s3.eu-north-1.amazonaws.com/websummitlogo.jpeg";
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

  app.post("/api/userAccount", async (req, res) => {
    try {
        const firstName = req.body.firstName;
        const lastName = req.body.lastName;
        const email = req.body.email;
        const password = req.body.password;
        const fieldOfInterest = ["sports", "industry"];
        const type = "user";
        const newAccount = new Account({
        email,
        password,
        type,

      });

      const newUser = new User({
        firstName,
        lastName,
        email,
        password,
        fieldOfInterest,
        type,

      });

      user = email; 
   
      // Save the opportunity to the database
      await newAccount.save();
      await newUser.save();
   
      // Respond with the newly created opportunity
      res.status(201).json(newAccount);
    } catch (error) {
      console.error("Error saving account:", error);
      res.status(500).json({ error: "Failed to create account" });
    }
  });

  app.post("/api/organizationAccount", async (req, res) => {
    try {

        const organizationName = req.body.orgName;
        const country = req.body.country;
        const email = req.body.email;
        const industry = req.body.industry;
        const organizationType = req.body.orgType;
        const overview = req.body.overview;
        const logo = "https://organization-logosss.s3.eu-north-1.amazonaws.com/websummitlogo.jpeg";
        const organizationPassword = req.body.password
        const organizationURL = req.body.url;
        const backgroundImage = "https://chancelyevents.s3.eu-north-1.amazonaws.com/Web-Summit-Qatar.png" ;
        const pending = true;
        
        const newOrganization = new Organization({
        organizationName,
        country,
        email,
        industry,
        organizationType,
        overview,
        logo,
        organizationPassword,
        organizationURL,
        backgroundImage,
        pending,

      });

      const newAccount = new Account({
        email: email,
        password: organizationPassword,
        type: "organization",

      });
   
    user = email; 
      // Save the opportunity to the database
      await newAccount.save();
      await newOrganization.save();
   
      // Respond with the newly created opportunity
      res.status(201).json(newAccount);
    } catch (error) {
      console.error("Error saving account:", error);
      res.status(500).json({ error: "Failed to create account" });
    }
  });




// Handle any requests by sending the React app's index.html
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "build", "index.html"));
});



app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:3001`);
});

module.exports = app;
