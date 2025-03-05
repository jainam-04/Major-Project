const College = require("../Models/CollegeName");

// Get all colleges
const getAllColleges = async (req, res) => {
    try {
        const colleges = await College.find();
        res.status(200).json(colleges);
    } catch (error) {
        res.status(500).json({ message: "Error fetching colleges", error });
    }
};

// Filter colleges by location, budget, and cutoff
const filterColleges = async (req, res) => {
    try {
        const { percentile, category, examType, city } = req.body;

        // Validate input
        if (!percentile || !category || !examType) {
            return res.status(400).json({ error: 'Percentile, category, and exam type are required' });
        }

        // Filter colleges based on percentile, category, exam type, and city
        const recommendedColleges = College.filter(college => {
            const meetsPercentile = college.cutoff_scores[examType][category] <= percentile;
            const meetsCity = city ? college.city.toLowerCase() === city.toLowerCase() : true;
            return meetsPercentile && meetsCity;
        });

        // Send the filtered colleges as a response
        res.json(recommendedColleges);
    } catch (error) {
        console.error('Error in /recommend-colleges:', error);
        res.status(500).json({ error: 'An internal server error occurred' });
    }
};

module.exports = { getAllColleges, filterColleges };