$('document').ready(function($){

	function hover(element) {
    element.setAttribute('src', 'img/ginger.jpg');
}
function unhover(element) {
    element.setAttribute('src', 'img/headshot.jpg');
}

    var scrollMagicController = new ScrollMagic();
  
  var tween1 = TweenMax.to('#data', 0.3, {
        .add(TweenMax.from("#data", 1, {autoAlpha: 0}))
        .add(TweenMax.from("#map", 1, {autoAlpha: 0}))
        .add(TweenMax.from("#curious", 1, {autoAlpha: 0}));
  });
  var scene1 = new ScrollScene({
    triggerElement: '#section2',
    offset: 50
  })
  .setClassToggle('body', 'scene-1-active')
  .setTween(tween1)
  .addTo(scrollMagicController);
  
    // Create Animation for 0.5s
  var tween2 = TweenMax.to('#animation-2', 0.3, {
        .add(TweenMax.from("#ds", 1, {autoAlpha: 0}))
        .add(TweenMax.from("#tink", 1, {autoAlpha: 0}))
        .add(TweenMax.from("#food", 1, {autoAlpha: 0}));
  });
  
  var scene2 = new ScrollScene({
    triggerElement: '#section3',
        offset: 50
  })
  .setClassToggle('body', 'scene-2-active')
  .setTween(tween2)
  .addTo(scrollMagicController);
  
  
  
});


