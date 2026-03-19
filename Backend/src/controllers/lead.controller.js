const Lead = require('../models/Lead');

exports.getAllLeads = async (req, res) => {
  try {
    const leads = await Lead.find({ createdBy: req.user.id })
      .populate('assignedTo', 'name email')
      .sort({ createdAt: -1 });
    res.json({ leads });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getLeadById = async (req, res) => {
  try {
    const lead = await Lead.findOne({
      _id: req.params.id,
      createdBy: req.user.id
    }).populate('assignedTo', 'name email');

    if (!lead) {
      return res.status(404).json({ message: 'Lead not found' });
    }

    res.json({ lead });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.createLead = async (req, res) => {
  try {
    const { name, email, phone, source, status, notes, address, estimatedValue } = req.body;

    const lead = new Lead({
      name,
      email,
      phone,
      source,
      status,
      notes,
      address,
      estimatedValue,
      createdBy: req.user.id
    });

    await lead.save();
    res.status(201).json({ message: 'Lead created successfully', lead });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.updateLead = async (req, res) => {
  try {
    const lead = await Lead.findOneAndUpdate(
      { _id: req.params.id, createdBy: req.user.id },
      req.body,
      { new: true }
    );

    if (!lead) {
      return res.status(404).json({ message: 'Lead not found' });
    }

    res.json({ message: 'Lead updated successfully', lead });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.deleteLead = async (req, res) => {
  try {
    const lead = await Lead.findOneAndDelete({
      _id: req.params.id,
      createdBy: req.user.id
    });

    if (!lead) {
      return res.status(404).json({ message: 'Lead not found' });
    }

    res.json({ message: 'Lead deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
