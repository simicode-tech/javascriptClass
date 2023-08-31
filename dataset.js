const user = document.querySelector("#user");
console.log(user.dataset.id);
console.log(user.dataset.user);
user.dataset.dateOfBirth = 22;
console.log(user.dataset.dateOfBirth);

const filterButtons = document.querySelectorAll(".filter-button");
const filterItems = document.querySelectorAll(".filterable-item");

filterButtons.forEach((button) => {
  //   console.log(button);
  button.addEventListener("click", () => {
    const filterValue = button.dataset.filter;
    filterItems.forEach((item) => {
      if (filterValue === item.dataset.filter || filterValue === "all") {
        item.classList.remove("hidden");
      } else {
        item.classList.add("hidden");
      }
    });
  });
});
