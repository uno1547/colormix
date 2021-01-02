// function blendColorValue(color1, color2, ratio) {
//     return Math.sqrt((1-ratio) * (color1 ** 2) + ratio * (color2 ** 2))
// }
// //red255,0,0 blue 0,0,255
// let newR = blendColorValue(255, 0, 0.5)
// let newG = blendColorValue(0, 153, 0.5)
// let newB = blendColorValue(0, 0, 0.5)
// console.log(newR ,newG, newB)
// const thirdPalette = document.querySelector("#third")
// //thirdPalette.style.backgroundColor = "rgb"+"("+newR+","+ newG+","+newB+")"
//  } else {

// }

const firstColor = document.querySelector(".color1")
const firstPalette = document.querySelector("#first")
let firstInput = false
firstColor.addEventListener("change", function() {
    firstPalette.style.backgroundColor = this.value
    // console.log(firstPalette.style.backgroundColor)
    if(this.value != "") {//
        firstInput = true
        // console.log("first"+firstInput)
    } else {
        firstInput = false
        // console.log("firstFalse")
    }
    inputState()
})

const secondColor = document.querySelector(".color2")
const secondPalette = document.querySelector("#second")
let secondInput = false
secondColor.addEventListener("change", function() {
    secondPalette.style.backgroundColor = this.value
    // console.log(secondPalette.style.backgroundColor)
    if(this.value != "") {
        secondInput = true
        // console.log("second"+secondInput)
    } else { 
        secondInput = false
        // console.log("secondFalse")
    }
    inputState()
})

const thirdColor = document.querySelector(".color3")
const thirdPalette = document.querySelector("#third")
let thirdInput = false
thirdColor.addEventListener("change", function() {
    thirdPalette.style.backgroundColor = this.value
    // console.log(thirdPalette.style.backgroundColor)
    if(this.value != "") {
        thirdInput = true
        // console.log("third" + thirdInput)
    } else {
        thirdInput = false
        // console.log("thirdFalse")
    }
    inputState()
})

function inputState() {
    if((firstInput)&&(secondInput)&&(thirdInput)) {
        console.log("allfilled")
        colorArrange()
    } else {
        console.log("someempty")
    }
}
function colorArrange() {
    const color1 = firstPalette.style.backgroundColor
    const color2 = secondPalette.style.backgroundColor
    const color3 = thirdPalette.style.backgroundColor
    console.log(color1, color2, color3)//rgb(255,255,0)
    const firstRGB = toArray(color1) // "[0,255,255]"
    const secondRGB = toArray(color2)// "[255,0,255]"
    const thirdRGB = toArray(color3)// "[255,255,0]"
    // const resultArea = document.querySelector(".box-container4")
    console.log("result-out")
    // resultArea.style.display = "flex"
    console.log(firstRGB, secondRGB, thirdRGB)
    const mixValues = []
    for(i = 0; i <= 10; i++) {
        let mixedValue = blendColor(firstRGB, secondRGB, (i*(1/10))) // 섞인상태의 rgb값리스트
        let distance = getDistance(mixedValue, thirdRGB)
        mixValues.push(distance)
    }
    console.log(mixValues)//각 거리들 들어간 리스트 
    mixValues.sort(function(a, b){return a - b})
    let min = mixValues[0]
    for(i = 0; i <= 10; i++) {
        let mixedValue = blendColor(firstRGB, secondRGB, (i*(1/10))) // 섞인상태의 rgb값리스트
        let distance = getDistance(mixedValue, thirdRGB)
        if (distance == min) {
            console.log("This is the index", i)
        }
    }
    console.log(min)
    exDiv = document.querySelector(".ex")
    exDive.innerHTML += ''
}

function toArray(color) {// rgb리스트에 3개로 저장
    const start = (color.indexOf("(")) + 1
    const end = (color.indexOf(")"))
    const colorCor = color.substring(start, end)
    const colorRGB = colorCor.split(", ")
    return colorRGB
}

function blendColor(RGB1, RGB2, ratio) {
    let valueList = []
    const newR = blendColorValue(RGB1[0], RGB2[0], ratio)
    // console.log(newR)
    valueList.push(newR)
    const newG = blendColorValue(RGB1[1], RGB2[1], ratio)
    // console.log(newG)
    valueList.push(newG)
    const newB = blendColorValue(RGB1[2], RGB2[2], ratio)
    // console.log(newB)
    valueList.push(newB)
    let exDiv = document.querySelector(".ex")
    exDiv.innerHTML += `<div class = "box-container4">
        <div class = "input result">Result color</div>
        <div class="palette" id="forth" style="background-color: rgb(${newR}, ${newG}, ${newB});"></div>
        <div style = ""></div>
    </div>`
    return valueList
    //whatis
}
function blendColorValue(color1, color2, ratio) {//color1,color2의 각 RGB값을따로 계산
    let value1 = Number(color1)
    let value2 = Number(color2)
    return Math.sqrt((1-ratio)*(value1**2)+(ratio*(value2**2)))
}

function getDistance(RGB, yourRGB) { //거리 잼
    let newRvalue = Number(RGB[0])
    let newGvalue = Number(RGB[1])
    let newBvalue = Number(RGB[2])
    let yourRvalue = Number(yourRGB[0])
    let yourGvalue = Number(yourRGB[1])
    let yourBvalue = Number(yourRGB[2])
    let distance = Math.sqrt((newRvalue-yourRvalue)**2+(newGvalue-yourGvalue)**2+(newBvalue-yourBvalue)**2)
    return distance
}