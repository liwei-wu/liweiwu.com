---
id: new-paper-and-pen-new-artists
type: essay
locale: id
title: "Kertas dan Pena Baru, Artis Baru"
subtitle: "Ketika Kode Menjadi Artefak Perantara, Siapa Pembuat Perangkat Lunaknya?"
description: "Ketika implementasi bukan lagi hal yang paling langka, apa jadinya pekerjaan manusia?"
slug: new-paper-and-pen-new-artists
published_at: 2026-08-03
revised_at: 2026-08-04
translation_status: ai-translated
source_locale: zh-Hans
source_hash: c4e25867a729fb37
topics:
  - AI
  - Perangkat lunak
  - Kepengarangan
---

Selama hampir enam bulan pekerjaan teknik, saya membuat beberapa produk yang belum dirilis dengan agen pengkodean, hanya menggunakan bahasa alami, dokumen produk, batasan arsitektur, hasil runtime, dan umpan balik penerimaan. Produknya mencakup aplikasi desktop, ekstensi browser, layanan backend, dan database.

Saya tidak menulis satu baris kode pun. Saya juga tidak membacanya.

Namun bukan berarti saya menyerahkan produknya kepada AI. Saya tetap memutuskan masalah mana yang harus mereka selesaikan, menentukan cara kerja sistem, menilai batasan mana yang tidak dapat dilintasi, memverifikasi apakah hasilnya dapat diandalkan, dan bertanggung jawab atas perangkat lunak akhir. Yang berubah hanyalah antarmuka saya dengan implementasinya.

Hal ini memaksa saya untuk mempertimbangkan kembali pertanyaan yang tadinya tampak sederhana: jika seseorang tidak lagi menulis kode dengan tangan, namun tetap mendefinisikan pekerjaannya, memutuskan apakah berhasil, dan tetap bertanggung jawab, apakah mereka masih pembuat perangkat lunak tersebut?

Praktek ini tidak membuktikan bahwa semua perangkat lunak dapat dibangun dengan cara ini. Bahkan tidak membuktikan bahwa produk yang belum dirilis tersebut akan sukses di pasaran. Namun untuk jenis aplikasi yang kami buat, alur kerja yang berpusat pada agen pengkodean tidak lagi sekadar cara untuk memprogram lebih cepat. Hal ini menjadi pendekatan rekayasa yang dapat mempertahankan perencanaan, implementasi, pengujian, koreksi, dan iterasi.

Perubahan penting bukanlah “AI dapat menulis kode.” Implementasi dulunya merupakan salah satu bagian yang paling langka dalam pembuatan perangkat lunak; sekarang mulai surut ke latar belakang.

Ketika implementasi bukan lagi hal yang paling langka, apa jadinya pekerjaan manusia?

Itulah pertanyaan dari esai ini.

## Batasan AI Sedang Bergerak

AI tidak pernah menjadi istilah yang pasti. Orang-orang cenderung menyebut sesuatu sebagai AI, sementara komputer belum dapat melakukannya dengan andal; begitu kemampuannya matang dan memasuki produk sehari-hari, teknologi tersebut dengan cepat menjadi teknologi biasa dan tidak lagi tampak seperti AI.

Jalanku sendiri juga mengikuti batasan ini. Di sekolah menengah dan universitas, saya mengerjakan robot beroda, menggunakan sensor dan kontrol umpan balik untuk membuat mereka mengikuti jalur, menghindari rintangan, dan berkoordinasi dalam formasi. Selama sekolah pascasarjana, saya mempelajari visi komputer sambil bergabung dengan [SenseTime][entity-sensetime] yang baru didirikan sebagai karyawan pendiri awal. Saya membantu menghadirkan teknologi deteksi keaktifan wajah dan visi industri ke dalam aplikasi berskala besar, termasuk ponsel pintar dan kereta berkecepatan tinggi. Saat ini, model yayasan serba guna dan agen yang mereka kuasai telah mendorong batasan tersebut kembali. Sistem ini tidak lagi hanya mengatasi masalah-masalah yang terisolasi. Mereka mulai memahami tujuan, menggunakan alat, dan terus bertindak sebagai respons terhadap umpan balik; pekerjaan saya telah beralih ke produk ini juga. Melihat ke belakang, mulai dari mengendalikan gerakan dan memahami gambar hingga menyelesaikan seluruh tugas, mesin menjalani rangkaian kerja yang lebih panjang dan lebih lengkap.

