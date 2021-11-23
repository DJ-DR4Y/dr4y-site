// import '../css/style.css'
import * as THREE from 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.module.js'
// import vertexShader from '../shaders/vertex.glsl'
// import fragmentShader from '../shaders/fragment.glsl'

import atmosphereVertexShader from '../shaders/atmosphereVertex.glsl'
import atmosphereFragmentShader from '../shaders/atmosphereFragment.glsl'
// import { Float32BufferAttribute } from './node_modules/three'
// import { OrbitControls } from '../node_modules/three/examples/jsm/controls/OrbitControls.js'

// VCARD-DR4Y

/**
 * Lancer Vue.js
 * Galerie classe
 * Ajouter la class ouvert au div vcard-mask
 * Charger les images avec PHP
 * Changer l'image principale
 * @param
 */


const Counter = {
  data() {
    return {
      counter: 0,
      phrase1: "Allô !",
      date: `Dernière connexion : ${new Date().toLocaleString()}`
    }
  },
  mounted() {
    this.phrase1
    setInterval(() => {
      this.counter++
    }, 1000)
  },
}

Vue.createApp(Counter).mount("#counter")


let menu = false
let img_clic = document.querySelector(".front-image")
img_clic.addEventListener("click", e => {
  e.preventDefault()
  if (menu == false) {
    let menu_ouvrir = document.querySelector(".vcard-mask")
    menu_ouvrir.classList.add("ouvert")
    menu = true
  } else if (menu == true) {
    let menu_ouvrir = document.querySelector(".vcard-mask")
    menu_ouvrir.classList.remove("ouvert")
    menu = false
  }
})

// // let url = "images_dr4y.json"
let url = "data/images.php"

// console.log(url)
fetch(url).then(reponse => {
  reponse.json().then(images => {
    let select_galerie = document.querySelector(".galerie-photo")
    for (let url_image of images) {
      let balise_img = document.createElement("img")
      select_galerie.appendChild(balise_img)
      balise_img.setAttribute("src", "images/dr4y-001/" + url_image)
      balise_img.setAttribute("alt", "images/dr4y-001/" + url_image)
      balise_img.addEventListener("click", e => {
        e.preventDefault()
        let photo = document.querySelector(".front-image")
        photo.setAttribute("src", "images/dr4y-001/" + url_image)
      })
    }
  })
})

// fetch("data/images.php").then(resp => {
//   resp.json().then(images => {

//     for (let url_image of images) {

//       let balise_img = document.createElement("img")
//       document.body.appendChild(balise_img)
//       balise_img.setAttribute("src", "images/" + url_image)
//     }
//     // console.log(images)
//   })
// })

// Vcard vue.js




const Vcard = {
  data() {
    return {
      nom: "DJ-DR4Y",
      job: "VJ & DJ",
      transport: "ËON vaisseau",
      phrase: "Au delà des limites!",
    }
  },
  mounted() {
    this.nom
    this.job
    this.transport
    this.phrase
  },
}

Vue.createApp(Vcard).mount("#vcard")

// Setup

// let items = document.querySelectorAll(".nav-items a")
// for (let item of items) {
//   let href = item.getAttribute("href") // #clients
//   // console.log(href)
//   item.addEventListener("click", e => {
//     e.preventDefault()
//     // e.stopPropagation()
//     let cible = document.querySelector(href) // <h2 id="clients">
//     console.log(cible)
//     let position_cible = cible.getBoundingClientRect()
//     window.scrollTo({
//       top: position_cible.top - 25,
//       left: 0,
//       behavior: "smooth",
//     })
//   })
// }

// let items = document.querySelectorAll(".nav-items a")
// for (let item of items) {
//   let href = item.getAttribute("href") // #clients
//   item.addEventListener("click", e => {
//     e.preventDefault()
//     let cible = document.querySelector(href) // <h2 id="clients">
//     console.log(cible)
//     let position_cible = cible.getBoundingClientRect()
//     window.scrollTo({
//       top: position_cible.top,
//       left: 0,
//       behavior: "smooth",
//     })
//   })
// }

/**
setInterval(() => {
            this.counter++
        }, 1000)
 */

let div_chargement = document.querySelector('#chargement')

