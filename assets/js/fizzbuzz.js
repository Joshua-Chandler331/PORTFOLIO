        // I write custom JS
        // I want to write a piece of JS code that knows what to do when the button is clicked .. Add an eventlistener
        
        // START GLOBAL VARIABLES

            let num1 = document.getElementById("input1").value;

            let num2 = document.getElementById("input2").value;

            let num3 = document.getElementById("input3").value;

            let num4 = document.getElementById("input4").value;

        // END GLOBAL VARIABLES

        document.getElementById("btnDemo").addEventListener("click", function(){
            let num1 = document.getElementById("input1").value;

            let num2 = document.getElementById("input2").value;

            let num3 = document.getElementById("input3").value;

            let num4 = document.getElementById("input4").value;
            document.getElementById("output1").innerHTML = `The number you entered is: <span class="boldy">"${num1}"</span>`;    
            document.getElementById("output2").innerHTML = `The number you entered is: <span class="boldy">"${num2}"</span>`;
            document.getElementById("output3").innerHTML = `The range you entered is: <span class="boldy">${num3}-${num4}</span>`;  
        });


    // How do I wire up an event handler for the click event code of the btnDem2 button
    document.getElementById("btnDemo2").addEventListener("click", function() {
    //When the button is clicked I want to perform a looping operation that loops 100 times
    for(let loop = num3; loop <= num4; loop++)
    {
        
        let num1 = document.getElementById("input1").value;

        let num2 = document.getElementById("input2").value;

        let num3 = document.getElementById("input3").value;

        let num4 = document.getElementById("input4").value;
        var specialValue1 = loop % num1;
        var specialValue2 = loop % num2;
        let str1 = output4;
        let str2 = "";
        if(specialValue1 == 0) //if SpecialValue IS NOT 0
        { 
            str1 += " Fizz";
            //document.getElementById("output4").innerHTML = `output4.concat.(FIZZ) `; 
        }
        else if(specialValue2 == 0)
        {
            str2 += " Buzz";
            //document.getElementById("output4").innerHTML = `output4.concat.(BUZZ)`; 
        }
        else if(specialValue1 == 0 && specialValue2 == 0)
        {
            str1 += " Fizz Buzz "
            //document.getElementById("output4").innerHTML = `output4.concat.(FIZZ BUZZ)`; 
        }
        else
        {
            str1 += " no Fizz no Buzz ";
            //output4.concat.("NO FIZZ NO BUZZ"); 
        }

         document.getElementById("output4").innerHTML += str1;
    }
});
























document.getElementById("btnWord").addEventListener("click", function() {
    //Loop over each of the letters in the word
    var word = document.getElementById("input3").value;
    let newWord="";
    for(let loop = 0; loop < word.length; loop++)
    {
        // How can I use the loop variable to get a single letter from word
        newWord += `${word.sub(loop, 1)}-`;
    }
        document.getElementById("output4").append(newWord);
        document.getElementById("output5").append(newWord.substr(0, newWord));       
});

document.getElementById("btnClear").addEventListener("click", function() {
    // Clear the word the user entered
    document.getElementById("input3").value =" ";
    // document.getElementById().addEventListener("")
    // document.querySelector("#output4, #output5").innerText = "";
    document.querySelector().value = " ";
    document.querySelector().value = " ";
});

     