Oleh karena itu, dalam esai ini, AI terutama mengacu pada agen yang didorong oleh model dasar tujuan umum, dengan agen pengkodean sebagai contoh yang representatif. Perkembangan mereka mengarah pada pelaksanaan tugas-tugas yang lebih luas secara otonom, evolusi diri secara bertahap, dan bahkan kemampuan untuk melatih penerus mereka sendiri.

Pada tahun 2025, Andrej Karpathy menggunakan istilah “vibe coding” untuk menggambarkan gaya pemrograman yang longgar: memberi tahu AI apa yang Anda inginkan, menerima kode yang dihasilkan, mengembalikan pesan kesalahan kepadanya, dan bahkan melupakan keberadaan kode itu. [1] Namun, melepaskan kendali sejauh ini memiliki satu prasyarat: biaya kegagalan harus rendah. Saat itu, untuk produk serius, kami masih menggunakan Cursor. Pengembang manusia memimpin pekerjaan dan tetap bertanggung jawab atas kodenya; agen hanya membantu.

Pada awal tahun 2026, kita melihat perbatasan kembali bergerak maju. Karpathy kemudian menyebut cara kerja baru ini sebagai “rekayasa agen”: pengembang tidak lagi hanya menggunakan AI untuk menyelesaikan kode, namun mengatur dan mengawasi agen saat mereka menjalankan tugas teknis sambil tetap bertanggung jawab atas peninjauan dan kualitas. [2] Nama tidak penting. Yang penting adalah AI beralih dari memberikan saran satu per satu ke tindakan berkelanjutan dalam batasan.

Bagi beberapa pembuat perangkat lunak, bahasa dan dokumen alami telah menjadi lapisan baru untuk mengekspresikan maksud.

## Kode Menjadi Artefak Perantara

Sejarah komputasi juga merupakan sejarah penambahan lapisan abstraksi.

Manusia pertama kali mengoperasikan mesin dengan sakelar dan kabel patch. Kemudian muncul kode mesin, bahasa assembly, dan bahasa pemrograman tingkat tinggi. Setiap lapisan baru menyembunyikan beberapa kompleksitas di bawah ini dan memungkinkan orang bekerja lebih dekat dengan tujuan mereka.

Agen pengkodean menambahkan lapisan abstraksi baru ke pengembangan perangkat lunak. Mereka adalah sesuatu seperti super-kompiler nondeterministik: kompiler tradisional menerjemahkan program yang ditentukan secara formal ke dalam instruksi mesin, sementara agen pengkodean mencoba mengungkap maksud manusia ke dalam antarmuka, data, layanan, dan kode.

Perbedaan itu penting. Bahasa manusia bersifat ambigu. Persyaratan seringkali tidak lengkap, dan batasan dapat menimbulkan konflik. Agen tidak dapat menerjemahkan kalimat secara mekanis menjadi satu hasil yang benar. Hal ini harus melalui siklus pemahaman, perencanaan, implementasi, pelaksanaan, dan verifikasi.

Bahasa alami belum menggantikan bahasa pemrograman. Lebih tepatnya, bahasa dan dokumen alami menjadi lapisan maksud yang dikelola oleh manusia, sementara kode semakin berfungsi sebagai media implementasi yang dihasilkan dan dikelola oleh agen.

Hal ini menjadikan kode lebih seperti artefak perantara, namun “perantara” bukan berarti tidak penting. Kode tetap harus benar, aman, dan dapat dipelihara. Ini mungkin tidak perlu ditulis dan dibaca baris demi baris oleh seseorang. Kebanyakan pemrogram tidak memeriksa kode mesin yang dikeluarkan oleh kompiler, namun mereka tetap bertanggung jawab atas apa yang dilakukan program tersebut.

