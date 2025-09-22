export default function PartyAndStatePage() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-fixed relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.4)), url('https://thaitrien.com/wp-content/uploads/2025/02/Thaitrien-Hinhnen3-2-hinh14.png')`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      {/* War-themed overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-800/30 via-transparent to-yellow-600/20"></div>
      
      {/* Smoke effects */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gray-400/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-48 h-48 bg-red-600/15 rounded-full blur-2xl animate-bounce"></div>

      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-white drop-shadow-2xl mb-4">
              TƯ TƯỞNG HỒ CHÍ MINH VỀ
            </h1>
            <h2 className="text-4xl font-bold text-yellow-400 drop-shadow-xl">
              ĐẢNG CỘNG SẢN VIỆT NAM VÀ NHÀ NƯỚC
            </h2>
            <p className="text-xl text-white/90 mt-4 italic">
              "Đảng ta là đảng của giai cấp công nhân, của nhân dân lao động"
            </p>
          </div>

          {/* Main Content */}
          <div className="space-y-10">
            
            {/* Section 4.1 */}
            <section className="bg-gradient-to-r from-red-900/80 to-red-800/80 backdrop-blur-md rounded-2xl shadow-2xl p-8 border border-red-500/50">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white text-2xl font-bold">1</span>
                </div>
                <h3 className="text-3xl font-bold text-yellow-400">
                  Tư tưởng Hồ Chí Minh về Đảng Cộng sản Việt Nam
                </h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-black/30 rounded-xl p-6 border border-red-400/30">
                  <h4 className="text-xl font-semibold text-red-300 mb-4 flex items-center">
                    🏛️ Bản chất của Đảng
                  </h4>
                  <ul className="space-y-3 text-white/90">
                    <li className="flex items-start">
                      <span className="text-yellow-400 mr-2">•</span>
                      Đảng của giai cấp công nhân
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-400 mr-2">•</span>
                      Đại diện cho lợi ích của nhân dân
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-400 mr-2">•</span>
                      Lãnh đạo cách mạng Việt Nam
                    </li>
                  </ul>
                </div>
                
                <div className="bg-black/30 rounded-xl p-6 border border-red-400/30">
                  <h4 className="text-xl font-semibold text-red-300 mb-4 flex items-center">
                    ⚔️ Vai trò lãnh đạo
                  </h4>
                  <ul className="space-y-3 text-white/90">
                    <li className="flex items-start">
                      <span className="text-yellow-400 mr-2">•</span>
                      Lãnh đạo toàn diện cách mạng
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-400 mr-2">•</span>
                      Xây dựng và bảo vệ Tổ quốc
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-400 mr-2">•</span>
                      Phát triển kinh tế - xã hội
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-6 bg-yellow-900/40 rounded-xl p-6 border border-yellow-500/50">
                <blockquote className="text-center">
                  <p className="text-lg text-yellow-200 italic mb-2">
                    "Đảng ta muốn làm cho Tổ quốc được độc lập, dân tộc được giải phóng, nhân dân được hạnh phúc"
                  </p>
                  <footer className="text-yellow-400 font-semibold">— Chủ tịch Hồ Chí Minh</footer>
                </blockquote>
              </div>
            </section>

            {/* Section 4.2 */}
            <section className="bg-gradient-to-r from-yellow-900/80 to-yellow-800/80 backdrop-blur-md rounded-2xl shadow-2xl p-8 border border-yellow-500/50">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white text-2xl font-bold">2</span>
                </div>
                <h3 className="text-3xl font-bold text-red-400">
                  Nhà nước của dân, do dân, vì dân
                </h3>
              </div>

              <div className="space-y-6">
                {/* Nhà nước của dân */}
                <div className="bg-black/30 rounded-xl p-6 border border-yellow-400/30">
                  <h4 className="text-2xl font-semibold text-yellow-300 mb-4 flex items-center">
                    🇻🇳 Nhà nước của dân
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-white/90 mb-3">Dân là chủ thể tối cao của quyền lực nhà nước:</p>
                      <ul className="space-y-2 text-white/80">
                        <li>• Nhân dân quyết định mọi vấn đề trọng đại</li>
                        <li>• Thực hiện quyền lực qua Quốc hội, HĐND</li>
                        <li>• Có quyền giám sát bộ máy nhà nước</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-white/90 mb-3">Nhà nước phải xuất phát từ lợi ích nhân dân:</p>
                      <ul className="space-y-2 text-white/80">
                        <li>• Do nhân dân lập nên</li>
                        <li>• Phục vụ lợi ích nhân dân</li>
                        <li>• "Có lợi cho dân phải hết sức làm"</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Nhà nước trong sạch, vững mạnh */}
                <div className="bg-black/30 rounded-xl p-6 border border-yellow-400/30">
                  <h4 className="text-2xl font-semibold text-yellow-300 mb-4 flex items-center">
                    ⚖️ Nhà nước trong sạch, vững mạnh
                  </h4>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-red-900/40 rounded-lg p-4">
                      <h5 className="font-semibold text-red-300 mb-2">Trong sạch</h5>
                      <ul className="text-sm text-white/80 space-y-1">
                        <li>• Không tham nhũng</li>
                        <li>• Không đặc quyền</li>
                        <li>• Cần kiệm liêm chính</li>
                        <li>• Chống quan liêu</li>
                      </ul>
                    </div>
                    <div className="bg-green-900/40 rounded-lg p-4">
                      <h5 className="font-semibold text-green-300 mb-2">Vững mạnh</h5>
                      <ul className="text-sm text-white/80 space-y-1">
                        <li>• Hiệu lực cao</li>
                        <li>• Quản lý bằng pháp luật</li>
                        <li>• Tổ chức chặt chẽ</li>
                        <li>• Bảo đảm ổn định</li>
                      </ul>
                    </div>
                    <div className="bg-blue-900/40 rounded-lg p-4">
                      <h5 className="font-semibold text-blue-300 mb-2">Ý nghĩa</h5>
                      <ul className="text-sm text-white/80 space-y-1">
                        <li>• Phát triển bền vững</li>
                        <li>• Củng cố niềm tin</li>
                        <li>• Ngăn suy thoái</li>
                        <li>• Bảo vệ chế độ</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 4.3 */}
            <section className="bg-gradient-to-r from-green-900/80 to-green-800/80 backdrop-blur-md rounded-2xl shadow-2xl p-8 border border-green-500/50">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white text-2xl font-bold">3</span>
                </div>
                <h3 className="text-3xl font-bold text-yellow-400">
                  Vận dụng vào xây dựng Đảng và Nhà nước
                </h3>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-black/30 rounded-xl p-6 border border-green-400/30">
                  <h4 className="text-xl font-semibold text-green-300 mb-4 flex items-center">
                    🛡️ Xây dựng Đảng trong sạch, vững mạnh
                  </h4>
                  <ul className="space-y-3 text-white/90">
                    <li className="flex items-start">
                      <span className="text-yellow-400 mr-2">•</span>
                      Nâng cao năng lực lãnh đạo
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-400 mr-2">•</span>
                      Tăng cường tự phê bình và phê bình
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-400 mr-2">•</span>
                      Chống chủ nghĩa cá nhân
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-400 mr-2">•</span>
                      Xây dựng đội ngũ cán bộ gương mẫu
                    </li>
                  </ul>
                </div>

                <div className="bg-black/30 rounded-xl p-6 border border-green-400/30">
                  <h4 className="text-xl font-semibold text-green-300 mb-4 flex items-center">
                    ⚖️ Phòng chống tham nhũng
                  </h4>
                  <ul className="space-y-3 text-white/90">
                    <li className="flex items-start">
                      <span className="text-yellow-400 mr-2">•</span>
                      Tham nhũng là "giặc nội xâm"
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-400 mr-2">•</span>
                      Xây dựng đội ngũ cán bộ liêm chính
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-400 mr-2">•</span>
                      Xử lý nghiêm minh, không vùng cấm
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-400 mr-2">•</span>
                      Phát huy vai trò giám sát nhân dân
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 bg-red-900/40 rounded-xl p-6 border border-red-500/50">
                <h4 className="text-lg font-semibold text-red-300 mb-3">Ý nghĩa thực tiễn:</h4>
                <div className="grid md:grid-cols-3 gap-4 text-sm text-white/90">
                  <div>• Củng cố niềm tin nhân dân</div>
                  <div>• Tạo môi trường công bằng, minh bạch</div>
                  <div>• Bảo vệ uy tín, vai trò Đảng</div>
                </div>
              </div>
            </section>

          </div>

          {/* Navigation and Action Buttons */}
          <div className="mt-16 text-center space-y-6">
            <div className="flex flex-wrap gap-4 justify-center">
              <button
                onClick={() => window.history.back()}
                className="px-6 py-3 bg-gray-700/80 text-white rounded-lg hover:bg-gray-600 transition-colors">
                ← Quay về
              </button>
              <button
                onClick={() => { window.location.href = '/game.html'; }}
                className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
                🎮 Trò chơi Chiến Sĩ Kháng Chiến
              </button>
              <button
                className="px-6 py-3 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors">
                📚 Tài liệu tham khảo
              </button>
            </div>
            
            <div className="bg-black/50 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <blockquote className="text-center">
                <p className="text-xl text-yellow-300 italic mb-3">
                  "Cán bộ là gốc của mọi công việc"
                </p>
                <footer className="text-white font-semibold">— Chủ tịch Hồ Chí Minh</footer>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}