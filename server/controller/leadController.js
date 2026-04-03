import Lead from "../models/Lead.js";
const createLead = async (req, res) => {
  try {
    const newLead = await Lead.create(req.body);
    res.status(201).json(newLead);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
const getLeads = async (req, res) => {
  try {

    const { platform } = req.query;

    const filter = {};
    if (platform) {
      filter.platform = platform;
    }

    const leads = await Lead.find(filter);
    res.json(leads);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getLeadById = async (req, res) => {
  try {
    const lead = await Lead.findById(req.params.id);
    if (!lead) return res.status(404).json({ message: "Lead not found" });
    res.json(lead);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


const updateLead = async (req, res) => {
  try {
    const updatedLead = await Lead.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedLead) return res.status(404).json({ message: "Lead not found" });
    res.json(updatedLead);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const deleteLead = async (req, res) => {
  try {
    const deletedLead = await Lead.findByIdAndDelete(req.params.id);
    if (!deletedLead) return res.status(404).json({ message: "Lead not found" });
    res.json({ message: "Lead deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export { createLead, getLeads, getLeadById, updateLead, deleteLead };