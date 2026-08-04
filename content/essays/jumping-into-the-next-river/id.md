---
id: jumping-into-the-next-river
type: essay
locale: id
title: Melompat ke Sungai Berikutnya
description: Mengapa pada Juni 2023 saya meninggalkan SenseTime setelah hampir sepuluh tahun untuk merintis usaha sebelum tahu apa yang akan saya bangun.
slug: jumping-into-the-next-river
published_at: 2023-12-31
translation_status: ai-translated
source_locale: zh-Hans
source_hash: 43420b02f3de32e3
topics:
  - Kewirausahaan
  - Kecerdasan buatan
  - SenseTime
  - Visi komputer
  - Catatan cerdas
---

Pada Juni 2023, saya meninggalkan [SenseTime][entity-sensetime] setelah bekerja di sana selama hampir sepuluh tahun.

Saat pergi, saya tidak memiliki produk yang sudah tervalidasi ataupun rencana bisnis yang lengkap. Saya bahkan belum menentukan dengan jelas apa yang akan saya kerjakan.

Namun saya tahu bahwa sudah waktunya bagi saya untuk kembali melompat ke sungai berikutnya.

Ini bukan pertama kalinya saya berganti sungai, tetapi untuk pertama kalinya saya harus meninggalkan sebuah perusahaan demi melakukannya.

## Pilihan yang terus saya buat

Saya berpindah dari sekolah dasar di desa ke sekolah menengah di kota kabupaten, lalu menempuh studi sarjana di [Universitas Nanjing][entity-nanjingUniversity] dan pascasarjana di [Universitas Tsinghua][entity-tsinghuaUniversity]. Saat kuliah pascasarjana, saya bergabung dengan SenseTime yang baru berdiri. Di sana saya mula-mula mendirikan tim deteksi keaktifan, kemudian tim visi industri.

Jika menoleh ke belakang, perubahan seperti ini tampaknya terjadi setiap beberapa tahun.

Perubahan itu bukan bagian dari rencana hidup yang disusun sebelumnya. Perubahan juga bukan terjadi karena pekerjaan lama kehilangan makna. Hanya saja, setelah bertahun-tahun mencurahkan usaha, bidang itu dan saya sendiri berangsur matang. Pekerjaan belum tentu selesai, tetapi tidak lagi memaksa saya melampaui batas diri.

Bagi banyak orang, itu adalah keadaan ideal. Bagi saya, keadaan itu justru menimbulkan kegelisahan. Saya tidak menyukai hidup yang ujungnya sudah dapat terlihat. Karena itu, setiap beberapa waktu saya perlu menempatkan diri di dalam masalah yang tidak saya kuasai—bahkan terkadang tidak saya ketahui harus dimulai dari mana.

“Sungai” di sini bukan sebuah perusahaan. Berganti sungai juga tidak selalu berarti mengundurkan diri. Sungai adalah bidang yang harus dipelajari kembali, sesuatu yang sulit dan belum saya ketahui cara mewujudkannya. Selama hampir sepuluh tahun di SenseTime, saya pernah melompat ke dua sungai yang berbeda.

Namun saya bukan orang yang semata-mata mengejar perubahan. Ada kekuatan lain di dalam diri saya yang arahnya hampir berlawanan: rasa tanggung jawab.

Saya sangat tidak suka meninggalkan sesuatu setengah jalan. Begitu memutuskan untuk mengerjakan sesuatu, saya ingin sungguh-sungguh mengerjakannya dengan baik. Satu kekuatan membuat saya mencari sungai berikutnya; kekuatan yang lain menahan saya di sungai lama agar menyelesaikan apa yang sudah dimulai.

Kepergian saya tahun ini merupakan hasil pertarungan panjang di antara kedua kekuatan itu.

## Membawa algoritma ke dunia nyata

Ketika pertama kali bergabung dengan SenseTime, saya berada di departemen riset. Namun yang selalu saya pedulikan adalah penerapan. Saya tidak hanya ingin tahu apakah suatu algoritma bekerja pada data eksperimen, tetapi apakah algoritma itu dapat masuk ke dunia nyata dan memecahkan masalah konkret.

