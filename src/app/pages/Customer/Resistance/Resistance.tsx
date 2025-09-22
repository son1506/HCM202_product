export default function ResistancePage() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-fixed relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.5)), url('https://thuviennguyenvanhuong.vn/wp-content/uploads/2022/12/qdnd016.17-1024x745.jpg')`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      {/* War effects with smoke and fire */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-700/40 via-red-600/30 to-yellow-600/20"></div>
      
      {/* Battle scene effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-red-600/25 rounded-full blur-2xl animate-bounce"></div>
      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-yellow-500/20 rounded-full blur-xl animate-pulse"></div>

      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-orange-600 rounded-full mb-6 shadow-2xl">
              <span className="text-4xl">⚔️</span>
            </div>
            <h1 className="text-5xl font-bold text-white drop-shadow-2xl mb-4">
              TƯ TƯỞNG HỒ CHÍ MINH VỀ
            </h1>
            <h2 className="text-4xl font-bold text-orange-400 drop-shadow-xl mb-4">
              KHÁNG CHIẾN VÀ BẢO VỆ TỔ QUỐC
            </h2>
            <div className="bg-gradient-to-r from-orange-600/80 to-red-500/80 backdrop-blur-md rounded-xl p-4 max-w-3xl mx-auto border border-yellow-400/50">
              <p className="text-2xl text-white font-medium italic">
                "Toàn dân, toàn diện, trường kỳ, tự lực cánh sinh"
              </p>
            </div>
          </div>

          {/* Main Content */}
          <div className="space-y-10">
            
            {/* Chiến lược kháng chiến */}
            <section className="bg-gradient-to-r from-orange-900/90 to-red-800/90 backdrop-blur-md rounded-2xl shadow-2xl p-8 border border-orange-400/50">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mr-4 shadow-lg">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-3xl font-bold text-yellow-400">
                  Chiến lược Kháng chiến của Hồ Chí Minh
                </h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="bg-black/40 rounded-xl p-6 border border-yellow-400/30">
                    <h4 className="text-xl font-semibold text-yellow-300 mb-4 flex items-center">
                      🏴‍☠️ Toàn dân kháng chiến
                    </h4>
                    <ul className="space-y-3 text-white/90">
                      <li className="flex items-start">
                        <span className="text-orange-400 mr-2 text-lg">•</span>
                        Huy động toàn thể nhân dân
                      </li>
                      <li className="flex items-start">
                        <span className="text-orange-400 mr-2 text-lg">•</span>
                        Từ già đến trẻ, nam nữ đều tham gia
                      </li>
                      <li className="flex items-start">
                        <span className="text-orange-400 mr-2 text-lg">•</span>
                        "Đi tới đâu cũng có dân"
                      </li>
                    </ul>
                  </div>

                  <div className="bg-black/40 rounded-xl p-6 border border-yellow-400/30">
                    <h4 className="text-xl font-semibold text-yellow-300 mb-4 flex items-center">
                      🌍 Toàn diện kháng chiến
                    </h4>
                    <ul className="space-y-3 text-white/90">
                      <li className="flex items-start">
                        <span className="text-orange-400 mr-2 text-lg">•</span>
                        Chính trị, quân sự, ngoại giao
                      </li>
                      <li className="flex items-start">
                        <span className="text-orange-400 mr-2 text-lg">•</span>
                        Kinh tế, văn hóa, xã hội
                      </li>
                      <li className="flex items-start">
                        <span className="text-orange-400 mr-2 text-lg">•</span>
                        Mọi mặt trận đấu tranh
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-black/40 rounded-xl p-6 border border-yellow-400/30">
                    <h4 className="text-xl font-semibold text-yellow-300 mb-4 flex items-center">
                      ⏰ Trường kỳ kháng chiến
                    </h4>
                    <ul className="space-y-3 text-white/90">
                      <li className="flex items-start">
                        <span className="text-orange-400 mr-2 text-lg">•</span>
                        Chuẩn bị tinh thần lâu dài
                      </li>
                      <li className="flex items-start">
                        <span className="text-orange-400 mr-2 text-lg">•</span>
                        Không nóng vội, không chủ quan
                      </li>
                      <li className="flex items-start">
                        <span className="text-orange-400 mr-2 text-lg">•</span>
                        Thắng từng bước, từng thời kỳ
                      </li>
                    </ul>
                  </div>

                  <div className="bg-black/40 rounded-xl p-6 border border-yellow-400/30">
                    <h4 className="text-xl font-semibold text-yellow-300 mb-4 flex items-center">
                      💪 Tự lực cánh sinh
                    </h4>
                    <ul className="space-y-3 text-white/90">
                      <li className="flex items-start">
                        <span className="text-orange-400 mr-2 text-lg">•</span>
                        Dựa vào sức mạnh nội lực
                      </li>
                      <li className="flex items-start">
                        <span className="text-orange-400 mr-2 text-lg">•</span>
                        Kết hợp với sự giúp đỡ bạn bè
                      </li>
                      <li className="flex items-start">
                        <span className="text-orange-400 mr-2 text-lg">•</span>
                        Không phụ thuộc vào bên ngoài
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Các cuộc kháng chiến */}
            <section className="bg-gradient-to-r from-red-900/90 to-red-800/90 backdrop-blur-md rounded-2xl shadow-2xl p-8 border border-red-400/50">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mr-4 shadow-lg">
                  <span className="text-2xl">🔥</span>
                </div>
                <h3 className="text-3xl font-bold text-yellow-400">
                  Các cuộc Kháng chiến vĩ đại
                </h3>
              </div>

              <div className="space-y-8">
                {/* Kháng chiến chống Pháp */}
                <div className="bg-black/40 rounded-xl p-6 border border-orange-400/30">
                  <h4 className="text-2xl font-semibold text-orange-300 mb-4 flex items-center">
                    🇫🇷 Kháng chiến chống thực dân Pháp (1946-1954)
                  </h4>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-red-900/40 rounded-lg p-4">
                      <h5 className="font-semibold text-red-300 mb-2">Giai đoạn 1 (1946-1949)</h5>
                      <ul className="text-sm text-white/80 space-y-1">
                        <li>• Khởi đầu khó khăn</li>
                        <li>• Rút vào rừng núi</li>
                        <li>• Xây dựng căn cứ địa</li>
                        <li>• Chiến tranh du kích</li>
                      </ul>
                    </div>
                    <div className="bg-yellow-900/40 rounded-lg p-4">
                      <h5 className="font-semibold text-yellow-300 mb-2">Giai đoạn 2 (1949-1953)</h5>
                      <ul className="text-sm text-white/80 space-y-1">
                        <li>• Phát triển lực lượng</li>
                        <li>• Mở rộng vùng giải phóng</li>
                        <li>• Chiến dịch Biên giới</li>
                        <li>• Chiến dịch Tây Bắc</li>
                      </ul>
                    </div>
                    <div className="bg-green-900/40 rounded-lg p-4">
                      <h5 className="font-semibold text-green-300 mb-2">Giai đoạn 3 (1953-1954)</h5>
                      <ul className="text-sm text-white/80 space-y-1">
                        <li>• Tổng phản công</li>
                        <li>• Chiến dịch Điện Biên Phủ</li>
                        <li>• Thắng lợi quyết định</li>
                        <li>• Hiệp định Genève</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Kháng chiến chống Mỹ */}
                <div className="bg-black/40 rounded-xl p-6 border border-red-400/30">
                  <h4 className="text-2xl font-semibold text-red-300 mb-4 flex items-center">
                    🦅 Kháng chiến chống đế quốc Mỹ (1955-1975)
                  </h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="text-lg font-semibold text-yellow-300 mb-3">Miền Bắc - Hậu phương lớn</h5>
                      <div className="space-y-3">
                        <div className="bg-blue-900/30 rounded-lg p-3">
                          <p className="text-white/90 font-medium">Xây dựng chủ nghĩa xã hội</p>
                          <p className="text-sm text-white/70">Công nghiệp hóa, cải cách ruộng đất</p>
                        </div>
                        <div className="bg-purple-900/30 rounded-lg p-3">
                          <p className="text-white/90 font-medium">Chống chiến tranh phá hoại</p>
                          <p className="text-sm text-white/70">Phòng không, vừa sản xuất vừa chiến đấu</p>
                        </div>
                        <div className="bg-orange-900/30 rounded-lg p-3">
                          <p className="text-white/90 font-medium">Yêm trợ miền Nam</p>
                          <p className="text-sm text-white/70">Con đường Hồ Chí Minh, tiếp tế</p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h5 className="text-lg font-semibold text-yellow-300 mb-3">Miền Nam - Mặt trận chính</h5>
                      <div className="space-y-3">
                        <div className="bg-red-900/30 rounded-lg p-3">
                          <p className="text-white/90 font-medium">Chiến tranh du kích</p>
                          <p className="text-sm text-white/70">Biến mọi làng thành pháo đài</p>
                        </div>
                        <div className="bg-green-900/30 rounded-lg p-3">
                          <p className="text-white/90 font-medium">Đấu tranh chính trị</p>
                          <p className="text-sm text-white/70">Vận động quần chúng, binh vận</p>
                        </div>
                        <div className="bg-yellow-900/30 rounded-lg p-3">
                          <p className="text-white/90 font-medium">Tổng công kích</p>
                          <p className="text-sm text-white/70">Tết Mậu Thân 1968, Xuân 1975</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-orange-900/50 rounded-xl p-6 border border-orange-400/50">
                <blockquote className="text-center">
                  <p className="text-xl text-yellow-200 italic mb-3">
                    "Giặc đến nhà đàn bà cũng đánh"
                  </p>
                  <footer className="text-yellow-400 font-semibold">— Chủ tịch Hồ Chí Minh</footer>
                </blockquote>
              </div>
            </section>

            {/* Nghệ thuật quân sự */}
            <section className="bg-gradient-to-r from-green-900/90 to-green-800/90 backdrop-blur-md rounded-2xl shadow-2xl p-8 border border-green-400/50">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mr-4 shadow-lg">
                  <span className="text-2xl">🏆</span>
                </div>
                <h3 className="text-3xl font-bold text-yellow-400">
                  Nghệ thuật Quân sự Việt Nam
                </h3>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-black/40 rounded-xl p-6 border border-green-400/30">
                  <div className="text-center mb-4">
                    <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-white text-xl">🎯</span>
                    </div>
                    <h4 className="text-lg font-semibold text-green-300">Chiến thuật du kích</h4>
                  </div>
                  <ul className="space-y-2 text-sm text-white/80">
                    <li>• Đánh du kích, đánh vận động</li>
                    <li>• Địch tiến ta lùi, địch lùi ta tiến</li>
                    <li>• Tập trung đánh tản, tản đánh tập trung</li>
                    <li>• Kết hợp chính quy với du kích</li>
                  </ul>
                </div>

                <div className="bg-black/40 rounded-xl p-6 border border-green-400/30">
                  <div className="text-center mb-4">
                    <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-white text-xl">🤝</span>
                    </div>
                    <h4 className="text-lg font-semibold text-orange-300">Phối hợp binh chủng</h4>
                  </div>
                  <ul className="space-y-2 text-sm text-white/80">
                    <li>• Bộ binh, pháo binh, công binh</li>
                    <li>• Phòng không, hải quân, không quân</li>
                    <li>• Dân quân, tự vệ, thanh niên</li>
                    <li>• Kết hợp chặt chẽ, hiệu quả cao</li>
                  </ul>
                </div>

                <div className="bg-black/40 rounded-xl p-6 border border-green-400/30">
                  <div className="text-center mb-4">
                    <div className="w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-white text-xl">⚡</span>
                    </div>
                    <h4 className="text-lg font-semibold text-yellow-300">Chiến dịch lớn</h4>
                  </div>
                  <ul className="space-y-2 text-sm text-white/80">
                    <li>• Tập trung lực lượng vượt trội</li>
                    <li>• Đánh nhanh, thắng nhanh</li>
                    <li>• Chiến dịch Điện Biên Phủ</li>
                    <li>• Chiến dịch Hồ Chí Minh</li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 bg-gradient-to-r from-red-800/50 to-green-700/50 rounded-xl p-6 border border-yellow-400/50">
                <h4 className="text-xl font-semibold text-yellow-300 mb-4 text-center">
                  🏆 Những chiến thắng lịch sử
                </h4>
                <div className="grid md:grid-cols-4 gap-4 text-center">
                  <div className="bg-black/30 rounded-lg p-4">
                    <div className="text-2xl mb-2">🏔️</div>
                    <p className="text-white/90 font-medium">Điện Biên Phủ</p>
                    <p className="text-xs text-white/70">7/5/1954</p>
                  </div>
                  <div className="bg-black/30 rounded-lg p-4">
                    <div className="text-2xl mb-2">🏙️</div>
                    <p className="text-white/90 font-medium">Tết Mậu Thân</p>
                    <p className="text-xs text-white/70">1968</p>
                  </div>
                  <div className="bg-black/30 rounded-lg p-4">
                    <div className="text-2xl mb-2">✈️</div>
                    <p className="text-white/90 font-medium">Hà Nội - Điện Biên Phủ trên không</p>
                    <p className="text-xs text-white/70">12/1972</p>
                  </div>
                  <div className="bg-black/30 rounded-lg p-4">
                    <div className="text-2xl mb-2">🏛️</div>
                    <p className="text-white/90 font-medium">Giải phóng Sài Gòn</p>
                    <p className="text-xs text-white/70">30/4/1975</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Ý nghĩa và bài học */}
            <section className="bg-gradient-to-r from-purple-900/90 to-purple-800/90 backdrop-blur-md rounded-2xl shadow-2xl p-8 border border-purple-400/50">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mr-4 shadow-lg">
                  <span className="text-2xl">📚</span>
                </div>
                <h3 className="text-3xl font-bold text-yellow-400">
                  Ý nghĩa và Bài học Kháng chiến
                </h3>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-black/40 rounded-xl p-6 border border-purple-400/30">
                  <h4 className="text-xl font-semibold text-purple-300 mb-4 flex items-center">
                    🌟 Ý nghĩa to lớn
                  </h4>
                  <ul className="space-y-3 text-white/90">
                    <li className="flex items-start">
                      <span className="text-yellow-400 mr-2 text-lg">•</span>
                      Giải phóng hoàn toàn dân tộc
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-400 mr-2 text-lg">•</span>
                      Thống nhất đất nước
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-400 mr-2 text-lg">•</span>
                      Cổ vũ phong trào giải phóng thế giới
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-400 mr-2 text-lg">•</span>
                      Khẳng định sức mạnh con người Việt Nam
                    </li>
                  </ul>
                </div>

                <div className="bg-black/40 rounded-xl p-6 border border-purple-400/30">
                  <h4 className="text-xl font-semibold text-purple-300 mb-4 flex items-center">
                    💡 Bài học quý báu
                  </h4>
                  <ul className="space-y-3 text-white/90">
                    <li className="flex items-start">
                      <span className="text-yellow-400 mr-2 text-lg">•</span>
                      Đoàn kết là sức mạnh vô địch
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-400 mr-2 text-lg">•</span>
                      Ý chí quyết tâm là yếu tố quyết định
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-400 mr-2 text-lg">•</span>
                      Kết hợp sức mạnh dân tộc với thời đại
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-400 mr-2 text-lg">•</span>
                      Nghệ thuật lãnh đạo của Đảng
                    </li>
                  </ul>
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
                className="px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors backdrop-blur-md">
                🎮 Trò chơi Chiến Sĩ Kháng Chiến
              </button>
              <button
                className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors backdrop-blur-md">
                🏆 Bảo tàng Chiến tranh
              </button>
            </div>
            
            <div className="bg-gradient-to-r from-orange-900/80 to-red-800/80 backdrop-blur-md rounded-xl p-8 border border-yellow-400/50">
              <blockquote className="text-center">
                <p className="text-2xl text-yellow-200 italic mb-4">
                  "Tất cả vì tiền tuyến, tất cả để chiến thắng"<br />
                  "Quyết chiến, quyết thắng"
                </p>
                <footer className="text-yellow-400 font-bold text-lg">— Khẩu hiệu kháng chiến</footer>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}