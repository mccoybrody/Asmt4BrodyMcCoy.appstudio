let babyGirlNames = ["Olivia", "Emma", "Ava", "Sofia", "Isabella", "Charlotte", "Amelia", "Mia", "Harper", "Evelyn", "Abigail", "Emily", "Ella", "Elizabeth", "Camila", "Luna", "Sofia", "Avery", "Mila", "Aria"]
let favBabyNames = []

babyNames.onshow = function() {
    for (i = 0; i < babyGirlNames.length; i++)
        selBaby.addItem(babyGirlNames[i])
        }
        
btnBaby.onclick= function() {
    favBabyNames.push(selBaby.text)
    ChangeForm(favBabyNames)
    }