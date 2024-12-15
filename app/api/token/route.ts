import { NextRequest, NextResponse } from "next/server";
import { AccessToken } from "livekit-server-sdk";

export async function GET(req: NextRequest) {
  try {
    console.log("API Request received:", req.nextUrl.searchParams.toString());

    // クエリパラメータの取得
    const room = req.nextUrl.searchParams.get("room");
    const username = req.nextUrl.searchParams.get("username");

    if (!room || !username) {
      console.error("Missing parameters:", { room, username });
      return NextResponse.json(
        { error: "Missing parameters: 'room' and 'username' are required" },
        { status: 400 }
      );
    }

    // 環境変数の取得
    const apiKey = process.env.LIVEKIT_API_KEY;
    const apiSecret = process.env.LIVEKIT_API_SECRET;
    const wsUrl = process.env.NEXT_PUBLIC_LIVEKIT_URL;

    console.log("Environment variables:", { apiKey, apiSecret, wsUrl });

    if (!apiKey || !apiSecret || !wsUrl) {
      console.error("Missing environment variables");
      return NextResponse.json(
        { error: "Server misconfigured: Missing environment variables" },
        { status: 500 }
      );
    }

    console.log("Generating token for room:", room);

    // トークン生成
    const at = new AccessToken(apiKey, apiSecret, { identity: username });
    at.addGrant({
      room,
      roomJoin: true,
      canPublish: true,
      canSubscribe: true,
    });

    const token = at.toJwt();
    console.log("Generated token successfully:", token);

    return NextResponse.json({ token });
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error in API handler:", error.message);
      console.error("Stack trace:", error.stack);
      return NextResponse.json(
        { error: "Failed to generate access token", details: error.message },
        { status: 500 }
      );
    } else {
      console.error("Unknown error occurred:", error);
      return NextResponse.json(
        { error: "An unknown error occurred" },
        { status: 500 }
      );
    }
  }
}
