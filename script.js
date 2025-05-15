// Fungsi untuk mengatur favicon
function setFavicon() {
  // Cek apakah favicon sudah ada
  let favicon = document.querySelector('link[rel="icon"]');
  let appleIcon = document.querySelector('link[rel="apple-touch-icon"]');
  
  // Jika favicon belum ada, buat elemen baru
  if (!favicon) {
    favicon = document.createElement('link');
    favicon.rel = 'icon';
    document.head.appendChild(favicon);
  }
  
  // Jika apple-touch-icon belum ada, buat elemen baru
  if (!appleIcon) {
    appleIcon = document.createElement('link');
    appleIcon.rel = 'apple-touch-icon';
    document.head.appendChild(appleIcon);
  }
  
  // Set path ke gambar osis.png
  favicon.href = 'osis.png';
  appleIcon.href = 'osis.png';
  
  // Tambahkan favicon untuk Microsoft Edge
  let msIcon = document.querySelector('meta[name="msapplication-TileImage"]');
  if (!msIcon) {
    msIcon = document.createElement('meta');
    msIcon.name = 'msapplication-TileImage';
    document.head.appendChild(msIcon);
  }
  msIcon.content = 'osis.png';
  
  // Tambahkan warna tile untuk Microsoft Edge
  let msTileColor = document.querySelector('meta[name="msapplication-TileColor"]');
  if (!msTileColor) {
    msTileColor = document.createElement('meta');
    msTileColor.name = 'msapplication-TileColor';
    document.head.appendChild(msTileColor);
  }
  msTileColor.content = '#007bff';
}

// Jalankan fungsi setFavicon saat dokumen dimuat
document.addEventListener('DOMContentLoaded', setFavicon);

