---
title: Kimi Hosted Agents: Moonshot jalankan agen AI Anda
slug: kimi-hosted-agents-agen-terkelola
locale: id
translationGroupId: kimi-hosted-agents
translationStatus: reviewed
dek: Moonshot AI meluncurkan Kimi Hosted Agents pada 5 November 2026, mengubah agent harness menjadi layanan cloud terkelola. Perusahaan mendapat runtime 24/7 untuk pekerjaan agen jangka panjang dan multi-agen tanpa membangun sendiri infrastrukturnya.
format: news
topics: [AI, agen, Moonshot]
author: hey.nous
publishedAt: 2026-11-06
updatedAt: 2026-11-06
readingMinutes: 4
cover:
  src: /assets/covers/cover-kimi-hosted-agents.jpg
  alt: Ilustrasi 3D abstrak berupa robot agen kecil yang berkolaborasi di sekitar konsol bercahaya dengan kartu tugas melayang
  width: 2048
  height: 1152
  caption: Ilustrasi editorial.
  credit: Hey Nous
keyTakeaways:
  - Moonshot AI resmi meluncurkan Kimi Hosted Agents pada 5 November 2026, layanan cloud terkelola yang menjalankan agen AI agar perusahaan tidak perlu membangun dan merawat agent harness sendiri.
  - Layanan ini menawarkan lingkungan hosted 24/7 untuk tugas jangka panjang dan kolaborasi multi-agen, dengan sesi yang persisten, sandbox terisolasi, dan pemulihan otomatis setelah kegagalan platform.
  - Tersedia lebih dari 140 skills, lebih dari 30 plugin, dan 12 template agen resmi, delapan di antaranya untuk pekerjaan keuangan.
  - Kimi Inference Hook memungkinkan layanan keamanan perusahaan memeriksa input dan hasil tool sebelum setiap pemanggilan model, tetapi hanya ditawarkan secara selektif kepada pengguna enterprise terverifikasi.
  - Harganya berbasis pemakaian: runtime sandbox 0,072 yuan per jam, ditambah inferensi model sesuai tarif token dan biaya plugin per pemanggilan.
primarySources:
  - title: "Kimi Hosted Agents 正式发布：Harness as a Service (Kimi)"
    url: https://www.kimi.com/news/kimi-hosted-agents
    publishedAt: 2026-11-05
  - title: "Kimi Formally Launches Hosted Agents for Enterprise AI Workloads (Unite.AI)"
    url: https://www.unite.ai/kimi-formally-launches-hosted-agents-for-enterprise-ai-workloads/
    publishedAt: 2026-11-05
relatedSlugs: [tencent-hy4-vision-computer-use, openai-models-google-cloud]
status: published
seo:
  title: Kimi Hosted Agents: agen AI terkelola Moonshot | hey.nous
  description: Moonshot AI meluncurkan Kimi Hosted Agents, runtime terkelola untuk agen AI jangka panjang dengan sandbox, template, dan safety hook. Fakta dan batasannya.
---

## What happened

Moonshot AI kini tidak lagi hanya menjual model. Pada 5 November 2026, perusahaan itu meluncurkan ==Kimi Hosted Agents==, layanan cloud terkelola yang menjalankan agen AI untuk perusahaan dan developer, sehingga tim tidak perlu lagi membangun dan merawat framework runtime di baliknya.

Pengumuman yang berjudul "Harness as a Service" ini mengemas ==agent harness==, lapisan operasional yang menangani sesi, eksekusi tool, sandbox, dan pemulihan kegagalan, sebagai layanan hosted di Kimi API Open Platform. Argumen Moonshot lugas: membangun harness yang andal butuh waktu berbulan-bulan, dan merawatnya setelah rilis memakan waktu lebih banyak lagi. Hosted Agents mengambil alih pekerjaan itu, dengan lingkungan 24/7 untuk tugas jangka panjang dan kolaborasi multi-agen.

