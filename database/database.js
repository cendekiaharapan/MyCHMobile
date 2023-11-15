import { Storage } from "expo-storage";
import * as SecureStore from "expo-secure-store";

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

const saveTokenToSecureStore = async (token) => {
  try {
    await SecureStore.setItemAsync("api_token", token);
    console.log("api_token Saved!");
  } catch (error) {
    console.error("Error saving token:", error);
  }
};

const getTokenFromSecureStore = async () => {
  try {
    return await SecureStore.getItemAsync("api_token");
  } catch (error) {
    console.error("Error retrieving token:", error);
    return null;
  }
};

const saveRespDataSecureStore = async (responseData) => {
  try {
    const responseDataString = JSON.stringify(responseData);
    await SecureStore.setItemAsync("resp_data", responseDataString);
    console.log("Response data saved!");
  } catch (error) {
    console.error("Error saving response data:", error);
  }
};

const clearResponseDataFromSecureStore = async () => {
  try {
    await SecureStore.deleteItemAsync("resp_data");
    console.log("Response data cleared from SecureStore.");
  } catch (error) {
    console.error("Error clearing response data:", error);
  }
};

const clearTokenFromSecureStore = async () => {
  try {
    await SecureStore.deleteItemAsync("api_token");
    console.log("Token cleared from SecureStore.");
  } catch (error) {
    console.error("Error clearing token:", error);
  }
};

const getRespDataFromSecureStore = async () => {
  try {
    const responseDataString = await SecureStore.getItemAsync("resp_data");
    if (responseDataString) {
      const responseData = JSON.parse(responseDataString);
      return responseData;
    } else {
      console.log("No response data found in SecureStore.");
      return null;
    }
  } catch (error) {
    console.error("Error retrieving response data:", error);
    return null;
  }
};

export {
  storeItem,
  retrieveItem,
  deleteItem,
  getAllKeys,
  saveTokenToSecureStore,
  getTokenFromSecureStore,
  saveRespDataSecureStore,
  getRespDataFromSecureStore,
  clearTokenFromSecureStore,
  clearResponseDataFromSecureStore,
};