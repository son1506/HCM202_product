export default function CulturePage() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-fixed relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.4)), url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1920&h=1080&fit=crop')`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      {/* Cultural overlay with Vietnamese traditional colors */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-700/40 via-transparent to-blue-600/30"></div>
      
      {/* Cultural elements effects */}
      <div className="absolute top-16 right-16 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-32 left-20 w-56 h-56 bg-blue-500/25 rounded-full blur-2xl animate-bounce"></div>
      <div className="absolute top-1/3 left-1/2 w-40 h-40 bg-yellow-500/15 rounded-full blur-xl animate-pulse"></div>

      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-purple-600 rounded-full mb-6 shadow-2xl">
              <span className="text-4xl">📚</span>
            </div>
            <h1 className="text-5xl font-bold text-white drop-shadow-2xl mb-4">
              TƯ TƯỞNG HỒ CHÍ MINH VỀ
            </h1>
            <h2 className="text-4xl font-bold text-yellow-400 drop-shadow-xl mb-4">
              VĂN HÓA VÀ CON NGƯỜI
            </h2>
            <div className="bg-gradient-to-r from-purple-600/80 to-blue-500/80 backdrop-blur-md rounded-xl p-4 max-w-3xl mx-auto border border-yellow-400/50">
              <p className="text-2xl text-white font-medium italic">
                "Con người là yếu tố quyết định mọi thành công của cách mạng"
              </p>
            </div>
          </div>

          {/* Main Content */}
          <div className="space-y-10">
            
            {/* Tư tưởng về con người */}
            <section className="bg-gradient-to-r from-purple-900/90 to-purple-800/90 backdrop-blur-md rounded-2xl shadow-2xl p-8 border border-purple-400/50">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mr-4 shadow-lg">
                  <span className="text-2xl">👥</span>
                </div>
                <h3 className="text-3xl font-bold text-yellow-400">
                  Tư tưởng Hồ Chí Minh về Con người
                </h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="bg-black/40 rounded-xl p-6 border border-yellow-400/30">
                    <h4 className="text-xl font-semibold text-yellow-300 mb-4 flex items-center">
                      🌟 Con người là yếu tố quyết định
                    </h4>
                    <ul className="space-y-3 text-white/90">
                      <li className="flex items-start">
                        <span className="text-purple-400 mr-2 text-lg">•</span>
                        Tất cả vì con người, tất cả do con người
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-400 mr-2 text-lg">•</span>
                        Con người quyết định thành bại sự nghiệp
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-400 mr-2 text-lg">•</span>
                        Không có con người giỏi, việc gì cũng khó làm
                      </li>
                    </ul>
                  </div>

                  <div className="bg-black/40 rounded-xl p-6 border border-yellow-400/30">
                    <h4 className="text-xl font-semibold text-yellow-300 mb-4 flex items-center">
                      ⚖️ Đức và Tài trong con người
                    </h4>
                    <ul className="space-y-3 text-white/90">
                      <li className="flex items-start">
                        <span className="text-purple-400 mr-2 text-lg">•</span>
                        Đức là gốc, tài là ngọn
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-400 mr-2 text-lg">•</span>
                        Có đức mà không có tài thì khó làm việc
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-400 mr-2 text-lg">•</span>
                        Có tài mà không có đức thì không thể tin được
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-black/40 rounded-xl p-6 border border-yellow-400/30">
                    <h4 className="text-xl font-semibold text-yellow-300 mb-4 flex items-center">
                      🎯 Mục tiêu giáo dục con người
                    </h4>
                    <ul className="space-y-3 text-white/90">
                      <li className="flex items-start">
                        <span className="text-purple-400 mr-2 text-lg">•</span>
                        Làm người trước khi làm việc
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-400 mr-2 text-lg">•</span>
                        Phát triển toàn diện nhân cách
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-400 mr-2 text-lg">•</span>
                        Xây dựng con người mới xã hội chủ nghĩa
                      </li>
                    </ul>
                  </div>

                  <div className="bg-black/40 rounded-xl p-6 border border-yellow-400/30">
                    <h4 className="text-xl font-semibold text-yellow-300 mb-4 flex items-center">
                      💪 Phẩm chất con người cách mạng
                    </h4>
                    <ul className="space-y-3 text-white/90">
                      <li className="flex items-start">
                        <span className="text-purple-400 mr-2 text-lg">•</span>
                        Cần, kiệm, liêm, chính
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-400 mr-2 text-lg">•</span>
                        Chí công vô tư
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-400 mr-2 text-lg">•</span>
                        Yêu nước, yêu dân
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-yellow-900/40 rounded-xl p-6 border border-yellow-500/50">
                <blockquote className="text-center">
                  <p className="text-xl text-yellow-200 italic mb-3">
                    "Cán bộ là gốc của mọi công việc"
                  </p>
                  <footer className="text-yellow-400 font-semibold">— Chủ tịch Hồ Chí Minh</footer>
                </blockquote>
              </div>
            </section>

            {/* Tư tưởng về văn hóa */}
            <section className="bg-gradient-to-r from-blue-900/90 to-blue-800/90 backdrop-blur-md rounded-2xl shadow-2xl p-8 border border-blue-400/50">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mr-4 shadow-lg">
                  <span className="text-2xl">🎭</span>
                </div>
                <h3 className="text-3xl font-bold text-yellow-400">
                  Tư tưởng Hồ Chí Minh về Văn hóa
                </h3>
              </div>

              <div className="space-y-8">
                {/* Đặc trưng văn hóa Việt Nam */}
                <div className="bg-black/40 rounded-xl p-6 border border-blue-400/30">
                  <h4 className="text-2xl font-semibold text-blue-300 mb-4 flex items-center">
                    🇻🇳 Văn hóa Việt Nam - Dân tộc, Khoa học, Đại chúng
                  </h4>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-red-900/40 rounded-lg p-4">
                      <h5 className="font-semibold text-red-300 mb-2 flex items-center">
                        🏮 Dân tộc
                      </h5>
                      <ul className="text-sm text-white/80 space-y-1">
                        <li>• Mang bản sắc dân tộc</li>
                        <li>• Kế thừa truyền thống tốt đẹp</li>
                        <li>• Giữ gìn tinh thần yêu nước</li>
                        <li>• Phát huy giá trị văn hóa truyền thống</li>
                      </ul>
                    </div>
                    <div className="bg-green-900/40 rounded-lg p-4">
                      <h5 className="font-semibold text-green-300 mb-2 flex items-center">
                        🔬 Khoa học
                      </h5>
                      <ul className="text-sm text-white/80 space-y-1">
                        <li>• Dựa trên cơ sở khoa học</li>
                        <li>• Chống mê tín dị đoan</li>
                        <li>• Ứng dụng tiến bộ khoa học</li>
                        <li>• Học tập văn hóa tiến bộ</li>
                      </ul>
                    </div>
                    <div className="bg-blue-900/40 rounded-lg p-4">
                      <h5 className="font-semibold text-blue-300 mb-2 flex items-center">
                        👥 Đại chúng
                      </h5>
                      <ul className="text-sm text-white/80 space-y-1">
                        <li>• Của nhân dân, do nhân dân</li>
                        <li>• Phục vụ quần chúng rộng rãi</li>
                        <li>• Dễ hiểu, gần gũi</li>
                        <li>• Nâng cao dân trí</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Vai trò của văn hóa */}
                <div className="bg-black/40 rounded-xl p-6 border border-purple-400/30">
                  <h4 className="text-2xl font-semibold text-purple-300 mb-4 flex items-center">
                    🎯 Vai trò của Văn hóa trong cách mạng
                  </h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="text-lg font-semibold text-yellow-300 mb-3">Trong đấu tranh giải phóng</h5>
                      <div className="space-y-3">
                        <div className="bg-red-900/30 rounded-lg p-3">
                          <p className="text-white/90 font-medium">Động viên tinh thần</p>
                          <p className="text-sm text-white/70">Khơi dậy lòng yêu nước, ý chí chiến đấu</p>
                        </div>
                        <div className="bg-orange-900/30 rounded-lg p-3">
                          <p className="text-white/90 font-medium">Tuyên truyền cách mạng</p>
                          <p className="text-sm text-white/70">Giáo dục chính trị, nâng cao nhận thức</p>
                        </div>
                        <div className="bg-yellow-900/30 rounded-lg p-3">
                          <p className="text-white/90 font-medium">Đoàn kết dân tộc</p>
                          <p className="text-sm text-white/70">Gắn kết các tầng lớp nhân dân</p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h5 className="text-lg font-semibold text-yellow-300 mb-3">Trong xây dựng đất nước</h5>
                      <div className="space-y-3">
                        <div className="bg-blue-900/30 rounded-lg p-3">
                          <p className="text-white/90 font-medium">Giáo dục con người mới</p>
                          <p className="text-sm text-white/70">Hình thành nhân cách xã hội chủ nghĩa</p>
                        </div>
                        <div className="bg-green-900/30 rounded-lg p-3">
                          <p className="text-white/90 font-medium">Phát triển khoa học - công nghệ</p>
                          <p className="text-sm text-white/70">Nâng cao trình độ dân trí</p>
                        </div>
                        <div className="bg-purple-900/30 rounded-lg p-3">
                          <p className="text-white/90 font-medium">Xây dựng nền tảng tinh thần</p>
                          <p className="text-sm text-white/70">Tạo động lực phát triển kinh tế - xã hội</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-blue-900/50 rounded-xl p-6 border border-blue-400/50">
                <blockquote className="text-center">
                  <p className="text-xl text-yellow-200 italic mb-3">
                    "Văn là vành ngoài, võ là vành trong. Nếu không có văn thì võ không thể thắng được"
                  </p>
                  <footer className="text-yellow-400 font-semibold">— Chủ tịch Hồ Chí Minh</footer>
                </blockquote>
              </div>
            </section>

            {/* Giáo dục và phát triển con người */}
            <section className="bg-gradient-to-r from-green-900/90 to-green-800/90 backdrop-blur-md rounded-2xl shadow-2xl p-8 border border-green-400/50">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mr-4 shadow-lg">
                  <span className="text-2xl">🎓</span>
                </div>
                <h3 className="text-3xl font-bold text-yellow-400">
                  Giáo dục và Phát triển Con người
                </h3>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-black/40 rounded-xl p-6 border border-green-400/30">
                  <div className="text-center mb-4">
                    <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-white text-xl">📖</span>
                    </div>
                    <h4 className="text-lg font-semibold text-green-300">Giáo dục toàn diện</h4>
                  </div>
                  <ul className="space-y-2 text-sm text-white/80">
                    <li>• Giáo dục đức, trí, thể, mỹ</li>
                    <li>• Kết hợp lý thuyết với thực tiễn</li>
                    <li>• Học đi đôi với hành</li>
                    <li>• Giáo dục suốt đời</li>
                  </ul>
                </div>

                <div className="bg-black/40 rounded-xl p-6 border border-green-400/30">
                  <div className="text-center mb-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-white text-xl">🧠</span>
                    </div>
                    <h4 className="text-lg font-semibold text-blue-300">Phát triển trí tuệ</h4>
                  </div>
                  <ul className="space-y-2 text-sm text-white/80">
                    <li>• Chống nạn mù chữ</li>
                    <li>• Phổ cập giáo dục</li>
                    <li>• Học tập không ngừng</li>
                    <li>• Nâng cao trình độ chuyên môn</li>
                  </ul>
                </div>

                <div className="bg-black/40 rounded-xl p-6 border border-green-400/30">
                  <div className="text-center mb-4">
                    <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-white text-xl">❤️</span>
                    </div>
                    <h4 className="text-lg font-semibold text-purple-300">Rèn luyện đạo đức</h4>
                  </div>
                  <ul className="space-y-2 text-sm text-white/80">
                    <li>• Tu dư양 đạo đức cách mạng</li>
                    <li>• Yêu nước, yêu dân</li>
                    <li>• Chí công vô tư</li>
                    <li>• Đoàn kết, tương trợ</li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 bg-gradient-to-r from-green-800/50 to-blue-700/50 rounded-xl p-6 border border-yellow-400/50">
                <h4 className="text-xl font-semibold text-yellow-300 mb-4 text-center">
                  🏆 Mục tiêu cuối cùng của giáo dục
                </h4>
                <div className="grid md:grid-cols-4 gap-4 text-center">
                  <div className="bg-black/30 rounded-lg p-4">
                    <div className="text-2xl mb-2">👨‍🎓</div>
                    <p className="text-white/90 font-medium">Con người có văn hóa</p>
                    <p className="text-xs text-white/70">Hiểu biết rộng</p>
                  </div>
                  <div className="bg-black/30 rounded-lg p-4">
                    <div className="text-2xl mb-2">🎯</div>
                    <p className="text-white/90 font-medium">Con người có kỹ năng</p>
                    <p className="text-xs text-white/70">Làm việc giỏi</p>
                  </div>
                  <div className="bg-black/30 rounded-lg p-4">
                    <div className="text-2xl mb-2">💝</div>
                    <p className="text-white/90 font-medium">Con người có đạo đức</p>
                    <p className="text-xs text-white/70">Sống đẹp</p>
                  </div>
                  <div className="bg-black/30 rounded-lg p-4">
                    <div className="text-2xl mb-2">🌟</div>
                    <p className="text-white/90 font-medium">Con người cách mạng</p>
                    <p className="text-xs text-white/70">Toàn diện</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Ý nghĩa và vận dụng */}
            <section className="bg-gradient-to-r from-orange-900/90 to-orange-800/90 backdrop-blur-md rounded-2xl shadow-2xl p-8 border border-orange-400/50">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mr-4 shadow-lg">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="text-3xl font-bold text-yellow-400">
                  Ý nghĩa và Vận dụng hiện nay
                </h3>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-black/40 rounded-xl p-6 border border-orange-400/30">
                  <h4 className="text-xl font-semibold text-orange-300 mb-4 flex items-center">
                    ✨ Ý nghĩa to lớn
                  </h4>
                  <ul className="space-y-3 text-white/90">
                    <li className="flex items-start">
                      <span className="text-yellow-400 mr-2 text-lg">•</span>
                      Định hướng phát triển con người Việt Nam
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-400 mr-2 text-lg">•</span>
                      Xây dựng nền văn hóa tiên tiến
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-400 mr-2 text-lg">•</span>
                      Tạo động lực phát triển đất nước
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-400 mr-2 text-lg">•</span>
                      Khẳng định bản sắc dân tộc
                    </li>
                  </ul>
                </div>

                <div className="bg-black/40 rounded-xl p-6 border border-orange-400/30">
                  <h4 className="text-xl font-semibold text-orange-300 mb-4 flex items-center">
                    🎯 Vận dụng hiện nay
                  </h4>
                  <ul className="space-y-3 text-white/90">
                    <li className="flex items-start">
                      <span className="text-yellow-400 mr-2 text-lg">•</span>
                      Đổi mới giáo dục - đào tạo
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-400 mr-2 text-lg">•</span>
                      Xây dựng con người Việt Nam thời kỳ mới
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-400 mr-2 text-lg">•</span>
                      Phát triển văn hóa trong hội nhập
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-400 mr-2 text-lg">•</span>
                      Chống suy thoái về đạo đức
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 bg-gradient-to-r from-purple-800/50 to-blue-700/50 rounded-xl p-6 border border-yellow-400/50">
                <h4 className="text-xl font-semibold text-yellow-300 mb-4 text-center">
                  🎭 Nhiệm vụ trọng tâm hiện nay
                </h4>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="bg-black/30 rounded-lg p-4 mb-2">
                      <div className="text-2xl mb-2">📚</div>
                      <p className="text-white/90 font-medium">Giáo dục</p>
                      <p className="text-xs text-white/70">Nâng cao chất lượng toàn diện</p>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="bg-black/30 rounded-lg p-4 mb-2">
                      <div className="text-2xl mb-2">🏛️</div>
                      <p className="text-white/90 font-medium">Văn hóa</p>
                      <p className="text-xs text-white/70">Bảo tồn, phát huy bản sắc</p>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="bg-black/30 rounded-lg p-4 mb-2">
                      <div className="text-2xl mb-2">👥</div>
                      <p className="text-white/90 font-medium">Con người</p>
                      <p className="text-xs text-white/70">Phát triển toàn diện</p>
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
                className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors backdrop-blur-md">
                🎮 Trò chơi Chiến Sĩ Kháng Chiến
              </button>
              <button
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors backdrop-blur-md">
                📖 Tài liệu văn hóa
              </button>
            </div>
            
            <div className="bg-gradient-to-r from-purple-900/80 to-blue-800/80 backdrop-blur-md rounded-xl p-8 border border-yellow-400/50">
              <blockquote className="text-center">
                <p className="text-2xl text-yellow-200 italic mb-4">
                  "Muốn cây tốt thì phải tốt từ cội,<br />
                  muốn con hay thì phải hay từ khi còn trẻ"
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