export default function SocialismPage() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-fixed relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.4)), url('https://image.luatvietnam.vn/uploaded/twebp/images/original/2023/06/22/chu-nghia-xa-hoi-mang-den-nhung-gia-tri-tot-dep-cho-con-nguoi_2206171404.jpeg')`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      {/* Socialist revolution overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-700/40 via-transparent to-green-600/30"></div>
      
      {/* Revolutionary effects */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-red-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-40 right-32 w-48 h-48 bg-green-500/25 rounded-full blur-2xl animate-bounce"></div>

      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-red-600 rounded-full mb-6 shadow-2xl">
              <span className="text-4xl">⭐</span>
            </div>
            <h1 className="text-5xl font-bold text-white drop-shadow-2xl mb-4">
              TƯ TƯỞNG HỒ CHÍ MINH VỀ
            </h1>
            <h2 className="text-4xl font-bold text-yellow-400 drop-shadow-xl mb-4">
              CHỦ NGHĨA XÃ HỘI
            </h2>
            <div className="bg-gradient-to-r from-red-600/80 to-green-500/80 backdrop-blur-md rounded-xl p-4 max-w-3xl mx-auto border border-yellow-400/50">
              <p className="text-2xl text-white font-medium italic">
                "Xây dựng một xã hội không người bóc lột người"
              </p>
            </div>
          </div>

          {/* Main Content */}
          <div className="space-y-10">
            
            {/* Bản chất chủ nghĩa xã hội */}
            <section className="bg-gradient-to-r from-red-900/90 to-red-800/90 backdrop-blur-md rounded-2xl shadow-2xl p-8 border border-red-400/50">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mr-4 shadow-lg">
                  <span className="text-2xl">🏭</span>
                </div>
                <h3 className="text-3xl font-bold text-yellow-400">
                  Bản chất Chủ nghĩa Xã hội
                </h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="bg-black/40 rounded-xl p-6 border border-yellow-400/30">
                    <h4 className="text-xl font-semibold text-yellow-300 mb-4 flex items-center">
                      ⚖️ Xã hội công bằng
                    </h4>
                    <ul className="space-y-3 text-white/90">
                      <li className="flex items-start">
                        <span className="text-red-400 mr-2 text-lg">•</span>
                        Không người bóc lột người
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-400 mr-2 text-lg">•</span>
                        Phân phối theo lao động
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-400 mr-2 text-lg">•</span>
                        Xóa bỏ giai cấp đối kháng
                      </li>
                    </ul>
                  </div>

                  <div className="bg-black/40 rounded-xl p-6 border border-yellow-400/30">
                    <h4 className="text-xl font-semibold text-yellow-300 mb-4 flex items-center">
                      🏭 Kinh tế xã hội chủ nghĩa
                    </h4>
                    <ul className="space-y-3 text-white/90">
                      <li className="flex items-start">
                        <span className="text-red-400 mr-2 text-lg">•</span>
                        Sở hữu toàn dân về TSCN
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-400 mr-2 text-lg">•</span>
                        Kế hoạch hóa tập trung
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-400 mr-2 text-lg">•</span>
                        Phát triển lực lượng sản xuất
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-black/40 rounded-xl p-6 border border-yellow-400/30">
                    <h4 className="text-xl font-semibold text-yellow-300 mb-4 flex items-center">
                      🏛️ Chính trị xã hội chủ nghĩa
                    </h4>
                    <ul className="space-y-3 text-white/90">
                      <li className="flex items-start">
                        <span className="text-red-400 mr-2 text-lg">•</span>
                        Chuyên chính vô sản
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-400 mr-2 text-lg">•</span>
                        Dân chủ xã hội chủ nghĩa
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-400 mr-2 text-lg">•</span>
                        Đảng lãnh đạo toàn diện
                      </li>
                    </ul>
                  </div>

                  <div className="bg-black/40 rounded-xl p-6 border border-yellow-400/30">
                    <h4 className="text-xl font-semibold text-yellow-300 mb-4 flex items-center">
                      🎭 Văn hóa xã hội chủ nghĩa
                    </h4>
                    <ul className="space-y-3 text-white/90">
                      <li className="flex items-start">
                        <span className="text-red-400 mr-2 text-lg">•</span>
                        Dân tộc, khoa học, đại chúng
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-400 mr-2 text-lg">•</span>
                        Giáo dục toàn diện
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-400 mr-2 text-lg">•</span>
                        Con người mới xã hội chủ nghĩa
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Con đường xây dựng chủ nghĩa xã hội */}
            <section className="bg-gradient-to-r from-green-900/90 to-green-800/90 backdrop-blur-md rounded-2xl shadow-2xl p-8 border border-green-400/50">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mr-4 shadow-lg">
                  <span className="text-2xl">🛤️</span>
                </div>
                <h3 className="text-3xl font-bold text-yellow-400">
                  Con đường xây dựng Chủ nghĩa Xã hội ở Việt Nam
                </h3>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-black/40 rounded-xl p-6 border border-red-400/30">
                  <div className="text-center mb-4">
                    <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-white font-bold">1</span>
                    </div>
                    <h4 className="text-lg font-semibold text-red-300">Giai đoạn chuyển tiếp</h4>
                  </div>
                  <ul className="space-y-2 text-sm text-white/80">
                    <li>• Cải cách ruộng đất</li>
                    <li>• Hợp tác hóa nông nghiệp</li>
                    <li>• Cải tạo công thương nghiệp</li>
                    <li>• Cách mạng văn hóa</li>
                  </ul>
                </div>

                <div className="bg-black/40 rounded-xl p-6 border border-green-400/30">
                  <div className="text-center mb-4">
                    <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-white font-bold">2</span>
                    </div>
                    <h4 className="text-lg font-semibold text-green-300">Xây dựng CNXH</h4>
                  </div>
                  <ul className="space-y-2 text-sm text-white/80">
                    <li>• Công nghiệp hóa, hiện đại hóa</li>
                    <li>• Xây dựng nền kinh tế XHCN</li>
                    <li>• Hoàn thiện chế độ chính trị</li>
                    <li>• Phát triển văn hóa, giáo dục</li>
                  </ul>
                </div>

                <div className="bg-black/40 rounded-xl p-6 border border-yellow-400/30">
                  <div className="text-center mb-4">
                    <div className="w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-white font-bold">3</span>
                    </div>
                    <h4 className="text-lg font-semibold text-yellow-300">Hoàn thiện CNXH</h4>
                  </div>
                  <ul className="space-y-2 text-sm text-white/80">
                    <li>• Đất nước giàu mạnh</li>
                    <li>• Nhân dân ấm no, hạnh phúc</li>
                    <li>• Xã hội dân chủ, công bằng</li>
                    <li>• Tiến lên chủ nghĩa cộng sản</li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 bg-red-900/50 rounded-xl p-6 border border-red-400/50">
                <blockquote className="text-center">
                  <p className="text-xl text-yellow-200 italic mb-3">
                    "Chế độ xã hội chủ nghĩa là chế độ do nhân dân lao động làm chủ"
                  </p>
                  <footer className="text-yellow-400 font-semibold">— Chủ tịch Hồ Chí Minh</footer>
                </blockquote>
              </div>
            </section>

            {/* Các nhiệm vụ xây dựng CNXH */}
            <section className="bg-gradient-to-r from-blue-900/90 to-blue-800/90 backdrop-blur-md rounded-2xl shadow-2xl p-8 border border-blue-400/50">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mr-4 shadow-lg">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-3xl font-bold text-yellow-400">
                  Các nhiệm vụ xây dựng Chủ nghĩa Xã hội
                </h3>
              </div>

              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-black/40 rounded-xl p-6 border border-blue-400/30">
                    <h4 className="text-xl font-semibold text-blue-300 mb-4 flex items-center">
                      🏭 Nhiệm vụ kinh tế
                    </h4>
                    <div className="space-y-3">
                      <div className="bg-red-900/30 rounded-lg p-3">
                        <p className="text-white/90 font-medium">Công nghiệp hóa - Hiện đại hóa</p>
                        <p className="text-sm text-white/70">Phát triển công nghiệp nặng, nhẹ và nông nghiệp</p>
                      </div>
                      <div className="bg-green-900/30 rounded-lg p-3">
                        <p className="text-white/90 font-medium">Xây dựng kết cấu hạ tầng</p>
                        <p className="text-sm text-white/70">Giao thông, thủy lợi, điện lực, viễn thông</p>
                      </div>
                      <div className="bg-blue-900/30 rounded-lg p-3">
                        <p className="text-white/90 font-medium">Phát triển khoa học - công nghệ</p>
                        <p className="text-sm text-white/70">Ứng dụng tiến bộ khoa học vào sản xuất</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-black/40 rounded-xl p-6 border border-blue-400/30">
                    <h4 className="text-xl font-semibold text-blue-300 mb-4 flex items-center">
                      👥 Nhiệm vụ xã hội
                    </h4>
                    <div className="space-y-3">
                      <div className="bg-purple-900/30 rounded-lg p-3">
                        <p className="text-white/90 font-medium">Xóa đói giảm nghèo</p>
                        <p className="text-sm text-white/70">Nâng cao đời sống vật chất, tinh thần</p>
                      </div>
                      <div className="bg-orange-900/30 rounded-lg p-3">
                        <p className="text-white/90 font-medium">Giáo dục - Y tế - Văn hóa</p>
                        <p className="text-sm text-white/70">Phát triển toàn diện con người</p>
                      </div>
                      <div className="bg-yellow-900/30 rounded-lg p-3">
                        <p className="text-white/90 font-medium">Công bằng xã hội</p>
                        <p className="text-sm text-white/70">Bảo đảm quyền lợi của mọi tầng lớp</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-red-800/50 to-green-700/50 rounded-xl p-6 border border-yellow-400/50">
                  <h4 className="text-xl font-semibold text-yellow-300 mb-4 text-center">
                    🏆 Mục tiêu cuối cùng của Chủ nghĩa Xã hội
                  </h4>
                  <div className="grid md:grid-cols-4 gap-4 text-center">
                    <div className="bg-black/30 rounded-lg p-4">
                      <div className="text-2xl mb-2">💰</div>
                      <p className="text-white/90 font-medium">Dân giàu</p>
                      <p className="text-xs text-white/70">Ấm no, hạnh phúc</p>
                    </div>
                    <div className="bg-black/30 rounded-lg p-4">
                      <div className="text-2xl mb-2">🏛️</div>
                      <p className="text-white/90 font-medium">Nước mạnh</p>
                      <p className="text-xs text-white/70">Độc lập, chủ quyền</p>
                    </div>
                    <div className="bg-black/30 rounded-lg p-4">
                      <div className="text-2xl mb-2">⚖️</div>
                      <p className="text-white/90 font-medium">Xã hội công bằng</p>
                      <p className="text-xs text-white/70">Dân chủ, văn minh</p>
                    </div>
                    <div className="bg-black/30 rounded-lg p-4">
                      <div className="text-2xl mb-2">🌟</div>
                      <p className="text-white/90 font-medium">Tiến lên CNCS</p>
                      <p className="text-xs text-white/70">Lý tưởng cao đẹp</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Thành tựu và bài học */}
            <section className="bg-gradient-to-r from-purple-900/90 to-purple-800/90 backdrop-blur-md rounded-2xl shadow-2xl p-8 border border-purple-400/50">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mr-4 shadow-lg">
                  <span className="text-2xl">🏆</span>
                </div>
                <h3 className="text-3xl font-bold text-yellow-400">
                  Thành tựu và Bài học
                </h3>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-black/40 rounded-xl p-6 border border-purple-400/30">
                  <h4 className="text-xl font-semibold text-purple-300 mb-4 flex items-center">
                    ✨ Thành tựu to lớn
                  </h4>
                  <ul className="space-y-3 text-white/90">
                    <li className="flex items-start">
                      <span className="text-yellow-400 mr-2 text-lg">•</span>
                      Giải phóng hoàn toàn đất nước
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-400 mr-2 text-lg">•</span>
                      Xây dựng nền kinh tế độc lập
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-400 mr-2 text-lg">•</span>
                      Phát triển văn hóa, giáo dục
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-400 mr-2 text-lg">•</span>
                      Nâng cao đời sống nhân dân
                    </li>
                  </ul>
                </div>

                <div className="bg-black/40 rounded-xl p-6 border border-purple-400/30">
                  <h4 className="text-xl font-semibold text-purple-300 mb-4 flex items-center">
                    📚 Bài học kinh nghiệm
                  </h4>
                  <ul className="space-y-3 text-white/90">
                    <li className="flex items-start">
                      <span className="text-yellow-400 mr-2 text-lg">•</span>
                      Phải đi con đường riêng phù hợp
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-400 mr-2 text-lg">•</span>
                      Kết hợp độc lập với hội nhập
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-400 mr-2 text-lg">•</span>
                      Đổi mới tư duy và cơ chế
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-400 mr-2 text-lg">•</span>
                      Lấy nhân dân làm gốc
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
                className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors backdrop-blur-md">
                🎮 Trò chơi Chiến Sĩ Kháng Chiến
              </button>
              <button
                className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors backdrop-blur-md">
                📊 Thống kê phát triển
              </button>
            </div>
            
            <div className="bg-gradient-to-r from-red-900/80 to-green-800/80 backdrop-blur-md rounded-xl p-8 border border-yellow-400/50">
              <blockquote className="text-center">
                <p className="text-2xl text-yellow-200 italic mb-4">
                  "Mục đích của chúng ta là xây dựng một xã hội không người bóc lột người,<br />
                  một xã hội ấm no, tự do, hạnh phúc, tất cả mọi người đều có việc làm"
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