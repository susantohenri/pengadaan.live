const Nightmare = require('nightmare')
const nightmare = Nightmare({
    show: false,
    webPreferences: {
        images: false
    }
})
const pages = ['https://linklpse.blogspot.com/2016/02/lpse-kementerian-agama-ri.html', 'https://linklpse.blogspot.com/2020/03/blog-post.html', 'https://linklpse.blogspot.com/2016/02/lpse-kementerian-dalam-negeri.html', 'https://linklpse.blogspot.com/2016/02/lpse-kementerian-desa-pembangunan.html', 'https://linklpse.blogspot.com/2016/02/blog-post.html', 'https://linklpse.blogspot.com/2016/02/lpse-kementerian-hukum-dan-hak-asasi.html', 'https://linklpse.blogspot.com/2016/02/lpse-kementerian-kelautan-perikanan.html', 'https://linklpse.blogspot.com/2016/02/lpse-kementerian-kesehatan-ri.html', 'https://linklpse.blogspot.com/2017/12/kementerian-ketenagakerjaan.html', 'https://linklpse.blogspot.com/2016/02/lpse-kementerian-keuangan.html', 'https://linklpse.blogspot.com/2016/02/lpse-kementerian-komunikasi-dan.html', 'https://linklpse.blogspot.com/2016/02/lpse-kementerian-koperasi-dan-ukm.html', 'https://linklpse.blogspot.com/2016/02/lpse-kementerian-kehutanan-dan.html', 'https://linklpse.blogspot.com/2016/02/lpse-kementerian-luar-negeri.html', 'https://linklpse.blogspot.com/2016/02/lpse-kementerian-pariwisata.html', 'https://linklpse.blogspot.com/2016/02/lpse-kementerian-pekerjaan-umum.html', 'https://linklpse.blogspot.com/2016/02/lpse-kementerian-pemuda-dan-olahraga.html', 'https://linklpse.blogspot.com/2016/02/lpse-kementerian-pendayagunaan-aparatir.html', 'https://linklpse.blogspot.com/2016/02/lpse-kementerian-pendidikan-nasional.html', 'https://linklpse.blogspot.com/2016/02/lpse-kementerian-perdagangan.html', 'https://linklpse.blogspot.com/2016/02/lpse-kementerian.html', 'https://linklpse.blogspot.com/2016/02/lpse-kementerian-perindustrian.html', 'https://linklpse.blogspot.com/2016/02/lpse-kementerian-pertahanan-ri.html', 'https://linklpse.blogspot.com/2016/02/lpse-kementerian-pertanian.html', 'https://linklpse.blogspot.com/2016/02/lpse.html', 'https://linklpse.blogspot.com/2016/02/lpse-kementerian-sosial.html', 'https://linklpse.blogspot.com/2016/02/lpse-kementerian-koordinator-bidang.html', 'https://linklpse.blogspot.com/2016/02/lpse-badan-informasi-geospasial.html', 'https://linklpse.blogspot.com/2016/02/lpse-badan-intelijen-negara.html', 'https://linklpse.blogspot.com/2017/12/lpse-badan-keamanan-laut.html', 'https://linklpse.blogspot.com/2016/02/lpse-badan-kependudukan-dan-keluarga.html', 'https://linklpse.blogspot.com/2016/02/lpse-badan-koordinasi-penanaman-modal.html', 'https://linklpse.blogspot.com/2016/02/lpse-badan-meteorologi-klimatologi.html', 'https://linklpse.blogspot.com/2016/02/lpse-badan-narkotika-nasional.html', 'https://linklpse.blogspot.com/2016/02/lpse-badan-nasional-penanggulangan.html', 'https://linklpse.blogspot.com/2016/02/lpse-badan-nasional-penanggulangan_18.html', 'https://linklpse.blogspot.com/2016/02/lpse-badan-sar-nasional.html', 'https://linklpse.blogspot.com/2016/02/lpse-badan-nasional-penempatan-dan.html', 'https://linklpse.blogspot.com/2016/02/lpse-badan-nasional-pengelolaan.html', 'https://linklpse.blogspot.com/2016/02/lpse-badan-pengawas-obat-dan-makanan.html', 'https://linklpse.blogspot.com/2016/02/lpse-badan-pengkajian-dan-penerapan.html', 'https://linklpse.blogspot.com/2016/02/lpse-badan-pusat-statistik.html', 'https://linklpse.blogspot.com/2017/11/blog-post.html', 'https://linklpse.blogspot.com/2017/11/lpse-dewan-perwakilan-daerah.html', 'https://linklpse.blogspot.com/2020/03/lpse-dewan-perwakilan-rakyat-ri.html', 'https://linklpse.blogspot.com/2017/11/lpse-kejaksaan-republik-indonesia.html', 'https://linklpse.blogspot.com/2017/11/lpse-kepolisian-negara-republik.html', 'https://linklpse.blogspot.com/2016/02/lpse-badan-pengusahaan-batam.html', 'https://linklpse.blogspot.com/2016/02/lpse-badan-pertanahan-nasional.html', 'https://linklpse.blogspot.com/2017/11/lpse-lembaga-penerbangan-dan-antariksa.html', 'https://linklpse.blogspot.com/2017/11/lpse-lembaga-penyiaran-publik-televisi.html', 'https://linklpse.blogspot.com/2017/11/lpse-mahkamah-agung.html', 'https://linklpse.blogspot.com/2017/11/lpse-mahkamah-konstitusi-ri.html', 'https://linklpse.blogspot.com/2017/11/lpse-majelis-permusyawaratan-rakyat.html', 'https://linklpse.blogspot.com/2016/02/lpse-dki-jakarta.html', 'https://linklpse.blogspot.com/2016/02/lpse-provinsi-aceh.html', 'https://linklpse.blogspot.com/2016/02/lpse-kabupaten-aceh-barat_28.html', 'https://linklpse.blogspot.com/2016/09/lpse-kabupaten-aceh-barat-daya.html', 'https://linklpse.blogspot.com/2016/02/lpse-kabupaten-aceh-besar_28.html', 'https://linklpse.blogspot.com/2016/02/lpse-kabupaten-aceh-jaya_28.html', 'https://linklpse.blogspot.com/2016/02/lpse-kabupaten-aceh-selatan.html', 'https://linklpse.blogspot.com/2016/02/lpse-kabupaten-aceh-singkil.html', 'https://linklpse.blogspot.com/2016/02/full-halaman-klik-lpse-kab.html', 'https://linklpse.blogspot.com/2016/02/lpse-kabupaten-aceh-tengah.html', 'https://linklpse.blogspot.com/2016/02/lpse-kabupaten-aceh-tenggara.html', 'https://linklpse.blogspot.com/2016/02/lpse-kabupaten-aceh-timur.html', 'https://linklpse.blogspot.com/2016/02/lpse-kabupaten-aceh-utara.html', 'https://linklpse.blogspot.com/2016/02/lpse-kabupaten-bener-meriah.html', 'https://linklpse.blogspot.com/2016/02/lpse-kabupaten-bireuen.html', 'https://linklpse.blogspot.com/2016/02/lpse-kabupaten-gayo-lues.html', 'https://linklpse.blogspot.com/2016/02/lpse-kabupaten-nagan-raya.html', 'https://linklpse.blogspot.com/2016/02/lpse-kabupaten-pidie.html', 'https://linklpse.blogspot.com/2016/02/lpse-kabupaten-pidie-jaya.html', 'https://linklpse.blogspot.com/2016/02/lpse-kabupaten-simeulue.html', 'https://linklpse.blogspot.com/2016/02/lpse-kota-banda-aceh.html', 'https://linklpse.blogspot.com/2016/02/lpse-kota-langsa.html', 'https://linklpse.blogspot.com/2016/02/lpse-kota-lhokseumawe.html', 'https://linklpse.blogspot.com/2016/02/lpse-kota-sabang.html', 'https://linklpse.blogspot.com/2016/02/lpse-kota-subulussalam.html', 'https://linklpse.blogspot.com/2016/02/lpse-provinsi-bali.html', 'https://linklpse.blogspot.com/2016/02/lpse-kabupaten-badung.html', 'https://linklpse.blogspot.com/2016/02/lpse-kabupaten-bangli.html', 'https://linklpse.blogspot.com/2016/02/lpse-kabupaten-buleleng.html', 'https://linklpse.blogspot.com/2016/02/lpse-kabupaten-gianyar.html', 'https://linklpse.blogspot.com/2016/02/lpse-kabupaten-jembrana.html', 'https://linklpse.blogspot.com/2016/02/lpse-kabupaten-karangasem.html', 'https://linklpse.blogspot.com/2016/02/lpse-kabupaten-klungkung.html', 'https://linklpse.blogspot.com/2016/02/lpse-kabupaten-tabanan.html', 'https://linklpse.blogspot.com/2016/02/lpse-provinsi-kepulauan-bangka-belitung.html', 'https://linklpse.blogspot.com/2016/02/lpse-kabupaten-bangka.html', 'https://linklpse.blogspot.com/2016/02/lpse-kabupaten-bangka-barat.html', 'https://linklpse.blogspot.com/2016/02/lpse-kabupaten-bangka-selatan.html', 'https://linklpse.blogspot.com/2016/02/lpse-kabupaten-bangka-tengah.html', 'https://linklpse.blogspot.com/2016/02/lpse-kabupaten-belitung.html', 'https://linklpse.blogspot.com/2016/02/lpse-kabupaten-belitung-timur.html', 'https://linklpse.blogspot.com/2016/02/lpse-kota-pangkal-pinang.html', 'https://linklpse.blogspot.com/2016/02/lpse-provinsi-banten.html', 'https://linklpse.blogspot.com/2016/02/lpse-kabupaten-lebak.html', 'https://linklpse.blogspot.com/2016/02/lpse-kabupaten-pandeglang.html', 'https://linklpse.blogspot.com/2016/02/lpse-kabupaten-serang.html', 'https://linklpse.blogspot.com/2016/02/lpse-kabupaten-tangerang.html', 'https://linklpse.blogspot.com/2016/02/lpse-kota-cilegon.html', 'https://linklpse.blogspot.com/2016/02/lpse-kota-serang.html', 'https://linklpse.blogspot.com/2016/02/lpse-kota-tangerang.html', 'https://linklpse.blogspot.com/2016/02/lpse-kota-tangerang-selatan.html', 'https://linklpse.blogspot.com/2016/02/lpse-provinsi-bengkulu.html', 'https://linklpse.blogspot.com/2016/02/lpse-kabupaten-bengkulu-selatan.html', 'https://linklpse.blogspot.com/2016/02/lpse-kabupaten-bengkulu-tengah.html', 'https://linklpse.blogspot.com/2017/08/lpse-kabupaten-bengkulu-utara.html', 'https://linklpse.blogspot.com/2016/02/lpse-kabupaten-kaur.html', 'https://linklpse.blogspot.com/2016/02/lpse-kabupaten-kepahiang.html', 'https://linklpse.blogspot.com/2016/02/lpse-kabupaten-lebong.html', 'https://linklpse.blogspot.com/2016/02/lpse-kabupaten-muko-muko.html', 'https://linklpse.blogspot.com/2016/02/lpse-kabupaten-rejang-lebong.html', 'https://linklpse.blogspot.com/2016/02/lpse-kabupaten-seluma.html', 'https://linklpse.blogspot.com/2016/02/lpse-kota-bengkulu.html', 'https://linklpse.blogspot.com/2016/02/lpse-provinsi-daerah-istimewa-yogyakarta.html', 'https://linklpse.blogspot.com/2016/02/lpse-kabupaten-gunung-kidul.html', 'https://linklpse.blogspot.com/2016/02/lpse-kabupaten-kulon-progo.html', 'https://linklpse.blogspot.com/2016/02/lpse-kabupaten-sleman.html', 'https://linklpse.blogspot.com/2016/02/lpse-kota-yogyakarta.html', 'https://linklpse.blogspot.com/2016/02/lpse-provinsi-gorontalo.html', 'https://linklpse.blogspot.com/2016/02/lpse-kabupaten-boalemo.html', 'https://linklpse.blogspot.com/2016/02/lpse-kabupaten-bone-bolango.html', 'https://linklpse.blogspot.com/2016/02/lpse-kabupaten-gorontalo.html', 'https://linklpse.blogspot.com/2016/02/lpse-kabupaten-gorontalo-utara.html', 'https://linklpse.blogspot.com/2016/02/lpse-kabupaten-pohuwato.html', 'https://linklpse.blogspot.com/2016/02/lpse-kota-gorontalo.html', 'https://linklpse.blogspot.com/2016/02/lpse-provinsi-jambi.html', 'https://linklpse.blogspot.com/2016/02/lpse-kabupaten-batanghari.html', 'https://linklpse.blogspot.com/2017/07/lpse-kabupaten-bungo.html', 'https://linklpse.blogspot.com/2017/07/lpse-kabupaten-kerinci.html', 'https://linklpse.blogspot.com/2017/07/lpse-kabupaten-merangin.html', 'https://linklpse.blogspot.com/2016/02/lpse-kabupaten-muaro-jambi.html', 'https://linklpse.blogspot.com/2016/02/lpse-kabupaten-sarolangun.html', 'https://linklpse.blogspot.com/2016/02/lpse-kabupaten-tanjung-jabung-barat.html', 'https://linklpse.blogspot.com/2016/02/lpse-kabupaten-tanjung-jabung-timur.html', 'https://linklpse.blogspot.com/2016/02/lpse-kabupaten-tebo.html', 'https://linklpse.blogspot.com/2016/02/lpse-kota-jambi.html', 'https://linklpse.blogspot.com/2016/02/lpse-kota-sungai-penuh.html', 'https://linklpse.blogspot.com/2016/02/lpse-provinsi-jawa-barat.html', 'https://linklpse.blogspot.com/2016/02/lpse-kabupaten-bandung-barat.html', 'https://linklpse.blogspot.com/2016/02/lpse-kabupaten-bekasi.html', 'https://linklpse.blogspot.com/2016/02/lpse-kabupaten-bogor.html', 'https://linklpse.blogspot.com/2016/02/lpse-kabupaten-ciamis.html', 'https://linklpse.blogspot.com/2016/02/lpse-kabupaten-cianjur.html', 'https://linklpse.blogspot.com/2016/02/lpse-kabupaten-indramayu.html', 'https://linklpse.blogspot.com/2016/02/lpse-kabupaten-karawang.html', 'https://linklpse.blogspot.com/2016/02/lpse-kabupaten-kuningan.html', 'https://linklpse.blogspot.com/2016/02/lpse-kabupaten-majalengka.html', 'https://linklpse.blogspot.com/2016/02/lpse-kabupaten-purwakarta.html', 'https://linklpse.blogspot.com/2016/02/lpse-kabupaten-subang.html', 'https://linklpse.blogspot.com/2016/02/lpse-kabupaten-sukabumi.html', 'https://linklpse.blogspot.com/2016/02/lpse-kabupaten-sumedang.html', 'https://linklpse.blogspot.com/2016/02/lpse-kabupaten-tasikmalaya.html', 'https://linklpse.blogspot.com/2016/02/lpse-kota-bandung.html', 'https://linklpse.blogspot.com/2016/02/lpse-kota-banjar.html', 'https://linklpse.blogspot.com/2016/02/lpse-kota-bekasi.html', 'https://linklpse.blogspot.com/2016/02/lpse-kota-bogor.html', 'https://linklpse.blogspot.com/2016/02/lpse-kota-cimahi.html', 'https://linklpse.blogspot.com/2016/02/lpse-kota-cirebon.html', 'https://linklpse.blogspot.com/2016/02/lpse-kota-depok.html', 'https://linklpse.blogspot.com/2016/02/lpse-kota-tasikmalaya.html', 'https://linklpse.blogspot.com/2017/06/lpse-provinsi-jawa-tengah.html', 'https://linklpse.blogspot.com/2017/06/lpse-kabupaten-banjarnegara.html', 'https://linklpse.blogspot.com/2017/06/lpse-kabupaten-banyumas.html', 'https://linklpse.blogspot.com/2017/06/lpse-kabupaten-batang.html', 'https://linklpse.blogspot.com/2017/06/lpse-kabupaten-blora.html', 'https://linklpse.blogspot.com/2017/06/lpse-kabupaten-boyolali.html', 'https://linklpse.blogspot.com/2017/06/blog-post.html', 'https://linklpse.blogspot.com/2017/06/lpse-kabupaten-cilacap.html', 'https://linklpse.blogspot.com/2017/06/lpse-kabupaten-demak.html', 'https://linklpse.blogspot.com/2017/06/lpse-kabupaten-grobogan.html', 'https://linklpse.blogspot.com/2017/05/lpse-kabupaten-jepara.html', 'https://linklpse.blogspot.com/2017/05/lpse-kabupaten-karanganyar.html', 'https://linklpse.blogspot.com/2017/05/lpse-kabupaten-kendal.html', 'https://linklpse.blogspot.com/2017/05/lpse-kabupaten-klaten.html', 'https://linklpse.blogspot.com/2017/05/lpse-kabupaten-kudus.html', 'https://linklpse.blogspot.com/2017/05/lpse-kabupaten-magelang.html', 'https://linklpse.blogspot.com/2017/05/lpse-kabupaten-pati.html', 'https://linklpse.blogspot.com/2017/05/lpse-kabupaten-pekalongan.html', 'https://linklpse.blogspot.com/2017/05/lpse-kabupaten-pemalang.html', 'https://linklpse.blogspot.com/2017/05/lpse-kabupaten-purbalingga.html', 'https://linklpse.blogspot.com/2017/05/lpse-kabupaten-purworejo.html', 'https://linklpse.blogspot.com/2017/05/lpse-kabupaten-rembang.html', 'https://linklpse.blogspot.com/2017/05/lpse-kabupaten-semarang.html', 'https://linklpse.blogspot.com/2017/05/lpse-kabupaten-sragen.html', 'https://linklpse.blogspot.com/2017/05/lpse-kabupaten-sukoharjo.html', 'https://linklpse.blogspot.com/2017/03/lpse-kabupaten-tegal.html', 'https://linklpse.blogspot.com/2017/05/lpse-kabupaten-temanggung.html', 'https://linklpse.blogspot.com/2017/05/lpse-kabupaten-wonogiri.html', 'https://linklpse.blogspot.com/2017/05/lpse-kabupaten-wonosobo.html', 'https://linklpse.blogspot.com/2017/05/lpse-kota-magelang.html', 'https://linklpse.blogspot.com/2017/05/lpse-kota-pekalongan.html', 'https://linklpse.blogspot.com/2017/05/lpse-kota-salatiga.html', 'https://linklpse.blogspot.com/2017/05/lpse-kota-semarang.html', 'https://linklpse.blogspot.com/2017/05/lpse-kota-surakarta.html', 'https://linklpse.blogspot.com/2017/05/lpse-kota-tegal.html', 'https://linklpse.blogspot.com/2016/02/lpse-provinsi-jawa-timur.html', 'https://linklpse.blogspot.com/2016/02/lpse-kabupaten-bangkalan.html', 'https://linklpse.blogspot.com/2016/02/lpse-kabupaten-banyuwangi.html', 'https://linklpse.blogspot.com/2016/02/lpse-kabupaten-blitar.html', 'https://linklpse.blogspot.com/2016/02/lpse-kabupaten-bojonegoro.html', 'https://linklpse.blogspot.com/2016/02/lpse-kabupaten-bondowoso.html', 'https://linklpse.blogspot.com/2016/02/lpse-kabupaten-jember.html', 'https://linklpse.blogspot.com/2016/02/lpse-kabupaten-jombang.html', 'https://linklpse.blogspot.com/2016/02/lpse-kabupaten-kediri.html', 'https://linklpse.blogspot.com/2016/02/lpse-kabupaten-lamongan.html', 'https://linklpse.blogspot.com/2016/02/lpse-kabupaten-lumajang.html', 'https://linklpse.blogspot.com/2016/02/lpse-kabupaten-madiun.html', 'https://linklpse.blogspot.com/2016/02/lpse-kabupaten-magetan.html', 'https://linklpse.blogspot.com/2016/02/lpse-kabupaten-malang.html', 'https://linklpse.blogspot.com/2016/02/lpse-kabupaten-mojokerto.html', 'https://linklpse.blogspot.com/2016/02/lpse-kabupaten-nganjuk.html', 'https://linklpse.blogspot.com/2016/02/lpse-kabupaten-ngawi.html', 'https://linklpse.blogspot.com/2017/04/lpse-kabupaten-pacitan.html', 'https://linklpse.blogspot.com/2016/02/lpse-kabupaten-pamekasan.html', 'https://linklpse.blogspot.com/2016/02/lpse-kabupaten-pasuruan.html', 'https://linklpse.blogspot.com/2016/02/lpse-kabupaten-ponorogo.html', 'https://linklpse.blogspot.com/2016/02/lpse-kabupaten-probolinggo.html', 'https://linklpse.blogspot.com/2016/02/lpse-kabupaten-sampang.html', 'https://linklpse.blogspot.com/2016/02/blog-post_29.html', 'https://linklpse.blogspot.com/2016/02/lpse-kabupaten-situbondo.html', 'https://linklpse.blogspot.com/2016/02/lpse-kabupaten-sumenep.html', 'https://linklpse.blogspot.com/2016/02/lpse-kabupaten-trenggalek.html', 'https://linklpse.blogspot.com/2016/02/lpse-kabupaten-tuban.html', 'https://linklpse.blogspot.com/2016/02/lpse-kabupaten-tulungagung.html', 'https://linklpse.blogspot.com/2016/02/lpse-kota-batu.html', 'https://linklpse.blogspot.com/2016/02/lpse-kota-blitar.html', 'https://linklpse.blogspot.com/2016/02/lpse-kota-kediri.html', 'https://linklpse.blogspot.com/2016/02/lpse-kota-madiun.html', 'https://linklpse.blogspot.com/2016/02/lpse-kota-malang.html', 'https://linklpse.blogspot.com/2016/02/lpse-kota-mojokerto.html', 'https://linklpse.blogspot.com/2016/02/lpse-kota-probolinggo.html', 'https://linklpse.blogspot.com/2016/02/lpse-kota-surabaya.html', 'https://linklpse.blogspot.com/2017/03/blog-post.html', 'https://linklpse.blogspot.com/2017/03/lpse-kabupaten-bengkayang.html', 'https://linklpse.blogspot.com/2017/03/lpse-kabupaten-kapuas-hulu.html', 'https://linklpse.blogspot.com/2017/03/lpse-kabupaten-kayong-utara.html', 'https://linklpse.blogspot.com/2017/03/lpse-kabupaten-ketapang.html', 'https://linklpse.blogspot.com/2017/03/lpse-kabupaten-kubu-raya.html', 'https://linklpse.blogspot.com/2017/03/lpse-kabupaten-landak.html', 'https://linklpse.blogspot.com/2017/03/lpse-kabupaten-melawi.html', 'https://linklpse.blogspot.com/2017/03/lpse-kabupaten-mempawah.html', 'https://linklpse.blogspot.com/2017/03/lpse-kabupaten-sambas.html', 'https://linklpse.blogspot.com/2017/03/lpse-kabupaten-sanggau.html', 'https://linklpse.blogspot.com/2017/03/lpse-kabupaten-sekadau.html', 'https://linklpse.blogspot.com/2017/03/lpse-kabupaten-sintang.html', 'https://linklpse.blogspot.com/2017/03/lpse-kota-pontianak.html', 'https://linklpse.blogspot.com/2017/03/lpse-kota-singkawang.html', 'https://linklpse.blogspot.com/2017/02/lpse-provinsi-kalimantan-selatan.html', 'https://linklpse.blogspot.com/2017/02/lpse-kabupaten-balangan.html', 'https://linklpse.blogspot.com/2017/02/lpse-kabupaten-banjar.html', 'https://linklpse.blogspot.com/2017/02/lpse-kabupaten-barito-kuala.html', 'https://linklpse.blogspot.com/2017/02/lpse-kabupaten-hulu-sungai-selatan.html', 'https://linklpse.blogspot.com/2017/02/lpse-kabupaten-hulu-sungai-tengah.html', 'https://linklpse.blogspot.com/2017/02/lpse-kabupaten-hulu-sungai-utara.html', 'https://linklpse.blogspot.com/2017/02/lpse-kabupaten-kotabaru.html', 'https://linklpse.blogspot.com/2017/02/lpse-kabupaten-tabalong.html', 'https://linklpse.blogspot.com/2017/02/lpse-kabupaten-tanah-bumbu.html', 'https://linklpse.blogspot.com/2017/02/lpse-kabupaten-tanah-laut.html', 'https://linklpse.blogspot.com/2017/02/lpse-kabupaten-tapin.html', 'https://linklpse.blogspot.com/2017/02/lpse-kota-banjarmasin.html', 'https://linklpse.blogspot.com/2017/02/lpse-provinsi-kalimantan-tengah.html', 'https://linklpse.blogspot.com/2017/02/lpse-kabupaten-barito-selatan.html', 'https://linklpse.blogspot.com/2017/02/lpse-kabupaten-barito-timur.html', 'https://linklpse.blogspot.com/2017/02/lpse-kabupaten-barito-utara.html', 'https://linklpse.blogspot.com/2017/02/lpse-kabupaten-gunung-mas.html', 'https://linklpse.blogspot.com/2017/02/lpse-kabupaten-kapuas.html', 'https://linklpse.blogspot.com/2017/02/lpse-kabupaten-katingan.html', 'https://linklpse.blogspot.com/2017/02/lpse-kotawaringin-barat.html', 'https://linklpse.blogspot.com/2017/02/lpse-kabupaten-kotawaringin-timur.html', 'https://linklpse.blogspot.com/2017/02/lpse-kabupaten-lamandau.html', 'https://linklpse.blogspot.com/2017/02/lpse-kabupaten-murung-raya.html', 'https://linklpse.blogspot.com/2017/02/lpse-kabupaten-pulang-pisau.html', 'https://linklpse.blogspot.com/2017/02/lpse-kabupaten-sukamara.html', 'https://linklpse.blogspot.com/2017/01/lpse-kabupaten-seruyan.html', 'https://linklpse.blogspot.com/2017/01/lpse-kota-palangka-raya.html', 'https://linklpse.blogspot.com/2017/01/lpse-provinsi-kalimantan-timur.html', 'https://linklpse.blogspot.com/2017/01/lpse-kabupaten-kutai-barat.html', 'https://linklpse.blogspot.com/2017/01/lpse-kabupaten-kutai-kartanegara.html', 'https://linklpse.blogspot.com/2017/01/lpse-kabupaten-kutai-timur.html', 'https://linklpse.blogspot.com/2017/01/lpse-kabupaten-mahakam-ulu.html', 'https://linklpse.blogspot.com/2020/03/lpse-kabupaten-paser.html', 'https://linklpse.blogspot.com/2017/01/lpse-kabupaten-penajam-paser-utara.html', 'https://linklpse.blogspot.com/2017/01/lpse-kota-balikpapan.html', 'https://linklpse.blogspot.com/2017/01/lpse-kota-bontang.html', 'https://linklpse.blogspot.com/2017/01/lpse-kota-samarinda.html', 'https://linklpse.blogspot.com/2017/01/lpse-provinsi-kalimantan-utara.html', 'https://linklpse.blogspot.com/2017/01/lpse-kabupaten-bulungan.html', 'https://linklpse.blogspot.com/2017/01/lpse-kabupaten-malinau.html', 'https://linklpse.blogspot.com/2017/01/lpse-kabupaten-tana-tidung.html', 'https://linklpse.blogspot.com/2017/01/lpse-kota-tarakan.html', 'https://linklpse.blogspot.com/2017/01/lpse-provinsi-kepulauan-riau.html', 'https://linklpse.blogspot.com/2017/01/lpse-kabupaten-bintan.html', 'https://linklpse.blogspot.com/2017/01/lpse-kabupaten-karimun.html', 'https://linklpse.blogspot.com/2017/01/lpse-kabupaten-kepulauan-anambas.html', 'https://linklpse.blogspot.com/2017/01/lpse-kabupaten-lingga.html', 'https://linklpse.blogspot.com/2017/01/lpse-kabupaten-natuna.html', 'https://linklpse.blogspot.com/2017/01/lpse-kota-batam.html', 'https://linklpse.blogspot.com/2017/01/lpse-kota-tanjung-pinang.html', 'https://linklpse.blogspot.com/2016/02/lpse-provinsi-sulawesi-barat.html', 'https://linklpse.blogspot.com/2016/02/lpse-kabupaten-majene.html', 'https://linklpse.blogspot.com/2016/02/lpse-kabupaten-mamuju.html', 'https://linklpse.blogspot.com/2016/02/lpse-kabupaten-mamuju-utara.html', 'https://linklpse.blogspot.com/2016/02/lpse-kabupaten-polman.html', 'https://linklpse.blogspot.com/2016/02/lpse-kabupaten-mamasa.html', 'https://linklpse.blogspot.com/2016/02/blog-post_6.html', 'https://linklpse.blogspot.com/2016/02/lpse-kabupaten-bantaeng.html', 'https://linklpse.blogspot.com/2016/02/blog-post_10.html', 'https://linklpse.blogspot.com/2016/02/blog-post_40.html', 'https://linklpse.blogspot.com/2016/02/lpse-kabupaten-bulukumba.html', 'https://linklpse.blogspot.com/2016/02/lpse-kabupaten-enrekang.html', 'https://linklpse.blogspot.com/2016/02/lpse-kabupaten-gowa.html', 'https://linklpse.blogspot.com/2016/02/lpse-kabupaten-jeneponto.html', 'https://linklpse.blogspot.com/2016/02/lpse-kabupaten-kepulauan-selayar.html', 'https://linklpse.blogspot.com/2016/02/lpse-kabupaten-luwu.html', 'https://linklpse.blogspot.com/2016/02/blog-post_62.html', 'https://linklpse.blogspot.com/2016/02/lpse-kabupaten-luwu-utara.html', 'https://linklpse.blogspot.com/2016/02/lpse-kabupaten-maros.html', 'https://linklpse.blogspot.com/2016/02/lpse-kabupaten-pangkajene-kepulauan.html', 'https://linklpse.blogspot.com/2016/02/lpse-kabupaten-pinrang.html', 'https://linklpse.blogspot.com/2016/02/lpse-kabupaten-sidenreng-rappang.html', 'https://linklpse.blogspot.com/2016/02/lpse-kabupaten-sinjai.html', 'https://linklpse.blogspot.com/2016/02/lpse-kabupaten-soppeng.html', 'https://linklpse.blogspot.com/2016/02/lpse-kabupaten-takalar.html', 'https://linklpse.blogspot.com/2016/02/lpse-kabupaten-tana-toraja.html', 'https://linklpse.blogspot.com/2016/02/lpse-kabupaten-toraja-utara.html', 'https://linklpse.blogspot.com/2016/02/lpse-kabupaten-wajo.html', 'https://linklpse.blogspot.com/2016/02/lpse-kota-makassar.html', 'https://linklpse.blogspot.com/2016/02/lpse-kota-palopo.html', 'https://linklpse.blogspot.com/2016/02/lpse-kota-parepare.html', 'https://linklpse.blogspot.com/2016/02/lpse-provinsi-sulawesi-tengah.html', 'https://linklpse.blogspot.com/2016/02/llpse-kabupaten-banggai.html', 'https://linklpse.blogspot.com/2016/02/lpse-kabupaten-buol.html', 'https://linklpse.blogspot.com/2016/02/lpse-kabupaten-donggala.html', 'https://linklpse.blogspot.com/2016/02/lpse-kabupaten-morowali.html', 'https://linklpse.blogspot.com/2016/02/lpse-kabupaten-morowali-utara.html', 'https://linklpse.blogspot.com/2016/02/lpse-kabupaten-parigi-moutong.html', 'https://linklpse.blogspot.com/2016/02/lpse-kabupaten-poso.html', 'https://linklpse.blogspot.com/2016/02/lpse-kabupaten-tojo-una-una.html', 'https://linklpse.blogspot.com/2016/02/lpse-kabupaten-toli-toli.html', 'https://linklpse.blogspot.com/2016/02/lpse-kabupaten-sigi.html', 'https://linklpse.blogspot.com/2016/02/lpse-kota-palu.html', 'https://linklpse.blogspot.com/2016/01/lpse-provinsi-sulawesi-tenggara.html', 'https://linklpse.blogspot.com/2016/02/lpse-kabupaten-bombana.html', 'https://linklpse.blogspot.com/2016/02/lpse-kabupaten-buton.html', 'https://linklpse.blogspot.com/2016/02/lpse-kabupaten-buton-selatan.html', 'https://linklpse.blogspot.com/2016/02/lpse-kabupaten-buton-utara.html', 'https://linklpse.blogspot.com/2016/02/lpse-kabupaten-kolaka.html', 'https://linklpse.blogspot.com/2016/02/kabupaten-konawe-selatan.html', 'https://linklpse.blogspot.com/2016/02/lpse-kabupaten-konawe-utara.html', 'https://linklpse.blogspot.com/2016/02/lpse-kabupaten-wakatobi.html', 'https://linklpse.blogspot.com/2016/01/lpse-kota-baubau.html']

function getUrl(index) {
    nightmare
        .goto(pages[index])
        // .wait("#Blog1 > div.entry.box.isotope-item > div.post-body > div:nth-child(2) > a")
        .evaluate(() => {
            let possibilities = [
                document.querySelector(`#Blog1 > div.entry.box.isotope-item > div.post-body > div:nth-child(1) > a[target="_blank"]`),
                document.querySelector(`#Blog1 > div.entry.box.isotope-item > div.post-body > div:nth-child(2) > a[target="_blank"]`),
                document.querySelector(`#Blog1 > div.entry.box.isotope-item > div.post-body > div:nth-child(3) > a[target="_blank"]`),
                document.querySelector(`#Blog1 > div.entry.box.isotope-item > div.post-body > a[target="_blank"]`)
            ]
            if (possibilities[0]) return possibilities[0].getAttribute('href')
            else if (possibilities[1]) return possibilities[1].getAttribute('href')
            else if (possibilities[2]) return possibilities[2].getAttribute('href')
            else if (possibilities[3]) return possibilities[3].getAttribute('href')
        })
        // .end()
        .then(console.log)
        .then(() => {
            index++
            getUrl(index)
        })
        .catch(error => {
            console.error('Search failed:', error)
        })
}

getUrl(330)