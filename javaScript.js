function massageSubmited(){
    const show = document.getElementById('massage');
    const toast = new bootstrap.Toast(show); 
    toast.show();
}
function addNew(photoId) {
    const mealPhoto = document.getElementById(photoId);
    mealPhoto.src = "./Photo/photo19.png";
  }


