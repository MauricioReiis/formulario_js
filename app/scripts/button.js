const button = () => {
  const $ = document.querySelector.bind(document);

  const form = $("#form");
  const sucess = $("#sucess");
  const button = $("#btn");

  // form.addEventListener(() => {});

  button.addEventListener("click", () => {
    if (true) {
      form.style.display = "none";
      sucess.style.display = "block";

      console.log("logou");
      console.log("logou");
    }
  });
};

export default button;
