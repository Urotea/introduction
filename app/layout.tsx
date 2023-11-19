import { Viewport } from "next";
import ThemeRegistry from "./ThemeRegistry";

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
    <html lang="jp">
      <ThemeRegistry options={{ key: "mui" }}>
        <body>
          <main>{children}</main>
        </body>
      </ThemeRegistry>
    </html>
  );
}
