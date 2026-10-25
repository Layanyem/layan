const apps = [
  {
    number: "01",
    category: "استوديو الصور",
    name: "Image Toolbox",
    description: "تحرير احترافي للصور وإضافة لمسات إبداعية، مع أدوات ذكاء اصطناعي تمنح كل صورة مظهرًا مميزًا.",
    details: "استوديو إبداعي لتحرير الصور وتحسينها بسهولة. تساعد الأدوات الذكية على تطوير الصور وإبراز الأفكار، من التعديلات السريعة إلى اللمسات النهائية.",
    slug: "image-toolbox",
    icon: "assets/apps/image-toolbox/app-icon.webp",
    iconAlt: "أيقونة تطبيق Image Toolbox، إطار أخضر مزخرف وأدوات تحرير الصور",
    image: "assets/image-toolbox.svg",
    imageAlt: "رسم تجريدي مؤقت لتطبيق تعديل الصور",
    screenshots: [
      { image: "assets/apps/image-toolbox/screenshot-1.svg", alt: "لقطة شاشة مؤقتة لواجهة تحرير الصور" },
      { image: "assets/apps/image-toolbox/screenshot-2.svg", alt: "لقطة شاشة مؤقتة لأدوات تحسين الصور" },
      { image: "assets/apps/image-toolbox/screenshot-3.svg", alt: "لقطة شاشة مؤقتة لخيارات التعديل" }
    ],
    tags: ["تحرير الصور", "أدوات ذكية", "إبداع"],
    features: ["تحرير الصور بسهولة", "أدوات مدعومة بالذكاء الاصطناعي", "تحسين الصور ولمسات احترافية"],
    status: "متاح الآن",
    download: "https://github.com/Layanyem/layan/releases/download/v1.0/photo.apk",
    downloadLabel: "تنزيل التطبيق"
  },
  {
    number: "02",
    category: "استوديو الفيديو",
    name: "AI Video Studio",
    description: "تحويل الأفكار إلى فيديوهات مميزة، وإحياء القصص بأدوات توليد ذكية.",
    details: "مساحة لصناعة الفيديوهات بالذكاء الاصطناعي؛ تبدأ التجربة بفكرة أو وصف، ثم تتحول إلى فيديو يروي القصة بأسلوب مميز. يمكن استكشاف المزايا وتنزيل التطبيق من هذه الصفحة.",
    slug: "ai-video-studio",
    icon: "assets/apps/ai-video-studio/app-icon.webp",
    iconAlt: "أيقونة تطبيق توليد الفيديو، زخارف عربية وشريط سينمائي ملون",
    image: "assets/ai-video-studio.svg",
    imageAlt: "رسم تجريدي مؤقت لتطبيق توليد الفيديو",
    screenshots: [
      { image: "assets/apps/ai-video-studio/screenshot-1.svg", alt: "لقطة شاشة مؤقتة لواجهة إنشاء الفيديو" },
      { image: "assets/apps/ai-video-studio/screenshot-2.svg", alt: "لقطة شاشة مؤقتة لأدوات توليد الفيديو" },
      { image: "assets/apps/ai-video-studio/screenshot-3.svg", alt: "لقطة شاشة مؤقتة لمعاينة الفيديو" }
    ],
    tags: ["توليد الفيديو", "ذكاء اصطناعي", "فيديو"],
    features: ["توليد فيديوهات بأدوات ذكية", "تحويل الأفكار إلى قصص مرئية", "معاينة الفيديو قبل مشاركته"],
    status: "متاح الآن",
    download: "https://github.com/Layanyem/layan/releases/download/v1.2/app-debug.apk",
    downloadLabel: "تنزيل التطبيق"
  }
];

const appGrid = document.querySelector("#app-grid");
const currentYear = document.querySelector("#current-year");
const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#main-navigation");

function renderApp(app) {
  return `
    <article class="app-card">
      <a class="app-art" href="app.html?app=${encodeURIComponent(app.slug)}" aria-label="تفاصيل ${app.name}">
        <img src="${app.image}" alt="${app.imageAlt}" fetchpriority="high">
        <span class="app-number">${app.number}</span>
        <span class="app-view-badge">عرض التطبيق <span aria-hidden="true">↙</span></span>
        ${app.icon ? `<span class="app-icon-badge"><img src="${app.icon}" alt="" aria-hidden="true" width="68" height="68"></span>` : ""}
      </a>
      <div class="app-content">
        <div class="app-meta">
          <span class="app-category">${app.category}</span>
          <span class="app-status">${app.status}</span>
        </div>
        <div class="app-title-row">
          <h3 class="app-title">${app.name}</h3>
        </div>
        <p class="app-description">${app.description}</p>
        <div class="app-tags">${app.tags.map((tag) => `<span class="app-tag">${tag}</span>`).join("")}</div>
      </div>
      <div class="app-footer">
        <span class="app-footer-label">صُنع بشغف وإبداع</span>
        <a class="app-link" href="app.html?app=${encodeURIComponent(app.slug)}">التفاصيل والتنزيل <span aria-hidden="true">←</span></a>
      </div>
    </article>
  `;
}