Layanan ini bersifat stateful. Riwayat sesi, keadaan sandbox, dan berkas keluaran tersimpan di server, dan event stream mendukung kelanjutan dengan header Last-Event-ID setelah klien yang terputus tersambung kembali. Developer bisa bekerja lewat konsol web, REST API, atau antarmuka baris perintah kha. Untuk pekerjaan multi-agen, agen koordinator mendelegasikan subtugas ke thread anak di dalam sesi yang sama, dengan satu hingga 20 entri agen dalam konfigurasi delegasinya. Thread anak tidak bisa membuat anak lagi atau berkomunikasi langsung satu sama lain, dan masing-masing menyimpan status, riwayat, dan event stream terpisah sehingga subtugas bisa diperiksa dan diaudit satu per satu.

:::ringkasan
Kimi Hosted Agents memindahkan pekerjaan tak glamor di balik agen AI, sesi, sandbox, retry, dan izin, ke server Moonshot. Model hanyalah satu bagian dari agen yang bekerja; peluncuran ini menjual sisanya sebagai layanan.
:::

## Skills, template, dan safety hook

Kimi menyebut Hosted Agents hadir dengan lebih dari 140 skills dan lebih dari 30 plugin yang mencakup pencarian web, kueri data profesional, pemrosesan dokumen kantor, dan pembuatan konten. Perusahaan bisa menambahkan skills, plugin, layanan MCP, dan tool sendiri untuk menghubungkan sistem dan sumber data mereka.

Tersedia 12 template agen resmi: delapan template keuangan yang mencakup pemodelan, riset mendalam, laporan pagi, pelacakan IPO, dan pemantauan portofolio, ditambah contoh untuk pengembangan gim, penasihat pemain, respons insiden SRE, dan operasi komunitas Discord. Perusahaan bisa menyalin template ke ruang proyeknya sendiri lalu menghubungkan sistem internal dan basis data privat.

:::info Apa itu agent harness
Harness adalah segala sesuatu di sekitar model yang membuat agen bekerja di produksi: menjaga keadaan sesi, memanggil tool di dalam sandbox, mencoba ulang setelah gagal, dan menegakkan izin. Model menjawab pertanyaan; harness memungkinkan agen menyelesaikan tugas dalam beberapa langkah tanpa diawasi manusia.
:::

Keamanan menjadi nilai jual yang disebut secara eksplisit. ==Kimi Inference Hook== menghubungkan layanan keamanan milik perusahaan untuk memeriksa input tugas dan hasil tool sebelum setiap pemanggilan model, dengan aturan yang ditentukan perusahaan dan hook yang mengizinkan atau menolak konten. Hook ini ditawarkan secara selektif kepada pengguna enterprise terverifikasi. Ada pula opsi self-hosted yang memindahkan eksekusi tool di sandbox ke host yang dikelola pelanggan, meski Kimi menegaskan ini tidak setara dengan deployment privat, karena input dan hasil tool tetap melewati antarmuka inferensi model platformnya.

## What it means for you

Harganya berbasis pemakaian dalam tiga komponen: runtime sandbox 0,072 yuan per jam, sekitar satu sen dolar AS, inferensi model sesuai tarif token model yang dipilih, dan biaya plugin berdasarkan jumlah pemanggilan. Laporan pemakaian merinci konsumsi sumber daya dan biaya per proyek agen. Kimi memosisikan layanan ini untuk pemantauan bisnis internal dan respons operasional, serta asisten riset investasi dan layanan pelanggan yang menghadap pengguna.

Konteksnya penting. Peluncuran ini menutup pekan besar bagi Moonshot: Kimi K3.1 Pro, model 2,8 triliun parameter dengan context window 1 juta token, bobot terbukanya diterbitkan di Hugging Face pada 4 November. Hosted Agents membawa Moonshot satu langkah lebih jauh ke bawah tumpukan teknologi, dari memasok model menjadi mengoperasikan lingkungan tempat model itu bekerja.

Yang masih belum jelas: pengumuman November ini meresmikan layanan yang sudah berada dalam beta sejak September 2026 untuk pengguna enterprise terverifikasi di dalam negeri, dan Inference Hook serta opsi self-hosted masih terbatas pada kelompok itu. Moonshot belum menyampaikan kapan akses yang lebih luas dibuka, dan materi peluncuran menjelaskan kemampuan, bukan menerbitkan angka performa atau keandalan independen. Perlakukan ini sebagai opsi runtime terkelola yang layak dievaluasi jika Anda sudah membangun di atas Kimi, bukan sebagai pengganti yang terbukti untuk harness yang Anda kendalikan sendiri.
