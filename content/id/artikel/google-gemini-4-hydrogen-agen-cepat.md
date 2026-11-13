---
title: Gemini 4 Hydrogen, model cepat Google untuk semua orang
slug: google-gemini-4-hydrogen-agen-cepat
locale: id
translationGroupId: google-gemini-4-hydrogen
translationStatus: reviewed
dek: Model Gemini 4 ketiga dari Google dibuat untuk kecepatan: menyelesaikan tugas 2,5 kali lebih cepat dari Gemini 3.8 Flash, berharga $1,50 per juta token input, dan diluncurkan ke semua layanan Google, termasuk pengguna Search gratis. Apa yang diumumkan, apa arti angkanya, dan apa yang masih belum terbukti.
format: news
topics: [AI, Google, models]
author: hey.nous
publishedAt: 2026-11-13
updatedAt: 2026-11-13
readingMinutes: 4
cover:
  src: /assets/covers/cover-google-gemini-4-hydrogen.jpg
  alt: Ilustrasi 3D abstrak berupa bola oranye bercahaya dengan jejak gerak yang melesat di atas latar navy gelap, dikelilingi fragmen geometris krem dan oranye yang melayang
  width: 2048
  height: 1152
  caption: Ilustrasi editorial.
  credit: Hey Nous
keyTakeaways:
  - Google mengumumkan Gemini 4 Hydrogen pada 12 November 2026, model Gemini 4 ketiga setelah Argon dan Carbon, yang dibuat untuk coding sehari-hari dan pekerjaan agen yang cepat.
  - Google menyatakan Hydrogen menyelesaikan tugas 2,5 kali lebih cepat dari Gemini 3.8 Flash dan mencetak 57% pada Terminal-Bench 4.1 berbanding 18,2%, dengan harga tetap $1,50 per juta token input dan $7,50 per juta token output.
  - Model ini diluncurkan ke semua tingkatan Google AI Studio, Gemini API, aplikasi Gemini, dan Google Search untuk semua pengguna di seluruh dunia, model Gemini 4 pertama yang bisa dipakai pengguna gratis.
  - Google juga meluncurkan Orchestrator di Antigravity, yang berganti-ganti antara Carbon dan Hydrogen dalam satu sesi dan, pada Terminal-Bench 4.0, mencapai tingkat keberhasilan mendekati Carbon dengan kuota 24% lebih sedikit dan 19% lebih cepat.
  - Semua benchmark utama berasal dari pengumuman Google sendiri, dan belum ada replikasi independen.
primarySources:
  - title: "Introducing Gemini 4 Hydrogen (Google)"
    url: https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-hydrogen/
    publishedAt: 2026-11-12
  - title: "Google Search gets a major upgrade with Gemini 4 Hydrogen (Google)"
    url: https://blog.google/products-and-platforms/products/search/gemini-4-hydrogen-search-upgrade/
    publishedAt: 2026-11-12
relatedSlugs: [google-gemini-4-carbon-keamanan-siber]
status: published
seo:
  title: Gemini 4 Hydrogen model cepat Google untuk semua | hey.nous
  description: Gemini 4 Hydrogen dari Google dibuat untuk kecepatan: 2,5x lebih cepat dari 3.8 Flash, $1,50 per juta token input, dan diluncurkan ke semua orang termasuk pengguna Search gratis.
---

## Apa yang terjadi

Google memperkenalkan ==Gemini 4 Hydrogen== pada 12 November 2026, model ketiga dalam keluarga Gemini 4 setelah Argon dan Carbon, dan yang pertama ditujukan untuk semua orang, bukan hanya untuk spesialis.

Pengumuman ini ditulis oleh Koray Kavukcuoglu, senior vice president Google DeepMind dan chief AI architect Google. Hydrogen diposisikan sebagai model eksekusi: cepat dan murah untuk coding sehari-hari dan workflow agen, sementara Carbon dan Argon menangani penalaran mendalam berjangka panjang. Google menyebutnya "daily driver untuk workflow agen", dan intinya adalah tim tidak lagi perlu membayar harga model frontier untuk pekerjaan rutin.

Semua angka utama berasal dari Google sendiri. Hydrogen menyelesaikan tugas 2,5 kali lebih cepat dari ==Gemini 3.8 Flash==, model yang digantikannya, pada pengaturan thinking high bawaan, dan skornya di Terminal-Bench 4.1 lebih dari tiga kali lipat, 57% berbanding 18,2%. Google juga menyatakan model ini memangkas klaim yang dibuat-buat lebih dari lima kali lipat. Pada Artificial Analysis Intelligence Index, Hydrogen mencetak 51 pada level thinking high bawaan, satu poin di atas Argon yang 50, dan mencapai 54 pada pengaturan xhigh tertinggi. Hydrogen menawarkan empat level thinking, low, medium, high sebagai bawaan, dan xhigh yang baru, sehingga pengguna bisa memilih seberapa dalam penalaran yang dibutuhkan sebuah tugas.

## Harganya, dan di mana ia tersedia

