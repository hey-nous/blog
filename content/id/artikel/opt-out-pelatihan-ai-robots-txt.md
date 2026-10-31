---
title: Empat lab AI sepakat satu opt-out pelatihan AI di robots.txt
slug: opt-out-pelatihan-ai-robots-txt
locale: id
translationGroupId: ai-training-opt-out-robots-txt
translationStatus: reviewed
dek: OpenAI, Google, Microsoft, dan Anthropic menyatakan pada 30 Oktober 2026 bahwa mereka akan menghormati satu token robots.txt bersama untuk preferensi pelatihan AI. Satu baris bisa menggantikan satu aturan per perusahaan, tetapi sebagian besar sistemnya belum aktif, dan token ini tidak mencakup jawaban AI atau data yang sudah dikumpulkan.
format: news
topics: [AI, policy, web]
author: hey.nous
publishedAt: 2026-10-31
updatedAt: 2026-10-31
readingMinutes: 4
cover:
  src: /assets/covers/cover-ai-training-opt-out-robots-txt.jpg
  alt: Ilustrasi 3D abstrak berupa panel halaman web krem dengan gerbang navy kecil dan bentuk-bentuk navy dan oranye yang lembut mendekatinya
  width: 2048
  height: 1152
  caption: Ilustrasi editorial.
  credit: Hey Nous
keyTakeaways:
  - OpenAI, Google, Microsoft, dan Anthropic mengumumkan pada 30 Oktober 2026 bahwa mereka akan menghormati token kebijakan robots.txt bersama, __usage_ai-training, untuk preferensi pelatihan AI.
  - Token ini didefinisikan dalam Internet-Draft individual IETF oleh Kevin Kelley, pimpinan teknis standar di Anthropic, tertanggal 30 Oktober 2026 dan berakhir 3 Mei 2027; token ini belum menjadi standar formal IETF.
  - Jadwalnya sangat berbeda: Anthropic menyatakan sudah mulai menerapkan dukungan, OpenAI menyatakan dalam beberapa bulan ke depan, Microsoft menyebut 1 Februari 2027, dan Google menyebut 2027.
  - Sinyal ini hanya mencakup pelatihan. Sinyal ini tidak memblokir crawling atau pencarian, tidak menghapus konten yang sudah dikumpulkan atau dilatihkan, dan bersifat sukarela sehingga hanya mengikat penyedia yang mengadopsinya.
  - Microsoft melangkah lebih jauh dari token bersama, dengan menambah preferensi grounding AI yang terpisah dan kontrol pelatihan per halaman, serta batas waktu 1 Maret 2027 bagi situs yang masih mengandalkan tag NoArchive dan NoCache lamanya.
primarySources:
  - title: "Supporting a shared AI training control for websites (Google Search Central Blog)"
    url: https://developers.google.com/search/blog/2026/10/ai-training-control
    publishedAt: 2026-10-30
  - title: "Making it easier for websites to express AI training preferences (OpenAI)"
    url: https://openai.com/index/helping-websites-express-ai-training-preferences
    publishedAt: 2026-10-30
  - title: "Machine-Readable Training Preference Signal (IETF Internet-Draft)"
    url: https://datatracker.ietf.org/doc/draft-kelley-aipref-training-preference-signal/
    publishedAt: 2026-10-30
  - title: "Microsoft Bing gives publishers more control over how AI uses their content (Search Engine Land)"
    url: https://searchengineland.com/microsoft-bing-gives-publishers-more-control-over-how-ai-uses-their-content-499967
    publishedAt: 2026-10-30
relatedSlugs: [google-gemini-4-carbon-keamanan-siber]
status: published
seo:
  title: Satu opt-out pelatihan AI untuk empat lab | hey.nous
  description: OpenAI, Google, Microsoft, dan Anthropic akan menghormati satu token robots.txt bersama untuk opt-out pelatihan AI. Cara kerjanya, jadwal tiap lab, dan batas-batasnya.
