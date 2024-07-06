window.onload = function(){
    // Buttons
    var quickAddBtn = document.getElementById("QuickAdd");
    var addBtn = document.getElementById("Add");
    var cancelBtn = document.getElementById("Cancel");
    var quickAddFormDiv = document.querySelector(".quickaddForm");
    
    //Form
    var fullName = document.getElementById("fullname");
    var phone = document.getElementById("phone");
    var address = document.getElementById("address");
    var city = document.getElementById("city");
    var email = document.getElementById("email");
    var hometown= documentgetElementByID("hometown");

    //Address Book
    var addBookDiv = document.querySelector(".addbook");
    
    ///Storage
    var addressBook = [];

    //Event listener
    quickAddBtn.addEventListener("click", function() {
        quickAddFormDiv.style.display="block";
    });

    cancelBtn.addEventListener("click", function(){
        quickAddFormDiv.style.display="none";
    });

    addBtn.addEventListener("click", addToBook);

    addBookDiv.addEventListener("click", removeEntry);
    
    function jsonStructure(fullName, phone, email, city, address, hometown) {
        this.fullName = fullName;
        this.phone = phone;
        this.email = email;
        this.city = city;
        this.address = address;
	this.hometown = hometown;
    };

    function addToBook(){
        var isNull = fullName.value!= '' && phone.value!= '' && email.value!= '' && city.value!= '' && address.value!= '';

        if (isNull) {
		// Add contents of the form to the array and local storage
            var obj = new jsonStructure(fullName.value, phone.value, email.value, city.value, address.value, hometown.value);
            addressBook.push(obj);
            localStorage['addbook'] = JSON.stringify(addressBook);

            //hide the form pannel
            quickAddFormDiv.style.display="none";

            //clear content
            clearForm();

            //update content
            showAddressBook();
        };
    };

    function removeEntry(e) {
        if (e.target.classList.contains("delButton")) {
            var remId = e.target.getAttribute("data-id");
            addressBook.splice(remId, 1);
            localStorage['addbook'] = JSON.stringify(addressBook);
            showAddressBook();
        }
    }

    function clearForm(){
        var frm = document.querySelectorAll(".formFields");
        for (var i in frm){
            frm[i].value = '';
	  
        };
    };

    function showAddressBook(){
        //check is exists in local storage, if exists load it, if not create.
        if(localStorage['addbook'] === undefined) {
            localStorage['addbook'] = "[]";
        } else {
            addressBook = JSON.parse(localStorage['addbook']);
            addBookDiv.innerHTML = '';
            for( var n in addressBook) {
                var str = '<li class="list-group-item d-flex justify-content-between align-items-center my-2 border border-secondary rounded-3 shadow-lg bg-body rounded p-1">';
                    str += '<div class="d-flex flex-wrap">';
                    str += '<div class="min-w-50 px-3"><p>' + addressBook[n].fullName + '</p></div>';
                    str += '<div class="min-w-50 px-3"><p>' + addressBook[n].phone + '</p></div>';
                    str += '<div class="min-w-50 px-3"><p>' + addressBook[n].email + '</p></div>';
                    str += '<div class="min-w-50 px-3"><p>' + addressBook[n].address + '</p></div>';
                    str += '<div class="min-w-50 px-3"><p>' + addressBook[n].city + '</p></div>';
                    str += '</div>';
                    str += '<div class="min-w-50 pt-2 px-1"><p><a href="#" class="delButton btn btn-danger" data-id="' + n + '">Delete</a></div>';
                    str += '</li>';
                addBookDiv.innerHTML += str;
            }
        };
    };
    showAddressBook();
};