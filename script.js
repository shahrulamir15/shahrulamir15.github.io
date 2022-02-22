
displayNotes();
const initialID = 0;
    // button to open Notes Form
    function composeNotes(btn) {

        document.getElementsByClassName("notes-form")[0].style.display = "flex";
    }

    // button to close Notes Form
    function close1(closing) {
        document.getElementsByClassName("notes-form")[0].style.display = "none"; 

    }

    //function show loader when saved new notes 
    
    function showLoader(){
        document.getElementsByClassName("loader")[0].style.animation = "spin 1s linear";

    }

    function offLoader(){
        document.getElementsByClassName("loader")[0].style.animation = none;

    }

    // class Notes constructor
    function Notes (id,title, content) {
        this.id = id;
        this.title = title;
        this.content = content;
    }


    
    function displayNotes() {

        
        var notesStored = JSON.parse(localStorage.getItem("notesObj")); //read notes from JSON notesObj and changed it into object
        var display = document.getElementById("tempat-note"); //get the root class of notes

        display.innerHTML = " "; //to display all notes 

        for (var i=0; i<notesStored.length; i++) {
            
            var idStored = notesStored[i].id;
            var title = notesStored[i].title;
            var content = notesStored[i].content;

            display.innerHTML += 
            '<div class="notes">' +
            '<div class="notes-menu">' +
                '<i  onclick="deleteNotes(\''+idStored+'\')" class="far fa-trash-alt" style="" ></i>' +
            '</div>' +
            '<h2 id="note-title">'+ title +'</h2>' +
            '<p id="note-content">' + content + '</p>' + 
        '</div>';
        }


   }
   
    //function to store notes in local storage
    function storeNotes() {
        let idStored;
        
        let title = document.getElementById("title").value;         //retrieve from user inputs
        let content = document.getElementById("content").value;     //retrieve from user inputs
        
        let checkStorage = localStorage.getItem("notesObj");        //check and get key/value in JSON file

        if (checkStorage ==null){
        idStored=0;                                                 //if zero notes exist, store ID as 0
            listNotes = [];                                         //create an array if no exist
        }
        else {
            listNotes = JSON.parse(checkStorage);                   //array existed in localStorage and turn it into JS Object
            idStored = listNotes.length;                            //array existed, store id with latest id (start with 1)
        }
        
        let noteBaru = new Notes(idStored,title,content);           //new object
        listNotes.push(noteBaru);                                   //push new object in array
        console.log(listNotes);                                     //display array 
        localStorage.setItem("notesObj",JSON.stringify(listNotes));  //store array in localStorage after convert it into JSON String
        displayNotes();                                             //show new notes submission 
        showLoader();

        document.getElementById("content").value=" ";               //clear value of input data 
        close1();
        
    }

    

    function deleteNotes(iniID){
        var getJson = JSON.parse(localStorage.getItem("notesObj")); //get JSON file and changed into JS object from string 

        for (let j=0;j<getJson.length;j++)
        {
            if(getJson[j].id==iniID){
                getJson.splice(j,1);                                //delete object in array 
            }
        }
        localStorage.setItem('notesObj', JSON.stringify(getJson));  //update again in JSON file
        displayNotes();                                             //display updated notes

    }


    








