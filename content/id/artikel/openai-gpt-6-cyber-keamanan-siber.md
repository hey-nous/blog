---
title: GPT-6 Cyber: model peretas OpenAI untuk tim keamanan saja
slug: openai-gpt-6-cyber-keamanan-siber
locale: id
translationGroupId: openai-gpt-6-cyber
translationStatus: reviewed
dek: GPT-6 Cyber menemukan celah nyata di Linux dan Firefox, mencetak 48,5% pada benchmark exploit OpenAI, dan tetap berada dalam batas yang ditetapkan peneliti pada 99,93% pengujian. Kamu hampir pasti belum bisa menggunakannya.
format: news
topics: [AI, OpenAI, keamanan siber]
author: hey.nous
publishedAt: 2026-11-07
updatedAt: 2026-11-07
readingMinutes: 4
cover:
  src: /assets/covers/cover-openai-gpt-6-cyber.jpg
  alt: Ilustrasi 3D abstrak berupa perisai dari garis sirkuit bercahaya yang menjaga brankas navy gelap
  width: 2048
  height: 1152
  caption: Ilustrasi editorial.
  credit: Hey Nous
keyTakeaways:
  - OpenAI mengumumkan GPT-6 Cyber pada 5 November 2026, model keamanan siber berbasis GPT-6 Astra yang menemukan dan memvalidasi celah yang bisa dieksploitasi sambil tetap berada dalam batas yang ditetapkan peneliti.
  - Pada ExploitGym, model ini mencetak 48,5%, naik dari 32,1% milik GPT-5.6 Cyber, dan OpenAI memberinya peringkat Critical untuk keamanan siber di bawah Preparedness Framework, naik dari High.
  - OpenAI menyatakan peneliti mereka memakai model ini untuk mengembangkan 948 exploit privilege escalation di Linux dan menemukan 81 kerentanan high-severity yang sebelumnya tidak diketahui di Firefox, dan Mozilla sudah merilis perbaikan untuk banyak di antaranya.
  - Akses dibatasi untuk sekelompok kecil pelanggan Daybreak Red yang sudah disetujui, lewat API dan Codex, dengan akses yang lebih luas dijanjikan segera, dan OpenAI mengumumkan program hibah $1 miliar untuk tim keamanan yang sumber dayanya terbatas.
primarySources:
  - title: "GPT-6 Cyber: Advancing the frontier of aligned cybersecurity agents (OpenAI)"
    url: https://openai.com/index/introducing-gpt-6-cyber/
    publishedAt: 2026-11-05
  - title: "OpenAI announces GPT-6 Cyber, its most capable cybersecurity model yet (Neowin)"
    url: https://www.neowin.net/news/openai-announces-gpt-6-cyber-its-most-capable-cybersecurity-model-yet/
    publishedAt: 2026-11-05
relatedSlugs: [google-gemini-4-carbon, openai-offline-frontier-training]
status: published
seo:
  title: GPT-6 Cyber OpenAI: model peretas tim keamanan | hey.nous
  description: GPT-6 Cyber dari OpenAI menemukan kerentanan nyata di Linux dan Firefox dan mencetak 48,5% di ExploitGym, tapi hanya tim Daybreak Red terverifikasi yang bisa memakainya.
---

## Apa yang terjadi

OpenAI mengumumkan ==GPT-6 Cyber== pada 5 November 2026, model yang dibuat untuk menemukan celah perangkat lunak, membangun exploit yang berfungsi, dan menulis perbaikan, dan sengaja tidak dibuka untuk umum. Model ini adalah varian keamanan siber dari GPT-6 Astra, dilatih untuk memvalidasi kerentanan sambil tetap berada dalam batas yang ditetapkan peneliti, dan untuk saat ini hanya tersedia bagi sekelompok kecil pelanggan yang sudah disetujui dalam ==Daybreak Red==, program akses terpercaya OpenAI untuk pekerjaan keamanan yang sah.

Angka utama berasal dari tes OpenAI sendiri. Pada ==ExploitGym==, benchmark yang meminta model mengeksploitasi kerentanan tertentu pada target jarak jauh, GPT-6 Cyber mencetak 48,5%, naik dari 32,1% milik pendahulunya GPT-5.6 Cyber, atau peningkatan relatif 51%. Pada tes penetrasi web terpisah, di mana model menguji aplikasi tanpa melihat kode sumbernya, model ini menemukan 40,3% kerentanan, berbanding 32,0% untuk GPT-6 Astra. Dan pada RemoteExploitBench, tes mengeksploitasi celah yang sudah diketahui di aplikasi seperti GitLab, PostgreSQL, dan Jenkins dalam lingkungan terkendali, Astra yang berjalan di bawah Daybreak Blue menolak semua tugas sementara GPT-6 Cyber menyelesaikan 95% di antaranya.

## Bagian yang paling diperhatikan OpenAI: tetap dalam batas

Model peretas hanya berguna bagi tim keamanan kalau ia mengerjakan yang diperintahkan dan tidak lebih. OpenAI menjadikan hal itu pusat pengumuman. Dalam tes di mana model diberi tugas eksploitasi yang sulit di samping layanan yang sengaja dibuat mudah dieksploitasi, GPT-6 Cyber menghindari menyentuh layanan di luar cakupan pada 99,93% kasus tanpa prompt keamanan deployment, dan 100% dengan prompt itu. GPT-5.6 Cyber hanya mencapai 94,49% tanpa prompt.

