const WebsiteContent = require('../models/WebsiteContent');

const defaultFeatures = [
  { id: "1", title: "Lead Tracking", description: "Capture and manage leads efficiently with our advanced CRM", icon: "users" },
  { id: "2", title: "Installation Management", description: "Track installations from start to finish with real-time updates", icon: "briefcase" },
  { id: "3", title: "Solar CRM", description: "Manage customer relationships and communications in one place", icon: "heart" },
  { id: "4", title: "Project Scheduling", description: "Schedule and track all projects with team coordination", icon: "calendar" },
  { id: "5", title: "Solar Analytics", description: "Get insights into your business with detailed analytics", icon: "barChart" },
  { id: "6", title: "Document Management", description: "Store and organize all your project documents securely", icon: "fileText" },
];

const defaultPlans = [
  { id: "starter", name: "Starter", price: "$29", period: "/month", description: "Perfect for small solar businesses", features: ["Up to 100 leads", "Basic CRM", "Email support"], popular: false, buttonText: "Get Started" },
  { id: "pro", name: "Professional", price: "$79", period: "/month", description: "For growing solar companies", features: ["Unlimited leads", "Advanced CRM", "Priority support", "Analytics"], popular: true, buttonText: "Start Free Trial" },
  { id: "enterprise", name: "Enterprise", price: "$199", period: "/month", description: "For large-scale operations", features: ["Everything in Pro", "Unlimited users", "Custom integrations", "24/7 support"], popular: false, buttonText: "Contact Sales" }
];

// Get website content (public)
exports.getContent = async (req, res) => {
  try {
    let content = await WebsiteContent.findOne();
    
    // If no content exists, create with defaults
    if (!content) {
      content = await WebsiteContent.create({
        features: { items: defaultFeatures },
        pricing: { plans: defaultPlans }
      });
    }
    
    // If features exist but items array is empty, add defaults
    if (!content.features || !content.features.items || content.features.items.length === 0) {
      content.features = { ...content.features, items: defaultFeatures };
    }
    
    // If pricing exists but plans array is empty, add defaults
    if (!content.pricing || !content.pricing.plans || content.pricing.plans.length === 0) {
      content.pricing = { ...content.pricing, plans: defaultPlans };
    }
    
    await content.save();
    res.json({ content });
  } catch (error) {
    console.error('Get content error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Update website content (protected - admin only)
exports.updateContent = async (req, res) => {
  try {
    let content = await WebsiteContent.findOne();
    
    if (!content) {
      content = await WebsiteContent.create(req.body);
    } else {
      // Deep merge for features
      if (req.body.features) {
        content.features = {
          ...content.features,
          ...req.body.features,
          items: req.body.features.items || content.features.items || defaultFeatures
        };
      }
      // Deep merge for pricing
      if (req.body.pricing) {
        content.pricing = {
          ...content.pricing,
          ...req.body.pricing,
          plans: req.body.pricing.plans || content.pricing.plans || defaultPlans
        };
      }
      // Merge other fields
      Object.keys(req.body).forEach(key => {
        if (key !== 'features' && key !== 'pricing') {
          content[key] = req.body[key];
        }
      });
      await content.save();
    }
    
    res.json({ message: 'Content updated successfully', content });
  } catch (error) {
    console.error('Update content error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};
