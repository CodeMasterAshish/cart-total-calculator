function calculateTotal() {
    let price1 = Number(document.getElementById("price1").value);
    let price2 = Number(document.getElementById("price2").value);
    let price3 = Number(document.getElementById("price3").value);

    let total = price1 + price2 + price3;

    document.getElementById("result").textContent =
        `Total: ₹${total}`;
}