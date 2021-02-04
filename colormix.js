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

/* const firstColor = document.querySelector(".color1")
const firstPalette = document.querySelector("#first")
let firstInput = false
firstColor.addEventListener("change", function() {
    firstPalette.style.backgroundColor = this.value
    // console.log(firstPalette.style.backgroundColor)
    if(this.value != "") {//
        firstInput = true
        // console.log("first"+firstInput)
        // console.log("first"+firstInput)
        // console.log("first"+firstInput)
        // console.log("first"+firstInput)
        // console.log("first"+firstInput)
        // console.log("first"+firstInput)
        // console.log("first"+firstInput)
    } else {
        firstInput = false
        // console.log("firstFalse")
    }
    inputState()
}) */
const firstCodeInput = document.querySelector(".color1") //hexcode or rgb 입력창
const firstColorInput = document.querySelector(".firstinput")// palette
firstCodeInput.addEventListener("change", function() {//input 태그 class = color1
    inputCallback(firstCodeInput, firstColorInput)
    inputState()
})
firstColorInput.addEventListener("change", function() {
    firstCodeInput.value = this.value
    inputState()
})

const secondCodeInput = document.querySelector(".color2")
const secondColorInput = document.querySelector(".secondinput")
secondCodeInput.addEventListener("change", function() {
    inputCallback(secondCodeInput, secondColorInput)
    inputState()
})
secondColorInput.addEventListener("change", function() {
    secondCodeInput.value = this.value
    inputState()
})

const thirdCodeInput = document.querySelector(".color3")
const thirdColorInput = document.querySelector(".thirdinput")
thirdCodeInput.addEventListener("change", function() {
    inputCallback(thirdCodeInput, thirdColorInput)
    inputState()
})
thirdColorInput.addEventListener("change", function() {
    thirdCodeInput.value = this.value
    inputState()
})

function inputCallback(codeInput, colorInput) { //input에 change이벤트감지시 실행 인자로input태그받음
    let inputValue = codeInput.value
    console.log(inputValue)
    if(inputValue[0] == "#") { // hexcode
        // order.value = inputValue
        colorInput.value = inputValue
    } else if(inputValue[0] == "r") { // rgb 입력시 
        let rgbList = toArray(inputValue)
        let hexCode = "#" + rgbToHex(rgbList)
        colorInput.value = hexCode
    }
}

function inputState() {
    if((firstCodeInput.value != 0) && (secondCodeInput.value != 0 ) && (thirdCodeInput.value != 0)){
        console.log("all filled")
        colorArrange()
    } else {
        console.log("some empty")
    }
}

function colorArrange() {
    const color1 = firstColorInput.value//16진수
    const color2 = secondColorInput.value
    const color3 = thirdColorInput.value
    console.log(color1, color2, color3)//#ff00ff/ffff00/00ffff
    const firstRGB = hexToDecimal(color1) // "[0,255,255]"
    const secondRGB = hexToDecimal(color2)
    const thirdRGB = hexToDecimal(color3)
    // const resultArea = document.querySelector(".box-container4")
    console.log("result-out")
    // resultArea.style.display = "flex"
    console.log(firstRGB, secondRGB, thirdRGB)
    const mixValues = []
    for(i = 0; i <= 10; i++) {
        let mixedValue = blendColor(firstRGB, secondRGB, (i*(1/10))) // 섞인상태의 rgb값리스트
        let distance = getDistance(mixedValue, thirdRGB)
        mixValues.push({
            distance: distance,
            index: i
        })
    }
    console.log(mixValues)//각 거리들 들어간 리스트 
    mixValues.sort(function(a, b){return a.distance - b.distance})
    let min = mixValues[0]
    console.log(min.index)//7
    let approximate = blendColor(firstRGB, secondRGB, (min.index)*(1/10))
    console.log(approximate)
    let hexcode = rgbToHex(approximate)
    console.log(hexcode)
    let exDiv = document.querySelector(".ex")
    exDiv.innerHTML = '재료색1과 재료색2를 '+ (1-((min.index)*(1/10))).toFixed(1)+':'+ ((min.index)*(1/10)).toFixed(1) + ' 로 섞으면<br>' + '근접한색'+ ' <span class = "bold">'+ "#" + hexcode +'</span>' + ' <input  type = "color" class = "color result">'+' 를 얻을 수 있습니다' +'<br>'+ '<span class = "small"> 코드클릭시 클립보드에복사됩니다</span>' 
    let result = document.querySelector(".result")
    result.value = "#"+hexcode
    let code = document.querySelector(".bold")
    code.addEventListener("click", function(){
        let copyText = code.innerHTML
        let tempElem = document.createElement('textarea')
        tempElem.value = copyText
        document.body.appendChild(tempElem)
        tempElem.select()
        document.execCommand("copy")
        document.body.removeChild(tempElem)
    })

}



function toArray(color) {// rgb리스트에 3개로 저장
    const start = (color.indexOf("(")) + 1
    const end = (color.indexOf(")"))
    const colorCor = color.substring(start, end)
    const colorRGB = colorCor.split(",")
    return colorRGB
}

function rgbToHex(rgblist) { //문자열인 rgb값 길이 3인 리스트로 받음
    let numList = []
    let hexCode = ""
    for(i = 0; i < 3; i++) {
        numList.push((Number(rgblist[i]).toString(16))) // numList 에 16진수 문자열형태로 전환
    }
    console.log(numList) // 문자열인 16진수값 길이 3인 리스트상태 
    for(i = 0; i < 3; i++) { // 빈문자열에 더해서 코드 생성
        if(numList[i] == "0") {
            hexCode += "00"
        }else{
            hexCode += numList[i]
        }
    }
    return hexCode // "#rrggbb" return
}

function hexToDecimal(hexCode) { // 16진수받고 10진수로변환 #ff00ff => [255,0,255]
    let valueList = []
    let redValue = parseInt(hexCode.substr(1, 2), 16)
    let greenValue = parseInt(hexCode.substr(3, 2), 16)
    let blueValue = parseInt(hexCode.substr(5, 2), 16)
    valueList.push(redValue, greenValue, blueValue)
    // console.log(redValue, greenValue, blueValue)
    return valueList
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
    // exDiv.innerHTML += `<div class = "box-container4">
    //     <div class = "input result">Result color</div>
    //     <div class="palette" id="forth" style="background-color: rgb(${newR}, ${newG}, ${newB});"></div>
    //     <div style = ""></div>
    // </div>`
    return valueList
    //whatis
}

function blendColorValue(color1, color2, ratio) {//color1,color2의 각 RGB값을따로 계산
    let value1 = Number(color1)
    let value2 = Number(color2)
    return (Math.sqrt((1-ratio)*(value1**2)+(ratio*(value2**2)))).toFixed(0)
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