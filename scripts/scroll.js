function scrollToSection(section) {
  const options = { behavior: "smooth", block: "start" };
  switch (section) {
    case "home":
      document.getElementById("home").scrollIntoView(options);
      break;
    case "projects":
      document.getElementById("projects").scrollIntoView(options);
      break;
    case "resume":
      document.getElementById("resume").scrollIntoView(options);
      break;
    case "contact":
      document.getElementById("contact").scrollIntoView(options);
      break;
    default:
      console.log("something");
  }
}
