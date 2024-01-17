function calculate() {
    var cylinders = parseFloat(document.getElementById('cylinders').value) || 0;
    var diameter = parseFloat(document.getElementById('diameter').value) || 0;
    var stroke = parseFloat(document.getElementById('stroke').value) || 0;

    var newBoreUnit = document.getElementById('selectNewBore').value;
    var newDiameter = parseFloat(document.getElementById('NewDiameter').value) || 0;

    var newStrokeUnit = document.getElementById('selectNewStroke').value;
    var newStroke = parseFloat(document.getElementById('NewStroke').value) || 0;

    var math = 0.0007854; // 用於體積計算的數學常數

    var boreSquare = diameter * diameter;
    var cap = boreSquare * stroke * math * cylinders;

    // 處理新的缸徑和行程
    if (newBoreUnit == 0) {
        if (newDiameter == 0) {
            diameter = diameter;
        } else if (newDiameter > 0) {
            diameter = newDiameter;
        }
    } else if (newBoreUnit == 1) {
        diameter += newDiameter * 0.01 || 0;
    }

    if (newStrokeUnit == 0) {
        stroke += newStroke * 0.01 || 0;
    } else if (newStrokeUnit == 1) {
        if (newStroke == 0) {
            stroke = stroke;
        } else if (newStroke > 0) {
            stroke = newStroke;
        }
    }

    var newBoreSquare = diameter * diameter;
    var newCap = newBoreSquare * stroke * math * cylinders;

    // 顯示結果
    document.getElementById('result').innerText = cap.toFixed(2) + ' cc';
    document.getElementById('newResult').innerText = newCap.toFixed(2) + ' cc';
    document.getElementById('difference').innerText = (newCap / cap).toFixed(2) + ' 倍';
    document.getElementById('differencePercent').innerText = ((newCap - cap) / cap * 100).toFixed(2) + ' %';
    document.getElementById('differenceResult').innerText = (newCap - cap).toFixed(2) + ' cc';
}

function newBoreUnit() {
    var unit = document.getElementById('selectNewBore').value;
    document.getElementById('newBoreUnit').innerText = unit == 0 ? 'mm' : '條';
    calculate();
}

function newStrokeUnit() {
    var unit = document.getElementById('selectNewStroke').value;
    document.getElementById('newStrokeUnit').innerText = unit == 0 ? '條' : 'mm';
    calculate();
}

function setCarSpecs(cylinders, diameter, stroke) {
    document.getElementById('cylinders').value = cylinders;
    document.getElementById('diameter').value = diameter;
    document.getElementById('stroke').value = stroke;
    calculate();
}

function clearInputs() {
    document.getElementById('cylinders').value = '';
    document.getElementById('diameter').value = '';
    document.getElementById('stroke').value = '';
    document.getElementById('NewDiameter').value = '';
    document.getElementById('NewStroke').value = '';
    calculate();
}