// Daftar fun facts tentang OSIS dan pendidikan
const funFacts = [
  "Tahukah kamu? OSIS pertama kali dibentuk pada tahun 1970-an sebagai wadah kegiatan siswa di sekolah.",
  "Warna biru dalam logo OSIS melambangkan kedamaian dan ketenangan dalam berpikir.",
  "Pendidikan karakter adalah salah satu fokus utama kegiatan OSIS di seluruh Indonesia.",
  "Satu jam belajar dengan konsentrasi penuh setara dengan tiga jam belajar sambil melakukan multitasking.",
  "Membaca dengan suara keras dapat meningkatkan daya ingat hingga 50%.",
  "Otak manusia dapat memproses gambar 60.000 kali lebih cepat daripada teks.",
  "Siswa yang aktif berorganisasi memiliki kemampuan manajemen waktu yang lebih baik.",
  "Mendengarkan musik klasik saat belajar dapat meningkatkan konsentrasi.",
  "Belajar sambil mengajarkan ke orang lain meningkatkan pemahaman hingga 90%.",
  "Tidur yang cukup sebelum ujian lebih efektif daripada belajar semalaman.",
  "Minum air putih yang cukup dapat meningkatkan fungsi otak hingga 30%.",
  "OSIS adalah wadah pengembangan karakter dan jiwa kepemimpinan siswa.",
  "Kegiatan ekstrakurikuler dapat meningkatkan kemampuan soft skill yang dibutuhkan di dunia kerja.",
  "Membuat jadwal belajar dapat meningkatkan produktivitas hingga 40%.",
  "Otak kita membutuhkan 20% energi dari seluruh tubuh meskipun hanya 2% dari berat tubuh total.",
  "Memiliki tanggung jawab di organisasi sekolah membantu siswa lebih siap menghadapi dunia kerja.",
  "Belajar dalam kelompok kecil terbukti efektif meningkatkan pemahaman materi.",
  "Siswa yang aktif di OSIS memiliki jaringan pertemanan lebih luas dan beragam.",
  "SMP Negeri di Indonesia memiliki OSIS sebagai wadah pengembangan diri yang sangat aktif.",
  "Kegiatan OSIS dapat mengurangi stres akademik dan meningkatkan kesehatan mental siswa.",
  "Berjalan kaki 10 menit sebelum belajar dapat meningkatkan konsentrasi hingga 60%.",
  "Siswa yang membaca minimal 30 menit sehari memiliki kosakata 2 juta kata lebih banyak.",
  "Bermain game strategi dapat meningkatkan kemampuan pemecahan masalah.",
  "Organisasi Siswa Intra Sekolah memiliki 10 seksi bidang kegiatan yang berbeda.",
  "Siswa yang mengikuti OSIS memiliki kemungkinan 30% lebih tinggi diterima di universitas favorit.",
  "Menulis catatan dengan tangan terbukti lebih efektif untuk mengingat daripada mengetik.",
  "Kepengurusan OSIS berganti setiap tahun dengan pemilihan yang demokratis.",
  "Lambang OSIS memiliki makna khusus pada setiap bagiannya, termasuk bentuk dan warnanya.",
  "Berpartisipasi dalam OSIS membantu siswa belajar tentang kerja tim dan kepemimpinan.",
  "Pengurus OSIS di Indonesia telah banyak berhasil meraih prestasi akademik dan non-akademik.",
  "Membuka jendela saat belajar dan mendapatkan udara segar dapat meningkatkan konsentrasi hingga 20%.",
  "Mengerjakan PR dengan latar belakang musik instrumental dapat meningkatkan fokus.",
  "Istirahat 5 menit setiap 25 menit belajar dapat meningkatkan daya serap materi.",
  "Kemampuan berorganisasi yang didapat dari OSIS bermanfaat seumur hidup.",
  "OSIS di banyak sekolah rutin mengadakan kegiatan sosial untuk membantu masyarakat sekitar.",
  // Fun Facts Pelajaran Umum dan Pantun Edukasi
  "Tahukah kamu? Ketika kita bersin, semua fungsi tubuh berhenti sejenak, bahkan detak jantung kita!",
  "Pantun Matematika: Jalan-jalan ke toko buku, beli buku cerita dewi. Belajar Matematika itu perlu, untuk bekal di masa nanti.",
  "Fakta Sains: Air di bumi sekarang adalah air yang sama yang telah ada sejak dinosaurus hidup jutaan tahun lalu.",
  "Paru-paru manusia memiliki permukaan seluas lapangan tenis jika dibentangkan!",
  "Pantun Membaca: Pergi ke pasar membeli peta, dibeli dari paman Salim. Rajinlah membaca membuka mata, jadilah insan yang berilmu.",
  "Tubuh manusia mengandung cukup besi untuk membuat paku sepanjang 3 sentimeter.",
  "Pantun Belajar: Makan sate di pinggir kali, sambil minum es kelapa. Ayo kawan belajar sekali, supaya menjadi juara kelas.",
  "Fakta IPA: Cahaya matahari membutuhkan waktu 8 menit 20 detik untuk sampai ke bumi.",
  "Dalam setahun, jantung kita berdetak lebih dari 31 juta kali! Itu sekitar 100.000 detak setiap hari.",
  "Pantun Lingkungan: Bunga mawar harum semerbak, ditanam di kebun nenek Siti. Jagalah lingkungan dan bersihkanlah, agar dunia tetap lestari.",
  "Fakta Bahasa: Ada lebih dari 7.000 bahasa yang digunakan di dunia, tetapi hanya sekitar 25% yang memiliki bentuk tulisan.",
  "Pantun Teknologi: Naik sepeda ke sudut kota, berhenti sejenak makan durian. Bijak menggunakan teknologi kita, agar hidup lebih nyaman dan aman.",
  "Tulang manusia sebenarnya lebih kuat dari beton dalam hal menahan tekanan!",
  "Pantun Literasi: Ikan berenang di dalam kolam, melompat-lompat mencari makan. Rajinlah membaca berbagai macam, ilmu pengetahuan akan tertanam.",
  "Tahukah kamu? Meskipun ukurannya kecil, lidah memiliki sekitar 8.000 kuncup pengecap rasa!",
  "Pantun Sejarah: Pergi berlayar ke Pulau Jawa, singgah sejenak di kota tua. Belajar sejarah bangsa dan negara, agar tidak mudah terperdaya.",
  "Ketika satu sel otak mati, sel tersebut tidak dapat digantikan oleh sel baru. Jagalah kesehatan otakmu!",
  "Pantun Kesehatan: Pergi ke pasar beli semangka, jangan lupa beli pepaya. Jagalah selalu kesehatanmu, agar hidupmu bahagia.",
  "Fakta Astronomi: Setiap tahun, bumi mengelilingi matahari sejauh 940 juta kilometer dengan kecepatan 107.000 km/jam."
];

