---
title: Dua TPU baru Google: satu dikunci rapat, satu digandakan
slug: google-tpu-8tx-8i-max
locale: id
translationGroupId: google-tpu-8tx-8i-max
translationStatus: reviewed
dek: Google menambah TPU 8tx dan TPU 8i Max ke jajaran generasi kedelapan: satu menjaga data sensitif tetap terenkripsi saat sedang diproses, satunya lagi memadatkan dua chip dalam satu paket untuk context window raksasa. Keduanya belum punya harga atau tanggal rilis.
format: news
topics: [AI, perangkat keras, cloud]
author: hey.nous
publishedAt: 2026-11-10
updatedAt: 2026-11-10
readingMinutes: 4
cover:
  src: /assets/covers/cover-google-tpu-8tx-8i-max.jpg
  alt: Ilustrasi 3D abstrak chip navy di dalam perisai oranye bercahaya di samping dua chip navy berpasangan yang terhubung garis sirkuit oranye
  width: 2048
  height: 1152
  caption: Ilustrasi editorial.
  credit: Hey Nous
keyTakeaways:
  - Google mengumumkan TPU 8tx dan TPU 8i Max pada 9 November 2026, melengkapi empat sistem TPU dalam satu tahun untuk pertama kalinya.
  - TPU 8tx dibuat untuk inferensi yang aman dan rahasia: data dan bobot model tetap terlindungi bahkan saat sedang aktif digunakan, dan Google mengklaim latensi hingga 2x lebih rendah dari TPU 8t.
  - TPU 8i Max menggabungkan dua chip TPU 8i dalam satu paket, menggandakan compute, SRAM, dan bandwidth HBM untuk workload dengan context window raksasa.
  - Google belum mengumumkan harga, tanggal ketersediaan umum, atau pelanggan bernama untuk keduanya; Bloomberg melaporkan keduanya hadir pada 2027.
primarySources:
  - title: "Introducing TPU 8tx and TPU 8i Max (Google Blog)"
    url: https://blog.google/innovation-and-ai/infrastructure-and-cloud/global-network/tpu-8i-max-and-8tx/
    publishedAt: 2026-11-09
  - title: "Google Unveils TPU 8tx and 8i Max AI Chips in Nvidia Challenge (Bloomberg via Lexx)"
    url: https://blog.lexx.in/news/google-tpu-8tx-8i-max-ai-chips-nov-2026/
    publishedAt: 2026-11-09
relatedSlugs: [google-gemini-4-carbon, openai-models-google-cloud]
status: published
seo:
  title: TPU 8tx dan 8i Max Google: apa fungsinya | hey.nous
  description: Google menambah TPU 8tx untuk AI rahasia dan TPU 8i Max untuk context window raksasa. Faktanya, batasannya, dan yang masih belum terbukti.
---

## Apa yang terjadi

Google mengumumkan dua tambahan baru untuk jajaran TPU generasi kedelapan pada 9 November 2026: ==TPU 8tx==, yang dibuat untuk inferensi yang aman dan rahasia, dan ==TPU 8i Max==, yang dibuat untuk workload AI dengan context window raksasa. Pengumuman yang ditulis Amin Vahdat, senior vice president dan chief technologist AI dan infrastruktur Google, menjadikan 2026 tahun pertama Google memperkenalkan empat sistem TPU, setelah TPU 8t dan TPU 8i di Google Cloud Next pada April.

Kedua sistem ini menyelesaikan dua masalah berbeda. 8tx ditujukan bagi organisasi yang menjalankan model frontier atau proprietary dan agen otonom di samping data paling sensitif mereka, seperti perusahaan yang diatur ketat dan pemerintah. 8i Max ditujukan bagi tim yang agen AI-nya menangani konteks dalam jumlah besar sekaligus, misalnya puluhan agen yang bekerja di seluruh codebase perangkat lunak atau video berjam-jam.

## Bukan chip baru: sistem baru

Google berhati-hati dengan pilihan katanya di sini, dan perbedaannya penting. Merancang chip baru butuh waktu bertahun-tahun. Sistem baru mengemas ulang silikon yang sudah ada dengan compute, jaringan, dan keamanan yang berbeda di sekitarnya, yang menurut Google bisa dilakukan dalam hitungan bulan.

TPU 8tx memakai silikon yang sama dengan chip pelatihan TPU 8t, dipasangkan dengan host CPU AMD EPYC Generasi ke-5 dan jaringan Boardfly berlatensi rendah yang dibuat Google untuk reasoning real-time. TPU 8i Max menaruh dua chip TPU 8i yang sudah ada ke dalam satu paket. Jadi beritanya adalah soal konfigurasi, bukan generasi silikon baru.

