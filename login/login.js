function Login(usernm, passwd) {
    if (usernm != null && passwd != null) {
        window.alert('../home?user=' + usernm+ '&pass='+passwd)
        window.location.href = '../home?user=' + usernm+ '&pass='+passwd;

    }
}