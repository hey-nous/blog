---
title: AS memerintahkan DeepSeek dibuang dari sistem IT pemerintah sipil
slug: dhs-larang-deepseek-sistem-federal
locale: id
translationGroupId: dhs-deepseek-ban-federal-systems
translationStatus: reviewed
dek: DHS menerbitkan perintah eksklusi dan penghapusan yang melarang DeepSeek dari pengadaan IT pemerintah sipil federal dan memerintahkan produknya dihapus dari sistem instansi, termasuk aplikasi pihak ketiga yang dibangun di atasnya. Perintahnya ditandatangani Juli lalu, tapi baru diumumkan ke publik pekan ini.
format: news
topics: [AI, policy, DeepSeek]
author: hey.nous
publishedAt: 2026-10-24
updatedAt: 2026-10-24
readingMinutes: 4
cover:
  src: /assets/covers/cover-dhs-deepseek-ban.jpg
  alt: Ilustrasi tumpukan blok server navy dengan satu modul yang sedang dicabut, dan rantai oranye yang putus melayang di dekatnya
  width: 2048
  height: 1152
  caption: Ilustrasi editorial.
  credit: Hey Nous
keyTakeaways:
  - Departemen Keamanan Dalam Negeri AS (DHS) menerbitkan Exclusion and Removal Order #2026-01 di Federal Register pada 20 Oktober 2026, melarang produk DeepSeek dari pengadaan IT pemerintah sipil federal dan memerintahkan penghapusannya dari sistem instansi.
  - Perintahnya menjangkau lebih jauh dari DeepSeek sendiri: produk dan layanan pihak ketiga yang "dikembangkan menggunakan implementasi DeepSeek" juga harus dihapus, sehingga rantai pasok perangkat lunak kontraktor federal ikut masuk dalam cakupan.
  - Perintah ditandatangani Menteri DHS Markwayne Mullin pada 24 Juli 2026 dan baru muncul ke publik hampir tiga bulan kemudian; jendela 60 hari bagi instansi untuk meminta pengecualian sudah tertutup.
  - Pemberitahuan Federal Register sendiri tidak mencantumkan alasan. Reuters melaporkan perintah yang ditandatangani menyebut model DeepSeek sebagai "multiple threat vectors," dengan risiko data sensitif sampai ke China dan potensi malware.
  - Ini perintah penghapusan sistem penuh pertama Washington terhadap laboratorium AI asal China; pembatasan sebelumnya hanya berupa larangan per-perangkat di instansi pemerintah.
primarySources:
  - title: "Notice of Order Regarding Exclusion and Removal of DeepSeek Products (Federal Register)"
    url: https://www.federalregister.gov/d/2026-21447
    publishedAt: 2026-10-20
  - title: "U.S. Orders DeepSeek Removed From Federal Civilian Systems, Bans New Purchases (The Hacker News)"
    url: http://thehackernews.com/2026/10/us-orders-deepseek-removed-from-federal.html
    publishedAt: 2026-10-21
relatedSlugs: [claude-duet, model-openai-di-google-cloud]
status: published
seo:
  title: AS larang DeepSeek di sistem IT pemerintah | hey.nous
  description: DHS memerintahkan produk DeepSeek dihapus dari sistem IT pemerintah sipil AS, termasuk aplikasi pihak ketiga yang dibangun di atasnya. Fakta, cakupan, dan hal yang belum jelas.
---

## Apa yang terjadi

Pemerintah AS memerintahkan DeepSeek keluar dari jaringan instansi sipilnya, dan larangan ini mengikuti modelnya ke semua yang dibangun di atasnya.

Pada 20 Oktober 2026, Departemen Keamanan Dalam Negeri (DHS) menerbitkan ==Exclusion and Removal Order #2026-01== di Federal Register. Isinya dua hal. Pertama, pengecualian produk dan layanan teknologi informasi yang dikembangkan oleh Hangzhou DeepSeek Artificial Intelligence Co., Ltd. beserta entitas afiliasinya dari pengadaan instansi sipil federal. Kedua, perintah menghapus seluruh produk DeepSeek dan afiliasinya, plus produk dan layanan pihak ketiga yang "dikembangkan menggunakan implementasi DeepSeek," dari sistem teknologi informasi instansi sipil.

Yang janggal adalah linimasanya. Perintah ini ditandatangani Menteri DHS Markwayne Mullin pada 24 Juli 2026, dan aturan mewajibkan perusahaan yang disebut serta komite kongres terkait diberitahu. Tapi DHS baru mengajukannya untuk inspeksi publik di Federal Register pada 19 Oktober, 87 hari kemudian, lalu diterbitkan keesokan harinya. Klausul pengecualian dalam perintah memberi instansi waktu 60 hari sejak penerbitan untuk mengajukan permohonan pengecualian tertulis dengan justifikasi yang kuat, yang berarti jendela itu sudah tertutup sebelum publik sempat melihat perintahnya.

