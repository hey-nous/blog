---
title: Gemini 4 Carbon dari Google memburu celah keamanan, tapi belum bisa kamu pakai
slug: google-gemini-4-carbon-keamanan-siber
locale: id
translationGroupId: google-gemini-4-carbon
translationStatus: reviewed
dek: Model frontier terbaru Google memuncaki indeks Artificial Analysis yang diperbarui dan memimpin tiga benchmark keamanan siber, namun saat peluncuran hanya diberikan kepada sekelompok pembela siber terverifikasi. Apa yang diumumkan, apa yang benar-benar dibuktikan angka-angkanya, dan apa yang masih belum terbukti.
format: news
topics: [AI, Google, models]
author: hey.nous
publishedAt: 2026-10-30
updatedAt: 2026-10-30
readingMinutes: 4
cover:
  src: /assets/covers/cover-google-gemini-4-carbon.jpg
  alt: Ilustrasi 3D abstrak berupa perisai kristal navy gelap berfaset yang dikelilingi fragmen geometris oranye dan krem melayang di atas permukaan krem hangat
  width: 2048
  height: 1152
  caption: Ilustrasi editorial.
  credit: Hey Nous
keyTakeaways:
  - Google mengumumkan Gemini 4 Carbon pada 28 Oktober 2026, model Gemini 4 kedua dalam dua pekan, yang dibuat untuk pekerjaan rekayasa jangka panjang dan pertahanan keamanan siber.
  - Model ini menempati peringkat pertama pada Artificial Analysis Intelligence Index v5.0 yang diperbarui dengan skor 59, dan memimpin tiga benchmark keamanan siber: 88,2% pada SEC-bench Pro, 54,8% pada ExploitGym, dan 71,0% pada CWE-bench.
  - Saat peluncuran, akses hanya diberikan kepada sebagian pembela siber lewat Fairwind Program Google, dengan perluasan bertahap ke mitra tepercaya dan belum ada tanggal rilis publik.
  - Harga API perkenalan sama dengan Gemini 4 Argon: $2 per juta token input dan $10 per juta token output, dengan token input yang tersimpan di cache didiskon 95%.
  - Semua angka benchmark utama berasal dari Google sendiri, dan benchmark keamanan siber dievaluasi tanpa guardrail, sehingga konfirmasi independen masih ditunggu.
primarySources:
  - title: "Introducing Gemini 4 Carbon (Google)"
    url: https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-carbon/
    publishedAt: 2026-10-28
  - title: "Google launches Gemini 4 Carbon AI model with cybersecurity focus (Reuters via The Hindu BusinessLine)"
    url: https://www.thehindubusinessline.com/info-tech/google-launches-gemini-4-carbon-ai-model-with-cybersecurity-focus/article71638823.ece
    publishedAt: 2026-10-29
relatedSlugs: [openai-gpt-61-terra-lebih-murah]
status: published
seo:
  title: Gemini 4 Carbon Google bidik keamanan siber | hey.nous
  description: Gemini 4 Carbon dari Google memuncaki indeks Artificial Analysis dan memimpin tiga benchmark keamanan siber, tapi akses peluncuran hanya untuk pembela terverifikasi. Fakta dan catatannya.
---

## Apa yang terjadi

Google mengumumkan ==Gemini 4 Carbon== pada 28 Oktober 2026, model frontier Gemini 4 kedua dalam dua pekan, setelah Gemini 4 Argon. Google menyebutnya model terkuat sejauh ini, dengan kemampuan keamanan siber dan jangka panjang yang terdepan, dan model ini dibuat untuk pekerjaan rekayasa yang tidak muat dalam satu balasan obrolan: melacak bug yang sulit dipahami di seluruh codebase besar, memvalidasi apakah sebuah celah benar-benar bisa dieksploitasi, dan menulis perbaikannya.

Angka-angka utamanya mencakup seluruh siklus pertahanan. Carbon mencetak 88,2% pada SEC-bench Pro untuk menemukan kerentanan nyata, 54,8% pada ExploitGym untuk menguji apakah celah bisa dieksploitasi, dan 71,0% pada CWE-bench untuk menambal sampai ke akar masalah. Model ini juga menempati peringkat pertama pada Artificial Analysis Intelligence Index v5.0 yang baru diperbarui dengan skor 59, di depan Claude Opus 5.5 dari Anthropic dengan skor 58 dan GPT-6 Astra dari OpenAI dengan skor 57. Pada tes internal, Google menyatakan Carbon menghasilkan kode yang aman dengan tingkat keberhasilan lebih dari dua kali lipat dibanding Argon, dan tim Chrome-nya melaporkan bahwa Carbon menghasilkan patch berkualitas tinggi lebih dari 10 kali lebih baik daripada model frontier besar dari laboratorium lain, yang tidak disebutkan namanya oleh Google.

