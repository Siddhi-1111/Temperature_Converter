function convertTemperature() {
    const input = document.getElementById('temperatureInput').value.trim();
    const unit = document.getElementById('unitSelect').value;
    const resultDiv = document.getElementById('result');
    const errorDiv = document.getElementById('errorMessage');

    resultDiv.textContent = "";
    errorDiv.textContent = "";

    if (input === "" || isNaN(input)) {
        errorDiv.textContent = "Please enter a valid numeric temperature.";
        return;
    }

    const temperature = parseFloat(input);
    let resultText = "";

    if (unit === "C") {
        const toF = (temperature * 9/5) + 32;
        const toK = temperature + 273.15;
        resultText = `${temperature}°C = ${toF.toFixed(2)}°F | ${toK.toFixed(2)}K`;
    } else if (unit === "F") {
        const toC = (temperature - 32) * 5/9;
        const toK = toC + 273.15;
        resultText = `${temperature}°F = ${toC.toFixed(2)}°C | ${toK.toFixed(2)}K`;
    } else if (unit === "K") {
        const toC = temperature - 273.15;
        const toF = (toC * 9/5) + 32;
        resultText = `${temperature}K = ${toC.toFixed(2)}°C | ${toF.toFixed(2)}°F`;
    }

    resultDiv.textContent = resultText;
}
