import mongoose from 'mongoose';

const mongoURI = 'mongodb://localhost:27017/trabalho';

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', (err) => console.error('MongoDB connection error:', err));

db.once('open', () => {
    console.log('MongoDB connection established');
});

export default db;