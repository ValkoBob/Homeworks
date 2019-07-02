const ATM = {
    isAuth: false,
    savedLogs: [],
    currentUser: {},
    // all cash available in ATM
    cash: 2000,
    // all available users
    users: [
        {id: "0000", pin: "000", debet: 0, type: "admin"}, // EXTENDED
        {id: "0025", pin: "123", debet: 675, type: "user"}
    ],
    // authorization
    auth(id, pin) {
        for(let i = 0; i < this.users.length; i++){
            if(this.users[i].id === id){
                if(this.users[i].pin === pin){
                    console.log("Congratulations! You log in successfully.");
                    this.isAuth = true;
                    this.currentUser = this.users[i];
                    break;
                }else{
                    console.log("You entered failed code. Please, repeat authorization!");
                    break;
                }
            }
        }
    },
    // check current debet
    check() {
        if(this.isAuth === true){
            console.log("Your debt for credit is " + this.currentUser.debet);
        } else{
            console.log("Please, log in!");
        }
    },
    // get cash - available for user only
    getCash(amount) {
        if(this.isAuth){
            if(this.currentUser.type === "admin"){
                console.log("You are admin! So you can not get or load cash.");
                return;
            }
            let differ = this.currentUser.debet - amount;
            if(differ < 0){
                console.log("There are not enough money on your account!");
            } else {
                this.currentUser.debet = differ;
                this.cash -= amount;
                if (this.cash < 0) {
                    this.cash += amount;
                    console.log("ATM has not enough money!");
                    return;
                }
                console.log("You get cash successfully!");
                this.savedLogs.push("User: " + this.currentUser.type + " with id: " + this.currentUser.id +
                    " get amount: " + amount);
            }
        } else{
            console.log("Please, log in!");
        }
    },
    // load cash - available for user only
    loadCash(amount) {
        if(this.isAuth){
            if(this.currentUser.type === "admin"){
                console.log("You are admin! So you can not get or load cash.");
                return;
            }
            this.currentUser.debet += amount;
            this.cash += amount;
            console.log("You load cash successfully!");
            this.savedLogs.push("User: " + this.currentUser.type + " with id: " + this.currentUser.id +
                " load amount: " + amount);
        } else{
            console.log("Please, log in!");
        }
    },
    // load cash to ATM - available for admin only - EXTENDED
    loadAtmCash(amount) {
        if(this.isAuth && this.currentUser.type === "admin"){
            this.cash += amount;
            console.log("You load cash successfully!");
            this.savedLogs.push("Admin: " + this.currentUser.type + " with id: " + this.currentUser.id +
                " load amount to ATM: " + amount);
        } else{
            if(this.currentUser.type === "user"){
                console.log("You don`t have an access!");
                return;
            }
            console.log("Please, log in!");
        }
    },
    // get cash actions logs - available for admin only - EXTENDED
    getLogs() {
        if(this.isAuth && this.currentUser.type === "admin"){
            console.log("Saved logs: ");
            this.savedLogs.forEach(log => console.log(log + "\n"));
        } else{
            if(this.currentUser.type === "user"){
                console.log("You don`t have an access!");
                return;
            }
            console.log("Please, log in!");
        }
    },
    // log out
    logout() {
        this.isAuth = false;
        console.log("You log out successfully. Bye!")
    }
};
