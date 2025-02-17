import * as React from "react";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import GACard from "./GACard";

export default function TopStatsCard() {
  return (
    <Card sx={{ borderRadius: 0, width: 340, maxWidth: "100%" }}>
      <CardContent>
        <Typography level="title-lg">Europe Top 5 Leagues</Typography>
        <Typography level="body-xs">Highest Goals + Assists</Typography>
      </CardContent>

      <GACard />

      <GACard />
    </Card>
  );
}
