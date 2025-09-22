export default function UnityPage() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-fixed relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.4)), url('https://images.unsplash.com/photo-1569949381669-ecf31ae8e613?w=1920&h=1080&fit=crop')`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      {/* Unity themed overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-700/40 via-transparent to-green-600/30"></div>
      
      {/* Unity effects */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-40 left-32 w-56 h-56 bg-green-500/25 rounded-full blur-2xl animate-bounce"></div>

      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-blue-600 rounded-full mb-6 shadow-2xl">
              <span className="text-4xl">🤝</span>
            </div>
            <h1 className="text-5xl font-bold text-white drop-shadow-2xl mb-4">
              TƯ TƯỞNG HỒ CHÍ MINH VỀ
            </h1>
            <h2 className="text-4xl font-bold text-yellow-400 drop-shadow-xl mb-4">
              ĐẠI ĐOÀN KẾT DÂN TỘC
            </h2>
            <div className="bg-gradient-to-r from-blue-600/80 to-green-500/80 backdrop-blur-md rounded-xl p-4 max-w-3xl mx-auto border border-yellow-400/50">
              <p className="text-2xl text-white font-medium italic">
                "Đoàn kết, đoàn kết, đại đoàn kết"
              </p>
            </div>
          </div>

          {/* Main Content */}
          <div className="space-y-10">
            
            {/* Bản chất đại đoàn kết */}
            <section className="bg-gradient-to-r from-blue-900/90 to-blue-800/90 backdrop-blur-md rounded-2xl shadow-2xl p-8 border border-blue-400/50">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mr-4 shadow-lg">
                  <span className="text-2xl">🌟</span>
                </div>
                <h3 className="text-3xl font-bold text-yellow-400">
                  Bản chất của Đại đoàn kết dân tộc
                </h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="bg-black/40 rounded-xl p-6 border border-yellow-400/30">
                    <h4 className="text-xl font-semibold text-yellow-300 mb-4 flex items-center">
                      🇻🇳 Đoàn kết toàn dân tộc
                    </h4>
                    <ul className="space-y-3 text-white/90">
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-2 text-lg">•</span>
                        Đoàn kết tất cả các tầng lớp nhân dân
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-2 text-lg">•</span>
                        Vượt qua mọi khác biệt về tôn giáo, dân tộc
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-2 text-lg">•</span>
                        Cùng hướng về mục tiêu chung
                      </li>
                    </ul>
                  </div>

                  <div className="bg-black/40 rounded-xl p-6 border border-yellow-400/30">
                    <h4 className="text-xl font-semibold text-yellow-300 mb-4 flex items-center">
                      🌍 Đoàn kết quốc tế
                    </h4>
                    <ul className="space-y-3 text-white/90">
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-2 text-lg">•</span>
                        Đoàn kết với các dân tộc yêu cầu hòa bình
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-2 text-lg">•</span>
                        Ủng hộ phong trào giải phóng thế giới
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-2 text-lg">•</span>
                        Góp phần xây dựng thế giới hòa bình
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-black/40 rounded-xl p-6 border border-yellow-400/30">
                    <h4 className="text-xl font-semibold text-yellow-300 mb-4 flex items-center">
                      🏛️ Mặt trận thống nhất
                    </h4>
                    <ul className="space-y-3 text-white/90">
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-2 text-lg">•</span>
                        Tập hợp mọi lực lượng tiến bộ
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-2 text-lg">•</span>
                        Xây dựng khối đại đoàn kết toàn dân
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-2 text-lg">•</span>
                        Phát huy sức mạnh tổng hợp
                      </li>
                    </ul>
                  </div>

                  <div className="bg-black/40 rounded-xl p-6 border border-yellow-400/30">
                    <h4 className="text-xl font-semibold text-yellow-300 mb-4 flex items-center">
                      💪 Sức mạnh đoàn kết
                    </h4>
                    <ul className="space-y-3 text-white/90">
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-2 text-lg">•</span>
                        "Đoàn kết thì sống, chia rẽ thì chết"
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-2 text-lg">•</span>
                        Sức mạnh vô địch của nhân dân
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-2 text-lg">•</span>
                        Nền tảng mọi thắng lợi cách mạng
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Nguyên tắc đại đoàn kết */}
            <section className="bg-gradient-to-r from-green-900/90 to-green-800/90 backdrop-blur-md rounded-2xl shadow-2xl p-8 border border-green-400/50">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mr-4 shadow-lg">
                  <span className="text-2xl">⚖️</span>
                </div>
                <h3 className="text-3xl font-bold text-yellow-400">
                  Nguyên tắc thực hiện Đại đoàn kết
                </h3>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-black/40 rounded-xl p-6 border border-green-400/30">
                  <div className="text-center mb-4">
                    <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-white text-xl">🎯</span>
                    </div>
                    <h4 className="text-lg font-semibold text-green-300">Mục tiêu chung</h4>
                  </div>
                  <ul className="space-y-2 text-sm text-white/80">
                    <li>• Độc lập dân tộc</li>
                    <li>• Thống nhất Tổ quốc</li>
                    <li>• Xây dựng chủ nghĩa xã hội</li>
                    <li>• Dân giàu, nước mạnh</li>
                  </ul>
                </div>

                <div className="bg-black/40 rounded-xl p-6 border border-green-400/30">
                  <div className="text-center mb-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-white text-xl">🤝</span>
                    </div>
                    <h4 className="text-lg font-semibold text-blue-300">Đoàn kết - Đấu tranh</h4>
                  </div>
                  <ul className="space-y-2 text-sm text-white/80">
                    <li>• Đoàn kết những ai có thể đoàn kết</li>
                    <li>• Tranh thủ kể cả đối thủ</li>
                    <li>• Kết hợp đoàn kết với đấu tranh</li>
                    <li>• Hóa giải mâu thuẫn nội bộ</li>
                  </ul>
                </div>

                <div className="bg-black/40 rounded-xl p-6 border border-green-400/30">
                  <div className="text-center mb-4">
                    <div className="w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-white text-xl">💎</span>
                    </div>
                    <h4 className="text-lg font-semibold text-yellow-300">Đoàn kết - Thống nhất</h4>
                  </div>
                  <ul className="space-y-2 text-sm text-white/80">
                    <li>• Thống nhất trong tư tưởng</li>
                    <li>• Thống nhất trong tổ chức</li>
                    <li>• Thống nhất trong hành động</li>
                    <li>• Tôn trọng sự khác biệt</li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 bg-blue-900/50 rounded-xl p-6 border border-blue-400/50">
                <blockquote className="text-center">
                  <p className="text-xl text-yellow-200 italic mb-3">
                    "Muốn thành công, trước hết phải đoàn kết. Muốn đoàn kết, trước hết phải có sự hiểu biết lẫn nhau"
                  </p>
                  <footer className="text-yellow-400 font-semibold">— Chủ tịch Hồ Chí Minh</footer>
                </blockquote>
              </div>
            </section>

            {/* Thực tiễn đại đoàn kết */}
            <section className="bg-gradient-to-r from-purple-900/90 to-purple-800/90 backdrop-blur-md rounded-2xl shadow-2xl p-8 border border-purple-400/50">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mr-4 shadow-lg">
                  <span className="text-2xl">🏆</span>
                </div>
                <h3 className="text-3xl font-bold text-yellow-400">
                  Thực tiễn Đại đoàn kết qua các thời kỳ
                </h3>
              </div>

              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-black/40 rounded-xl p-6 border border-purple-400/30">
                    <h4 className="text-xl font-semibold text-purple-300 mb-4 flex items-center">
                      🔥 Thời kỳ kháng chiến
                    </h4>
                    <div className="space-y-3">
                      <div className="bg-red-900/30 rounded-lg p-3">
                        <p className="text-white/90 font-medium">Khối đại đoàn kết toàn dân</p>
                        <p className="text-sm text-white/70">Tất cả các tầng lớp cùng kháng chiến</p>
                      </div>
                      <div className="bg-orange-900/30 rounded-lg p-3">
                        <p className="text-white/90 font-medium">Mặt trận Việt Minh</p>
                        <p className="text-sm text-white/70">Tập hợp mọi lực lượng tiến bộ</p>
                      </div>
                      <div className="bg-yellow-900/30 rounded-lg p-3">
                        <p className="text-white/90 font-medium">Đoàn kết quốc tế</p>
                        <p className="text-sm text-white/70">Ủng hộ từ bạn bè thế giới</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-black/40 rounded-xl p-6 border border-purple-400/30">
                    <h4 className="text-xl font-semibold text-purple-300 mb-4 flex items-center">
                      🏗️ Thời kỳ xây dựng
                    </h4>
                    <div className="space-y-3">
                      <div className="bg-blue-900/30 rounded-lg p-3">
                        <p className="text-white/90 font-medium">Đoàn kết xây dựng đất nước</p>
                        <p className="text-sm text-white/70">Công nghiệp hóa, hiện đại hóa</p>
                      </div>
                      <div className="bg-green-900/30 rounded-lg p-3">
                        <p className="text-white/90 font-medium">Mặt trận Tổ quốc</p>
                        <p className="text-sm text-white/70">Tập hợp các tổ chức chính trị-xã hội</p>
                      </div>
                      <div className="bg-purple-900/30 rounded-lg p-3">
                        <p className="text-white/90 font-medium">Đại đoàn kết dân tộc</p>
                        <p className="text-sm text-white/70">54 dân tộc anh em</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-800/50 to-green-700/50 rounded-xl p-6 border border-yellow-400/50">
                  <h4 className="text-xl font-semibold text-yellow-300 mb-4 text-center">
                    🌟 Những thành tựu của Đại đoàn kết
                  </h4>
                  <div className="grid md:grid-cols-4 gap-4 text-center">
                    <div className="bg-black/30 rounded-lg p-4">
                      <div className="text-2xl mb-2">🏆</div>
                      <p className="text-white/90 font-medium">Thắng lợi Cách mạng tháng 8</p>
                    </div>
                    <div className="bg-black/30 rounded-lg p-4">
                      <div className="text-2xl mb-2">⚔️</div>
                      <p className="text-white/90 font-medium">Chiến thắng Điện Biên Phủ</p>
                    </div>
                    <div className="bg-black/30 rounded-lg p-4">
                      <div className="text-2xl mb-2">🇻🇳</div>
                      <p className="text-white/90 font-medium">Thống nhất đất nước</p>
                    </div>
                    <div className="bg-black/30 rounded-lg p-4">
                      <div className="text-2xl mb-2">🚀</div>
                      <p className="text-white/90 font-medium">Đổi mới và phát triển</p>
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
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors backdrop-blur-md">
                🎮 Trò chơi Chiến Sĩ Kháng Chiến
              </button>
              <button
                className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors backdrop-blur-md">
                🤝 Mặt trận Tổ quốc
              </button>
            </div>
            
            <div className="bg-gradient-to-r from-blue-900/80 to-green-800/80 backdrop-blur-md rounded-xl p-8 border border-yellow-400/50">
              <blockquote className="text-center">
                <p className="text-2xl text-yellow-200 italic mb-4">
                  "Đoàn kết là sức mạnh vô địch của chúng ta.<br />
                  Nhờ đoàn kết mà ta đã thắng được mọi khó khăn, mọi thử thách"
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