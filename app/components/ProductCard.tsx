"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import montion from 'framer-motion'

interface ProductCardProps {
  name: string;
  description: string;
  price: number;
  icon: IconDefinition;
  onSelect: () => void;
}

export default function ProductCard({
  name,
  description,
  price,
  icon,
  onSelect,
}: ProductCardProps) {
  return (
    <div className="group rounded-lg border border-gray-200 bg-white p-6 transition  hover:shadow-lg">
      {/* Icon */}
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-black/5 group-hover:bg-black transition">
        <FontAwesomeIcon
          icon={icon}
          className="text-xl text-black group-hover:text-white transition"
        />
      </div>

      {/* Title */}
      <h4 className="text-lg font-semibold text-gray-900">
        {name}
      </h4>

      {/* Description */}
      <p className="mt-2 text-sm text-gray-600">
        {description}
      </p>

      {/* Price */}
      <p className="mt-4 text-xl font-bold text-gray-900">
        MWK {price}
      </p>

      {/* CTA */}
      <button
        onClick={onSelect}
        className="cursor-pointer mt-6 w-full rounded-lg bg-black py-2.5 text-sm font-medium text-white transition hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
      >
        Get Quote
      </button>
    </div>
  );
}
