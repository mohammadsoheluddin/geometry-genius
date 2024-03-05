function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputFieldValue = parseFloat(inputField.value);
    inputField.value = '';
    return inputFieldValue;
}

function triangleCalculate() {
    const base = getInputValue('triangle-base-field');
    const height = getInputValue('triangle-height-field');
    const area = (0.5 * base * height).toFixed(2);
    if (isNaN(area)) {
        alert('Insert a valid number')
        return;
    } else {
        const triangleArea = document.getElementById('triangle-area');
        triangleArea.innerText = area;
    }
}

function rectangularCalculate() {
    const width = getInputValue('width-field');
    const length = getInputValue('length-field');
    const area = (width * length).toFixed(2);
    if (isNaN(area)) {
        alert('Insert a valid number')
        return;
    } else {
        const rectangularArea = document.getElementById('rectangular-area');
        rectangularArea.innerText = area;
    }
}

function parallelogramCalculate() {
    const base = getInputValue('parallelogram-base-field');
    const height = getInputValue('parallelogram-height-field');
    const area = (base * height).toFixed(2);
    if (isNaN(area)) {
        alert('Insert a valid number')
        return;
    } else {
        const parallelogramArea = document.getElementById('parallelogram-area');
        parallelogramArea.innerText = area;
    }
}

function rhombusCalculate() {
    const diagonal1 = getInputValue('rhombus-diagonals-1-field');
    const diagonal2 = getInputValue('rhombus-diagonals-2-field');
    const area = (0.5 * diagonal1 * diagonal2).toFixed(2);
    if (isNaN(area)) {
        alert('Insert a valid number')
        return;
    } else {
        const rhombusArea = document.getElementById('rhombus-area');
        rhombusArea.innerText = area;
    }
}

function pentagonCalculate() {
    const p = getInputValue('pentagon-p-field');
    const base = getInputValue('pentagon-base-field');
    const area = (0.5 * p * base).toFixed(2);
    if (isNaN(area)) {
        alert('Insert a valid number')
        return;
    } else {
        const pentagonArea = document.getElementById('pentagon-area');
        pentagonArea.innerText = area;
    }
}

function ellipseCalculate() {
    const a = getInputValue('ellipse-a-field');
    const b = getInputValue('ellipse-b-field');
    const area = (3.14 * a * b).toFixed(2);
    if (isNaN(area)) {
        alert('Insert a valid number')
        return;
    } else {
        const ellipseArea = document.getElementById('ellipse-area');
        ellipseArea.innerText = area;
    }
}
