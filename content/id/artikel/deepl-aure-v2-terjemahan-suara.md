---
title: "DeepL Aure v2: terjemahan suara kini dua kali lebih cepat"
slug: deepl-aure-v2-terjemahan-suara
locale: id
translationGroupId: deepl-aure-v2
translationStatus: reviewed
dek: DeepL meluncurkan Aure v2 pada 26 November 2026, model terjemahan suara yang mengubah ucapan langsung menjadi ucapan terjemahan dalam satu langkah. DeepL mengklaim jeda median terpangkas setengah dibanding Aure pertama, kualitasnya mengalahkan enam sistem pesaing dalam pengujiannya sendiri, dan model ini sudah live untuk pelanggan DeepL Voice dalam enam bahasa.
format: news
topics: [AI, translation, voice]
author: hey.nous
publishedAt: 2026-11-28
updatedAt: 2026-11-28
readingMinutes: 4
cover:
  src: /assets/covers/cover-deepl-aure-v2-voice-translation.jpg
  alt: Ilustrasi abstrak dua gelombang suara yang mengalir, navy dan oranye, menyatu menjadi satu aliran halus di atas latar krem
  width: 2048
  height: 1152
  caption: Ilustrasi editorial.
  credit: Hey Nous
keyTakeaways:
  - DeepL meluncurkan Aure v2 pada 26 November 2026 di Unmute Summit pertamanya di Tokyo. Ini model end-to-end baru yang menerjemahkan ucapan langsung menjadi ucapan, menggantikan relay lama: transkripsi, terjemahan, lalu sintesis suara.
  - DeepL menyebut model ini memangkas jeda median terjemahan 50% dibanding Aure pertama, yang baru meluncur 15 hari sebelumnya, dan separuh kata terjemahan sampai ke pendengar dalam 3,3 detik.
  - Dalam studi internal DeepL pada November 2026, Aure v2 mencetak kualitas terjemahan lebih tinggi dari enam sistem pesaing di setiap pasangan bahasa yang diuji, dengan kesalahan Inggris-Jepang 32% lebih sedikit dibanding Google Gemini 3.5 Live Translate.
  - Aure v2 sudah live di DeepL Voice untuk Rapat Online, Percakapan Tatap Muka, dan API for Voice, dalam bahasa Inggris, Jerman, Prancis, Spanyol, Jepang, dan Korea, dan aktif otomatis.
  - Semua angka utama berasal dari studi internal DeepL sendiri, belum ada verifikasi independen, jadi angka-angka itu adalah klaim perusahaan, bukan fakta yang sudah pasti.
primarySources:
  - title: "DeepL introduces Aure v2, its fastest Voice AI translation model (DeepL)"
    url: https://www.deepl.com/en/press-release/aure-v2
    publishedAt: 2026-11-26
  - title: "DeepL Introduces Aure v2, Its Fastest Voice AI Translation Model (PR Newswire)"
    url: https://www.prnewswire.com/news-releases/deepl-introduces-aure-v2-its-fastest-voice-ai-translation-model-302950629.html
    publishedAt: 2026-11-26
relatedSlugs: [tencent-hy4-vision-computer-use, gemini-computer-use-mac]
status: published
seo:
  title: DeepL Aure v2: terjemahan suara 2x lebih cepat | hey.nous
  description: DeepL meluncurkan Aure v2, model terjemahan ucapan ke ucapan yang memangkas jeda median 50% dibanding Aure pertama. Fakta, tolok ukur, dan catatan pentingnya.
---

## Apa yang terjadi

DeepL meluncurkan ==Aure v2== pada 26 November 2026, model terjemahan suara keduanya dalam lima belas hari, dan angka utamanya sederhana: jeda median dalam terjemahan langsung terpangkas setengah.

Model ini diperkenalkan di Unmute Summit pertama DeepL di Tokyo. Ia menggantikan Aure pertama, yang meluncur pada 11 November dan membuat ucapan terjemahan mengikuti suara, nada, dan intonasi pembicara. Aure v2 mempertahankan perilaku itu dan mengubah apa yang terjadi di baliknya. Alih-alih melewatkan audio melalui tiga tahap terpisah, mengubah ucapan menjadi teks, menerjemahkan teks itu, lalu menghasilkan ucapan dari terjemahan, model ini menerjemahkan langsung dari ucapan ke ucapan dalam satu model.

Hal ini penting karena setiap tahap dalam relay lama menambah waktu tunggu sendiri. Argumen DeepL adalah relay itulah sumber jedanya: hilangkan serah terima antar tahap, dan terjemahan bisa dimulai lebih cepat serta tiba lebih dekat dengan tempo percakapan sungguhan. Dalam studi internal perusahaan, separuh kata terjemahan sampai ke pendengar dalam 3,3 detik, dan jedanya hanya bertambah 0,1 detik sepanjang satu menit penuh percakapan.

DeepL juga memanfaatkan summit itu untuk meluncurkan Program Dukungan Komunikasi Multibahasa untuk Bencana di Jepang, yang memberi pemerintah daerah dan organisasi pendukung akses gratis ke DeepL Voice untuk Percakapan Tatap Muka, agar mereka bisa berbicara dengan warga terdampak bencana secara real time.

## Bagian tersulit: tahu kapan harus mulai

