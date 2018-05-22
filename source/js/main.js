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
var countersel = 1;
    function addpass(){
        // $('.mdb-select').material_select('destroy');
        if (countersel == 4) {
            $('#addanother').text("Limit Reached");
            $('#addanother').addClass("disabled");
        }
        
        countersel++;
        $('#passenjer').append("<div class=entry" + countersel + "><p>&nbsp;</p><h5 class='mb-5 ml-0'>Passenger #" + countersel + "</h5><a href='#' id=entry" + countersel + " onclick='removepass();'>Remove</a><div class='row' id=numberz" + countersel + "><div class='col-md-4' id='selname2'><select class='mdb-select' id=sel"+ countersel +"><option value='1' selected>Mr.</option><option value='2'>Mrs.</option><option value='3'>Miss</option></select></div><div class='col-md-8'><div class='md-form form-group'><input type='text' class='form-control' id=inputname"+ countersel +" placeholder='Full Name'></div></div></div><div class='row' id=number" + countersel + "><div class='col-md-4 pt-3'><select class='mdb-select' id=idsel" + countersel + "><option value='1' selected>KTP/Govt. ID</option><option value='2'>SIM/Driving License</option><option value='3'>Passport</option><option value='3'>Other</option></select></div><div class='col-md-8'><div class='md-form form-group'><input type='text' class='form-control' id=inputid" + countersel + " placeholder='Type your ID Number'></div></div></div></div>");    
        $('#sel'+ countersel).material_select();
        $('#idsel'+ countersel).material_select();
        $('.dropdown-toggle').dropdown(); 
        $('#number' + countersel).addClass('animated fadeInUp');
        $('#numberz' + countersel).addClass('animated fadeInUp');
        $('body, html').animate({ scrollTop: $('#number' + countersel).offset().top }, 1000);
        $("div").remove('entry'+ countersel);

    };
    function removepass(){
$('.entry'+ countersel).remove();
countersel--;
$('body, html').animate({ scrollTop: $('#number' + countersel).offset().top }, 1000);
if (countersel == 5) {
    $('#addanother').text("Limit Reached");
    $('#addanother').addClass("disabled");
}
else {
    $('#addanother').text("Add Another");
    $('#addanother').removeClass("disabled");   
}
    };