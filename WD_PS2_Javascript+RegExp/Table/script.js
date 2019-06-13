const GOODS = [
    {
        category: 'furniture',
        name: 'Chair',
        amount: 1,
        price: 20
    },
    {
        category: 'supplies',
        name: 'Gel Pen',
        amount: 20,
        price: 2
    },
    {
        category: 'other',
        name: 'Trash Bin',
        amount: 1,
        price: 5
    },
    {
        category: 'furniture',
        name: 'Sofa',
        amount: 1,
        price: 50
    },
    {
        category: 'supplies',
        name: 'Notebook',
        amount: 3,
        price: 3
    },
    {
        category: 'other',
        name: 'Calendar 2019',
        amount: 1,
        price: 3
    }
];

const tBody = document.getElementById('tbody');
const total = document.getElementById('total');
const input = document.getElementById('input');
const select = document.getElementById('select');
const category = document.getElementById('category');
const name = document.getElementById('name');

let goods = GOODS;
let sum = 0;

showTable();

function showTable() {
    goods.forEach(function (item) {
        createTable(item);
    });
}

function calculateSum() {
    let tr, amount, price, tdPrice, tdAmount;
    tr = tBody.getElementsByTagName("tr");
    sum = 0;
    for (let i = 0; i < tr.length; i++) {
        if (tr[i].style.display !== "none") {
            tdAmount = tr[i].getElementsByTagName("td")[2];
            tdPrice = tr[i].getElementsByTagName("td")[3];
            amount = parseInt(tdAmount.textContent || tdAmount.innerText);
            price = parseInt(tdPrice.textContent || tdPrice.innerText);
            sum = sum + (amount * price);
        }
    }
    total.innerHTML = sum + "$";
}

input.addEventListener('keyup', () => {
    let td, txtValue;
    let filter = input.value.toUpperCase();
    let tr = tBody.getElementsByTagName("tr");
    for (let i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[1];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
    calculateSum();
});


select.addEventListener('change', () => {
    sum = 0;
    tBody.innerHTML = "";
    if(!select.value){
        goods.forEach(function (item) {
            if (item.name.toLowerCase().indexOf(input.value) !== -1) {
                createTable(item);
            }
        });
    }else{
        goods.forEach(function (item) {
            if (item.name.toLowerCase().indexOf(input.value) !== -1
                && item.category.indexOf(select.value) !== -1) {
                createTable(item);
            }
        });
    }
    total.innerHTML = sum + "$";
});

category.addEventListener('click', function () {
    sortTable(0)
});
name.addEventListener('click', function () {
    sortTable(1)
});

function sortTable(n) {
    let table, rows, switching, i, x, y, shouldSwitch, dir, switchCount = 0;
    switching = true;
    table = tBody;
    // Set the sorting direction to ascending:
    dir = "asc";
    while (switching) {
        switching = false;
        rows = table.rows;
        for (i = 0; i < rows.length - 1; i++) {
            shouldSwitch = false;
            x = rows[i].getElementsByTagName("td")[n];
            y = rows[i + 1].getElementsByTagName("td")[n];
            if (dir === "asc") {
                if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                    shouldSwitch = true;
                    break;
                }
            } else if (dir === "desc") {
                if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                    shouldSwitch = true;
                    break;
                }
            }
        }
        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
            switchCount++;
        } else {
            if (switchCount === 0 && dir === "asc") {
                dir = "desc";
                switching = true;
            }
        }
    }
}

function createTable(item) {
    let row = document.createElement("tr");
    for (let prop in item) {
        let cell = document.createElement("td");
        let cellText = document.createTextNode(item[prop]);
        cell.appendChild(cellText);
        row.appendChild(cell);
    }
    tBody.appendChild(row);
    sum = sum + (item.amount * item.price);
    total.innerHTML = sum + "$";
}
