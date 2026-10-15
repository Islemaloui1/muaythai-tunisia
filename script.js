/* =====================================
   1. LANGUAGE SWITCHER
===================================== */

const languageButton =
    document.getElementById("language-button");

let currentLanguage = "fr";


function changeLanguage() {

    currentLanguage =
        currentLanguage === "fr" ? "ar" : "fr";

    // تغيير لغة الصفحة واتجاه الكتابة

    document.documentElement.lang = currentLanguage;

    document.documentElement.dir =
        currentLanguage === "ar" ? "rtl" : "ltr";

    // تغيير النصوص التي تحتوي على data-fr و data-ar

    document.querySelectorAll("[data-fr][data-ar]")
        .forEach(function(element) {

            element.textContent =
                element.dataset[currentLanguage];

        });

    // تحديث زر اللغة

    languageButton.textContent =
        currentLanguage === "fr" ? "عربي" : "FR";

    // تحديث وصف القائمة

    menuButton.setAttribute(
        "aria-label",
        currentLanguage === "fr"
            ? "Ouvrir le menu"
            : "فتح القائمة"
    );

}


languageButton.addEventListener(
    "click",
    changeLanguage
);


/* =====================================
   2. MOBILE MENU
===================================== */

const menuButton =
    document.getElementById("menu-button");

const navigation =
    document.getElementById("navigation");


menuButton.addEventListener("click", function() {

    const isOpen =
        navigation.classList.toggle("open");

    menuButton.setAttribute(
        "aria-expanded",
        String(isOpen)
    );

    menuButton.textContent =
        isOpen ? "✕" : "☰";

});


/* غلق القائمة عند الضغط على رابط */

navigation.querySelectorAll("a").forEach(function(link) {

    link.addEventListener("click", function() {

        navigation.classList.remove("open");

        menuButton.setAttribute(
            "aria-expanded",
            "false"
        );

        menuButton.textContent = "☰";

    });

});


/* =====================================
   3. CURRENT YEAR
===================================== */

document.getElementById("year").textContent =
    new Date().getFullYear();


/* =====================================
   4. EMAIL SETTINGS
===================================== */

const associationEmail =
    "mtbtunisia@gmail.com";


/* =====================================
   5. JOIN FORM
===================================== */

const joinForm =
    document.getElementById("join-form");

const formStatus =
    document.getElementById("form-status");


joinForm.addEventListener("submit", function(event) {

    // منع الإرسال الافتراضي

    event.preventDefault();


    // قراءة البيانات

    const name =
        document.getElementById("name").value.trim();

    const phone =
        document.getElementById("phone").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const message =
        document.getElementById("message").value.trim();


    // التحقق من البيانات

    if (!name || !phone || !email) {

        formStatus.textContent =
            currentLanguage === "fr"
                ? "Veuillez remplir les champs obligatoires."
                : "يرجى ملء الخانات المطلوبة.";

        return;

    }


    // إنشاء الرسالة بالفرنسية أو العربية

    let subject;
    let body;


    if (currentLanguage === "fr") {

        subject = "Demande d'inscription - MTSA";

        body =
`Nouvelle demande d'inscription à MTSA

Nom : ${name}
Téléphone : ${phone}
E-mail : ${email}

Message :
${message}`;

    } else {

        subject = "طلب انضمام إلى MTSA";

        body =
`طلب انضمام جديد إلى جمعية MTSA

الاسم : ${name}
رقم الهاتف : ${phone}
البريد الإلكتروني : ${email}

الرسالة :
${message}`;

    }


    // إنشاء رابط البريد الإلكتروني

    const mailtoLink =
        "mailto:" + associationEmail +
        "?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(body);


    // توضيح ما سيحدث للمستخدم

    formStatus.textContent =
        currentLanguage === "fr"
            ? "Votre application e-mail va s'ouvrir. Vérifiez le message puis cliquez sur Envoyer."
            : "سيتم فتح تطبيق البريد الإلكتروني. راجع الرسالة ثم اضغط على إرسال.";


    // فتح تطبيق البريد الإلكتروني

    window.location.href = mailtoLink;

});


/* =====================================
   6. PRODUCT ORDER BUTTONS
===================================== */

const productButtons =
    document.querySelectorAll(".product-button");


productButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        const productName =
            currentLanguage === "fr"
                ? button.dataset.product
                : button.dataset.productAr;


        const subject =
            currentLanguage === "fr"
                ? "Demande concernant : " + productName
                : "طلب بخصوص : " + productName;


        const body =
            currentLanguage === "fr"

                ? `Bonjour MTSA,

Je souhaite obtenir des informations sur :
${productName}

Pouvez-vous me communiquer le prix et les tailles disponibles ?

Merci.`

                : `السلام عليكم،

أرغب في الاستفسار عن:
${productName}

يرجى إعلامي بالسعر والمقاسات المتوفرة.

شكراً.`;


        const mailtoLink =
            "mailto:" + associationEmail +
            "?subject=" + encodeURIComponent(subject) +
            "&body=" + encodeURIComponent(body);


        window.location.href = mailtoLink;

    });

});
// MTSA INTRO SCREEN

window.addEventListener("load", function () {
    const intro = document.getElementById("intro-screen");

    if (!intro) return;

    setTimeout(function () {
        intro.remove();
    }, 2800);
});