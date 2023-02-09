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
  let fulfilledOctets = Math.floor(mask / maskMultiplication);
  let initialOctetValue = 255;
  let jumps = 0;

  for (let i = 0; i < 4; i++) {
    if (i < fulfilledOctets) {
      octets[i] = 0;
      continue;
    } else {
      if (maskMultiplication * fulfilledOctets >= mask) {
        octets[i] = 255;
      } else {
        for (let k = maskMultiplication * fulfilledOctets; k < mask; k++) {
          initialOctetValue /= 2;
          jumps = Math.ceil(initialOctetValue);
        }

        for (let j = jumps; j <= 255; j += jumps) {
          octets[i] = 255 - j;
        }

        fulfilledOctets++;
      }
    }
  }

  return `${octets[0]}.${octets[1]}.${octets[2]}.${octets[3]}`;
};

// DONE
const calculateBroadcast = () => {
  const octets = ipInput.value.split(".");
  let fulfilledOctets = Math.floor(mask / maskMultiplication);
  let initialOctetValue = 255;
  let jumps = 0;

  for (let i = 0; i < 4; i++) {
    if (i < fulfilledOctets) {
      continue;
    } else {
      if (maskMultiplication * fulfilledOctets >= mask) {
        octets[i] = 255;
      } else {
        for (let k = maskMultiplication * fulfilledOctets; k < mask; k++) {
          initialOctetValue /= 2;
          jumps = Math.ceil(initialOctetValue);
        }

        for (let j = jumps - 1; j <= 255; j += jumps) {
          if (octets[i] < jumps) {
            octets[i] = j;
            break;
          }

          if (octets[i] <= j && octets[i] < j + jumps) {
            octets[i] = j;
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
const calculateFirstHost = () => {
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
          if (octets[i] < jumps) {
            octets[i] = 0;
            break;
          }

          if (octets[i] > j && octets[i] < j + jumps) {
            octets[i] = j;
            break;
          }
        }

        fulfilledOctets++;
      }
    }
  }

  return `${octets[0]}.${octets[1]}.${octets[2]}.${parseInt(octets[3]) + 1}`;
};

// DONE
const calculateLastHost = () => {
  const octets = ipInput.value.split(".");
  let fulfilledOctets = Math.floor(mask / maskMultiplication);
  let initialOctetValue = 255;
  let jumps = 0;

  for (let i = 0; i < 4; i++) {
    if (i < fulfilledOctets) {
      continue;
    } else {
      if (maskMultiplication * fulfilledOctets >= mask) {
        octets[i] = 255;
      } else {
        for (let k = maskMultiplication * fulfilledOctets; k < mask; k++) {
          initialOctetValue /= 2;
          jumps = Math.ceil(initialOctetValue);
        }

        for (let j = jumps; j <= 255; j += jumps) {
          // if (octets[i] < jumps) {
          //   octets[i] = 255 - 1;
          //   break;
          // }

          if (octets[i] <= j && octets[i] <= j + jumps) {
            octets[i] = j - 1;
            break;
          } else if (octets[i] < j && octets[i] <= j + jumps) {
            octets[i] = j + jumps;
            break;
          }
        }

        fulfilledOctets++;
      }
    }
  }

  return `${octets[0]}.${octets[1]}.${octets[2]}.${
    octets[3] > 0 ? octets[3] : 1
  }`;
};

// DONE
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

// DONE
const build = () => {
  const numberOfHosts = Math.pow(2, 32 - mask) - 2;

  const info = {
    ip_address: ipInput.value,
    mask: calculateMask(),
    wildcard: calculateWildcard(),
    network: calculateNetwork(),
    broadcast: calculateBroadcast(),
    first_host: calculateFirstHost(),
    last_host: calculateLastHost(),
    number_of_hosts: numberOfHosts < 0 ? 1 : numberOfHosts,
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
    pKey.innerHTML = `${k.replaceAll("_", " ")}`;

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
