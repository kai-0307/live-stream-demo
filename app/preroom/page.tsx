"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function PreRoomPage() {
  const [username, setUsername] = useState("");
  const router = useRouter();

  const handleJoin = () => {
    if (username.trim() === "") {
      alert("名前を入力してください");
      return;
    }
    // 入室画面に遷移
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
        backgroundColor: "#1a1a1a", // 背景を暗めに設定
        color: "white", // 全体の文字色を白に
      }}
    >
      <h1>入室画面</h1>
      <input
        type="text"
        placeholder="名前を入力してください"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={{
          padding: "0.5rem",
          fontSize: "1rem",
          width: "300px",
          color: "black", // テキストの色を黒に
          backgroundColor: "white", // 入力欄の背景色を白に
          border: "2px solid white", // 枠線を白に
          borderRadius: "8px", // 入力欄の角を丸める
          outline: "none", // フォーカス時のデフォルト枠を消す
        }}
      />
      <button
        onClick={handleJoin}
        style={{
          padding: "0.5rem 1rem",
          fontSize: "1rem",
          cursor: "pointer",
          border: "2px solid white", // 枠線を白に設定
          borderRadius: "8px", // 角を丸める
          backgroundColor: "transparent", // 背景を透明に
          color: "white", // ボタンの文字色を白に
        }}
      >
        入室
      </button>
    </div>
  );
}
