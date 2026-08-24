import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RJTech | Richard Jiménez — Developer Portfolio",
  description: "Crafting exceptional digital experiences with cutting-edge technology. Specialized in building scalable web applications that impress and perform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[var(--accent)] focus:text-white focus:rounded-lg"
        >
          Skip to main content
        </a>
        <main id="main-content">
          {children}
        </main>

        <script
          dangerouslySetInnerHTML={{
            __html: `
              console.log(
                '%c RJTech %c Built with Next.js, React, and TypeScript ',
                'background:#2563eb;color:#fff;padding:4px 8px;border-radius:4px 0 0 4px;font-weight:bold',
                'background:#1a1a2e;color:#e8eaed;padding:4px 8px;border-radius:0 4px 4px 0'
              );
              console.log('%c\u{1F44B} Like what you see? Reach out at rjtech@disroot.org', 'color:#60a5fa');
            `,
          }}
        />
      </body>
    </html>
  );
}
