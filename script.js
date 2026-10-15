
document.addEventListener("DOMContentLoaded", function () {
    const startButton = document.getElementById("startButton");
    const backButton = document.getElementById("backButton");
    const hero = document.getElementById("beranda");
    const materi = document.getElementById("materi");

    // Tombol mulai belajar
    if (startButton && hero && materi) {
        startButton.addEventListener("click", function () {
            hero.hidden = true;
            materi.hidden = false;

            // Kembali ke bagian atas materi
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

            // Animasi masuk untuk setiap soal
            const soalCards = document.querySelectorAll(".soal-card");

            soalCards.forEach(function (card, index) {
                card.style.animation = "none";
                card.offsetHeight;

                card.style.animation =
                    `fadeInUp 0.6s ease ${index * 0.12}s both`;
            });

            // Render ulang rumus matematika jika MathJax tersedia
            if (window.MathJax && window.MathJax.typesetPromise) {
                window.MathJax.typesetPromise([materi]).catch(function (error) {
                    console.error("Rumus gagal dirender:", error);
                });
            }
        });
    }

    // Tombol kembali ke halaman awal
    if (backButton && hero && materi) {
        backButton.addEventListener("click", function () {
            materi.hidden = true;
            hero.hidden = false;

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }
});
