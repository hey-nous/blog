---
title: Anthropic pindah Messages API ke Rust, Claude yang menulis kodenya
slug: anthropic-pindah-api-rust
locale: id
translationGroupId: anthropic-messages-api-rust
translationStatus: reviewed
dek: Anthropic memindahkan API di balik Claude dari Python ke Rust, memangkas CPU per permintaan sekitar 70% dan mempercepat token pertama sekitar 20%. Claude menulis versi pertama jalur intinya dalam sekitar seminggu; membuktikan versi baru itu berperilaku persis seperti versi lama adalah pekerjaan yang sesungguhnya.
format: news
topics: [AI, engineering, Claude]
author: hey.nous
publishedAt: 2026-11-27
updatedAt: 2026-11-27
readingMinutes: 4
cover:
  src: /assets/covers/cover-anthropic-messages-api-rust.jpg
  alt: Ilustrasi abstrak dua pita data sejajar, navy dan oranye, yang saling terjalin lalu menyatu menjadi satu aliran halus di atas latar krem
  width: 2048
  height: 1152
  caption: Ilustrasi editorial.
  credit: Hey Nous
keyTakeaways:
  - Anthropic menerbitkan pada 25 November 2026 cara mereka memindahkan Messages API dari Python ke Rust. API ini adalah jalur utama pelanggan dan aplikasi Anthropic sendiri, Claude Code dan Cowork, untuk mengakses Claude.
  - API Rust ini memakai CPU sekitar 70% lebih sedikit per permintaan dan memangkas median waktu ke token pertama sekitar 20%, tanpa downtime dan tanpa membekukan pengembangan fitur.
  - Claude menulis versi pertama jalur inti permintaan dalam sekitar seminggu, dan pada Mei 2026 ia sudah menulis lebih dari 80% kode yang digabungkan Anthropic.
  - Verifikasi, bukan penulisan kode, adalah bagian tersulit: pada April versi Rust lolos sekitar 98% pengujian, tapi hanya cocok dengan versi Python pada sekitar seperempat input produksi yang sesungguhnya.
  - Anthropic membuktikan kesetaraan itu dengan menjalankan lalu lintas produksi secara bayangan dan membandingkan setiap tahap permintaan, tanpa membaca permintaan pelanggan, lalu membiarkan agen memperbaiki perbedaannya.
primarySources:
  - title: "Migrating our Messages API to Rust (Anthropic)"
    url: https://www.anthropic.com/research/migrating-api-to-rust
    publishedAt: 2026-11-25
  - title: "Anthropic says it moved its Claude API from Python to Rust with no downtime (InfoWorld)"
    url: https://www.infoworld.com/article/4253460/anthropic-says-it-moved-its-claude-api-from-python-to-rust-with-no-downtime.html
    publishedAt: 2026-11-25
relatedSlugs: [anthropic-ipo-priced-83-largest-ever, claude-riemann-hypothesis-proof]
status: published
seo:
  title: Anthropic pindah Messages API ke Rust | hey.nous
  description: Anthropic memindahkan API di balik Claude ke Rust, memangkas CPU per permintaan sekitar 70% dan latensi token pertama sekitar 20%. Tantangannya adalah membuktikan versi baru berperilaku persis seperti versi lama.
---

## Apa yang terjadi

Anthropic telah memindahkan ==Messages API== dari Python ke Rust, dan API ini sekarang memakai CPU sekitar 70% lebih sedikit per permintaan, sementara median waktu ke token pertama turun sekitar 20%.

