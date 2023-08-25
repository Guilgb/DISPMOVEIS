import mongoose, { connect } from 'mongoose';

class Database {
    async connect(): Promise<typeof mongoose> {
        try{
            return await mongoose.connect('mongodb+srv://leureggb:guilm4a1@petdatabases.8kdrlu4.mongodb.net/?retryWrites=true&w=majority');
        } catch (error) {
            console.error('Error to connect in database:', error);
            throw error;
        }
    }
}

export default new Database();