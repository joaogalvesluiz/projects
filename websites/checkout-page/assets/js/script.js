const form = document.querySelector('#form');
const email = document.querySelector('.input-email');
const phone = document.querySelector('.input-phone');
const personalName = document.querySelector('.input-name');
const address = document.querySelector('.input-address');
const city = document.querySelector('.input-city');
const country = document.querySelector('.input-country');
const postalCode = document.querySelector('.input-postal');


const addProduct = () => {
  let qtdItem =1;

  
  const moreItem = document.querySelector('.moreItemD');
  const lessItem = document.querySelector('.lessItemD');
  const numberItem = document.querySelector('.number-itemD');
  
  moreItem.addEventListener("click", () => {
    qtdItem++; 
    numberItem.innerHTML = qtdItem;
  });
  
  lessItem.addEventListener("click", () => {
    if( qtdItem > 1){
      qtdItem--; 
      numberItem.innerHTML = qtdItem;
    };
  });
};

addProduct();

form.addEventListener("submit", (event) => {

  event.preventDefault();

  checkInputs();
});

function checkInputs() {

  const emailValue = email.value.trim();
  const phoneValue = phone.value.trim();
  const nameValue = personalName.value.trim();
  const addressValue = address.value.trim();
  const cityValue = city.value.trim();
  const countryValue = country.value.trim();
  const postalCodeValue = postalCode.value.trim();

  if (emailValue != '') {
    if (phoneValue != '') {
      if (nameValue != '') {
        if (addressValue != '') {
          if (cityValue != '') {
            if (countryValue != '') {
              if (postalCodeValue != '') {

                alert("Email sended.");
                window.location.reload(true);
              } 
            } 
          } 
        } 
      } 
    } 
  } 
}