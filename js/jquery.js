function isEmail(email) {
    let regex = /^([a-zA-Z0-9_.@-])+$/;
    return regex.test(email);
}
function isNama(nama) {
    let regex = /^([a-z A-Z])+$/;
    return regex.test(nama);
}
function istlahir(tlahir) {
    let regex = /^([a-z A-Z])+$/;
    return regex.test(tlahir);
} 
$("#submitButton").click(function(){
    
    let errorMessage = "";
    let fieldsMissing = "";
    
    if ($("#nama").val() == ""){
        fieldsMissing += "<br>Nama";
    }
    if ($("#tlahir").val() == ""){
        fieldsMissing += "<br>Tempat Lahir";
    }
    if ($("#lahir").val() == ""){
        fieldsMissing += "<br>Tanggal Lahir";
    }
    if ($("#addres").val() == ""){
        fieldsMissing += "<br>Alamat";
    }
    if ($("#pos").val() == ""){
        fieldsMissing += "<br>Kode Pos";
    }
    if ($("#email").val() == ""){
        fieldsMissing += "<br>Email";
    }
    if ($("#telephone").val() == ""){
        fieldsMissing += "<br>Nomor Hp";
    }
    if ($("#password").val() == ""){
        fieldsMissing += "<br>Password";
    }
    if ($("#Check").val() == ""){
        fieldsMissing += "<br>Check";
    }
    if ($("#passwordConfirm").val() == ""){
        fieldsMissing += "<br>Confirm Password";
    }
    if(fieldsMissing != ""){
        errorMessage += "<p>Isi Data Yang Belum Terisi" + fieldsMissing; 
    }
    if (isNama($("#nama").val()) == false){
        errorMessage += "<p>Nama Tidak Boleh Di Isi Dengan Angka.</p>";
    }
    if (istlahir($("#tlahir").val()) == false){
        errorMessage += "<p>Tempat Lahir Tidak Boleh Dengan Angka.</p>";
    }
    if (isEmail($("#email").val()) == false){
        errorMessage += "<p>Email Anda Tidak Valid.</p>";
    }
    if ($.isNumeric($("#pos").val()) == false){
        errorMessage += "<p>Kode Pos Harus Berupa Angka.</p>";
    }
    if ($.isNumeric($("#telephone").val()) == false){
        errorMessage += "<p>No Hp Harus Berupa Angka.</p>";
    }
    if($("#password").val() != $("#passwordConfirm").val()){   
        errorMessage += "<p>Password Anda Tidak Sama</p>";                
    }
    if (errorMessage != ""){
        $("#errorMessage").html(errorMessage);
    } else{
        $("#successMessage").show();
        $("#errorMessage").hide();
    }    
});
var cd;
var IsAllowed = false;
$(document).ready(function() {
    CreateCaptcha();
});

function CreateCaptcha() {
    var alpha = new Array('A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9');               
    var i;
    for (i = 0; i < 6; i++) {
        var a = alpha[Math.floor(Math.random() * alpha.length)];
        var b = alpha[Math.floor(Math.random() * alpha.length)];
        var c = alpha[Math.floor(Math.random() * alpha.length)];
        var d = alpha[Math.floor(Math.random() * alpha.length)];
        var e = alpha[Math.floor(Math.random() * alpha.length)];
        var f = alpha[Math.floor(Math.random() * alpha.length)];
    }
    cd = a + ' ' + b + ' ' + c + ' ' + d + ' ' + e + ' ' + f;
    $('#CaptchaImageCode').empty().append('<canvas id="CapCode" class="capcode" width="300" height="80"></canvas>')
        var c = document.getElementById("CapCode"),
        ctx=c.getContext("2d"),
        x = c.width / 2,
        img = new Image();
    img.src = "https://images.unsplash.com/photo-1656870679469-156e3c955489?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE3fDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60";
    img.onload = function () {
        var pattern = ctx.createPattern(img, "repeat");
        ctx.fillStyle = pattern;
        ctx.fillRect(0, 0, c.width, c.height);
        ctx.font="46px Roboto Slab";
        ctx.fillStyle = '#212121';
        ctx.textAlign = 'center';
        ctx.setTransform (1, -0.12, 0, 1, 0, 15);
        ctx.fillText(cd,x,55);
    };
}
// Validate Captcha
function ValidateCaptcha() {
    var string1 = removeSpaces(cd);
    var string2 = removeSpaces($('#UserCaptchaCode').val());
    if (string1 == string2) {
        return true;
    }
    else {
        return false;
    }
}
// Remove Spaces
function removeSpaces(string) {
    return string.split(' ').join('');
}
    
    // Check Captcha
    function CheckCaptcha() {
    let result = ValidateCaptcha();
    if( $("#UserCaptchaCode").val() == "" || $("#UserCaptchaCode").val() == null || $("#UserCaptchaCode").val() == "undefined") {
        $('#WrongCaptchaError').text('Masukan Code Yang Berada Di gambar bawah.').show();
        $('#UserCaptchaCode').focus();
    } else {
        if(result == false) { 
        IsAllowed = false;
        $('#WrongCaptchaError').text('Captcha Salah! Silahkan Ulangi Lagi.').show();
        CreateCaptcha();
        $('#UserCaptchaCode').focus().select();
        }
        else { 
        IsAllowed = true;
        $('#UserCaptchaCode').val('').attr('place-holder','Enter Captcha - Case Sensitive');
        CreateCaptcha();
        $('#WrongCaptchaError').fadeOut(100);
        $('#SuccessMessage').fadeIn(500).css('display','block').delay(5000).fadeOut(250);
        }
    }  
}