let fichiers = [
  // 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.module.js',
  // '../shaders/atmosphereVertex.glsl',
  // '../shaders/atmosphereFragment.glsl',
  // "audio/A4.mp3",
  // "audio/A5.mp3",
  // "audio/B4.mp3",
  // "audio/B5.mp3",
  // "audio/C4.mp3",
  // "audio/C5.mp3",
  // "audio/C6.mp3",
  // './audio/tutti/Dolmens_drumKntk.wav',
  // './audio/DancingKing.wav',
  './audio/DancingKing.wav',
  './audio/Atlantis_Undersea_webcut.wav',
  // './images/rock_Asteroid_1Kl8bit_normal.png',
  // './images/rock_Asteroid_1K8bit.png',
  // './images/dr4y_logo.png',
  // './images/globe_dark_web.jpg',
  // './images/Earth_NormalNRM_6K.jpg',
  // './images/Earth_Glossiness_6K.jpg',
  // './images/Earth_Illumination_6K.jpg',
  // './images/Earth_Clouds_6K_web.jpg',
]
let fichiers_charges = 0

for (let fichier of fichiers) {
  let audio = new Audio(fichier)
  // let file = new File(fichier)

  audio.addEventListener('loadeddata', e => {
    fichiers_charges += 1
    let pourcentage = fichiers_charges / fichiers.length
    div_chargement.style.width = pourcentage * 100 + '%'

    if (pourcentage == 1) {
      fin_chargement()
    }
  })
}

function fin_chargement() {

  const audio = new Audio('./audio/Atlantis_Undersea_webcut.wav')
  audio.volume = 1
  audio.pause()
  let count = 0
  let btnJouer = document.querySelector('.btn-jouer')

  document.querySelector('.btn-jouer').addEventListener('click', e => {
    e.preventDefault()

    if (count == 0) {
      count = 1
      audio.play()
      btnJouer.textContent = 'Pause'
    } else {
      count = 0
      audio.pause()
      // audio.currentTime = 0
      btnJouer.textContent = 'Jouer'
    }
  })

}
// Méthode 1



// En test

// let audio = document.getElementById('.audio')
// let btnJouer = document.getElementById('.btn-jouer')
// let count = 0



// function playPause() {

//   if (count == 0) {
//     count = 1
//     audio.play()
//     btnJouer.innerHTML = 'Pause'
//   } else {
//     count = 0
//     audio.pause()
//     btnJouer.innerHTML = 'Jouer'

//   }

// }


// Méthode 2 AudioContext
// const context = new AudioContext()

// fetch("audios/C4.mp3")
//     .then(resp => resp.arrayBuffer())
//     .then(arrayBuffer => context.decodeAudioData(arrayBuffer))
//     .then(audioBuffer => {
//         const source = context.createBufferSource()
//         source.buffer = audioBuffer
//         source.connect(context.destination)
//         source.start()
//     })



const scene = new THREE.Scene()

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'), antialias: true
})
renderer.shadowMap.enabled = true
renderer.shadowMap.type = THREE.PCFSoftShadowMap

renderer.setPixelRatio(window.devicePixelRatio)
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.autorClear = false
renderer.setClearColor(0x000000, 0.0)

camera.position.setZ(30)
camera.position.setX(-3)


const render = () => {
  renderer.render(scene, camera)

}

// Torus

const torusGeometry = new THREE.TorusKnotGeometry(5.5, .15, 256, 8)
// const torusGeometry = new THREE.TorusKnotGeometry(21, .25, 128, 8)
// const torusGeometry = new THREE.TorusGeometry(10, 2, 32, 100)
// const material = new THREE.MeshStandardMaterial({ color: 0x362b53f2 })
const material = new THREE.MeshPhongMaterial({
  //roughness: 0.5,
  //metalness: .5,
  transparent: true, opacity: 1,
  color: 0x901fb3//, wireframe: true
})

const torus = new THREE.Mesh(torusGeometry, material)

torus.castShadow = true
torus.receiveShadow = true
scene.add(torus)

torus.position.z = -5
torus.position.x = 0
// torus.position.z = -13
// torus.position.setX(15)

// Lights

const pointLight = new THREE.DirectionalLight(0xffffff, 2.1)
pointLight.position.set(-25, 50, -35)
pointLight.castShadow = true

pointLight.shadow.mapSize.width = 512 // default
pointLight.shadow.mapSize.height = 512 // default
pointLight.shadow.camera.near = 0.5 // default
pointLight.shadow.camera.far = 500

// const dr4yLight = new THREE.DirectionalLight(0xffffff, 0.3)
// dr4yLight.position.set(0, 0, 5)
// dr4yLight.castShadow = true

// // const targetObject = new THREE.Object3D()
// // scene.add(targetObject)

// // light.target = targetObject

// // dr4y.position.z = -5
// // dr4y.position.x = 1.5

