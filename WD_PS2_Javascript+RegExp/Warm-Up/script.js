const buttonForTask1 = document.getElementById('sumTwoNumbers');
const resultOfSumming = document.getElementById('task1');
const maxNumber = 99999999;
const numbersForValidation = [2, 3, 7];

buttonForTask1.addEventListener('click', sumTwoNumbers);

function sumTwoNumbers() {
    let min = +document.getElementById('firstNumber').value;
    let max = +document.getElementById('secondNumber').value;
    if (min > max) {
        [min, max] = [max, min];
    }
    if (min < -maxNumber || max > maxNumber) {
        resultOfSumming.innerHTML = "Input number is so big. Please, enter numbers from -"
            + maxNumber + " to " + maxNumber;
    } else {
        let sum = 0;
        for (let i = min; i <= max; i++) {
            if (numbersForValidation.includes(Math.abs(i % 10))) {
                sum += i;
            }
        }
        resultOfSumming.innerHTML = "Result of summing: " + sum;
    }
}

const buttonForTask2_1 = document.getElementById('countTimeInSeconds');
const resultOfCountingSeconds = document.getElementById('task2_1');
const secondsInHour = 3600;
const secondsInMinute = 60;

buttonForTask2_1.addEventListener('click', countSeconds);

function countSeconds() {
    let seconds = +document.getElementById('seconds').value;
    if (seconds < 0) {
        resultOfCountingSeconds.innerHTML = 'Invalid input, please try again!';
    } else {
        let hours = Math.floor(seconds / secondsInHour);
        let rest = seconds % secondsInHour;
        let minutes = Math.floor(rest / secondsInMinute);
        seconds = rest % secondsInMinute;
        hours = hours.toString().padStart(2, '0');
        minutes = minutes.toString().padStart(2, '0');
        seconds = seconds.toString().padStart(2, '0');
        resultOfCountingSeconds.innerHTML = "The result is: " +
            hours + ":" + minutes + ":" + seconds;
    }
}

const buttonForTask2_2 = document.getElementById('countSecondsInTime');
const resultOfCountingTime = document.getElementById('task2_2');

buttonForTask2_2.addEventListener('click', countTime);

function countTime() {
    let inputString = document.getElementById('time').value;
    let arrayOfStrings = inputString.split(":");
    let hours = +arrayOfStrings[0];
    let minutes = +arrayOfStrings[1];
    let seconds = +arrayOfStrings[2];
    resultOfCountingTime.innerHTML = "The result is: " +
        (hours * secondsInHour + minutes * secondsInMinute + seconds);
}

const buttonForTask3 = document.getElementById('countDateTimeDiff');
const resultOfCountingDifferenceOfTime = document.getElementById('task3');

buttonForTask3.addEventListener('click', countDateTime);

function countDateTime() {
    let firstDateTime = new Date(document.getElementById("firstDateTime").value);
    let secondDateTime = new Date(document.getElementById("secondDateTime").value);

    let result = interval(firstDateTime, secondDateTime);
    resultOfCountingDifferenceOfTime.innerHTML = "The result is: " +
        result.years + " years " +
        result.months + " months " +
        result.days + " days " +
        result.hours + " hours " +
        result.minutes + " minutes ";
}

function interval(date1, date2) {
    if (date1 > date2) {
        [date1, date2] = [date2, date1]
    }
    let result = {
        years: date2.getFullYear() - date1.getFullYear(),
        months: date2.getMonth() - date1.getMonth(),
        days: date2.getDate() - date1.getDate(),
        hours: date2.getHours() - date1.getHours(),
        minutes: date2.getMinutes() - date1.getMinutes()
    };
    if (result.minutes < 0) {
        result.hours--;
        result.minutes += 60;
    }
    if (result.hours < 0) {
        result.days--;
        result.hours += 24;
    }
    if (result.days < 0) {
        result.months--;
        let copy = new Date(date1.getTime());
        copy.setDate(32);
        result.days = 32 - date1.getDate() - copy.getDate() + date2.getDate();
    }
    if (result.months < 0) {
        result.years--;
        result.months += 12;
    }
    return result;
}

const buttonForTask4 = document.getElementById('createChessBoard');
const resultOfCreateChessBoard = document.getElementById('task4');
const maxSize = 20, sizeOfCell = 50;

buttonForTask4.addEventListener('click', createChessBoard);


function createChessBoard() {
    let boardWidth = document.getElementById('widthOfBoard').value;
    let boardHeight = document.getElementById('heightOfBoard').value;
    let chessBoard = resultOfCreateChessBoard;
    if (boardWidth > maxSize || boardHeight > maxSize) {
        resultOfCreateChessBoard.innerHTML = 'The sizes of the chessboard are ' +
            'to large! Max size is ' + maxSize + '.';
    } else {
        chessBoard.style.width = (sizeOfCell * boardWidth) + 'px';
        chessBoard.style.height = (sizeOfCell * boardHeight) + 'px';
        let wrapper = document.createElement('div');
        for (let i = 0; i < boardHeight; i++) {
            for (let j = 0; j < boardWidth; j++) {
                let cell = document.createElement('div');
                if ((j % 2) === (i % 2)) {
                    cell.classList.add("blackCell");
                } else {
                    cell.classList.add("whiteCell");
                }
                wrapper.appendChild(cell);
            }
        }
        resultOfCreateChessBoard.innerHTML = wrapper.innerHTML;
    }
}

const buttonForTask5 = document.getElementById('sortLink');
const resultOfSortingLinks = document.getElementById('task5');

buttonForTask5.addEventListener('click', sortLinks);

function sortLinks() {
    const links = document.getElementById("textArea").value;
    const ipRegularExp = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)/;
    const urlRegularExp = /^[a-z0-9]+([\-.][a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;
    let linksArray = links.replace(/,{2,}/, ',').replace(/\s/g, '').replace(/http[s]?:[/]+/g, '')
        .split(',').filter((i) => i !== '').sort();
    let linksList = document.createElement('div');
    for (let i = 0; i < linksArray.length; i++) {
        if (urlRegularExp.test(linksArray[i]) || ipRegularExp.test(linksArray[i])) {
            let link = document.createElement('a');
            link.style.color = 'white';
            link.setAttribute('href', `http://${linksArray[i]}`);
            link.setAttribute('target', '_blank"');
            link.textContent = linksArray[i];
            linksList.appendChild(link);
            linksList.appendChild(document.createElement('br'));
        }
    }
    resultOfSortingLinks.innerHTML = linksList.innerHTML;
}

const buttonForTask6 = document.getElementById('useRegularExp');
const inputRegularExp = document.getElementById('regExp');
const textForCheck = document.getElementById('textForCheck');
const resultOfUsingRegExp = document.getElementById('task6');

buttonForTask6.addEventListener('click', checkRegularExp);

function checkRegularExp() {
    const regexp = new RegExp(inputRegularExp.value, "ig");
    const text = textForCheck.value;

    resultOfUsingRegExp.innerHTML = text.replace(regexp, '<mark>$&</mark>');
}