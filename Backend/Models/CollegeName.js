const mongoose = require("mongoose");

const CollegeSchema = new mongoose.Schema({
  college_name: { type: String, required: true },
  state: { type: String, required: true },
  city: { type: String, required: true },
  fees: {
    first_year_fee: { type: Number, required: true }
  },
  cutoff_scores: {
    MHTCET: {
      general: { type: Number, required: false },
      OBC: { type: Number, required: false },
      SC: { type: Number, required: false },
      ST: { type: Number, required: false }
    },
    JEE: {
      general: { type: Number, required: false },
      OBC: { type: Number, required: false },
      SC: { type: Number, required: false },
      ST: { type: Number, required: false }
    }
  },
  tagline: { type: String, required: false }
});

module.exports = mongoose.model("College", CollegeSchema);