Arsitekturnya baru separuh cerita. Separuh lainnya adalah soal waktu, yang menurut CTO DeepL Sebastian Enderlein adalah tantangan sesungguhnya dalam terjemahan langsung: mulai terlalu dini dan kamu menerjemahkan sebelum konteksnya cukup, mulai terlalu lambat dan percakapannya tersendat.

Hal ini paling sulit pada bahasa seperti Jerman dan Jepang, di mana informasi yang menentukan makna sebuah kalimat bisa muncul di ujung kalimat. Melatih model untuk mengambil keputusan itu sulit karena rekaman terjemahan ucapan real time, dengan waktu dan ekspresi yang tepat, sangat langka. DeepL menyebut mereka memakai reinforcement learning: selama pelatihan, Aure v2 diberi penghargaan untuk terjemahan yang akurat sekaligus cepat dimulai, sehingga lama-lama ia belajar mengenali kapan ia sudah cukup mendengar untuk mulai menerjemahkan.

:::ringkasan
Aure v2 meruntuhkan relay tiga langkah lama menjadi satu model yang menerjemahkan ucapan langsung menjadi ucapan, dan reinforcement learning mengajarinya kapan harus mulai menerjemahkan tanpa menunggu satu kalimat penuh. DeepL menyebut hasilnya adalah jeda median setengah dari Aure pertama, yang baru meluncur lima belas hari sebelumnya.
:::

## Bagaimana posisinya, menurut DeepL

Peluncuran ini datang dengan klaim tolok ukur, dan semuanya berasal dari DeepL sendiri. Dalam studi internal November 2026 atas rekaman ucapan nyata berdurasi satu menit di sepuluh pasangan bahasa, dengan transkrip yang divalidasi manusia, Aure v2 mencetak kualitas terjemahan lebih tinggi dari enam sistem pesaing di setiap pasangan bahasa yang diuji. Perbandingan paling tajam yang disebut namanya adalah Inggris ke Jepang, salah satu pasangan tersulit untuk terjemahan suara langsung, di mana DeepL menyebut Aure v2 membuat kesalahan 32% lebih sedikit dibanding Google Gemini 3.5 Live Translate.

:::info End-to-end speech-to-speech
Model yang menerima audio ucapan dalam satu bahasa dan menghasilkan audio ucapan dalam bahasa lain, tanpa tahap transkripsi, terjemahan teks, dan sintesis suara yang terpisah. Menghilangkan serah terima itu memangkas jeda dan menjaga nada serta ritme tetap dekat dengan pembicara aslinya.
:::

:::peringatan
Semua angka performa dalam artikel ini berasal dari studi DeepL sendiri pada November 2026. DeepL menulis di catatan kakinya bahwa hasil bisa berbeda dalam percakapan sungguhan, dan belum ada pengujian independen atas Aure v2 yang diterbitkan. Perlakukan pemangkasan jeda 50% dan kemenangan kualitas itu sebagai klaim perusahaan sampai ada pengukuran dari pihak luar.
:::

Peluncuran ini juga datang di tengah momentum kuat DeepL Voice. DeepL menyebut total pemakaian suara naik lebih dari delapan kali lipat dari tahun ke tahun pada kuartal ketiga 2026, dengan menit rapat yang diterjemahkan naik sekitar tujuh kali. Pertumbuhan tercepat ada di Asia: pemakaian rapat naik lebih dari tujuh kali di Jepang dan lima kali di Korea Selatan, dan langganan DeepL Voice aktif dengan pemakaian rapat tumbuh sekitar dua belas kali lipat dari tahun ke tahun di Jepang dan Korea Selatan jika digabung.

## Apa artinya buat kamu

Kalau kamu sudah memakai DeepL Voice, tidak ada yang perlu dipasang: Aure v2 aktif otomatis untuk bahasa yang didukung, di rapat online, percakapan tatap muka, dan API. Ujian sesungguhnya adalah apakah rapat lintas bahasa mulai terasa seperti percakapan biasa, di mana kamu bisa menanggapi sebuah ide selagi ide itu masih disampaikan, bukan menunggu terjemahannya selesai.

Untuk tim, angka yang mungkin lebih menarik adalah angka Inggris-Jepang. Bahasa Jepang adalah bahasa di mana terjemahan langsung paling sering gagal duluan, karena kata kerjanya sering muncul di akhir, jadi pengurangan kesalahan 32% di sana, kalau terbukti di luar lab DeepL, akan lebih berarti daripada angka jeda di headline. Layanan pelanggan adalah kegunaan lain yang jelas: CEO DeepL Jarek Kutylowski membingkai peluncuran ini soal agen yang menyelesaikan masalah lebih cepat tanpa kehilangan nuansa percakapan.

Yang masih belum jelas: DeepL belum mengumumkan perubahan harga untuk Aure v2, dan enam bahasa peluncurannya masih melewatkan sebagian besar dunia, termasuk bahasa Indonesia, Hindi, dan Portugis. Klaim kualitasnya sepenuhnya bertumpu pada studi DeepL sendiri, yang dinilai dengan metrik mereka sendiri, jadi putusan sesungguhnya akan datang dari pengujian independen dan dari pengguna yang menjalankannya dalam panggilan nyata yang bising dan beraksen. Sampai saat itu, peluncuran ini adalah langkah teknis yang meyakinkan dengan angka yang masih butuh konfirmasi dari luar.
