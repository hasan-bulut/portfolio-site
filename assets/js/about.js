about_select("skills");

function about_select(type) {
  document.getElementById("a_skills").style.color =
    type == "skills" ? "#f9004d" : "white";
  document.getElementById("a_exp").style.color =
    type == "exp" ? "#f9004d" : "white";
  document.getElementById("a_edu").style.color =
    type == "edu" ? "#f9004d" : "white";

  document
    .getElementById("a_skills")
    .style.setProperty("--scale", type == "skills" ? "1" : "0.2");
  document
    .getElementById("a_exp")
    .style.setProperty("--scale", type == "exp" ? "1" : "0.2");
  document
    .getElementById("a_edu")
    .style.setProperty("--scale", type == "edu" ? "1" : "0.2");

  document
    .getElementById("a_skills")
    .style.setProperty("--color", type == "skills" ? "#f9004d" : "white");
  document
    .getElementById("a_exp")
    .style.setProperty("--color", type == "exp" ? "#f9004d" : "white");
  document
    .getElementById("a_edu")
    .style.setProperty("--color", type == "edu" ? "#f9004d" : "white");

  document.getElementById("p_skills").style.display =
    type == "skills" ? "block" : "none";
  document.getElementById("p_exp").style.display =
    type == "exp" ? "block" : "none";
  document.getElementById("p_edu").style.display =
    type == "edu" ? "block" : "none";
}