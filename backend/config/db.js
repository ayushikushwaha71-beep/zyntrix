const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const User = require('../models/User');

const connectDB = async () => {
    try {
        // Use an in-memory database to run locally without a cloud cluster
        const mongoServer = await MongoMemoryServer.create();
        const mongoUri = mongoServer.getUri();
        
        const conn = await mongoose.connect(mongoUri);
        console.log(`In-Memory MongoDB Connected: ${conn.connection.host}`);

        // Create a test user automatically
        const userExists = await User.findOne({ email: 'test@zyntrix.com' });
        if (!userExists) {
            await User.create({
                name: 'Zyntrix Tester',
                email: 'test@zyntrix.com',
                password: 'password123'
            });
            console.log('✅ Test user created!');
            console.log('   Email: test@zyntrix.com');
            console.log('   Password: password123');
        }

    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};

module.exports = connectDB;
