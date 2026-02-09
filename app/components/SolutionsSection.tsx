"use client";

import { useState } from "react";
import { solutionsData } from "../data/solutionsData";
import QuoteModal from "./QuoteModal";
import ProductCard from "./ProductCard";
import {motion} from 'framer-motion'

interface SelectedProduct {
  category: string;
  product: string;
  price: number;
}

export default function SolutionsSection() {
  const [selected, setSelected] = useState<SelectedProduct | null>(null);

  return (
    <section className="mx-auto max-w-7xl px-6 py-8">
      <h2 className="text-center text-4xl mb-10">Our Solutions</h2>
      <div className="space-y-16">
        {solutionsData.map((category) => (
          <div key={category.id}>
            {/* Category Header */}
            <h3 className="text-xl font-semibold">
              {category.title}
            </h3>

            <p className="mb-8 max-w-2xl text-gray-600">
              {category.description}
            </p>

            {/* Products */}
            <motion.div initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 1 }} className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
              {category.products.map((product) => (
                <ProductCard
                  key={product.id}
                  name={product.name}
                  description={product.description}
                  price={product.price}
                  icon={product.icon}
                  onSelect={() =>
                    setSelected({
                      category: category.title,
                      product: product.name,
                      price: product.price,
                    })
                  }
                />
              ))}
            </motion.div>
          </div>
        ))}
      </div>

      {/* Quote Modal */}
      {selected && (
        <QuoteModal
          open
          category={selected.category}
          product={selected.product}
          price={selected.price}
          onClose={() => setSelected(null)}
        />
      )}
    </section>
  );
}