---

## Apa yang terjadi

Pada 30 Oktober 2026, empat laboratorium AI terbesar sepakat atas satu cara bagi situs web untuk menolak pelatihan AI. OpenAI, Google, Microsoft, dan Anthropic masing-masing menyatakan akan menghormati token kebijakan ==robots.txt== bersama, ==__usage_ai-training==, sehingga penerbit tidak lagi harus menulis aturan terpisah untuk setiap crawler perusahaan. Selama ini, menolak berarti menyebut setiap crawler satu per satu, misalnya Google-Extended untuk Google, dan mengulang pekerjaan itu setiap kali crawler baru muncul.

Mekanismenya sendiri sengaja dibuat membosankan, dan justru di situlah kelebihannya. Mekanisme ini memakai sintaks robots.txt biasa, tidak memperkenalkan direktif baru maupun tata bahasa baru, dan menaruh token di tempat nama crawler biasanya ditulis. Contoh dari draf itu sendiri adalah:

```
User-Agent: __usage_ai-training
Disallow: /
Allow: /press-kit/
```

Kelompok aturan itu menyatakan preferensi menolak pelatihan AI untuk semua jalur kecuali yang berada di bawah /press-kit/. Kelompok wildcard, User-Agent: *, tidak cocok dengan token ini, dan file robots.txt tanpa kelompok token berarti tidak menyatakan preferensi apa pun. Draf berjudul Machine-Readable Training Preference Signal ini ditulis oleh Kevin Kelley, pimpinan teknis standar di Anthropic, dalam kelompok kerja AI Preferences di IETF. Draf ini tertanggal 30 Oktober 2026 dan berakhir 3 Mei 2027. Sebagai Internet-Draft individual, draf ini belum didukung IETF dan belum memiliki kedudukan formal dalam proses standar IETF.

Keempat komitmen itu bukan komitmen yang sama pada hari yang sama. Anthropic sudah mulai menerapkan dukungan, menurut Kelley. OpenAI menyatakan akan menerapkan sinyal ini dalam beberapa bulan ke depan dan akan membagikan detail implementasinya nanti, sementara kontrol crawler yang sudah ada tetap berlaku. Google menyatakan akan mendukung kontrol ini bersama penyedia AI lain pada 2027. Microsoft memberi tanggal paling pasti: Microsoft akan mulai menghormati preferensi baru ini pada 1 Februari 2027, seiring halaman-halaman di-crawl ulang.

## Satu token, empat jam yang berbeda

Pengumuman Google menjelaskan interaksi terpenting untuk sistemnya sendiri. Jika sebuah situs memakai token bersama untuk menolak pelatihan dan tidak secara eksplisit menyebut Google-Extended, Google berencana menafsirkannya seolah penerbit telah melarang Google-Extended, kontrol pelatihan yang ditawarkan Google sejak 2023. Kontrol khusus perusahaan tetap berfungsi berdampingan dengan sinyal bersama, sehingga situs bisa menolak secara luas sekaligus menyesuaikan aturan per penyedia. Google juga menyatakan situs yang secara khusus mengizinkan Google-Extended tetap berpeluang muncul dalam jawaban dan menerima klik lewat grounding di Gemini Apps.

Microsoft menjadi pengecualian dalam cakupan, bukan hanya waktu. Di luar preferensi pelatihan bersama, Microsoft menambah preferensi ==AI grounding== yang terpisah: apakah konten boleh membantu menghasilkan jawaban AI di Bing, Copilot, dan Microsoft 365, berbeda dari melatih model. Microsoft juga memperluas preferensi pelatihan ke tingkat halaman lewat meta tag atau header respons, serta menambah opsi Limited Grounding yang mengizinkan grounding di produk Microsoft sendiri tetapi tidak di layanan grounding yang dijualnya ke perusahaan lain. Pelatihan dan grounding sama-sama default ke Allow bila tidak ada preferensi yang diterbitkan. Jadwal Microsoft, seperti dilaporkan dari pengumumannya, berjalan dari kontrol grounding sementara di Bing Webmaster Tools pada 15 Desember 2026, ke penghormatan preferensi baru pada 1 Februari 2027, dengan situs yang memakai tag NoArchive atau NoCache lama diminta beralih paling lambat 1 Maret 2027. Preferensi grounding sementara berakhir 30 September 2027.

