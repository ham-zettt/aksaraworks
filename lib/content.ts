// Single source of truth for all Indonesian copy and contact details.
// Everything marked TODO(PLACEHOLDER) must be replaced before going live.

export type BranchKey = "dev" | "design" | "tulis" | "data";

export type SocialKey = "instagram" | "twitter";

export type NavItem = { label: string; href: string };

export const site = {
	name: "AKSARA",
	url: "https://aksaraworks.vercel.app", // TODO(PLACEHOLDER): production domain
	tagline: "Jasa layanan digital dari Pamekasan, Jawa Timur.",
	description:
		"AKSARA melayani pembuatan website, logo & branding, penulisan, dan pengolahan data. Berbasis di Pamekasan, Jawa Timur — melayani klien secara remote.",
	whatsapp: {
		display: "+62 812-0000-0000", // TODO(PLACEHOLDER): real number
		number: "6281200000000", // TODO(PLACEHOLDER): digits only, no plus
	},
	email: "temp@aksara.id", // TODO(PLACEHOLDER): real inbox
	location: "Pamekasan, Jawa Timur",
	locationNote: "Remote",
	responseTime: "24 jam",
	availability: "Terbuka untuk proyek",
} as const;

export const socials: { key: SocialKey; label: string; href: string }[] = [
	// TODO(PLACEHOLDER): replace every social URL
	{
		key: "instagram",
		label: "INSTAGRAM aksara",
		href: "https://instagram.com/aksara",
	},
	{
		key: "twitter",
		label: "TWITTER aksara",
		href: "https://twitter.com/aksara",
	},
];

export type Heading = {
	number: string;
	label: string;
	title: string;
	accent: string;
	after?: string;
	lead: string;
	cta?: { label: string; href: string };
};

export type HeroContent = {
	eyebrow: string;
	headline: { first: string; second: string };
	subheadline: string;
	claims: string[];
	primary: { label: string; href: string };
	secondary: { label: string; href: string };
};

export type AboutContent = {
	heading: Heading;
	paragraphs: [string, string];
	values: { title: string; text: string }[];
	panelLabel: string;
	panelListLabel: string;
	panelList: string[];
};

export type ServiceIcon =
	| "landing"
	| "store"
	| "profile"
	| "shop"
	| "app"
	| "care"
	| "logo"
	| "palette"
	| "type"
	| "print"
	| "social"
	| "book"
	| "essay"
	| "journal"
	| "thesis"
	| "quote"
	| "report"
	| "edit"
	| "clean"
	| "formula"
	| "table"
	| "chart"
	| "dashboard"
	| "convert"
	| "web"
	| "data";

export type Service = { icon: ServiceIcon; title: string; description: string };

export type ProcessStep = {
	duration: string;
	title: string;
	description: string;
};

export type Work = {
	name: string;
	category: string;
	summary: string;
	image?: string; // 16:9 image in /public/works; omitted = typographic specimen tile
};

export type Package = {
	id: string;
	name: string;
	audience: string;
	price: string;
	delivery: string;
	features: string[];
	featured?: boolean;
};

export type FaqItem = { question: string; answer: string };

export type ContactContent = {
	number: string;
	heading: { first: string; second: string };
	support: string;
	menu: string;
};

export type Division = {
	key: BranchKey;
	name: string;
	title: string;
	path: string;
	description: string;
	icon: ServiceIcon;
};

export type Branch = {
	key: BranchKey;
	path: string;
	name: string;
	title: string;
	role: string;
	tagline: string;
	description: string;
	keywords: string[];
	nav: NavItem[];
	hero: HeroContent;
	about: AboutContent;
	servicesHeading: Heading;
	services: Service[];
	process: { heading: Heading; steps: ProcessStep[]; note: string };
	works: { heading: Heading; items: Work[] };
	pricing: {
		heading: Heading;
		items: Package[];
		note: { custom: string; disclaimer: string };
	};
	faq: { heading: Heading; items: FaqItem[] };
	contact: ContactContent;
	waMessage: string;
};

// Custom event used by pricing CTAs to preselect a package in the contact form.
export const PACKAGE_EVENT = "aksara:package";

const branchNav: NavItem[] = [
	{ label: "Tentang", href: "#tentang" },
	{ label: "Layanan", href: "#layanan" },
	{ label: "Proses", href: "#proses" },
	{ label: "Karya", href: "#karya" },
	{ label: "Harga", href: "#harga" },
	{ label: "Kontak", href: "#kontak" },
];

export const homeNav: NavItem[] = [
	{ label: "Tentang", href: "#tentang" },
	{ label: "Layanan", href: "#layanan" },
	{ label: "Kontak", href: "#kontak" },
];

export const divisions: Division[] = [
	{
		key: "dev",
		name: "AKSARA.DEV",
		title: "Web Development",
		path: "/dev",
		description:
			"Landing page, website UMKM, company profile, sampai sistem bisnis custom.",
		icon: "web",
	},
	{
		key: "design",
		name: "AKSARA.DESIGN",
		title: "Logo & Branding",
		path: "/design",
		description:
			"Logo, palet warna, tipografi, dan panduan visual yang konsisten.",
		icon: "logo",
	},
	{
		key: "tulis",
		name: "AKSARA.TULIS",
		title: "Penulisan",
		path: "/tulis",
		description:
			"Makalah, jurnal, skripsi, parafrase, dan penyuntingan naskah.",
		icon: "essay",
	},
	{
		key: "data",
		name: "AKSARA.DATA",
		title: "Pengolahan Data",
		path: "/data",
		description:
			"Rekap, rumus, pivot, grafik, dan dashboard sederhana di Excel.",
		icon: "data",
	},
];

