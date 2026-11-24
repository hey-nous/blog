---
title: GLM-5.4 Z.ai menjalankan lapisannya dua kali agar berpikir lebih dalam
slug: glm-5-4-loop-transformer
locale: id
translationGroupId: glm-5-4-loop-transformer
translationStatus: reviewed
dek: Model flagship baru Z.ai menjalankan satu blok berisi 28 lapisan dua kali per token, bukan menambah parameter, dan diklaim berpikir seperti model dua sampai empat kali ukurannya. Masalahnya: belum ada skor benchmark flagship yang dipublikasikan.
format: news
topics: [AI, model, riset]
author: hey.nous
publishedAt: 2026-11-24
updatedAt: 2026-11-24
readingMinutes: 4
cover:
  src: /assets/covers/cover-glm-5-4-loop-transformer.jpg
  alt: Ilustrasi 3D abstrak berupa pita lapisan navy dan oranye yang melingkar kembali ke dirinya sendiri di atas latar krem
  width: 2048
  height: 1152
  caption: Ilustrasi editorial.
  credit: Hey Nous
keyTakeaways:
  - Z.ai merilis GLM-5.4 pada 23 November 2026, flagship pertama yang dibangun di atas Loop Transformer: 28 lapisan dari basis GLM-5 yang berukuran sekitar 750 miliar parameter dijalankan dua kali per token.
  - Z.ai mengklaim model ini mencapai kecerdasan yang sebanding dengan model 2-3 triliun parameter, tapi belum memublikasikan skor benchmark flagship apa pun; satu-satunya angka berasal dari model uji 30 miliar parameter yang lebih kecil.
  - Pada uji 30 miliar parameter itu, looping memangkas token keluaran 10-14% pada benchmark matematika dan sains, memindahkan sebagian penalaran dari chain-of-thought yang terlihat ke dalam loop itu sendiri.
  - GLM-5.4 sudah bisa dipakai sekarang lewat GLM Coding Plan, ZCode, dan Z.ai Chat; API masih segera hadir dan bobot terbuka dijanjikan setelah penguatan keamanan selesai.
  - Z.ai memperingatkan model ini bisa terjebak dalam loop "marathon thinking" yang terlalu panjang, di mana ia terus bernalar alih-alih menjawab.
primarySources:
  - title: "GLM-5.4: Toward Generalized Coding with Our First Loop Transformer (Z.ai)"
    url: https://z.ai/blog/glm-5.4
    publishedAt: 2026-11-23
  - title: "Z AI Releases GLM-5.4: A 750B Loop Transformer That Runs 28 Layers Twice (MarkTechPost)"
    url: https://www.marktechpost.com/2026/11/23/zai-glm-5-4-loop-transformer/
    publishedAt: 2026-11-23
relatedSlugs: [google-gemini-4-neon, kimi-hosted-agents]
status: published
seo:
  title: GLM-5.4 Z.ai: model yang berpikir dua kali | hey.nous
  description: GLM-5.4 Z.ai menjalankan 28 lapisan dua kali per token alih-alih tumbuh ke triliunan parameter. Ide, angka, dan hal yang masih belum terbukti.
---

## Apa yang terjadi

Z.ai merilis GLM-5.4 pada 23 November 2026, model flagship yang dibangun di atas ide yang mereka sebut ==Loop Transformer==. Alih-alih menumpuk lebih banyak lapisan atau parameter, GLM-5.4 mengambil satu blok berisi 28 lapisan dari basis GLM-5 yang berukuran sekitar 750 miliar parameter dan menjalankannya dua kali untuk setiap token, menyempurnakan hasilnya pada putaran kedua. Z.ai mengatakan model ini mencapai kecerdasan yang sebanding dengan model berukuran 2 sampai 3 triliun parameter, tanpa benar-benar menjadi sebesar itu.

Ide ini sendiri bukan hal baru. Universal Transformer dari 2018 sudah mengusulkan kedalaman dengan bobot bersama, dan model loop yang lebih kecil sudah menunjukkan peningkatan sebelumnya. Yang baru adalah menerapkannya pada skala flagship. Z.ai mengatakan mereka memvalidasi desain ini secara bertahap pada model basis 1 miliar, 4 miliar, 30 miliar, dan 750 miliar parameter sebelum menerapkannya ke flagship.

