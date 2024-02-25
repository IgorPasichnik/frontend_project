import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchWeathers = createAsyncThunk(
  "weather/fetchWeather",
  async (location) => {
    const keyWeather = "f47c862718da4050aaf70403232812";
    const response = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=${keyWeather}&q=${location}`
    );
    const weathers = await response.json();
    console.log(weathers);

    await fetch("http://localhost:5000/api/weather", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: location,
        temp_c: weathers.current.temp_c,
        feelslike_c: weathers.current.feelslike_c,
        wind_kph: weathers.current.wind_kph,
        precip_mm: weathers.current.precip_mm,
        humidity: weathers.current.humidity,
        pressure_mb: weathers.current.pressure_mb,
      }),
    });

    return weathers;
  }
);

const initialState = {
  list: [],
};

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    addWeathers: (state, action) => {
      const { weather } = action.payload;
      state.list = weather;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchWeathers.pending, (state, action) => {});
    builder.addCase(fetchWeathers.fulfilled, (state, action) => {
      state.list = action.payload;
    });
    builder.addCase(fetchWeathers.rejected, (state, action) => {});
  },
});

export const { addWeathers } = weatherSlice.actions;
export default weatherSlice.reducer;
