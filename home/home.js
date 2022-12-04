function GetURLParameters()
{
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++)
    {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] === "user")
        {
             this.user = sParameterName[1];
        }
        else if (sParameterName[0] === "pass")
        {
            this.pass = sParameterName[1];
        }
    }
};