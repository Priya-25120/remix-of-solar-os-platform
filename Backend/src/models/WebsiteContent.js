const mongoose = require('mongoose');

const websiteContentSchema = new mongoose.Schema({
  hero: {
    badge: { type: String, default: 'Trusted by 500+ Solar Companies' },
    title: { type: String, default: 'Power Your Solar Business with Solar OS' },
    description: { type: String, default: 'Manage solar installations, customers, sales pipelines and analytics in one powerful platform.' },
    primaryButton: { type: String, default: 'Get Started Free' },
    secondaryButton: { type: String, default: 'Book Demo' },
    image: { type: String, default: '' },
  },
  features: {
    title: { type: String, default: 'Everything you need to scale your solar business' },
    subtitle: { type: String, default: 'From lead management to installation tracking' },
    items: [{
      id: String,
      title: String,
      description: String,
      icon: String,
    }],
  },
  pricing: {
    title: { type: String, default: 'Simple, transparent pricing' },
    subtitle: { type: String, default: 'Choose the plan that works best for your business' },
    plans: [{
      id: String,
      name: String,
      price: String,
      period: String,
      description: String,
      features: [String],
      popular: Boolean,
      buttonText: String,
    }],
  },
  about: {
    title: { type: String, default: 'About Solar OS' },
    subtitle: { type: String, default: 'Empowering solar businesses worldwide' },
    content: { type: String, default: '' },
    mission: { type: String, default: '' },
    vision: { type: String, default: '' },
    team: [{
      id: String,
      name: String,
      role: String,
      image: String,
    }],
  },
  contact: {
    title: { type: String, default: 'Get in Touch' },
    subtitle: { type: String, default: 'Have questions? We\'d love to hear from you.' },
    email: { type: String, default: 'hello@solaros.com' },
    phone: { type: String, default: '' },
    address: { type: String, default: '' },
  },
  navigation: {
    items: [{
      id: String,
      label: String,
      target: String,
      path: String,
      external: Boolean,
    }],
  },
  footer: {
    company: { type: String, default: 'Solar OS' },
    description: { type: String, default: 'The complete platform for managing your solar business.' },
    copyright: { type: String, default: '© 2024 Solar OS. All rights reserved.' },
    sections: [{
      title: String,
      links: [{
        id: String,
        label: String,
        url: String,
      }],
    }],
    socials: [{
      id: String,
      platform: String,
      url: String,
      icon: String,
    }],
  },
  seo: {
    title: { type: String, default: 'Solar OS - Power Your Solar Business' },
    description: { type: String, default: 'Complete platform for managing solar installations, customers, sales pipelines and analytics.' },
    keywords: { type: String, default: 'solar, crm, solar business, lead management' },
    ogImage: { type: String, default: '' },
  },
}, {
  timestamps: true,
});

module.exports = mongoose.model('WebsiteContent', websiteContentSchema);
