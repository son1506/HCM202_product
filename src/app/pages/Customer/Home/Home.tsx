export default function Home() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-fixed relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.3)), url('https://a.tcnn.vn/uploads/resources/hoainga/images/bh(3).jpg')`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      {/* Animated overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 via-yellow-500/10 to-transparent animate-pulse"></div>

      {/* Vietnamese flag overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-red-600/10 to-yellow-400/10 pointer-events-none"></div>

      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-6xl font-bold text-center mb-12 text-white drop-shadow-2xl animate-fade-in">
            TƯ TƯỞNG HỒ CHÍ MINH VỀ
            <br />
            <span className="text-yellow-400">ĐỘC LẬP DÂN TỘC VÀ CHỦ NGHĨA XÃ HỘI</span>
          </h1>

          {/* Navigation Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            
            {/* Card 1: Đảng và Nhà nước */}
            <div className="group relative" onClick={() => window.location.href = '/dang-va-nha-nuoc'}>
              <div className="absolute inset-0 bg-gradient-to-br from-red-600 to-red-800 rounded-xl blur-lg opacity-75 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative bg-white/95 backdrop-blur-md rounded-xl shadow-2xl p-8 border border-white/20 hover:shadow-3xl transition-all duration-500 transform hover:scale-105 cursor-pointer">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 mx-auto mb-4 bg-red-100 rounded-full flex items-center justify-center">
                    <span className="text-3xl">🏛️</span>
                  </div>
                  <h3 className="text-2xl font-bold text-red-800 mb-2">
                    Đảng và Nhà nước
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Tư tưởng về xây dựng Đảng và Nhà nước của dân, do dân, vì dân
                  </p>
                </div>
                <div className="space-y-2 text-sm text-gray-700">
                  <p>• Đảng lãnh đạo toàn diện</p>
                  <p>• Nhà nước của nhân dân</p>
                  <p>• Chống tham nhũng</p>
                </div>
              </div>
            </div>

            {/* Card 2: Độc lập dân tộc */}
            <div className="group relative" onClick={() => window.location.href = '/doc-lap-dan-toc'}>
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500 to-yellow-700 rounded-xl blur-lg opacity-75 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative bg-white/95 backdrop-blur-md rounded-xl shadow-2xl p-8 border border-white/20 hover:shadow-3xl transition-all duration-500 transform hover:scale-105 cursor-pointer">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 mx-auto mb-4 bg-yellow-100 rounded-full flex items-center justify-center">
                    <span className="text-3xl">🇻🇳</span>
                  </div>
                  <h3 className="text-2xl font-bold text-yellow-800 mb-2">
                    Độc lập Dân tộc
                  </h3>
                  <p className="text-gray-600 text-sm">
                    "Không có gì quý hơn độc lập tự do"
                  </p>
                </div>
                <div className="space-y-2 text-sm text-gray-700">
                  <p>• Giải phóng dân tộc</p>
                  <p>• Thống nhất Tổ quốc</p>
                  <p>• Bảo vệ chủ quyền</p>
                </div>
              </div>
            </div>

            {/* Card 3: Chủ nghĩa xã hội */}
            <div className="group relative" onClick={() => window.location.href = '/chu-nghia-xa-hoi'}>
              <div className="absolute inset-0 bg-gradient-to-br from-green-600 to-green-800 rounded-xl blur-lg opacity-75 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative bg-white/95 backdrop-blur-md rounded-xl shadow-2xl p-8 border border-white/20 hover:shadow-3xl transition-all duration-500 transform hover:scale-105 cursor-pointer">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-3xl">⭐</span>
                  </div>
                  <h3 className="text-2xl font-bold text-green-800 mb-2">
                    Chủ nghĩa Xã hội
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Xây dựng xã hội công bằng, văn minh
                  </p>
                </div>
                <div className="space-y-2 text-sm text-gray-700">
                  <p>• Công bằng xã hội</p>
                  <p>• Phát triển kinh tế</p>
                  <p>• Xóa đói giảm nghèo</p>
                </div>
              </div>
            </div>

            {/* Card 4: Đại đoàn kết */}
            <div className="group relative" onClick={() => window.location.href = '/dai-doan-ket'}>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl blur-lg opacity-75 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative bg-white/95 backdrop-blur-md rounded-xl shadow-2xl p-8 border border-white/20 hover:shadow-3xl transition-all duration-500 transform hover:scale-105 cursor-pointer">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-3xl">🤝</span>
                  </div>
                  <h3 className="text-2xl font-bold text-blue-800 mb-2">
                    Đại đoàn kết
                  </h3>
                  <p className="text-gray-600 text-sm">
                    "Đoàn kết, đoàn kết, đại đoàn kết"
                  </p>
                </div>
                <div className="space-y-2 text-sm text-gray-700">
                  <p>• Đoàn kết dân tộc</p>
                  <p>• Đoàn kết quốc tế</p>
                  <p>• Mặt trận thống nhất</p>
                </div>
              </div>
            </div>

            {/* Card 5: Văn hóa và Con người */}
            <div className="group relative" onClick={() => window.location.href = '/van-hoa-con-nguoi'}>
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-purple-800 rounded-xl blur-lg opacity-75 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative bg-white/95 backdrop-blur-md rounded-xl shadow-2xl p-8 border border-white/20 hover:shadow-3xl transition-all duration-500 transform hover:scale-105 cursor-pointer">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 mx-auto mb-4 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-3xl">📚</span>
                  </div>
                  <h3 className="text-2xl font-bold text-purple-800 mb-2">
                    Văn hóa & Con người
                  </h3>
                  <p className="text-gray-600 text-sm">
                    "Con người là yếu tố quyết định"
                  </p>
                </div>
                <div className="space-y-2 text-sm text-gray-700">
                  <p>• Giáo dục con người</p>
                  <p>• Văn hóa dân tộc</p>
                  <p>• Đạo đức cách mạng</p>
                </div>
              </div>
            </div>

            {/* Card 6: Kháng chiến và Bảo vệ Tổ quốc */}
            <div className="group relative" onClick={() => window.location.href = '/khang-chien'}>
              <div className="absolute inset-0 bg-gradient-to-br from-orange-600 to-red-700 rounded-xl blur-lg opacity-75 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative bg-white/95 backdrop-blur-md rounded-xl shadow-2xl p-8 border border-white/20 hover:shadow-3xl transition-all duration-500 transform hover:scale-105 cursor-pointer">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 mx-auto mb-4 bg-orange-100 rounded-full flex items-center justify-center">
                    <span className="text-3xl">⚔️</span>
                  </div>
                  <h3 className="text-2xl font-bold text-orange-800 mb-2">
                    Kháng chiến
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Chiến tranh nhân dân toàn diện
                  </p>
                </div>
                <div className="space-y-2 text-sm text-gray-700">
                  <p>• Toàn dân kháng chiến</p>
                  <p>• Chiến tranh du kích</p>
                  <p>• Bảo vệ Tổ quốc</p>
                </div>
              </div>
            </div>

          </div>

          {/* Action Buttons */}
          <div className="text-center mt-16 space-y-6">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                type="button"
                onClick={() => { window.location.href = '/game.html'; }}
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-full shadow-lg hover:from-red-700 hover:to-red-800 transition-all duration-300 transform hover:scale-105 text-lg font-semibold"
                aria-label="Mở trò chơi Chiến Sĩ Kháng Chiến">
                🎮 Trò chơi Chiến Sĩ Kháng Chiến
              </button>
              
              <button
                type="button"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white rounded-full shadow-lg hover:from-yellow-600 hover:to-yellow-700 transition-all duration-300 transform hover:scale-105 text-lg font-semibold">
                📖 Tài liệu học tập
              </button>
            </div>

            <p className="text-white/80 bg-black/20 backdrop-blur-sm px-6 py-3 rounded-full inline-block shadow-lg text-lg">
              "Học tập tư tưởng Hồ Chí Minh - Áp dụng vào thực tiễn cuộc sống"
            </p>
          </div>

          {/* Historical Quote */}
          <div className="mt-16 bg-gradient-to-r from-red-900/50 to-yellow-900/50 backdrop-blur-md rounded-2xl p-8 border border-yellow-400/30">
            <blockquote className="text-center">
              <p className="text-2xl text-white font-medium italic mb-4">
                "Không có gì quý hơn độc lập tự do"
              </p>
              <footer className="text-yellow-400 text-lg font-semibold">
                — Chủ tịch Hồ Chí Minh
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
}