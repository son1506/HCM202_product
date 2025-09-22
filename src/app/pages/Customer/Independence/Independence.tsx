export default function IndependencePage() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-fixed relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.4)), url('https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920&h=1080&fit=crop')`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      {/* Revolutionary overlay with Vietnamese flag colors */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-700/40 via-transparent to-yellow-500/30"></div>
      
      {/* War scene effects */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-orange-600/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-32 left-16 w-56 h-56 bg-red-500/15 rounded-full blur-2xl animate-bounce"></div>

      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          {/* Header with Vietnamese flag motif */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-red-600 rounded-full mb-6 shadow-2xl">
              <span className="text-4xl">🇻🇳</span>
            </div>
            <h1 className="text-5xl font-bold text-white drop-shadow-2xl mb-4">
              TƯ TƯỞNG HỒ CHÍ MINH VỀ
            </h1>
            <h2 className="text-4xl font-bold text-yellow-400 drop-shadow-xl mb-4">
              ĐỘC LẬP DÂN TỘC
            </h2>
            <div className="bg-gradient-to-r from-red-600/80 to-yellow-500/80 backdrop-blur-md rounded-xl p-4 max-w-2xl mx-auto border border-yellow-400/50">
              <p className="text-2xl text-white font-medium italic">
                "Không có gì quý hơn độc lập tự do"
              </p>
            </div>
          </div>

          {/* Main Content */}
          <div className="space-y-10">
            
            {/* Bản chất độc lập dân tộc */}
            <section className="bg-gradient-to-r from-red-900/90 to-red-800/90 backdrop-blur-md rounded-2xl shadow-2xl p-8 border border-red-400/50">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mr-4 shadow-lg">
                  <span className="text-2xl">⭐</span>
                </div>
                <h3 className="text-3xl font-bold text-yellow-400">
                  Bản chất của Độc lập Dân tộc
                </h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="bg-black/40 rounded-xl p-6 border border-yellow-400/30">
                    <h4 className="text-xl font-semibold text-yellow-300 mb-4 flex items-center">
                      🏛️ Độc lập chính trị
                    </h4>
                    <ul className="space-y-3 text-white/90">
                      <li className="flex items-start">
                        <span className="text-red-400 mr-2 text-lg">•</span>
                        Tự chủ về chính trị, không phụ thuộc
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-400 mr-2 text-lg">•</span>
                        Quyền tự quyết định vận mệnh dân tộc
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-400 mr-2 text-lg">•</span>
                        Chủ quyền quốc gia thuộc về nhân dân
                      </li>
                    </ul>
                  </div>

                  <div className="bg-black/40 rounded-xl p-6 border border-yellow-400/30">
                    <h4 className="text-xl font-semibold text-yellow-300 mb-4 flex items-center">
                      💰 Độc lập kinh tế
                    </h4>
                    <ul className="space-y-3 text-white/90">
                      <li className="flex items-start">
                        <span className="text-red-400 mr-2 text-lg">•</span>
                        Tự chủ về tài nguyên thiên nhiên
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-400 mr-2 text-lg">•</span>
                        Phát triển kinh tế dân tộc
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-400 mr-2 text-lg">•</span>
                        Không phụ thuộc về kinh tế
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-black/40 rounded-xl p-6 border border-yellow-400/30">
                    <h4 className="text-xl font-semibold text-yellow-300 mb-4 flex items-center">
                      🎭 Độc lập văn hóa
                    </h4>
                    <ul className="space-y-3 text-white/90">
                      <li className="flex items-start">
                        <span className="text-red-400 mr-2 text-lg">•</span>
                        Bảo tồn bản sắc văn hóa dân tộc
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-400 mr-2 text-lg">•</span>
                        Phát triển văn hóa tiến bộ
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-400 mr-2 text-lg">•</span>
                        Chống văn hóa độc hại
                      </li>
                    </ul>
                  </div>

                  <div className="bg-black/40 rounded-xl p-6 border border-yellow-400/30">
                    <h4 className="text-xl font-semibold text-yellow-300 mb-4 flex items-center">
                      ⚔️ Độc lập quân sự
                    </h4>
                    <ul className="space-y-3 text-white/90">
                      <li className="flex items-start">
                        <span className="text-red-400 mr-2 text-lg">•</span>
                        Xây dựng lực lượng vũ trang nhân dân
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-400 mr-2 text-lg">•</span>
                        Bảo vệ chủ quyền lãnh thổ
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-400 mr-2 text-lg">•</span>
                        Sẵn sàng chiến đấu bảo vệ Tổ quốc
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Con đường giành độc lập */}
            <section className="bg-gradient-to-r from-yellow-900/90 to-orange-800/90 backdrop-blur-md rounded-2xl shadow-2xl p-8 border border-orange-400/50">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mr-4 shadow-lg">
                  <span className="text-2xl">🔥</span>
                </div>
                <h3 className="text-3xl font-bold text-yellow-400">
                  Con đường giành Độc lập
                </h3>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-black/40 rounded-xl p-6 border border-red-400/30">
                  <div className="text-center mb-4">
                    <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-white font-bold">1</span>
                    </div>
                    <h4 className="text-lg font-semibold text-red-300">Cách mạng dân tộc dân chủ</h4>
                  </div>
                  <ul className="space-y-2 text-sm text-white/80">
                    <li>• Lật đổ ách thống trị thực dân</li>
                    <li>• Xóa bỏ chế độ phong kiến</li>
                    <li>• Thành lập chính quyền dân chủ</li>
                    <li>• Thực hiện cải cách ruộng đất</li>
                  </ul>
                </div>

                <div className="bg-black/40 rounded-xl p-6 border border-orange-400/30">
                  <div className="text-center mb-4">
                    <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-white font-bold">2</span>
                    </div>
                    <h4 className="text-lg font-semibold text-orange-300">Kháng chiến toàn dân</h4>
                  </div>
                  <ul className="space-y-2 text-sm text-white/80">
                    <li>• Toàn dân, toàn diện, trường kỳ</li>
                    <li>• Kết hợp chính trị với quân sự</li>
                    <li>• Chiến tranh du kích</li>
                    <li>• Đại đoàn kết dân tộc</li>
                  </ul>
                </div>

                <div className="bg-black/40 rounded-xl p-6 border border-yellow-400/30">
                  <div className="text-center mb-4">
                    <div className="w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-white font-bold">3</span>
                    </div>
                    <h4 className="text-lg font-semibold text-yellow-300">Xây dựng và bảo vệ</h4>
                  </div>
                  <ul className="space-y-2 text-sm text-white/80">
                    <li>• Xây dựng chế độ xã hội chủ nghĩa</li>
                    <li>• Phát triển kinh tế - xã hội</li>
                    <li>• Tăng cường quốc phòng</li>
                    <li>• Hội nhập quốc tế</li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 bg-red-900/50 rounded-xl p-6 border border-red-400/50">
                <blockquote className="text-center">
                  <p className="text-xl text-yellow-200 italic mb-3">
                    "Thà hy sinh tất cả, chứ không chịu mất nước, không chịu làm nô lệ"
                  </p>
                  <footer className="text-yellow-400 font-semibold">— Chủ tịch Hồ Chí Minh</footer>
                </blockquote>
              </div>
            </section>

            {/* Các thời kỳ đấu tranh */}
            <section className="bg-gradient-to-r from-green-900/90 to-green-800/90 backdrop-blur-md rounded-2xl shadow-2xl p-8 border border-green-400/50">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mr-4 shadow-lg">
                  <span className="text-2xl">📜</span>
                </div>
                <h3 className="text-3xl font-bold text-yellow-400">
                  Các thời kỳ đấu tranh giành Độc lập
                </h3>
              </div>

              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-black/40 rounded-xl p-6 border border-green-400/30">
                    <h4 className="text-xl font-semibold text-green-300 mb-4 flex items-center">
                      🏴‍☠️ Chống thực dân Pháp (1858-1954)
                    </h4>
                    <div className="space-y-3">
                      <div className="bg-red-900/30 rounded-lg p-3">
                        <p className="text-white/90 font-medium">Giai đoạn 1: Khởi nghĩa tự phát</p>
                        <p className="text-sm text-white/70">Các cuộc khởi nghĩa Cần Vương, Đông Du...</p>
                      </div>
                      <div className="bg-orange-900/30 rounded-lg p-3">
                        <p className="text-white/90 font-medium">Giai đoạn 2: Cách mạng dân chủ</p>
                        <p className="text-sm text-white/70">Thành lập Đảng, Cách mạng tháng 8/1945</p>
                      </div>
                      <div className="bg-yellow-900/30 rounded-lg p-3">
                        <p className="text-white/90 font-medium">Giai đoạn 3: Kháng chiến</p>
                        <p className="text-sm text-white/70">9 năm kháng chiến, chiến thắng Điện Biên Phủ</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-black/40 rounded-xl p-6 border border-green-400/30">
                    <h4 className="text-xl font-semibold text-green-300 mb-4 flex items-center">
                      🦅 Chống đế quốc Mỹ (1954-1975)
                    </h4>
                    <div className="space-y-3">
                      <div className="bg-blue-900/30 rounded-lg p-3">
                        <p className="text-white/90 font-medium">Xây dựng miền Bắc</p>
                        <p className="text-sm text-white/70">Cải cách ruộng đất, công nghiệp hóa</p>
                      </div>
                      <div className="bg-purple-900/30 rounded-lg p-3">
                        <p className="text-white/90 font-medium">Giải phóng miền Nam</p>
                        <p className="text-sm text-white/70">Kháng chiến chống Mỹ cứu nước</p>
                      </div>
                      <div className="bg-green-900/30 rounded-lg p-3">
                        <p className="text-white/90 font-medium">Thống nhất Tổ quốc</p>
                        <p className="text-sm text-white/70">30/4/1975 - Hoàn thành độc lập thống nhất</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-red-800/50 to-yellow-700/50 rounded-xl p-6 border border-yellow-400/50">
                  <h4 className="text-xl font-semibold text-yellow-300 mb-4 text-center">
                    🏆 Ý nghĩa lịch sử của cuộc đấu tranh giành độc lập
                  </h4>
                  <div className="grid md:grid-cols-4 gap-4 text-center">
                    <div className="bg-black/30 rounded-lg p-4">
                      <div className="text-2xl mb-2">🇻🇳</div>
                      <p className="text-white/90 font-medium">Khẳng định quyền độc lập dân tộc</p>
                    </div>
                    <div className="bg-black/30 rounded-lg p-4">
                      <div className="text-2xl mb-2">🌍</div>
                      <p className="text-white/90 font-medium">Góp phần giải phóng thế giới</p>
                    </div>
                    <div className="bg-black/30 rounded-lg p-4">
                      <div className="text-2xl mb-2">💪</div>
                      <p className="text-white/90 font-medium">Chứng minh sức mạnh nhân dân</p>
                    </div>
                    <div className="bg-black/30 rounded-lg p-4">
                      <div className="text-2xl mb-2">📚</div>
                      <p className="text-white/90 font-medium">Bài học quý cho nhân loại</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

          </div>

          {/* Navigation and Actions */}
          <div className="mt-16 text-center space-y-6">
            <div className="flex flex-wrap gap-4 justify-center">
              <button
                onClick={() => window.history.back()}
                className="px-6 py-3 bg-gray-700/80 text-white rounded-lg hover:bg-gray-600 transition-colors backdrop-blur-md">
                ← Quay về trang chủ
              </button>
              <button
                onClick={() => { window.location.href = '/game.html'; }}
                className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors backdrop-blur-md">
                🎮 Trò chơi Chiến Sĩ Kháng Chiến
              </button>
              <button
                className="px-6 py-3 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors backdrop-blur-md">
                📖 Tài liệu lịch sử
              </button>
            </div>
            
            <div className="bg-gradient-to-r from-red-900/80 to-yellow-800/80 backdrop-blur-md rounded-xl p-8 border border-yellow-400/50">
              <blockquote className="text-center">
                <p className="text-2xl text-yellow-200 italic mb-4">
                  "Độc lập mà không có tự do thì độc lập đó cũng vô nghĩa.<br />
                  Tự do mà không có độc lập thì tự do đó cũng vô nghĩa."
                </p>
                <footer className="text-yellow-400 font-bold text-lg">— Chủ tịch Hồ Chí Minh</footer>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}