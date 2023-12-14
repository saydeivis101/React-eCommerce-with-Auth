import React from "react";
import { AuthLayout } from "../components/layouts/authlayout/AuthLayout";
import { Link as RouterLink } from "react-router-dom";
import { Grid, Link, TextField, Typography } from "@mui/material";
import { Button } from "react-bootstrap";
import { Google } from "@mui/icons-material";
import { Navigate } from "react-router-dom";

export const RegisterPage = () => {
  return (
    <AuthLayout title={"Sign In"}>
      <form action="">
        <Grid container direction="column">
          <Grid item xs={12} md={6} sx={{ mt: 2 }}>
            <TextField
              label="Email"
              type="email"
              placeholder="correo@gmail.com"
              autoFocus={true}
            />
          </Grid>

          <Grid item xs={12} md={6} sx={{ mt: 2 }}>
            <TextField
              label="Password"
              type="password"
              placeholder="juanperez123**//"
            />
          </Grid>

          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12}>
              <Button sx={{ mt: 2 }} variant="container" fullWidth>
                Login
              </Button>
            </Grid>

            <Grid item xs={12}>
              <Button sx={{ mt: 2 }} variant="contained" fullWidth>
                <Google />
                <Typography variant="p" sx={{ ml: 0.3 }}>
                  Google
                </Typography>
              </Button>
            </Grid>
          </Grid>

          <Grid container direction={"row"} justifyContent={"end"}>
            <Link component={RouterLink} color="#00000" to="/auth/register">
              Create An Account
            </Link>
          </Grid>

          <Button>
            <Link
              component={RouterLink}
              color="#00000"
              onClick={<Navigate to={-1} />}
            >
              Go Back
            </Link>
          </Button>
        </Grid>
      </form>
    </AuthLayout>
  );
};
