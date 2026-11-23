---
title: Claude bantu buktikan Hipotesis Riemann, kata pemeriksa
slug: claude-bukti-hipotesis-riemann
locale: id
translationGroupId: claude-riemann-hypothesis-proof
translationStatus: reviewed
dek: Matematikawan Anthropic Levent Alpöge mengklaim ia dan Claude membuktikan Hipotesis Riemann, masalah terbuka paling terkenal dalam matematika. Komunitas Lean dan Mathlib mensertifikasi bukti formal sepanjang 17 juta baris itu dalam sehari, tapi seorang kritikus menyebut sebagian buktinya hampa, dan hadiah $1 juta masih terbuka.
format: news
topics: [AI, matematika, riset]
author: hey.nous
publishedAt: 2026-11-23
updatedAt: 2026-11-23
readingMinutes: 5
cover:
  src: /assets/covers/cover-claude-riemann-hypothesis-proof.jpg
  alt: Ilustrasi 3D abstrak lanskap krem yang dilintasi satu garis oranye menyala, dengan bola-bola kecil navy tersebar di sepanjangnya
  width: 2048
  height: 1152
  caption: Ilustrasi editorial.
  credit: Hey Nous
keyTakeaways:
  - Pada 20 November 2026, matematikawan Anthropic Levent Alpöge mempublikasikan catatan empat halaman yang mengklaim ia dan Claude telah membuktikan Hipotesis Riemann, beserta Hipotesis Riemann Umum, dan merilis buktinya hanya dalam bentuk kode Lean: 175.187 file dan sekitar 17 juta baris.
  - Pada 21 November, komunitas Lean dan Mathlib mensertifikasi bukti itu, menyatakan mereka "sangat yakin" bukti tersebut benar. Puluhan pembangun independen mengompilasinya tanpa error, dan matematikawan MIT Andrew Sutherland mengonfirmasi pemeriksaannya, termasuk seluruh 175.187 modul lolos lewat pemeriksa lean4lean.
  - Belum ada makalah yang bisa dibaca manusia. Alpöge menyebut draf yang ditulis AI saja sudah lebih dari 250.000 halaman, jadi ia hanya mempublikasikan formalisasi yang bisa dicek mesin dan berencana menulis argumennya dengan benar.
  - Kritik yang dipublikasikan 21 November oleh Jenny Lorraine Nielsen menyebut sebuah predikat geometri di dalam bukti didefinisikan selalu benar, yang bisa membuat sebagian argumen menjadi hampa. Sampai 22 November belum ada bantahan publik.
  - Clay Mathematics Institute masih mencantumkan Hadiah Milenium $1 juta sebagai terbuka. Aturannya mensyaratkan publikasi, dua tahun, dan penerimaan umum dari para matematikawan.
primarySources:
  - title: "Remark (Levent Alpöge)"
    url: https://alpo.ge/remark.pdf
    publishedAt: 2026-11-20
  - title: "Lean verification of the Riemann Hypothesis (Lean and Mathlib communities)"
    url: https://leanprover-community.github.io/blog/posts/riemann-hypothesis/
    publishedAt: 2026-11-21
  - title: "The AI Riemann hypothesis proof is true, independent mathematicians confirm (Scientific American)"
    url: https://www.scientificamerican.com/article/the-ai-riemann-hypothesis-proof-is-almost-certainly-true-independent-mathematicians-attest/
    publishedAt: 2026-11-20
relatedSlugs: [anthropic-ipo-priced-83-largest-ever, deepmind-ai-agents-rsa-1024, openai-gpt-62-astra-sol]
status: published
seo:
  title: Claude bantu buktikan Hipotesis Riemann | hey.nous
  description: Levent Alpöge dari Anthropic mengklaim ia dan Claude membuktikan Hipotesis Riemann. Lean dan Mathlib mensertifikasinya, tapi kritikus dan hadiah Clay berkata belum secepat itu.
---

## Apa yang terjadi

Pada 20 November 2026, Levent Alpöge, matematikawan di staf teknis Anthropic, mempublikasikan catatan empat halaman di situs pribadinya dengan klaim luar biasa: bekerja sama dengan ==Claude==, ia menemukan bukti ==Hipotesis Riemann==, masalah tak terpecahkan paling terkenal dalam matematika, yang pertama kali diajukan pada 1859. Catatan itu menyebut metode yang sama juga menyelesaikan Hipotesis Riemann Umum, yang memperluas klaim ke seluruh keluarga fungsi terkait.