export const home = {
	key: "home" as const,
	name: site.name,
	role: "Studio Layanan Digital",
	tagline: "Empat keahlian, satu tempat.",
	description: site.description,
	keywords: [
		"jasa pembuatan website",
		"jasa desain logo",
		"jasa penulisan makalah",
		"jasa olah data excel",
		"studio digital Pamekasan",
		"jasa digital Jawa Timur",
	],
	nav: homeNav,
	hero: {
		eyebrow: "Studio layanan digital · Pamekasan, Jawa Timur",
		headline: { first: "Satu studio,", second: "empat keahlian." },
		subheadline:
			"AKSARA mengerjakan website, logo & branding, penulisan, dan pengolahan data — dari satu tempat, dengan lingkup dan tenggat yang jelas.",
		claims: [
			"Konsultasi awal gratis",
			"Dikerjakan remote",
			"Revisi sesuai kesepakatan",
		],
		primary: { label: "Konsultasi", href: "#kontak" },
		secondary: { label: "Lihat Layanan", href: "#layanan" },
	} satisfies HeroContent,
	about: {
		heading: {
			number: "01",
			label: "Tentang",
			title: "Anda fokus pada usaha,",
			accent: "kami urus sisanya.",
			lead: "AKSARA adalah studio layanan digital yang berbasis di Pamekasan, Jawa Timur. Kami menangani empat pekerjaan yang sering dibutuhkan usaha kecil, mahasiswa, dan tim.",
			cta: { label: "Kenalan dulu", href: "#kontak" },
		},
		paragraphs: [
			"Empat divisi, satu standar kerja: website, identitas visual, penulisan, dan pengolahan data. Anda tidak perlu berpindah vendor untuk hal-hal yang saling berkaitan.",
			"Semua dikerjakan remote, tetapi bukan lepas tangan. Anda tahu apa yang sedang dikerjakan, apa yang perlu disiapkan, dan kapan hasilnya bisa dipakai — tanpa biaya yang muncul tiba-tiba.",
		],
		values: [
			{
				title: "Jelas",
				text: "Lingkup kerja, harga, dan jadwal disepakati sebelum mulai.",
			},
			{
				title: "Tepat waktu",
				text: "Tenggat dijaga, progres dilaporkan di setiap tahap.",
			},
			{
				title: "Transparan",
				text: "Tidak ada biaya tambahan yang muncul di tengah jalan.",
			},
		],
		panelLabel: "AKSARA / Rekap",
		panelListLabel: "Empat divisi",
		panelList: divisions.map((division) => division.title),
	} satisfies AboutContent,
	services: {
		heading: {
			number: "02",
			label: "Layanan",
			title: "Empat divisi,",
			accent: "satu standar kerja.",
			lead: "Pilih divisi yang paling dekat dengan kebutuhan Anda. Setiap divisi punya halaman, alur kerja, dan penawaran sendiri.",
		} satisfies Heading,
	},
	contact: {
		number: "03",
		heading: { first: "Ceritakan", second: "kebutuhan Anda." },
		support:
			"Pilih layanan yang paling dekat dengan kebutuhan Anda, atau tanyakan langsung. Kami membalas maksimal 24 jam dengan langkah berikutnya.",
		menu: "Studio layanan digital dari Pamekasan, Jawa Timur. Website, branding, penulisan, dan data.",
	} satisfies ContactContent,
	waMessage:
		"Halo AKSARA, saya ingin berkonsultasi tentang layanan yang tersedia.",
};

