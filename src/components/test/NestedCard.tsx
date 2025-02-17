/* eslint-disable @next/next/no-img-element */
import * as React from "react";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import AspectRatio from "@mui/joy/AspectRatio";
import Table from "@mui/joy/Table";
import Stack from "@mui/joy/Stack";

function createData(
  ga: number,
  goals: number,
  assists: number,
  gp: number,
  min: number,
  id: number,
) {
  return { ga, goals, assists, gp, min, id };
}

const rows = [createData(46, 26, 20, 32, 1425, 93822)];

export default function NestedCard() {
  return (
    <Card sx={{ borderRadius: 0, width: 340, maxWidth: "100%" }}>
      <CardContent>
        <Typography level="title-lg">Europe Top 5 Leagues</Typography>
        <Typography level="body-xs">Highest Goals + Assists</Typography>
      </CardContent>

      <Card
        orientation="horizontal"
        size="sm"
        sx={{ bgcolor: "background.surface", borderRadius: 0, mb: 1 }}
      >
        <CardContent>
          <Stack direction="row" spacing={1}>
            <AspectRatio ratio="1" sx={{ width: 30, height: 30 }}>
              <img
                src="https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/eng.png&scale=crop&cquality=40&location=origin&w=80&h=80"
                loading="lazy"
                alt=""
              />
            </AspectRatio>
            <AspectRatio ratio="1" sx={{ width: 30, height: 30 }}>
              <img
                src="https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/eng.png&scale=crop&cquality=40&location=origin&w=80&h=80"
                loading="lazy"
                alt=""
              />
            </AspectRatio>
          </Stack>
          <Typography level="title-md">Harry Kane</Typography>

          <Typography level="body-sm">Bayern Munich</Typography>
          <Table aria-label="table sizes" size="sm">
            <thead>
              <tr>
                <th style={{ width: "16%" }}>G/A</th>
                <th style={{ width: "16%" }}>G</th>
                <th style={{ width: "16%" }}>A</th>
                <th style={{ width: "16%" }}>GP</th>
                <th>Min</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.id}>
                  <td>{row.ga}</td>
                  <td>{row.goals}</td>
                  <td>{row.assists}</td>
                  <td>{row.gp}</td>
                  <td>{row.min}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </CardContent>
      </Card>

      <Card
        orientation="horizontal"
        size="sm"
        sx={{ bgcolor: "background.surface", borderRadius: 0, mb: 1 }}
      >
        <CardContent>
          <Typography level="title-md">Raphinha</Typography>
          <Typography level="body-sm">Barcelona FC</Typography>
          <AspectRatio ratio="1" sx={{ width: 30, height: 30 }}>
            <img
              src="https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/bra.png&scale=crop&cquality=40&location=origin&w=80&h=80"
              srcSet="https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/bra.png&scale=crop&cquality=40&location=origin&w=80&h=80"
              loading="lazy"
              alt=""
            />
          </AspectRatio>

          <Typography level="body-sm">G/A: 46 (26/20)</Typography>

          <Typography level="body-sm">GP: 34 Min: 1400</Typography>
        </CardContent>
      </Card>

      <Card
        orientation="horizontal"
        size="sm"
        sx={{ bgcolor: "background.surface", borderRadius: 0, mb: 1 }}
      >
        <CardContent>
          <Typography level="title-md">Kylian Mbappe</Typography>
          <Typography level="body-sm">Barcelona FC</Typography>
          <AspectRatio ratio="1" sx={{ width: 30, height: 30 }}>
            <img
              src="https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/fra.png&scale=crop&cquality=40&location=origin&w=80&h=80"
              srcSet="https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/fra.png&scale=crop&cquality=40&location=origin&w=80&h=80"
              loading="lazy"
              alt=""
            />
          </AspectRatio>

          <Typography level="body-sm">G/A: 46 (26/20)</Typography>

          <Typography level="body-sm">GP 32 (1342)</Typography>
        </CardContent>
      </Card>
    </Card>
  );
}
