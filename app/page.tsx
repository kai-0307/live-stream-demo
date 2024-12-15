import Image from "next/image";

export default function Home() {
  return (
    <div
      className="relative"
      style={{
        backgroundColor: "#000", // 背景を黒に設定
        color: "#fff", // テキストの色を白に設定
      }}
    >
      {/* メインコンテンツ */}
      <div className="flex flex-col items-center justify-between min-h-screen p-8">
        <header className="text-center mt-10">
          <h1 className="text-4xl font-bold mb-4">Live Stream Demo</h1>
          <p className="text-lg text-gray-300">
            Experience real-time live streaming by joining a room!
          </p>
        </header>

        <main className="flex flex-col items-center gap-8 mt-16">
          <Image
            src="/globe.svg"
            alt="Live Streaming Icon"
            width={120}
            height={120}
            className="mb-8"
          />

          <p className="text-lg text-center">
            Click the button below to join a room and start live streaming.
          </p>

          <a
            href="/preroom"
            className="border-2 border-white text-white bg-black rounded-lg px-8 py-4 text-lg font-semibold shadow-md hover:bg-gray-800 transition"
            style={{
              borderColor: "#fff", // 白い枠線
              backgroundColor: "#000", // 黒い背景
              color: "#fff", // 白い文字
            }}
          >
            Getting Started
          </a>
        </main>

        <footer className="text-center mt-16">
          <p className="text-sm text-gray-500">
            © 2024 Live Stream Demo. All rights reserved.
          </p>
          <div className="flex justify-center gap-4 mt-4">
            <a
              href="https://github.com/kai-0307/live-stream-demo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              GitHub
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}
