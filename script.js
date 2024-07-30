function checkPan(){
    let pan=document.getElementById("pan").value;
    let pancheck=/[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
    if(pan==""){
        document.getElementById("result").innerHTML="PAN number should not be empty!!!";
    }
    else if(!pancheck.test(pan)){
        document.getElementById("result").innerHTML="Enter a valid PAN number!!!";
    }
    else if(pancheck.test(pan)){
        document.getElementById("result").innerHTML="Response Recorded,Thank You!";
        document.getElementById("result").style="color:green";

    }

    }