function calculateEngineDisplacement() {
    const cylinders = parseInt(document.getElementById('cylinders').value);
    const diameter = parseFloat(document.getElementById('diameter').value);
    const stroke = parseFloat(document.getElementById('stroke').value);

    if (isNaN(cylinders) || isNaN(diameter) || isNaN(stroke)) {
        document.getElementById('result').innerHTML = '請輸入有效的數字';
        return;
    }

    const displacement = (Math.PI * Math.pow(diameter / 2, 2) * stroke * cylinders) / 1000;
    document.getElementById('result').innerHTML = ` ${displacement.toFixed(2)} cc`;
}

function setCarSpecs(cylinders, diameter, stroke) {
    document.getElementById('cylinders').value = cylinders;
    document.getElementById('diameter').value = diameter;
    document.getElementById('stroke').value = stroke;

    calculateEngineDisplacement();
}


function clearInputs() {
    $('#cylinders').val('');
    $('#diameter').val('');
    $('#stroke').val('');
    $('#result').text('');
}

function newBoreUnit() {
    const selectNewBore = parseInt(document.getElementById('selectNewBore').value);
    if (selectNewBore === 0) {
        $('#newBoreUnit').text('mm');
    } else if (selectNewBore === 1) {
        $('#newBoreUnit').text('條');
    }
}

function newStrokeUnit() {
    const selectNewStroke = parseInt(document.getElementById('selectNewStroke').value);
    if (selectNewStroke === 0) {
        $('#newStrokeUnit').text('條');
    } else if (selectNewStroke === 1) {
        $('#newStrokeUnit').text('mm');
    }
}