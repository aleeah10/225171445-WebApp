function changeBackgroundColor() {
    const body = document.body;
    const table = document.getElementById('sampleTable');


    if (body.style.backgroundColor === 'black') {
        body.style.backgroundColor = 'white';
        body.style.color = 'black'
        updateTextColors('black')
        updateTableBorderColor('black');
    } else {
        body.style.backgroundColor = 'black';
        body.style.color = 'white'
        updateTextColors('white')
        updateTableBorderColor('white');
    }
}

function updateTextColors(textColor) {
    const headers = document.querySelectorAll('h1,h2,h3, p');
    document.body.style.color = textColor;

    headers.forEach(header => {
        header.style.color = textColor;
    });
}

function updateTableBorderColor(borderColor) {
    const table = document.getElementById('sampleTable');
    const tableCells = document.querySelectorAll('#sampleTable th, #sampleTable td');
    
    table.style.borderColor = borderColor;

    tableCells.forEach(cell => {
        cell.style.border = '1px solid ${borderColor}';
    });
}