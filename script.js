document.getElementById("bugForm").addEventListener("submit",function(event) {
    event.preventDefault();

    //grabs info entered
    const title = document.getElementById("title").value;
    const description = document.getElementById("desc").value;
    const severity = document.getElementById("severity").value;

    // list item shows bug info, fill w data
    const li = document.createElement("li");
    li.innerHTML=`<strong>${title}</strong> (${severity})<br>${description}`;

    // add to list container just created
    document.getElementById("bugList").appendChild(li);
    
    //clear for next entry
    document.getElementById("bugForm").reset();



})

