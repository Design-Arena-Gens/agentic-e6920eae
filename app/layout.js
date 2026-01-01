export const metadata = {
  title: 'Tehniyat Usman - Content Generator',
  description: 'Professional content generator for WordPress & Graphic Design services',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
        {children}
      </body>
    </html>
  )
}