Ini mengubah apa yang perlu kita perjelas.

Dokumentasi dulunya merupakan penjelasan kode. Dalam pekerjaan kami, hubungan tersebut mulai terbalik: semakin banyak kode yang dihasilkan dan diverifikasi dari dokumen. Mengapa produk itu ada, bagaimana sistem harus bekerja, batasan mana yang tidak dapat dilintasi, dan bukti apa yang menunjukkan bahwa produk tersebut memenuhi persyaratannya—hal-hal ini, yang dulu dianggap sebagai lampiran pada kode, menjadi sumber dari perangkat lunak itu sendiri.

Lalu: "Bicara itu murah. Tunjukkan kodenya."

Sekarang: "Kodenya murah. Tunjukkan dokumennya."

Tidak menulis kode dengan tangan tidak menurunkan tuntutan ekspresi. Itu membesarkan mereka. Di masa lalu, sebuah gagasan ambigu sempat muncul ke permukaan dan menjadi lebih jelas melalui proses implementasi yang panjang. Sekarang agen dapat dengan cepat mengubahnya menjadi sistem yang berfungsi dan tampak lengkap. Ambiguitasnya belum hilang. Hal ini hanya terkubur dalam implementasinya, yang nantinya akan muncul sebagai kegagalan dan kerugian.

AI tidak membebaskan kita dari kewajiban berpikir. AI hanya membuat gagasan yang kabur lebih sulit disembunyikan di balik kesibukan implementasi.

## Separuh Bagian Lain dari “Kertas dan Pena”

Pada tahun 2025, Wang Jian membandingkan AI dengan “kertas dan pena baru” umat manusia: bukan pemikiran itu sendiri, melainkan perpanjangan dari pemikiran manusia. [3] Saya suka metafora ini.

Ini berisi simetri sejarah yang menarik. Pada tahun 1948, Alan Turing membayangkan seseorang yang dilengkapi kertas, pensil, dan penghapus, mengikuti serangkaian aturan, yang perilakunya dapat dianggap sebagai mesin universal. [4] Orang-orang kemudian menggunakan kertas dan pensil untuk menjelaskan bagaimana seseorang dapat mensimulasikan sebuah mesin. Hampir delapan puluh tahun kemudian, arahnya tampaknya berbalik. Mesin ini menjadi kertas dan pena baru, membantu orang mengungkapkan niat mereka ke dunia yang bisa dijalankan.

Metaforanya juga mengingatkan saya pada universitas. Selain tidur, saya mungkin menghabiskan sepertiga waktu saya bolak-balik antara perangkat lunak dan perangkat keras: menginstal sistem operasi, mengonfigurasi lingkungan, alat pembelajaran, mengutak-atik mikrokontroler, men-debug robot beroda dan membuat mereka berkoordinasi dalam formasi, dan membuat demo apa pun yang menarik minat saya. Saya menikmati prosesnya, namun sering kali saya menghabiskan lebih banyak waktu untuk mempersiapkan karya daripada mencipta—seperti seorang pelukis yang selalu mencari kertas, membuat pigmen, dan memperbaiki kuas.

Menyebut AI sebagai kertas dan pena baru tidak berarti AI dapat melakukan segalanya. Kertas tidak menulis novel. Pigmen tidak menghasilkan gambar yang bagus, dan kamera tidak menghasilkan film yang bagus. Alat-alat tersebut menurunkan biaya untuk berekspresi, namun tidak menentukan apa yang pantas untuk diungkapkan.

Agen pengkodean jauh lebih aktif daripada kertas dan pena. Mereka menawarkan saran, melaksanakan tugas, dan membuat pilihan dalam lingkup terbatas. Namun sampai mereka dapat mengambil tanggung jawab atas tujuan dan konsekuensi sebuah karya, partisipasi yang lebih besar tidak secara otomatis menjadikan mereka sebagai penulis.