// Fungsi untuk mendapatkan fun fact acak dengan animasi yang lebih menarik
function getRandomFunFact() {
  return funFacts[Math.floor(Math.random() * funFacts.length)];
}

// Fungsi untuk menampilkan animasi loading
function showLoadingAnimation() {
  // Buat elemen fun fact
  const funFactText = getRandomFunFact();
  const loadingElement = $("#loading-animation");
  
  // Perbarui konten loading dengan spinner baru dan fun fact
  if (loadingElement.find(".spinner-container").length === 0) {
    loadingElement.find(".spinner-border").replaceWith(`
      <div class="spinner-container">
        <div class="spinner-ring"></div>
        <div class="spinner-ring"></div>
        <div class="spinner-ring"></div>
      </div>
    `);
    
    // Tambahkan fun fact jika belum ada
    if (loadingElement.find(".fun-fact-loading").length === 0) {
      loadingElement.find(".loading-content").append(`
        <div class="fun-fact-loading">
          <i class="fas fa-lightbulb text-warning mr-2"></i>
          <span id="fun-fact-text">${funFactText}</span>
        </div>
      `);
    } else {
      // Perbarui fun fact jika sudah ada
      loadingElement.find("#fun-fact-text").text(funFactText);
    }
  } else {
    // Hanya perbarui fun fact
    loadingElement.find("#fun-fact-text").text(funFactText);
  }
  
  // Tambahkan efek fade untuk fun fact
  setTimeout(() => {
    loadingElement.find(".fun-fact-loading").addClass("fade-in");
  }, 300);
  
  // Tampilkan animasi loading
  loadingElement.removeClass("d-none");

  let progress = 0;
  const interval = setInterval(() => {
    progress += Math.floor(Math.random() * 8) + 3; // Randomize progress untuk terlihat lebih natural
    if (progress > 100) progress = 100;
    
    $("#loading-progress").text(progress);
    
    // Perbarui fun fact di tengah loading jika sudah di atas 50%
    if (progress > 50 && progress < 75 && Math.random() > 0.7) {
      const newFunFact = getRandomFunFact();
      loadingElement.find("#fun-fact-text").fadeOut(200, function() {
        $(this).text(newFunFact).fadeIn(200);
      });
    }

    if (progress >= 100) {
      clearInterval(interval);
      setTimeout(() => {
        loadingElement.addClass("d-none");
        loadingElement.find(".fun-fact-loading").removeClass("fade-in");
      }, 500);
    }
  }, 100);
}

// Expose the function globally
window.showLoadingAnimation = showLoadingAnimation;

// Fungsi untuk menampilkan fun fact dalam floating container dengan animasi yang lebih menarik
function showFunFactTooltip(message) {
  // Buat elemen jika belum ada
  if ($("#fun-fact-tooltip").length === 0) {
    $("body").append(`
      <div id="fun-fact-tooltip" class="fun-fact-container">
        <i class="fas fa-lightbulb fun-fact-icon text-warning"></i>
        <span>${message}</span>
        <button type="button" class="close text-white ml-2" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    `);
    
    // Tambahkan event click untuk close button
    $("#fun-fact-tooltip .close").on("click", function() {
      $("#fun-fact-tooltip").removeClass("show");
    });
  } else {
    // Update pesan jika elemen sudah ada
    $("#fun-fact-tooltip span").text(message);
  }
  
  // Tampilkan tooltip dengan animasi
  setTimeout(() => {
    $("#fun-fact-tooltip").addClass("show");
    
    // Sembunyikan tooltip setelah beberapa detik
    setTimeout(() => {
      $("#fun-fact-tooltip").removeClass("show");
    }, 6000);
  }, 1000);
}

