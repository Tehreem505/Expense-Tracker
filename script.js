let expenses = [];

function addExpense() {
    let category = document.getElementById("category").value.trim();
    let desc = document.getElementById("desc").value.trim();
    let amount = document.getElementById("amount").value;


    if (!category || !desc || !amount || amount <= 0) {
        alert("Please enter valid data!");
        return;
    }

  
    let expense = {
        category,
        desc,
        amount: Number(amount)
    };

    expenses.push(expense);

    document.getElementById("category").value = "";
    document.getElementById("desc").value = "";
    document.getElementById("amount").value = "";

  
    displayExpenses();
}

function displayExpenses() {
    let list = document.getElementById("list");
    list.innerHTML = "";

    let total = 0;

    expenses.forEach((item, index) => {
        total += item.amount;

        let li = document.createElement("li");
        li.innerHTML = `
            <span>${item.category} | ${item.desc} | Rs ${item.amount}</span>
            <button class="delete-btn" onclick="deleteExpense(${index})">Delete</button>
        `;
        list.appendChild(li);
    });

    document.getElementById("total").innerText = total;
}

function deleteExpense(index) {
    expenses.splice(index, 1);
    displayExpenses();
}