Hydrogen berharga $1,50 per juta token input dan $7,50 per juta token output, tetap di seluruh context window 1 juta token. Tidak ada biaya tambahan untuk konteks panjang, dan itu bagian yang penting untuk penganggaran: prompt yang panjang biayanya sama per token dengan prompt yang pendek.

Ketersediaannya adalah yang terluas di antara semua model Gemini 4 sejauh ini. Google menyatakan model ini diluncurkan secara global ke semua tingkatan Google AI Studio, Gemini API, Gemini for business, aplikasi Gemini, Google Search, dan Google Antigravity untuk pelanggan berbayar Google AI Pro dan Ultra. Model ini juga ada di Android Studio dan Gemini di Google Sheets untuk pelanggan yang memenuhi syarat. Bagi konsumen, peluncuran di Search adalah bagian yang patut dicatat: Robby Stein, vice president of product untuk Google Search, menyebut Hydrogen "peningkatan model terbesar untuk Search sejauh ini", dan model ini tersedia untuk semua pengguna Search di seluruh dunia, bukan hanya pelanggan berbayar. Google menyatakan Hydrogen membawa pemahaman yang lebih baik atas pertanyaan multi-bagian dan typo, fan-out kueri yang lebih luas ke lebih banyak tautan, serta jawaban yang lebih visual dan mudah dipindai.

## Orchestrator: dua model, satu sesi

Bersamaan dengan Hydrogen, Google meluncurkan ==Orchestrator== di dalam Antigravity, lingkungan coding agennya. Alih-alih menjalankan satu model untuk seluruh sesi, Orchestrator berganti-ganti model sesuai pekerjaan yang sedang berjalan: Carbon merencanakan dan mengoordinasikan, Hydrogen mengeksekusi dan memverifikasi, semua dalam satu sesi. Pada Terminal-Bench 4.0, Google menyatakan Orchestrator mencapai tingkat keberhasilan mendekati Carbon dengan kuota 24% lebih sedikit dan 19% lebih cepat. Orchestrator diluncurkan untuk pelanggan Google AI Ultra.

Idenya bukan hal baru, mengarahkan pekerjaan mudah ke model murah dan pekerjaan sulit ke model kuat, tetapi ini pertama kalinya Google mengirimkannya sebagai fitur bawaan di perkakas coding-nya sendiri, bukan menyerahkan routing kepada pengguna.

:::ringkasan
Gemini 4 Hydrogen adalah tier Gemini 4 yang cepat dan murah dari Google: 2,5 kali lebih cepat dari 3.8 Flash, $1,50 per juta token input, dan tersedia di mana-mana, dari API sampai Search gratis. Dipasangkan dengan Orchestrator di Antigravity, model ini dimaksudkan untuk mengerjakan eksekusi rutin sementara Carbon menangani pemikiran yang sulit. Pertanyaan terbukanya adalah bagaimana angka-angka dari vendor ini bertahan begitu penguji independen mendapat akses.
:::

## Apa artinya buat kamu

Jika kamu membangun dengan model Google, Hydrogen adalah tier Gemini 4 pertama yang benar-benar bisa kamu pakai tanpa aplikasi atau daftar tunggu. Ini adalah jalur peningkatan dari 3.8 Flash, dan untuk pekerjaan agen bervolume tinggi, harga tetap $1,50 dan $7,50 mudah dianggarkan. Developer bisa mencobanya hari ini di AI Studio dan Gemini API, termasuk pada tier gratis.

Jika kamu pengguna biasa, perubahannya datang diam-diam: jawaban Search dan aplikasi Gemini menjadi lebih cepat dan lebih visual, tanpa pengaturan yang perlu diubah. Pengguna gratis mendapatkan model Gemini 4 untuk pertama kalinya, meskipun Google belum menyatakan apakah Search akan menunjukkan model mana yang menjawab sebuah kueri.

Untuk tim yang menjalankan coding agent, ujian praktisnya adalah Orchestrator, bukan Hydrogen saja. Penghematan kuota 24% yang dijanjikan hanya terwujud jika routing benar-benar memilih model yang tepat pada momen yang tepat, dan itu bagian yang tidak bisa dibuktikan oleh pengumuman apa pun.

:::peringatan
Perlakukan setiap benchmark dalam artikel ini sebagai klaim vendor sampai penguji independen mengonfirmasinya. Skor Intelligence Index, hasil Terminal-Bench, dan angka kecepatan 2,5x semuanya berasal dari pengumuman Google dan evaluasinya sendiri. Google juga menyatakan Hydrogen sampai 2,3 kali lebih tahan terhadap indirect prompt injection dan memangkas overreach agen sampai 81%, tetapi angka keamanan itu juga berasal dari evaluasi internal, dan model card-nya memperingatkan soal halusinasi serta kemungkinan lambat atau timeout sesekali.
:::

Yang masih belum jelas: bagaimana Hydrogen bekerja di luar benchmark Google, apakah routing Orchestrator bertahan pada codebase nyata dan bukan hanya Terminal-Bench, dan bagaimana model ini berperilaku pada level thinking xhigh, di mana pemakaian token meningkat. Hasil independen pertama akan lebih penting daripada postingan peluncuran ini, dan hasil itu belum tiba.
