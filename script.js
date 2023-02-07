const maskSelect = document.querySelector(".maskSelect");
const calculateBtn = document.querySelector(".calculateBtn");
const ipInput = document.querySelector(".ipInput");
const infoContainer = document.querySelector(".infoContainer");

const maskMultiplication = 8;
let mask = 24;

// DONE
const calculateMask = () => {
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

  return `${octets[0]}.${octets[1]}.${octets[2]}.${octets[3]}`;
};

// DONE
const calculateNetwork = () => {
  const octets = ipInput.value.split(".");
  let fulfilledOctets = Math.floor(mask / maskMultiplication);
  let initialOctetValue = 255;
  let jumps = 0;

  for (let i = 0; i < 4; i++) {
    if (i < fulfilledOctets) {
      continue;
    } else {
      if (maskMultiplication * fulfilledOctets >= mask) {
        octets[i] = 0;
      } else {
        for (let k = maskMultiplication * fulfilledOctets; k < mask; k++) {
          initialOctetValue /= 2;
          jumps = Math.ceil(initialOctetValue);
        }

        for (let j = jumps; j <= 255; j += jumps) {
          if (octets[i] > j && octets[i] < j + jumps) {
            octets[i] = j;
            break;
          }

          if (octets[i] < jumps) {
            octets[i] = 0;
            break;
          }
        }

        fulfilledOctets++;
      }
    }
  }

  return `${octets[0]}.${octets[1]}.${octets[2]}.${octets[3]}`;
};

// DONE
const calculateWildcard = () => {
  const octets = ipInput.value.split(".");

  for (let i = 0; i < 4; i++) {
    if (maskMultiplication * (i + 1) <= mask) {
      octets[i] = 0;
    } else {
      octets[i] = 255;
    }
  }

  return `${octets[0]}.${octets[1]}.${octets[2]}.${octets[3]}`;
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

const build = () => {
  const info = {
    ipAddress: ipInput.value,
    mask: calculateMask(),
    network: calculateNetwork(),
    wildcard: calculateWildcard(),
  };

  let i = 0;

  infoContainer.innerHTML = "";
  for (const [k, v] of Object.entries(info)) {
    const infoBox = document.createElement("div");
    infoBox.classList.add("infoBox");
    infoBox.addEventListener("click", () => {
      navigator.clipboard.writeText(v);

      infoBox.classList.add("copied");
      setTimeout(() => {
        infoBox.classList.remove("copied");
      }, 1500);
    });
    infoBox.style.animation = `200ms ease-in-out ${
      i * 40
    }ms forwards slideInTop`;

    const pKey = document.createElement("p");
    pKey.innerHTML = k;

    const spanValue = document.createElement("span");
    spanValue.classList.add("value");
    spanValue.innerHTML = v;

    infoBox.append(pKey, spanValue);

    infoContainer.append(infoBox);
    i++;
  }
};

calculateBtn.addEventListener("click", () => {
  if (!ipInput.value) return;
  if (!isSecured()) return;

  build();
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

  maskSelect.value = mask;
});