// dr4yLight.shadow.mapSize.width = 512 // default
// dr4yLight.shadow.mapSize.height = 512 // default
// dr4yLight.shadow.camera.near = 0.5 // default
// dr4yLight.shadow.camera.far = 500

const ambientLight = new THREE.AmbientLight(0x3f50b3, .65)
ambientLight.position.set(25, -48, 55)

scene.add(pointLight,
  ambientLight
  //dr4yLight
)

// Helpers

// const lightHelper = new THREE.PointLightHelper(pointLight)
// const gridHelper = new THREE.GridHelper(200, 50)
// scene.add(lightHelper, gridHelper)

// const controls = new OrbitControls(camera, renderer.domElement)


// Stars geometry

// Version test





// Version-1


const pointsVertices = []

for (let i = 0; i < 10000; i++) {

  const x = THREE.MathUtils.randFloatSpread(2000)
  const y = THREE.MathUtils.randFloatSpread(2000)
  const z = THREE.MathUtils.randFloatSpread(2000)

  pointsVertices.push(x, y, z)

}

const pointsGeometry = new THREE.BufferGeometry()
pointsGeometry.setAttribute('position', new THREE.Float32BufferAttribute(pointsVertices, 3))

const pointsMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 1.0, sizeAttenuation: true })

const points = new THREE.Points(pointsGeometry, pointsMaterial)

scene.add(points)

// Pluie de meteors

function addMeteors() {


  const meteorsTexture = new THREE.TextureLoader().load('./images/rock_Asteroid_1K8bit.png')
  const normalsTexture = new THREE.TextureLoader().load('./images/rock_Asteroid_1Kl8bit_normal.png')

  const geometry = new THREE.SphereGeometry(0.5, 16, 16)
  const material = new THREE.MeshStandardMaterial({
    map: meteorsTexture,
    normalMap: normalsTexture
  })
  const meteors = new THREE.Mesh(geometry, material)

  const [x, y, z] = Array(3)
    .fill()
    .map(() => THREE.MathUtils.randFloatSpread(100))

  meteors.position.set(x, y, z)
  meteors.castShadow = true
  meteors.receiveShadow = true
  scene.add(meteors)

}

Array(200).fill().forEach(addMeteors)


// User Background

// const spaceTexture = new THREE.TextureLoader().load('starry-sky.png')
// scene.background = spaceTexture

// Avatar

const dr4yTexture = new THREE.TextureLoader().load('./images/dr4y_logo.png')

const dr4y = new THREE.Mesh(new THREE.BoxGeometry(3.0, 3.0, 3.0), new THREE.MeshBasicMaterial({
  map: dr4yTexture, transparent: true, opacity: 1,
  // specularMap: dr4yTexture,
  // reflectivity: 1,
  blending: THREE.NormalBlending, side: THREE.DoubleSide,
}))

dr4y.castShadow = true
dr4y.receiveShadow = true
scene.add(dr4y)
dr4y.position.z = -5
dr4y.position.x = 0

// Earth

// Version-2

const earthTexture = new THREE.TextureLoader().load('./images/globe_dark_web.jpg')
const earthNormalTexture = new THREE.TextureLoader().load('./images/Earth_NormalNRM_6K.jpg')
const earthGlossyTexture = new THREE.TextureLoader().load('./images/Earth_Glossiness_6K.jpg')

const earth = new THREE.Mesh(
  new THREE.SphereGeometry(9, 64, 64),
  new THREE.MeshPhongMaterial({
    map: earthTexture,
    normalMap: earthNormalTexture,
    specularMap: earthGlossyTexture
  })
)

earth.castShadow = true
earth.receiveShadow = true
scene.add(earth)
earth.position.z = -13
earth.position.setX(15)



// Earth Illumination


// const earthIllumiTexture = new THREE.TextureLoader().load('./images/Earth_Illumination_6K.jpg')
// // const cloudsNormalTexture = new THREE.TextureLoader().load('./images/Earth_NormalNRM_6K.jpg')

// const earthIllumi = new THREE.Mesh(

//   new THREE.SphereGeometry(8, 64, 64),
//   new THREE.MeshPhongMaterial({
//     map: earthIllumiTexture,
//     blending: THREE.AdditiveBlending, side: THREE.FrontSide,
//     // transparent: true
//     // normalMap: earthNormalTexture
//   })
// )

// // earthIllumi.castShadow = false
// // earthIllumi.recieveShadow = false
// // scene.add(earthIllumi)
// earthIllumi.position.z = -13
// earthIllumi.position.setX(15)

