function continueToStart(){

    let name =
    document.getElementById("userName").value;

    if(name.trim()===""){
        alert("Please enter your name");
        return;
    }

    document.getElementById("welcomeText").innerHTML =
    "Welcome, " + name + " 🎸";

    document.getElementById("welcomePage")
    .classList.add("hidden");

    document.getElementById("startPage")
    .classList.remove("hidden");
}

function startVideo(){

    document.getElementById("startPage")
    .classList.add("hidden");

    document.getElementById("videoPage")
    .classList.remove("hidden");

    const video =
    document.getElementById("jamVideo");

    video.play();

    video.onended = function(){

        document.getElementById("videoPage")
        .classList.add("hidden");

        document.getElementById("thankPage")
        .classList.remove("hidden");

        setTimeout(function(){

            document.getElementById("thankPage")
            .classList.add("hidden");

            document.getElementById("welcomePage")
            .classList.remove("hidden");

            document.getElementById("userName").value="";

        },5000);
    };
}