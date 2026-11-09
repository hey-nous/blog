---
title: Agen AI DeepMind menemukan dua celah di RSA-1024 lama
slug: deepmind-agen-ai-rsa-1024
locale: id
translationGroupId: deepmind-rsa-1024
translationStatus: reviewed
dek: Google DeepMind mengumumkan agen AI yang dipandu manusia menemukan dua kelemahan pada RSA 1024-bit, standar enkripsi lama yang sudah ditinggalkan web: cara memalsukan tanda tangan yang lebih cepat, dan cara memfaktorkan banyak kunci sekaligus yang lebih murah. Kunci RSA 2048-bit tidak terdampak.
format: news
topics: [AI, keamanan, riset]
author: hey.nous
publishedAt: 2026-11-09
updatedAt: 2026-11-09
readingMinutes: 4
cover:
  src: /assets/covers/cover-deepmind-ai-agents-rsa-1024.jpg
  alt: Ilustrasi 3D abstrak dua potongan kunci bercahaya yang terbelah di atas grid navy
  width: 2048
  height: 1152
  caption: Ilustrasi editorial.
  credit: Hey Nous
keyTakeaways:
  - Google DeepMind mengumumkan pada 6 November 2026 bahwa agen AI yang dipandu manusia menemukan dua kelemahan pada RSA 1024-bit, yang dijelaskan dalam dua makalah kerja.
  - Hasil pertama melemahkan tanda tangan digital RSA: begitu penyerang mengendalikan sekitar setengah blok yang ditandatangani, padding tidak lagi memberi perlindungan berarti, dan DeepMind memperkirakan metode pemalsuan baru sekitar 1.600 kali lebih baik dari metode terbaik sebelumnya untuk sidik 32-byte.
  - Hasil kedua, yang disebut fan factories, memangkas biaya memfaktorkan setiap kunci 1024-bit tambahan menjadi sekitar 1/58 dari satu pemfaktoran penuh, kira-kira 30 kali lebih murah dari metode batch terbaik sejak 1993.
  - Kedua makalah menyatakan dengan jelas bahwa RSA 2048-bit ke atas tidak terancam, dan keduanya belum melalui peer review.
primarySources:
  - title: "Modular Roots from a Restricted Oracle: Faster Affine Roots and a 1024-bit Computation (makalah kerja Google DeepMind)"
    url: https://storage.googleapis.com/deepmind-media/papers/Faster_Affine_Root_and_a_1024bit%20Computation.pdf
    publishedAt: 2026-11-06
  - title: "Fan Factories: Multiple Number Fields in Factorization Factories and Batch NFS (makalah kerja Google DeepMind)"
    url: https://storage.googleapis.com/deepmind-media/papers/Fan_Factories_Multiple_Number_Fields_in_Factorization_Factories_and_Batch_NFS.pdf
    publishedAt: 2026-11-05
  - title: "Google DeepMind AI agents find two weaknesses in legacy 1024-bit RSA (Data Studios)"
    url: https://www.datastudios.org/post/google-deepmind-ai-agents-two-weaknesses-legacy-1024-bit-rsa
    publishedAt: 2026-11-07
relatedSlugs: [openai-gpt-6-cyber, google-gemini-4-carbon]
status: published
seo:
  title: Agen AI DeepMind retak RSA-1024 lama | hey.nous
  description: Agen AI DeepMind menemukan dua kelemahan pada RSA 1024-bit: pemalsuan tanda tangan lebih cepat dan pemfaktoran batch lebih murah. Kunci 2048-bit aman.
---

## Apa yang terjadi

Google DeepMind mengumumkan pada 6 November 2026 bahwa agen AI yang bekerja di bawah arahan manusia menemukan dua kelemahan pada ==RSA 1024-bit==, standar enkripsi lama yang sudah ditinggalkan web bertahun-tahun lalu. Hasilnya dijelaskan dalam dua makalah kerja, dan wakil presiden sains DeepMind Pushmeet Kohli mempresentasikannya dengan judul "Advancing the frontier of cryptanalysis".

Riset ini dipimpin di DeepMind oleh Krishnamurthy (Dj) Dvijotham dan Abhradeep Thakurta, bekerja sama dengan kriptografer Nadia Heninger dari UC San Diego dan Inria serta Emmanuel Thomé dari Inria. DeepMind menegaskan ini riset berbantuan AI, bukan penemuan otonom: para ahli memilih masalahnya dan menilai hasil mana yang penting, sementara agen menghasilkan dan memeriksa kandidat algoritma dan bukti. Seluruh upaya itu memakan waktu berminggu-minggu, bukan bertahun-tahun seperti kriptanalisis semacam ini biasanya.

## Memalsukan tanda tangan jadi lebih murah

Hasil pertama menyasar tanda tangan digital RSA. Tanda tangan dibuat dengan menerapkan kunci privat pada blok data yang sudah diberi padding, dan padding itu sudah lama dianggap sebagai pertahanan terhadap pemalsuan. Agen menemukan bahwa pertahanan itu cepat memudar begitu penyerang mengendalikan sebagian besar blok yang ditandatangani. Saat penyerang mengendalikan kira-kira setengah blok atau lebih, padding tidak lagi memberi perlindungan berarti, dan memalsukan tanda tangan menjadi kira-kira sama sulitnya dengan menyerang sistem tanpa padding.

