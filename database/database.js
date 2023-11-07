import * as React from "react";
import * as SQLite from "expo-sqlite";
import { Storage } from "expo-storage";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Function to store data
const storeData = async (key, data) => {
  try {
    const dataString = JSON.stringify(data);
    await AsyncStorage.setItem(key, dataString);
    console.log("Data stored successfully (AsyncStorage)");
  } catch (error) {
    console.error("Error storing data (AsyncStorage) :", error);
  }
};

// Function to retrieve data
const retrieveData = async (key) => {
  try {
    const dataString = await AsyncStorage.getItem(key);
    if (dataString) {
      const data = JSON.parse(dataString);
      console.log("Retrieved data (AsyncStorage) :", data);
      return data;
    } else {
      console.log("Data not found (AsyncStorage)");
      return null;
    }
  } catch (error) {
    console.error("Error retrieving data (AsyncStorage):", error);
    return null;
  }
};

export { storeData, retrieveData };
