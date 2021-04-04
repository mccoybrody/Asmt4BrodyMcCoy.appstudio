let req = ""
let query = ""
let results = ""
let pw = "mccoybrody"
let netID = "blm26391"
let customerData = []

state.onshow=function(){
drpStates.clear()
    query = "SELECT * FROM customer"
        req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=blm26391&pass=" + pw + "&database=blm26391&query=" + query)
        
        if (req.status == 200) {
            console.log(`rew.responseText is a JSON string that looks like this: ${req.responseText}`)
        results = JSON.parse(req.responseText)
            console.log(`The parsed JSON string is converted to a JS object (an array of arrays): ${results} where results[0] is ${results[0]}, the first array in the JS results object.`)
            
        if (results.length == 0)
            lblCustomer.textContent = "There are no pets in the database."
        else {
            let message = ""
            for (i = 0; i < results.length; i++)
                drpStates.addItem(message + results[i][4] + "\n")
                }
            } else 
                lblCustomer.textContent = "Error code: " + req.status
                }
                
    drpStates.onclick = function(s) {
        if (typeof(s) == "object")
            return
        else {
            drpStates.value = s
            let state = drpStates.value
            
    query = "SELECT * FROM customer WHERE state =" + ' " ' + state + ' " '
        req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=blm26391&pass=" + pw + "&database=blm26391&query=" + query)
        if (req.status == 200){
            console.log(`req.responseText is a JSON string that looks like this: ${req.responseText}`)
        results = JSON.parse(req.responseText)
            console.log(`The parsed JSON string is converted to a JS object (an array of arrays): ${results} where results[0] is ${results[0]}, the first array in the JS results object.`)
            
        if (results.length == 0)
            lblCustomer.textContent = "There are no pets in the database."
        else {
            let message = ""
            for (i = 0; i < results.length; i++)
                message = message + results[i][1] + "\n"
                lstgCustomer.addItem(message)
                }
            } else 
                lblCustomer.textContent = "Error code: " + req.status
                }}
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                