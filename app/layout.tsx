import { Viewport } from "next";
import ThemeRegistry from "./_theme/ThemeRegistry";
import { AppBar } from "./_appbar";
import { Roboto } from "next/font/google";
import { Box, Card } from "@mui/material";
import { colors } from "./_theme";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const viewPort: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  colorScheme: "normal",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="jp" className={roboto.className}>
      <ThemeRegistry options={{ key: "mui" }}>
        <body>
          <AppBar />
          <main>
            <Box
              sx={{
                my: 6,
                mx: 8,
              }}
            >
              <Card
                sx={{
                  backgroundColor: colors.gray,
                }}
              >
                {children}
              </Card>
            </Box>
          </main>
        </body>
      </ThemeRegistry>
    </html>
  );
}
