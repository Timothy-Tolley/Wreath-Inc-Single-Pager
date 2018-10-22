$(document).ready(() => {
  var bottomDiv = $("#further-text");
  var topDiv = $("#top-text")
  var downArrow =$("#downArrow")
  setTimeout(() => {
    bottomDiv.toggleClass("after-scroll")
    topDiv.toggleClass("after-scroll-top")
    downArrow.toggleClass("active")
  }, 4000)
})

// mousewheel
// $('body').on('mousewheel', () => {
//   scroll++
//   if (scroll > 20) {
//     setInterval(() => {
//       timer++
//     }, 1000)
//     if(timer > 10) {
//     bottomDiv.toggleClass("after-scroll")
//     topDiv.toggleClass("after-scroll-top")
//     scroll = 0
//     timer = 0
//     }
//     else {
//       scroll = 0
//     }
//   }
// })