"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { useSearch } from '../Components/context/SearchContext';
import Image from "next/image";

type PostType = {
  id: number;
  title: string;
  image: string;
  category: string;
  price: number;
  description: string;
};

const PostCards: React.FC = () => {
  const [posts, setPosts] = useState<PostType[]>([]);
  const [filteredCategory, setFilteredCategory] = useState<string>("all");
  const [sortOrder, setSortOrder] = useState<string>(""); 
    const { search } = useSearch()

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get<PostType[]>(
          "https://fakestoreapi.com/products"
        );
        setPosts(response.data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  const categories = ["all", "electronics", "jewelery", "men's clothing", "women's clothing"];

  let filteredPosts =
    filteredCategory === "all"
      ? posts
      : posts.filter((post) => post.category === filteredCategory);
  

    if (search) {
    filteredPosts = filteredPosts.filter(post =>
      post.title.toLowerCase().includes(search.toLowerCase())
    );
  }

  // SORTING LOGIC
  if (sortOrder === "high") {
    filteredPosts = [...filteredPosts].sort((a, b) => b.price - a.price);
  } else if (sortOrder === "low") {
    filteredPosts = [...filteredPosts].sort((a, b) => a.price - b.price);
  }

  return (
    <div style={{ padding: "20px", marginTop:"80px"}}>
      <h1 style={{ textAlign: "center", marginTop:"50px" }}>Product Cards</h1>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ display: "flex", gap: "10px", marginBottom: "20px", flexWrap: 'wrap' }}>
          {categories.map((rat) => (
            <button
              key={rat}
              onClick={() => setFilteredCategory(rat)}
              style={{
                padding: "10px 16px",
                backgroundColor: filteredCategory === rat ? "#333" : "#eee",
                color: filteredCategory === rat ? "#fff" : "#333",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
              }}
            >
              {rat}
            </button>
          ))}
        </div>
        <div>
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            style={{ padding: "8px", borderRadius: "6px" }}
          >
            <option value="">Sort by Price</option>
            <option value="high">Price High to Low</option>
            <option value="low">Price Low to High</option>
          </select>
        </div>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
        }}
      >
        {filteredPosts.map((post) => (
          <Link
            key={post.id}
            href={`/productdetails/${post.id}`}
            style={{
              textDecoration: 'none',
              color: 'black',
              display: 'block',
            }}
          >
            <div
              style={{
                border: "1px solid #ccc",
                borderRadius: "8px",
                padding: "16px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                transition: 'transform 0.2s',
              }}
            >
            <h2
                 style={{
              display: '-webkit-box',
    WebkitLineClamp: 1,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    fontSize: 'clamp(1rem, 2.5vw, 1.75rem)',
    fontWeight: 'bold',
    lineHeight: '1.4',
  }}
>
  {post.title}
</h2>

              <Image
                src={post.image}
                width={200}
                height={200}
                alt={post.title}
                style={{
                  width: "200px",
                  height: "200px",
                  objectFit: "contain",
                  marginBottom: "10px",
                }}
              />
              <p>
                <strong>Category:</strong> {post.category}
              </p>
              <p>
                <strong>Price:</strong> ${post.price}
              </p>
              <p>
                <strong>Description:</strong> {post.description.slice(0, 30)}...
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PostCards;