Deteksi keaktifan merupakan bagian inti dari proyek penerapan besar pertama SenseTime. Sebelumnya, kami sudah memiliki beberapa demo pengenalan wajah yang bagus. Akan tetapi, ketika menghadapi penerapan berskala besar yang sesungguhnya, kami baru menemukan bahwa banyak masalah produksi belum terpecahkan, terutama serangan terhadap sistem daring.

Saat itu sistem menerima lebih dari satu juta kunjungan per hari. Pada puncaknya, dalam sehari sistem bahkan menghadapi ratusan ribu serangan. Teknologi harus terus dikembangkan, sementara layanan yang sudah berjalan juga harus tetap ditopang. Karena itu, pekerjaan kami sering terasa seperti pertarungan jarak dekat. Kami kerap baru meninggalkan kantor pukul tiga atau empat pagi, dan terkadang bekerja sepanjang malam.

Yang sering terjadi, kami berjuang siang dan malam, mengatasi semua serangan yang diketahui, lalu pulang untuk tidur. Tidak lama setelah terlelap, telepon kembali berdering: sistem daring berhasil ditembus lagi.

Dalam proses itulah kami ikut mendorong terbentuknya arsitektur model pengenalan wajah end-to-end di SenseTime. Sebelumnya, banyak algoritma pembelajaran mendalam hanya digunakan pada bagian-bagian tertentu, sedangkan keseluruhan sistem terdiri atas beberapa tahap yang dirangkai. Namun menghadapi serangan yang terus berubah, metode yang dirakit secara manual tidak dapat mengikuti kebutuhan iterasi yang cepat. Satu-satunya jalan keluar yang kami lihat adalah membiarkan sebuah model pembelajaran mendalam end-to-end belajar langsung dari data. Saat itu kami menyebutnya “model terpadu”.

Proyek ini untuk pertama kalinya membuat saya benar-benar memahami bahwa algoritma yang bekerja dalam demo belum tentu sudah menjadi teknologi yang mapan. Teknologi baru benar-benar dapat digunakan setelah bertahan terhadap akses berskala besar, serangan terus-menerus, dan berbagai keadaan tak terduga.

Kemudian kami memasuki ranah ponsel pintar. Sebelum setiap peluncuran, produsen ponsel mengadakan pengujian dengan ratusan orang, sementara perusahaan lain dan pengguna terus menemukan masalah baru. Hal ini memaksa kami membentuk salah satu tim pengujian terbesar di antara perusahaan algoritma AI yang kami ketahui pada waktu itu, demi mencoba menjangkau semua kemungkinan.

Satu masalah cahaya latar hanya dapat direproduksi di toilet pria tertentu di salah satu kantor SenseTime. Masalah lain, yang kami sebut “wajah separuh terang”, hanya muncul dari sudut tertentu di bawah sebuah pohon tertentu. Agar sebuah produk dapat bekerja andal dalam kehidupan sehari-hari ratusan juta orang, kami melakukan sangat banyak pekerjaan semacam ini.

Pada akhirnya, kami menjadikan autentikasi identitas pada ponsel pintar sebagai pemimpin pasar.

Inilah sungai pertama yang saya masuki di SenseTime. Deteksi keaktifan berawal dari demo riset, melewati beberapa putaran pengujian dalam penerapan berskala besar, dan akhirnya menjadi bidang yang cukup matang. Pada 2019, banyak masalah yang dahulu harus dijelajahi dengan risiko sudah dapat diatasi lewat pengalaman yang terkumpul. Saya belum menyelesaikan semuanya, tetapi tahu bahwa saya kembali memasuki zona nyaman.

Maka saya kembali merasa gelisah.

## Tetap di SenseTime, berganti sungai

Pada 2019, saya tidak meninggalkan SenseTime. Saya memilih beralih dari autentikasi identitas ke visi industri di dalam perusahaan yang sama.

Setelah melakukan banyak riset dan berdiskusi berulang kali dengan pimpinan perusahaan serta tim bisnis, kami memilih inspeksi cerdas sistem kabel kontak C4 kereta cepat sebagai proyek visi industri pertama.

Saya bersama tim prapenjualan mengunjungi banyak pusat inspeksi dan biro perkeretaapian. Pusat inspeksi Xuzhou meninggalkan kesan paling mendalam. Ketika kami datang, hujan baru saja berhenti. Pusat itu berada di tempat yang cukup terpencil, dan kami berjalan masuk melalui jalan berlumpur sambil terbenam pada setiap langkah.

