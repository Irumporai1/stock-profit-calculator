var costPrice = document.querySelector('#purchaseprice');

var quantity = document.querySelector('#noofstocks');

var sellPrice = document.querySelector('#currentprice');

var opt = document.querySelector('.output');

var btn = document.querySelector('#chk-btn');

var error = document.querySelector('.error');


btn.addEventListener('click', (e) => {

    e.preventDefault();

    noerror();

    let cp = Number(costPrice.value);
    let quant = Number(quantity.value);
    let sp = Number(sellPrice.value);


    if (cp < 0 || quant < 0 || sp < 0) {
        showError();
        return;
    }

    if (cp > 0 && sp > 0 && quant > 0) {
        if (sp > cp) {
            let profit = ((sp - cp) * quant).toFixed(2);

            let percent = ((profit * 100) / cp).toFixed(2);

            opt.innerHTML = `<p>You gained ${percent}%.Your total profit is Rs.${profit}</p>`;


        }
        else if (cp > sp) {
            let loss = ((cp - sp) * quant).toFixed(2);

            let percent = ((loss * 100) / cp).toFixed(2);

            opt.innerHTML = `<p>You lost ${percent}%.Your total loss is Rs.${loss}</p>`;

        }
        else {
            opt.innerHTML = `No Profit and No Loss`;
        }
    }
    else {
        opt.innerHTML = `Values must be greater than zero`;
    }

    opt.style.display = "block";

});

function noerror() {
    error.style.display = 'none';
}

function showError() {
    error.style.display = "block";
}