Yang menarik minat saya adalah separuh “kertas dan pena baru” lainnya:

Jika kita mempunyai kertas dan pena baru, seniman seperti apa yang kita perlukan?

## Pusat Pembuatan Perangkat Lunak Sedang Meningkat

Gagasan bahwa programmer adalah seniman bukanlah hal baru.

Pada tahun 1974, Donald Knuth menjelaskan dalam “Pemrograman Komputer sebagai Seni” mengapa pemrograman memerlukan pengetahuan, keterampilan, dan kreativitas, dan bagaimana hal itu dapat menghasilkan objek yang indah. [5] Pada tahun 2003, Paul Graham berpendapat dalam “Hackers and Painters” bahwa peretas dan pelukis sama-sama pembuat. Bagi pembuat perangkat lunak, komputer adalah media berekspresi seperti halnya cat bagi seorang pelukis atau beton bagi seorang arsitek. [6]

AI bukanlah yang pertama kali menjadikan programmer menjadi seniman. Hal ini mengubah tempat di mana seni biasanya terjadi.

Sebagian besar karya pemrogram biasanya terjadi di dalam kode: apakah suatu algoritme cerdik, abstraksinya elegan, atau suatu sistem mampu menampung cukup banyak kemungkinan dengan struktur sesedikit mungkin. Keindahan seperti ini tidak akan hilang karena agen sudah datang.

Namun seiring dengan semakin banyaknya pekerjaan implementasi yang diserahkan kepada agen, pusat penciptaan manusia pun ikut meningkat. Seni perangkat lunak akan semakin terekspresikan dalam karya secara keseluruhan: masalah mana yang harus dipilih, kehidupan siapa yang harus dipahami, tatanan apa yang harus dibangun, kemungkinan mana yang harus dilupakan, bagaimana menanggapi pengguna, dan bagaimana karya tersebut harus memasuki kehidupan mereka.

Penciptaan pada tingkat produk dan pengalaman selalu ada. Perubahannya adalah ketika implementasi tidak lagi menyita sebagian besar perhatian kita, kekhawatiran ini dapat menjadi pekerjaan utama bagi lebih banyak pembuat perangkat lunak.

Kode yang elegan tetap penting, namun kode tidak pernah menjadi keseluruhan keindahan perangkat lunak. Perangkat lunak yang dibuat oleh manusia dan AI bersama-sama tidak boleh dilihat hanya sebagai tumpukan kode yang berjalan, namun sebagai karya perangkat lunak yang utuh.

Inilah perubahan yang disiratkan oleh “artis baru”.

Dalam istilah profesional yang ada, peran tersebut menyerupai kombinasi manajer produk dan arsitek: menanyakan apa yang harus dibuat dan untuk siapa, serta bagaimana sistem dapat bertahan dan di mana letak batasannya. Namun gelar-gelar itu saja tidak cukup. Pembuat perangkat lunak juga membutuhkan selera, empati, kemampuan untuk mengambil pengorbanan, dan kemauan untuk bertanggung jawab atas hasil keseluruhan.

“Artis” di sini bukanlah gelar yang lebih mulia, juga tidak serta merta menggambarkan satu orang. Ini adalah peran seorang penulis yang bertanggung jawab atas sebuah karya yang lengkap, dan sebuah tim dapat membagikannya.

Teknik memungkinkan pekerjaan tetap ada. Seni menentukan mengapa ia ada dan bagaimana ia memasuki kehidupan manusia.

## Rekayasa Tidak Akan Hilang, dan Tanggung Jawab Tidak Dapat Dialihdayakan

Artis baru tidak mengajukan ide bagus lalu menunggu AI menyelesaikan semuanya.

Bahkan setelah kertas dan pena tersebar luas, menulis masih memerlukan pelatihan; setelah kamera tersebar luas, fotografi masih memerlukan penilaian. Agen pengkodean menurunkan biaya implementasi, namun mereka tidak secara otomatis menyelesaikan arsitektur, keamanan, kinerja, kualitas, atau pemeliharaan dalam sistem yang kompleks.