Hipotesis ini soal sebaran bilangan prima. Secara teknis, hipotesis ini menyatakan semua nol nontrivial dari fungsi zeta Riemann terletak pada satu garis vertikal di bidang kompleks. Dalam bahasa sederhana, hipotesis ini menyatakan bilangan prima, yang tampak tak beraturan, sebenarnya mengikuti pola tersembunyi yang dalam. Hipotesis ini adalah satu dari tujuh Millennium Prize Problems dari Clay Mathematics Institute, masing-masing berhadiah $1 juta, dan telah menantang para matematikawan selama 167 tahun.

Yang dirilis Alpöge bukan makalah. Ia merilis bukti formal yang ditulis dalam ==Lean==, bahasa pemrograman yang memungkinkan setiap langkah logis dicek oleh komputer: arsip 14 bagian berisi 175.187 file, sekitar 17 juta baris kode, yang bila diurai menjadi lebih dari 61 gigabyte. Alpöge menyebut argumen tertulis yang lengkap akan sangat panjang, dan versi yang ditulis AI saja sudah lebih dari 250.000 halaman, jadi untuk saat ini ia hanya mempublikasikan formalisasi Lean. Ia juga mengaku belum menguasai seluruh matematika yang terlibat dan berencana menulis argumen itu dengan benar.

Waktunya memang canggung, dan Alpöge mengakuinya sendiri dalam catatan itu. Potongan terakhir jatuh pada tempatnya larut malam Minggu, 15 November, dan ia mengirim pesan ke CEO Anthropic Dario Amodei sebelum mengumumkan. Klaim itu dipublikasikan sehari setelah debut Anthropic di bursa saham yang memecahkan rekor. Alpöge menulis bahwa pembacaan sinis soal waktu itu salah, dan ia merasa tidak bisa menunggu lebih lama lagi.

## Bagaimana bukti itu dicek dalam sehari

Bukti yang tak bisa dibaca siapa pun adalah objek yang aneh, tapi Lean memberinya jalur pemeriksaan yang konkret. Kalau bukti berkode Lean berhasil dikompilasi tanpa error, logika setiap langkahnya sudah diverifikasi mesin. Dalam hitungan jam setelah rilis, para matematikawan mulai mengompilasi arsip itu secara independen, dan keesokan harinya dua organisasi di balik ekosistem Lean sudah memberikan putusan.

Pada 21 November pukul 13:55 UTC, komunitas Lean dan Mathlib mempublikasikan pernyataan bersama, yang didukung Lean Focused Research Organization dan Mathlib Initiative: "Kami sangat yakin bahwa bukti Hipotesis Riemann dari Alpöge benar, dan kami mengucapkan selamat atas pencapaian ini. Kami dengan ini mensertifikasi bahwa pernyataan maupun bukti Hipotesis Riemann adalah benar."

Sertifikasi mereka bertumpu pada empat pemeriksaan. Pertama, teorema targetnya adalah definisi Hipotesis Riemann milik Mathlib sendiri yang sudah diperiksa para ahli, jadi bukti itu mengarah ke pernyataan yang benar. Kedua, puluhan pembangun independen mengompilasi pustaka 175.187 file itu tanpa error dan menghasilkan ekspor bukti yang sama. Ketiga, dua alat pembanding independen mengonfirmasi teorema yang dibuktikan Alpöge persis sama dengan pernyataan Mathlib. Keempat, ekspor bukti itu dicek oleh beberapa pemeriksa bukti independen, termasuk kernel resmi Lean serta pemeriksa con-leche dan con-ron, yang dilengkapi bukti formal bahwa keduanya tidak bisa menerima bukti yang salah.

Matematikawan MIT Andrew Sutherland, yang mengoordinasi sebagian besar verifikasi independen, melaporkan pemeriksa lean4lean menerima seluruh 175.187 dari 175.187 modul, dan kelima teorema utama hanya bertumpu pada tiga aksioma standar matematika. Penilaiannya, dikutip Scientific American: "Sejujurnya peluang ada yang aneh di sini kira-kira nol."

:::info Lean
Lean adalah proof assistant: bahasa pemrograman untuk menulis matematika agar komputer bisa memeriksa setiap langkahnya. Bukti yang ditulis dalam Lean bukan argumen yang dibaca dan dinilai manusia, melainkan kode yang berhasil dikompilasi sesuai teorema yang dinyatakan atau gagal. Itulah yang membuat bukti sepanjang 17 juta baris bisa dicek dalam sehari, dan juga yang membuatnya tak bisa dibaca dengan cara biasa.
:::