Kendalanya adalah akses. Mulai pekan ini, Carbon diberikan pertama-tama kepada sebagian pembela siber, lalu secara bertahap kepada mitra tepercaya tambahan lewat ==Fairwind Program== Google, sementara Google mengikuti proses sukarela pemerintah AS untuk pengujian model pra-rilis. Developer, bisnis, dan konsumen mendapatkannya belakangan, tanpa tanggal yang diumumkan. Harga API perkenalan sama dengan Argon: $2 per juta token input dan $10 per juta token output, dengan token input yang tersimpan di cache didiskon 95% dari harga input. Reuters melaporkan tarif standar setelah masa perkenalan adalah $4 dan $20 per juta token.

## Benchmark-nya, beserta catatannya

Kasus Carbon bertumpu pada benchmark, dan catatan kakinya sama pentingnya dengan skornya. Google menyatakan dengan jelas bahwa benchmark keamanan siber eksternal dievaluasi tanpa guardrail, sehingga angka 88,2%, 54,8%, dan 71,0% menggambarkan kemampuan mentah, bukan kinerja di balik lapisan keamanan yang akan dikirim ke pengguna. Peringkat Artificial Analysis juga berasal dari indeks v5.0 yang baru diperbarui, yang menambah dua benchmark dan menghapus soal-soal yang dianggap sudah jenuh oleh pembuat indeks, sehingga papan peringkat ini tidak bisa dibandingkan langsung dengan versi lama.

Klaim keamanannya bersifat internal dan spesifik. Carbon menekan kecurangan yang berhasil pada Terminal-Bench 4.0 menjadi 0,0%, dengan upaya kecurangan turun menjadi 0,4%. Model ini menahan setiap serangan yang dievaluasi pada benchmark indirect prompt injection Gray Swan, tingkat keberhasilan serangan 0,0% dibanding 0,7% pada Argon. Tim internal yang memakai Carbon di lingkungan coding langsung melaporkan bahwa peringatan misalignment berkategori berat turun hampir 80%, dan Google menyatakan Carbon memangkas klaim yang tidak didukung sekitar separuh dibanding Argon, dengan menampilkan catatan metodologi dalam hasil kerjanya alih-alih mengarang bukti yang hilang. Itu arah yang menggembirakan, tetapi pengukurannya berasal dari Google pada tes Google sendiri, bukan audit independen.

:::ringkasan
Gemini 4 Carbon adalah model frontier Google yang mengutamakan pembela: teratas pada indeks Artificial Analysis yang diperbarui, memimpin tiga benchmark keamanan siber, dan dihargai seperti Argon saat peluncuran. Pertanyaan terbukanya adalah bagaimana skor kemampuan itu diterjemahkan begitu guardrail aktif, penguji independen mendapat akses, dan model menghadapi codebase nyata, bukan rangkaian benchmark.
:::

## Apa artinya buat kamu

Bagi kebanyakan pembaca, maknanya langsung masih tidak terasa. Kamu tidak bisa mencoba Carbon hari ini, dan jika kamu bukan pembela siber dalam kelompok pertama, peluncuran ini tidak mengubah apa pun pada perkakas kamu pekan ini. Yang disinyalkan adalah arah perlombaan frontier: model dinilai bukan hanya dari kualitas obrolan, tetapi dari apakah model bisa menemukan, memverifikasi, dan memperbaiki celah nyata di seluruh codebase, dan ditahan di balik peluncuran bertahap justru karena kemampuan itu bermata dua. Model yang bisa menambal perangkat lunak kamu juga bisa, di tangan yang salah, menguji perangkat lunak orang lain.

Jika kamu menjalankan tim keamanan atau rekayasa, pelajaran praktisnya adalah memantau perluasan Fairwind, bukan papan peringkat. Pertanyaan yang menentukan adopsi adalah pertanyaan yang tidak dijawab pengumuman mana pun: bagaimana Carbon bekerja dengan guardrail aktif, seberapa sering patch-nya lolos code review kamu sendiri, dan berapa biaya sebenarnya dari proses agen multi-hari pada tarif standar $4 dan $20. Peluncuran bertahap adalah jawaban Google atas masalah penggunaan ganda, dan itu berarti bukti independen akan datang perlahan, kelompok demi kelompok.

:::peringatan
Jangan membaca skor keamanan siber sebagai bukti bahwa Carbon membuat perangkat lunak aman dengan sendirinya. Benchmark dijalankan tanpa guardrail, setiap angka utama berasal dari pengumuman Google, dan perbandingan "10 kali lebih baik" dari tim Chrome tidak menyebut model pesaingnya. Sampai pembela terverifikasi dan penguji independen mempublikasikan hasil mereka sendiri, perlakukan peluncuran ini sebagai klaim vendor yang kuat dengan peluncuran yang sengaja sempit, bukan peningkatan keamanan yang terverifikasi.
:::

Yang masih belum jelas: kapan developer, bisnis, dan konsumen akan mendapat akses, bagaimana Carbon bekerja dengan guardrail aktif, apakah peningkatan kode amannya bertahan pada codebase di luar tes Google, dan apa yang dilaporkan kelompok Fairwind begitu model ini berjalan pada sistem langsung. Sinyal paling berarti bukan tabel benchmark berikutnya. Melainkan laporan publik pertama dari para pembela yang menggunakannya sekarang.