const dev: Branch = {
	key: "dev",
	path: "/dev",
	name: "AKSARA.DEV",
	title: "Web Development",
	role: "Web Development",
	tagline: "Pembuatan website untuk usaha Indonesia.",
	description:
		"AKSARA.DEV merancang dan membangun website cepat, rapi, dan siap mendatangkan pelanggan — dari landing page hingga sistem bisnis custom.",
	keywords: [
		"jasa pembuatan website",
		"website UMKM",
		"jasa landing page",
		"toko online",
		"web development Indonesia",
	],
	nav: branchNav,
	hero: {
		eyebrow: "AKSARA.DEV · Web Development",
		headline: { first: "Berikan Usahamu", second: "Sebuah Website." },
		subheadline:
			"Kami merancang dan membangun website yang cepat, rapi, dan siap mendatangkan pelanggan — dari landing page hingga sistem bisnis Anda.",
		claims: [
			"Selesai dalam hitungan hari",
			"Desain eksklusif, bukan template",
			"Gratis konsultasi awal",
		],
		primary: { label: "Mulai Proyek", href: "#kontak" },
		secondary: { label: "Lihat Karya", href: "#karya" },
	},
	about: {
		heading: {
			number: "01",
			label: "Tentang",
			title: "Kami membangun",
			accent: "fondasi digital",
			after: "usaha Anda.",
			lead: "Kami bukan sekadar pembuat website. Kami membangun fondasi digital usaha Anda.",
			cta: { label: "Kenalan dulu", href: "#kontak" },
		},
		paragraphs: [
			"AKSARA.DEV bekerja bersama pemilik usaha di Indonesia. Kami menerjemahkan tujuan bisnis menjadi website yang jelas, cepat, dan mudah digunakan — bukan sekadar tampilan yang bagus.",
			"Setiap proyek dimulai dari percakapan. Kami mendengarkan, menyusun rencana, lalu membangun dengan teknologi yang tepat. Tanpa jargon berlebihan, tanpa biaya tersembunyi.",
		],
		values: [
			{
				title: "Jelas",
				text: "Lingkup kerja, harga, dan jadwal disepakati sebelum mulai.",
			},
			{
				title: "Tepat waktu",
				text: "Tenggat dijaga, progres dilaporkan di setiap tahap.",
			},
			{
				title: "Transparan",
				text: "Tidak ada biaya tambahan yang muncul di tengah jalan.",
			},
		],
		panelLabel: "AKSARA.DEV / Rekap",
		panelListLabel: "Yang kami pakai",
		panelList: [
			"Next.js",
			"React",
			"TypeScript",
			"Tailwind CSS",
			"Node.js",
			"PostgreSQL",
		],
	},
	servicesHeading: {
		number: "02",
		label: "Layanan",
		title: "Yang kami bangun untuk",
		accent: "usaha Anda.",
		lead: "Mulai dari satu halaman promosi sampai sistem internal. Semua dikerjakan dengan standar yang sama: cepat, rapi, dan bisa Anda kelola.",
		cta: { label: "Konsultasi", href: "#kontak" },
	},
	services: [
		{
			icon: "landing",
			title: "Landing Page",
			description:
				"Satu halaman fokus konversi untuk promosi, peluncuran produk, atau kampanye.",
		},
		{
			icon: "store",
			title: "Website UMKM",
			description:
				"Tampil profesional, katalog produk, dan terhubung langsung ke WhatsApp.",
		},
		{
			icon: "profile",
			title: "Company Profile",
			description:
				"Website perusahaan yang kredibel, informatif, dan mudah diperbarui.",
		},
		{
			icon: "shop",
			title: "Toko Online",
			description:
				"Katalog, keranjang, dan integrasi pembayaran untuk berjualan tanpa marketplace.",
		},
		{
			icon: "app",
			title: "Web App & Sistem Custom",
			description:
				"Dashboard, reservasi, dan sistem internal yang mengikuti alur kerja Anda.",
		},
		{
			icon: "care",
			title: "Redesign & Maintenance",
			description:
				"Perbaikan tampilan, performa, dan dukungan berkala untuk website yang sudah berjalan.",
		},
	],
	process: {
		heading: {
			number: "03",
			label: "Proses",
			title: "Lima langkah,",
			accent: "tanpa jalan buntu.",
			lead: "Anda tahu apa yang sedang dikerjakan, apa yang perlu disiapkan, dan kapan hasilnya bisa dilihat.",
			cta: { label: "Mulai dari sini", href: "#kontak" },
		},
		steps: [
			{
				duration: "1–2 hari",
				title: "Konsultasi & Order",
				description:
					"Kita berdiskusi soal kebutuhan, tujuan, dan anggaran. Setelah cocok, kami kirim penawaran dan Anda membayar DP untuk memulai.",
			},
			{
				duration: "2–3 hari",
				title: "Perencanaan",
				description:
					"Kami menyusun brief, sitemap, struktur konten, dan jadwal pengerjaan yang bisa Anda pantau.",
			},
			{
				duration: "3–5 hari",
				title: "Preview Desain UI",
				description:
					"Mockup visual dibuat untuk disetujui sebelum masuk tahap coding. Revisi desain dilakukan di sini.",
			},
			{
				duration: "5–10 hari",
				title: "Pengembangan Website",
				description:
					"Coding, tampilan responsif, optimasi kecepatan, dan SEO dasar. Anda mendapat tautan pratinjau untuk dicoba.",
			},
			{
				duration: "2–3 hari",
				title: "Review & Finalisasi",
				description:
					"Kami presentasikan hasilnya, menampung revisi sesuai kesepakatan, lalu menyiapkan versi final.",
			},
		],
		note: "Progres dilaporkan di setiap tahap",
	},
	works: {
		heading: {
			number: "04",
			label: "Karya",
			title: "Proyek pilihan,",
			accent: "bukan pameran template.",
			lead: "Contoh proyek yang menunjukkan cara kami bekerja: satu tujuan, satu alur, satu tampilan yang tidak perlu dijelaskan dua kali.",
			cta: { label: "Punya ide serupa?", href: "#kontak" },
		},
		// TODO(PLACEHOLDER): fictional concept projects — replace names and screenshots.
		items: [
			{
				name: "Kopi Senja",
				category: "Website UMKM",
				summary:
					"Menu digital dan cerita kedai untuk pelanggan yang datang dari Instagram.",
				image: "/works/kopi-senja.jpg",
			},
			{
				name: "Klinik Prima",
				category: "Landing Page",
				summary:
					"Halaman pendaftaran yang membuat pasien baru langsung tahu langkah berikutnya.",
				image: "/works/klinik-prima.jpg",
			},
			{
				name: "Rasa Tenun",
				category: "Toko Online",
				summary:
					"Katalog tenun dengan cerita per daerah dan alur checkout yang singkat.",
				image: "/works/rasa-tenun.jpg",
			},
			{
				name: "Bangun Karya",
				category: "Company Profile",
				summary:
					"Profil kontraktor dengan portofolio proyek dan halaman konsultasi.",
				image: "/works/bangun-karya.jpg",
			},
		],
	},
	pricing: {
		heading: {
			number: "05",
			label: "Harga",
			title: "Harga jelas,",
			accent: "tanpa kejutan.",
			lead: "Pilih titik mulai yang paling dekat dengan kebutuhan Anda. Lingkup kerja dan penawaran final kami kirim sebelum proyek dimulai.",
			cta: { label: "Minta penawaran", href: "#kontak" },
		},
		// TODO(PLACEHOLDER): prices and delivery estimates are examples, not final quotes.
		items: [
			{
				id: "starter",
				name: "Starter",
				audience: "Untuk usaha yang baru mulai tampil secara online.",
				price: "Rp 1.500.000",
				delivery: "5–7 hari kerja",
				features: [
					"Landing page 1 halaman",
					"Desain responsif (mobile & desktop)",
					"Form kontak & tombol WhatsApp",
					"Setup domain dan hosting",
					"SEO dasar",
					"1x revisi",
				],
			},
			{
				id: "bisnis",
				name: "Bisnis",
				audience:
					"Untuk bisnis yang siap menjangkau lebih banyak pelanggan.",
				price: "Rp 3.500.000",
				delivery: "10–14 hari kerja",
				featured: true,
				features: [
					"Hingga 5 halaman",
					"Desain custom, bukan template",
					"Copywriting dibantu tim kami",
					"Integrasi WhatsApp & Google Maps",
					"SEO dasar & optimasi kecepatan",
					"3x revisi",
					"Dukungan 1 bulan",
				],
			},
			{
				id: "premium",
				name: "Premium",
				audience:
					"Untuk toko online, CMS, atau sistem yang lebih kompleks.",
				price: "Rp 7.500.000",
				delivery: "3–6 minggu",
				features: [
					"Hingga 10+ halaman / fitur custom",
					"CMS atau dashboard admin",
					"Toko online & integrasi pembayaran",
					"SEO lanjutan + analytics",
					"Prioritas pengerjaan",
					"Dukungan 3 bulan",
				],
			},
		],
		note: {
			custom: "Butuh kebutuhan khusus? Hubungi kami untuk penawaran custom.",
			disclaimer:
				"Harga di atas adalah estimasi awal. Penawaran final menyesuaikan lingkup, fitur, dan tingkat kerumitan proyek.",
		},
	},
	faq: {
		heading: {
			number: "06",
			label: "FAQ",
			title: "Hal yang",
			accent: "sering ditanyakan.",
			lead: "Belum menemukan jawabannya? Kirim pertanyaan Anda — kami balas tanpa berbelit-belit.",
			cta: { label: "Tanya langsung", href: "#kontak" },
		},
		items: [
			{
				question: "Berapa lama pengerjaan sebuah website?",
				answer: "Landing page biasanya 5–7 hari kerja, website bisnis 10–14 hari, dan proyek custom 3–6 minggu. Estimasi pasti kami berikan setelah lingkup pekerjaan disepakati.",
			},
			{
				question: "Apakah termasuk domain dan hosting?",
				answer: "Paket Starter sudah termasuk setup domain dan hosting tahun pertama. Untuk paket lain, biaya domain dan hosting dihitung terpisah agar Anda memegang kendali penuh atas asetnya.",
			},
			{
				question: "Bagaimana sistem pembayarannya?",
				answer: "Pembayaran dibagi dua: 50% DP saat proyek dimulai, dan 50% saat website siap diluncurkan. Untuk proyek besar, kami bisa membagi pembayaran ke beberapa tahap.",
			},
			{
				question: "Berapa kali saya bisa revisi?",
				answer: "Starter 1x, Bisnis 3x, dan Premium 5x revisi pada tahap desain dan pengembangan. Revisi tambahan di luar kesepakatan dihitung per jam dengan estimasi yang disetujui lebih dulu.",
			},
			{
				question: "Apakah website bisa saya edit sendiri?",
				answer: "Bisa. Kami menyertakan panduan penggunaan, dan untuk paket Bisnis ke atas kami menyediakan CMS sederhana agar Anda bisa mengganti teks, gambar, dan produk tanpa bantuan developer.",
			},
			{
				question: "Bagaimana setelah website selesai?",
				answer: "Serah terima mencakup akses domain, hosting, dan kode sumber. Dukungan setelah peluncuran sesuai paket; setelah itu tersedia paket maintenance bulanan jika dibutuhkan.",
			},
		],
	},
	contact: {
		number: "07",
		heading: { first: "Mari Bangun", second: "Website Anda." },
		support:
			"Kami siap menerima proyek baru. Ceritakan rencana Anda — kami akan merespons dengan langkah berikutnya.",
		menu: "Pembuatan website untuk usaha Indonesia. Jelas, rapi, dan tepat waktu.",
	},
	waMessage:
		"Halo AKSARA.DEV, saya ingin berdiskusi tentang pembuatan website untuk usaha saya.",
};

