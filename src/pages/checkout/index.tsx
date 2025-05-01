import { loadStripe } from "@stripe/stripe-js";
import { useState } from "react";

const stripePromise = loadStripe("");

interface CheckoutFormProps {
    product: string;
    price: number;
}

const CheckoutForm: React.FC<CheckoutFormProps> = ({ product, price }) => {
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    const handleCheckout = async () => {
        setLoading(true);

        const stripe = await stripePromise;

        const res = await fetch("https://api.stripe.com/v1/checkout/sessions", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                Authorization: `Bearer `,
            },
            body: new URLSearchParams({
                success_url: `${window.location.origin}/success`,
                cancel_url: `${window.location.origin}/cancel`,
                payment_method_types: "card",
                line_items: JSON.stringify([
                    {
                        price_data: {
                            currency: "nzd",
                            product_data: { name: product },
                            unit_amount: price,
                        },
                        quantity: 1,
                    },
                ]),
                mode: "payment",
            }).toString(),
        });

        const session = await res.json();

        if (session.error) {
            setMessage(session.error.message);
            setLoading(false);
            return;
        }

        stripe?.redirectToCheckout({ sessionId: session.id });
    };

    return (
        <div className="max-w-md mx-auto p-4">
            <h2 className="text-xl font-bold mb-4">Payment</h2>
            <button
                onClick={handleCheckout}
                className="bg-[#F9EAD7] text-[#F25826] px-4 py-2 rounded w-full font-bold"
                disabled={loading}
            >
                {loading ? "Redirecting..." : `Buy ${price} NZD`}
            </button>
            {message && <p className="mt-2 text-red-500">{message}</p>}
        </div>
    );
};

export default CheckoutForm;