:::ringkasan
Berita utamanya adalah koordinasi, bukan perlindungan instan. Empat lab sepakat atas satu token dan satu makna untuk preferensi pelatihan AI, tetapi hanya Anthropic yang menyatakan implementasi sudah dimulai. Yang lain masih berjarak berbulan-bulan, dan token bersama itu sendiri masih harus bertahan dalam proses standar sebelum bisa disebut standar.
:::

## Apa artinya buat kamu

Jika kamu mengelola situs web, saran praktis untuk hari ini tidak berubah: pertahankan aturan khusus perusahaan yang sudah kamu miliki, karena itulah yang benar-benar bekerja sekarang. Menambah token bersama tidak membutuhkan biaya dan bisa melindungimu begitu dukungan tiba, tetapi menambahkannya hari ini tidak mengaktifkan apa pun di Google, OpenAI, atau Microsoft. Anggap token ini sebagai reservasi untuk sistem yang masih dibangun, bukan blokade yang sudah ditegakkan.

Jika kamu hanya membaca web, perubahannya bahkan lebih tidak langsung. Sinyal ini menyangkut pelatihan model masa depan, bukan apa yang muncul di hasil pencarian atau jawaban AI hari ini. Menolak pelatihan untuk sebuah situs tidak mengeluarkannya dari pencarian, dan bagi Microsoft hal itu secara eksplisit tidak memengaruhi kelayakan untuk hasil Bing biasa. Persoalan jawaban AI, ketika model mengutip atau merangkum halaman secara real time, adalah pertanyaan terpisah, dan hanya kontrol grounding Microsoft yang menanganinya secara langsung dalam pengumuman ini.

Alasan penerbit tetap peduli adalah daya tawar. Selama bertahun-tahun, setiap lab menetapkan nama crawler dan aturannya sendiri, sehingga beban pemeliharaan jatuh ke situs-situs terkecil. Token bersama membalik beban itu: satu entri, dibaca dengan cara yang sama oleh setiap penyedia yang berpartisipasi. Jika token ini bertahan, crawler AI baru berikutnya tidak akan memaksa setiap penerbit mempelajari nama baru. Jika tidak bertahan, penerbit akan kembali memelihara daftar, dan para pengadopsi awal hanya mengeluarkan sedikit biaya untuk mengetahuinya.

:::peringatan
Jangan salah mengartikan token ini sebagai blokade AI secara umum. Token ini bukan direktif untuk perilaku crawling, tidak menghentikan halaman untuk diindeks atau dikutip dalam jawaban AI, dan tidak berbuat apa pun terhadap konten yang sudah dikumpulkan ke dalam dataset atau dilatihkan ke model yang sudah ada. Robots.txt selalu bekerja atas dasar kepercayaan, dan sinyal ini bersifat sukarela: sinyal ini hanya mengikat penyedia yang memilih untuk menghormatinya.
:::

Yang masih belum jelas: apakah draf ini menjadi standar yang bertahan sebelum berakhir pada 3 Mei 2027, bagaimana implementasi tiap lab akan menangani kasus tepi seperti override per halaman dan perjanjian privat, dan apakah penyedia lain akan bergabung. Meta, misalnya, menyambut sinyal bersama dalam peliputan pengumuman ini tetapi tidak berkomitmen untuk menghormatinya. Ujian nyata pertama bukan pengumumannya. Melainkan penerbit pertama yang menambah token, menunggu crawl ulang, dan memeriksa apakah setiap lab benar-benar menghormatinya.
