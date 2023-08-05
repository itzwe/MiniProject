const result = document.querySelector(".result");
const reset = document.querySelector(".reset");
const button = document.querySelectorAll("input[type=button]");
const result_box = document.querySelector(".input_box");

let data1 = "";
let data2 = "";
let op = "";

button.forEach((item, index) => {
  item.addEventListener("click", (e) => {
    const numValue = +item.value;
    if (!isNaN(numValue)) {
      result_box.value += e.target.value;
    }
    if (isNaN(numValue) && item.value !== "C" && item.value !== "=") {
      data1 = result_box.value;
      result_box.value = "";
      op = item.value;
      console.log(op);
    }
    data2 = result_box.value;
  });
});


result.addEventListener("click", () => {
  if (op === "+") {
    result_box.value = +data1 + +data2;
    data1 = result_box.value;
  }
  if (op === "-") {
    result_box.value = +data1 - +data2;
    data1 = result_box.value;
  }
  if (op === "*") {
    result_box.value = +data1 * +data2;
    data1 = result_box.value;
  }
  if (op === "/") {
    result_box.value = +data1 / +data2;
    data1 = result_box.value;
  }
});

reset.addEventListener("click", () => {
  result_box.value = "";
  data1 = "";
  data2 = "";
  op = "";
});
