const tabs = document.querySelectorAll(".operations__tab");
const tabContainer = document.querySelector(".btn-tab-container");
const tabContents = document.querySelectorAll(".operation-contents");

// tabs.forEach((t) =>
//   t.addEventListener("click", () => {
//     console.log("TAB");
//     //this way is not a good practice because if we have multiple
//     //copies then we will have t run the loop 200 times which will slow down the page
//     //therfore we use event delegation for best practice..
//   })
// );

// for an event delegation we need to add event handler to the common parent element on
// all the elements that we interested in.

tabContainer.addEventListener("click", function (e) {
  // const clicked = e.target.parentElement; //this does not fix the problem
  const clicked = e.target.closest(".operations__tab");

  if (!clicked) return; //GUARD CLAUSE: mean that we no condition is met return immediately

  // remove active classes
  tabs.forEach((tab) => {
    tab.classList.remove("operation-tab-active");
    tab.classList.remove("bg");
  });
  tabContents.forEach((tabC) =>
    tabC.classList.remove("operation-content-active")
  );

  //activate tab
  clicked.classList.add("operation-tab-active");
  clicked.classList.add("bg");

  //activate content area
  document
    .querySelector(`.operation-contents-${clicked.dataset.tab}`)
    .classList.add("operation-content-active");
});
