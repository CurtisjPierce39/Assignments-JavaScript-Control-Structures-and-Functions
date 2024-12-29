let loggedIn = true; //Question 1 Task 1
let notLoggedIn = false;
let cart = ['Shirts', 'Shoes', 'Bread', 'Cell Phone', 'Candy Corn', 'The Pragmatic Programmer: Your Journey To Mastery, 20th Anniversary Edition (2nd Edition)', 'Tomato']

if (loggedIn) { // Question 1 Task 2
    const cart = ['Shirts', 'Shoes', 'Bread', 'Cell Phone', 'Candy Corn', 'The Pragmatic Programmer: Your Journey To Mastery, 20th Anniversary Edition (2nd Edition)', 'Tomato'];
    console.log("Your cart contains:");
    for (let item of cart) {
        console.log({item})
    }
} else {
    console.log("Please Log In")
}

