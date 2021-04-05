deleteCustomer.onshow=function(){
drpCustomer.clear()
    query = "SELECT * FROM customer"
        req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=blm26391&pass=" + pw + "&database=blm26391&query=" + query)
        
        if (req.status == 200) {
            console.log(`rew.responseText is a JSON string that looks like this: ${req.responseText}`)
        results = JSON.parse(req.responseText)
            console.log(`The parsed JSON string is converted to a JS object (an array of arrays): ${results} where results[0] is ${results[0]}, the first array in the JS results object.`)
            
        if (results.length == 0)
            lblMessage1.textContent = "There are no pets in the database."
        else {
            let message = ""
            for (i = 0; i < results.length; i++)
                drpCustomer.addItem(message + results[i][1] + "\n")
                }
            } else 
                lblMessage1.textContent = "Error code: " + req.status
                }
                
    drpCustomer.onclick = function(s) {
        if (typeof(s) == "object")
            return
        else {
            drpCustomer.value = s
            let deleteCustomerName = drpCustomer.value
            console.log(`${deleteCustomerName}`)
            
    let found = false 
    for (i = 0; i < results.length; i++) {
        if (deleteCustomerName == results[i][1]){
            found = true
            break }
            }
    if (found == false)
        lblMessage5.textContent = "They are not in the databade."
    else if (found == true) {
        query = "DELETE FROM customer WHERE name = ' " + deleteCustomerName + " ' "
        alert(query)
        
        req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=blm26391&query=" + query)
        if (req.status == 200)
            if (req.responseText == 500)
                lblMessage5.textContent = `You deleted the customer named ${deleteCustomerName}`
            else 
                lblMessage5.textContent = "There was a problem deleting the customer"
            else
                lblMessage5.textContent = `Error: ${req.status}`
                }
                }
                }
        btnRefresh.onclick=function(){
  deleteCustomer.reset()
}