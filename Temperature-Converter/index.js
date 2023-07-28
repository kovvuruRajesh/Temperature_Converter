window.onload = () => {
  let from = document.getElementById("from");
  let to = document.getElementById("to");
  let value1 = document.getElementById("value1");
  let value2 = document.getElementById("value2");
  let btn = document.getElementById("convert");

  value1.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      btn.click();
    }
  });

  btn.addEventListener("click", () => {
    if (!value1.value) {
      alert("Please input a value");
      return;
    }

    let checkSelect1 = from.value === "" && to.value === "";
    let checkSelect2 = from.value === "" || to.value === "";
    if (checkSelect1 || checkSelect2) {
      alert("Please pick your selection");
      return;
    }

    let result;

    if (from.value === "celsius" && to.value === "k") {
      result = parseInt(value1.value) + 273;
    }

    else if (from.value === "celsius" && to.value === "°F") {
      result = (parseInt(value1.value) * 9 / 5) + 32;
    }

    else if (from.value === "celsius" && to.value === "°c") {
      result = value1.value;
    }

    else if (from.value === "kelvin" && to.value === "°c") {
      result = parseInt(value1.value) - 273;
    }

    else if (from.value === "kelvin" && to.value === "°F") {
      result = (((parseInt(value1.value) - 273.15) * 9 / 5) + 32).toFixed(2);
    }

    else if (from.value === "fahrenheit" && to.value === "°c") {
      result = ((parseInt(value1.value) - 32) * 5 / 9).toFixed(2);
    }

    else if (from.value === "fahrenheit" && to.value === "k") {
      let tempInKelvin = (((parseInt(value1.value) - 32) * 5 / 9) + 273.15).toFixed(3);
      result = tempInKelvin.endsWith("0") ? tempInKelvin.slice(0, -1) : tempInKelvin;
    }

    let checkOne = from.value === "celsius" && to.value === "°c";
    let checkTwo = from.value === "kelvin" && to.value === "k";
    let checkThree = from.value === "fahrenheit" && to.value === "°F";

    if (checkOne || checkTwo || checkThree) {
      value2.value = value1.value + to.value;
    } else {

      value2.value = result + to.value;
    }
  });
};
