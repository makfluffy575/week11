
//take the elements from html
const coatPrice = document.getElementById("coat-price");
console.log(coatPrice);

const sneakersPrice = document.getElementById("sneakers-price");
console.log(sneakersPrice);

const tShirtPrice = document.getElementById("t-shirt-price");
console.log(sneakersPrice);

const bagPrice = document.getElementById("bag-price");
console.log(sneakersPrice);

const btn = document.querySelector(".btn-promo");
console.log(btn);

const totalSum = document.querySelector(".total-sum");
console.log(totalSum);


//get init item prices
const coatPriceValue = 9999.0;

const sneakersPriceValue = 13990.0;

const tShirtPriceValue = 3890.0;

const bagPriceValue = 29990.0;

const currency = " руб.";

coatPrice.textContent = coatPriceValue.toLocaleString("ru-RU") + currency;

sneakersPrice.textContent =
  sneakersPriceValue.toLocaleString("ru-RU") + currency;

tShirtPrice.textContent =
  tShirtPriceValue.toLocaleString("ru-RU") + currency;

bagPrice.textContent = bagPriceValue.toLocaleString("ru-RU") + currency;


//get init basket value
const getTotalSum = () => {
  return (
    (
      coatPriceValue +
      sneakersPriceValue +
      tShirtPriceValue +
      bagPriceValue
    ).toLocaleString("ru-RU") + currency
  );
};

console.log(getTotalSum());

totalSum.textContent = getTotalSum();


//apply promo
const applyPromo = () => {
  
  //switch off btn
  btn.setAttribute("disabled", true);

  //get discount value
  const discount = 20 / 100;

  //get discount of init item prices
  const getDiscountPrice = (initPrice, discount) =>
    initPrice - initPrice * discount;

  const coatNewPrice = getDiscountPrice(coatPriceValue, discount);

  const sneakersNewPrice = getDiscountPrice(sneakersPriceValue, discount);

  const tShirtNewPrice = getDiscountPrice(tShirtPriceValue, discount);

  const bagNewPrice = getDiscountPrice(bagPriceValue, discount);

  //add currency to new prices
  const coatNewPriceWithCurrency =
    coatNewPrice.toLocaleString("ru-RU") + currency;

  const sneakersNewPriceWithCurrency =
    sneakersNewPrice.toLocaleString("ru-RU") + currency;

  const tShirtNewPriceWithCurrency =
    tShirtNewPrice.toLocaleString("ru-RU") + currency;

  const bagNewPriceWithCurrency =
    bagNewPrice.toLocaleString("ru-RU") + currency;

  //set new value of item prices in elements

  coatPrice.textContent = coatNewPriceWithCurrency;

  sneakersPrice.textContent = sneakersNewPriceWithCurrency;

  tShirtPrice.textContent = tShirtNewPriceWithCurrency;

  bagPrice.textContent = bagNewPriceWithCurrency;

  //get new total sum
  const getTotalSum = () => {
    return (
      (
        coatNewPrice +
        sneakersNewPrice +
        tShirtNewPrice +
        bagNewPrice
      ).toLocaleString("ru-RU") + currency
    );
  };

  console.log(getTotalSum());

  const totalSumValue = getTotalSum();

  totalSum.textContent = totalSumValue;
};
