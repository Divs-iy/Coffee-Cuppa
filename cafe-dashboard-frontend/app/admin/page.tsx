"use client"

import { useOrders } from "@/context/order-context"
import { OrderCard } from "@/components/order-card"

export default function AdminPage() {
  const { orders, markOrderAsCompleted } = useOrders()

  return (
    <div className="min-h-screen bg-background text-foreground p-8">
      <h1 className="font-serif text-5xl font-bold text-center mb-12 text-balance">{"Admin Dashboard"}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {orders.length === 0 ? (
          <p className="col-span-full text-center text-muted-foreground text-lg">{"No orders placed yet."}</p>
        ) : (
          orders.map((order) => <OrderCard key={order.id} order={order} onMarkAsCompleted={markOrderAsCompleted} />)
        )}
      </div>
    </div>
  )
}