// Menambahkan loading pada saat dokumen mulai dimuat
document.onreadystatechange = function() {
  if (document.readyState !== "complete") {
    $("#loading-animation").removeClass("d-none");
  } else {
    setTimeout(() => {
      $("#loading-animation").addClass("d-none");
      
      // Tampilkan fun fact tooltip setelah halaman selesai dimuat
      showFunFactTooltip(getRandomFunFact());
      
      // Animasi elemen saat halaman dimuat
      animateElements();
    }, 1000);
  }
}

// Fungsi untuk menganimasikan elemen saat scroll dengan efek yang lebih halus
function animateElements() {
  // Tambahkan kelas pada semua elemen section untuk animasi
  $("section").each(function(index) {
    const section = $(this);
    
    // Tambahkan kelas yang berbeda untuk setiap section alternatif
    if (index % 4 === 0) {
      section.addClass("fade-in");
    } else if (index % 4 === 1) {
      section.addClass("slide-in-left");
    } else if (index % 4 === 2) {
      section.addClass("slide-in-right");
    } else {
      section.addClass("zoom-in");
    }
    
    // Tambahkan class animated-element pada elemen-elemen tertentu untuk animasi saat scroll
    section.find(".card, .gallery-item, h2, .icon-circle, .btn-group, .alert").addClass("animated-element");
  });
  
  // Fungsi untuk mengecek dan menganimasikan elemen saat scroll dengan throttling untuk performa
  let lastScrollTime = 0;
  function checkAnimation() {
    const now = Date.now();
    if (now - lastScrollTime < 50) return; // Throttle untuk performa lebih baik
    lastScrollTime = now;
    
    $(".animated-element").each(function() {
      const element = $(this);
      if (element.hasClass("visible")) return; // Skip jika sudah terlihat
      
      const elementTop = element.offset().top;
      const elementHeight = element.height();
      const windowHeight = $(window).height();
      const scrollY = $(window).scrollTop();
      
      // Jika elemen terlihat di viewport, tampilkan dengan delay berdasarkan posisi
      if (scrollY + windowHeight > elementTop && scrollY < elementTop + elementHeight) {
        // Tambahkan delay berdasarkan posisi untuk animasi cascade
        const delay = Math.min((elementTop - scrollY) / windowHeight * 500, 500);
        setTimeout(() => {
          element.addClass("visible");
        }, delay);
      }
    });
  }
  
  // Jalankan checkAnimation pertama kali
  setTimeout(checkAnimation, 300);
  
  // Tambahkan event scroll untuk checkAnimation
  $(window).on("scroll", checkAnimation);
  
  // Tambahkan animasi floating pada beberapa elemen
  $(".icon-circle, .btn-primary:not(.btn-sm)").addClass("float-animation");
  
  // Tambahkan efek paralax pada hero section
  $(window).on("scroll", function() {
    const scrollPosition = $(window).scrollTop();
    
    // Paralax effect untuk hero section
    $(".hero-section").css({
      "background-position": `center ${scrollPosition * 0.2}px`
    });
  });
}

