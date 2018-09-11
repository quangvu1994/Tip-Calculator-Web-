document.querySelector("#main").addEventListener("input", calculation, false);

function calculation(e) {
    if(e.target !== e.currentTarget) {
        // Grab bill amount, percentage, and number of people
        var bill_amount = parseFloat(document.getElementById("amount-value").value);
        var tip_percentage = parseFloat(document.getElementById("tip-percentage-value").value);
        var num_people = parseFloat(document.getElementById("num-people-value").value);
        // Calculate total & tip per person
        var total_tip_amount = bill_amount*tip_percentage/100;
        var total_amount = bill_amount + total_tip_amount;
        var tip_per_person = total_tip_amount/num_people;
        var total_amount_per_person = total_amount/num_people;

        // Display the result
        if (!isNaN(tip_per_person)) {
            document.getElementById("final-tip-value").innerHTML = tip_per_person;
        }

        if (!isNaN(total_amount_per_person)) {
            document.getElementById("total-value").innerHTML = total_amount_per_person;
        }
    }

    e.stopPropagation();
}
