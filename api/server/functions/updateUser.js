import User from '../models/user';

// Function to find a user by ID and update their information
function updateUserById(userId, updates) {
  return new Promise(async (resolve, reject) => {
    try {
      // Find the user by ID
      const user = await User.findById(userId);

      if (!user) {
        return resolve("User not found.");
      }

      // Update user information based on provided updates
      for (const key in updates) {
        if (updates.hasOwnProperty(key)) {
          user[key] = updates[key];
        }
      }

      // Save the updated user in the database
      await user.save();

      const updatedUser = await User.findById(userId);

      resolve(updatedUser);
    } catch (error) {
      console.error("Error updating user:", error);
      reject("An error occurred while updating the user.");
    }
  });
}

module.exports = { updateUserById };
