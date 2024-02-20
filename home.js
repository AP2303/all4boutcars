

// function link(){
// const form = document.getElementById("xxx");
// form.addEventListener("click", function(event) {
//   event.preventDefault();
//   const query = document.getElementById("abc").value;
//   if(query==="A4"){
//     document.getElementById("xxx").setAttribute("action", "a4.html");
//   }
// })} 

function link(){
    const kerko = document.getElementById("abc").value;  
    if(kerko === 'A4' || kerko === 'a4'|| kerko === 'a 4' || kerko === 'A 4'){
    document.getElementById("xxx").setAttribute("action", "a4.html");
}
    else if(kerko === 'A6' || kerko === 'a6' || kerko === 'a 6' || kerko === 'A 6'){
        document.getElementById("xxx").setAttribute("action", "a6.html");
    }
    else if(kerko === 'A8' || kerko === 'a8' || kerko === 'a 8' || kerko === 'A 8'){
        document.getElementById("xxx").setAttribute("action", "a8.html");
    }

    else if(kerko === '3 series' || kerko === '3 Series' || kerko==='3series'|| kerko==='3Series'){
        document.getElementById("xxx").setAttribute("action", "3series.html");
    }

    else if(kerko === '5 series' || kerko === '5 Series' || kerko==='5series'|| kerko==='5Series'){
        document.getElementById("xxx").setAttribute("action", "5series.html");
    }

    else if(kerko === '7 series' || kerko === '7 Series' || kerko==='7series'|| kerko==='7Series'){
        document.getElementById("xxx").setAttribute("action", "7series.html");
    }

    else if(kerko === 'cclass' || kerko === 'c class' || kerko==='C class'|| kerko==='C Class'){
        document.getElementById("xxx").setAttribute("action", "c.html");
    }

    else if(kerko === 'eclass' || kerko === 'e class' || kerko==='E class'|| kerko==='E Class'){
        document.getElementById("xxx").setAttribute("action", "e.html");
    }

    else if(kerko === 'sclass' || kerko === 's class' || kerko==='S class'|| kerko==='S Class'){
        document.getElementById("xxx").setAttribute("action", "s.html");
    }
}