Di dalam terdapat deretan komputer. Setiap hari para pemeriksa menghabiskan banyak waktu melihat gambar untuk mencari kemungkinan kerusakan pada sistem kabel kontak kereta api. Hampir semuanya memiliki lingkaran hitam di bawah mata. Setelah menemukan kerusakan, mereka masih harus menyusuri ribuan kilometer rel dan menangani setiap masalah satu per satu. Terkadang hanya ada sekrup atau mur yang longgar, tetapi mereka tetap harus pergi ke lokasi. Dalam dingin menusuk maupun panas terik, perbaikan tidak boleh ditunda.

Kebutuhan ini terasa sangat menyakitkan bagi saya. Setidaknya, kami seharusnya membantu mereka pada pekerjaan yang paling memakan waktu: melihat gambar.

Setelah benar-benar memulai, barulah kami menyadari bahwa masalahnya jauh lebih sulit daripada yang dibayangkan. Sistem kabel kontak memiliki lebih dari seratus jenis komponen dan lebih dari seribu jenis cacat. Bahkan angka-angka itu baru tersusun setelah kami berulang kali menghitungnya bersama rekan di lapangan. Banyak pekerjaan inspeksi sebelumnya bergantung pada pengalaman, sementara dokumen dan data historis tersebar di berbagai tempat. Kami harus mengumpulkan bahan dari awal, bekerja bersama rekan di garis depan, dan memahami setiap jenis kerusakan satu demi satu. Proses ini berlangsung hampir dua tahun.

Tantangan yang lebih besar adalah sedikitnya sampel. Kerusakan pada jalur kereta cepat pada dasarnya sangat jarang. Sebagian mungkin tidak muncul sekali pun dalam setahun, tetapi dapat menimbulkan akibat serius ketika terjadi. Kami tidak dapat menunggu sampai sampel yang cukup terkumpul. Kami harus merancang ulang metode berdasarkan kondisi nyata.

Akhirnya, proyek ini berhasil dan diterapkan dalam skala besar.

Visi industri adalah sungai kedua yang saya masuki di SenseTime. Saya tidak berganti perusahaan, tetapi hampir segala sesuatu yang akrab berubah: masalah, data, pelanggan, kriteria penilaian, dan cara bekerja. Saya kembali menjadi pemula, lalu bersama tim berhasil mengerjakan sesuatu yang sebelumnya tidak kami ketahui caranya.

Itulah sebabnya saya mengatakan bahwa sungai bukanlah perusahaan. Yang benar-benar menarik saya bukan meninggalkan suatu tempat, melainkan memasuki masalah yang lebih sulit.

## Tahun 2022 ketika saya tidak berganti sungai

Setelah SenseTime melantai di bursa, perusahaan mulai menghadapi tekanan baru dalam keuangan dan sumber daya. Pada saat yang sama, gelombang visi komputer sebelumnya berangsur memasuki masa matang, sementara gelombang berikutnya belum tampak jelas. Banyak hal dibatasi oleh sumber daya, pasar, atau batas teknologi, sehingga sulit bergerak secepat dahulu.

Sepanjang 2022, saya berada dalam keadaan agak lesu atau, dengan kata lain, sedikit pasrah. Saya mulai bekerja dengan jam kantor biasa.

Tidak ada yang salah dengan kalimat itu. Bekerja dengan jam biasa adalah kehidupan normal bagi banyak orang. Namun sebelumnya saya selalu memperlakukan pekerjaan seperti membangun perusahaan rintisan. Ketika tiba-tiba masuk ke keadaan semacam itu, saya justru merasa sangat terpuruk.

Di permukaan, hidup saat itu jauh lebih nyaman daripada sebelumnya. Saya tidak lagi bangun setiap hari dengan masalah baru yang harus diselesaikan, dan tidak lagi sering begadang sepanjang malam karena gangguan daring. Namun justru kenyamanan itu yang membuat saya menderita: saya mulai dapat membayangkan seperti apa hidup saya beberapa tahun kemudian bila tidak ada yang berubah.

Saya tidak langsung pergi. Rasa tanggung jawablah yang membuat saya bertahan.

