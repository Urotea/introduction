import { Card, Typography } from "@mui/material";
import { colors } from "./_theme";

export default function Page() {
  return (
    <Card
      component="div"
      sx={{
        m: 6,
        py: 6,
        display: "flex",
        justifyContent: "center",
        backgroundColor: colors.gray,
      }}
    >
      <Typography variant="h3">Hello, world!</Typography>
    </Card>
  );
}
