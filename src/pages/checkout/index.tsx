import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useState } from "react";

interface CheckoutFormProps {
    product: string;
    price: number;
}

const CheckoutForm: React.FC<CheckoutFormProps> = ({ product, price }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!stripe || !elements) return;

        setLoading(true);
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement)!,
            billing_details: { name, email },
        });

        if (error) {
            setMessage(error.message || "Ошибка при создании платежа");
            setLoading(false);
            return;
        }

        const res = await fetch("http://localhost:3001/checkout", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                name,
                product,
                price,
                email,
                token: paymentMethod.id,
            }),
        });

        const data = await res.json();
        setLoading(false);
        setMessage(data.message);
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4">
            <h2 className="text-xl font-bold mb-4">Payment</h2>

            <input
                type="text"
                className="border p-2 w-full mb-2"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />

            <input
                type="email"
                className="border p-2 w-full mb-2"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />

            <CardElement className="border p-2 w-full mb-4" />

            <button
                type="submit"
                className="bg-[#F9EAD7] text-[#F25826] px-4 py-2 rounded w-full font-bold"
                disabled={!stripe || loading}
            >
                {loading ? "Processing..." : `Buy ${price} NZD`}
            </button>

            {message && <p className="mt-2 text-red-500">{message}</p>}
        </form>
    );
};

export default CheckoutForm;