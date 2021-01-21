//Toggling Button;
const navBar=document.getElementById("nav");
const navCancel=document.getElementById("cancel");
const dropDown=document.getElementById("dropdown");

//When Navbar is clicked, dropdown should be made block;
navBar.addEventListener("click", function(){
    dropDown.style.display="block";   
});


//When Navcancel is clicked, dropdown should be made none;
navCancel.addEventListener("click", function(){
 dropDown.style.display="none";
});


function firstToggle(){
    navBar.addEventListener("click", function(){
        if(navBar.style.display==="block"){
           return navBar.style.display="none";
        }else{
            return navBar.style.display="block";
        }

        

    })
    secondToggle();
    thirdToggle();
    fourthToggle();
};
firstToggle();

function secondToggle(){
    navBar.addEventListener("click", function(){
        if(navCancel.style.display==="none"){
            return navCancel.style.display="block";
        }else{
            return navCancel.style.display="none";
        }
    })
};

function thirdToggle(){
    navCancel.addEventListener("click",function(){
        if(navBar.style.display === "none"){
            return navBar.style.display="block";
        }else{
            return navBar.style.display="none";
        }
    })
    
};


function fourthToggle(){
    navCancel.addEventListener("click", function(){
        if(navCancel.style.display==="block"){
            return navCancel.style.display="none";
        }else{
            return navCancel.style.display="block";
        }
    })
};





