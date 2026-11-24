# 🛡️ JagaJejak — Portal Literasi Keamanan Akun & Jejak Digital Pelajar

Proyek **Penilaian Sumatif Akhir Semester (PSAS) Informatika Kelas XI** pada materi **Dampak Sosial Informatika dan Pengembangan Website Berbantuan AI**.

🔗 **Tautan Website (GitHub Pages):** `https://username-anda.github.io/jaga-jejak/` *(sesuaikan setelah mengaktifkan GitHub Pages)*

---

## 1. Analisis Dampak Sosial Informatika & Rumusan Masalah
Di era digital saat ini, aktivitas harian pelajar SMA tidak lepas dari ruang daring—mulai dari mengakses akun belajar sekolah, bermain gim, berselancar di media sosial, hingga memakai aplikasi berbasis AI. Setiap klik dan unggahan meninggalkan **jejak digital** serta membuka celah kerentanan akun.

* **Penyebab Masalah:** Kebiasaan sepele seperti memakai satu kata sandi untuk banyak akun, mudah mengklik tautan berhadiah/ancaman blokir (*phishing*), menunda aktivasi autentikasi dua faktor (2FA), serta membagikan data pribadi (lokasi, jadwal, foto dokumen, isi obrolan) ke ruang publik.
* **Pihak Terdampak:** Pelajar secara individu (kehilangan akses tugas/dokumen belajar, tekanan psikologis/panik, risiko pencurian identitas) serta lingkungan pertemanan/sekolah (penyebaran tautan penipuan melalui akun yang dibajak).
* **Kebutuhan Pengguna:** Media edukasi berbahasa sehari-hari yang disertai latihan kewaspadaan berbasis data contoh, panduan langkah pencegahan dan pemulihan saat insiden terjadi, serta sarana pelaporan simulatif yang aman.

---

## 2. Tujuan, Sasaran Pengguna, dan Fitur Utama
* **Tujuan:** Meningkatkan literasi keamanan akun pelajar melalui edukasi praktis, deteksi dini risiko, panduan pemulihan darurat, dan pencatatan simulatif terstruktur.
* **Sasaran Pengguna:** Pelajar SMA/SMK pengguna layanan digital sehari-hari.
* **Fitur Utama Website:**
  1. **Edukasi Bahasa Sehari-hari:** Penjelasan 4 celah keamanan paling umum beserta solusi praktisnya.
  2. **Simulasi Skor Risiko Akun:** Kuis interaktif 5 pertanyaan untuk mengukur tingkat kerentanan kebiasaan digital pengguna.
  3. **Asisten Deteksi Pesan Mencurigakan (Simulasi AI):** Prototipe analisis teks pesan untuk mengenali indikator *phishing* menggunakan data contoh.
  4. **Panduan Pencegahan & Pemulihan Insiden:** Checklist bulanan dan urutan tindakan darurat ketika akun diretas.
  5. **Formulir Pelaporan Simulatif:** Pencatatan laporan simulasi atau masukan pengguna yang terhubung ke Google Sheets via Google Apps Script.

---

## 3. Cara Penggunaan & Alur Kerja Website
1. Pengguna membuka halaman utama untuk memahami latar belakang masalah dan tujuan website.
2. Pengguna membaca studi kasus ringan pada bagian **Edukasi**.
3. Pengguna menguji kebiasaan digitalnya pada fitur **Cek Skor Risiko** dan mencoba contoh pesan penipuan pada **Simulasi AI**.
4. Pengguna mempelajari langkah preventif dan tindakan darurat pada bagian **Panduan**.
5. Pengguna mengisi **Formulir Pelaporan Simulatif** menggunakan data contoh (tanpa data pribadi nyata) yang otomatis diteruskan ke Google Sheets.

---

## 4. Integrasi Google Apps Script & Google Sheets
Website ini memanfaatkan **Google Apps Script (`Code.gs`)** sebagai *endpoint* `doPost(e)` untuk menerima data JSON dari formulir website dan mencatatnya secara otomatis ke dalam baris baru di **Google Sheets**.

### Langkah Menghubungkan ke Google Sheets:
1. Buat file **Google Sheets** baru bernama `Log_Simulasi_JagaJejak`.
2. Klik menu **Ekstensi (Extensions) → Apps Script**.
3. Salin kode dari file `Code.gs` di repositori ini ke editor Apps Script, lalu simpan.
4. Klik **Terapkan (Deploy) → Deployment baru (New deployment)** → pilih jenis **Aplikasi Web (Web app)**.
5. Atur *Execute as*: **Me (Saya)** dan *Who has access*: **Anyone (Siapa saja)**, lalu salin URL Web App yang muncul.
6. Tempelkan URL tersebut ke variabel `APPS_SCRIPT_URL` di dalam file `script.js`.

---

## 5. Dokumentasi Penggunaan & Verifikasi AI
Sesuai ketentuan etika penggunaan AI pada proyek PSAS:

* **Kebutuhan AI:** Membantu merancang struktur antarmuka HTML/CSS yang responsif, menyusun logika evaluasi skor risiko, serta merancang prototipe fitur deteksi pola pesan *phishing*.
* **Contoh Prompt yang Digunakan:**
  > *"Buatkan fungsi JavaScript sederhana untuk menganalisis teks pesan contoh dan mendeteksi indikator social engineering seperti desakan waktu, iming-iming hadiah, dan tautan tidak resmi untuk website edukasi siswa SMA."*
* **Hasil & Verifikasi:** Kode yang dihasilkan AI diuji ulang secara manual menggunakan 3 skenario pesan contoh (hadiah palsu, ancaman blokir akun, dan pesan pengumuman sekolah yang aman).
* **Pelabelan Transparansi:** Fitur asisten analisis pesan di website diberi label jelas **`MODE SIMULASI AI (PROTOTIPE TERVERIFIKASI)`** beserta *disclaimer* bahwa fitur tersebut berjalan menggunakan pencocokan pola heuristik lokal untuk tujuan pembelajaran.

---

## 6. Etika Digital, Privasi, dan Keamanan Dasar
* Tidak menyimpan maupun memublikasikan API key, token, atau kata sandi di dalam repositori GitHub.
* Formulir dilengkapi peringatan privasi dan validasi kode otomatis untuk menolak input yang menyerupai kata sandi atau kode OTP nyata.
* Seluruh pengujian menggunakan data contoh/inisial.

---

## 7. Log Pengujian Produk (Testing)
| No | Komponen yang Diuji | Skenario Pengujian | Hasil yang Diharapkan | Status |
|---|---|---|---|---|
| 1 | Navigasi & Tampilan Mobile | Membuka website pada ukuran layar HP (375px) dan desktop | Menu hamburger berfungsi baik, kartu tersusun rapi 1 kolom di HP | ✅ Berhasil |
| 2 | Tab Edukasi | Mengklik 4 tombol tab studi kasus secara bergantian | Konten tab berpindah sesuai topik tanpa error | ✅ Berhasil |
| 3 | Simulasi Skor Risiko | Mengisi kombinasi jawaban risiko rendah hingga tinggi | Skor dihitung akurat (0–100) dengan kategori warna sesuai | ✅ Berhasil |
| 4 | Simulasi Deteksi Pesan AI | Menguji 3 tombol contoh pesan & teks input manual | Indikator *phishing* terdeteksi dan label simulasi tampil jelas | ✅ Berhasil |
| 5 | Formulir & Google Sheets | Mengirim data contoh dan mencoba memasukkan kata `password:` | Data contoh masuk ke Sheets; input berisi `password:` ditolak otomatis | ✅ Berhasil |
