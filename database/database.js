import * as React from "react";
import { Storage } from "expo-storage";

const storeItem = async (key, data) => {
  try {
    await Storage.setItem({
      key,
      value: JSON.stringify(data),
    });
    console.log(`Item with key ${key} stored successfully.`);
  } catch (error) {
    console.error(`Error storing item with key ${key}:`, error);
  }
};

const retrieveItem = async (key) => {
  try {
    const dataString = await Storage.getItem({ key });
    if (dataString) {
      const data = JSON.parse(dataString);
      console.log(`Item with key ${key} retrieved successfully.`, data);
      return data;
    } else {
      console.log(`Item with key ${key} not found.`);
      return null;
    }
  } catch (error) {
    console.error(`Error retrieving item with key ${key}:`, error);
    return null;
  }
};

const deleteItem = async (key) => {
  try {
    await Storage.removeItem({ key });
    console.log(`Item with key ${key} has been deleted successfully.`);
  } catch (error) {
    console.error(`Error deleting item with key ${key}:`, error);
  }
};

const getAllKeys = async () => {
  try {
    const keys = await Storage.getAllKeys();
    console.log("All keys:", keys);
    return keys;
  } catch (error) {
    console.error("Error retrieving keys:", error);
    return [];
  }
};

export { storeItem, retrieveItem, deleteItem, getAllKeys };
