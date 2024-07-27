/**
 * v0 by Vercel.
 * @see https://v0.dev/t/OIYdR7D4aSE
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export default function Component() {
  const [cart, setCart] = useState([
    {
      id: 1,
      name: "Cozy Blanket",
      price: 29.99,
      quantity: 2,
    },
    {
      id: 2,
      name: "Autumn Mug",
      price: 12.99,
      quantity: 1,
    },
    {
      id: 3,
      name: "Fall Fragrance Candle",
      price: 16.99,
      quantity: 1,
    },
  ])
  const [bookmarkedEvents, setBookmarkedEvents] = useState([
    {
      id: 1,
      name: "Harvest Festival",
      date: "October 15, 2023",
      location: "Downtown Park",
    },
    {
      id: 2,
      name: "Pumpkin Carving Contest",
      date: "October 31, 2023",
      location: "Community Center",
    },
    {
      id: 3,
      name: "Thanksgiving Potluck",
      date: "November 23, 2023",
      location: "Town Hall",
    },
  ])
  const handleRemoveFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id))
  }
  const handleUpdateQuantity = (id, quantity) => {
    setCart(cart.map((item) => (item.id === id ? { ...item, quantity } : item)))
  }
  const handleRemoveFromBookmarks = (id) => {
    setBookmarkedEvents(bookmarkedEvents.filter((event) => event.id !== id))
  }
  const cartTotal = cart.reduce((total, item) => total + item.price * item.quantity, 0)
  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-background rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
          {cart.length === 0 ? (
            <p className="text-muted-foreground">Your cart is empty.</p>
          ) : (
            <div className="space-y-4">
              {cart.map((item) => (
                <div key={item.id} className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <img src="/placeholder.svg" alt={item.name} width={64} height={64} className="rounded-md" />
                    <div>
                      <h3 className="font-semibold">{item.name}</h3>
                      <p className="text-muted-foreground">
                        ${item.price.toFixed(2)} x {item.quantity}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
                      disabled={item.quantity === 1}
                    >
                      -
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
                    >
                      +
                    </Button>
                    <Button size="sm" variant="ghost" onClick={() => handleRemoveFromCart(item.id)}>
                      <TrashIcon className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
              <Separator />
              <div className="flex items-center justify-between">
                <h3 className="font-semibold">Total</h3>
                <p className="text-2xl font-bold">${cartTotal.toFixed(2)}</p>
              </div>
              <Button size="lg" className="w-full">
                Proceed to Checkout
              </Button>
            </div>
          )}
        </div>
        <div className="bg-background rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Bookmarked Events</h2>
          {bookmarkedEvents.length === 0 ? (
            <p className="text-muted-foreground">You haven't bookmarked any events yet.</p>
          ) : (
            <div className="space-y-4">
              {bookmarkedEvents.map((event) => (
                <div key={event.id} className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold">{event.name}</h3>
                    <p className="text-muted-foreground">
                      {event.date} - {event.location}
                    </p>
                  </div>
                  <Button size="sm" variant="ghost" onClick={() => handleRemoveFromBookmarks(event.id)}>
                    <TrashIcon className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

function TrashIcon(props) {
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


function XIcon(props) {
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
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}