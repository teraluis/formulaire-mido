$(document).ready(function(){
var today = new Date();
var dd = today.getDate()+3;
var mm = today.getMonth() + 1; //January is 0!

var yyyy = today.getFullYear();
if (dd < 10) {
  dd = '0' + dd;
} 
if (mm < 10) {
  mm = '0' + mm;
} 
var today = yyyy+"-"+mm+"-"+dd;

  $(window).keydown(function(event){
    if(event.keyCode == 13) {
      event.preventDefault();
      return false;
    }
  });
  let modal2 = document.getElementById("chargement");
  modal2.style.display="none";
  var formulaire = $('#formulaire');
  function submitWebToStore() {
      var form = formulaire.serialize();
      
      $.ajax({
          type: "POST",
          dataType: "json",
          url: $('#formulaire').attr( 'action' ),
          data: form,
          reponseType:'json',
          beforeSend: function () {
            $("#article_formulaire").hide();
            let chargement = document.getElementById("chargement");
            chargement.style.display="block";
/*            $("#article_formulaire").hide();
            $("#chargement").show();*/
          },
          success: function (data) {
            var obj=data;
            if(obj=="addresse_mail_existe"){
              $("#chargement").hide();
              $("#wrong_mail").show();
            }else {
              $("#chargement").hide();
              $(".cacher").hide();
              let chargement = document.getElementById("succees");
              chargement.style.display="block";
            }           
          },
          complete: function () {

          },
          error: function (jqXHR, textStatus, errorThrown) {
            console.log(jqXHR + " :: " + textStatus + " :: " + errorThrown);
            $("#succees").hide();
            let echec = document.getElementById("echec");
            echec.style.display="block";
            let succees = document.getElementById("succees");
            succees.style.display="none";
            $("#succees").hide();
          }
      });
  }
  function validateEmail(candidate){
    let emailRegex = new RegExp("^[0-9a-zA-Z._-]+@[0-9a-zA-Z]{2,}\.[a-z]{2,6}$");
    
    return emailRegex.test(candidate);
  }
  function validatePhone(candidate){
    let emailRegex = new RegExp("^[0-9/._-]+$");
    
    return emailRegex.test(candidate);
  }
  function validateString(candidate){
    let emailRegex = new RegExp("^[A-Za-z]+$");
    
    return emailRegex.test(candidate);
  }
  $("#enter").click(function(e){
    e.preventDefault();
    if($("#nom").val()!="" 
      && $("#prenom").val()!=""
      && $("#email").val()!=""
      && $("#phone").val()!="" 
      && $("#company").val()!=""
      && $("#country").val()!=""
      && $("#postal").val()!=""
      ){
        var nom = $("#nom").val();
        var prenom = $("#prenom").val();
        let validNom = validateString(nom);
        let validPrenom = validateString(prenom);
        var email = $("#email").val();
        var phone = $("#phone").val();
        var valid_email = validateEmail(email);
        var validPhone = validatePhone(phone);
        var validNomPrenom = validNom*validPrenom;
        console.log("valid nom prenom "+validNomPrenom);
        if(valid_email==true && validPhone==true && validNomPrenom==1){
          $("#article_formulaire").hide();
          $("#warning").hide();
          $("#alert").hide();
          let chargement = document.getElementById("chargement");
          chargement.style.display="block";
          submitWebToStore();
        }else if(valid_email==false && validPhone==true && validNomPrenom==1){
          $("#warning").text("");
          $("#warning").text("there is an error in your email address");
          $("#warning").show();
          $("#mail_aide").text("There is an error in your mail address");
          $("#mail_aide").css("background-color", "yellow")
          alert("there is an error in your mail address");
        }else if(valid_email==false && validPhone==false && validNomPrenom==1){
          $("#warning").text("");
          $("#warning").text("there is an error in your phone or mobil number");
          $("#phone_aide").text("There is an error in your phone");
          $("#phone_aide").css("background-color", "yellow");
          alert("there is an error in your phone or modbil number");
        }else if(valid_email==true && validPhone==true && validNomPrenom==1){
          $("#warning").text("");
          $("#warning").text("there is an error in your phone and in your email");
          $("#warning").show();
          $("#phone_aide").text("There is an error in your phone");
          $("#phone_aide").css("background-color", "yellow");
          $("#mail_aide").text("There is an error in your mail address");
          $("#mail_aide").css("background-color", "yellow")
          alert("there is an error in your phone and in your email");
        }else if(valid_email==true && validPhone==true && validNomPrenom==0){
          $("#warning").text("");
          $("#warning").text("there is an error in your name or surname");
          $("#warning").show();
          alert("there is an error in your name or surname");
        }else if(valid_email==false && validPhone==true && validNomPrenom==0){
          $("#warning").text("");
          $("#warning").text("there is an error in your name or surname and email");
          $("#warning").show();
          alert("there is an error in your name or surname and email");
        }else if(valid_email==false && validPhone==false && validNomPrenom==0){
          $("#warning").text("");
          $("#warning").text("there is an error in your name or surname , email and phone");
          $("#warning").show();
          alert("there is an error in your name or surname email and phone");
        }
    }else {
      $("#alert").show();
      alert("please complete all fields correctly.");
    }

    });
    $("input[name='email']").blur(function verifMail(){
      
      
      if($(this).val().length<1){
            $(this).css("background-color","red");
            $(this).css("color","white");
            $("#mail_aide").text("");
            $("#mail_aide").text("mail must not be empty");
/*            $(this).next("#checkIcon").removeClass("fa-check");
            $(this).next("#checkIcon").addClass("fa-times-circle");*/
            
      }else {
          if(!validateEmail($(this).val())){
              
              $(this).css("background-color","red");
         
              $("#mail_aide").text("");
              $("#mail_aide").text("the email address is not valid")
          }else if(validateEmail($(this).val())){
              $(this).css("background-color","white");
              $(this).css("color","black");
              $("#mail_aide").text("");


          }
      }
    });
    $("input[name='nom']").blur(function verifNom(){
      
      
      if($(this).val().length<2){
            $(this).css("background-color","red");
             $(this).css("color","white");
            $("#nom_aide").text("");
            $("#nom_aide").text("name must not be empty and minimum 2 caracters");
/*            $(this).next("#checkIcon").removeClass("fa-check");
            $(this).next("#checkIcon").addClass("fa-times-circle");*/
            
      }else {
              $(this).css("background-color","white");
               $(this).css("color","black");
              $("#nom_aide").text("");
      }
    });
    $("input[name='prenom']").blur(function verifPrenom(){
      
      
      if($(this).val().length<2){
            $(this).css("background-color","red");
             $(this).css("color","white");
            $("#prenom_aide").text("");
            $("#prenom_aide").text("surname must not be empty and minimum 2 caracters");
/*            $(this).next("#checkIcon").removeClass("fa-check");
            $(this).next("#checkIcon").addClass("fa-times-circle");*/
            
      }else {
              $(this).css("background-color","white");
               $(this).css("color","black");
              $("#prenom_aide").text("");
      }
    });
    $("input[name='phone']").blur(function verifPhone(){
      if($(this).val().length<8){
            $(this).css("background-color","red");
             $(this).css("color","white");
            $("#phone_aide").text("");
            $("#phone_aide").text("surname must not be empty aAND MINIMUM 8 digits");
/*            $(this).next("#checkIcon").removeClass("fa-check");
            $(this).next("#checkIcon").addClass("fa-times-circle");*/
            
      }else {
              $(this).css("background-color","white");
               $(this).css("color","black");
              $("#phone_aide").text("");
      }
    });
    $("input[name='company']").blur(function verifCompany(){
      if($(this).val().length<1){
            $(this).css("background-color","red");
             $(this).css("color","white");
            $("#company_aide").text("");
            $("#company_aide").text("company must not be empty");
/*            $(this).next("#checkIcon").removeClass("fa-check");
            $(this).next("#checkIcon").addClass("fa-times-circle");*/
            
      }else {
              $(this).css("background-color","white");
               $(this).css("color","black");
              $("#company_aide").text("");
      }
    });
    $("input[name='country']").blur(function verifCountry(){
      if($(this).val().length<1){
            $(this).css("background-color","red");
             $(this).css("color","white");
            $("#country_aide").text("");
            $("#country_aide").text("Country must not be empty");
/*            $(this).next("#checkIcon").removeClass("fa-check");
            $(this).next("#checkIcon").addClass("fa-times-circle");*/
            
      }else {
              $(this).css("background-color","white");
               $(this).css("color","black");
              $("#country_aide").text("");
      }
    });
    $("input[name='postal']").blur(function verifPostal(){
      if($(this).val().length<1){
            $(this).css("background-color","red");
             $(this).css("color","white");
            $("#postal_aide").text("");
            $("#postal_aide").text("Country must not be empty");
/*            $(this).next("#checkIcon").removeClass("fa-check");
            $(this).next("#checkIcon").addClass("fa-times-circle");*/
            
      }else {
              $(this).css("background-color","white");
               $(this).css("color","black");
              $("#postal_aide").text("");
      }
    });
});