Skala kejutan ini layak dinyatakan dengan jelas. Para peramal di Metaculus memperkirakan bukti Hipotesis Riemann baru muncul pada Mei 2035, dan matematikawan Terence Tao bulan lalu mengatakan ia memperkirakan masalah itu akan jatuh ke kombinasi manusia dan AI sekitar 2050. Pada Agustus, Anthropic menyebut versi Claude yang belum dirilis telah memperbaiki hasil lama terkait hipotesis ini, sambil menegaskan belum membuktikannya. Tiga bulan kemudian, masalah itu tampaknya sudah jatuh.

:::ringkasan
Matematikawan Anthropic Levent Alpöge mengklaim ia dan Claude membuktikan Hipotesis Riemann, dan merilis bukti itu hanya dalam bentuk 175.187 file kode Lean. Dalam sehari, komunitas Lean dan Mathlib mensertifikasinya sebagai benar, dengan pemeriksa independen mengonfirmasi setiap modul. Masih belum ada makalah yang bisa dibaca manusia, dan seorang kritikus menyebut sebagian bukti itu hampa.
:::

## Apa artinya buat Anda

Kalau Anda tidak bekerja di bidang matematika, tidak ada yang berubah dalam kehidupan sehari-hari karena bukti ini. Hipotesis Riemann tidak punya penerapan langsung yang berubah dalam satu hari, dan tidak ada kriptografi yang jebol karena pola bilangan prima kini terbukti. Yang berubah adalah apa yang kini secara kredibel bisa dilakukan AI dalam sains.

Sampai akhir pekan ini, cerita terkuat soal AI dalam matematika adalah bantuan: model yang membantu matematikawan menjelajah, mengajukan dugaan, dan memformalkan. Klaim ini berbeda jenisnya. Alpöge memuji Claude atas ide-ide matematika yang asli, termasuk langkah sentral dalam argumen itu, rangkaian theta lifts yang panjangnya disarankan Claude, dan menyebut Claude "jauh melampaui saya menjelang garis akhir." Kalau sertifikasi ini bertahan, ini pertama kalinya sistem AI menjadi rekan penulis solusi atas masalah sebesar ini, bukan sekadar alat yang dipakai di sepanjang jalan.

Hal ini juga mengubah cara sebuah bukti bisa disampaikan. Jalur tradisional adalah makalah yang bisa dibaca manusia, peer review, dan pemeriksaan selama bertahun-tahun. Bukti ini datang sebagai kode dulu, disertifikasi mesin dalam sehari, sementara penjelasan yang bisa dibaca manusia masih menyusul. Pembalikan inilah yang akan ditiru bidang lain, dan yang akan diperdebatkan paling lama. Peer review atas formalisasi sepanjang 17 juta baris adalah jenis pekerjaan baru, dan belum ada yang tahu seperti apa bentuknya ketika argumen itu terlalu panjang untuk dibaca satu orang pun.

:::peringatan
Tersertifikasi bukan berarti sudah tuntas. Kritik yang dipublikasikan 21 November oleh Jenny Lorraine Nielsen berargumen bahwa sebuah predikat geometri di dalam bukti, bernama anyGeometry, didefinisikan benar untuk setiap masukan, sehingga langkah-langkah yang mengandalkannya tidak membawa konten geometris. Audit independen menempatkan predikat itu delapan langkah ketergantungan di bawah teorema utama. Makalah itu belum melalui peer review, dan sampai 22 November belum ada bantahan publik dari Alpöge maupun komunitas Lean. Clay Mathematics Institute juga masih mencantumkan hadiahnya sebagai terbuka: aturannya mensyaratkan publikasi, dua tahun, dan penerimaan umum. Perlakukan sertifikasi ini sebagaimana adanya, pemeriksaan mesin bahwa bukti formal itu benar, bukan kata akhir dari komunitas matematika.
:::

Yang masih belum jelas: apakah kritik Nielsen bertahan atau dijawab, kapan versi argumen yang bisa dibaca akan ada, apa yang akan dilakukan Clay Mathematics Institute, dan bagaimana nasib bukti tandingan itu. Beberapa jam setelah pengumuman Alpöge, profesor Stanford Ravi Vakil menyebut seorang peneliti pascadoktoral di departemen yang sama telah mengajukan bukti hipotesis itu secara independen, sebuah naskah 940 halaman yang dikerjakan selama dua belas tahun. Dua bukti atas masalah paling terkenal dalam matematika, diumumkan di hari yang sama, sudah menjadi ceritanya sendiri. Untuk saat ini, pemeriksaan formal menyatakan bukti Alpöge benar, pemahaman manusia soal alasannya masih menyusul, dan uang hadiahnya tetap di tempat.
