"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import useCartStore from "@/store/cart";
import useEventStore from "@/store/events";
import { Trash } from "lucide-react";
import { useSession, signIn } from "next-auth/react";
import { useToast } from "@/components/ui/use-toast";

// main component
const MainCart = () => {
  // cart and bookmarked events state
  const cart = useCartStore((state) => state.cart);
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // events state
  const bookmarkedEvents = useEventStore((state) => state.events);
  const handleRemoveFromBookmarks = useEventStore((state) => state.removeEvent);
  const clearCart = useCartStore((state) => state.clearCart);

  // session
  const { status } = useSession();

  // get toast
  const { toast } = useToast();

  // handle google sign in
  const handleGoogleSignIn = async () => {
    const response = await signIn("google", { callbackUrl: "/cart" });

    if (response?.error) {
      toast({
        variant: "destructive",
        description: "An error occurred while signing in",
        title: "Google Sign In",
      });
    }

    if (response?.ok) {
      toast({
        variant: "default",
        className: "bg-green-500 text-white",
        description: "You have successfully signed in with Google",
        title: "Google Sign In",
      });
    }
  };

  // handle checkout
  const handleCheckout = () => {
    clearCart();
    toast({
      variant: "default",
      className: "bg-green-500 text-white",
      description: `You have successfully placed an order for $${totalPrice}`,
      title: "Checkout",
    });
  };

  if (status === "unauthenticated") {
    return (
      <div className="container mx-auto py-12 px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4">
          <h2 className="text-2xl font-bold">Shopping Cart</h2>
          <p className="text-muted-foreground">
            You need to sign in to view your cart and events
          </p>
          <Button
            variant="outline"
            className="hover:bg-primary hover:text-white"
            onClick={handleGoogleSignIn}
          >
            Continue with Google
          </Button>
        </div>
      </div>
    );
  }

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
                <div
                  key={item.id}
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center gap-4">
                    <Image
                      src={item.img}
                      alt="Cart Item"
                      width={50}
                      height={50}
                      className="rounded-md"
                    />
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
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      disabled={item.quantity === 1}
                    >
                      -
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      +
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => removeFromCart(item.id)}
                    >
                      <Trash className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
              <Separator />
              <div className="flex items-center justify-between">
                <h3 className="font-semibold">Total</h3>
                <p className="text-2xl font-bold">${totalPrice}</p>
              </div>
              <Button
                size="lg"
                className="w-full"
                onClick={() => handleCheckout()}
              >
                Proceed to Checkout
              </Button>
            </div>
          )}
        </div>
        <div className="bg-background rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Bookmarked Events</h2>
          {bookmarkedEvents.length === 0 ? (
            <p className="text-muted-foreground">
              You haven&apos;t bookmarked any events yet.
            </p>
          ) : (
            <div className="space-y-4">
              {bookmarkedEvents.map((event) => (
                <div
                  key={event.id}
                  className="flex items-center justify-between"
                >
                  <div>
                    <h3 className="font-semibold">{event.title}</h3>
                    <p className="text-muted-foreground">
                      {event.date} - {event.location}
                    </p>
                  </div>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => handleRemoveFromBookmarks(event.id)}
                  >
                    <Trash className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MainCart;
