function scrollToSection(section) {
  const options = { behavior: "smooth" };
  if (section === "project") {
    document.getElementById("projects").scrollIntoView(options);
  } else {
    document.getElementById("contact").scrollIntoView(options);
  }
}
