"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import type { MenuItem } from "@/lib/menu-data"

type CartItem = MenuItem & {
  quantity: number
}

type Order = {
  id: string
  name: string
  phone: string
  address: string
  items: CartItem[]
  total: number
  status: "Pending" | "Completed"
}

type OrderCardProps = {
  order: Order
  onMarkAsCompleted: (id: string) => void
}

export function OrderCard({ order, onMarkAsCompleted }: OrderCardProps) {
  return (
    <Card className="bg-card text-card-foreground shadow-md rounded-lg">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="font-serif text-2xl font-bold text-balance">
          {"Order #"}
          {order.id.substring(0, 8)}
        </CardTitle>
        <div
          className={`px-3 py-1 rounded-full text-sm font-medium ${
            order.status === "Completed"
              ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
              : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
          }`}
        >
          {order.status}
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h4 className="font-semibold text-lg mb-2">{"Customer Details"}</h4>
          <p>
            {"Name: "}
            {order.name}
          </p>
          <p>
            {"Phone: "}
            {order.phone}
          </p>
          <p>
            {"Address: "}
            {order.address}
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-lg mb-2">{"Ordered Items"}</h4>
          <ul className="list-disc pl-5 space-y-1">
            {order.items.map((item) => (
              <li key={item.id}>
                {item.name} {"("}
                {item.quantity}x{")"} - {"₹"}
                {item.price * item.quantity}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex justify-between items-center font-bold text-xl border-t pt-4">
          <span>{"Total:"}</span>
          <span>
            {"₹"}
            {order.total}
          </span>
        </div>
        {order.status === "Pending" && (
          <Button
            className="w-full bg-gold text-espresso hover:bg-gold/90 transition-colors duration-300"
            onClick={() => onMarkAsCompleted(order.id)}
          >
            {"Mark as Completed"}
          </Button>
        )}
      </CardContent>
    </Card>
  )
}
