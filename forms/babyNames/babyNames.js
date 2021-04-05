let babyNames = ["Olivia", "Emma", "Ava", "Sofia", "Isabella", "Charlotte", "Amelia", "Mia", "Harper", "Evelyn", "Abigail", "Emily", "Ella", "Elizabeth", "Camila", "Luna", "Sofia", "Avery", "Mila", "Aria"]
let favBabyNames = []

babyNames.onshow = function() {
    for (i = 0; i < babyNames.length; i++)
        selBaby.addItem(babyNames[i])
        }
        
btnBaby.onclick= function() {
    favBabyNames.push(selBaby.text)
    changeForm(favBabyNames)