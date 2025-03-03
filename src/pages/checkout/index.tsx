import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useState } from "react";

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [product, setProduct] = useState("Premium Subscription");
    const [price, setPrice] = useState(25); // цена в USD
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

        // Отправляем платеж на сервер
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
        <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 shadow-lg rounded-lg">
            <h2 className="text-xl font-bold mb-4">Оплата товара</h2>

            <input
                type="text"
                className="border p-2 w-full mb-2"
                placeholder="Ваше имя"
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
                className="bg-blue-500 text-white px-4 py-2 rounded w-full"
                disabled={!stripe || loading}
            >
                {loading ? "Обрабатываем..." : `Оплатить $${price}`}
            </button>

            {message && <p className="mt-2 text-red-500">{message}</p>}
        </form>
    );
};

export default CheckoutForm;
