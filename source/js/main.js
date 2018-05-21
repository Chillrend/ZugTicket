 $(document).ready(function () {
     $('.mdb-select').material_select();
     $('.dropdown-toggle').dropdown();
     $('.datepicker').pickadate();
     $('input:checkbox').click(function () {
         $('input:checkbox').not(this).prop('checked', false);
     });
 });

$('#fixed-action-btn').click(function(){$('#modalCart').modal('show');})

var datezfiveyear = new Date();

datezfiveyear.setFullYear(new Date().getFullYear() + 5);

 $("#expdate").pickadate({
     format: 'mmmm, yyyy',
     formatSubmit: 'mm, yyyy',
     min: new Date(),
     max: datezfiveyear
 });

 function validateDate() {
     var expvalid = document.getElementById("expdate");
     if (expvalid.value == "") {
         expvalid.setCustomValidity("Please Select Expiry Date");
         alert("Please Choose the expiracy date");
         return false;
     } else {
         expvalid.setCustomValidity("");
     }
 }

 var emailvalid = document.getElementById("inputemail");
 emailvalid.addEventListener("input", function (event) {
     if (emailvalid.validity.typeMismatch) {
         emailvalid.setCustomValidity("Email Only Boiz");
     } else {
         emailvalid.setCustomValidity("");
     }
 });

 var statevalid = document.getElementById("inputstate");

 statevalid.addEventListener("input", function (event) {
     if (statevalid.value == "") {
         statevalid.setCustomValidity("You haven't fill this form, fix plz.");
     } else if (statevalid.validity.patternMismatch) {
         statevalid.setCustomValidity("Is this a real City/State ?");
     } else {
         statevalid.setCustomValidity("");
     }
 });

 var namevalid = document.getElementById("inputlname");
 var namevalid1 = document.getElementById("inputfname");

 namevalid.addEventListener("input", function (event) {
     if (namevalid.validity.patternMismatch) {
         namevalid.setCustomValidity("This not look like a real name..");
     } else {
         namevalid.setCustomValidity("");
     }
 });

 namevalid1.addEventListener("input", function (event) {
     if (namevalid1.validity.patternMismatch) {
         namevalid1.setCustomValidity("This not look like a real name..");
     } else {
         namevalid1.setCustomValidity("");
     }
 });

var zipvalid = document.getElementById("inputzip");
zipvalid.addEventListener("input", function (event) {
     if (zipvalid.validity.patternMismatch) {
         zipvalid.setCustomValidity("This isn't earth zip code, do you live in mars ?");
     } else {
         zipvalid.setCustomValidity("");
     }
 });