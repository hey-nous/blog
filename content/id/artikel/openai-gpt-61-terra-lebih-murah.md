---
title: GPT-6.1 Terra dari OpenAI: model yang bisa mengoperasikan komputer dengan harga separuh
slug: openai-gpt-61-terra-lebih-murah
locale: id
translationGroupId: openai-gpt-61-terra
translationStatus: reviewed
dek: Model kelas menengah baru OpenAI ini 50% lebih murah dari pendahulunya dan dari kakaknya yang lebih besar, sambil menyamai model flagship pada tugas komputer profesional. Apa yang diumumkan, apa kata benchmark-nya, dan apa yang masih belum terbukti.
format: news
topics: [AI, OpenAI, models]
author: hey.nous
publishedAt: 2026-10-29
updatedAt: 2026-10-29
readingMinutes: 4
cover:
  src: /assets/covers/cover-openai-gpt-61-terra.jpg
  alt: Ilustrasi 3D abstrak berupa tangan robot kecil bercahaya yang menjangkau jendela aplikasi melayang di atas meja krem yang hangat
  width: 2048
  height: 1152
  caption: Ilustrasi editorial.
  credit: Hey Nous
keyTakeaways:
  - OpenAI merilis GPT-6.1 Terra pada 26 Oktober 2026, model kelas menengah untuk penalaran visual dan penggunaan komputer, menggantikan GPT-5.6 Terra.
  - Harga API standarnya $1 per juta token input dan $5 per juta token output, 50% lebih rendah dari GPT-5.6 Terra maupun GPT-6.1 Sol.
  - Model ini tersedia bagi pengguna Plus, Pro, Enterprise, dan Edu di ChatGPT Work dan Codex, serta bagi developer lewat API sebagai gpt-6.1-terra.
  - OpenAI mengklaim Terra menyamai GPT-6 Astra pada tugas komputer profesional dengan sepersepuluh harga per token, tetapi semua angka benchmark berasal dari perusahaan sendiri dan belum diuji pengulas independen.
primarySources:
  - title: "Introducing GPT-6.1 Terra (OpenAI)"
    url: https://openai.com/index/introducing-gpt-6-1-terra/
    publishedAt: 2026-10-26
  - title: "OpenAI launches GPT-6.1 Terra with 3x faster AI agents, 50% lower pricing (BleepingComputer)"
    url: https://www.bleepingcomputer.com/news/artificial-intelligence/openai-launches-gpt-61-terra-with-3x-faster-ai-agents-50-percent-lower-pricing/
    publishedAt: 2026-10-26
relatedSlugs: [model-openai-di-google-cloud]
status: published
seo:
  title: GPT-6.1 Terra OpenAI: separuh harga | hey.nous
  description: GPT-6.1 Terra dari OpenAI harganya separuh dari pendahulunya, tersedia di ChatGPT Work dan Codex, dan menyamai flagship pada tugas komputer. Fakta dan catatannya.
---

## Apa yang terjadi

OpenAI merilis GPT-6.1 Terra pada 26 Oktober 2026, model kelas menengah baru yang dibuat untuk pekerjaan komputer sehari-hari yang mengisi hari kerja: membaca apa yang tampil di layar, mengeklik aplikasi, mengisi formulir, dan menyusun teks. Model ini menggantikan GPT-5.6 Terra dalam jajaran OpenAI, berada di bawah GPT-6.1 Sol dan GPT-6 Astra yang lebih mumpuni, dan menjadi model yang ditawarkan OpenAI ketika pekerjaannya bervolume tinggi, bukan yang paling sulit.

Berita utamanya adalah harga. Tarif API standar adalah $1 per juta token input, $0,05 per juta token input yang tersimpan di cache, dan $5 per juta token output, yang menurut OpenAI 50% lebih rendah dari GPT-5.6 Terra maupun GPT-6.1 Sol. Di ChatGPT Work dan Codex, OpenAI menyatakan jatah pemakaian yang sama kini mencakup lebih banyak tugas dibanding GPT-5.6 Terra, dan jauh lebih banyak dibanding Sol atau Astra. Mulai 26 Oktober, Terra tersedia untuk semua pengguna Plus, Pro, Enterprise, dan Edu di ChatGPT Work dan Codex, serta bagi developer lewat API sebagai gpt-6.1-terra. Model ini bukan model obrolan ChatGPT biasa: aksesnya lewat Work dan Codex, bukan jendela obrolan standar.

