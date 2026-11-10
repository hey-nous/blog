---
title: Claude Fable 5.2 dan Mythos 5.2: satu model, dua pintu
slug: claude-fable-5-2-mythos-5-2
locale: id
translationGroupId: claude-fable-mythos-5-2
translationStatus: reviewed
dek: Anthropic merilis dua model flagship pada 9 November yang sebenarnya satu model yang sama. Fable 5.2 adalah versi publik dengan pengaman aktif, sedangkan Mythos 5.2 adalah model yang sama tanpa pemblokiran keamanan siber dan biologi, khusus untuk organisasi yang lolos verifikasi.
format: news
topics: [AI, models, coding]
author: hey.nous
publishedAt: 2026-11-10
updatedAt: 2026-11-10
readingMinutes: 5
cover:
  src: /assets/covers/cover-claude-fable-5-2-mythos-5-2.jpg
  alt: Ilustrasi 3D abstrak berupa satu inti oranye bercahaya di balik dua pintu navy, satu terbuka dengan cahaya hangat keluar dan satu tertutup di balik lingkaran verifikasi
  width: 2048
  height: 1152
  caption: Ilustrasi editorial.
  credit: Hey Nous
keyTakeaways:
  - Anthropic merilis Claude Fable 5.2 dan Claude Mythos 5.2 pada 9 November 2026, dan menyatakan terang-terangan bahwa keduanya adalah model dasar yang sama.
  - Fable 5.2 dilengkapi pengaman yang memblokir sebagian besar permintaan keamanan siber dan biologi, dan itulah yang membuatnya aman ditawarkan ke semua orang: paket berbayar Claude, Claude Code, API, AWS, Google Cloud, dan Azure.
  - Mythos 5.2 melepas pemblokiran itu dan hanya tersedia bagi organisasi yang diterima dalam Program Verifikasi Siber atau Sains Hayati Anthropic; pelanggan Enterprise juga bisa mengaksesnya lewat Claude Security.
  - Kedua model menghasilkan output hingga 30% lebih cepat dari versi 5.1 dan harganya turun: US$8 per juta token input dan US$40 per juta token output, dari sebelumnya US$10 dan US$50, dengan mode cepat opsional berharga dua kali lipat.
  - Demo utamanya, dari sistem operasi yang dibangun dari folder kosong sampai formalisasi Teorema Terakhir Fermat oleh 1.000 agen, adalah hasil laporan Anthropic sendiri dan belum direplikasi pihak independen.
primarySources:
  - title: "Introducing Claude Fable 5.2 and Claude Mythos 5.2 (Anthropic)"
    url: https://anthropic.com/claude-fable-and-mythos-5-2
    publishedAt: 2026-11-09
  - title: "Anthropic unveils new Fable, Mythos models as competition heats up ahead of IPO (Reuters)"
    url: https://www.reuters.com/technology/anthropic-unveils-new-fable-mythos-models-competition-heats-up-ahead-ipo-2026-11-09/
    publishedAt: 2026-11-09
relatedSlugs: [openai-gpt-6-cyber, google-gemini-4-carbon]
status: published
seo:
  title: Claude Fable 5.2 dan Mythos 5.2 dijelaskan | hey.nous
  description: Fable 5.2 dan Mythos 5.2 dari Anthropic adalah satu model dengan dua tingkat akses. Apa yang berubah, berapa harganya, dan klaim apa yang masih perlu dicek.
---

## Apa yang terjadi

Anthropic merilis Claude Fable 5.2 dan Claude Mythos 5.2 pada 9 November 2026, dua model terkuatnya sampai saat ini, dan menyampaikan bagian yang biasanya tidak diucapkan dengan lantang: "Claude Fable dan Claude Mythos adalah model dasar yang ==sama persis==." Bedanya bukan di kemampuan, melainkan di pengaman yang dipasang pada salah satunya, dan siapa yang boleh melewati pintunya.

