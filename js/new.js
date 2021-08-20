
//Memory
document.getElementById('memory-first-btn').addEventListener('click', function () {
    const memoryFirstCost = document.getElementById('memory-cost');
    const firstMemoriCost = 0;
    memoryFirstCost.innerText = firstMemoriCost;

    //
    totalPrice()

})
document.getElementById('memory-second-btn').addEventListener('click', function () {
    const memoryFirstCost = document.getElementById('memory-cost');
    const firstMemoriCost = 180;
    memoryFirstCost.innerText = firstMemoriCost;

    //
    totalPrice()
})

//storage

document.getElementById('storage-first-btn').addEventListener('click', function () {
    const storageCost = document.getElementById('storage-cost');
    const newSotrageCost = 0;
    storageCost.innerText = newSotrageCost;

    //
    totalPrice()
})
document.getElementById('storage-second-btn').addEventListener('click', function () {
    const storageCost = document.getElementById('storage-cost');
    const newSotrageCost = 100;
    storageCost.innerText = newSotrageCost;

    //
    totalPrice()
})
document.getElementById('storage-third-btn').addEventListener('click', function () {
    const storageCost = document.getElementById('storage-cost');
    const newSotrageCost = 180;
    storageCost.innerText = newSotrageCost;

    //
    totalPrice()
})




document.getElementById('free-delivery').addEventListener('click', function () {
    const deliveryCharge = document.getElementById('delivery-charge');
    const delivery = 0;
    deliveryCharge.innerText = delivery;

    //
    totalPrice()
})
document.getElementById('charge-delivery').addEventListener('click', function () {
    const deliveryCharge = document.getElementById('delivery-charge');
    const delivery = 20;
    deliveryCharge.innerText = delivery;

    //
    totalPrice()
})



function totalPrice() {
    //bestPrice
    const bestPrice = document.getElementById('best-price');
    const bestPriceText = parseInt(bestPrice.innerText)
    //MemoryPrice
    const memory = document.getElementById('memory-cost');
    const memoryText = parseInt(memory.innerText);
    //Storage Price
    const storage = document.getElementById('storage-cost');
    const storageText = parseInt(storage.innerText)
    //Delivery Charge
    const delivery = document.getElementById('delivery-charge');
    const deliveryText = parseInt(delivery.innerText);
    //total amount
    const totalAmount = document.getElementById('total-amount');
    //total plus
    const price = bestPriceText + memoryText + + storageText + deliveryText;
    // console.log(typeof (price))
    totalAmount.innerText = price
    //mainAmount
    const mainAmount = document.getElementById('MainAmount');
    mainAmount.innerText = price

}

//Promo code

function discound() {
    const promoInput = document.getElementById('promo-input');
    const totalAmount = document.getElementById('total-amount').innerText;
    const mainAmount = document.getElementById('MainAmount')
    if (promoInput.value == 's') {
        const a = totalAmount / 20;
        mainAmount.innerText = totalAmount - a
    }
    promoInput.value = ''

}

