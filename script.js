const spreadObjetoButton = document.getElementById('spread-objeto');
const spreadArrayButton = document.getElementById('spread-array');
const resultadoDiv = document.getElementById('resultado');

spreadObjetoButton.addEventListener('click', () => {
    const objeto = { nome: 'João', idade: 30, cidade: 'São Paulo' };
    const spreadObjeto = { ...objeto, pais: 'Brasil' };
    resultadoDiv.innerHTML = `
        <h2>Antes:</h2>
        <pre>${JSON.stringify(objeto, null, 2)}</pre>
        <h2>Depois:</h2>
        <pre>${JSON.stringify(spreadObjeto, null, 2)}</pre>
    `;
});

spreadArrayButton.addEventListener('click', () => {
    const array = [1, 2, 3, 4, 5];
    const spreadArray = [...array, 6, 7, 8];
    resultadoDiv.innerHTML = `
        <h2>Antes:</h2>
        <pre>${JSON.stringify(array, null, 2)}</pre>
        <h2>Depois:</h2>
        <pre>${JSON.stringify(spreadArray, null, 2)}</pre>
    `;
});