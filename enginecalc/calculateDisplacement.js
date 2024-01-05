function calculateEngineDisplacement() {
    const cylinders = parseInt(document.getElementById('cylinders').value);
    const diameter = parseFloat(document.getElementById('diameter').value);
    const stroke = parseFloat(document.getElementById('stroke').value);

    if (isNaN(cylinders) || isNaN(diameter) || isNaN(stroke)) {
        document.getElementById('result').innerHTML = '請輸入有效的數字';
        return;
    }

    const displacement = (Math.PI * Math.pow(diameter / 2, 2) * stroke * cylinders) / 1000;
    document.getElementById('result').innerHTML = `排氣量為 ${displacement.toFixed(2)} 毫升`;
}

function setCarSpecs(cylinders, diameter, stroke) {
    document.getElementById('cylinders').value = cylinders;
    document.getElementById('diameter').value = diameter;
    document.getElementById('stroke').value = stroke;

    calculateEngineDisplacement();
}
