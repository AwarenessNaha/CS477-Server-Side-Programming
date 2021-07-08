class User{
    constructor(username, password, role){
        this.username = username;
        this.password = password;
        this.role = role;
    }
    login(){
        let conformedUser = users.find(u=>u.usernane===this,this.username && u.password===this.password);
    return conformedUser;
    }
}

const users = [new User("Naha", "IloveShiva", "admin"), new User("Gaia", "IloveVishnu", "Devi")];

module.exports = User;