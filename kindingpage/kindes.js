// 🍔 منوی همبرگر
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks"); // ⚠️ id مهم است

if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}

// ⬇️ اسکرول نرم برای لینک‌های داخلی (بدون jQuery)
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href");
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80, // جبران ارتفاع نوار منو
                behavior: "smooth",
            });
        }
    });
});

// 🔵 دایره‌های پیشرفت (بدون jQuery)
function animateProgressCircles() {
    document.querySelectorAll(".progress-circle").forEach((circle) => {
        const textElement = circle.querySelector(".progress-text");
        if (!textElement) return;

        const text = textElement.textContent;
        const percentage = parseInt(text.replace("%", ""), 10);
        const radius = 26;
        const circumference = 2 * Math.PI * radius;
        const offset = circumference - (percentage / 100) * circumference;

        const svg = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "svg"
        );
        svg.setAttribute("width", "64");
        svg.setAttribute("height", "64");
        svg.style.position = "absolute";
        svg.style.top = "0";
        svg.style.left = "0";

        const circleEl = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "circle"
        );
        circleEl.setAttribute("cx", "32");
        circleEl.setAttribute("cy", "32");
        circleEl.setAttribute("r", radius.toString());
        circleEl.setAttribute("fill", "none");
        circleEl.setAttribute("stroke", "#237d61");
        circleEl.setAttribute("stroke-width", "6");
        circleEl.setAttribute("stroke-dasharray", circumference.toString());
        circleEl.setAttribute("stroke-dashoffset", offset.toString());
        circleEl.setAttribute("transform", "rotate(-90 32 32)");

        svg.appendChild(circleEl);
        circle.appendChild(svg);
    });
}

// اجرا بعد از لود کامل صفحه
window.addEventListener("load", function () {
    animateProgressCircles();
});

// 📧 فرم خبرنامه (بدون jQuery و بدون فرم)
const newsletterBtn = document.querySelector(".newsletter-btn");
const newsletterInput = document.querySelector(".newsletter-input");

if (newsletterBtn && newsletterInput) {
    newsletterBtn.addEventListener("click", function (e) {
        e.preventDefault();
        const email = newsletterInput.value.trim();
        if (email && email.includes("@")) {
            alert("✅ ثبت نام شما با موفقیت انجام شد!");
            newsletterInput.value = "";
        } else {
            alert("⚠️ لطفا یک ایمیل معتبر وارد کنید.");
        }
    });
}

// 🖼️ پاپ‌آپ ویدیو
const openBtn = document.getElementById("openPopup");
const closeBtn = document.getElementById("closePopup");
const popup = document.getElementById("popupOverlay");

if (openBtn && popup) {
    openBtn.addEventListener("click", () => {
        popup.style.display = "flex"; // نه block — برای وسط چینی
    });
}

if (closeBtn && popup) {
    closeBtn.addEventListener("click", () => {
        popup.style.display = "none";
    });
}

// بستن پاپ‌آپ با کلیک بیرون از محتوا
if (popup) {
    window.addEventListener("click", (e) => {
        if (e.target === popup) {
            popup.style.display = "none";
        }
    });
}
