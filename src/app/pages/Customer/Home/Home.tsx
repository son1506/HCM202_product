export default function Home() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-fixed relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(255,255,255,0.85)), url('https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Ho_Chi_Minh_-_1946_Portrait.jpg/500px-Ho_Chi_Minh_-_1946_Portrait.jpg')`,
        backgroundPosition: "center 20%",
        backgroundSize: "cover",
      }}
    >
      {/* Animated overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 via-yellow-500/10 to-transparent animate-pulse"></div>

      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-red-600/10 rounded-full blur-xl animate-bounce"></div>
      <div className="absolute bottom-20 right-20 w-24 h-24 bg-yellow-500/15 rounded-full blur-lg animate-pulse"></div>

      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-center mb-8 text-gray-800 drop-shadow-2xl bg-gradient-to-r from-red-700 to-yellow-600 bg-clip-text text-transparent animate-fade-in">
            Tư Tưởng Hồ Chí Minh
          </h1>

          <div className="space-y-8">
            {/* Chương 4 */}
            <section className="bg-white/90 backdrop-blur-md rounded-xl shadow-2xl p-8 border border-white/20 hover:shadow-3xl transition-all duration-500 transform hover:scale-[1.02]">
              <h2 className="text-3xl font-semibold mb-6 text-gray-800 border-b-2 border-red-500 pb-2">
                Chương 4: Tư tưởng Hồ Chí Minh về Đảng Cộng sản Việt Nam và Nhà nước của dân, do dân, vì dân
              </h2>

              <div className="space-y-8">
                {/* Mục 4.2 */}
                <div className="bg-gradient-to-r from-red-50 to-yellow-50 p-6 rounded-lg border-l-4 border-red-500">
                  <h3 className="text-xl font-medium mb-4 text-red-800">
                    4.2. Tư tưởng Hồ Chí Minh về Nhà nước của dân, do dân, vì dân
                  </h3>
                  <p className="text-gray-700 mb-2 font-medium">- Nhà nước trong sạch, công minh</p>
                </div>

                {/* Mục 4.3 */}
                <div className="bg-gradient-to-r from-yellow-50 to-red-50 p-6 rounded-lg border-l-4 border-yellow-500">
                  <h3 className="text-xl font-medium mb-4 text-yellow-800">
                    4.3. Vận dụng tư tưởng Hồ Chí Minh vào công tác xây dựng Đảng và xây dựng nhà nước
                  </h3>

                  <div className="ml-4 bg-white/50 p-4 rounded-lg mb-4">
                    <h4 className="text-lg font-semibold mb-3 text-red-700">4.3.1. Xây dựng Đảng thật sự trong sạch, vững mạnh</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-3">
                      <li className="hover:text-red-600 transition-colors">Tăng cường công tác giáo dục chính trị tư tưởng</li>
                      <li className="hover:text-red-600 transition-colors">Nâng cao năng lực lãnh đạo và sức chiến đấu của Đảng</li>
                      <li className="hover:text-red-600 transition-colors">Xây dựng đội ngũ cán bộ, đảng viên có phẩm chất và năng lực tốt</li>
                    </ul>
                  </div>

                  <div className="ml-4 bg-white/50 p-4 rounded-lg">
                    <h4 className="text-lg font-semibold mb-3 text-yellow-700">
                      4.3.3. Phòng, chống tham nhũng góp phần củng cố niềm tin của nhân dân vào chế độ và vào Đảng
                    </h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-3">
                      <li className="hover:text-yellow-600 transition-colors">Tăng cường công tác kiểm tra, giám sát</li>
                      <li className="hover:text-yellow-600 transition-colors">Thực hiện nghiêm túc các quy định về phòng chống tham nhũng</li>
                      <li className="hover:text-yellow-600 transition-colors">Phát huy vai trò giám sát của nhân dân và báo chí</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <div className="text-center mt-8">
              <p className="text-sm text-gray-600 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full inline-block shadow-lg">
                © {new Date().getFullYear()} - Tư tưởng Hồ Chí Minh
              </p>

              {/* Button to open the standalone game HTML */}
              <div className="mt-4">
                <button
                  type="button"
                  onClick={() => { window.location.href = '/src/app/pages/Customer/Home/game.html'; }}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-full shadow hover:bg-red-700 transition"
                  aria-label="Mở trò chơi Chiến Sĩ Kháng Chiến">
                  🎮 Chơi ngay
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Styles moved to global CSS: src/app/styles/override.css */}
    </div>
  );
}