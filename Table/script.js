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

input.addEventListener('keyup', () => {
    filterByName();
});

input.addEventListener('click', () => {
    filterByName();
});

function filterByName() {
    tBody.innerHTML = "";
    let inputValue = new RegExp(input.value, "ig");
    sum = 0;
    goods.forEach(function (item) {
        if (inputValue.test(item.name)) {
            createTable(item);
        }
    });
}

select.addEventListener('change', () => {
    sum = 0;
    tBody.innerHTML = "";
    if (!select.value) {
        goods.forEach(function (item) {
            if (item.name.toLowerCase().indexOf(input.value) !== -1) {
                createTable(item);
            }
        });
    }
    if (select.value === "supplies") {
        goods.forEach(function (item) {
            if (item.name.toLowerCase().indexOf(input.value) !== -1
                && item.category.indexOf(select.value) !== -1) {
                createTable(item);
            }
        });
    }
    if (select.value === "furniture") {
        goods.forEach(function (item) {
            if (item.name.toLowerCase().indexOf(input.value) !== -1
                && item.category.indexOf(select.value) !== -1) {
                createTable(item);
            }
        });
    }
    if (select.value === "other") {
        goods.forEach(function (item) {
            if (item.name.toLowerCase().indexOf(input.value) !== -1
                && item.category.indexOf(select.value) !== -1) {
                createTable(item);
            }
        });
    }
    total.innerHTML = sum + "$";
});

category.addEventListener('click', () => {
    goods.sort(function (a, b) {
        if (a.category > b.category) {
            return 1;
        }
        if (a.category < b.category) {
            return -1;
        }
        return 0;
    });
    tBody.innerHTML = "";
    showTable();
});

name.addEventListener('click', () => {
    goods.sort(function (a, b) {
        if (a.name > b.name) {
            return 1;
        }
        if (a.name < b.name) {
            return -1;
        }
        return 0;
    });
    tBody.innerHTML = "";
    showTable();
});

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