// Earth clouds

// Version-2

const cloudsTexture = new THREE.TextureLoader().load('./images/Earth_Clouds_6K_web.jpg')
// const cloudsNormalTexture = new THREE.TextureLoader().load('./images/Earth_NormalNRM_6K.jpg')

const clouds = new THREE.Mesh(
  new THREE.SphereGeometry(9, 64, 64),
  new THREE.MeshPhongMaterial({
    map: cloudsTexture,
    blending: THREE.AdditiveBlending, side: THREE.DoubleSide,
    transparent: true,
    opacity: .75,
    depthWrite: false,
    // normalMap: earthNormalTexture
  })
)

clouds.scale.set(1.005, 1.005, 1.005)
clouds.castShadow = true
clouds.recieveShadow = true
scene.add(clouds)
clouds.position.z = -13
clouds.position.setX(15)

// Earth clouds shadow en TEST

// const cloudsShadowTexture = new THREE.TextureLoader().load('./images/Earth_Clouds_shadow_6K_web.jpg')
// // transparent: true, //opacity: 0.5,

// const clouds_shadow = new THREE.Mesh(
//   new THREE.SphereGeometry(8, 64, 64),
//   new THREE.MeshPhongMaterial({
//     map: cloudsShadowTexture,
//     blending: THREE.MultiplyBlending, side: THREE.FrontSide,
//     transparent: true
//     // normalMap: earthNormalTexture
//   })
// )

// clouds_shadow.scale.set(1.0, 1.0, 1.0)

// scene.add(clouds_shadow)
// clouds_shadow.position.z = -13
// clouds_shadow.position.setX(15)


// Earth atmosphere

const atmosphere = new THREE.Mesh(new THREE.SphereGeometry(9, 50, 50), new THREE.ShaderMaterial({
  vertexShader: atmosphereVertexShader,
  fragmentShader: atmosphereFragmentShader,
  blending: THREE.AdditiveBlending, side: THREE.FrontSide,
  transparent: true, opacity: 0.8,

}))

atmosphere.scale.set(1.03, 1.03, 1.03)

scene.add(atmosphere)
atmosphere.position.z = -13
atmosphere.position.setX(15)


// Meteor

const meteorTexture = new THREE.TextureLoader().load('./images/rock_Asteroid_1K8bit.png')
const normalTexture = new THREE.TextureLoader().load('./images/rock_Asteroid_1Kl8bit_normal.png')

const meteor = new THREE.Mesh(
  new THREE.SphereGeometry(5, 64, 64),
  new THREE.MeshStandardMaterial({
    map: meteorTexture,
    normalMap: normalTexture
  })
)

meteor.castShadow = true
meteor.receiveShadow = true
scene.add(meteor)

meteor.position.z = 30
meteor.position.setX(-10)

// dr4y.position.z = -5
// dr4y.position.x = 1.5

// Scroll Animation

function moveCamera() {
  const t = document.body.getBoundingClientRect().top
  meteor.rotation.x += 0.05
  meteor.rotation.y += 0.075
  meteor.rotation.z += 0.05

  earth.rotation.x += 0.01
  // earthIllumi.rotation.x += 0.01
  clouds.rotation.x += 0.012
  // clouds_shadow.rotation.x += 0.012
  // earth.rotation.y += 0.05

  dr4y.rotation.y += 0.025
  // dr4y.rotation.x += 0.025
  // dr4y.rotation.z += 0.025

  camera.position.z = t * -0.0065
  camera.position.x = t * -0.0002
  camera.rotation.y = t * -0.0002

}

document.body.onscroll = moveCamera
// document.body.addEventListener("onscroll", moveCamera)
moveCamera()

// Animation Loop

function animate() {
  requestAnimationFrame(animate)

  torus.rotation.x += 0.01
  torus.rotation.y += 0.005
  torus.rotation.z += 0.01

  meteor.rotation.x += 0.005
  dr4y.rotation.y += 0.0025

  earth.rotation.x += 0.001
  earth.rotation.y += 0.002
  // earthIllumi.rotation.x += 0.001
  // earthIllumi.rotation.y += 0.002
  atmosphere.rotation.x += 0.001
  atmosphere.rotation.y += 0.002
  clouds.rotation.x += 0.000625
  clouds.rotation.y += 0.00125
  // clouds_shadow.rotation.y += 0.003
  // clouds_shadow.rotation.y += 0.002
  // atmosphere.rotation.y += 0.004

  // controls.update()

  renderer.render(scene, camera)
}

animate()

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
  render()

}, false)
