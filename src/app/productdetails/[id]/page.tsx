"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

type Product = {
  id: number;
  title: string;
  image: string;
  category: string;
  price: number;
  description: string;
};

export default function Page() {
  const params = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!params?.id) return;
    setLoading(true);
    fetch(`https://fakestoreapi.com/products/${params.id}`)
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        setProduct(data);
        setLoading(false);
      });
  }, [params?.id]);

  if (loading) return <div>Loading...</div>;
  if (!product) return <div>Product not found.</div>;

  return (
    <div style={{ padding: 32, marginTop: "90px", maxWidth: "800px" }}>
      <Link href="/" style={{ textDecoration: "none", color: "black" }}>
        <p>Back to Home</p>
      </Link>
      <h1>{product.title}</h1>
      <Image
        width={200}
        height={200}
        src={product.image}
        alt={product.title}
        style={{ width: 300, height: 300, objectFit: "contain" }}
      />
      <p>
        <strong>Category:</strong> {product.category}
      </p>
      <p>
        <strong>Price:</strong> ${product.price}
      </p>
      <p>
        <strong>Description:</strong> {product.description}
      </p>
    </div>
  );
}