Peningkatan itulah alasan OpenAI mengklasifikasikan model ini sebagai Critical untuk keamanan siber di bawah Preparedness Framework, tingkat tertingginya, naik dari High untuk GPT-5.6 Cyber. Klasifikasi ini berasal dari OpenAI sendiri, bukan audit independen, dan sama banyaknya pernyataan soal risiko seperti soal kemampuan: model yang sebagus ini dalam membobol perangkat lunak berbahaya di tangan yang salah, dan itulah alasan peluncurannya dibatasi.

## Apa yang sudah ditemukannya

OpenAI menyatakan model ini sudah melakukan pekerjaan keamanan nyata. Penelitinya memakai GPT-6 Cyber untuk mereproduksi 1.724 kerentanan di kernel Linux dan mengembangkan exploit privilege escalation yang berfungsi untuk 948 di antaranya, lebih dari lima kali lipat 166 exploit yang dibuat GPT-5.6 Sol pada harness yang sama. Mereka mengungkapkan 304 temuan kritis kepada maintainer beserta kandidat patch. Di Firefox, model ini menghasilkan bukti dan tes yang bisa direproduksi untuk 81 kerentanan yang sebelumnya tidak diketahui dan dinilai Mozilla berkategori high severity, serta menunjukkan 30 isu yang sudah diketahui ternyata lebih parah dari yang dilaporkan. Mozilla sudah merilis perbaikan untuk banyak di antaranya.

Tim keamanan di Cisco dan CodeRabbit memakai model ini untuk riset kerentanan dan code review, menurut OpenAI, dan OpenAI menyatakan mereka mengandalkannya untuk memperkuat infrastruktur pelatihan mereka sendiri. Bersamaan dengan model ini, OpenAI mengumumkan program hibah $1 miliar Daybreak for Frontline Defenders untuk mensubsidi akses bagi tim dengan sumber daya terbatas seperti organisasi pemerintah dan penyedia layanan esensial, plus grup baru Daybreak Red for Critical Infrastructure untuk tim keamanan infrastruktur listrik, air, dan sistem industri yang sudah disetujui.

:::ringkasan
GPT-6 Cyber adalah model keamanan OpenAI yang paling mumpuni sejauh ini: 48,5% di ExploitGym, perilaku dalam batas 99,93% tanpa prompt keamanan, dan celah nyata yang ditemukan di Linux dan Firefox. Tapi ini bukan produk yang bisa kamu daftarkan. Akses berjalan lewat persetujuan Daybreak Red, dengan IP allowlisting sebagai standar, dan OpenAI belum memberi tanggal untuk ketersediaan yang lebih luas.
:::

## Apa artinya buat kamu

Kalau kamu bukan tim keamanan yang sudah terverifikasi, hampir tidak ada yang berubah hari ini. Kamu tidak bisa membeli GPT-6 Cyber, mencobanya di ChatGPT, atau memanggilnya dari API tanpa persetujuan Daybreak Red plus persetujuan terpisah untuk model ini. Yang berubah adalah bentuk pasar keamanan: kemampuan frontier yang dulu membutuhkan penetration tester senior kini bisa disewa tim yang sudah disetujui, dan OpenAI secara terbuka mensubsidi tim keamanan yang lebih kecil untuk mendapatkannya.

Bagi yang lain, efek tidak langsungnya lebih penting. 81 celah Firefox dan temuan kernel Linux berarti patch sudah masuk ke perangkat lunak yang kamu pakai, dan program hibah $1 miliar berarti tim infrastruktur publik yang dananya terbatas mungkin segera punya perkakas yang dulu hanya mampu dibeli perusahaan besar. Pertanyaan terbukanya adalah apakah gerbang ini bertahan: OpenAI memasangkan model ini dengan pemantauan penyalahgunaan, perlindungan kredensial, dan pemblokiran bantuan berisiko tinggi yang melibatkan sistem kritis, tapi model berperingkat Critical justru jenis kemampuan yang paling diincar pencuri atau peniru.

:::peringatan
Setiap angka kinerja dalam artikel ini berasal dari pengumuman dan system card OpenAI sendiri. Belum ada pengulas independen yang mempublikasikan pengukuran GPT-6 Cyber, dan skor ExploitGym serta RemoteExploitBench adalah benchmark buatan OpenAI yang dijalankan oleh OpenAI. Perlakukan sebagai klaim vendor sampai pihak ketiga mengonfirmasinya.
:::

Yang masih belum jelas: OpenAI belum mempublikasikan harga GPT-6 Cyber, belum menyatakan kapan akses diperluas dari kelompok awal ke semua pelanggan Daybreak Red, dan belum mengungkapkan berapa organisasi yang masuk kelompok pertama itu. Model ini juga bukan fitur ChatGPT umum, jadi tidak ada peluncuran konsumen yang perlu ditunggu. Kalau tim kamu melakukan pekerjaan keamanan yang sah dan ingin masuk, jalurnya adalah mendaftar ke Daybreak Red dan menunggu.
