// slide image
const sliderItems = document.querySelectorAll(".slider-item");

let sliderActive = 1;

if (sliderItems) {
  sliderItems.forEach((slider, index) => {
    if (index === 0) {
      slider.setAttribute("data-show", "show");
    } else {
      slider.setAttribute("data-show", "hidden");
    }
  });

  setInterval(() => {
    sliderItems.forEach((slider, index) => {
      if (sliderActive === index) {
        slider.setAttribute("data-show", "show");
      } else {
        slider.setAttribute("data-show", "hidden");
      }
    });

    if (sliderActive === sliderItems.length - 1) {
      sliderActive = 0;
    } else {
      sliderActive++;
    }
  }, 4000);
}

// nama
function replaceName() {
  let name = prompt("Siapakah nama anda?", "");
  document.getElementById("name").innerHTML = name;
}

replaceName();

// form
function validateForm() {
  const name = document.forms["message-form"]["full-name"].value;
  const birthDate = document.forms["message-form"]["birth-date"].value;
  const gender = document.forms["message-form"]["gender"].value;
  const messages = document.forms["message-form"]["messages"].value;

  if (name == "" || birthDate == "" || gender == "" || messages == "") {
    alert("Tidak boleh ada yang kosong!");
    return false;
  }

  setSenderUI(name, birthDate, gender, messages);
  return false;
}

function setSenderUI(name, birthDate, gender, messages) {
  document.getElementById("sender-full-name").innerHTML = name;
  document.getElementById("sender-birth-date").innerHTML = birthDate;
  document.getElementById("sender-gender").innerHTML = gender;
  document.getElementById("sender-messages").innerHTML = messages;
}