:::ringkasan
Google kini punya empat sistem TPU generasi kedelapan: 8t untuk pelatihan skala besar, 8i untuk reasoning berlatensi rendah, 8tx untuk confidential computing, dan 8i Max untuk context window raksasa. Kedua sistem baru ini adalah konfigurasi ulang dari chip yang diumumkan April lalu, yang menyasar dua masalah yang menurut Google paling dipedulikan perusahaan saat ini: menjaga data tetap rahasia saat diproses, dan memuat konteks yang makin besar ke dalam memori.
:::

## TPU 8tx: terenkripsi saat berjalan

8tx adalah yang lebih menarik dari keduanya, dan bukan karena kecepatannya. Biasanya, data terenkripsi saat disimpan atau dikirim lewat jaringan, tetapi harus dibuka di memori saat komputer memprosesnya. Google mengatakan 8tx membangun keamanan langsung ke lapisan perangkat keras, menjaga data sensitif dan bobot model tetap terlindungi dan terisolasi bahkan saat sedang aktif digunakan. Google menyebutnya sistem TPU cloud pertama dengan ==confidential computing== yang ditegakkan perangkat keras.

Google juga mengklaim 8tx memberikan latensi hingga 2x lebih rendah dibanding TPU 8t, dengan apa yang disebutnya penalti performa nyaris nol untuk keamanan itu. Karena memadukan compute kelas pelatihan dengan jaringan inferensi yang cepat, tim bisa melakukan fine-tuning model dengan data privat, menyuling model besar menjadi model yang lebih kecil, dan melatih agen lewat reinforcement learning dalam satu sistem, tanpa memindahkan data sensitif antar klaster.

## TPU 8i Max: dua chip, satu paket

8i Max mengejar apa yang disebut Google sebagai memory wall. Saat agen bernalar di jutaan token konteks, bandwidth memori cepat menjadi hambatan. Dengan menggabungkan dua chip TPU 8i berlatensi rendah ke dalam satu paket, Google mengatakan 8i Max memberikan compute dua kali lipat, SRAM dua kali lipat, dan bandwidth HBM dua kali lipat dibanding satu TPU 8i, sambil memuat dua kali silikon dalam jejak rak yang sama. Artinya lebih banyak daya komputasi per meter persegi dan per watt ruang data center.

Bersamaan dengan perangkat kerasnya, Google mengumumkan serangkaian langkah perangkat lunak yang bertujuan membuat TPU lebih mudah dipakai: bulan lalu mereka membuka sumber TorchTPU sehingga kode PyTorch dan model Hugging Face berjalan secara native, membuka TPU agent suite dalam pratinjau yang terhubung ke alat coding seperti Claude Code dan Cursor, membuka sumber TPU Sync untuk mengelola state model di seluruh klaster, dan membuat Cloud Pathways serta GKE dynamic slicing tersedia secara umum. Google juga mengatakan TPU-nya kini melayani hampir 100 pelanggan, termasuk frontier lab, perusahaan trading, retailer, dan universitas, meski tidak menyebut nama satu pun.

## Apa artinya buat kamu

Bagi kebanyakan pembaca, tidak ada yang berubah besok. Ini sistem data center, bukan sesuatu yang bisa kamu beli, dan Google belum mengumumkan harga, tanggal ketersediaan umum, atau pelanggan bernama untuk keduanya. Bloomberg melaporkan keduanya hadir pada 2027.

Yang berubah adalah bentuk pasar chip AI. Google kini menjual silikon buatannya sendiri ke pelanggan luar dengan kecepatan empat sistem setahun, dan dua sistem terbaru menyasar persis workload yang ditanyakan pelanggan Nvidia: menjalankan agen di atas data privat, dan menjalankan agen yang butuh konteks sangat besar. Setiap angka performa dalam pengumuman ini berasal dari Google sendiri, tanpa benchmark atau audit independen sejauh ini, jadi perlakukan klaim 2x itu sebagai angka vendor sampai pihak ketiga mengujinya.

Jika kamu menjalankan workload AI di Google Cloud, berita praktis dalam waktu dekat adalah perangkat lunaknya: dukungan PyTorch native dan TPU agent suite menurunkan hambatan untuk mencoba TPU sama sekali, dan itulah intinya. Taruhan Google adalah begitu perangkat kerasnya mudah dipakai, sistem-sistem khusus itu akan laku sendiri.

:::peringatan
Jangan membacanya sebagai generasi chip baru. Kedua sistem memakai ulang silikon yang diumumkan pada April 2026, dan keduanya belum tersedia. Google tidak memberi harga atau tanggal rilis, dan belum ada pihak independen yang menguji klaim confidential computing atau performanya. Tanggal kehadiran 2027 berasal dari Bloomberg, bukan dari Google.
:::

Yang masih belum jelas: apakah perlindungan confidential computing 8tx akan diaudit secara independen, berapa harga kedua sistem ini, dan pelanggan mana yang benar-benar akan mengadopsinya. Google menjadwalkan siaran tentang sistem baru ini pada pagi hari pengumuman, dengan detail lebih lanjut yang dijanjikan di sana.
