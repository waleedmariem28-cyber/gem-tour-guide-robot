let language = "en";
let index = 0;

const total = 10;

const artifacts = [
  {
    en: "Tutankhamun’s Golden Mask",
    ar: "قناع توت عنخ آمون الذهبي",
    desc_en: "One of the most famous artifacts in the world, made of solid gold.",
    desc_ar: "يُعد من أشهر القطع الأثرية في العالم، مصنوع من الذهب الخالص.",
    image: "images/tut_mask.jpg",
    audio_en: "audio/tut_en.mp3",
    audio_ar: "audio/tut_ar.mp3"
  },
  {
    en: "Statue of King Khufu",
    ar: "تمثال الملك خوفو",
    desc_en: "A rare ivory statue of King Khufu, builder of the Great Pyramid.",
    desc_ar: "تمثال نادر من العاج للملك خوفو، باني الهرم الأكبر.",
    image: "images/khufu.jpg",
    audio_en: "audio/khufu_en.mp3",
    audio_ar: "audio/khufu_ar.mp3"
  },
  {
    en: "Diorite Statue of Khafre",
    ar: "تمثال الملك خفرع",
    desc_en: "A powerful statue carved from diorite stone.",
    desc_ar: "تمثال مهيب منحوت من حجر الديوريت.",
    image: "images/khafre.jpg",
    audio_en: "audio/khafre_en.mp3",
    audio_ar: "audio/khafre_ar.mp3"
  },
  {
    en: "Menkaure Triad",
    ar: "ثالوث الملك منقرع",
    desc_en: "A triad statue representing divine protection.",
    desc_ar: "تمثال ثلاثي يمثل الحماية الإلهية.",
    image: "images/menkaure.jpg",
    audio_en: "audio/menkaure_en.mp3",
    audio_ar: "audio/menkaure_ar.mp3"
  },
  {
    en: "Seated Statue of Hatshepsut",
    ar: "تمثال الملكة حتشبسوت",
    desc_en: "A seated statue of one of Egypt’s greatest queens.",
    desc_ar: "تمثال جالس لواحدة من أعظم ملكات مصر.",
    image: "images/hatchepsut.jpg",
    audio_en: "audio/hatchepsut_en.mp3",
    audio_ar: "audio/hatchepsut_ar.mp3"
  },
  {
    en: "Colossal Statue of Ramses II",
    ar: "التمثال الضخم لرمسيس الثاني",
    desc_en: "One of the largest statues in ancient Egypt.",
    desc_ar: "أحد أضخم التماثيل في مصر القديمة.",
    image: "images/ramses.jpg",
    audio_en: "audio/ramses_en.mp3",
    audio_ar: "audio/ramses_ar.mp3"
  },
  {
    en: "Statue of Senenmut",
    ar: "تمثال سننموت",
    desc_en: "Architect and advisor of Queen Hatshepsut.",
    desc_ar: "مهندس ومستشار الملكة حتشبسوت.",
    image: "images/senenmut.jpg",
    audio_en: "audio/senenmut_en.mp3",
    audio_ar: "audio/senenmut_ar.mp3"
  },
  {
    en: "Tutankhamun Royal Chariot",
    ar: "عربة توت عنخ آمون",
    desc_en: "A royal chariot used for ceremonies and hunting.",
    desc_ar: "عربة ملكية استخدمت في الاحتفالات والصيد.",
    image: "images/chariot.jpg",
    audio_en: "audio/chariot_en.mp3",
    audio_ar: "audio/chariot_ar.mp3"
  },
  {
    en: "Canopic Jars",
    ar: "الجرار الكانوبية",
    desc_en: "Used to preserve organs during mummification.",
    desc_ar: "استخدمت لحفظ الأعضاء أثناء التحنيط.",
    image: "images/canopic.jpg",
    audio_en: "audio/canopic_en.mp3",
    audio_ar: "audio/canopic_ar.mp3"
  },
  {
    en: "Book of the Dead Papyrus",
    ar: "بردية كتاب الموتى",
    desc_en: "Guidance for the soul in the afterlife.",
    desc_ar: "إرشادات للروح في الحياة الآخرة.",
    image: "images/book_dead.jpg",
    audio_en: "audio/book_dead_en.mp3",
    audio_ar: "audio/book_dead_ar.mp3"
  }
];

function startTour() {
  document.getElementById("welcomeScreen").classList.remove("active");
  document.getElementById("tourScreen").classList.add("active");
  loadArtifact();
}

function loadArtifact() {
  if (index >= artifacts.length) {
    endTour();
    return;
  }

  const art = artifacts[index];

  document.getElementById("artifactName").innerText =
    language === "en" ? art.en : art.ar;

  document.getElementById("artifactDescription").innerText =
    language === "en" ? art.desc_en : art.desc_ar;

  document.getElementById("artifactImage").src = art.image;

  document.getElementById("statusText").innerText =
    language === "en"
      ? `You are viewing artifact ${index + 1} of ${total}`
      : `أنت تشاهد القطعة ${index + 1} من ${total}`;

  const audio = document.getElementById("audioPlayer");
  audio.src = language === "en" ? art.audio_en : art.audio_ar;
  audio.load();
}

function nextArtifact() {
  index++;
  loadArtifact();
}

function previousArtifact() {
  if (index > 0) {
    index--;
    loadArtifact();
  }
}

function toggleLanguage() {
  language = language === "en" ? "ar" : "en";
  document.body.dir = language === "ar" ? "rtl" : "ltr";
  loadArtifact();
}

function endTour() {
  document.getElementById("tourScreen").classList.remove("active");
  document.getElementById("endScreen").classList.add("active");
}