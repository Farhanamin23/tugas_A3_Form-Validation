**jquery form validation dengan captcha input**

> tugas A3 Di Salt Academy kali ini saya membuat jquery form validaiton dengan captcha input

### pertama kita membuat dulu table pada file hmtl

```
pada clsss form itu akan saya gunakan untuk membaut file di css nya
<div class = "form-element">
                <label for = "nama">Nama Lengkap</label>
                <input type = "text" name = "nama" id = "nama" placeholder = "Masukan Nama Lengkap Anda">
            </div>
            <div class = "form-element">
                <label for = "addres">Alamat</label>
                <input type = "text" name = "addres" id = "addres" placeholder = "Masukan Alamat Anda">
            </div>
            <div class = "form-element">
                <label for = "TempatLahir">Tempat Lahir</label>
                <input type = "text" name = "tlahir" id = "tlahir" placeholder = "Masukan Tempat Lahir Anda">
            </div>
            <div>
            <div class="form-element">
                <label for="TanggalLahir">Tanggal Lahir:</label>
                <input type="date" id="lahir" name="lahir" placeholder="TanggalLahir">
            </div>
```

### kita menambahkan lib dari ajax jquery

> pada script ini kita tempatkan di head html

```
   <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
```

> pada script yang ini kita tempatkan di bawah file di atas body html

```
  <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.js'></script>
```

#### kita membuat file jquery untuk form validation pendafataran

> kita membuat function variable email dan nama ini membuat batasan input data dalam field yang akan kita buat di luar dari variable yang kita buat jquery akan memberikan informasi eror

```
function isEmail(email) {
    let regex = /^([a-zA-Z0-9_.@-])+$/;
    return regex.test(email);
}
function isNama(nama) {
    let regex = /^([a-z A-Z])+$/;
    return regex.test(nama);
}

```

```
 if (isNama($("#nama").val()) == false){
        errorMessage += "<p>Nama Tidak Boleh Di Isi Dengan Angka.</p>";
    }
    if (isEmail($("#email").val()) == false){
        errorMessage += "<p>Email Anda Tidak Valid.</p>";
    }
```

> kita memberikan field mising pada submit button yang akan memberikan eror jika user lupa mengisi salah satu data form

```
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
```

> kita akan membuat variable captcha untuk validation user pada form yang akan kita buat

````
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
    ```

````

> lalu kita membuat validasi pada captcha yang kita buat di variable create captcha sebelumnya

```
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

```

### setelah membuat file jquery kita akan memasukan script nya di dalam file html yang kita buat sebelumunya tempatkan di atas akhir body

```
  <script  src="/js/jquery.js"></script>
```

#### panduan untuk menginstall pluggin ini

pertama ketikan npm init pada project anda
lalu ketikan npm npm i tugas_jquery_amin_farhan

### priview tampilan plugin pada form validation ini

<!DOCTYPE html>
<html lang="id">
<head>
    <title>Form Pendaftaran</title>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel = "stylesheet" type = "text/css" href = "css/style.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
</head>
    <body>
    <div class="form">  
        <div id="wrapper">
            <div id="successMessage">Pendafataran Anda Berhasil!</div>
            <div id="errorMessage"></div>
            <h4>Form Pendaftaran</h4>
            <div class = "form-element">
                <label for = "nama">Nama Lengkap</label>
                <input type = "text" name = "nama" id = "nama" placeholder = "Masukan Nama Lengkap Anda">
            </div>
            <div class = "form-element">
                <label for = "addres">Alamat</label>
                <input type = "text" name = "addres" id = "addres" placeholder = "Masukan Alamat Anda">
            </div>
            <div class = "form-element">
                <label for = "TempatLahir">Tempat Lahir</label>
                <input type = "text" name = "tlahir" id = "tlahir" placeholder = "Masukan Tempat Lahir Anda">
            </div>
            <div>
            <div class="form-element">
                <label for="TanggalLahir">Tanggal Lahir:</label>
                <input type="date" id="lahir" name="lahir" placeholder="TanggalLahir">
            </div>
            <div class="form-element">
                <label for="gender">Jenis Kelamin:</label>
                <select name="gender" id="gender">
                    <option value="male">Laki-Laki</option>
                    <option value="female">Perempuan</option>
                </select>
            </div>
            <div class = "form-element">
                <label for = "Pos">Kode Pos</label>
                <input type = "text" name = "pos" id = "pos" placeholder = "Masukan Kode Pos Anda">
            </div>
            <div class = "form-element">
                <label for = "email">Email</label>
                <input type = "text" name = "email" id = "email" placeholder = "Masukan Email Anda">
            </div>
            <div class = "form-element">
                <label for = "telephone">Nomor Hp</label>
                <input type = "text" name = "telephone" id = "telephone" placeholder = "Masukan No Hp Anda">
            </div>
            <div class = "form-element">
                <label for = "password">Password</label>
                <input type = "password" name = "password" id = "password">
            </div>
            <div class = "form-element">
                <label for = "passwordConfirm">Confirm Password</label>
                <input type = "password" name = "passwordConfirm" id = "passwordConfirm">
            </div>
            <div class="checkbox">
                <label><input type="checkbox" name="Check" id="Check"/><p>Klik Check Box Jika Anda Setuju Dengan Peraturan Kami</p> </label>
            </div>
            <section class="form-element">
            <fieldset class="captchaField">
                <span id="SuccessMessage" class="success">Captcha Benar! Sekarang Anda Bisa Daftar , </span>
                <input type="text" id="UserCaptchaCode" class="CaptchaTxtField" placeholder='Masukan Captcha Anda'>
                <span id="WrongCaptchaError" class="error"></span>
                <div class='CaptchaWrap'>
            <div id="CaptchaImageCode" class="CaptchaTxtField">
                <canvas id="CapCode" class="capcode" width="300" height="80"></canvas>
            </div> 
                <input type="button" class="ReloadBtn"  value="`" onclick='CreateCaptcha();'>
            </div>
                <input type="button" class="btnSubmit" onclick="CheckCaptcha(); Submit();" value="Submit">
            </fieldset>
            </section>
            <div class = "form-element">
                <input type = "submit" id = "submitButton" value = "DAFTAR">
            </div>
        </div>
    </div>
    <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.js'></script>
    <script  src="/js/jquery.js"></script>
</body>
</html>
