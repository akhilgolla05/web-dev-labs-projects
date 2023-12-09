window.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded() {
   // TODO: Complete the function
   let convertButton = document.getElementById("convertButton")
   convertButton.addEventListener("click",convertButtonEventHandler)

   let cin = document.getElementById("cInput")
   let fin = document.getElementById("fInput")

   cin.addEventListener("input",()=>{fin.value=""})
   fin.addEventListener("input",()=>{cin.value=""})

}

const convertButtonEventHandler = (e)=>
{
   let cin = parseFloat(document.getElementById("cInput").value)
   let fin = parseFloat(document.getElementById("fInput").value)
 
   let img = document.getElementById("weatherImage")

   let inputcel = document.getElementById("cInput").value
   let inputfar = document.getElementById("fInput").value

   let errormssg = document.getElementById("errorMessage")

    if(isNaN(cin) && isNaN(fin))
   {
      if(inputcel.length > 0)
      {
         errormssg.innerHTML = inputcel+" is not a number"
      }
      else if(inputfar.length > 0){
         errormssg.innerHTML = inputfar+" is not a number"
      }
   }

   if(!isNaN(cin))
   {
      let returnedFareinheit = convertCtoF(cin)
      fin = convertCtoF(cin)
      document.getElementById("fInput").value = returnedFareinheit
      errormssg.innerHTML = ""

   }
   else if(!isNaN(fin)){
      let returnedCelcuis = convertFtoC(fin)
      document.getElementById("cInput").value = returnedCelcuis
      errormssg.innerHTML=""
   }

   console.log(fin)
   if(fin < 32)
   {
      img.src = "cold.png"
   }
   else if(fin >=32 && fin <=50)
   {
      img.src="cool.png"
   }
   else{
      img.src="warm.png"
   }
   
}


function convertCtoF(degreesCelsius) {
   // TODO: Complete the function
   f = parseFloat(degreesCelsius)* 9/5 + 32
   return f
}

function convertFtoC(degreesFahrenheit) {
   // TODO: Complete the function

   c = (parseFloat(degreesFahrenheit) - 32) * 5/9
   return c

}
