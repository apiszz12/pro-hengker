


function ubahArtikel() {
    const artikel = document.getElementById('artikel-content');
    if (artikel) {
        artikel.innerText = 'Tips terbaru: Pilih umpan yang sesuai dengan jenis ikan dan kondisi air. Periksa ramalan cuaca agar pengalaman memancing tetap aman dan menyenangkan!';
        alert('Tips berhasil diperbarui!');
    }
}


function kirimForm() {
    const nama = document.getElementById('nama').value;
    const email = document.getElementById('email').value;
    const pesan = document.getElementById('pesan').value;

    const formMessage = document.getElementById('formMessage');
    if (nama && email && pesan) {
        formMessage.innerText = `Terima kasih ${nama} (${email})! Pesanmu: "${pesan}" telah kami terima. Kami akan menghubungi Anda segera.`;
        document.getElementById('contactForm').reset();
    } else {
        formMessage.innerText = 'Harap lengkapi semua kolom sebelum mengirim pesan.';
    }

    return false; 
}


document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetID = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetID);

        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});


window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('main section');
    const navLinks = document.querySelectorAll('nav a');

    let currentSection = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 60;
        if (pageYOffset >= sectionTop) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === currentSection) {
            link.classList.add('active');
        }
    });
});


function updateWaktu() {
    const footer = document.querySelector('footer p');
    const now = new Date();
    const waktuString = now.toLocaleTimeString();

    footer.innerText = `© 2025 Komunitas Mancing. Waktu saat ini: ${waktuString}`;
}

setInterval(updateWaktu, 1000);