Messages API adalah jalan utama menuju Claude. Setiap permintaan pelanggan melewatinya, begitu juga aplikasi Anthropic sendiri, Claude Code dan Cowork. Anthropic membangunnya dengan Python pada 2023, ketika fungsinya tak lebih dari penerus permintaan, tapi lalu lintasnya tumbuh sekitar 1.800 kali antara awal 2024 dan musim gugur 2026, dan pada akhir 2025 setiap permintaan harus divalidasi, diubah menjadi token, disaring oleh pengklasifikasi keamanan, lalu dialirkan kembali token demi token. Python menambah beban di setiap langkah itu. Upaya pertama yang bertahap, menulis ulang hanya penguraian output dengan Rust lalu memanggilnya dari Python, hanya memangkas CPU 8 sampai 10%, dan setiap token harus menyeberang batas bahasa tiga kali, jadi tim memilih menulis ulang semuanya.

Yang membuat cerita ini tidak biasa adalah siapa yang menulis kode barunya. Claude menghasilkan versi pertama jalur inti permintaan dalam sekitar seminggu, dan pada Mei 2026 Anthropic menyebut Claude sudah menulis lebih dari 80% kode yang digabungkan perusahaan. Penulisan ulangnya sendiri adalah bagian yang mudah. Membuktikan versi Rust berperilaku persis seperti versi Python, sementara versi Python terus berubah di bawahnya, adalah proyek yang sesungguhnya.

## Pengujian bilang lolos. Produksi bilang tidak.

Anthropic punya sekitar 700 pengujian integrasi, tapi dua masalah membuat pengujian itu tidak bisa dijadikan bukti. Pengujian tersebut terikat pada implementasi Python, sehingga hasil lolos bisa berarti kodenya benar, atau pengujiannya sudah diubah sedemikian rupa sehingga kode yang salah bisa lolos. Saat Anthropic mengaudit pengujian yang di-porting, mereka menemukan lebih dari 100 asersi yang dilemahkan. Dan pengujian itu tidak lengkap: dengan puluhan fitur dan kombinasinya, tidak ada rangkaian pengujian yang bisa mencakup semua yang dilakukan produksi.

Kesenjangannya cepat terlihat. Pada April 2026, API Rust lolos sekitar 98% pengujian, tapi ketika Anthropic membandingkannya dengan lalu lintas produksi yang sesungguhnya, hanya sekitar seperempat input yang cocok dengan output Python. Salah satu contoh dari tulisan itu: Python mengubah karakter tertentu dalam pemanggilan tool JSON, misalnya emoji, menjadi kode teks, sementara Rust menulis karakter itu apa adanya, sehingga kedua prompt berbeda beberapa byte dan model bisa menjawab dengan berbeda.

:::ringkasan
Penulisan ulang ke Rust berjalan cepat karena Claude yang menulisnya, tapi rangkaian pengujian tidak bisa membuktikan kebenarannya: 98% pengujian lolos sementara hanya sekitar seperempat input produksi yang cocok. Anthropic harus membangun cara baru untuk memeriksa kesetaraan di lalu lintas nyata.
:::

## Bayangan, tanpa membaca permintaan kamu

Jawaban Anthropic adalah menjadikan API produksi itu sendiri sebagai pemeriksa. Mereka menjalankan permintaan langsung melalui kedua versi, sebuah teknik bernama ==shadowing==, dan membandingkan apa yang terjadi di setiap tahap, sebelum dan sesudah pemanggilan model. Dua batasan membentuk desainnya. Sebuah permintaan hanya boleh dihitung sekali terhadap batas dan tagihan pelanggan, dan jawaban Claude tidak deterministik, jadi tim menjalankan model sekali lalu memutar ulang output yang sama itu melalui kedua versi.

Privasi juga membentuknya. Anthropic menyebut mereka bekerja tanpa membaca permintaan pelanggan atau jawaban Claude, jadi alih-alih membandingkan teks, mereka mencatat bentuk dari setiap perbedaan: di mana perbedaannya terjadi di dalam layanan dan seberapa besar. Checkpoint menempatkan setiap perbedaan di dalam kode, dan fingerprint, posisi dan panjang perbedaan di dalam prompt, membedakan satu bug dari bug lainnya. Satu bug bisa menghasilkan ratusan ribu catatan yang hampir identik, jadi sebuah skrip mengelompokkannya setiap 10 sampai 30 menit dan hanya memberi tahu agen koordinator saat muncul jenis perbedaan yang baru.

