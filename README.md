#  AI Chatbot

Sebuah chatbot sederhana yang dibangun dengan **React**, **TypeScript**, dan **Tailwind CSS**, juga terintegrasi dengan **OpenAI API**. Cocok sebagai tugas atau prototipe yang memperlihatkan arsitektur modern front-end dengan interaksi AI tanpa perlu database—sempurna untuk sesi pendek (riwayat percakapan disimpan dalam array, tidak permanen).

---

##  Fitur Utama
- UI clean, responsif, dan estetis menggunakan **Tailwind CSS**
- Input pertanyaan dari pengguna, panggilan ke OpenAI API, dan tampilan hasil jawaban AI secara real-time
- Riwayat percakapan disimpan selama sesi browser aktif
- Struktur kode modular dan rapi—mengikuti best practices React + TypeScript
- Build & dev environment menggunakan **Vite**

---

##  Struktur Proyek
ai-chatbot/
├─ public/                    # aset statis (favicon, dsb.)
├─ src/
│  ├─ components/             # UI components: ChatArea, Button, Avatar, dll.
│  ├─ hooks/                  # custom hooks (useChats.ts)
│  ├─ services/               # API integration (openaiService.ts)
│  ├─ types/                  # tipe TypeScript untuk objek data
│  ├─ App.tsx                 # root component aplikasi
│  └─ main.tsx                # entry point React via Vite
├─ .env                       # environment variables
├─ package.json               # scripts & dependencies
├─ tsconfig.json              # konfigurasi TypeScript
├─ vite.config.ts             # konfigurasi Vite


##  Instalasi & Penggunaan

### 1. Clone Repository
```bash
git clone https://github.com/abdurFaiz/chatbot-ai.git
cd chatbot-ai

### Install Dependencies
npm install

### Jalankan Mode Development
npm run dev

## Cara Menjalankan Aplikasi

1. Buka aplikasi di browser.
2. Ketik pesan atau pertanyaan di kolom input.
3. Tekan Enter atau tombol “Kirim”.
4. Chatbot akan memproses permintaan via OpenAI API, dan menampilkan jawaban AI.
5. Percakapan akan tetap tampil selama sesi browser aktif (disimpan sementara di array).


