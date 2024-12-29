function deposit(account, amount) { //Question 2 Task 1
    if (amount > 0) {
    account.balance += amount;
    console.log(`Deposited ${amount} into the account. New balance: ${account.balance}`);
    } else {
    console.log("Invalid deposit amount. Please enter a positive value.");
    }
}

function withdraw(account, amount) { //Question 2 Task 2
    if (amount > 0) {
    account.balance -= amount;
    console.log(`Withdrew ${amount} out the account. New balance: ${account.balance}`);
    } else {
    console.log("Invalid withdraw amount. Please enter a positive value.");
    }
}

function balance(account) { //Question 2 Task 3
    console.log(`Account balance: ${account.balance}`);
}

let account = {balance: 100};

deposit(account, 50);

withdraw(account, 25);

balance(account)