function Login(usernm, passwd) {
    if (usernm != null) {
        var user = getUser(usernm);
        if(user != null) {
            if (passwd != null && user.pass === passwd) {
                window.location.href = '../home?user=' + encodeURIComponent(btoa(usernm)) + '&pass=' + encodeURIComponent(btoa(passwd));
            }
            else
            {
                window.alert('Please enter a valid password')
            }
        } else
            window.alert('Please enter a valid username')
    } else
        window.alert('Please enter a valid username')
}

function getUser(usernm) {
    for (var i = 0; i < userData.length; i++)
        if (userData[i].user === usernm)
            return userData[i];
    return null;
}