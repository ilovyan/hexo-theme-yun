const numberOfParticules = 20

const minOrbitRadius = 50
const maxOrbitRadius = 100

const minCircleRadius = 10
const maxCircleRadius = 20

const minAnimeDuration = 900 
const maxAnimeDuration = 1500

const minDiffuseRadius = 50
const maxDiffuseRadius = 100


var canvasEl = document.querySelector('.fireworks')
if (canvasEl) {
  var ctx = canvasEl.getContext('2d')
  var pointerX = 0
  var pointerY = 0
  // var tap = ('ontouchstart' in window || navigator.msMaxTouchPoints) ? 'touchstart' : 'mousedown'
  // Fixed the mobile scroll
  var tap = 'mousedown'
  // var colors = ['#FF1461', '#18FF92', '#5A87FF', '#FBF38C']
  // 星空蓝
  var colors = [
    '102, 167, 221',
    '62, 131, 225',
    '33, 78, 194',
    // '3, 28, 95',
    // '0, 8, 55'
  ]

  var setCanvasSize = debounce(function () {
    canvasEl.width = window.innerWidth
    canvasEl.height = window.innerHeight
    canvasEl.style.width = window.innerWidth + 'px'
    canvasEl.style.height = window.innerHeight + 'px'
    canvasEl.getContext('2d').scale(1, 1)
  }, 500)

  var render = anime({
    duration: Infinity,
    update: function () {
      ctx.clearRect(0, 0, canvasEl.width, canvasEl.height)
    }
  })

  document.addEventListener(tap, function (e) {
    if (e.target.id !== 'sidebar' && e.target.id !== 'toggle-sidebar' && e.target.nodeName !== 'A' && e.target.nodeName !== 'IMG') {
      render.play()
      updateCoords(e)
      animateParticules(pointerX, pointerY)
    }
  }, false)

  setCanvasSize()
  window.addEventListener('resize', setCanvasSize, false)
}

function updateCoords (e) {
  pointerX = (e.clientX || e.touches[0].clientX) - canvasEl.getBoundingClientRect().left
  pointerY = e.clientY || e.touches[0].clientY - canvasEl.getBoundingClientRect().top
}

function setParticuleDirection (p) {
  var angle = anime.random(0, 360) * Math.PI / 180
  var value = anime.random(minDiffuseRadius, maxDiffuseRadius)
  var radius = [-1, 1][anime.random(0, 1)] * value
  return {
    x: p.x + radius * Math.cos(angle),
    y: p.y + radius * Math.sin(angle)
  }
}

function createParticule (x, y) {
  var p = {}
  p.x = x
  p.y = y
  p.color = 'rgba(' + colors[anime.random(0, colors.length - 1)] + ',' + anime.random(0.2, 0.6) + ')'
  p.radius = anime.random(minCircleRadius, maxCircleRadius)
  p.endPos = setParticuleDirection(p)
  p.draw = function () {
    ctx.beginPath()
    ctx.arc(p.x, p.y, p.radius, 0, 2 * Math.PI, true)
    ctx.fillStyle = p.color
    ctx.fill()
  }
  return p
}

function createCircle (x, y) {
  var p = {}
  p.x = x
  p.y = y
  p.color = '#000'
  p.radius = 0.1
  p.alpha = 0.5
  p.lineWidth = 6
  p.draw = function () {
    ctx.globalAlpha = p.alpha
    ctx.beginPath()
    ctx.arc(p.x, p.y, p.radius, 0, 2 * Math.PI, true)
    ctx.lineWidth = p.lineWidth
    ctx.strokeStyle = p.color
    ctx.stroke()
    ctx.globalAlpha = 1
  }
  return p
}

function renderParticule (anim) {
  for (var i = 0; i < anim.animatables.length; i++) {
    anim.animatables[i].target.draw()
  }
}

function animateParticules (x, y) {
  var circle = createCircle(x, y)
  var particules = []
  for (var i = 0; i < numberOfParticules; i++) {
    particules.push(createParticule(x, y))
  }
  anime.timeline().add({
    targets: particules,
    x: function (p) {
      return p.endPos.x
    },
    y: function (p) {
      return p.endPos.y
    },
    radius: 0.1,
    duration: anime.random(minAnimeDuration, maxAnimeDuration),
    easing: 'easeOutExpo',
    update: renderParticule
  })
    .add({
      targets: circle,
      radius: anime.random(minOrbitRadius, maxOrbitRadius),
      lineWidth: 0,
      alpha: {
        value: 0,
        easing: 'linear',
        duration: anime.random(600, 800)
      },
      duration: anime.random(1200, 1800),
      easing: 'easeOutExpo',
      update: renderParticule,
      offset: 0
    })
}