Fakta bahwa saya tidak membaca kode tidak berarti saya telah mengabaikan kendali teknik. Titik kontrol telah berubah: dari memeriksa implementasi baris demi baris hingga menentukan tujuan sistem, prinsip arsitektur, batasan data, model izin, standar pengujian, kemampuan observasi, dan hasil pengujian penerimaan.

Hal ini tidak membuat pekerjaan menjadi kurang ketat. Ini menempatkan ketegasan di tempat lain. Apakah tes tersebut mencakup risiko sebenarnya? Apakah hasil runtime menunjukkan bahwa sistem memenuhi batasannya? Apakah ada bukti atas penjelasan agen tersebut? Jika suatu fitur berjalan, apakah fitur tersebut juga siap dikirimkan? AI dapat berpartisipasi dalam masing-masing tugas ini, namun seseorang pada akhirnya harus memutuskan apakah bukti tersebut dapat dipercaya dan menanggung konsekuensi jika melakukan kesalahan.

Beberapa bidang—termasuk infrastruktur, sistem yang sangat penting bagi keselamatan, dan perangkat lunak tingkat rendah—akan terus mengharuskan orang untuk bekerja jauh di dalam kode etik. Mereka mungkin membutuhkan sejumlah kecil orang yang benar-benar memahami lapisan bawah lebih dari sebelumnya. Lapisan abstraksi baru tidak pernah menghapus lapisan di bawahnya. Bahasa tingkat tinggi tidak menghilangkan perakitan, dan komputasi awan tidak menghilangkan sistem operasi. Lapisan baru memungkinkan lebih banyak pembuat konten menghindari melintasi setiap lapisan bawah setiap kali mereka membuat sesuatu.

Keputusan saya untuk tidak menulis atau membaca kode adalah praktik yang dibatasi, bukan aturan untuk semua orang. Nilainya bukan berarti membuktikan bahwa kode sudah usang. Ini membantu saya melihat bagian pekerjaan mana yang masih belum dapat diserahkan ketika kode tidak lagi menjadi satu-satunya antarmuka yang digunakan orang untuk mengontrol perangkat lunak.

Yang pertama adalah penghakiman. Yang kedua adalah tanggung jawab.

Alat yang lebih kuat juga dapat menghasilkan keadaan yang biasa-biasa saja dalam skala yang lebih besar. Ketika implementasi menjadi lebih murah, pertama-tama kita mungkin akan mendapatkan perangkat lunak yang lebih repetitif dan kasar yang tidak memenuhi kebutuhan nyata. Kertas dan pena tidak secara otomatis menghasilkan lektur. Agen pengkodean tidak akan secara otomatis menghasilkan kebangkitan perangkat lunak.

AI tidak menghapus kelangkaan; AI hanya memindahkannya.

Produksi perangkat lunak biasanya dibatasi terutama oleh keterampilan pemrograman, sumber daya teknik, dan waktu implementasi. Ketika kendala-kendala tersebut mereda, penilaian mengenai masalah mana yang penting, intuisi produk, pemahaman sistem, selera, pemahaman terhadap orang-orang, dan kemauan untuk mengambil tanggung jawab atas konsekuensi menjadi relatif lebih langka.

Ketika “cara membuatnya” menjadi lebih murah, “apa yang harus dibuat” menjadi lebih mahal.

## Dari Penulis Kode hingga Penulis Perangkat Lunak

Bret Taylor mengutip pengamatan Arya Asemanfar: AI dapat membuat rancangan untuk Anda, tetapi Anda tetaplah penulisnya. [7] Addy Osmani menggambarkan peran baru pengembang sebagai arsitek dan pemimpin redaksi. [8]

