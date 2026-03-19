const mongoose = require('mongoose');
const User = require('./src/models/User');
require('dotenv').config();

const createDefaultAdmin = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');

    // Check if admin user already exists
    const existingAdmin = await User.findOne({ email: 'admin@solaros.com' });
    
    if (existingAdmin) {
      console.log('Admin user already exists');
      // Update role to admin if not already
      if (existingAdmin.role !== 'admin') {
        existingAdmin.role = 'admin';
        await existingAdmin.save();
        console.log('Updated user role to admin');
      }
    } else {
      // Create default admin user
      const adminUser = new User({
        name: 'Admin User',
        email: 'admin@solaros.com',
        password: 'admin123',
        role: 'admin',
        isActive: true
      });

      await adminUser.save();
      console.log('Default admin user created successfully');
    }

    // Also ensure admin@gmail.com is admin (for the user who signed up)
    const existingGmailAdmin = await User.findOne({ email: 'admin@gmail.com' });
    if (existingGmailAdmin) {
      if (existingGmailAdmin.role !== 'admin') {
        existingGmailAdmin.role = 'admin';
        await existingGmailAdmin.save();
        console.log('Updated admin@gmail.com role to admin');
      } else {
        console.log('admin@gmail.com already has admin role');
      }
    }

    console.log('Admin credentials:');
    console.log('Email: admin@solaros.com');
    console.log('Password: admin123');
    console.log('OR');
    console.log('Email: admin@gmail.com');
    console.log('(Your signup password)');

    process.exit(0);
  } catch (error) {
    console.error('Error creating admin user:', error);
    process.exit(1);
  }
};

createDefaultAdmin();
