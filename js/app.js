//Problem: No user interaction causes no change to application
//Solution: When user interacts cause changes appropriately

var color = $(".selected").css("background-color");
//when clicking on control list items 
$(".controls").on("click","li",function(){
    //deselect sibling element
    $(this).siblings().removeClass("selected");
    //select clicked element
    $(this).addClass("selected");
    //cache current color
    color = $(this).css("background-color");
});
    

//when new color is pressed
$("#revealColorSelect").click(function(){
    changeColor();
    //show color select or hide
    $("#colorSelect").toggle();
});
    
//update the color
function changeColor(){
    var r = $("#red").val();
    var b = $("#blue").val();
    var g = $("#green").val();
    
    $("#newColor").css("background-color","rgb("+ r + "," + g + "," + b + ")");
}

    
//when color slider changed 
$("input[type=range]").change(changeColor);
    

//when add color is pressed
$("#addNewColor").click(function(){
    //append the color to the ul
    var $newColor = $("<li></li>");
    $newColor.css("background-color",$("#newColor").css("background-color") );
    $(".controls ul").append($newColor);
    //select the new color
    $newColor.click();
});
    

//on mouse event on the canvas
var $canvas = $("canvas");
var context = $canvas[0].getContext("2d");
var lastEvent;
var mouseDown = false;
$canvas.mousedown(function(event){
   lastEvent = event;
    mouseDown = true;
}).mousemove(function(event){
    if(mouseDown){
    context.beginPath();
    context.moveTo(lastEvent.offsetX,lastEvent.offsetY);
    context.lineTo(event.offsetX,event.offsetY);
    context.strokeStyle = color;
    context.stroke();
    lastEvent = event;
    }
}).mouseup(function(){
    mouseDown = false;
}).mouseleave(function(){
   $canvas.mouseup(); 
});