var CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/dt9jd3i76/image/upload'
var CLOUDINARY_UPLOAD_PRESET = 'dt9jd3i76';
var imgPreview = document.getElementById('img-preview')
var fileUpload = document.getElementById('file-upload');
var imgURL;
  function updateURL() {
    $("#picture").val(imgURL);
    console.log("Done!")
  };
fileUpload.addEventListener('change', function() {
    //console.log(event);
    var file = event.target.files[0];
    var formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);

    axios({
        url: CLOUDINARY_URL,
        method: "POST",
        headers: {
           'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: formData
           
        }).then(function(res){
           console.log(res);
           //console.log(res.data.secure_url)
         imgURL = res.data.secure_url
           console.log(imgURL)
           updateURL();
           
        }).catch(function(err){
           console.error(err);
        });
       
    });