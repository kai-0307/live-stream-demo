"use client";

import React, { Suspense, useState, useEffect } from "react";
import {
  ControlBar,
  GridLayout,
  LiveKitRoom,
  ParticipantTile,
  RoomAudioRenderer,
  useTracks,
} from "@livekit/components-react";
import "@livekit/components-styles";
import { Track } from "livekit-client";
import { useSearchParams } from "next/navigation";

export default function RoomPage() {
  return (
    <Suspense fallback={<div>Loading room...</div>}>
      <Room />
    </Suspense>
  );
}

function Room() {
  const searchParams = useSearchParams();
  const name = searchParams.get("username") || ""; // クエリから名前を取得
  const room = "live-stream-demo-room";
  const [token, setToken] = useState("");

  useEffect(() => {
    if (!name) {
      alert("名前が入力されていません");
      return;
    }

    (async () => {
      try {
        const resp = await fetch(`/api/token?room=${room}&username=${name}`);
        if (!resp.ok) {
          throw new Error(`HTTP error! Status: ${resp.status}`);
        }
        const data = await resp.json();
        setToken(data.token);
      } catch (e) {
        console.error("Error fetching token:", e);
      }
    })();
  }, [name]);

  if (token === "") {
    return <div>Getting token...</div>;
  }

  return (
    <div style={{ height: "100dvh", display: "flex", flexDirection: "column" }}>
      {/* 名前表示 */}
      <header
        style={{ backgroundColor: "#1a1a1a", padding: "1rem", color: "white" }}
      >
        <h1>Room: {room}</h1>
        <p>Participants: {name}</p>
      </header>

      {/* LiveKitRoom */}
      <LiveKitRoom
        video={true}
        audio={true}
        token={token}
        serverUrl={process.env.NEXT_PUBLIC_LIVEKIT_URL}
        data-lk-theme="default"
        style={{ flex: 1 }}
      >
        <MyVideoConference />
        <RoomAudioRenderer />
        <ControlBar />
      </LiveKitRoom>
    </div>
  );
}

function MyVideoConference() {
  const tracks = useTracks(
    [
      { source: Track.Source.Camera, withPlaceholder: true },
      { source: Track.Source.ScreenShare, withPlaceholder: false },
    ],
    { onlySubscribed: false }
  );
  return (
    <GridLayout
      tracks={tracks}
      style={{ height: "calc(100vh - var(--lk-control-bar-height))" }}
    >
      <ParticipantTile />
    </GridLayout>
  );
}
