var number = 1;
do {
  function showPreview(event, number){
    if(event.target.files.length > 0){
      let src = URL.createObjectURL(event.target.files[0]);
      let preview = document.getElementById("file-ip-"+number+"-preview");
      preview.src = src;
      preview.style.display = "block";
    } 
  }
  function myImgRemove(number) {

    $('.click_image').removeClass('d-none').addClass('d-block');

      document.getElementById("file-ip-"+number+"-preview").src = "images/default-placeholder-image.png";
      document.getElementById("file-ip-"+number).value = null;

    }
  number++;
}
while (number < 5);


$('#click_image_label').click(function(){
  $('.click_image').removeClass('d-block').addClass('d-none');
});