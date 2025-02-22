import { useState } from "react";
import { motion } from "framer-motion";

const categories = ["카테고리1", "카테고리2", "카테고리3"];

export default function CategoryTabs({ activeCategory, setActiveCategory }) {
  return (
    <div className="overflow-hidden relative">
      <motion.div
        className="flex space-x-4 p-3 bg-gray-200"
        drag="x"
        dragConstraints={{ left: -200, right: 0 }}
      >
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => setActiveCategory(index)}
            className={`px-4 py-2 rounded-full ${
              activeCategory === index
                ? "bg-pink-500 text-white"
                : "bg-white text-gray-700"
            }`}
          >
            {category}
          </button>
        ))}
      </motion.div>
    </div>
  );
}
