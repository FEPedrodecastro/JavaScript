const form = document.querySelector('form');
const productList = document.getElementById('product');
const qtyInput = document.getElementById('qty');
const list = document.getElementById('list');

form.addEventListener('submit', function (event) {
        event.preventDefault();
        const productValue = productList.value;
        const qtyValue = qtyInput.value;
        const newli = document.createElement('li');
        newli.innerText = `${qtyValue} ${productValue} `;
        list.append(newli);
        form.reset();
});