if (appGrid) {
  appGrid.innerHTML = apps.map(renderApp).join("");
}

const appDetails = document.querySelector("#app-details");
if (appDetails) {
  const selectedApp = apps.find((app) => app.slug === new URLSearchParams(window.location.search).get("app"));

  if (selectedApp) {
    document.title = `${selectedApp.name} — تطبيقات ليان`;
    document.querySelector('meta[name="description"]').content = selectedApp.description;
    const downloadAction = selectedApp.download
      ? `<a class="button button-primary download-button" href="${selectedApp.download}"${selectedApp.download.startsWith("assets/") ? " download" : ' target="_blank" rel="noopener noreferrer"'}>${selectedApp.downloadLabel}<span class="button-arrow" aria-hidden="true">↓</span></a>`
      : `<span class="button button-disabled" aria-disabled="true">${selectedApp.downloadLabel}</span>`;

    appDetails.innerHTML = `
      <a class="back-link" href="index.html#apps"><span aria-hidden="true">→</span> العودة إلى التطبيقات</a>
      <section class="detail-hero">
        <div class="detail-copy">
          <p class="eyebrow"><span class="eyebrow-dot"></span> ${selectedApp.category} · ${selectedApp.status}</p>
          <div class="detail-title-row">
            ${selectedApp.icon ? `<img class="detail-app-icon" src="${selectedApp.icon}" alt="${selectedApp.iconAlt}" width="76" height="76">` : ""}
            <h1>${selectedApp.name}</h1>
          </div>
          <p class="detail-lead">${selectedApp.description}</p>
          <p class="detail-description">${selectedApp.details}</p>
          ${downloadAction}
        </div>
        <img class="detail-cover" src="${selectedApp.image}" alt="${selectedApp.imageAlt}">
      </section>
      <section class="detail-features" aria-labelledby="features-title">
        <div>
          <p class="eyebrow"><span class="eyebrow-dot"></span> أدوات توسّع آفاق الإبداع</p>
          <h2 id="features-title">ماذا يتيح التطبيق؟</h2>
        </div>
        <ul class="feature-list">${selectedApp.features.map((feature) => `<li><span aria-hidden="true">✳</span>${feature}</li>`).join("")}</ul>
      </section>
      <section class="screenshots-section" aria-labelledby="screenshots-title">
        <div class="section-heading">
          <div>
            <p class="eyebrow"><span class="eyebrow-dot"></span> لمحة من الداخل</p>
            <h2 id="screenshots-title">لقطات <span>من التطبيق.</span></h2>
          </div>
          <p class="section-intro">لقطات مؤقتة؛ تُستبدل بصور فعلية من التطبيق عند توفرها.</p>
        </div>
        <div class="screenshot-grid">${selectedApp.screenshots.map((screenshot, index) => `
          <figure class="screenshot-card">
            <img src="${screenshot.image}" alt="${screenshot.alt}" loading="lazy">
            <figcaption>لقطة ${String(index + 1).padStart(2, "0")}</figcaption>
          </figure>
        `).join("")}</div>
      </section>
      <div class="detail-bottom-cta">
        <p>التطبيق متاح للتنزيل</p>
        ${downloadAction}
      </div>
    `;
  } else {
    document.title = "التطبيق غير موجود — تطبيقات ليان";
    appDetails.innerHTML = `
      <section class="not-found">
        <p class="eyebrow"><span class="eyebrow-dot"></span> لم نعثر على هذا التطبيق</p>
        <h1>يبدو أن الرابط غير صحيح.</h1>
        <a class="button button-primary" href="index.html#apps">عرض التطبيقات <span class="button-arrow" aria-hidden="true">←</span></a>
      </section>
    `;
  }
}

currentYear.textContent = new Date().getFullYear();

if (menuToggle && navigation) {
  menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "فتح القائمة" : "إغلاق القائمة");
    navigation.classList.toggle("is-open", !isOpen);
  });

  navigation.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "فتح القائمة");
      navigation.classList.remove("is-open");
    }
  });
}