## Benchmark-nya, beserta catatannya

Tes dari OpenAI sendiri adalah alasan peluncuran ini menarik, sekaligus alasan untuk membacanya dengan hati-hati. Pada ==Agents' Last Exam==, benchmark tugas komputer profesional seperti mengubah gambar arsitektur menjadi model 3D, Terra mencetak 15 poin persentase lebih tinggi dari GPT-5.6 Terra pada upaya penalaran menengah, dengan sekitar sepertiga biayanya. OpenAI menyatakan model ini bahkan setara dengan GPT-6 Astra pada sepersepuluh harga per token, dan menyelesaikan tugas lebih dari tiga kali lebih cepat dari Astra maupun Sol.

Peningkatannya juga menyentuh akurasi dan coding. Pada rangkaian prompt internal OpenAI yang dirancang memancing kesalahan, tingkat kesalahan pada upaya penalaran rendah turun dari 53,6% pada GPT-5.6 Terra menjadi 16,7% pada GPT-6.1 Terra, dan menjadi 4,3% pada upaya maksimum. Pada Terminal-Bench 4.0, tes tugas coding lewat baris perintah, Terra menyelesaikan 50,3% tugas pada upaya maksimum, lebih dari dua kali lipat skor 21,5% milik GPT-5.6 Terra. OpenAI menyatakan batasnya dengan jelas: untuk tugas coding paling kompleks, Sol dan Astra tetap pilihan yang lebih baik.

:::ringkasan
GPT-6.1 Terra adalah model menengah OpenAI yang lebih murah: separuh harga API pendahulunya dan Sol, tersedia di ChatGPT Work dan Codex serta lewat API, dengan peningkatan yang dilaporkan vendor pada tes penggunaan komputer, akurasi, dan coding. Pertanyaan terbukanya adalah bagaimana peningkatan itu bertahan pada alur kerja pelanggan nyata, yang belum diukur tes independen mana pun.
:::

## Apa artinya buat kamu

Pergeseran praktisnya adalah siapa yang mampu menyerahkan pekerjaan komputer rutin kepada agen. Dengan harga per token separuh dan kecepatan tiga kali lipat dari model flagship, tugas yang dulu terlalu mahal untuk diotomatisasi dalam skala besar, seperti membaca faktur masuk dan memasukkan detailnya ke perangkat lunak akuntansi, atau menelaah dokumen panjang formulir demi formulir, menjadi masuk akal bagi tim yang lebih kecil. Itulah pasar yang dibidik OpenAI: bukan masalah tersulit, tetapi yang paling sering berulang.

Ada juga catatan keamanan yang layak dibaca sebelum memberi agen akses ke aplikasi kamu. OpenAI menyatakan Terra memenuhi ambang Critical dalam keamanan siber di bawah Preparedness Framework-nya, dan membawa perlindungan yang dikembangkan untuk GPT-6 Astra, termasuk ketahanan terhadap upaya prompt injection dalam tes OpenAI sendiri. Agen yang lebih murah dan bisa mengeklik perangkat lunak kamu tetaplah agen yang memegang izin kamu, jadi beban pengujian berpindah ke kamu: coba pada tugas kamu sendiri, dengan akses terbatas, sebelum membiarkannya berjalan di sistem produksi.

:::peringatan
Jangan membaca klaim benchmark sebagai hasil independen. Setiap angka kinerja dalam artikel ini berasal dari pengumuman dan system card OpenAI sendiri, dan pengulas independen belum mempublikasikan pengukuran mereka. Potongan harga terverifikasi dari halaman harga OpenAI, tetapi klaim kecepatan dan akurasi adalah laporan vendor sampai pihak ketiga mengonfirmasinya.
:::

Yang masih belum jelas: bagaimana Terra bekerja pada alur kerja dunia nyata di luar rangkaian tes OpenAI, apakah tingkat kesalahannya tetap rendah pada dokumen dan aplikasi yang tidak disetel untuknya, dan seberapa cepat benchmark independen akan mengonfirmasi atau mengoreksi klaim peluncuran ini. Jika tim kamu sudah memakai ChatGPT Work atau Codex, cara termurah menjawab pertanyaan itu adalah menjalankan Terra pada sejumlah kecil tugas berulang kamu sendiri dan membandingkan biaya per tugas yang selesai, bukan sekadar biaya per token.
