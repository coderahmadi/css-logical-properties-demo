const data_ltr = {
  headerTitle: "Personal Info",
  myFullName: "Sayed Jamal Hussain Ahmadi",
  myRole: "Full-Stack-Softwareentwickler",
  location: "Berlin, Deutschland",
  sumTitle: "Professionelle Zusammenfassung:",
  sumContent:
    "Mehr als 4 Jahre Erfahrung in der Entwicklung von Full-Stack-Anwendungen. Nachgewiesene Fähigkeit zur Projektleitung während meines letzten Projekts, BioBaumBauer. Erfahrung in der API-Entwicklung und der Integration von Bibliotheken und Tools von Drittanbietern. Fundierte Kompetenz im SDLC, insbesondere in agilen Techniken. Etablierte Kapazität in CI/CD-Pipeline und DevOps-Projekten zur Rationalisierung der Entwicklung. Entwicklung einer reaktionsfähigen und ausgefeilten Benutzeroberfläche (Client), die mit REST-APIs interagiert.",
  eduTitle: "Weiterbildung",
  eduSummary:
    "Die Menschen am Digital Career Institute eint eine Mission: Zunächst unterstützten wir Flüchtlinge bei der Integration in den digitalen Arbeitsmarkt.",
};
const data_rtl = {
  headerTitle: "معلومات شخصی",
  myFullName: "سید جمال حسین احمدی",
  myRole: "توسعه دهنده نرم افزار",
  location: "برلین، آلمان",
  sumTitle: " خلاصه حرفه ای:",
  sumContent:
    "بیش از 4 سال تجربه در توسعه برنامه های فول استک. در آخرین پروژه من، BioBaumBauer، توانایی در رهبری پروژه را نشان داد. تجربه در توسعه API و یکپارچه سازی کتابخانه ها و ابزارهای شخص ثالث. شایستگی عمیق در SDLC به ویژه در تکنیک های چابک. ظرفیت ایجاد شده در پروژه‌های خط لوله CI/CD و DevOps برای ساده‌سازی توسعه. UI (مشتری) پاسخگو و پیچیده در تعامل با REST API.",
  eduTitle: "ادامه تحصیل:",
  eduSummary:
    "افراد مؤسسه شغلی دیجیتال با یک مأموریت متحد شده اند: در ابتدا، ما از پناهندگان حمایت کردیم تا در بازار کار دیجیتال ادغام شوند.",
};

document.getElementById("language").addEventListener("change", function () {
  const directionValue = this.value;
  console.log("Value: ", directionValue);
  const outerMostTag = document.getElementById("outerMost");
  outerMostTag.setAttribute("dir", directionValue);

  const headTopP = document.querySelector("#head-top-p");
  const fullName = document.querySelector("#fullName");
  const role = document.querySelector("#role");
  const location = document.querySelector("#location");
  const summaryTitle = document.querySelector("#summaryTitle");
  const summaryText = document.querySelector("#summaryText");
  const eduTitle = document.querySelector("#eduTitle")
  const eduSummary = document.querySelector("#eduSummary")

  if (directionValue === "ltr") {
    headTopP.innerText = data_ltr.headerTitle;
    fullName.innerText = data_ltr.myFullName;
    role.innerText = data_ltr.myRole;
    location.innerText = data_ltr.location;
    summaryTitle.innerText = data_ltr.sumTitle;
    summaryText.innerText = data_ltr.sumContent;
    eduTitle.innerText = data_ltr.eduTitle;
    eduSummary.innerText = data_ltr.eduSummary;
  }
  if (directionValue === "rtl") {
    headTopP.innerText = data_rtl.headerTitle;
    fullName.innerText = data_rtl.myFullName;
    role.innerText = data_rtl.myRole;
    location.innerText = data_rtl.location;
    summaryTitle.innerText = data_rtl.sumTitle;
    summaryText.innerText = data_rtl.sumContent;
    eduTitle.innerText = data_rtl.eduTitle;
    eduSummary.innerText = data_rtl.eduSummary;
  }
});
