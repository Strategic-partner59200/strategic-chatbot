const Ads = require("../models/adsSchema"); // Ensure the correct path to your model
const mongoose = require("mongoose");

class PubController {
  // Create a new publicité
//   static async createPub(req, res) {
//     try {
//       const { title, mainText, imageUrl } = req.body;
  
//       // Check if a publicité with the same details already exists
//       const existingPub = await Ads.findOne({ title, mainText, imageUrl });
  
//       if (existingPub) {
//         return res.status(400).json({
//           message: "A publicité with the same details already exists. Please deactivate it before posting again.",
//         });
//       }
  
//       // Create and save a new publicité
//       const newPub = new Ads({ title, mainText, imageUrl });
//       console.log('newPub', newPub);
//       await newPub.save();
  
//       res.status(201).json({ message: "Publicité created successfully", pub: newPub });
//     } catch (error) {
//       console.error("Error creating publicité:", error);
  
//       // Check for duplicate key errors
//       if (error.code === 11000) {
//         return res.status(400).json({
//           message: "Duplicate publicité detected. A publicité with similar details already exists.",
//         });
//       }
  
//       res.status(500).json({ message: "Failed to create publicité", error });
//     }
//   }
static async createPub(req, res) {
    try {
      const { title, mainText, imageUrl, link } = req.body;
  
      // Check if there's already an existing publicité in the database
      const existingPub = await Ads.findOne();
  
      if (existingPub) {
        return res.status(400).json({
          message: "Only one publicité is allowed at a time. Please delete the existing publicité before creating a new one.",
        });
      }
  
      // Create and save a new publicité
      const newPub = new Ads({ title, mainText, imageUrl, link });
      await newPub.save();
  
      res.status(201).json({ message: "Publicité created successfully", pub: newPub });
    } catch (error) {
      console.error("Error creating publicité:", error);
  
      // Handle Mongoose validation errors
      if (error.name === "ValidationError") {
        const messages = Object.values(error.errors).map(err => err.message);
        return res.status(400).json({ message: "Validation failed", errors: messages });
      }
  
      res.status(500).json({ message: "Failed to create publicité", error });
    }
  }
  
  

  // Fetch all publicities
  static async getPub(req, res) {
    try {
      const pubs = await Ads.find();
      res.status(200).json(pubs);
    } catch (error) {
      console.error("Error fetching publicities:", error);
      res.status(500).json({ message: "Failed to fetch publicities", error });
    }
  }

  // Delete a publicité by ID
  static async deletePub(req, res) {
    try {
      const { id } = req.params;

      console.log('id', id);
  
      // Validate ObjectId
      if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ message: "Invalid ID format" });
      }
  
      const deletedPub = await Ads.findByIdAndDelete(id);
      if (!deletedPub) {
        return res.status(404).json({ message: "Publicité not found" });
      }
  
      res.status(200).json({ message: "Publicité deleted successfully", pub: deletedPub });
    } catch (error) {
      console.error("Error deleting publicité:", error);
      res.status(500).json({ message: "Failed to delete publicité", error });
    }
}
}

module.exports = PubController;