Fable 5.2 adalah versi publik. Pengamannya memblokir sebagian besar permintaan terkait keamanan siber dan biologi, dan justru itulah yang membuat Anthropic berani menawarkannya ke semua orang: model ini sudah tersedia hari ini di paket berbayar Claude, di Claude Code, lewat Claude Platform (ID model API `claude-fable-5-2`), serta di Amazon Web Services, Google Cloud, dan Microsoft Azure. Mythos 5.2 adalah model yang sama tanpa pemblokiran tersebut, khusus untuk organisasi yang diterima dalam Program Verifikasi Siber atau Program Verifikasi Sains Hayati Anthropic. Pelanggan Claude Enterprise punya jalur kedua: mereka bisa menjangkau Mythos lewat Claude Security, produk pemindai kode milik Anthropic, tanpa harus ikut program verifikasi.

Kedua versi lebih cepat dan lebih murah dari pendahulunya. Anthropic menyebut pembuatan output hingga 30% lebih cepat dibanding Fable 5.1 dan Mythos 5.1, dan harga API standar turun dari US$10 menjadi US$8 per juta token input serta dari US$50 menjadi US$40 per juta token output. Ada juga ==mode cepat== opsional yang mempercepat pembuatan token hingga 2,5 kali lipat dengan harga US$16 dan US$80 per juta token. Pengaman Fable 5.2 juga tidak segampang pendahulunya salah blokir: Anthropic menyebut jumlah pemblokiran yang tidak perlu turun sekitar 55% dibanding Fable 5.1.

## Papan skornya, termasuk baris yang kalah

Tabel peluncuran Anthropic menempatkan Fable 5.2 di atas pendahulunya di hampir semua lini. Pada FrontierCode 2.0, tes coding agentik yang menilai apakah sebuah patch cukup bagus untuk digabungkan ke repositori sungguhan, skornya 49,1%, naik dari 32,4% milik Fable 5.1 dan melampaui Claude Opus 5.5 (45,5%), GPT-6 Astra dari OpenAI (42,8%), serta Gemini 4 Carbon dari Google (41,1%). Model ini juga memimpin di FrontierSWE v2 (69,9%), riset ilmiah Terminal-Bench-Science (74,6%), dan simulator robotik RoboDojo (64,9%, lebih dari dua kali lipat skor GPT-6 Astra yang 29,8%).

Dua baris tidak dimenangkan Anthropic. Gemini 4 Carbon memimpin di alur kerja bisnis AutomationBench dengan 53,9% berbanding 51,4%, dan Opus 5.5 masih memegang Elo tertinggi di tes pengetahuan kerja AA-Briefcase, 1800 berbanding 1785. Semua angka di tabel itu adalah laporan Anthropic sendiri; satu-satunya skor independen sejauh ini datang dari Artificial Analysis, yang menempatkan Fable 5.2 di peringkat pertama Indeks Kecerdasannya dengan nilai 65.

:::ringkasan
Satu model, dua tingkat akses. Fable 5.2 untuk semua orang, dengan pengaman keamanan siber dan biologi aktif. Mythos 5.2 adalah model yang identik tanpa pengaman itu, dikunci di balik program verifikasi Anthropic untuk pekerjaan keamanan dan sains hayati. Keduanya hingga 30% lebih cepat dari generasi 5.1 dan 20% lebih murah di API.
:::

## Demo yang jadi bahan bicaranya

Anthropic mengandalkan pekerjaan agen jangka panjang untuk membuktikan klaimnya. Seorang engineer memberi Fable 5.2 folder kosong dan tugas merancang sistem operasi prototipe; dengan mengoordinasikan lebih dari 1.000 subagen selama delapan hari, model ini menghasilkan OS yang berfungsi dan bisa menyala di laptop, lengkap dengan driver, penyimpanan, jendela, dan layar login. Tim agen yang menjalankan versi awal Fable 5.2 juga memigrasikan layanan produksi penting dari Python ke Rust, dan layanan itu kini menyala sekitar 26 kali lebih cepat. Anthropic juga menyebut Claude kini menulis lebih dari 90% perubahan yang digabungkan ke basis kode intinya sendiri, dengan manusia mengarahkan dan meninjau.