$(document).ready(function() {
  // Tampilkan loading saat halaman pertama kali dibuka
  showLoadingAnimation();
  
  // Set current year in footer
  $("#current-year").text(new Date().getFullYear());
  
  // Navbar scrolled effect
  $(window).on("scroll", function() {
    if ($(window).scrollTop() > 50) {
      $(".navbar").addClass("scrolled");
    } else {
      $(".navbar").removeClass("scrolled");
    }
  });

  // Tambahkan fungsi untuk menutup notifikasi update
  $(".update-notification").append('<button type="button" class="close text-white" aria-label="Close"><span aria-hidden="true">&times;</span></button>');
  
  $(".update-notification .close").on("click", function() {
    $(this).closest(".update-notification").slideUp(300, function() {
      $(this).remove();
    });
    
    // Simpan status bahwa notifikasi telah ditutup
    localStorage.setItem("updateNotificationClosed", "true");
  });
  
  // Cek apakah notifikasi harus ditampilkan
  if (localStorage.getItem("updateNotificationClosed")) {
    $(".update-notification").hide();
  }

  // Tampilkan animasi loading saat mengklik link
  $('a:not([href^="#"]):not([target="_blank"]):not([data-toggle="tab"]):not([data-dismiss="modal"])').on(
    "click",
    function (e) {
      e.preventDefault();
      const href = $(this).attr("href");

      // Tambahkan efek transisi pada body
      $("body").addClass("page-transition");
      
      showLoadingAnimation();

      setTimeout(() => {
        window.location.href = href;
      }, 800);
    }
  );

  // Filter tombol galeri jika ada
  if ($('.filter-buttons').length > 0) {
    // Inisialisasi Isotope
    var $gallery = $('.gallery-container').isotope({
      itemSelector: '.gallery-item',
      layoutMode: 'fitRows'
    })
    
    $('.filter-buttons').on('click', 'button', function() {
      // Tampilkan loading saat filter diklik
      showLoadingAnimation();
      
      var filterValue = $(this).attr('data-filter')
      
      // Add active class to current button
      $('.filter-buttons button').removeClass('active')
      $(this).addClass('active')
      
      // Terapkan filter setelah loading
      setTimeout(function() {
        if ($gallery.data('isotope')) {
          $gallery.isotope({ filter: filterValue })
          
          // Check if there are any visible items after filtering
          setTimeout(function() {
            var visibleItemsCount = $gallery.data('isotope').filteredItems.length
            if (visibleItemsCount === 0) {
              $('.no-results').show()
            } else {
              $('.no-results').hide()
            }
            
            // Sembunyikan loading
            $("#loading-animation").addClass("d-none")
          }, 300)
        } else {
          $("#loading-animation").addClass("d-none")
        }
      }, 500)
    })
  }

  // Tampilkan animasi loading saat submit form
  $("form:not(#verification-form):not(#lopak-form)").on("submit", function() {
    showLoadingAnimation();
  });

  // Toggle visibilitas password
  $(".toggle-password").on("click", function () {
    const input = $($(this).data("toggle"));
    if (input.attr("type") === "password") {
      input.attr("type", "text");
      $(this).find("i").removeClass("fa-eye").addClass("fa-eye-slash");
    } else {
      input.attr("type", "password");
      $(this).find("i").removeClass("fa-eye-slash").addClass("fa-eye");
    }
  });

  // Verification form submission
  $("#verification-form").on("submit", function(e) {
    e.preventDefault();

    const verificationCode = $("#verification-code").val();

    if (verificationCode === "90102131") {
      // Show loading animation
      showLoadingAnimation();

      // Hide verification section and show LOPAK form after delay
      setTimeout(function() {
        $("#verification-section").addClass("d-none");
        $("#lopak-section").removeClass("d-none");
        $("#loading-animation").addClass("d-none");
      }, 1000);
    } else {
      // Show error message
      $("#verification-error").removeClass("d-none");
    }
  });

  // Preview uploaded photo
  $("#foto").on("change", function () {
    const file = this.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function(e) {
        $("#preview-foto").attr("src", e.target.result).removeClass("d-none");
      }
      reader.readAsDataURL(file);

      // Update file input label
      $(this).next(".custom-file-label").html(file.name);
    }
  });

  // Get user's location
  let userLocation = "Lokasi tidak tersedia";

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      userLocation = position.coords.latitude + ", " + position.coords.longitude;
    });
  }

  // LOPAK form related functions
  if ($("#lopak-form").length > 0) {
    // Print only button
    $("#print-only").on("click", function() {
      // Validate form
      if (!$("#lopak-form")[0].checkValidity()) {
        $("#lopak-form")[0].reportValidity();
        return;
      }

      // Populate receipt
      populateReceipt(userLocation);

      // Show receipt modal
      $("#receiptModal").modal("show");
    });

    // LOPAK form submission
    $("#lopak-form").on("submit", function(e) {
      e.preventDefault();

      // Show loading animation
      showLoadingAnimation();

      // Populate receipt
      populateReceipt(userLocation);

      // Check if mobile device
      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

      if (isMobile) {
        // For mobile devices, download the receipt
        setTimeout(function() {
          downloadReceipt();

          // Hide form and show thank you page
          $("#lopak-section").addClass("d-none");
          $("#thank-you-section").removeClass("d-none");
          $("#loading-animation").addClass("d-none");
        }, 1500);
      } else {
        // For desktop, show the receipt modal
        setTimeout(function() {
          $("#loading-animation").addClass("d-none");
          $("#receiptModal").modal("show");

          // After modal is closed, show thank you page
          $("#receiptModal").on("hidden.bs.modal", function() {
            $("#lopak-section").addClass("d-none");
            $("#thank-you-section").removeClass("d-none");
          });
        }, 1500);
      }
    });

    // Print receipt button
    $("#print-receipt").on("click", function() {
      window.print();
    });
  }
  
  // Efek hover pada gallery items
  $(".gallery-item").hover(
    function() {
      $(this).find("img").css("transform", "scale(1.1)");
    },
    function() {
      $(this).find("img").css("transform", "scale(1)");
    }
  );
  
  // Modal phishing warning - jangan tampilkan lagi
  $("#dontShowAgain").on("click", function() {
    localStorage.setItem("dontShowPhishingWarning", "true");
    $("#phishingWarningModal").modal("hide");
  });
  
  // Cek apakah warning harus ditampilkan
  if (!localStorage.getItem("dontShowPhishingWarning")) {
    setTimeout(function() {
      $("#phishingWarningModal").modal("show");
    }, 2000);
  }
});

