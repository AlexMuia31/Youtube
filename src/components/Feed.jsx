import { Box, Stack, Typography } from "@mui/material";
import React from "react";

const Feed = () => {
  return (
    <Stack sx={{ flexDirection: { xs: "column", md: "row" } }}>
      <Box
        sx={{
          height: { xs: "auto", md: "90vh" },
          borderRight: "1px solid #3d3d3d",
          px: { xs: 0, md: 2 },
        }}
      >
        <Typography
          className="copyright"
          variant="body2"
          sx={{ mt: 1.5, color: "#fff" }}
        >
          Copyright 2022 AlexMuia
        </Typography>
        sidebar
      </Box>
    </Stack>
  );
};

export default Feed;
