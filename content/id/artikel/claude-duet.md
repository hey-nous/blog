---
title: Anthropic luncurkan Claude Duet, agen yang selalu siaga untuk bisnis kecil
slug: claude-duet
locale: id
translationGroupId: claude-duet
translationStatus: reviewed
dek: Claude Duet adalah agen proaktif pertama Anthropic: ia memberi ringkasan tiap pagi, memantau aplikasi yang terhubung, dan terus bekerja di komputer cloud miliknya sendiri saat Anda pergi. Research preview dibuka 21 Oktober untuk pelanggan Pro dan Max di AS lewat waitlist.
format: news
topics: [AI, agents, Claude]
author: hey.nous
publishedAt: 2026-10-23
updatedAt: 2026-10-23
readingMinutes: 4
cover:
  src: /assets/covers/cover-claude-duet.jpg
  alt: Ilustrasi asisten robot kecil bercahaya yang menjaga meja dengan jendela aplikasi melayang
  width: 2048
  height: 1152
  caption: Ilustrasi editorial.
  credit: Hey Nous
keyTakeaways:
  - Anthropic membuka research preview Claude Duet pada 21 Oktober 2026: agen proaktif bertenaga Claude Opus 5.5 yang mengirim ringkasan pagi, memantau aplikasi terhubung, dan menyelesaikan tugas saat Anda pergi.
  - Duet berjalan di mesin virtual cloud miliknya sendiri dengan browser sendiri, sehingga tetap bekerja saat ponsel atau laptop mati, dan mewarisi memori, skill, serta konektor dari akun Claude Anda.
  - Preview terbatas lewat waitlist untuk pelanggan Pro dan Max di AS, tanpa biaya tambahan, dengan pengecekan latar belakang yang ikut menghabiskan kuota paket yang ada.
  - Keamanan berbasis persetujuan: Duet menunjukkan rencananya dan menunggu persetujuan pengguna sebelum mengirim pesan, membayar, menandatangani dokumen, atau menghapus apa pun; trading sekuritas dan pemindahan dana antar-akun dilarang sepenuhnya.
  - Keterbatasan awal dinyatakan terbuka: ia bisa salah membaca thread atau salah menilai urgensi, tugas personal seperti memesan tiket masih lemah, dan aktivitas browser-nya belum bisa ditampilkan langsung.
primarySources:
  - title: "Introducing Claude Duet (Anthropic / Claude)"
    url: https://claude.com/resources/articles/claude-duet
    publishedAt: 2026-10-21
  - title: "Claude Duet app is Anthropic's bet on agents (TechCrunch)"
    url: https://techcrunch.com/2026/10/22/claude-duet-app-is-anthropics-bet-on-agents/
    publishedAt: 2026-10-22
relatedSlugs: [model-openai-di-google-cloud, mistral-large-4-le-chonk]
status: published
seo:
  title: Claude Duet: agen Anthropic yang selalu siaga | hey.nous
  description: Claude Duet adalah agen proaktif Anthropic: ringkasan pagi, tugas latar di komputer cloud miliknya, dan keamanan berbasis persetujuan. Fakta dan hal yang belum jelas.
---

## Apa yang terjadi

Anthropic membuka research preview Claude Duet pada 21 Oktober 2026. Ini adalah aplikasi mandiri untuk iOS, Android, dan claude.ai di mana Claude bekerja sebagai agen proaktif, bukan menunggu perintah: ia mengirim ringkasan pagi tentang hal yang perlu perhatian Anda di seluruh aplikasi terhubung, memantau aplikasi tersebut sepanjang hari dan hanya mengirim pesan saat ada yang benar-benar membutuhkan Anda, serta menerima tugas lewat pesan ketikan atau suara dalam satu utas percakapan.

Aplikasi ini dirancang di sekitar Claude Opus 5.5, model kelas teratas Anthropic untuk pekerjaan agentic, dan berjalan di mesin virtual cloud miliknya sendiri dengan browser sendiri, sehingga tidak membutuhkan laptop atau ponsel Anda tetap menyala. Ia mewarisi memori, skill, dan aplikasi terhubung dari akun Claude Anda yang sudah ada, dan dapat memakai lebih dari 6.000 konektor dan plugin di Claude Marketplace. Contoh penggunaan yang disebut termasuk menemukan pesan Gmail dan Slack yang terlewat lalu membantu membalas, memeriksa faktur yang belum dibayar di QuickBooks atau Stripe, menyiapkan penggajian di Gusto, menyusun draf lowongan untuk LinkedIn, dan mengarahkan perjanjian lewat DocuSign.

