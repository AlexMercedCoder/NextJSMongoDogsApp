import dogs from "./data.json";
import { connect } from "./connection";

// function to get all dogs
export const getDogs = async () => {
  try {
    const { conn, Dog } = await connect(); // get connection and model
    return await Dog.find({}); // find and return all dogs
  } catch (error) {
    return { error: "Error in getDogs function" };
  }
};

// function to get singleDog
export const getDog = async (id) => {
    try {
      const { conn, Dog } = await connect(); // get connection and model
      return await Dog.findById(id); // find and return all dogs
    } catch (error) {
      return { error: "Error in getDogs function" };
    }
  };

// function create a dog
export const createDog = async (newDog) => {
    try {
        const { conn, Dog } = await connect(); // get connection and model
        return await Dog.create(newDog); // create and return new dog
      } catch (error) {
        return { error: "Error in createDog function" };
      }
}

// update a dog
export const updateDog = async (updatedDog, id) => {
    try {
        const { conn, Dog } = await connect(); // get connection and model
        return await Dog.findByIdAndUpdate(id, updatedDog, {new: true}); // update and return dog
      } catch (error) {
        return { error: "Error in updateDog function" };
      }
};

// delete a dog
export const destroyDog = async (id) => {
    try {
        const { conn, Dog } = await connect(); // get connection and model
        return await Dog.findByIdAndRemove(id); // destroy and return dog
      } catch (error) {
        return { error: "Error in destroyDog function" };
      }
};
