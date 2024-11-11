let Name = ["Adeem","Syed Anas","Abdul Muizz","Affan Ali","Abdul Hadi","Mustafa Pervez","Muhammad","Muhammad Mustafa Hussain","Abdul Moiz ","Mohammad Wasif","Hasnain Ali ","Muhammad Faizan Khan","Muhammad Faizan ","Huzaifa ","Noor ul Hasan Siddique","Musab Bin Ahsan ","Ather Junaid Siddique","Mohsnain Raza","Abdullah ","Azeem Shahid","Hafiz sharim sohail ","Syed Saad Zaidi","Aman ul haq ","Muhammad Moosa ","syed anas zaidi ","Hamdan","Saleh Raza","Syed Shariq Ahmed"];
let rollNo = [271965,258317,260679,260682,266865 ,299695,267832,267133 ,259144,263630 ,265627,262365 ,252944,269662,258032,265599,258595 ,286820 ,265416,265887,272187 ,265811,261523,255275,265812,284822,265584,271752];
let marks = [32,31,31,31,28,27,27,27,27,26,26,25,25,25,24,23,23,23,22,22,21,21,20,19,19,18,16,13];
let Status = ["EXCELLENT","EXCELLENT","EXCELLENT","EXCELLENT","GOOD","PASSED","PASSED","PASSED","PASSED","PASSED","PASSED","PASSED","PASSED","PASSED","PASSED","PASSED","PASSED","PASSED","PASSED","PASSED","NEED IMPROVEMENT","NEED IMPROVEMENT","NEED IMPROVEMENT","NEED IMPROVEMENT","NEED IMPROVEMENT","NEED IMPROVEMENT","FAIL","FAIL"];
function values(){
    let found = 0;
    let getval = document.querySelector("input").value;
    document.querySelector("#content").style.display = "block";
    for(i=0;i<rollNo.length;i++){
        if(getval==rollNo[i]){
            document.querySelector("#name").innerHTML = `Name: ${Name[i]}`;  
            document.querySelector("#rollNo").innerHTML = `Roll No: ${rollNo[i]}`;
            document.querySelector("#marks").innerHTML = `Marks: ${marks[i]}`;
            let Percentage = ((marks[i]*100)/35).toFixed();
            document.querySelector("#percentage").innerHTML = `<b>Percentage:</b> ${Percentage}%`;
            document.querySelector("#status").innerHTML = `Status: ${Status[i]}`;
            found=1;
            document.querySelector("#message").innerHTML = "";
        } 
    }
    if(found==0){ 
        document.querySelector("#name").innerHTML = "";  
        document.querySelector("#rollNo").innerHTML = "";
        document.querySelector("#marks").innerHTML = "";
        document.querySelector("#percentage").innerHTML ="";
        document.querySelector("#status").innerHTML = "";
        document.querySelector("#message").innerHTML = "We do not have the data for your roll number.Enter Right Roll No.";
    }
   
    
}
