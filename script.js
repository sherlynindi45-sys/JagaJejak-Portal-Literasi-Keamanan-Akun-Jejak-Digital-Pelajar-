/**
 * KONFIGURASI GOOGLE APPS SCRIPT
 * Ganti URL di bawah ini dengan URL Web App hasil deploy Google Apps Script Anda.
 * Jika masih dibiarkan default, website akan otomatis menjalankan Mode Simulasi Lokal
 * agar tetap bisa diuji saat presentasi tanpa error.
 */
const APPS_SCRIPT_URL = "PASTE_URL_WEB_APP_GOOGLE_APPS_SCRIPT_DI_SINI";

document.addEventListener("DOMContentLoaded", () => {
  // 1. Toggle Menu Responsif (Mobile)
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => navLinks.classList.remove("open"));
  });

  // 2. Sistem Tab Edukasi
  const tabButtons = document.querySelectorAll(".tab-btn");
  const tabPanels = document.querySelectorAll(".tab-panel");

  tabButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      tabButtons.forEach((b) => b.classList.remove("active"));
      tabPanels.forEach((p) => p.classList.remove("active"));

      btn.classList.add("active");
      const target = document.getElementById(btn.dataset.tab);
      if (target) target.classList.add("active");
    });
  });

  // 3. Simulasi Kalkulator Risiko Kebiasaan Akun
  const riskForm = document.getElementById("riskForm");
  const riskResult = document.getElementById("riskResult");

  riskForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const skor =
      Number(document.getElementById("q1").value) +
      Number(document.getElementById("q2").value) +
      Number(document.getElementById("q3").value) +
      Number(document.getElementById("q4").value) +
      Number(document.getElementById("q5").value);

    riskResult.classList.remove("hidden", "status-safe", "status-warn", "status-danger");

    if (skor <= 20) {
      riskResult.classList.add("status-safe");
      riskResult.innerHTML = `
        <strong>Skor Risiko: ${skor}/100 (Risiko Rendah — Aman)</strong><br/>
        Kebiasaan digitalmu sudah sangat baik! Pertahankan penggunaan password unik, 2FA aktif, dan kehati-hatian dalam membagikan data pribadi.
      `;
    } else if (skor <= 55) {
      riskResult.classList.add("status-warn");
      riskResult.innerHTML = `
        <strong>Skor Risiko: ${skor}/100 (Risiko Sedang — Perlu Perbaikan)</strong><br/>
        Kamu masih memiliki beberapa celah keamanan. Segera aktifkan 2FA di seluruh akun utama dan hindari memakai pola password yang mirip antaraplikasi.
      `;
    } else {
      riskResult.classList.add("status-danger");
      riskResult.innerHTML = `
        <strong>Skor Risiko: ${skor}/100 (Risiko Tinggi — Rentan Diretas)</strong><br/>
        Akunmu sangat rentan terkena pengambilalihan! Segera ganti password email utama, aktifkan 2FA, dan ikuti panduan pencegahan di bawah.
      `;
    }
  });

  // 4. Prototipe Analisis Pesan Mencurigakan (Simulasi AI)
  const aiInput = document.getElementById("aiInput");
  const analyzeBtn = document.getElementById("analyzeBtn");
  const aiResult = document.getElementById("aiResult");

  document.querySelectorAll(".btn-chip").forEach((chip) => {
    chip.addEventListener("click", () => {
      aiInput.value = chip.dataset.sample;
      aiResult.classList.add("hidden");
    });
  });

  analyzeBtn.addEventListener("click", () => {
    const teks = aiInput.value.trim();
    if (!teks) {
      alert("Silakan pilih contoh pesan atau ketik teks yang ingin dianalisis terlebih dahulu.");
      return;
    }

    const lower = teks.toLowerCase();
    const indikator = [];

    // Aturan heuristik terverifikasi untuk mendeteksi pola rekayasa sosial (social engineering)
    if (/(hadiah|gratis|diamond|voucher|menang|klaim|saldo)/.test(lower)) {
      indikator.push("Iming-iming hadiah/keuntungan instan tanpa proses resmi.");
    }
    if (/(blokir|nonaktif|ditangguhkan|hapus|pelanggaran|2 jam|24 jam|segera)/.test(lower)) {
      indikator.push("Tekanan waktu mendesak atau ancaman pemblokiran akun agar korban panik.");
    }
    if (/(http:\/\/|\.xyz|\.top|bit\.ly|tinyurl|login|kata sandi|password|otp|pin)/.test(lower)) {
      indikator.push("Memuat tautan tidak resmi/pemendek URL atau permintaan kredensial rahasia.");
    }

    aiResult.classList.remove("hidden", "status-safe", "status-warn", "status-danger");

    if (indikator.length >= 2) {
      aiResult.classList.add("status-danger");
      aiResult.innerHTML = `
        <strong>[Hasil Simulasi AI] Terindikasi Kuat Phishing / Penipuan (${indikator.length} Tanda Bahaya)</strong>
        <ul style="margin: 8px 0 8px 18px;">
          ${indikator.map((item) => `<li>${item}</li>`).join("")}
        </ul>
        <strong>Rekomendasi:</strong> Jangan klik tautan apa pun, jangan masukkan password/OTP, dan hapus pesan tersebut.
      `;
    } else if (indikator.length === 1) {
      aiResult.classList.add("status-warn");
      aiResult.innerHTML = `
        <strong>[Hasil Simulasi AI] Perlu Kewaspadaan (1 Indikator Ditemukan)</strong>
        <ul style="margin: 8px 0 8px 18px;">
          <li>${indikator[0]}</li>
        </ul>
        <strong>Rekomendasi:</strong> Verifikasi kebenaran pesan melalui saluran resmi sekolah atau aplikasi terkait sebelum bertindak.
      `;
    } else {
      aiResult.classList.add("status-safe");
      aiResult.innerHTML = `
        <strong>[Hasil Simulasi AI] Tidak Ditemukan Pola Phishing Umum</strong><br/>
        Pesan ini terlihat wajar dan tidak mengandung desakan kredensial maupun tautan mencurigakan. Tetap jaga kerahasiaan data pribadimu.
      `;
    }
  });

  // 5. Pengiriman Formulir ke Google Apps Script & Google Sheets
  const reportForm = document.getElementById("reportForm");
  const submitBtn = document.getElementById("submitBtn");
  const formStatus = document.getElementById("formStatus");

  reportForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const payload = {
      timestamp: new Date().toLocaleString("id-ID"),
      nama: document.getElementById("nama").value.trim(),
      kelas: document.getElementById("kelas").value,
      jenis: document.getElementById("jenis").value,
      urgensi: document.getElementById("urgensi").value,
      deskripsi: document.getElementById("deskripsi").value.trim(),
    };

    // Validasi keamanan dasar: cegah pengguna tanpa sengaja mengetik kata "password" atau angka OTP panjang
    if (/(password|kata sandi|otp)\s*[:=]/i.test(payload.deskripsi)) {
      formStatus.classList.remove("hidden", "status-safe", "status-warn");
      formStatus.classList.add("status-danger");
      formStatus.innerHTML =
        "<strong>Pengiriman Ditolak demi Keamanan:</strong> Terdeteksi pola kredensial/password pada deskripsi. Hapus informasi sensitif sebelum mengirim simulasi.";
      return;
    }

    submitBtn.disabled = true;
    submitBtn.textContent = "Mengirim data simulasi...";

    // Jika URL Apps Script belum dipasang, jalankan mode simulasi lokal agar demo tetap berjalan mulus
    if (APPS_SCRIPT_URL === "PASTE_URL_WEB_APP_GOOGLE_APPS_SCRIPT_DI_SINI") {
      setTimeout(() => {
        formStatus.classList.remove("hidden", "status-danger", "status-warn");
        formStatus.classList.add("status-safe");
        formStatus.innerHTML = `
          <strong>✓ Berhasil (Mode Simulasi Lokal):</strong> Data contoh atas nama <strong>${payload.nama}</strong> (${payload.jenis}) siap dicatat ke Google Sheets.<br/>
          <small>Catatan Teknis: Pasang URL Web App Google Apps Script di <code>script.js</code> untuk penyimpanan langsung ke spreadsheet.</small>
        `;
        reportForm.reset();
        submitBtn.disabled = false;
        submitBtn.textContent = "Kirim Laporan Simulatif ke Google Sheets";
      }, 600);
      return;
    }

    try {
      await fetch(APPS_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      formStatus.classList.remove("hidden", "status-danger", "status-warn");
      formStatus.classList.add("status-safe");
      formStatus.innerHTML = `
        <strong>✓ Laporan Simulatif Terkirim ke Google Sheets!</strong><br/>
        Terima kasih, <strong>${payload.nama}</strong>. Data simulasi kategori <em>${payload.jenis}</em> telah diteruskan ke Google Apps Script.
      `;
      reportForm.reset();
    } catch (error) {
      formStatus.classList.remove("hidden", "status-safe", "status-warn");
      formStatus.classList.add("status-danger");
      formStatus.innerHTML =
        "<strong>Gagal Terhubung ke Server:</strong> Periksa koneksi internet atau pengaturan izin akses Web App Google Apps Script.";
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = "Kirim Laporan Simulatif ke Google Sheets";
    }
  });
});
