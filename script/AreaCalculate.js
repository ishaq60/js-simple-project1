/*
objective:get base ,height of a triangle .Calculate the area by useing the provide formula and then display the area
step:get base value
*/

function calculateTriangleArea(){
    //triangle base
    const triangleBaseinput=document.getElementById('triangle-base')
    const triangleText=triangleBaseinput.value;
    const base=parseFloat(triangleText);
    console.log(base)
    //triangle height
    const triangleHeight=document.getElementById('triangle-height')
 
    const triangleHText=triangleHeight.value;
    const height=parseFloat(triangleHText)
    console.log(height)
//Area triangle
    const area=0.5*base*height;
    console.log('Area Triangle is',area)
    //display
    const trianglearea=document.getElementById('triangle-area')
    trianglearea.innerText=area;
}

//Calculate area rectangle
function areaRectangleInput(){
    //rectangle weight
const areaweihtRectangle=document.getElementById('weight')
const rectangleText=areaweihtRectangle.value;
const weight=parseFloat(rectangleText);
console.log(weight)
// rectangle length
const  arealengthRectangle=document.getElementById('length')
const rectanglelText=arealengthRectangle.value;
const length=parseFloat(rectanglelText)
console.log(length)
const areaofRectangle=weight*length;
console.log(areaofRectangle)
//display
const rectangleArea=document.getElementById('rectangle-area')
rectangleArea.innerText=areaofRectangle;

}
