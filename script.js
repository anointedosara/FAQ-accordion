const questions = document.querySelector(".questions");
const data = [
  {
    question: "What is Frontend Mentor, and how will it help me?",
    answer:
      "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.",
  },
  {
    question: "Is Frontend Mentor free?",
    answer:
      "Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.",
  },
  {
    question: "Can I use Frontend Mentor projects in my portfolio?",
    answer:
      "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!",
  },
  {
    question: "How can I get help if I'm stuck on a challenge?",
    answer:
      " The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.",
  },
];

data.forEach(item => {
  questions.innerHTML += `
    <div class="question">
      <button class="title">
        <h2>${item.question}</h2>
        <img src="/assets/images/icon-plus.svg" alt="">
      </button>
      <div class="answer">${item.answer}</div>
    </div>
  `;
});

const titles = document.querySelectorAll(".title");
const question = document.querySelectorAll(".question")

for (let i = 0; i < titles.length; i++) {
  titles[0].parentElement.classList.add("show");
  titles[0].querySelector("img").src = "/assets/images/icon-minus.svg";
  titles[i].addEventListener("click", () => {
    for (let j = 0; j < question.length; j++) {
      question[j].classList.remove("show")
      titles[j].querySelector("img").src = "/assets/images/icon-plus.svg";
    }
    titles[i].parentElement.classList.add("show");
    titles[i].querySelector("img").src = "/assets/images/icon-minus.svg";
  });
}

