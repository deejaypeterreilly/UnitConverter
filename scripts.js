const convertBtn = document.getElementById("convert-btn")
let inputEl = document.getElementById("input-el")
const meterFootConversionEl = document.getElementById("meter-foot-conversion")
const litreGallonEl = document.getElementById("litre-gallon-conversion")
const kiloPoundsEl = document.getElementById("kilos-pounds-conversion")


convertToFeetMeters(meterFootConversionEl, inputEl.value, feetToMeter, meterToFeet)
convertToLitresGallons(litreGallonEl, inputEl.value, litreToGallon, gallonToLitre)
convertToKilogramsPounds(kiloPoundsEl, inputEl.value, kilosToPounds, poundsToKilos)

inputEl.addEventListener("input", function(){
    if (inputEl.value.length > 2){
        inputEl.style.width = inputEl.value.length + "ch";
        inputEl.style.padding = "0 20px"
    }
    else{
        inputEl.style.width = "100px"
        inputEl.style.padding = "0 10px"
    }
    
})

function feetToMeter(unit){
    let feet = unit * 3.28084
    
    return Number(feet.toFixed(3))
}

function meterToFeet(unit){
    let meter = unit / 3.281
    return Number(meter.toFixed(3))
}   

function litreToGallon(unit){
    let litre = unit / 4.546
    return Number(litre.toFixed(3))
}   

function gallonToLitre(unit){
    let gallon = unit * 3.785
    return Number(gallon.toFixed(3))
}   

function kilosToPounds(unit){
    let gallon = unit * 2.205
    return Number(gallon.toFixed(3))
}   

function poundsToKilos(unit){
    let gallon = unit / 2.205
    return Number(gallon.toFixed(3))
}   


function convertToFeetMeters(input, value, conversionOne, conversionTwo){
    input.innerHTML = `<p> ${value} meters = ${conversionOne(value)} feet | ${value} feet = ${conversionTwo(value)} meters </p>`
}

function convertToLitresGallons(input, value, conversionOne, conversionTwo){
    input.innerHTML = `<p> ${value} litres = ${conversionOne(value)} gallons | ${value} gallons = ${conversionTwo(value)} litres </p>`
}

function convertToKilogramsPounds(input, value, conversionOne, conversionTwo){
    input.innerHTML = `<p> ${value} kilograms = ${conversionOne(value)} pounds | ${value} pounds = ${conversionTwo(value)} kilograms </p>`
}


convertBtn.addEventListener("click", function(){
    convertToFeetMeters(meterFootConversionEl, inputEl.value, feetToMeter, meterToFeet)
    convertToLitresGallons(litreGallonEl, inputEl.value, litreToGallon, gallonToLitre)
    convertToKilogramsPounds(kiloPoundsEl, inputEl.value, kilosToPounds, poundsToKilos)


})