function calculateInterest() {
    let principal = document.getElementById("principal").value;
    let rate = document.getElementById("rate").value;
    let time = document.getElementById("time").value;
    let resultBox = document.getElementById("result");

    if (principal === "" || rate === "" || time === "") {
        resultBox.innerHTML = "⚠️ Please fill all fields!";
        resultBox.classList.add("show");
        return;
    }

    principal = parseFloat(principal);
    rate = parseFloat(rate);
    time = parseFloat(time);

    let simpleInterest = (principal * rate * time) / 100;
    let totalAmount = principal + simpleInterest;

    resultBox.innerHTML = `
        ✅ Simple Interest = ₹ ${simpleInterest.toFixed(2)} <br>
        💵 Total Amount = ₹ ${totalAmount.toFixed(2)} <br>
        🔖 Developed by <b>Namoj Periakumar</b>
    `;

    // Reveal with animation
    resultBox.classList.remove("hidden");
    setTimeout(() => {
        resultBox.classList.add("show");
    }, 50);
}