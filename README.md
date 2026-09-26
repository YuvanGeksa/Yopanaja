# Web YopanDelreyz (MVP) 🚀

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![Vercel Deployment](https://img.shields.io/badge/Vercel-Deployed-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://yopanaja.vercel.app)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

Website 1-page modern dengan integrasi sistem pembayaran **QRIS via Pakasir**, menggunakan **Vercel Serverless Functions** untuk menjaga API key dan secret tetap aman di sisi server.

---

## 📂 Struktur Project

```text
├── api/              # Vercel Serverless Functions
├── source/
│   └── config.js     # Katalog produk & harga
├── index.html        # Halaman utama
├── script.js         # Logic & interaksi frontend
├── tailwind.css      # Custom styles & Tailwind utilities
└── vercel.json       # Konfigurasi routing Vercel
```

---

## 🔑 Environment Variables

Sebelum melakukan deployment, tambahkan **Environment Variables** melalui:

**Vercel Dashboard → Project Settings → Environment Variables**

### Wajib

| Variable | Deskripsi |
|---|---|
| `PROJECT_PAKASIR` | Slug / Project ID Pakasir |
| `APIKEY_PAKASIR` | API Key resmi dari Pakasir |

### Opsional

| Variable | Default / Deskripsi |
|---|---|
| `BASE_URL_PAKASIR` | `https://app.pakasir.com/api` |
| `DEMO_MODE` | Set ke `true` untuk testing tanpa API Pakasir asli |

> ⚠️ **PENTING:** Jangan pernah menaruh API key atau secret key di `source/config.js` maupun file frontend lainnya.

---

## 🛠️ Setup & Running Lokal

### 1. Clone repository

```bash
git clone https://github.com/YuvanGeksa/Yopanaja.git
cd Yopanaja
```

### 2. Buat file `.env`

Buat file `.env` di root project:

```env
PROJECT_PAKASIR=your_project_id
APIKEY_PAKASIR=your_api_key
DEMO_MODE=true
```

### 3. Jalankan Vercel secara lokal

```bash
npx vercel dev
```

Setelah berjalan, project dapat diakses melalui alamat lokal yang diberikan oleh Vercel CLI.

---

## 🚀 Deploy ke Vercel

1. **Fork** atau upload project ini ke akun GitHub.
2. Buka [Vercel Dashboard](https://vercel.com/) lalu pilih **Import Project**.
3. Pilih repository **Yopanaja**.
4. Tambahkan Environment Variables:
   - `PROJECT_PAKASIR`
   - `APIKEY_PAKASIR`
   - Variable opsional lainnya jika diperlukan.
5. Klik **Deploy**.

---

## ⚙️ Edit Harga & Katalog Produk

Untuk mengubah daftar produk, harga, atau deskripsi, edit file:

```text
source/config.js
```

Kemudian ubah bagian:

```js
PRODUCTS
```

File tersebut aman dibaca oleh browser karena **tidak menyimpan API key atau secret**.

---

## 🧪 Demo Mode

Untuk melakukan testing tanpa menggunakan API Pakasir asli, aktifkan:

```env
DEMO_MODE=true
```

Dalam mode demo:

- QR Code dibuat menggunakan string demo.
- Tidak membutuhkan API Pakasir asli.
- Status pembayaran akan otomatis berubah menjadi **PAID** sekitar 20 detik setelah pemesanan.

---

## 🔐 Security

Project menggunakan **Vercel Serverless Functions** untuk menangani request yang membutuhkan credential sensitif.

**Jangan commit file `.env` atau credential lainnya ke repository publik.**

Pastikan `.gitignore` mencakup:

```text
.env
.env.local
```

---

## 📜 License

Project ini menggunakan **MIT License**.

Bebas digunakan, dimodifikasi, dan dikembangkan kembali sesuai ketentuan yang tercantum dalam file [`LICENSE`](LICENSE).
