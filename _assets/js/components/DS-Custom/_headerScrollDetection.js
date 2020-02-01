// ----------------------------------------------
// Imports
// ----------------------------------------------
import $ from 'jquery';

// ----------------------------------------------
// Change header class on scroll
// ----------------------------------------------

const headerScrollDetection = () => {
  const header = document.getElementById("header");

  // var bodyScrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  //console.log(bodyScrollTop);

  if (document.documentElement.scrollTop || document.body.scrollTop) {
    // console.log("No scrolling: " + document.documentElement.scrollTop || document.body.scrollTop);
    header.classList.add("header__scrolling");
    header.classList.remove("header__fixed");
  }


  window.addEventListener('scroll', function(e) {

    var bodyScrollTop = document.documentElement.scrollTop || document.body.scrollTop;

    //console.log("After scrolling: " + bodyScrollTop);

    if (bodyScrollTop > 0) {
      header.classList.add("header__scrolling");
      header.classList.remove("header__fixed");
    } else {
      header.classList.add("header__fixed");
      header.classList.remove("header__scrolling");
    }
  });

  /*
  if (document.documentElement.scrollTop < 1 || document.body.scrollTop < 1) {
    header.classList.add("header__fixed");
  } else {
    header.classList.add("header__scrolling");
  }

  window.addEventListener('scroll', function(e) {
    if (document.documentElement.scrollTop < 1 || document.body.scrollTop < 1) {
      header.classList.add("header__fixed");
      header.classList.remove("header__scrolling");
    } else {
      header.classList.add("header__scrolling");
      header.classList.remove("header__fixed");
    }
  });
  */
}

// ----------------------------------------------
// Exports
// ----------------------------------------------
module.exports = {
  headerScrollDetection
};
