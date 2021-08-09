function ChangeUsername()
{
    var username = prompt("What do you want your username to be?");
    window.localStorage.setItem('username', username);
    alert("Please reload the site to apply the changes!");
}