const design: Branch = {
	key: "design",
	path: "/design",
	name: "AKSARA.DESIGN",
	title: "Logo & Branding",
	role: "Logo & Branding",
	tagline: "Identitas visual yang konsisten dan mudah diingat.",
	description:
		"AKSARA.DESIGN merancang logo, palet warna, tipografi, dan panduan visual untuk usaha yang ingin tampil konsisten di mana saja.",
	keywords: [
		"jasa desain logo",
		"jasa branding",
		"brand identity",
		"logo UMKM",
		"desain kemasan",
	],
	nav: branchNav,
	hero: {
		eyebrow: "AKSARA.DESIGN · Logo & Branding",
		headline: { first: "Identitas yang", second: "Langsung Dikenali." },
		subheadline:
			"Logo, warna, tipografi, dan panduan visual untuk usaha yang ingin tampil konsisten di kemasan, media sosial, dan website.",
		claims: [
			"Mulai dari riset, bukan tebakan",
			"File sumber diserahkan",
			"Tiga arah visual",
		],
		primary: { label: "Mulai Proyek", href: "#kontak" },
		secondary: { label: "Lihat Karya", href: "#karya" },
	},
	about: {
		heading: {
			number: "01",
			label: "Tentang",
			title: "Identitas yang",
			accent: "bekerja di mana saja.",
			lead: "Logo yang bagus bukan sekadar gambar yang enak dilihat. Ia harus tetap terbaca di ukuran kecil dan konsisten di mana pun dipakai.",
			cta: { label: "Kenalan dulu", href: "#kontak" },
		},
		paragraphs: [
			"Kami mulai dari memahami usaha Anda: siapa pelanggannya, apa yang ingin disampaikan, dan di mana identitas itu akan dipakai. Baru setelah itu kami menggambar.",
			"Setiap arah visual disertai alasan. Anda tidak memilih karena suka atau tidak suka saja, tetapi karena tahu mana yang paling cocok untuk usaha Anda.",
		],
		values: [
			{
				title: "Terbaca",
				text: "Diuji di ukuran kecil, latar terang, dan latar gelap.",
			},
			{
				title: "Konsisten",
				text: "Satu sistem warna dan huruf untuk semua media.",
			},
			{
				title: "Bisa dipakai",
				text: "File sumber dan panduan diserahkan, bukan dikunci.",
			},
		],
		panelLabel: "AKSARA.DESIGN / Rekap",
		panelListLabel: "Yang kami serahkan",
		panelList: [
			"Logo SVG",
			"Varian warna",
			"Palet & tipografi",
			"Brand guideline",
			"Aset sosial",
			"File cetak",
		],
	},
	servicesHeading: {
		number: "02",
		label: "Layanan",
		title: "Yang kami",
		accent: "rancang.",
		lead: "Dari logo utama sampai panduan pemakaian. Semua aset diserahkan lengkap, bukan dikunci di tangan kami.",
		cta: { label: "Konsultasi", href: "#kontak" },
	},
	services: [
		{
			icon: "logo",
			title: "Logo & Wordmark",
			description:
				"Logo utama, varian horizontal, dan versi ikon untuk foto profil serta favicon.",
		},
		{
			icon: "palette",
			title: "Palet Warna",
			description:
				"Warna primer dan sekunder yang diuji kontrasnya untuk teks dan tombol.",
		},
		{
			icon: "type",
			title: "Tipografi",
			description:
				"Pasangan huruf untuk judul dan isi, lengkap dengan aturan ukuran.",
		},
		{
			icon: "print",
			title: "Kemasan & Label",
			description:
				"Desain label, stiker, dan kemasan yang siap dikirim ke percetakan.",
		},
		{
			icon: "social",
			title: "Kit Media Sosial",
			description:
				"Template unggahan, sorotan cerita, dan avatar yang seragam.",
		},
		{
			icon: "book",
			title: "Brand Guideline",
			description:
				"Satu dokumen ringkas: logo, warna, huruf, dan contoh pemakaian.",
		},
	],
	process: {
		heading: {
			number: "03",
			label: "Proses",
			title: "Lima langkah,",
			accent: "dari brief ke identitas.",
			lead: "Setiap arah visual punya alasan. Anda melihat prosesnya, bukan hanya hasil akhirnya.",
			cta: { label: "Mulai dari sini", href: "#kontak" },
		},
		steps: [
			{
				duration: "1–2 hari",
				title: "Brief & Riset",
				description:
					"Kami memetakan usaha, pelanggan, pesaing, dan media tempat identitas akan dipakai.",
			},
			{
				duration: "2–3 hari",
				title: "Moodboard",
				description:
					"Arah warna, bentuk, dan tone visual disusun untuk disepakati sebelum menggambar.",
			},
			{
				duration: "3–5 hari",
				title: "Eksplorasi Logo",
				description:
					"Tiga arah visual dibuat dengan alasan masing-masing. Anda memilih satu untuk dikembangkan.",
			},
			{
				duration: "2–4 hari",
				title: "Finalisasi",
				description:
					"Logo dirapikan di ukuran kecil, varian warna, dan latar terang maupun gelap.",
			},
			{
				duration: "1–2 hari",
				title: "Serah Terima",
				description:
					"File sumber, varian, dan panduan pemakaian diserahkan lengkap beserta penjelasannya.",
			},
		],
		note: "Setiap arah visual disertai alasan, bukan hanya gambar",
	},
	works: {
		heading: {
			number: "04",
			label: "Karya",
			title: "Identitas yang",
			accent: "sudah dipakai.",
			lead: "Contoh arah visual yang kami kerjakan: satu tanda, satu sistem warna, dan aturan yang membuatnya tetap konsisten.",
			cta: { label: "Punya ide serupa?", href: "#kontak" },
		},
		// TODO(PLACEHOLDER): fictional concept projects — replace with real brand work.
		items: [
			{
				name: "Kopi Senja",
				category: "Identitas Kedai",
				summary:
					"Wordmark, palet hangat, dan label kemasan untuk kedai kopi lokal.",
			},
			{
				name: "Rasa Tenun",
				category: "Brand UMKM",
				summary:
					"Logo, kartu nama, dan template media sosial untuk penenun.",
			},
			{
				name: "Klinik Prima",
				category: "Identitas Layanan",
				summary:
					"Sistem visual yang tenang dan mudah dipercaya pasien baru.",
			},
			{
				name: "Bangun Karya",
				category: "Rebranding",
				summary:
					"Tanda yang tetap tegas di helm, papan proyek, dan seragam.",
			},
		],
	},
	pricing: {
		heading: {
			number: "05",
			label: "Harga",
			title: "Harga jelas,",
			accent: "tanpa kejutan.",
			lead: "Pilih titik mulai yang paling dekat dengan kebutuhan Anda. Lingkup kerja dan penawaran final kami kirim sebelum proyek dimulai.",
			cta: { label: "Minta penawaran", href: "#kontak" },
		},
		// TODO(PLACEHOLDER): prices and delivery estimates are examples, not final quotes.
		items: [
			{
				id: "basic",
				name: "Basic",
				audience: "Untuk usaha yang butuh logo utama dan variannya.",
				price: "Rp 750.000",
				delivery: "5–7 hari kerja",
				features: [
					"Logo utama + varian horizontal",
					"2 arah visual",
					"File PNG, JPG, dan SVG",
					"Palet warna dasar",
					"1x revisi",
				],
			},
			{
				id: "profesional",
				name: "Profesional",
				audience:
					"Untuk usaha yang ingin tampil seragam di semua kanal.",
				price: "Rp 1.800.000",
				delivery: "10–14 hari kerja",
				featured: true,
				features: [
					"Logo + 3 arah visual",
					"Brand guideline ringkas",
					"Kartu nama & kop surat",
					"Template media sosial",
					"Varian warna & monokrom",
					"2x revisi",
				],
			},
			{
				id: "lengkap",
				name: "Lengkap",
				audience: "Untuk brand yang siap masuk kemasan dan cetak.",
				price: "Rp 3.500.000",
				delivery: "3–4 minggu",
				features: [
					"Semua di paket Profesional",
					"Desain kemasan & label",
					"Stationery lengkap",
					"Aset sosial siap pakai",
					"Panduan cetak & warna",
					"3x revisi",
				],
			},
		],
		note: {
			custom: "Butuh identitas untuk beberapa merek? Hubungi kami untuk penawaran custom.",
			disclaimer:
				"Harga di atas adalah estimasi awal. Penawaran final menyesuaikan jumlah aset dan tingkat kerumitan.",
		},
	},
	faq: {
		heading: {
			number: "06",
			label: "FAQ",
			title: "Hal yang",
			accent: "sering ditanyakan.",
			lead: "Belum menemukan jawabannya? Kirim pertanyaan Anda — kami balas tanpa berbelit-belit.",
			cta: { label: "Tanya langsung", href: "#kontak" },
		},
		items: [
			{
				question: "Apakah saya mendapat file sumber logo?",
				answer: "Ya. Setelah pelunasan, Anda menerima file SVG, PNG, JPG, dan PDF siap cetak beserta varian warna dan monokrom.",
			},
			{
				question: "Berapa arah visual yang saya terima?",
				answer: "Paket Basic 2 arah, Profesional dan Lengkap 3 arah. Satu arah dipilih untuk difinalisasi; arah lain bisa dibeli terpisah jika ingin dipakai.",
			},
			{
				question: "Apakah termasuk desain kemasan?",
				answer: "Desain kemasan dan label termasuk di paket Lengkap. Untuk paket lain bisa ditambahkan sebagai pekerjaan terpisah.",
			},
			{
				question: "Bisakah logo lama saya diperbarui saja?",
				answer: "Bisa. Rebranding dimulai dari audit logo lama, lalu kami pertahankan elemen yang masih dikenali pelanggan dan perbaiki sisanya.",
			},
			{
				question: "Apakah hak pakai logo sepenuhnya milik saya?",
				answer: "Ya, setelah pelunasan seluruh hak pakai atas desain final menjadi milik Anda. Kami hanya meminta izin untuk menampilkannya di portofolio.",
			},
		],
	},
	contact: {
		number: "07",
		heading: { first: "Mari Bangun", second: "Identitas Anda." },
		support:
			"Ceritakan usaha Anda dan di mana identitas akan dipakai. Kami akan mengusulkan arah dan lingkup kerja yang paling masuk akal.",
		menu: "Logo dan identitas visual yang konsisten untuk usaha Indonesia.",
	},
	waMessage:
		"Halo AKSARA.DESIGN, saya ingin berdiskusi tentang pembuatan logo dan branding untuk usaha saya.",
};

