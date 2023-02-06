const maskSelect = document.querySelector(".maskSelect");
const calculateBtn = document.querySelector(".calculateBtn");
const ipInput = document.querySelector(".ipInput");

let mask = 1;

const calculateMask = () => {
  const maskMultiplication = 8;
  const octets = ipInput.value.split(".");
  let fulfilledOctets = Math.floor(mask / maskMultiplication);
  let initialOctetValue = 128;
  let octetValue = initialOctetValue;

  for (let i = 0; i < 4; i++) {
    if (i < fulfilledOctets) {
      octets[i] = 255;
    } else {
      if (maskMultiplication * fulfilledOctets >= mask) {
        octets[i] = 0;
      } else {
        for (let j = maskMultiplication * fulfilledOctets; j < mask; j++) {
          octets[i] = octetValue;
          initialOctetValue /= 2;
          octetValue += initialOctetValue;
        }

        fulfilledOctets++;
      }
    }
  }

  console.log({
    mask: `${octets[0]}.${octets[1]}.${octets[2]}.${octets[3]}`,
  });
};

const isSecured = () => {
  let secured = true;
  const octets = ipInput.value.split(".");

  if (octets.length !== 4) secured = false;

  octets.forEach((octet) => {
    if (
      isNaN(octet) ||
      octet.length > 3 ||
      octet.length <= 0 ||
      octet < 0 ||
      octet > 255
    )
      secured = false;
  });

  return secured;
};

calculateBtn.addEventListener("click", () => {
  if (!ipInput.value) return;
  if (!isSecured()) return;

  console.log(`everything is alright m8 :)`);

  calculateMask();
});

maskSelect.addEventListener("change", (e) => {
  mask = Number(e.target.value);
});

document.addEventListener("DOMContentLoaded", () => {
  for (let i = 1; i <= 32; i++) {
    const option = document.createElement("option");
    option.value = i;
    option.innerHTML = i;

    maskSelect.append(option);
  }
});
