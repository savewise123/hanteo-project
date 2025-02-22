"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function ContentList({ activeCategory }) {
  const [items, setItems] = useState(
    Array.from({ length: 30 }, (_, i) => ({
      id: i + 1,
      name: `아이템 ${i + 1}`,
      image: `/items/item${i + 1}.png`,
    }))
  );

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight - 60
      ) {
        setItems((prev) => [
          ...prev,
          ...Array.from({ length: 5 }, (_, i) => ({
            id: prev.length + i + 1,
            name: `새로운 아이템 ${prev.length + i + 1}`,
            image: `/items/item${prev.length + i + 1}.png`,
          })),
        ]);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="p-3 bg-gray-100">
      <h3 className="text-sm font-bold">
        카테고리 {activeCategory + 1}의 콘텐츠
      </h3>
      <div className="mt-2 space-y-2">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex items-center bg-white p-3 rounded-md shadow"
          >
            {/* img */}
            <div className="w-12 h-12 rounded-lg overflow-hidden bg-gray-200">
              <Image
                src={item.image}
                alt={item.name}
                width={48}
                height={48}
                objectFit="cover"
              />
            </div>
            {/* item text */}
            <span className="ml-3 text-sm text-gray-700">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
