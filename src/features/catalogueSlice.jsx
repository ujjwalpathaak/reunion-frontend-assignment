import { createSlice } from "@reduxjs/toolkit";
import { data } from "../Data";
export const catalogueSlice = createSlice({
  name: "catalogue",
  initialState: {
    items: data,
    result: data,
  },
  reducers: {
    applyFilter: (state, action) => {
      const item = action.payload;
      state.result = state.items;
      if (item.date !== null) {
        let date = item.date.split("T");
        date = JSON.stringify(date[0]);
        date = date.slice(3, date.length - 1);
        let dateYear = date.slice(0, 4);
        let dateMonth = date.slice(5, 7);
        let dateDay = date.slice(8, 10);
        console.log(dateYear);
        state.result = state.result.filter((curr) => {
          return (
            curr.year >= dateYear &&
            curr.month >= dateMonth &&
            curr.day >= dateDay
          );
        });
      }
      if (item.location.length > 0) {
        state.result = state.result.filter((curr) => {
          return curr.location === item.location;
        });
      }
      if (item.location.length > 0) {
        state.result = state.result.filter((curr) => {
          return curr.location === item.location;
        });
      }
      if (item.type.length > 0) {
        state.result = state.result.filter((curr) => {
          return curr.type === item.type;
        });
      }
      state.result = state.result.filter((curr) => {
        return curr.price <= item.price[1] && curr.price >= item.price[0];
      });
      console.log(JSON.stringify(state.result, undefined, 2));
    },
  },
});

export const { applyFilter } = catalogueSlice.actions;

export const getCatalogueItems = (state) => state.catalogue.result;

export default catalogueSlice.reducer;