Inspeksi kereta cepat sudah berhasil, tetapi inspeksi kualitas di pabrik mobil belum berhasil dan lengan robot industri cerdas juga belum selesai. Saya ingin melanjutkan pekerjaan itu. Sulit bagi saya untuk menerima bahwa saya mendirikan sebuah tim dan memilih arah, lalu pergi pada saat yang paling sulit.

Satu kekuatan menyuruh saya mencari sungai berikutnya; kekuatan lain mengatakan bahwa pekerjaan di depan saya belum selesai.

Pada 2022, kekuatan kedua lebih besar.

## Saya melihat sungai berikutnya

ChatGPT muncul pada akhir tahun lalu. GPT-4 hadir pada paruh pertama tahun ini. Keseimbangan lama pun pecah.

Saat itu saya memiliki perasaan yang sangat kuat: visi komputer telah kehilangan bentengnya sendiri.

Masa depan tidak akan terdiri atas model terpisah untuk teks, gambar, dan suara. Visi komputer tidak akan lenyap, tetapi akan menjadi bagian dari cara model umum memahami dunia. Dahulu kami memperlakukan visi sebagai satu pusat teknologi yang utuh; sekarang era kecerdasan umum yang lebih besar mulai muncul.

Ini bukan sekadar peningkatan teknis lain di dalam visi komputer. Arus utama perkembangan teknologi itu sendiri telah berubah.

Saya kembali melihat sebuah sungai yang arusnya belum saya kenal.

Dahulu saya dapat berganti sungai tanpa meninggalkan SenseTime. Peralihan dari autentikasi identitas ke visi industri pada 2019 adalah pilihan semacam itu. Namun kali ini, sungai berikutnya tidak terletak di perpanjangan pekerjaan lama saya. Saya ingin memasuki kecerdasan umum dan aplikasi baru yang akan diciptakannya.

Pada saat itu, jabatan dan tanggung jawab saya masih berada di visi industri. Jika tetap tinggal, saya semestinya mengerahkan seluruh tenaga untuk mengerjakan visi industri dengan baik. Saya tidak seharusnya memikul tanggung jawab lama sambil mempersiapkan tujuan berikutnya di samping itu.

Untuk benar-benar melompat ke sungai berikutnya, saya harus lebih dahulu meninggalkan peran lama.

Pada paruh pertama tahun ini, saya semakin tidak dapat berdiam diri. Saya tidak tahu produk apa yang akhirnya akan diciptakan teknologi baru itu, atau apa yang dapat saya kerjakan di dalamnya. Namun saya tahu bahwa jika menunggu sampai semuanya jelas, saya mungkin akan kehilangan tahun-tahun ketika saya paling perlu mulai belajar.

Hal yang benar-benar penting jarang mencapai saat ketika kita dapat menyatakannya “selesai sepenuhnya”. Jika tanggung jawab berarti harus menunggu sampai semua masalah berakhir, seseorang mungkin tidak akan pernah membuat pilihan baru.

Perlahan saya menyadari bahwa tanggung jawab tidak hanya berarti bertahan. Bertahan juga merupakan pilihan, dan konsekuensinya juga harus dipikul. Rasa tanggung jawab tidak boleh menjadi alasan untuk menunda pilihan tanpa batas.

Karena itu, pada Juni tahun ini, saya meninggalkan SenseTime.

## Mengapa saya pergi tanpa jawaban

Sebelum pergi, saya tidak diam-diam mempersiapkan usaha di luar pekerjaan, dan tidak berencana membawa bisnis yang sedang dikerjakan SenseTime keluar untuk mendirikan perusahaan sendiri.

Jika saya masih bekerja di sebuah perusahaan, bertanggung jawab atas hasil pekerjaannya dan memakai sumber daya yang diberikannya, tetapi diam-diam memikirkan cara mempersiapkan tujuan berikutnya, saya akan merasa tidak jujur terhadap pekerjaan saya saat itu.

Artinya, ketika mengundurkan diri, saya memang belum siap.

Saya belum siap merintis usaha bukan karena tidak menganggapnya serius, melainkan karena sampai saat pergi saya masih menganggap serius pekerjaan lama.

Saya hanya dapat pergi lebih dahulu, kemudian mencari jawabannya.

Mampu berenang tidak berarti mengenal setiap sungai. Kita juga tidak mungkin berdiri di tepi sampai sepenuhnya memahami arus, baru kemudian melompat. Sebagian pengetahuan hanya dapat diperoleh di dalam air, dan sebagian arah baru tampak setelah kita mulai bergerak.

