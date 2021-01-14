    // How do I wire up an event handler for the click event code of the btnDem2 button
    document.getElementById("fizzButton").addEventListener("click", function(){
        num1=document.getElementById("input1").value;
        num2=document.getElementById("input2").value;
        runTheNumbers(num1, num2)
    });


    document.getElementById("Clear").addEventListener("click", Clear);


    //When the button is clicked I want to perform a looping operation that loops 100 times
    function runTheNumbers(num1, num2){

        for(let loop = 1; loop <= 100; loop++)
        {      

            var specialValue1 = loop % num1;
            var specialValue2 = loop % num2;

            if(specialValue1 == 0 && specialValue2 == 0)
            {
                
                document.getElementById("results").innerText += ` Fizz Buzz, `;

            }
            else if(specialValue1 == 0 && specialValue2 != 0)
            { 

                document.getElementById("results").innerText += ` Fizz, `;

            }
            else if(specialValue2 == 0 && specialValue1 != 0)
            {

                document.getElementById("results").innerText += ` Buzz, `;

            }
            else if(specialValue1 != 0 && specialValue2 != 0)
            {

                document.getElementById("results").innerText += ` ${loop}, `;

            }
        }

        document.getElementById("results").innerText += str1;
    }

    
function Clear(){
    document.getElementById("results").innerText = "";
}