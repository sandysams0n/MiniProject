import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

/**
 * @param {array<object>} value - stores college objects fetched from API
 * @param {array<object>} wishlist - stores items added to wishlist
 */
const initialCollegeState = {
  value: [],
  wishlist: [],
};

/**
 * Asynchronous function to fetch items from the API
 */
export const fetchColleges = createAsyncThunk("Fetch Colleges", async () => {
  const response = await axios.get(
    `http://universities.hipolabs.com/search?country=India`
  );
  return response.data;
});

/**
 * collegeSlice is a slice of redux state that allows the user to add or remove items
 * from the wishlist
 */
export const collegeSlice = createSlice({
  name: "college",
  initialState: initialCollegeState,
  reducers: {
    /**
     * Action checks if item already exists in the wishlist, and adds item to wishlist
     * if item is not found
     */
    addToWishlist: (state, action) => {
      const item = action.payload;
      const itemInWishlist = state.wishlist.find(
        (college) => college.name === item.name
      );
      if (itemInWishlist) {
        return;
      } else {
        state.wishlist.push({ ...action.payload });
      }
    },
    /**
     *  Action removes item from wishlist
     */
    removeFromWishlist: (state, action) => {
      const removeItem = state.wishlist.filter(
        (item) => item.name !== action.payload
      );
      state.wishlist = removeItem;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchColleges.fulfilled, (state, action) => {
      state.value = action.payload;
    });
  },
});

export const { addToWishlist, removeFromWishlist } = collegeSlice.actions;

export default collegeSlice.reducer;
