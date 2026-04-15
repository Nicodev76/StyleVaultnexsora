function showContent(category) {
  const content = document.querySelectorAll(".content_div");

  content.forEach((content) => {
    content.classList.remove("show");
  });

  const activeContent = document.getElementById("content_" + category);

  if (activeContent) {
    activeContent.classList.add("show");
  }
}