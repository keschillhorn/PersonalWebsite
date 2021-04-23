var particles = Particles.init({
	selector: '.background',
  color: ['#DA0463', '#404B69'],
  connectParticles: true,
  responsive: [{
  	breakpoint: 800,
    options: {
    	color: '#00C9B1',
    	maxParticles: 80,
      connectParticles: false
    }
  }]
});


// $(document).ready(function () {
//   $('.send-message-cta').click(function (event) {
//     event.preventDefault()

//     var email = $('.contact-email').val()
//     var name = $('.contact-name').val()
//     var message = $('.contact-message').val()
//     var statusElm = $('.status')
//     statusElm.empty()
    
//     if (email.length > 5 && email.includes('@') && email.includes('.')) {
//       statusElm.append('<h4> Email is valid </h4>')
//     } else {
//       statusElm.append('<h4> Email is  NOT valid </h4>')
//     }

//     if (name.length < 2) {
//       statusElm.append('<h4> Name is NOT valid </h4>')
//     }

//     if (message.length < 20) {
//       statusElm.append('<h4> Message is NOT valid </h4>')
//     }
//   })
// })