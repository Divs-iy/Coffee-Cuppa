import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { OrderProvider } from "@/context/order-context" // Import OrderProvider
import "./globals.css"

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Crushed by Beans - Coffee Shop",
  description: "Premium coffee and snacks delivered to your doorstep",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${playfairDisplay.variable} ${inter.variable}`}>
        <Suspense fallback={<div>Loading...</div>}>
          <OrderProvider>
            {" "}
            {/* Wrap children with OrderProvider */}
            {children}
          </OrderProvider>
        </Suspense>
        <Analytics />
      </body>
    </html>
  )
}
