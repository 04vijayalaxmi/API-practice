document.getElementById('loan-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const amount = parseFloat(document.getElementById('amount').value);
    const apr = parseFloat(document.getElementById('apr').value) / 100 / 12;
    const years = parseFloat(document.getElementById('years').value) * 12;

    const x = Math.pow(1 + apr, years);
    const monthly = (amount * x * apr) / (x - 1);

    if (isFinite(monthly)) {
        document.getElementById('monthly-payment').textContent = `Monthly Payment: ₹${monthly.toFixed(2)}`;
    } else {
        document.getElementById('monthly-payment').textContent = 'Please check your inputs.';
    }
});
