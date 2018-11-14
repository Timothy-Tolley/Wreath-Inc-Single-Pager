$(document).ready(() => {
  var bottomDiv = $('#further-text')
  var topDiv = $('#top-text')
  var scroll = 0
  var first = 0

  $('body').on('mousewheel', () => {
    scroll++
    if (first === 0 && scroll > 20) {
      bottomDiv.toggleClass('after-scroll')
      topDiv.toggleClass('after-scroll-top')
      scroll = 0
      first = 1
    } else {
      if (scroll > 50) {
        bottomDiv.toggleClass('after-scroll')
        topDiv.toggleClass('after-scroll-top')
        scroll = 0
      }
    }
  })
})

// Timeout

//   setTimeout(() => {
//     bottomDiv.toggleClass('after-scroll')
//     topDiv.toggleClass('after-scroll-top')
//   }, 4000)
// })
