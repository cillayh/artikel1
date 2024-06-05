  window.addEventListener('resize', function() {
    // Mendapatkan lebar layar
    var windowWidth = window.innerWidth;
  
    // Memilih elemen-elemen yang ingin diperbarui
    var box1 = document.querySelector('.box1');
    var box3 = document.querySelector('.box3');
  
    // Menentukan breakpoint untuk perubahan layout
    var breakpoint = 768;
  
    // Jika lebar layar lebih kecil dari breakpoint, maka kita mengubah tata letak box1 dan box3
    if (windowWidth < breakpoint) {
      box1.style.marginLeft = '5px';
      box1.style.marginRight = '5px';
      box3.style.marginLeft = '5px';
      box3.style.marginRight = '5px';
    } else {
      // Jika lebar layar lebih besar atau sama dengan breakpoint, maka kita mengembalikan tata letak ke semula
      box1.style.marginLeft = '700px';
      box1.style.marginRight = '5px';
      box3.style.marginLeft = '700px';
      box3.style.marginRight = '5px';
    }
  });
    