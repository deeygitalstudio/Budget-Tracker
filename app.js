

        const creditEL = document.getElementById("credit");
        const debitEL = document.getElementById("debit");
        const inputEL = document.getElementById("input");
        const input2EL = document.getElementById("input2");
        const cashEL = document.getElementById("Cash");
      
        const creditTable = document.getElementById("creditTable");
    const debitTable = document.getElementById("debitTable");
    const transactEl = document.getElementById("transact");
   
     
           let amount = JSON.parse(localStorage.getItem('data4'));

        if(!amount){
        amount = 0;
        }

         cashEL.innerHTML = amount.toLocaleString('en-NG', {
                    style: 'currency',
                    currency: 'NGN',
                   });
               

     
           const creEL = document.querySelector("#cre");
       
           let formattedDate = '';
        creditEL.addEventListener("click",  () => {
      
          if(inputEL.value === "" || input2EL.value === ""){
                alert("Please fill in all details")
            }else{
   
                 console.log(inputEL.value);
                 amount += parseInt(inputEL.value) ;
                   cashEL.innerHTML =  amount.toLocaleString('en-NG', {
                    style: 'currency',
                    currency: 'NGN',
                   });
               
                 
        // Create a new row and append it to the credit table
        const newRow = document.createElement("tr");
        newRow.innerHTML = `<td>NGN${inputEL.value}</td><td>Credited ${formattedDate}</td>`;
        creditTable.appendChild(newRow);

        const newRow2 = document.createElement("p");
        newRow2.innerHTML = `<p>You added ${inputEL.value} to your account and its assigned to  ${input2EL.value} on ${formattedDate}</p>`;
        transactEl.appendChild(newRow2);
           saveData()
               input2EL.value = "";
               inputEL.value = "";
    }

   



            
            })

      
              
        debitEL.addEventListener("click",  () => {
           
      
          if(inputEL.value === "" || input2EL.value === ""){
                alert("Please fill in all details")
            }else if (amount < inputEL.value){
                  alert("Insufficient funds, please enter an amount less than or equal to your current balance.")
                 

            } else{
                  console.log(amount - parseInt(inputEL.value));
                 amount -= parseInt(inputEL.value) ;
               cashEL.innerHTML =  amount.toLocaleString('en-NG', {
                    style: 'currency',
                    currency: 'NGN'
                   });

                
           
                        const newRow = document.createElement("tr");
        newRow.innerHTML = `<td class="">NGN${inputEL.value}</td><td>Debited ${formattedDate}</td>`;
         console.log(inputEL.value)
        debitTable.appendChild(newRow);     

         const newRow2 = document.createElement("p");
        newRow2.innerHTML = `<p class="">You made a debit transaction of ${inputEL.value} from your account and its assigned to  ${input2EL.value} on ${formattedDate}</p>`;
        transactEl.appendChild(newRow2);

               
          
    }


                input2EL.value = "";
                  inputEL.value = "";
                      saveData() 
            })
              
    
function getFormattedDate() {
    const months = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];

    
    const today = new Date();
    const day = today.getDate();
    const month = months[today.getMonth()];
    const year = today.getFullYear();
      let hours = today.getHours();
    const minutes = today.getMinutes().toString().padStart(2, '0')
     const seconds = today.getSeconds().toString().padStart(2, '0');

   const ampm = hours >= 12 ? 'PM' : 'AM';

    // Convert hours to 12-hour format
    hours = hours % 12 || 12;

    formattedDate = `${day} ${month} ${year}, ${hours}:${minutes}:${seconds} ${ampm}`;

    document.getElementById("dates").textContent = formattedDate;
} 

 getFormattedDate();


setInterval(getFormattedDate, 1000); 



function saveData(){
    localStorage.setItem('data2', debitTable.innerHTML);
    localStorage.setItem('data1', creditTable.innerHTML);
    localStorage.setItem('data3', transactEl.innerHTML);
    localStorage.setItem('data4', JSON.stringify(amount))
   
}

function showList(){
    debitTable.innerHTML = localStorage.getItem('data2')
    creditTable.innerHTML = localStorage.getItem('data1')
    transactEl.innerHTML = localStorage.getItem('data3')
  
}


showList();


