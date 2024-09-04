function show_result() {
    let K = parseFloat(document.getElementById('K').value) || 0;
    let M = parseFloat(document.getElementById('M').value) || 0;
    let P = parseFloat(document.getElementById('P').value) || 0;
    let C = parseFloat(document.getElementById('C').value) || 0;
    let B = parseFloat(document.getElementById('B').value) || 0;
    let H = parseFloat(document.getElementById('H').value) || 0;
    let E = parseFloat(document.getElementById('E').value) || 0;
    let ES = parseFloat(document.getElementById('ES').value) || 0;
    let G = parseFloat(document.getElementById('G').value) || 0;
    let Ma = parseFloat(document.getElementById('Ma').value) || 0;

    let total = K + M + P + C + B + H + (E - 25) + ES + G + Ma ;

    document.getElementById('total').innerText = total;

    let mention;
    if (total >= 416 && total <= 470) {
        mention = 'ល្អ';
    } else if (total >= 338 && total <= 415) {
        mention = 'ល្អបង្គួរ';
    } else if (total >= 260 && total <= 337) {
        mention = 'មធ្យម';
   } else if (total < 259) {
        mention = 'ខ្សោយ';
    }

    document.getElementById('mention').innerText = mention;

    let result = total >= 259 ? 'ជាប់' : 'ធ្លាក់';
    document.getElementById('final_result').innerText = result;
}
