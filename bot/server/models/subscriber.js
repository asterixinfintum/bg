import mongoose from 'mongoose';

const subscriberSchema = new mongoose.Schema({
  userId: {
    type: Number,
    required: true,
    unique: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model('Subscriber', subscriberSchema);