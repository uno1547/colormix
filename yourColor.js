// function detectChange(tf) {
//     if(tf) {
//         tf = false
//     }else{
//         tf = true
//     }
// }


const firstColor = document.querySelector("input.color1") // 첫번째 input tag
const firstPalette = document.querySelector("#first") // 첫번째 palette
let firstInput = false
firstColor.addEventListener("change", function(){
    let color1 = this.value
    firstPalette.style.backgroundColor = color1
    if(this.value != "") {
        console.log(this.value)
        firstInput = true
    }else{
        console.log("empty")
        firstInput = false
    }
    console.log(firstInput)
    max()
    //detectChange(firstInput)
    // if(firstInput) {
    //     firstInput = false
    //     console.log(firstInput)
    //     console.log("firstinput empty")
    // }else{
    //     firstInput = true
    //     console.log(firstInput)
    //     console.log("firstinput full")
    // }
    // detectChange(firstInput)//스코프 문제임? 왜안되지?
    //console.log(firstInput)
    // console.log(color1)
    // console.log(firstPalette.style.backgroundColor)
    // console.log('changed')
})

const secondColor = document.querySelector("input.color2") // 두번째 input tag
const secondPalette = document.querySelector("#second")
let secondInput = false
secondColor.addEventListener("change", function(){
    let color2 = this.value
    secondPalette.style.backgroundColor = color2
    if(this.value != "") {
        console.log(this.value)
        secondInput = true
    }else{
        console.log("empty")
        secondInput = false
    }
    console.log(secondInput)
    max()
    // secondInput = true//이건 입력했다가 지워도 true상태 유지되서 문제될수도?
})

const yourColor = document.querySelector("input.color3")
const thirdPalette = document.querySelector("#third")
let thirdInput = false
yourColor.addEventListener("change", function(){
    let color3 = this.value
    thirdPalette.style.backgroundColor = color3
    if(this.value != "") {
        console.log(this.value)
        thirdInput = true
    }else{
        console.log("empty")
        thirdInput = false
    }
    console.log(thirdInput)
    max()
})

document.addEventListener("keyup",function(evt){/////////////////////
    if(submit){
        if(evt.keyCode == 13){
            console.log("enterkey!!")// submit = true인상태에서  엔터키누르면 동작  엔터키일경우에만 실행  
            colorHandler()//이위치에 display = "block"
        }
    }else{
        console.log("fillInTheColorFirst")
        
    }
})

let submit = false

function max(){/// 
    const submitButton = document.querySelector(".submit")
    if((firstInput)&&(secondInput)&&(thirdInput)){ //세개모두입력되있을경우에 submit = true > 
        submit = true
        console.log("allfilled")
    }else{
        submit = false
        console.log("someempty")
    }
    // if(submit){                                             //submit 이 true 이면 버튼 나타남 
    //     submitButton.style.display = "inline-block"
    // }else{
    //     submitButton.style.display = "none"//event가 change 여서 focus 잃으면 실행되는게 살짝 아쉽 lose focus 하면 실행 
    //     console.log("submitfalse")
    // }
}

function colorHandler() {//color1, color2 인자로 받아서 redamount greenamount 분류한다음 n등분해서 중간값포함 표시
    const color1 = firstPalette.style.backgroundColor
    const color2 = secondPalette.style.backgroundColor
    const color3 = thirdPalette.style.backgroundColor
    const firstColorview = document.querySelector(".firstcolor")
    const secondColorview = document.querySelector(".secondcolor")
    const resultColorview = document.querySelector(".result-color")
    const firstRatio = document.querySelector(".first-ratio")
    const secondRatio = document.querySelector(".second-ratio")
    firstRatio.addEventListener("change", )
    secondRatio.addEventListener("change", )
    firstColorview.style.backgroundColor = color1
    secondColorview.style.backgroundColor = color2
    resultColorview.style.backgroundColor = color3
    // const grad = document.querySelector(".box")
    //fgrad.style.display = 'block'
    // const sample = "rgb(255, 255, 255)"
    // let color1 = firstPalette.style.backgroundColor // 세개 input의 rgb값 준비 
    // let color2 = secondPalette.style.backgroundColor
    // let color3 = thirdPalette.style.backgroundColor
    // const start = sample.indexOf("(")
    // const end = sample.indexOf(")")
    // let nums = temp.substring(start+1, end)
    // let rgbNums = nums.split(", ")
}
let redAmount = []
let greenAmount = []
let blueAmount = []
//언제나 대기하면서 0이되는지 감지할수없나? 한번호출되고 끝인가??
// for(j=255;j>0;j--){
//     redAmount.push(j)
//     greenAmount.push(j)
// }

// for(i=0;i<256;i++){
//     blueAmount.push(i)
// }
// console.log(redAmount)
// console.log(greenAmount)
// console.log(blueAmount)
// const boxes = document.querySelectorAll(".box div")
// console.log(boxes)

// for(i=0; i<256; i++){
//     boxes[i].style.backgroundColor = "rgb("+ redAmount[i] + ","+ greenAmount[i] + "," + blueAmount[i]+")"
//     console.log(boxes[i].style.backgroundColor)
// }