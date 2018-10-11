const count = document.getElementById("course1")

console.log(count);

const listItems = document.getElementsByTagName('td').values

console.log(listItems);

// Opdracht 1:
function opdracht1() {
    const list = document.getElementsByTagName('tr');
    
    let gradesArray = [];
    let gradesArraySum = 0;
    
    for (let i = 0; i < list.length; i++) {
        let listItem = list[i];
        let getGrade = listItem.lastElementChild.innerText;
        let parsedValue = parseFloat(getGrade);
        let generateArray = gradesArray.push(parsedValue);
        let averageGrade = gradesArraySum += gradesArray[i];
    };
    
    let overallGrade = gradesArraySum / list.length;
    const table = document.getElementById('table');
    
    let row = table.insertRow(list.length);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    
    cell1.innerText = "Gemiddelde cijfer";
    cell2.innerText = overallGrade.toFixed(1);
    }
    opdracht1();
    
    // Ordracht 2:
    function colorChange() {
        let lists = document.getElementsByTagName('li');
        
        for (let list in lists) {
            if (list % 2 == 0) {
                lists[list].classList.add('colorChange');
            }
        }
    }
    
    colorChange();
    




