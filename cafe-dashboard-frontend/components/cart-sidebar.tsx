"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import type { MenuItem } from "@/lib/menu-data"

type CartItem = MenuItem & {
  quantity: number
}

type CartSidebarProps = {
  cartItems: CartItem[]
  onUpdateQuantity: (id: string, quantity: number) => void
  onRemoveItem: (id: string) => void
  onPlaceOrder: (order: { name: string; phone: string; address: string; items: CartItem[]; total: number }) => void
}

export function CartSidebar({ cartItems, onUpdateQuantity, onRemoveItem, onPlaceOrder }: CartSidebarProps) {
  const [isOrderFormOpen, setIsOrderFormOpen] = useState(false)
  const [customerName, setCustomerName] = useState("")
  const [customerPhone, setCustomerPhone] = useState("")
  const [customerAddress, setCustomerAddress] = useState("")

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

  const handlePlaceOrder = () => {
    if (customerName && customerPhone && customerAddress && cartItems.length > 0) {
      onPlaceOrder({
        name: customerName,
        phone: customerPhone,
        address: customerAddress,
        items: cartItems,
        total,
      })
      // Clear cart and form after placing order
      // This will be handled by the parent component
      setCustomerName("")
      setCustomerPhone("")
      setCustomerAddress("")
      setIsOrderFormOpen(false)
    } else {
      alert("Please fill in all customer details and ensure your cart is not empty.")
    }
  }

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="fixed bottom-4 right-4 bg-gold text-espresso hover:bg-gold/90 rounded-full p-4 shadow-lg z-50">
          <ShoppingCartIcon className="h-6 w-6" />
          {cartItems.length > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              {cartItems.reduce((sum, item) => sum + item.quantity, 0)}
            </span>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-md flex flex-col bg-card text-card-foreground">
        <SheetHeader>
          <SheetTitle className="font-serif text-3xl text-balance">{"Your Cart"}</SheetTitle>
        </SheetHeader>
        <ScrollArea className="flex-1 py-4">
          {cartItems.length === 0 ? (
            <p className="text-center text-muted-foreground">{"Your cart is empty."}</p>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center gap-4 border-b pb-4 last:border-b-0">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    width={64}
                    height={64}
                    className="rounded-md object-cover"
                  />
                  <div className="flex-1 grid gap-1">
                    <h4 className="font-semibold text-balance">{item.name}</h4>
                    <p className="text-muted-foreground text-sm">
                      {"₹"}
                      {item.price}
                    </p>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-7 w-7 bg-transparent"
                        onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                        disabled={item.quantity === 1}
                      >
                        <MinusIcon className="h-4 w-4" />
                        <span className="sr-only">{"Decrease quantity"}</span>
                      </Button>
                      <span className="text-sm font-medium">{item.quantity}</span>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-7 w-7 bg-transparent"
                        onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                      >
                        <PlusIcon className="h-4 w-4" />
                        <span className="sr-only">{"Increase quantity"}</span>
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="ml-auto text-destructive hover:bg-destructive/10"
                        onClick={() => onRemoveItem(item.id)}
                      >
                        <TrashIcon className="h-4 w-4" />
                        <span className="sr-only">{"Remove item"}</span>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </ScrollArea>
        <div className="border-t pt-4 space-y-4">
          <div className="flex justify-between items-center font-semibold text-lg">
            <span>{"Total:"}</span>
            <span>
              {"₹"}
              {total}
            </span>
          </div>
          {!isOrderFormOpen && (
            <Button
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-300"
              onClick={() => setIsOrderFormOpen(true)}
              disabled={cartItems.length === 0}
            >
              {"Place Order"}
            </Button>
          )}

          {isOrderFormOpen && (
            <div className="space-y-4">
              <h3 className="font-serif text-2xl text-balance">{"Customer Details"}</h3>
              <div className="grid gap-2">
                <Label htmlFor="name">{"Name"}</Label>
                <Input
                  id="name"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  placeholder="Your Name"
                  className="bg-input text-foreground"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="phone">{"Phone"}</Label>
                <Input
                  id="phone"
                  value={customerPhone}
                  onChange={(e) => setCustomerPhone(e.target.value)}
                  placeholder="Your Phone Number"
                  className="bg-input text-foreground"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="address">{"Address"}</Label>
                <Input
                  id="address"
                  value={customerAddress}
                  onChange={(e) => setCustomerAddress(e.target.value)}
                  placeholder="Your Delivery Address"
                  className="bg-input text-foreground"
                />
              </div>
              <Button
                className="w-full bg-gold text-espresso hover:bg-gold/90 transition-colors duration-300"
                onClick={handlePlaceOrder}
              >
                {"Confirm Order"}
              </Button>
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  )
}

function ShoppingCartIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </svg>
  )
}

function MinusIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
    </svg>
  )
}

function PlusIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 5v14" />
      <path d="M5 12h14" />
    </svg>
  )
}

function TrashIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 6h18" />
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
    </svg>
  )
}
