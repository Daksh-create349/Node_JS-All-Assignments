function atmWithdrawal(balance, withdrawAmount) {
    while (true) {
        if (withdrawAmount > balance) {
            console.log("Insufficient balance");
            break;
        }

        balance -= withdrawAmount;
        console.log(`Withdrawal successful. Remaining balance: ₹${balance}`);
    }
}

atmWithdrawal(5000, 1000);