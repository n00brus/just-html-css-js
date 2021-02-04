menuOpen = document.querySelectorAll(".header__menu-open");
menuOpen.addEventListener("click", function (event) {});

anchors = document.querySelectorAll("section.works");
hireusAnchor = document.querySelector("#hireUs");
ourWorksAnchor = document.querySelector("#OurWorks");

hireusAnchor.addEventListener("click", function (event) {
  event.preventDefault();
  document.querySelector("section.hiring").scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
});

ourWorksAnchor.addEventListener("click", function (event) {
  event.preventDefault();
  document.querySelector("section.works").scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
});
const commentaries = [
  { text: "asdasd1", image: "url(./img/Warstwa5.png)", author: "John Smith" },
  { text: "asdasd2", image: "url(./img/Warstwa6.png)", author: "John Smith" },
  { text: "asdasd3", image: "url(./img/Warstwa7.png)", author: "John Smith" },
  { text: "asdasd4", image: "url(./img/Warstwa8.png)", author: "John Smith" },
];

let current = 2;
comment__switcher__left = document.querySelector(".comment__arrow-left");
comment = document.querySelector(".comments__center");
comment__switcher__left.addEventListener("click", (event) => {
  if (current <= 0) {
    current = commentaries.length;
  }
  current--;
  rendercomment();
});
comment__switcher__right = document.querySelector(".comment__arrow-right");

comment__switcher__right.addEventListener("click", (event) => {
  if (current >= commentaries.length - 1) {
    current = -1;
  }
  current++;
  rendercomment();
});
function rendercomment() {
  comment.innerHTML = ` <div class="comment__photo"></div>
  <div class="comment__description">${commentaries[current].text}
  </div>
  <div class="comment__author">${commentaries[current].author}</div>`;

  document.querySelector(".comment__photo").style.backgroundImage =
    commentaries[current].image;
}
rendercomment();

(function () {
  teamMember = document.querySelectorAll(".team__notselected");
  teamMemberIndicator = document.querySelectorAll(".team__button");
  teamMember.forEach((member) => {
    member.addEventListener("mouseenter", (event) => {
      let counter = 0;
      searchCounter = 0;
      teamMember.forEach((teammember) => {
        if (teammember == member) {
          searchCounter = counter;
        }
        counter++;
      });
      teamMemberIndicator[searchCounter].style.backgroundColor = "orange";
      teamMemberIndicator[searchCounter].style.width = "1.5rem";
      teamMemberIndicator[searchCounter].style.height = "1.5rem";
    });
    member.addEventListener("mouseleave", (event) => {
      let counter = 0;
      searchCounter = 0;
      teamMember.forEach((teammember) => {
        if (teammember == member) {
          searchCounter = counter;
        }
        counter++;
      });
      teamMemberIndicator[searchCounter].style.backgroundColor = "grey";
      teamMemberIndicator[searchCounter].style.width = "1.2rem";
      teamMemberIndicator[searchCounter].style.height = "1.2rem";
    });
  });
})();
(function () {
  const Hireform = document.querySelector("#Hireform");

  Hireform.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log("do smth");
  });
})();
