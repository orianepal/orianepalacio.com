  function screen_resize(x){
    var x = window.matchMedia("(max-width: 800px)")

    if(x.matches){

      openNavsmall();

    }else{

      openNav();

    }
  }



   function openNav() {
      var e = document.getElementById("sidenav");

      if (e.style.width == '25%')

      {
          e.style.width = '0px';

      }else{

          e.style.width = '25%';
      }
  }


     function openNavsmall() {
      var e = document.getElementById("sidenav");

      if (e.style.width == '75%')
      {
          e.style.width = '0px';
      }
      else 
      {
          e.style.width = '75%';
      }
  }

  function closeNav() {
      document.getElementById("sidenav").style.width = "0";
  }






