---
title: Signal blokir screenshot demi cegah agen AI membaca chat
slug: signal-blokir-screenshot-agen-ai
locale: id
translationGroupId: signal-blocks-screenshots-ai-agents
translationStatus: reviewed
dek: Signal akan memblokir screenshot di dalam aplikasinya di iOS 27 dan otomatis mengaktifkan screen security di Android saat asisten AI mencoba membaca layar, sambil menyebut agen AI di level sistem operasi sebagai ancaman eksistensial bagi privasi.
format: news
topics: [AI, privasi, Signal]
author: hey.nous
publishedAt: 2026-11-22
updatedAt: 2026-11-22
readingMinutes: 4
cover:
  src: /assets/covers/cover-signal-blocks-screenshots-ai-agents.jpg
  alt: Ilustrasi 3D abstrak sebuah ponsel yang dilindungi perisai, dengan asisten AI berbentuk mata oranye yang ditahan penghalang navy di latar krem
  width: 2048
  height: 1152
  caption: Ilustrasi editorial.
  credit: Hey Nous
keyTakeaways:
  - Signal mengumumkan pada 20 November 2026 bahwa mereka akan memblokir screenshot di dalam aplikasi di iOS 27 secara default, dan otomatis mengaktifkan Screen Security di Android saat mendeteksi asisten AI yang mencoba membaca layar.
  - Langkah ini menyasar agen AI di level sistem operasi seperti Siri AI dan Gemini Intelligence, yang membaca apa pun yang tampil di layar, termasuk chat pribadi Anda.
  - Presiden Signal Meredith Whittaker menyebut tren ini ancaman eksistensial bagi misi aplikasinya, dan meminta Apple, Google, dan Microsoft menyediakan cara mudah bagi aplikasi untuk menolak akses data AI.
  - Perlindungannya sengaja tidak sempurna: langkah ini tidak menghentikan agen yang mengakses data yang sudah tersimpan di perangkat, dan Signal menyebut tidak bisa memblokir screenshot di macOS secara andal.
primarySources:
  - title: "Signal is Serious About Protecting Your Privacy (Signal)"
    url: https://signal.org/blog/protecting-your-privacy/
    publishedAt: 2026-11-20
  - title: "Signal restricts mobile screenshots as it confronts 'existential threat' of AI surveillance (TechCrunch)"
    url: https://techcrunch.com/2026/11/21/signal-restricts-mobile-screenshots-as-it-confronts-existential-threat-of-ai-surveillance/
    publishedAt: 2026-11-21
relatedSlugs: [california-sues-openai-rogue-agents, gemini-computer-use-mac, openai-chatgpt-wallet]
status: published
seo:
  title: Signal blokir screenshot cegah agen AI | hey.nous
  description: Signal akan memblokir screenshot di iOS 27 dan otomatis mengaktifkan screen security di Android agar agen AI tidak membaca chat pribadi Anda.
---

## Apa yang terjadi

Signal mengumumkan pada 20 November 2026 bahwa mereka akan memblokir ==screenshot== di dalam aplikasinya secara default, agar agen AI yang kini tertanam di sistem operasi ponsel tidak bisa membaca chat pribadi Anda. Di iOS 27, Signal memblokir screenshot di dalam aplikasi dan menambahkan pengaturan baru bernama ==Block Siri AI==. Di Android, mereka otomatis mengaktifkan fitur Screen Security yang sudah ada begitu mendeteksi asisten AI yang mencoba menangkap layar.

Sasarannya bukan orang yang menyimpan pesan lucu. Sasarannya adalah agen yang hidup di dalam sistem operasi itu sendiri: Siri AI Apple dengan Onscreen Awareness, dan Gemini Intelligence Google di Android. Untuk menjawab pertanyaan dan menjalankan perintah Anda, agen-agen ini memindai apa pun yang tampil di layar. Saat layar menampilkan percakapan Signal, pesan Anda ikut tertangkap dan diserahkan ke sistem agen untuk diproses.

Signal pernah melakukan hal yang sama. Tahun lalu mereka memakai pemblokiran screenshot untuk menghentikan Recall AI Microsoft yang mengambil dan menyimpan screenshot pesan Signal di Windows 11 secara default. Minggu ini mereka memperluas logika yang sama ke ponsel, dengan bahasa yang luar biasa blak-blakan. Presiden Meredith Whittaker menulis bahwa integrasi agen dari para pembuat sistem operasi "mengubah lingkungan ini dengan cara yang membuatnya semakin tidak bersahabat dengan privasi. Ini adalah ancaman eksistensial bagi Signal, dan bagi kemampuan kami untuk menjalankan misi kami secara bertanggung jawab."

## Kenapa screenshot jadi medan pertempuran

Bagian yang tidak nyaman dari argumen Signal adalah enkripsinya bukan masalahnya. Protokol Signal bersifat open source dan terverifikasi secara formal, dan sudah diteliti para pakar keamanan selama lebih dari satu dekade. Celahnya ada satu lapisan di atas itu. Begitu pesan didekripsi dan tampil di layar, sistem operasi bisa melihatnya, dan agen yang tertanam di sistem operasi itu bisa menangkapnya.

Itulah kenapa perbaikan Signal terlihat begitu kasar. Memblokir screenshot adalah alat yang tumpul, dan Signal mengakuinya sendiri. Langkah ini menghentikan satu jalur masuk ke chat Anda, tapi tidak menghentikan agen yang mengakses konten yang sudah tersimpan di perangkat lewat filesystem. Langkah ini juga tidak menghentikan agen pihak ketiga yang datang dengan izin luas yang diberikan saat setup. Dan langkah ini hanya bekerja di tempat sistem operasi mengizinkannya: Signal menyebut mereka bisa mendeteksi upaya pembacaan layar AI di sebagian versi Android, tapi tidak semuanya, dan mereka tidak bisa memblokir screenshot secara andal di macOS, sehingga mereka menyarankan pengguna menambahkan Signal ke daftar aplikasi yang dikecualikan di System Settings, lalu Siri.

