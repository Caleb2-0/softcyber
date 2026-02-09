"use client";

import { useState } from "react";

interface Props {
  open: boolean;
  onClose: () => void;
  category: string;
  product: string;
  price: number;
}

export default function QuoteModal({
  open,
  onClose,
  category,
  product,
  price,
}: Props) {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);

  if (!open) return null;

  const submitQuote = async () => {
    setLoading(true);

    await fetch("/api/send-quote", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        category,
        product,
        price,
        email,
        phone,
      }),
    });

    setLoading(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-2xl">
        <h3 className="text-lg font-semibold mb-4">Request a Quote</h3>

        <div className="space-y-2 text-sm">
          <p><strong>Category:</strong> {category}</p>
          <p><strong>Product:</strong> {product}</p>
          <p><strong>Cost:</strong> ${price}</p>
        </div>

        <input
          className="mt-4 w-full rounded border p-2"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          className="mt-2 w-full rounded border p-2"
          placeholder="Phone number (optional)"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <div className="mt-4 flex gap-3">
          <button
            onClick={onClose}
            className="w-full rounded border py-2"
          >
            Cancel
          </button>
          <button
            onClick={submitQuote}
            disabled={loading}
            className="w-full rounded bg-black py-2 text-white"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </div>
      </div>
    </div>
  );
}
