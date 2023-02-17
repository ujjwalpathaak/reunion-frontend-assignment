import React from "react";
import { useDispatch } from "react-redux";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { applyFilter } from "../features/catalogueSlice";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [location, setLocation] = React.useState("");
  const [type, setType] = React.useState("");
  const [price, setPrice] = React.useState([1000000, 10000000]);
  const [date, setDate] = React.useState(new Date());
  const handleChangeLocation = (event) => {
    setLocation(event.target.value);
  };
  const handleChangeType = (event) => {
    setType(event.target.value);
  };
  const handleChangePrice = (event) => {
    setPrice(event.target.value);
  };
  const handleChangeDate = (newValue) => {
    setDate(newValue);
  };

  const handleSearch = () => {
    console.log(date);
    let date2 = JSON.stringify(date);
    console.log(date2);
    dispatch(applyFilter({ date: date2, location, type, price }));
  };

  return (
    <div className="w-[70vw] mb-6 bg-slate-100 h-[10vh] flex justify-center items-center rounded-lg">
      <div className="w-[23%] min-w-56 flex justify-center items-center">
        {/* 1 */}
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
          <InputLabel id="demo-select-small">Location</InputLabel>
          <Select
            labelId="demo-select-small"
            id="demo-select-small"
            value={location}
            label="Location"
            onChange={handleChangeLocation}
            className="w-56"
          >
            <MenuItem value={"None"}>
              <em>None</em>
            </MenuItem>
            <MenuItem value={"Spain"}>Spain</MenuItem>
            <MenuItem value={"France"}>France</MenuItem>
            <MenuItem value={"Germany"}>Germany</MenuItem>
          </Select>
        </FormControl>
      </div>
      {/* 2 */}
      <div className="w-[23%] flex justify-center items-center p-4">
        <Box sx={{ width: 200 }}>
          <Slider
            value={price}
            min={1000000}
            step={1000000}
            max={10000000}
            onChange={handleChangePrice}
            valueLabelDisplay="auto"
          />
        </Box>
      </div>
      {/* 3 */}
      <div className="w-[23%] min-w-56 flex justify-center items-center p-4">
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
          <InputLabel id="demo-select-small">Type</InputLabel>
          <Select
            labelId="demo-select-small"
            id="demo-select-small"
            value={type}
            label="Type"
            onChange={handleChangeType}
            className="w-56"
          >
            <MenuItem value={0}>
              <em>None</em>
            </MenuItem>
            <MenuItem value={"Single Family"}>Single Family</MenuItem>
            <MenuItem value={"Condo"}>Condo</MenuItem>
            <MenuItem value={"Townhouse"}>Townhouse</MenuItem>
          </Select>
        </FormControl>
      </div>
      {/* 4 */}
      <div className="w-[23%] flex justify-center items-center p-4">
        <DatePicker selected={date} onChange={handleChangeDate} className="w-full h-[2.4375em] rounded-md border-2 border-black" />
      </div>
      {/* 5 */}
      <div className="w-[8%] flex justify-center items-center">
        <button
          className="transition bg-slate-200 hover:bg-slate-300 p-3 rounded-full"
          onClick={handleSearch}
        >
          <SearchOutlinedIcon />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;