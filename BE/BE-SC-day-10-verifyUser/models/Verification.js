import mongoose, { model} from 'mongoose';

// define the Schema
const verificationsSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        required: true,
        unique: true
    },
    key: {
        type: String,
        required: true,
        unique: true
    }
},{collection: "verifications"});

// define the model
const Verification = model('Verification', verificationsSchema);

export default Verification;