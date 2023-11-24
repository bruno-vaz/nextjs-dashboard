import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import StyledComponentsRegistry from '@/app/lib/registry';
import ThemeLayout from '@/app/theme-layout';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <StyledComponentsRegistry>
          <ThemeLayout>
            {children}
          </ThemeLayout>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