:::ringkasan
GLM-5.4 adalah flagship Loop Transformer pertama Z.ai: 28 lapisan, dijalankan dua kali per token, pada basis sekitar 750 miliar parameter. Z.ai mengklaim model ini berpikir seperti model 2-3 triliun parameter, tapi belum memublikasikan skor benchmark flagship untuk membuktikannya.
:::

## Cara kerja loop ini

Pada Transformer standar, setiap lapisan berjalan sekali per forward pass. Pada GLM-5.4, sekelompok lapisan dengan bobot bersama berjalan beberapa iterasi, menyempurnakan hidden state dari putaran sebelumnya. Jaringan menjadi lebih dalam tanpa menambah parameter, karena bobot yang sama dipakai ulang.

Melakukan itu pada skala 750 miliar parameter butuh tiga perubahan teknis, menurut Z.ai. Gerbang per token mengatur seberapa banyak setiap iterasi menulis kembali ke memori kerja model, jadi putaran pertama menulis secara konservatif dan putaran kedua menyempurnakan. Desain cache hibrida membuat loop kedua memakai ulang data attention yang dipilih pada putaran pertama, sehingga loop tambahan hanya butuh satu sliding window kecil, bukan cache penuh kedua. Dan loop kedua memakai ulang indeks attention dari loop pertama, tanpa pekerjaan indexing tambahan.

Hasil yang dilaporkan Z.ai adalah kecepatan dan jawaban yang lebih pendek. GLM-5.4 mencapai hingga 200 token per detik di luar jam sibuk dan bertahan di 70-80 token per detik pada beban puncak. Pada model uji 30 miliar parameter yang terkontrol, looping memangkas panjang keluaran rata-rata 10-14% pada benchmark matematika dan sains, sebagian besar dari chain-of-thought yang lebih pendek. Intinya, sebagian penalaran berpindah dari token keluaran yang eksplisit ke kedalaman diam di dalam loop.

Model ini juga menandai awal dari apa yang disebut Z.ai ==Generalized Coding==: memakai kode sebagai lapisan eksekusi untuk tugas di luar perangkat lunak, dari membuat video dan game sampai pemodelan 3D dan desain mekanik di FreeCAD. GLM-5.4 menambahkan vision native ke tier flagship untuk mendukung dorongan itu.

## Apa artinya buat kamu

Untuk sekarang, jangkauan praktisnya masih sempit. GLM-5.4 tersedia lewat produk Z.ai sendiri: GLM Coding Plan, aplikasi desktop ZCode, dan Z.ai Chat. Belum ada API publik, yang masih terdaftar sebagai segera hadir, dan belum ada bobot terbuka, yang dijanjikan setelah penguatan keamanan selesai.

Pertanyaan yang lebih besar adalah apakah looping bisa menjadi alternatif nyata untuk memperbesar model. Kalau model 750 miliar parameter benar-benar bisa menandingi model 2-3 triliun parameter dengan berpikir dua kali alih-alih tumbuh, itu mengubah ekonomi model frontier: memori lebih sedikit, bandwidth lebih kecil, serving lebih murah. Z.ai juga tidak sendirian di sini. Thinking Machines merilis Inkling 2 Mini, model loop lainnya, pada 20 November, tiga hari sebelum GLM-5.4.

:::peringatan
Jangan anggap klaim 2-3 triliun parameter sebagai fakta terukur. Z.ai tidak memublikasikan skor benchmark flagship untuk GLM-5.4. Satu-satunya hasil kuantitatif dalam postingannya berasal dari model uji 30 miliar parameter, jauh di bawah level frontier, dan evaluator independen belum memublikasikan skor terverifikasi.
:::

Yang masih belum jelas: apakah loop ini bertahan pada tugas penalaran tersulit tanpa berputar-putar. Z.ai mengakui GLM-5.4 bisa terjebak dalam loop "marathon thinking" yang terlalu panjang, meski mereka mengatakan refleksi ekstra itu secara konsisten meningkatkan akurasi. Lab ini sekarang menjajaki adaptive compute, di mana token yang lebih sulit akan mendapat lebih banyak iterasi secara dinamis, dan mengatakan model berikutnya yang jauh lebih besar akan membawa semua pelajaran dari sini.
