$(document).ready(function(){
  $("form#survey").submit(function(event){
    event.preventDefault()
    var genderInput = $("#gender").val();
    var personalityInput = $("#personality").val();
    var ageInput = $("input:radio[name=age]:checked").val()

  if(genderInput==="male"){
    alert("you selected male")
    if(personalityInput==="introvert" && ageInput=== "minor"||personalityInput==="extrovert" && ageInput=== "youngAdult"){
      alert("color is red");
    } else if(personalityInput==="introvert" && ageInput=== "youngAdult" || ageInput=== "overTheHill" ){
      alert("color is blue");
    } else{
      alert("color is green")
    }
  }


  else{
    alert("you selected female")
    if(personalityInput==="introvert" && ageInput ==="youngAdult"){
      alert("your color is yellow")
    }
    else if(personalityInput==="extrovert" && ageInput=== "overTheHill"|| ageInput === "minor"){
      alert("your color is purple")
    }
    else{
      alert("color is brown")
    }
  }


  })
})
