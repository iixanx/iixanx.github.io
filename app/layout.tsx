export const metadata = {
  title: 'iixanx',
  description: 'Author is @iixanx',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