Klaim sainsnya adalah bagian yang paling perlu dibaca hati-hati. Tim berisi 1.000 agen Fable 5.2 memformalisasi bukti Teorema Terakhir Fermat dalam 30 jam, pekerjaan yang sebelumnya butuh 11 hari bagi model riset Claude yang belum dirilis. Kata kuncinya adalah memformalisasi: para agen menerjemahkan bukti yang sudah ada dan sudah diterima ke dalam bentuk yang bisa diperiksa komputer langkah demi langkah. Tidak ada yang menemukan bukti baru untuk teorema berusia 300 tahun. Anthropic juga menyatakan Fable 5.2 memecahkan dua masalah terbuka dalam fisika lubang hitam selama pengujian, dan telah menerbitkan preprint untuk keduanya; preprint adalah klaim yang terbuka untuk diteliti, bukan hasil yang sudah mapan. Di sisi Mythos, model terbatas itu menemukan 10,2% lebih banyak kerentanan dibanding Opus 5.5 pada evaluasi internal CVE Rediscovery milik Anthropic, dan memodelkan secara akurat 28 dari 34 struktur kapsid protein dalam riset terapi gen.

## Artinya buat kamu

Kalau kamu pengguna Claude, Fable 5.2 sudah tersedia di paket berbayar mulai hari ini, dan saran Anthropic sendiri agak mengejutkan: jangan langsung menjadikannya bawaan. Perusahaan itu menyarankan mulai dari Opus 5.5 untuk coding dan pekerjaan pengetahuan sehari-hari, dan naik ke Fable hanya untuk tugas teknis paling ambisius dan terbuka. Buat developer, kabar praktisnya adalah penurunan harga dan mode cepat; ID model yang dipanggil adalah `claude-fable-5-2`.

Mythos 5.2 adalah pintu yang hampir pasti tidak bisa kamu buka. Kecuali organisasimu lolos verifikasi Anthropic untuk riset keamanan atau sains hayati, versi tanpa batasan itu tetap di luar jangkauan, dan bagi pengguna perorangan di Indonesia tidak ada yang berubah dari rilis ini. Yang berubah adalah polanya: ini peluncuran frontier kedua dalam dua minggu, setelah Gemini 4 Carbon dari Google, di mana versi paling mampu dari sebuah model hanya dikirim ke pihak bertahan yang terverifikasi. Kemampuan mentah sedang menjadi produk berpagar.

:::peringatan
Semua hasil benchmark dan demo di artikel ini berasal dari pengumuman dan system card Anthropic sendiri. Penguji independen belum mereplikasinya, hasil fisika lubang hitamnya masih preprint yang belum ditinjau, dan judul Fermat itu menggambarkan terjemahan terbimbing mesin dari bukti yang sudah ada, bukan penemuan baru. System card Anthropic juga melaporkan bahwa Fable 5.2 menyuarakan kecurigaan bahwa ia sedang dievaluasi pada 43% transkrip pengujian, angka tertinggi yang pernah dicatat perusahaan itu, dan hal ini layak diingat saat membaca skor pengujian model mana pun, termasuk yang ini.
:::

Yang masih belum jelas: seberapa tahan benchmark utamanya begitu evaluator independen menjalankannya, bagaimana akses Fable 5.2 dibagi antar tingkat paket konsumen Claude, dan apakah pola model khusus terverifikasi ini menyebar ke lab lain. Anthropic juga sedang menuju IPO, menurut Reuters, sehingga setiap peluncurannya kini sekaligus berita produk dan bagian dari prospektus.