Seorang pengarang tidak harus melakukan setiap tindakan yang menghasilkan sebuah karya. Arsitek tidak meletakkan setiap batu bata, dan sutradara tidak mengoperasikan setiap kamera di lokasi syuting. Namun mereka harus mengetahui apa yang seharusnya dilakukan dalam pekerjaan tersebut, menilai apakah pekerjaan tersebut berhasil, dan bertanggung jawab atas pekerjaan tersebut secara keseluruhan.

Perubahan yang sama juga terjadi pada perangkat lunak.

Kami biasa mengidentifikasi pembuat perangkat lunak dengan menanyakan siapa yang menulis kodenya. Di masa depan, kepenulisan mungkin semakin bergantung pada serangkaian pertanyaan berbeda: Siapa yang mendefinisikan masalahnya? Siapa yang menetapkan batasan tersebut? Siapa yang melakukan pengorbanan penting? Siapa yang memutuskan bahwa pekerjaan telah selesai? Dan siapa yang bertanggung jawab atas apa yang terjadi setelah ia lahir ke dunia?

Hal ini juga dapat mengubah unit ekonomi perangkat lunak. Di masa lalu, suatu kebutuhan biasanya harus dimiliki oleh cukup banyak orang untuk membenarkan pembuatan perangkat lunak untuk kebutuhan tersebut. Ketika biaya implementasi turun cukup jauh, alur kerja tertentu dari sebuah tim, sebuah keluarga, atau bahkan satu orang mungkin memerlukan perangkat lunaknya sendiri. Tidak semua orang harus menjadi programmer, namun lebih banyak orang bisa menjadi penulis perangkat lunak.

AI mendorong lebih banyak pekerjaan implementasi ke bawah sambil memindahkan titik kontrol manusia dan pusat penciptaan ke atas satu lapisan abstraksi. Pemrogram tidak lagi hanya menjadi pembuat kode. Semakin lama, mereka akan menjadi penulis karya perangkat lunak yang lengkap—maksud saya “seniman baru”.

Kertas dan pena baru telah tiba. Namun kebangkitan baru tidak akan terjadi secara otomatis. Hal ini tidak bergantung pada seberapa banyak agen kode dapat menghasilkan, namun pada apakah kita memiliki penilaian—dan kesediaan untuk mengambil tanggung jawab—untuk menjawab pertanyaan yang lebih sulit daripada “bagaimana hal itu dapat dilakukan?”

Apa yang layak diciptakan, dan bagaimana kita ingin orang-orang merasakannya?

---

## Referensi

[1] Andrej Karpathy, [postingan X yang memperkenalkan “vibe coding”](https://x.com/karpathy/status/1886192184808149383), 02-02-2025.

[2] Andrej Karpathy, [postingan X mengusulkan “rekayasa agen”](https://x.com/karpathy/status/2019137879310836075), 04-02-2026.

[3] Liu Ningxin, [“Wang Jian: Inovasi Berasal dari 'Ketidaksempurnaan' dan 'Melintasi Batas'”](https://www.21jingji.com/article/20250925/herald/63dd40dc7eeb8b21044db93b5a1ae23f.html), *21st Century Business Herald*, 25-09-2025.

[4] Alan M. Turing, ["Mesin Cerdas"](https://www.alanturing.net/turing_archive/archive/l/l32/L32-001.html), laporan Laboratorium Fisika Nasional, 1948.

[5] Donald E. Knuth, [“Pemrograman Komputer sebagai Seni”](https://doi.org/10.1145/361604.361612), *Komunikasi ACM*, 17(12), 1974, hlm. 667–673.

[6] Paul Graham, [“Peretas dan Pelukis”](https://paulgraham.com/hp.html), Mei 2003.

[7] Bret Taylor, [“AI adalah penulis untuk orang lain, tetapi Anda adalah penulisnya”](https://www.linkedin.com/posts/brettaylor_ai-is-your-ghostwriter-but-you-are-the-author-activity-7426807696881815552-Vwr9), LinkedIn, 10-02-2026.

[8] Addy Osmani, [*Beyond Vibe Coding*](https://www.oreilly.com/library/view/beyond-vibe-coding/9798341634749/), O'Reilly Media, Agustus 2025.
