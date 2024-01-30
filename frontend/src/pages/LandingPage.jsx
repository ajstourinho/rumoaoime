import React from "react";
import { Grid, Typography, Button, Box } from "@mui/material";

import vectorBanner from "../assets/images/banner/vector-banner.png";
import logo from "../assets/images/logo/logo.png";
import LogInButton from "../components/LogInButton/LogInButton";

function LandingPage() {
  return (
    <Grid container spacing={2}>
      {/* Text and Logo */}
      <Grid
        item
        xs={12}
        md={6}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "calc(100vh - 168px)",
          padding: "5%",  
        }}
      >
        <Box
          component="img"
          src={logo}
          alt="Logo"
          style={{ height: "80px", marginRight: 4, marginBottom: 50 }}
        />

        <Typography
          variant="h2"
          gutterBottom
          style={{ color: "#555", fontStyle: "italic" }}
        >
          Tudo para <u>você</u>
          <br />
          passar no <b>IME</b>
        </Typography>
        <Typography variant="h5" style={{ color: "#777", textAlign: "center"}}>
          Provas anteriores, simulados, correções automáticas e muito
          mais.
        </Typography>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 40,
          }}
        >
          <LogInButton />

          <Typography variant="body2" style={{ color: "#999", marginLeft: 22 }}>
            Entre para acompanhar
            <br />
            o seu progresso.
          </Typography>
        </div>
      </Grid>

      {/* Image */}
      <Grid
        item
        xs={12}
        md={6}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          component="img"
          src={vectorBanner}
          alt="Banner"
          sx={{ width: "100%", maxWidth: 600 }}
        />
      </Grid>
    </Grid>
  );
}

export default LandingPage;