// Function to populate receipt
function populateReceipt(location) {
  const now = new Date();
  const dateOptions = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
  const timeOptions = { hour: "2-digit", minute: "2-digit", second: "2-digit" };

  $("#receipt-date").text(now.toLocaleDateString("id-ID", dateOptions));
  $("#receipt-time").text(now.toLocaleTimeString("id-ID", timeOptions));
  $("#receipt-nama").text($("#nama").val());
  $("#receipt-kelas").text($("#kelas").val());
  $("#receipt-jabatan").text($("#jabatan").val());
  $("#receipt-kegiatan").text($("#kegiatan").val());
  $("#receipt-tanggal-kegiatan").text($("#tanggal").val());
  $("#receipt-lokasi").text(location);
  $("#receipt-keterangan").text($("#keterangan").val() || "-");

  // Set photo
  const fileInput = document.getElementById("foto");
  if (fileInput && fileInput.files && fileInput.files[0]) {
    const reader = new FileReader();
    reader.onload = function(e) {
      $("#receipt-foto").attr("src", e.target.result);
    }
    reader.readAsDataURL(fileInput.files[0]);
  }
}

// Function to download receipt
function downloadReceipt() {
  if (typeof html2canvas !== 'undefined' && typeof jsPDF !== 'undefined') {
    // Use html2canvas to capture the receipt content
    html2canvas(document.getElementById("receipt-content")).then(function(canvas) {
      // Create PDF
      const pdf = new jsPDF("p", "mm", "a4");

      // Add image to PDF
      const imgData = canvas.toDataURL("image/png");
      const imgWidth = 210; // A4 width in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);

      // Download PDF
      pdf.save("Resi_Kehadiran_OSIS_" + $("#nama").val().replace(/\s+/g, "_") + ".pdf");
    });
  } else {
    console.error("html2canvas atau jsPDF tidak tersedia!");
  }
}

// Tambahkan wave divider pada section jika belum ada
function addWaveDividers() {
  // Tambahkan wave di bawah section dengan class bg-primary
  $("section.bg-primary").each(function() {
    if ($(this).find(".wave-divider").length === 0) {
      $(this).css("position", "relative").append(`
        <div class="wave-divider">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
          </svg>
        </div>
      `);
    }
  });
  
  // Tambahkan wave di atas section untuk beberapa section
  $("section.bg-light").each(function() {
    if ($(this).find(".wave-top").length === 0) {
      $(this).css("position", "relative").prepend(`
        <div class="wave-top">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
          </svg>
        </div>
      `);
    }
  });
}

// Jalankan fungsi setelah dokumen dimuat
$(document).ready(function() {
  setTimeout(addWaveDividers, 500);
});
