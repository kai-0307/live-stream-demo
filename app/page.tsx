import Image from "next/image";

export default function Home() {
  return (
    <div className="relative">
      {/* 背景アニメーション */}
      <div className="scene">
        <div className="wrap">
          <div className="wall wall-right"></div>
          <div className="wall wall-left"></div>
          <div className="wall wall-top"></div>
          <div className="wall wall-bottom"></div>
          <div className="wall wall-back"></div>
        </div>
        <div className="wrap">
          <div className="wall wall-right"></div>
          <div className="wall wall-left"></div>
          <div className="wall wall-top"></div>
          <div className="wall wall-bottom"></div>
          <div className="wall wall-back"></div>
        </div>
      </div>

      {/* メインコンテンツ */}
      <div className="flex flex-col items-center justify-between min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-50 p-8">
        <header className="text-center mt-10">
          <h1 className="text-4xl font-bold mb-4">Live Stream Demo</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            リアルタイムで部屋に参加してライブ配信を体験しましょう！
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
            ライブ配信を開始するには、以下のボタンをクリックして部屋に参加してください。
          </p>

          <a
            href="/preroom"
            className="bg-blue-600 text-white rounded-lg px-8 py-4 text-lg font-semibold shadow-md hover:bg-blue-700 transition"
          >
            部屋に入る
          </a>
        </main>

        <footer className="text-center mt-16">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © 2024 Live Stream Demo. All rights reserved.
          </p>
          <div className="flex justify-center gap-4 mt-4">
            <a
              href="https://github.com/kai-0307/live-stream-demo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              GitHub
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}
