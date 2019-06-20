 // Global
 var inputBtn = document.getElementById("inputBtn");
 var inputTxt = document.getElementById("inputText");
 var taskList = document.getElementById("taskList");
 var doneList = document.getElementById("doneList");

// Enter key for input button
document.getElementById("inputText")
   .addEventListener("keyup", function(event) {
   event.preventDefault();
   if (event.keyCode === 13) {
      document.getElementById("inputBtn").click();
   }
});

// Selects text input
inputTxt.focus();

// Adds a Task to list
inputBtn.onclick = function () {
   addTask();
   inputTxt.value = "";
}

function addTask() {

   var taskName = inputTxt.value;
   
   // Fixess blank task bug
   if (taskName == "") {
      return;
   }

   var taskLi = document.createElement("li");
   var node = document.createTextNode(taskName);
   var doneBtn = document.createElement("button");
   var imgBtn = document.createElement("i");


   imgBtn.setAttribute("class", "fas fa-check");
   doneBtn.setAttribute("class","doneBtn"); 
   
   doneBtn.appendChild(imgBtn);

   taskLi.appendChild(node);
   taskLi.appendChild(doneBtn);


   taskList.appendChild(taskLi);

   doneBtn.onclick = function(){
      taskLi.style.textDecoration = "line-through";
      taskLi.removeChild(doneBtn);
      doneList.prepend(taskLi);
   }
}