Ini penting dalam praktik karena antarmuka penandatanganan, di hardware security module atau API penandatanganan, sering membiarkan pemanggil memilih sebagian data yang ditandatangani. DeepMind menguji temuan ini di sandbox terhadap kunci benchmark 1024-bit dari studi September 2026 oleh Shea, Haller, Suhl, Heninger, dan Thomé. Agen mereproduksi komputasi itu dengan waktu CPU 3,5 kali lebih sedikit, 391 CPU core-years berbanding 1.380, berjalan di hingga 300.000 core CPU dan 16 GPU selama 3,2 hari. Untuk kasus yang lebih sulit, ketika penyerang hanya mengendalikan sebagian kecil blok seperti sidik 32-byte, DeepMind memperkirakan algoritma baru sekitar 1.600 kali lebih baik dari metode terbaik sebelumnya. Angka itu adalah estimasi teoretis, bukan hasil pengukuran.

## Memfaktorkan banyak kunci sekaligus juga lebih murah

Hasil kedua soal skala, dan punya nama: ==fan factories==. Memfaktorkan satu angka 1024-bit sangat mahal, dan biasanya yang kedua sama mahalnya dengan yang pertama. Pabrik faktorisasi membayar sekali untuk prakomputasi besar lalu menghabiskan lebih sedikit untuk tiap target, tapi sejak 1993 metode batch terbaik dengan anggaran prakomputasi moderat adalah multiple number field sieve karya Coppersmith.

Makalah DeepMind memberi setiap bilangan target keluarga, atau fan, bidang bilangannya sendiri, semuanya memakai satu sisi rasional prakomputasi yang sama. Dengan prakomputasi setara biaya satu pemfaktoran, setiap kunci 1024-bit berikutnya hanya memakan sekitar 1/58 dari satu pemfaktoran penuh, kira-kira 30 kali lebih murah dari metode batch terbaik sebelumnya. Identitas aljabar di balik hasil ini diperiksa mesin dengan Lean 4, dan makalah menyebut pekerjaan itu berasal dari harness dua agen, satu model menghasilkan bukti dan satu lagi memverifikasinya. Belum ada fan factory yang benar-benar dibangun, dan makalah berhati-hati menyebut angka-angka ini sebagai estimasi orde utama, bukan prediksi waktu berjalan.

:::ringkasan
Agen DeepMind menemukan dua kelemahan pada RSA 1024-bit: padding berhenti melindungi tanda tangan begitu penyerang mengendalikan sekitar setengah blok yang ditandatangani, dan metode baru bernama "fan factory" membuat pemfaktoran banyak kunci sekaligus jauh lebih murah. Kedua hasil masih teoretis atau diuji di sandbox, dan kedua makalah menyatakan RSA 2048-bit ke atas tidak terancam.
:::

## Apa artinya buat kamu

Kalau kamu memakai internet seperti biasa, tidak ada yang berubah. Perbankan, pesan, dan pembaruan perangkat lunakmu berjalan di RSA 2048-bit atau lebih besar, yang menurut DeepMind tidak disentuh hasil ini, dan web publik sudah berhenti menerbitkan sertifikat 1024-bit bertahun-tahun lalu. Panduan federal AS sudah melarang RSA 1024-bit untuk tanda tangan baru sejak 2013.

Risikonya ada di sistem yang tidak pernah diperbarui. Perangkat keras lama, perangkat embedded, akar penandatanganan kode berumur panjang, dan sertifikat arsip masih bisa membawa kunci 1024-bit, dan layanan penandatanganan yang membiarkan pihak luar memilih sebagian data yang ditandatangani adalah yang paling terekspos. Bagi tim-tim itu, ini satu lagi alasan terdokumentasi untuk menginventarisasi dan memensiunkan kunci 1024-bit sekarang, bukan menunggu migrasi pasca-kuantum memaksanya.

Sinyal yang lebih dalam adalah soal kecepatan. Asumsi kekerasan kriptografi dulu bergerak cukup lambat sehingga pembela bisa memperlakukannya sebagai sesuatu yang tetap. Bingkai DeepMind adalah asumsi itu kini harus diuji secara terus-menerus, karena riset berbantuan AI bisa menggerakkan bidang dalam hitungan minggu yang dulu butuh bertahun-tahun. Itu klaim yang layak diperhatikan, dan juga klaim yang butuh replikasi independen sebelum diperlakukan sebagai sesuatu yang sudah pasti.

Yang masih belum jelas: kedua makalah kerja belum melalui peer review, dan belum ada kelompok luar yang mereproduksi kedua hasil itu. Makalah lengkap soal hasil tanda tangan belum tersedia untuk publik saat pengumuman, jadi kriptografer luar belum bisa memeriksa sendiri estimasi 1.600x itu. Angka pemfaktoran batch 30x adalah estimasi orde utama tanpa implementasi di belakangnya, dan para penulis menyebut membuat fase offline menjadi praktis sebagai masalah terbuka.

:::peringatan
Jangan membaca ini sebagai "RSA sudah jebol." Kedua makalah menyatakan dengan tegas bahwa RSA 2048-bit ke atas tidak terancam, tidak ada sistem aktif yang disentuh, dan angka terbesar di sini, 1.600x dan 30x, adalah estimasi teoretis. Hasilnya hanya berlaku untuk RSA 1024-bit yang sudah usang.
:::
