import { Box, Toolbar } from "@mui/material";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import {
  Navbar,
  Feed,
  VideoDetail,
  ChannelDetail,
  SearchFeed,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor: "#000" }}>
        <Navbar />
        <Toolbar sx={{ mt: "1.5%" }} />

        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/video:id" element={<VideoDetail />} />
          <Route path="/channel:id" element={<ChannelDetail />} />
          <Route path="/search:searchTerm" element={<SearchFeed />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
};

export default App;
