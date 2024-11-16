document.addEventListener("DOMContentLoaded", function () {
  // Funcionalidade para as atividades
  const activityButtons = document.querySelectorAll(".activity-btn");
  const activityContents = document.querySelectorAll(".activity-content");

  activityButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const activityId = this.getAttribute("data-activity");

      // Esconde todas as atividades
      activityContents.forEach((content) => {
        content.style.display = "none";
      });

      // Exibe a atividade clicada
      const activeContent = document.getElementById(`activity-${activityId}`);
      activeContent.style.display = "block";
    });
  });

  // Funcionalidade para habilidades
  const skillButtons = document.querySelectorAll(".skill-btn");

  skillButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const skillId = this.getAttribute("data-skill");
      const skillInfo = document.getElementById(`skill-${skillId}`);

      // Alterna a visibilidade da descrição da habilidade
      if (
        skillInfo.style.display === "none" ||
        skillInfo.style.display === ""
      ) {
        skillInfo.style.display = "block";
      } else {
        skillInfo.style.display = "none";
      }
    });
  });
});
