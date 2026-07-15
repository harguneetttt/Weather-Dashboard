async function login(){
    const userName = document.getElementById("username").value;
    const passWord = document.getElementById("password").value;
    const result = await fetch("users.json");
    const users = await result.json();
    let found = false;

    for(let i=0;i < users.length;i++){
        if(users[i].username == userName && users[i].password == passWord){
            found=true;
            break;
        }
    }
    if(found){
        window.location.href = "dash.html";
    }
    else{
        document.getElementById("error").textContent = "Wrong username or password";
    }
}
