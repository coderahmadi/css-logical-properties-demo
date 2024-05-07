const data_ltr = {
  headerTitle: "Persönliche Informationen",
  myFullName: "Sayed Jamal Hussain Ahmadi",
  myRole: "Full-Stack-Softwareentwickler",
  location: "Berlin, Deutschland",
  sumTitle: "Professionelle Zusammenfassung:",
  sumContent:
    "Mehr als 4 Jahre Erfahrung in der Entwicklung von Full-Stack-Anwendungen. Nachgewiesene Fähigkeit zur Projektleitung während meines letzten Projekts, BioBaumBauer. Erfahrung in der API-Entwicklung und der Integration von Bibliotheken und Tools von Drittanbietern. Fundierte Kompetenz im SDLC, insbesondere in agilen Techniken. Etablierte Kapazität in CI/CD-Pipeline und DevOps-Projekten zur Rationalisierung der Entwicklung. Entwicklung einer reaktionsfähigen und ausgefeilten Benutzeroberfläche (Client), die mit REST-APIs interagiert.",
  expTitle: "Aktuelle Berufserfahrung",
  expSummary:
    "Führte wöchentlich mehr als 3 Stunden Nachhilfeunterricht für mehr als 10 unserer Klassenkameraden durch und steigerte deren Entwicklungskompetenz durch die Ausübung der Gedankenthemen und die Beantwortung komplexer Fragen durch Live-Codierung.",
};
const data_rtl = {
  headerTitle: "معلومات شخصی",
  myFullName: "سید جمال حسین احمدی",
  myRole: "توسعه دهنده نرم افزار",
  location: "برلین، آلمان",
  sumTitle: " خلاصه حرفه ای:",
  sumContent:
    "بیش از 4 سال تجربه در توسعه برنامه های فول استک. در آخرین پروژه من، BioBaumBauer، توانایی در رهبری پروژه را نشان داد. تجربه در توسعه API و یکپارچه سازی کتابخانه ها و ابزارهای شخص ثالث. شایستگی عمیق در SDLC به ویژه در تکنیک های چابک. ظرفیت ایجاد شده در پروژه‌های خط لوله CI/CD و DevOps برای ساده‌سازی توسعه. UI (مشتری) پاسخگو و پیچیده در تعامل با REST API.",
  expTitle: "تجربه کاری:",
  expSummary:
    "هفته ای 3 ساعت جلسه آموزشی برای بیش از 10 نفر از همکلاسی هایمان برگزار کردیم و با تمرین موضوعات فکری و پاسخ به سؤالات پیچیده از طریق کدنویسی زنده، صلاحیت توسعه آنها را افزایش دادیم.",
};

document.getElementById("language").addEventListener("change", function () {
  const directionValue = this.value;
  const outerMostTag = document.getElementById("outerMost");
  outerMostTag.setAttribute("dir", directionValue);

  const headTopP = document.querySelector("#head-top-p");
  const fullName = document.querySelector("#fullName");
  const role = document.querySelector("#role");
  const location = document.querySelector("#location");
  const summaryTitle = document.querySelector("#summaryTitle");
  const summaryText = document.querySelector("#summaryText");
  const expTitle = document.querySelector("#expTitle")
  const expSummary = document.querySelector("#expSummary")

  if (directionValue === "ltr") {
    headTopP.innerText = data_ltr.headerTitle;
    fullName.innerText = data_ltr.myFullName;
    role.innerText = data_ltr.myRole;
    location.innerText = data_ltr.location;
    summaryTitle.innerText = data_ltr.sumTitle;
    summaryText.innerText = data_ltr.sumContent;
    expTitle.innerText = data_ltr.expTitle;
    expSummary.innerText = data_ltr.expSummary;
  }
  if (directionValue === "rtl") {
    headTopP.innerText = data_rtl.headerTitle;
    fullName.innerText = data_rtl.myFullName;
    role.innerText = data_rtl.myRole;
    location.innerText = data_rtl.location;
    summaryTitle.innerText = data_rtl.sumTitle;
    summaryText.innerText = data_rtl.sumContent;
    expTitle.innerText = data_rtl.expTitle;
    expSummary.innerText = data_rtl.expSummary;
  }
});
