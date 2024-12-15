"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function PreRoomPage() {
  const [username, setUsername] = useState("");
  const router = useRouter();

  const handleJoin = () => {
    if (username.trim() === "") {
      alert("Please enter your name");
      return;
    }
    // Navigate to the room page
    router.push(`/room?username=${encodeURIComponent(username)}`);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        gap: "1rem",
        backgroundColor: "#1a1a1a", // Dark background
        color: "white", // Text color white
      }}
    >
      <h1>Enter Room</h1>
      <input
        type="text"
        placeholder="Enter your name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={{
          padding: "0.5rem",
          fontSize: "1rem",
          width: "300px",
          color: "black", // Text color inside input
          backgroundColor: "white", // Input background color
          border: "2px solid white", // Border color white
          borderRadius: "8px", // Rounded corners
          outline: "none", // Remove default outline
        }}
      />
      <button
        onClick={handleJoin}
        style={{
          padding: "0.5rem 1rem",
          fontSize: "1rem",
          cursor: "pointer",
          border: "2px solid white", // Border color white
          borderRadius: "8px", // Rounded corners
          backgroundColor: "transparent", // Transparent background
          color: "white", // Button text color white
        }}
      >
        Join Room
      </button>
    </div>
  );
}
