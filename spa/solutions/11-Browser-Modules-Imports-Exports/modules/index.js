import { modulo } from './percentage.js'
import { calculateAspectRatio } from './aspect-ratio.js'

// Modulo
const modulo1 = document.querySelector("#modulo_1")
const modulo2 = document.querySelector("#modulo_2")
const moduloResult = document.querySelector("#modulo_result")

modulo2.addEventListener("input", () => {
    const firstValue = modulo1.value
    const secondValue = modulo2.value

    const result = modulo(firstValue, secondValue)
    moduloResult.value = result
})


// Aspect ratio calculation thing! Just like Photoshop or Gimp
const ratio1 = document.querySelector("#ratio_1")
const ratio2 = document.querySelector("#ratio_2")
const ratioWresult = document.querySelector("#ratio_result-width")
const ratioHresult = document.querySelector("#ratio_result-height")

ratioWresult.addEventListener("input", () => {
    const originalW = ratio1.value
    const originalH = ratio2.value
    const newW = ratioWresult.value

    const result = calculateAspectRatio(originalW, originalH, newW, "w")
    ratioHresult.value = result
})

ratioHresult.addEventListener("input", () => {
    const originalW = ratio1.value
    const originalH = ratio2.value
    const newH = ratioHresult.value

    const result = calculateAspectRatio(originalW, originalH, newH, "h")
    ratioWresult.value = result
})