const tulis: Branch = {
	key: "tulis",
	path: "/tulis",
	name: "AKSARA.TULIS",
	title: "Penulisan",
	role: "Penulisan",
	tagline: "Bantuan penulisan akademik dan konten.",
	description:
		"AKSARA.TULIS membantu penyusunan, penyuntingan, dan parafrase makalah, jurnal, skripsi, dan tugas dengan struktur yang jelas.",
	keywords: [
		"jasa penulisan makalah",
		"jasa parafrase",
		"jasa edit skripsi",
		"penulisan jurnal",
		"jasa proofreading",
	],
	nav: branchNav,
	hero: {
		eyebrow: "AKSARA.TULIS · Penulisan",
		headline: { first: "Tulisan rapi,", second: "Siap Dibaca." },
		subheadline:
			"Bantuan penyusunan, penyuntingan, dan parafrase untuk makalah, jurnal, skripsi, dan tugas — dengan struktur yang jelas dan bahasa yang enak dibaca.",
		claims: [
			"Struktur & daftar pustaka",
			"Parafrase tanpa mengubah makna",
			"Kerahasiaan dijaga",
		],
		primary: { label: "Mulai Proyek", href: "#kontak" },
		secondary: { label: "Lihat Contoh", href: "#karya" },
	},
	about: {
		heading: {
			number: "01",
			label: "Tentang",
			title: "Tulisan yang",
			accent: "enak dibaca,",
			after: "bukan sekadar selesai.",
			lead: "Menulis bukan hanya soal merangkai kalimat. Ada struktur, alur argumen, dan sumber yang harus dijaga.",
			cta: { label: "Kenalan dulu", href: "#kontak" },
		},
		paragraphs: [
			"Kami membantu di bagian struktur, bahasa, dan penyuntingan — bukan menggantikan pemikiran Anda. Naskah tetap milik dan tanggung jawab penulisnya.",
			"Setiap naskah dibaca ulang, diberi catatan, dan disunting sampai enak dibaca. Anda tahu bagian mana yang berubah dan alasannya.",
		],
		values: [
			{
				title: "Terstruktur",
				text: "Alur bab dan argumen disusun sebelum menulis.",
			},
			{
				title: "Jujur",
				text: "Sumber dicantumkan; tidak ada klaim tanpa rujukan.",
			},
			{
				title: "Rapi",
				text: "Ejaan, tanda baca, dan format sitasi diperiksa.",
			},
		],
		panelLabel: "AKSARA.TULIS / Rekap",
		panelListLabel: "Yang kami bantu",
		panelList: [
			"Struktur naskah",
			"Daftar pustaka",
			"Parafrase",
			"Proofreading",
			"Format sitasi",
			"Cek konsistensi",
		],
	},
	servicesHeading: {
		number: "02",
		label: "Layanan",
		title: "Yang kami",
		accent: "bantu tulis dan rapikan.",
		lead: "Dari menyusun kerangka sampai memeriksa ejaan terakhir. Pilih yang paling dekat dengan kebutuhan naskah Anda.",
		cta: { label: "Konsultasi", href: "#kontak" },
	},
	services: [
		{
			icon: "essay",
			title: "Makalah & Esai",
			description:
				"Susunan bab, argumen, dan daftar pustaka yang konsisten.",
		},
		{
			icon: "journal",
			title: "Jurnal Ilmiah",
			description:
				"Format abstrak, metode, hasil, dan referensi sesuai gaya selingkung.",
		},
		{
			icon: "thesis",
			title: "Skripsi & Tesis",
			description:
				"Bantuan struktur, penyuntingan, dan perapian daftar pustaka.",
		},
		{
			icon: "quote",
			title: "Parafrase",
			description:
				"Menulis ulang kalimat agar bebas plagiarisme tanpa mengubah makna.",
		},
		{
			icon: "report",
			title: "Tugas & Laporan",
			description:
				"Laporan praktikum, laporan kegiatan, dan tugas akhir semester.",
		},
		{
			icon: "edit",
			title: "Editing & Proofreading",
			description:
				"Perbaikan ejaan, tanda baca, dan konsistensi istilah.",
		},
	],
	process: {
		heading: {
			number: "03",
			label: "Proses",
			title: "Lima langkah,",
			accent: "dari topik ke naskah.",
			lead: "Anda tahu naskah sedang di tahap mana, dan apa yang perlu Anda putuskan di setiap tahap.",
			cta: { label: "Mulai dari sini", href: "#kontak" },
		},
		steps: [
			{
				duration: "1 hari",
				title: "Brief & Topik",
				description:
					"Kita sepakati topik, jumlah halaman, format sitasi, dan tenggat pengumpulan.",
			},
			{
				duration: "1–2 hari",
				title: "Riset Sumber",
				description:
					"Sumber dikumpulkan dan diperiksa kredibilitasnya sebelum dipakai.",
			},
			{
				duration: "1–2 hari",
				title: "Outline",
				description:
					"Kerangka bab dan alur argumen disetujui lebih dulu agar tidak menulis dua kali.",
			},
			{
				duration: "3–7 hari",
				title: "Penulisan & Revisi",
				description:
					"Naskah disusun, lalu dikirim untuk Anda periksa dan beri catatan.",
			},
			{
				duration: "1–2 hari",
				title: "Pemeriksaan Akhir",
				description:
					"Ejaan, format sitasi, dan konsistensi istilah diperiksa sebelum diserahkan.",
			},
		],
		note: "Naskah dibaca ulang sebelum diserahkan",
	},
	works: {
		heading: {
			number: "04",
			label: "Contoh",
			title: "Naskah yang",
			accent: "sudah dirapikan.",
			lead: "Contoh lingkup pekerjaan yang biasa kami tangani. Nama dan data klien tidak ditampilkan.",
			cta: { label: "Punya naskah?", href: "#kontak" },
		},
		// TODO(PLACEHOLDER): fictional specimens — replace with permissioned samples.
		items: [
			{
				name: "Makalah Ekonomi",
				category: "Makalah",
				summary:
					"24 halaman, struktur 5 bab, dan 18 sumber dengan format APA 7.",
			},
			{
				name: "Jurnal Pendidikan",
				category: "Jurnal",
				summary:
					"Naskah 6.000 kata dengan abstrak, metode, dan referensi.",
			},
			{
				name: "Skripsi Manajemen",
				category: "Skripsi",
				summary: "Penyuntingan bab 1–5 dan perapian 60 referensi.",
			},
			{
				name: "Laporan Praktikum",
				category: "Laporan",
				summary:
					"Format laporan laboratorium dan tabel data yang konsisten.",
			},
		],
	},
	pricing: {
		heading: {
			number: "05",
			label: "Harga",
			title: "Harga jelas,",
			accent: "dihitung per lingkup.",
			lead: "Biaya menyesuaikan jumlah halaman dan tingkat penyuntingan. Estimasi dikirim setelah naskah atau topik diperiksa.",
			cta: { label: "Minta penawaran", href: "#kontak" },
		},
		// TODO(PLACEHOLDER): prices are examples, not final quotes.
		items: [
			{
				id: "tugas",
				name: "Tugas",
				audience: "Untuk tugas, esai, dan laporan pendek.",
				price: "Rp 50.000",
				delivery: "2–3 hari kerja",
				features: [
					"Sampai 5 halaman",
					"Struktur & ejaan",
					"Daftar pustaka dasar",
					"1x revisi",
				],
			},
			{
				id: "makalah",
				name: "Makalah",
				audience: "Untuk makalah dan laporan dengan beberapa bab.",
				price: "Rp 150.000",
				delivery: "4–6 hari kerja",
				featured: true,
				features: [
					"8–15 halaman",
					"Outline & struktur bab",
					"Parafrase sumber",
					"Daftar pustaka rapi",
					"2x revisi",
				],
			},
			{
				id: "skripsi",
				name: "Skripsi",
				audience: "Untuk penyuntingan dan perapian naskah panjang.",
				price: "Rp 600.000",
				delivery: "7–14 hari kerja",
				features: [
					"Bantuan per bab",
					"Penyuntingan bahasa",
					"Format sitasi konsisten",
					"Cek daftar pustaka",
					"3x revisi",
				],
			},
		],
		note: {
			custom: "Naskah panjang atau multi-bab? Hubungi kami untuk penawaran per lingkup.",
			disclaimer:
				"Harga di atas adalah estimasi awal. Kami membantu struktur, bahasa, dan penyuntingan; keputusan akademik tetap milik penulis.",
		},
	},
	faq: {
		heading: {
			number: "06",
			label: "FAQ",
			title: "Hal yang",
			accent: "sering ditanyakan.",
			lead: "Belum menemukan jawabannya? Kirim pertanyaan Anda — kami balas tanpa berbelit-belit.",
			cta: { label: "Tanya langsung", href: "#kontak" },
		},
		items: [
			{
				question: "Apakah naskah saya dijamin bebas plagiarisme?",
				answer: "Kami menulis ulang dan mencantumkan sumber, tetapi hasil akhir tetap perlu Anda periksa dengan alat pengecekan kampus. Kami tidak memalsukan hasil turnitin.",
			},
			{
				question: "Apakah data dan naskah saya dirahasiakan?",
				answer: "Ya. Naskah tidak dipublikasikan dan tidak dipakai sebagai contoh tanpa izin tertulis. File kerja dihapus setelah proyek selesai jika Anda meminta.",
			},
			{
				question: "Bisakah Anda mengikuti format kampus saya?",
				answer: "Bisa. Kirim pedoman penulisan atau template kampus, dan kami sesuaikan struktur, sitasi, serta format halamannya.",
			},
			{
				question:
					"Apakah bisa hanya menyunting naskah yang sudah jadi?",
				answer: "Bisa. Layanan proofreading mencakup ejaan, tanda baca, kalimat, dan konsistensi istilah tanpa mengubah isi atau argumen.",
			},
			{
				question: "Berapa lama pengerjaan satu makalah?",
				answer: "Tugas pendek 2–3 hari, makalah 4–6 hari, dan skripsi 7–14 hari tergantung jumlah halaman serta antrean. Tenggat mendesak bisa didiskusikan.",
			},
		],
	},
	contact: {
		number: "07",
		heading: { first: "Mulai dari", second: "Topik Anda." },
		support:
			"Kirim topik, jumlah halaman, format sitasi, dan tenggat Anda. Kami akan membalas dengan estimasi dan langkah berikutnya.",
		menu: "Bantuan penulisan, penyuntingan, dan parafrase naskah akademik.",
	},
	waMessage:
		"Halo AKSARA.TULIS, saya ingin bertanya tentang bantuan penulisan untuk naskah saya.",
};

