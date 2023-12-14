import { Grid, Typography } from "@mui/material";
import React from "react";

export const AuthLayout = ({ children, title }) => {
  return (
    <Grid
      container
      spacing={0}
      direction={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      sx={{
        minHeight: "100vh",
        width: "100vw",
        backgroundColor: "primary.main",
        padding: 4,
        pt: 10,
      }}
    >
      <Grid
        item
        className="box-shadow"
        xs={3}
        sx={{ backgroundColor: "white", padding: 3, borderRadius: 3 }}
      >
        <Typography
          variant="h5"
          alignItems={"center"}
          sx={{ mb: 1, color: "GrayText" }}
        >
          {title}
        </Typography>

        {children}
      </Grid>
    </Grid>
  );
};