Dasar hukumnya adalah Federal Acquisition Supply Chain Security Act tahun 2018, yang memberi Menteri Keamanan Dalam Negeri wewenang menerbitkan perintah eksklusi dan penghapusan untuk instansi sipil, setelah rekomendasi dari Federal Acquisition Security Council. Ini baru kedua kalinya undang-undang itu dipakai: pertama kali dipakai Direktur Intelijen Nasional pada 2025 untuk mengecualikan Acronis dari pengadaan komunitas intelijen.

## Klausul yang menjangkau lebih jauh dari DeepSeek

Larangan utamanya mencakup produk DeepSeek sendiri, model R1 dan V3 yang dikenal publik. Bagian yang lebih tajam adalah klausul turunannya. Instansi juga harus mencabut perangkat lunak pihak ketiga yang dikembangkan menggunakan ==implementasi DeepSeek==, istilah yang tidak pernah didefinisikan dalam pemberitahuan. Ini mengubah larangan yang tadinya terarah menjadi audit rantai pasok: instansi tidak bisa mengandalkan nama vendor di kemasan, karena antarmuka pihak ketiga tidak membebaskan implementasi DeepSeek yang tersembunyi di dalamnya. Setiap vendor yang menjual ke instansi sipil kini harus tahu model apa yang berada di bawah setiap produk yang dikirimnya.

Perintah ini juga mengikat kontraktor pemerintah. Kontrak federal yang memuat klausul FAR 52.204-30 melarang kontraktor menyediakan atau menggunakan produk maupun layanan apa pun yang tercakup perintah selama menjalankan kontrak, dan mewajibkan pemeriksaan SAM.gov untuk frasa "FASCSA order" minimal setiap tiga bulan, melakukan penelusuran yang wajar ke rantai pasoknya saat perintah baru berpotensi berdampak, serta melaporkan produk yang tercakup ke pejabat kontrak dalam 3 hari kerja sejak ditemukan.

:::peringatan
Pemberitahuan Federal Register sendiri tidak mencantumkan alasan perintah ini. Bahasa "multiple threat vectors," termasuk risiko data sensitif sampai ke China, kemungkinan model mengandung malware atau kerentanan lain, dan potensi "intelijen yang dapat ditindaklanjuti" tentang warga AS, berasal dari perintah yang ditandatangani sebagaimana dilaporkan Reuters, bukan dari pemberitahuan yang diterbitkan. Anggap itu sebagai penilaian risiko departemen tersebut, bukan insiden yang terbukti.
:::

## Artinya untuk Anda

Cakupannya penting di sini, karena perintah ini lebih sempit dari kesan berita utamanya. Ia hanya mencakup apa yang dibeli dan dijalankan instansi eksekutif sipil. Sistem keamanan nasional dikecualikan, Departemen Pertahanan tidak tercakup, dan tidak ada yang dibatasi bagi perusahaan atau publik. Tapi jika Anda menjual ke kontrak federal AS, ini adalah peristiwa kepatuhan: audit tumpukan teknologi Anda untuk DeepSeek sekarang, termasuk aplikasi yang diam-diam memanggil API-nya di balik layar.

Sebagai konteks, ini adalah eskalasi dari pola yang bermula kecil. Pada Februari 2025, Kongres, NASA, Angkatan Laut, Pentagon, dan Texas masing-masing sudah melarang DeepSeek dari perangkat pemerintah satu per satu. Ini adalah perintah pertama yang menjangkau seluruh sistem dan alur pengadaan, bukan sekadar perangkat.

Beijing merespons cepat. Juru bicara Kementerian Luar Negeri Mao Ning mengatakan dalam briefing 20 Oktober bahwa China menentang "peregangan berlebihan konsep keamanan nasional" dan akan "dengan tegas menjaga hak dan kepentingan sah perusahaan-perusahaan China," lapor Associated Press. DeepSeek tidak segera menanggapi permintaan komentar AP.

:::ringkasan
DHS melarang DeepSeek dari sistem IT pemerintah sipil AS dan memerintahkan penghapusannya dari sistem instansi, termasuk aplikasi pihak ketiga yang dibangun di atasnya. Perintahnya berasal dari Juli tapi baru muncul ke publik pada 20 Oktober; jendela permohonan pengecualian 60 hari sudah tertutup. Alasan tidak dicantumkan dalam pemberitahuan yang diterbitkan.
:::

Yang masih belum jelas: pemberitahuan tidak pernah mendefinisikan "implementasi DeepSeek," sehingga tidak ada yang tahu persis aplikasi turunan mana yang masuk hitungan. DHS tidak menjelaskan jeda tiga bulan antara penandatanganan dan publikasi, atau bagaimana instansi seharusnya memverifikasi kepatuhan di seluruh tumpukan vendor mereka. Perhatikan kontraktor yang mengungkapkan tinjauan FASCSA dalam laporan keuangan mereka, di situlah cakupan sebenarnya akan terlihat.