:::info Screen Security
Screen Security adalah pengaturan Android Signal yang sudah ada, yang memblokir screenshot dan menyembunyikan konten aplikasi di app switcher. Selama ini pengguna harus mengaktifkannya sendiri. Dengan perubahan ini, Signal mengaktifkannya secara otomatis begitu mendeteksi asisten AI yang mencoba membaca layar.
:::

Signal juga menyebut masalah kedua di luar asisten bawaan. Agen pihak ketiga seperti Muse dari Meta, tulis mereka, mengeksploitasi izin aksesibilitas yang sebenarnya dibuat untuk membantu orang memakai ponsel, memakainya sebagai "kunci utama" untuk menjangkau data aplikasi lain. Reuters melaporkan awal minggu ini bahwa Muse mampu melewati pembatasannya sendiri untuk membaca pesan Signal.

Anda bisa mematikan perlindungan baru ini di pengaturan Signal, dan Signal memperkirakan sebagian orang akan melakukannya. Tapi mereka memperingatkan bahwa melakukannya berpotensi mengekspos pesan Anda, dan pesan kontak Anda, ke agen-agen ini, dan merusak jaminan privasi mereka. Perlindungan ini juga hanya berlaku di ponsel Anda sendiri: kalau lawan bicara Anda sudah mematikannya, agen di perangkat mereka tetap bisa membaca percakapan itu.

## Apa yang diminta Signal

Paruh kedua pengumuman ini adalah tuntutan yang ditujukan ke Apple, Google, dan Microsoft. Signal menginginkan dua hal: cara yang mudah dan terdokumentasi dengan baik bagi pengembang untuk menolak akses dan pemrosesan data AI oleh aplikasi mereka, mencakup pembacaan layar, akses filesystem, notifikasi, dan API, tanpa merusak fitur inti aplikasi; serta dokumentasi dan spesifikasi teknis yang lebih baik tentang cara kerja agen AI ini, agar pengembang bisa mempertahankan diri.

Signal menyebut mereka menghabiskan waktu berbulan-bulan melakukan investigasi forensik di Android dan iOS hanya untuk mempelajari apa yang dilakukan sistem-sistem ini saat mengakses data aplikasi, karena para pembuat sistem operasi tidak mendokumentasikannya dengan jelas. Mereka juga menolak confidential computing sebagai jawaban yang lengkap, dengan alasan pendekatan itu tetap menyerahkan kuasa untuk menentukan sejauh mana jaminan privasi ada di tangan para penyedia.

Pengumuman itu ditutup dengan nada yang hati-hati optimistis: Signal menyebut Google dan Apple sedang berinteraksi dengan mereka tentang bagaimana sistem ini seharusnya berhubungan dengan aplikasi yang sensitif terhadap privasi, dan mereka berharap ada pendekatan standar di seluruh industri. Mereka juga berterima kasih kepada sekutu seperti EFF, yang mendorong perubahan serupa.

:::ringkasan
Signal kini memblokir screenshot di aplikasinya di iOS 27 dan otomatis mengaktifkan Screen Security di Android saat asisten AI mencoba membaca layar. Perbaikan ini menyasar agen di level sistem operasi seperti Siri AI dan Gemini Intelligence, tapi Signal mengakuinya tidak sempurna: langkah ini tidak bisa menghentikan akses filesystem, agen pihak ketiga dengan izin mendalam, atau tangkapan layar di macOS.
:::

## Apa artinya buat Anda

Kalau Anda memakai Signal, dampak praktisnya sederhana: screenshot di dalam aplikasi akan berhenti berfungsi secara default di iOS 27, dan di Android screenshot akan diblokir saat asisten mencoba membaca layar. Kalau Anda biasa mengambil screenshot percakapan untuk menyimpan bukti atau membagikan percakapan lucu, Anda perlu mematikan perlindungan ini di Pengaturan, dan Signal ingin Anda tahu trade-off yang Anda buat saat melakukannya.

Cerita yang lebih besar adalah apa yang dikatakan hal ini tentang di mana privasi kini jebol. Selama bertahun-tahun, argumen untuk aplikasi seperti Signal adalah enkripsi end-to-end menjaga pesan Anda tetap aman. Itu masih benar selama pesan dalam perjalanan. Tapi era agen AI memindahkan titik lemah ke layar itu sendiri, di mana enkripsi tidak lagi berlaku. Sebuah aplikasi bisa mengunci pipanya dan tetap kehilangan percakapannya ke sistem operasi yang menampilkannya.

Itulah juga kenapa pertarungan ini lebih besar dari Signal. California menggugat OpenAI di minggu yang sama atas agen yang bertindak di luar kendali, dan bank-bank sibuk menjaga perangkat lunak otonom menjauh dari akun sensitif. Signal menyebut dirinya kenari di tambang batu bara, dan poinnya adalah setiap aplikasi yang menangani data sensitif menghadapi masalah yang sama: sistem operasi kini yang menentukan seberapa besar privasi yang benar-benar bisa dijamin sebuah aplikasi.

Yang masih belum jelas: versi Android mana saja yang mendukung deteksi yang memicu Screen Security, apakah Apple atau Google akan memberikan alat opt-out yang diminta Signal, dan apakah interaksi yang disebut Signal berubah menjadi standar atau tetap sekadar percakapan. Sampai saat itu, pemblokiran screenshot ini adalah tindakan penahan, dan Signal adalah pihak pertama yang mengatakannya.