Kali ini, berganti sungai kebetulan berarti meninggalkan pekerjaan. Namun yang mendorong saya bukan hasrat untuk mengundurkan diri, melainkan kemunculan sungai berikutnya.

## Memilih sisi aplikasi

Setelah ChatGPT muncul, saya membahas sebuah pertanyaan dengan teman-teman: jika AGI tiba, apakah kecerdasan pada akhirnya akan terpusat di tangan segelintir platform, atau dibagikan kepada lebih banyak orang?

Penilaian saya adalah bahwa kecerdasan pada akhirnya pasti akan menyebar.

Saya tidak dapat membuktikannya secara ketat. Intuisi saya sederhana: alam semesta sendiri bukan sistem yang terpusat. Dunia nyata terdiri atas tak terhitung banyaknya manusia, perangkat, lingkungan, dan masalah lokal. Jika kecerdasan benar-benar ingin masuk ke dunia ini, ia juga harus hadir dalam tak terhitung banyaknya bentuk. Pelatihan model fondasi mungkin terpusat di segelintir perusahaan, tetapi penerapan kecerdasan tidak akan hanya menjadi milik beberapa platform.

Karena itu saya tidak ingin membangun model fondasi. Saya lebih ingin membangun aplikasi yang memakai kecerdasan baru untuk menjawab kebutuhan konkret satu demi satu.

Pilihan ini juga berasal dari pengalaman hidup saya.

Saya tumbuh di desa. Dari sekolah dasar hingga menengah, saya menghabiskan banyak masa libur dan waktu senggang untuk membantu pekerjaan pertanian keluarga. Menanam benih, memberi pupuk dan pestisida, mengemudikan traktor, serta memelihara hewan—hampir semuanya pernah saya lakukan. Selama liburan, saya menganggap diri saya petani dalam arti yang sesungguhnya.

Saya menyukai rasa pencapaian yang diberikan pekerjaan semacam itu. Apakah tanaman tumbuh baik dan hewan dipelihara dengan baik, hasilnya langsung terlihat. Jika kita bekerja sedikit lebih baik, kehidupan satu keluarga juga menjadi sedikit lebih baik.

Saat kuliah, saya menjalani banyak pekerjaan paruh waktu dan membuka kelas tambahan musim panas bersama beberapa teman. Kami sendiri yang merekrut murid, menerima pembayaran, dan mengajar. Musim panas itu, semua yang terlibat mendapat cukup uang untuk biaya hidup tahun berikutnya.

Saat pascasarjana, saya menjadi guru privat. Kemudian, ketika SenseTime baru mulai dan kantornya masih berupa satu kamar di Hotel Wenjin dekat gerbang selatan Tsinghua, saya bergabung sebagai salah satu karyawan pendiri awal.

Di permukaan, berbagai pengalaman ini tampaknya tidak banyak memiliki kesamaan. Namun semuanya memberi saya rasa pencapaian dengan cara yang sama: memecahkan masalah nyata dan melihat sesuatu berubah karena saya ikut terlibat.

Karena itu, ketika era baru kecerdasan umum muncul, saya kembali secara naluriah berdiri di sisi aplikasi. Yang saya pedulikan bukan cara membuktikan bahwa sebuah teknologi lebih kuat, melainkan apa yang akhirnya dapat dilakukannya bagi seseorang yang konkret.

## Setelah melompat

Memasuki sungai berikutnya tidak berarti saya langsung tahu harus berenang ke arah mana.

Pada beberapa bulan pertama setelah meninggalkan SenseTime, secara naluriah saya masih mencari peluang dari tempat yang paling saya kenal. Bersama seorang teman, saya mencoba beberapa produk terkait gambar. Bagaimanapun, hampir sepuluh tahun pekerjaan saya berkaitan dengan visi komputer. Memulai dari sana tampaknya merupakan pilihan paling alami.

Namun setelah mengerjakannya beberapa waktu, saya semakin merasa bahwa arahnya tidak tepat. Masalahnya belum tentu terletak pada produk itu sendiri, melainkan bahwa kami masih berangkat dari apa yang dapat kami lakukan, bukan dari apa yang benar-benar dibutuhkan pengguna.