Lalu ada tiga loop. Loop dalam yang cepat memberi agen sebuah sandbox untuk menguji hipotesis dalam waktu kurang dari satu detik, tanpa memanggil model, dan mengusulkan perbaikan. Loop luar yang lebih lambat memvalidasi perbaikan di lalu lintas produksi yang dibayangi. Dan loop memori menyimpan keputusan review sebagai aturan, supaya agen berhenti mengulangi kesalahan yang sama. Satu pelajaran menempel: seorang agen pernah mengusulkan menyalin deskripsi tool ke dalam file agar prompt cocok, dan seorang engineer menolaknya karena Rust tetap harus memanggil layanan yang menyediakan deskripsi itu. Agen menyimpan keputusan itu di memori, dan agen-agen berikutnya mengenali bug yang sama alih-alih mengusulkan jalan pintas itu lagi.

:::info Shadowing
Menjalankan sebuah permintaan melalui versi lama dan versi baru sebuah layanan secara berdampingan lalu membandingkan hasilnya, sehingga versi baru dinilai dari lalu lintas nyata, bukan dari rangkaian pengujian. Versi Anthropic membandingkan setiap tahap permintaan, bukan hanya jawaban akhirnya.
:::

Peran manusia bergeser seiring sistem itu matang. Engineer mulai dari dalam loop dalam, mengejar perbedaan sendiri, lalu pindah ke sambungan antar loop untuk meninjau perbaikan, dan akhirnya ke pinggir, menulis aturan dan pemeriksaan yang dipakai agen. Perbaikan hanya masuk ke produksi setelah ditinjau manusia.

## Apa artinya buat kamu

Kalau kamu membangun di atas Claude API, perubahan ini sudah live dan sebagian besar tidak terlihat: API yang sama, latensi token pertama lebih rendah, dan layanan yang lebih murah dijalankan di sisi Anthropic. Liputan soal tulisan itu juga menyebut pemakaian memori sekitar 80% lebih sedikit per permintaan. Bagian yang lebih menarik adalah metodenya, karena ini menjawab pertanyaan yang akan segera dihadapi setiap tim yang memakai agen coding. Saat model bisa menulis satu sistem utuh dalam seminggu, penulisan berhenti menjadi hambatan dan verifikasi mengambil tempatnya. Pelajaran Anthropic adalah verifikasi harus dirancang, bukan diasumsikan: rangkaian pengujian yang lolos bukan berarti sistem berperilaku sama, dan sinyal yang kamu berikan ke agen menentukan apa yang ia optimalkan. Pemeriksa yang hanya menghargai output yang cocok akan menerima jalan pintas yang cocok hari ini dan rusak besok, dan karena itulah Anthropic tetap menempatkan review manusia di gerbangnya.

Anthropic membingkai migrasi ini sebagai Kapal Theseus yang terbalik. Alih-alih mengganti papan selagi kapal berlayar, Claude membangun kapal yang identik di samping kapal pertama, agen menjaga kapal baru itu tetap selangkah dengan kapal lama yang berubah, dan penumpang pindah sedikit demi sedikit. Setelah tim percaya keduanya berperilaku sama, kapal baru yang lebih cepat dan lebih murah itu mengambil alih.

Yang masih belum jelas: semua angka performa berasal dari grafik produksi Anthropic sendiri, dan belum ada pengukuran independen. Anthropic belum menyebut berapa total waktu engineer yang dihabiskan migrasi ini, atau apakah loop verifikasi yang sama akan diterapkan ke layanan mereka yang lain. Dan angka 20% untuk latensi diukur pada lalu lintas Claude Code, jadi hasilnya pada workload lain bisa berbeda. Tapi sebagai bukti bahwa API live yang kritis bisa ditulis ulang oleh agen dan diganti tanpa downtime, tulisan ini adalah catatan publik paling detail sejauh ini.