Akses awal terbatas: pelanggan Pro dan Max di Amerika Serikat, lewat waitlist, dengan undangan dikirim bertahap. Anthropic menyebut paket Team dan Enterprise menyusul kemudian. Selama preview, Duet termasuk dalam Pro dan Max tanpa biaya tambahan dan berbagi batas penggunaan dengan Claude yang lain. Anthropic menyatakan secara eksplisit bahwa pengecekan latar belakang ikut menghabiskan batas tersebut, dan bahwa pekerjaan besar seperti membangun model keuangan atau slide deck membutuhkan lebih banyak putaran model.

## Desain keamanan, dan bagian yang tetap di tangan Anda

Aturan intinya adalah persetujuan sebelum tindakan yang berdampak. Duet membaca, menyusun draf, dan menyiapkan pekerjaan sendiri, tetapi sebelum mengirim pesan, melakukan pembayaran, menandatangani dokumen, atau menghapus apa pun, ia menunjukkan persis apa yang akan dilakukannya dan menunggu persetujuan Anda. Beberapa tindakan dilarang bahkan dengan persetujuan, termasuk trading sekuritas dan memindahkan dana antar-akun, dan akses ke aplikasi mana pun bisa diputus kapan saja.

Anthropic juga merilis classifier dan system prompt keamanan khusus yang memeriksa setiap pesan untuk mencegah kebocoran informasi sensitif. Secara default, agen menolak permintaan nomor kartu kredit dan identitas pemerintah; detail sensitif lain, seperti kesehatan atau keuangan pribadi, hanya diteruskan jika pengguna secara eksplisit memerintahkannya. Untuk pembelian, Duet bekerja dengan dompet Link dari Stripe (ia mengonfirmasi barangnya, Link meminta Anda menyetujui pengeluaran, pembayaran lewat kartu virtual sehingga nomor kartu asli tidak dibagikan) dan Shop Pay dari Shopify. Login ke situs dengan kredensial tersimpan di 1Password disebut akan hadir kemudian.

Di balik layar, Anthropic menyebut Duet memakai kerangka kerja agen tepercaya mereka, bahwa penanganan kredensial berarti aplikasi tidak pernah melihat kata sandi atau token login secara langsung, dan bahwa red team serta firma eksternal telah menguji penetrasinya. Perusahaan menyebut akan membagikan lebih banyak detail tentang desain keamanannya dalam beberapa hari ke depan.

## Artinya untuk Anda

Ini adalah sinyal paling jelas sejauh ini bahwa perlombaan agen bergerak dari chatbot yang menunggu perintah ke agen yang mengawasi dan bertindak. OpenAI dan Meta mengejar lahan yang sama dengan asisten mereka masing-masing, sehingga pembeda di sini adalah kemasannya: tanpa langganan baru selama preview, pengaturan Claude yang ada langsung terbawa, dan gerbang persetujuan yang ketat untuk apa pun yang berdampak.

Bagi pelanggan Pro atau Max di AS, trade-off praktisnya adalah batas penggunaan. Duet yang dibiarkan memantau inbox memakai kuota yang sama dengan jendela chat, dan Anthropic memperingatkan pengecekan latar belakang bisa menghabiskan batas itu lebih cepat daripada chat biasa. Itu juga melengkapi peringatan Duet sendiri: ini versi awal yang masih bisa salah membaca thread atau salah menilai urgensi, tugas personal seperti memesan tiket bukan kekuatannya, dan aktivitas browser-nya belum bisa ditampilkan langsung.

Yang masih belum jelas: kapan waitlist dibuka di luar AS atau menjangkau paket Team dan Enterprise, seberapa nyaman pembayaran dengan gerbang persetujuan dalam pemakaian sehari-hari, dan apakah pemantauan selalu siaga terbukti cukup berguna untuk membenarkan porsinya dari batas paket Anda. Bagi yang lain, Duet adalah pratinjau arah Claude ke depan: asisten yang datang kepada Anda lebih dulu.