Setelah memegang palu selama sepuluh tahun, meski pindah ke ruangan lain, semua hal masih mudah terlihat seperti paku.

Saya menyadari bahwa memasuki bidang baru bukan sekadar berpindah tempat lalu terus memakai metode yang berhasil dahulu. Benar-benar memulai kembali berarti untuk sementara meletakkan jawaban yang paling kita kuasai.

Maka saya bertanya kepada diri sendiri: jika tidak mempertimbangkan pengalaman teknis yang terkumpul selama sepuluh tahun terakhir, produk AI apa yang paling saya inginkan untuk diri sendiri?

Jawaban saya adalah catatan.

## Produk yang paling saya inginkan

Sejak sekolah menengah saya memegang prinsip: “Jangan membaca tanpa menulis dan membuat catatan.” Bagi saya, catatan tidak pernah sekadar tempat menyimpan bahan. Catatan adalah perpanjangan ingatan sekaligus bagian dari proses berpikir.

Orang sering menyebut catatan sebagai “otak kedua”, tetapi apa yang disebut otak kedua ini sebenarnya tidak cerdas.

Kita memasukkan sesuatu ke dalamnya, tetapi tetap harus mengatur, mencari, menghubungkan, dan memikirkan sendiri cara mengambilnya kembali. Ia lebih menyerupai cakram keras eksternal daripada otak lain.

Generasi model besar ini untuk pertama kalinya membuat saya percaya bahwa keadaan itu dapat berubah secara mendasar. Catatan masa depan mungkin bukan hanya menyimpan apa yang pernah ditulis seseorang. Catatan dapat memahami isinya, menemukan hubungan, membantu kita mengingat ketika dibutuhkan, bahkan ikut dalam proses berpikir.

Yang ingin saya bangun bukan perangkat lunak catatan yang ditambahi beberapa fitur AI, melainkan otak kedua yang benar-benar cerdas.

Kecerdasan umum adalah sungai berikutnya yang saya masuki. Catatan cerdas adalah arah pertama yang saya putuskan untuk dituju setelah berada di dalamnya.

## Belum sampai ke seberang

Sebelumnya, saya telah melakukan banyak hal yang memiliki sifat kewirausahaan. Membuka kelas musim panas saat kuliah merupakan usaha informal. Bergabung dengan SenseTime yang baru berdiri berarti ikut dalam sebuah perusahaan rintisan. Mendirikan tim deteksi keaktifan dan visi industri di dalam SenseTime juga sangat mirip dengan merintis usaha di dalam sebuah perusahaan.

Namun kali ini berbeda. Pada Juni tahun ini, untuk pertama kalinya saya meninggalkan sebuah perusahaan, menempatkan diri sepenuhnya di hadapan pasar, dan mulai merintis usaha secara penuh waktu dalam arti yang sebenarnya.

Hari ini adalah 31 Desember 2023. Setengah tahun telah berlalu sejak saya meninggalkan SenseTime.

Saya masih belum menemukan jawaban atas semua pertanyaan, juga belum mencapai seberang yang dapat disebut keberhasilan. Saya sedang mempelajari banyak hal yang sebelumnya tidak saya kuasai: membangun produk, memahami pasar, dan membuat keduanya cocok.

Bagi banyak orang, keadaan ini mungkin menyakitkan. Bagi saya, justru ada rasa akrab yang sudah lama hilang, karena saya kembali berada di tempat yang jawabannya tidak saya ketahui.

Ini adalah tulisan pertama di blog pribadi saya. Saya menulisnya bukan karena perjalanan ini telah berakhir, tetapi karena pada saat perjalanan benar-benar dimulai, saya ingin mencatat mengapa saya berangkat. Kelak, saya juga akan terus menulis di sini tentang teknologi, produk, manusia, dan hal-hal yang sedang saya ciptakan.

Saya tidak tahu ke mana sungai ini pada akhirnya akan mengalir.

Namun jika menoleh ke belakang, beberapa perubahan penting dalam hidup saya dimulai dari pilihan yang sama: setelah mencurahkan cukup banyak waktu dan menyadari bahwa saya berangsur masuk ke zona nyaman, saya mulai mencari sungai berikutnya.

Pada Juni tahun ini, saya kembali membuat pilihan itu.

Saya masih berada di dalam air.
