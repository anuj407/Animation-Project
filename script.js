// locomotive for Smooth scrolling
function locomotive() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#locomotive"),
    smooth: true,

    // for tablet smooth
    tablet: { smooth: true },

    // for mobile
    smartphone: { smooth: true }
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#locomotive", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight
      };
    }

    // follwoing line is not required to work pinning on touch screen

    /* pinType: document.querySelector("#locomotive").style.transform
      ? "transform"
      : "fixed"*/
  });
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();

}
// Loader.......
function Loader() {
  var tl = gsap.timeline()
  tl.from("#line h1,#line h2", {
    y: 200,
    opacity: 0,
    duration: 1,
    stagger: 0.4,
    delay: 0.4
  })
  tl.from("#line-part-1 span", {
    opacity: 0,
    onStart: function () {
      var counter = document.querySelector("#counter")
      var count = ""
      var int = setInterval(function () {
        count++
        if (count === 100) {
          clearInterval(int)
        }
        counter.textContent = count
      }, 30)
    }
  });
  tl.to("#line", {
    opacity: 0,
    delay: 2.8,
    stagger: 0.1
  })
  tl.to("#loader #line", {
    display: "none"
  })
  tl.from("#main", {
    y: 1200,
    duration: 0.5
    
  })
  tl.from("#Center-line h1,.flex", {
    y: 200,
    opacity: 0,
    duration: 1,
    stagger: 0.4,
    delay: 0.4
  })
  tl.from("#video-container",{
    y:100,
    display:"none",
    duration:0.5
  })
}
// Curser....... 
function Curser() {
  Shery.mouseFollower({
    skew: true,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });
  // Magnet for nav 
  Shery.makeMagnet("#right-nav h4");
}
//Flag Animation
function FlagAnime() {
  document.addEventListener("mousemove", function (dets) {
    gsap.to("#flag", {
      y: dets.y,
      x: dets.x
    })
  })
  var WebGraphic = document.querySelector("#Center-line:nth-child(3)")
  WebGraphic.addEventListener("mouseenter", function () {
    gsap.to("#flag", {
      opacity: 1
    })
  })
  WebGraphic.addEventListener("mouseleave", function () {
    gsap.to("#flag", {
      opacity: 0
    })
  })
}
// Video Section........
function VideoSection() {
  var videoCont = document.querySelector("#video-container")
  var img = document.querySelector("#video-container img")
  var video = document.querySelector("#video-container video")
  var play = document.querySelector("#video-section-curser i:nth-child(1)")
  var pause = document.querySelector("#video-section-curser i:nth-child(2)")
  videoCont.addEventListener("mouseenter", function () {
    videoCont.addEventListener("mousemove", function (elme) {
      gsap.to("#video-section-curser", {
        left: elme.x - 450,
        top: elme.y - 250
      })
    })
  })
  videoCont.addEventListener("mouseout", function () {
    gsap.to("#video-section-curser", {
      left: "80%",
      top: 0,
    })
  })

  var int = videoCont.addEventListener("click", function () {
    if (video.paused) {
      video.play();
      img.style.display = "none"
      play.style.display = "none"
      pause.style.display = "block"
    }
    else {
      img.style.display = "block"
      video.pause();
      play.style.display = "block"
      pause.style.display = "none"
    }

  })
}
//For slow scroller
function slowScroll(){
  const scroll = new LocomotiveScroll({
    el: document.querySelector('#locomotive'),
    smooth: true
  });
}
// Image Effect
function imageEffect() {

  Shery.imageEffect(".img-div", {
    style: 5,
    config: { "a": { "value": 2, "range": [0, 30] }, "b": { "value": 0.92, "range": [-1, 1] }, "zindex": { "value": -9996999, "range": [-9999999, 9999999] }, "aspect": { "value": 0.801395075401417 }, "ignoreShapeAspect": { "value": true }, "shapePosition": { "value": { "x": 0, "y": 0 } }, "shapeScale": { "value": { "x": 0.5, "y": 0.5 } }, "shapeEdgeSoftness": { "value": 0, "range": [0, 0.5] }, "shapeRadius": { "value": 0, "range": [0, 2] }, "currentScroll": { "value": 0 }, "scrollLerp": { "value": 0.07 }, "gooey": { "value": true }, "infiniteGooey": { "value": false }, "growSize": { "value": 4, "range": [1, 15] }, "durationOut": { "value": 1, "range": [0.1, 5] }, "durationIn": { "value": 1.5, "range": [0.1, 5] }, "displaceAmount": { "value": 0.5 }, "masker": { "value": true }, "maskVal": { "value": 1.24, "range": [1, 5] }, "scrollType": { "value": 0 }, "geoVertex": { "range": [1, 64], "value": 1 }, "noEffectGooey": { "value": true }, "onMouse": { "value": 1 }, "noise_speed": { "value": 0.61, "range": [0, 10] }, "metaball": { "value": 0.5, "range": [0, 2] }, "discard_threshold": { "value": 0.5, "range": [0, 1] }, "antialias_threshold": { "value": 0, "range": [0, 0.1] }, "noise_height": { "value": 0.29, "range": [0, 2] }, "noise_scale": { "value": 12.21, "range": [0, 100] } },
    gooey: true
  })

}
function LetsCreate(){
  var h1=document.querySelector(".lets-create")
  document.querySelector(".h1-container").addEventListener("mouseenter",function(){
    h1.style.webkitTextStroke="0.1px #fff"
    h1.style.color="transparent"
    h1.style.width="90%"
    h1.style.fontFamily="silk serif"
    h1.style.fontStyle="italic"
    gsap.to("h1",{
      duration:1,
      onstart:function(){
        $('h1').textillate({ in: { effect: 'fadeIn' } });
      }
    })
  })
  document.querySelector(".h1-container").addEventListener("mouseleave",function(){
    h1.style.color="#fff"
    h1.style.width="70%"
    h1.style.fontFamily="plain light"
    h1.style.fontStyle="normal",
    gsap.to(".lets-create",{
      duration:1,
      delay:5,
      onstart:function(){
        $('.lets-create').textillate({ in: { effect: 'fadeIn' } });
      }
      
    })
  })
}
// Call 
locomotive()
Loader()
Curser()
FlagAnime()
VideoSection()
imageEffect()
LetsCreate()

var p = document.querySelectorAll("#main-container p")
p.forEach(element =>{ 
  element.addEventListener("mouseenter", function () {
    // console.log(element)
    gsap.to('${element}', {
      y: -40,
      duration: 0.5,
    })
  })
  element.addEventListener("mouseleave", function () {
    gsap.to("${element}", {
      y: 0,
      duration: 0.5,
    })
  })
})