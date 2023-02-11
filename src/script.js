import { build, mask, setMask } from "./build";
import "./styles/template.css";

const maskSelect = document.querySelector(".maskSelect");
const calculateBtn = document.querySelector(".calculateBtn");

const prepare = () => {
  for (let i = 1; i <= 32; i++) {
    const option = document.createElement("option");
    option.value = i;
    option.innerHTML = i;

    maskSelect.append(option);
  }

  maskSelect.value = mask;
};

calculateBtn.addEventListener("click", build);

maskSelect.addEventListener("change", (e) => setMask(e.target.value));

document.addEventListener("DOMContentLoaded", prepare);
