import { Box, Card, Typography } from "@mui/material";
import { colors } from "./_theme";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <Box
        sx={{
          pt: 6,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Typography variant="h3">Hello, world!</Typography>
      </Box>
      <Link href="/pay">pay</Link>
    </>
  );
}