const data: Branch = {
	key: "data",
	path: "/data",
	name: "AKSARA.DATA",
	title: "Pengolahan Data",
	role: "Olah Data",
	tagline: "Rekap, olah, dan visualkan data Excel.",
	description:
		"AKSARA.DATA merapikan, mengolah, dan memvisualkan data Excel — rekap otomatis, pivot, grafik, dan dashboard sederhana.",
	keywords: [
		"jasa olah data excel",
		"jasa rekap data",
		"pembuatan dashboard excel",
		"pivot table",
		"rumus excel",
	],
	nav: branchNav,
	hero: {
		eyebrow: "AKSARA.DATA · Pengolahan Data",
		headline: { first: "Data rapi,", second: "Keputusan Jelas." },
		subheadline:
			"Rekap otomatis, rumus, pivot, dan grafik di Excel — supaya laporan bulanan selesai dalam menit, bukan hari.",
		claims: [
			"File asli tetap aman",
			"Template bisa dipakai ulang",
			"Hasil disertai penjelasan",
		],
		primary: { label: "Mulai Proyek", href: "#kontak" },
		secondary: { label: "Lihat Contoh", href: "#karya" },
	},
	about: {
		heading: {
			number: "01",
			label: "Tentang",
			title: "Dari data",
			accent: "menjadi jawaban.",
			lead: "Data yang menumpuk di spreadsheet biasanya bukan masalah jumlah, tapi struktur.",
			cta: { label: "Kenalan dulu", href: "#kontak" },
		},
		paragraphs: [
			"Kolom yang tidak konsisten, rumus yang saling menimpa, dan rekap manual yang diulang setiap bulan membuat pekerjaan terasa lebih berat dari seharusnya.",
			"Kami merapikan datanya, membuat rumus dan pivot yang bisa dipakai ulang, lalu menyusun tampilan laporan yang mudah dibaca — tanpa mengubah file asli Anda.",
		],
		values: [
			{ title: "Rapi", text: "Satu format kolom, satu sumber angka." },
			{
				title: "Aman",
				text: "File asli disalin dulu; tidak ada data yang hilang.",
			},
			{
				title: "Bisa diulang",
				text: "Rumus dan template bisa dipakai untuk data berikutnya.",
			},
		],
		panelLabel: "AKSARA.DATA / Rekap",
		panelListLabel: "Yang kami kerjakan",
		panelList: [
			"Bersihkan data",
			"Rumus & pivot",
			"Grafik",
			"Dashboard",
			"Validasi",
			"Template",
		],
	},
	servicesHeading: {
		number: "02",
		label: "Layanan",
		title: "Yang kami",
		accent: "rapikan dan olah.",
		lead: "Dari membersihkan satu file sampai menyusun dashboard. Semua dikerjakan di salinan file, jadi data asli tetap aman.",
		cta: { label: "Konsultasi", href: "#kontak" },
	},
	services: [
		{
			icon: "clean",
			title: "Bersihkan & Rekap Data",
			description:
				"Hapus duplikat, samakan format, dan susun ulang kolom.",
		},
		{
			icon: "formula",
			title: "Rumus & Otomatisasi",
			description:
				"VLOOKUP, IF, dan makro sederhana untuk kerja berulang.",
		},
		{
			icon: "table",
			title: "Pivot & Laporan",
			description:
				"Rekap per bulan, per cabang, atau per kategori dalam satu klik.",
		},
		{
			icon: "chart",
			title: "Visualisasi & Grafik",
			description:
				"Grafik dan ringkasan angka yang langsung bisa dibaca.",
		},
		{
			icon: "dashboard",
			title: "Dashboard Sederhana",
			description: "Satu halaman Excel untuk memantau angka penting.",
		},
		{
			icon: "convert",
			title: "Konversi & Migrasi",
			description: "Pindahkan data dari PDF, CSV, atau sistem lama.",
		},
	],
	process: {
		heading: {
			number: "03",
			label: "Proses",
			title: "Lima langkah,",
			accent: "dari file ke laporan.",
			lead: "File asli tetap utuh. Setiap perubahan dicatat, dan hasilnya diserahkan dalam file terpisah.",
			cta: { label: "Mulai dari sini", href: "#kontak" },
		},
		steps: [
			{
				duration: "1 hari",
				title: "Terima Data",
				description:
					"Kirim file Excel, CSV, atau PDF. Kami periksa struktur dan jumlah barisnya.",
			},
			{
				duration: "1–2 hari",
				title: "Bersihkan",
				description:
					"Duplikat dihapus, format disamakan, dan kolom disusun ulang tanpa mengubah isi.",
			},
			{
				duration: "1–3 hari",
				title: "Olah & Rumus",
				description:
					"Rumus, validasi, dan pivot dibuat agar rekap berikutnya tidak manual lagi.",
			},
			{
				duration: "1–2 hari",
				title: "Visualisasi",
				description:
					"Grafik dan ringkasan disusun untuk angka yang paling penting dilihat lebih dulu.",
			},
			{
				duration: "1 hari",
				title: "Serah Terima",
				description:
					"File hasil, penjelasan rumus, dan panduan singkat penggunaan diserahkan.",
			},
		],
		note: "File asli tidak diubah; hasil diserahkan terpisah",
	},
	works: {
		heading: {
			number: "04",
			label: "Contoh",
			title: "Data yang",
			accent: "sudah dirapikan.",
			lead: "Contoh lingkup pekerjaan yang biasa kami tangani. Data klien tidak ditampilkan.",
			cta: { label: "Punya data?", href: "#kontak" },
		},
		// TODO(PLACEHOLDER): fictional specimens — replace with permissioned samples.
		items: [
			{
				name: "Rekap Penjualan",
				category: "Excel",
				summary: "12 bulan data, pivot per produk, dan grafik tren.",
			},
			{
				name: "Laporan Keuangan",
				category: "Excel",
				summary: "Rumus otomatis dan ringkasan kas bulanan.",
			},
			{
				name: "Data Inventaris",
				category: "Excel",
				summary: "3.000 baris dirapikan dan diberi validasi input.",
			},
			{
				name: "Dashboard Cabang",
				category: "Dashboard",
				summary: "Empat cabang, satu halaman ringkasan.",
			},
		],
	},
	pricing: {
		heading: {
			number: "05",
			label: "Harga",
			title: "Harga jelas,",
			accent: "sesuai jumlah data.",
			lead: "Pilih titik mulai yang paling dekat dengan kebutuhan Anda. Penawaran final menyesuaikan jumlah baris dan kerumitan laporan.",
			cta: { label: "Minta penawaran", href: "#kontak" },
		},
		// TODO(PLACEHOLDER): prices are examples, not final quotes.
		items: [
			{
				id: "rekap",
				name: "Rekap",
				audience: "Untuk merapikan satu file dan membuat rekap dasar.",
				price: "Rp 100.000",
				delivery: "2–3 hari kerja",
				features: [
					"Sampai 500 baris",
					"Bersihkan & samakan format",
					"1 pivot atau rekap",
					"1 grafik",
					"1x revisi",
				],
			},
			{
				id: "analisis",
				name: "Analisis",
				audience: "Untuk laporan berkala dengan beberapa kategori.",
				price: "Rp 300.000",
				delivery: "4–6 hari kerja",
				featured: true,
				features: [
					"Sampai 5.000 baris",
					"Rumus & validasi",
					"Beberapa pivot",
					"Grafik & ringkasan",
					"Template bisa dipakai ulang",
					"2x revisi",
				],
			},
			{
				id: "dashboard",
				name: "Dashboard",
				audience:
					"Untuk memantau angka dari beberapa sumber sekaligus.",
				price: "Rp 750.000",
				delivery: "7–10 hari kerja",
				features: [
					"Multi-sheet / multi-sumber",
					"Dashboard satu halaman",
					"Grafik interaktif sederhana",
					"Panduan penggunaan",
					"Dukungan 1 bulan",
					"3x revisi",
				],
			},
		],
		note: {
			custom: "Butuh olah data dari beberapa file sekaligus? Hubungi kami untuk penawaran custom.",
			disclaimer:
				"Harga di atas adalah estimasi awal. Penawaran final menyesuaikan jumlah baris, sumber data, dan tingkat kerumitan.",
		},
	},
	faq: {
		heading: {
			number: "06",
			label: "FAQ",
			title: "Hal yang",
			accent: "sering ditanyakan.",
			lead: "Belum menemukan jawabannya? Kirim pertanyaan Anda — kami balas tanpa berbelit-belit.",
			cta: { label: "Tanya langsung", href: "#kontak" },
		},
		items: [
			{
				question: "Apakah file asli saya diubah?",
				answer: "Tidak. Kami bekerja pada salinan file. File asli tetap utuh, dan hasil akhir diserahkan sebagai file baru.",
			},
			{
				question: "Data saya sensitif. Apakah aman?",
				answer: "Kami hanya meminta kolom yang diperlukan. Data tidak dibagikan, dan file kerja dihapus setelah proyek selesai jika Anda meminta.",
			},
			{
				question: "Format file apa yang bisa dikirim?",
				answer: "Excel (.xlsx/.xls), CSV, Google Sheets, atau PDF tabel. Untuk PDF, hasilnya kami salin ke Excel terlebih dahulu.",
			},
			{
				question: "Apakah saya bisa mengubah rumusnya sendiri nanti?",
				answer: "Bisa. Kami menyertakan penjelasan singkat untuk rumus dan pivot yang dibuat, serta menandai sel mana yang boleh diubah.",
			},
			{
				question:
					"Bisakah dibuatkan template untuk data bulan berikutnya?",
				answer: "Bisa. Template dengan rumus dan pivot siap pakai termasuk di paket Analisis ke atas, lengkap dengan panduan singkat.",
			},
		],
	},
	contact: {
		number: "07",
		heading: { first: "Kirim Data", second: "Anda." },
		support:
			"Ceritakan data yang ingin diolah dan hasil seperti apa yang Anda butuhkan. Kami akan membalas dengan estimasi dan langkah berikutnya.",
		menu: "Rekap, olah, dan visualkan data Excel untuk laporan yang lebih cepat dibaca.",
	},
	waMessage:
		"Halo AKSARA.DATA, saya ingin bertanya tentang pengolahan data Excel.",
};

export const branches: Record<BranchKey, Branch> = { dev, design, tulis, data };

export function isBranchKey(value: string): value is BranchKey {
	return Object.hasOwn(branches, value);
}
