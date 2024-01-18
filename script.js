$(document).ready(function() {
    let offset = {offset: "75%"}
    $(".moving-title-1").waypoint(function() {
        $(".moving-title-1").addClass 
        ("animate__animated animate__fadeInLeft");
    }, offset);


    $("#goals").waypoint(function() {
        $("#goals").addClass 
        ("animate__animated animate__fadeInLeft");
    }, offset);


    $(".stats").waypoint(function() {
        $(".stats").addClass 
        ("animate__animated animate__zoomIn");
    }, {offset: "70%"}); 


    $(".creative").waypoint(function() {
        $(".creative").addClass 
        ("animate__animated animate__fadeInLeft");
    }, offset );


    $(".drop").waypoint(function() {
        $(".drop").addClass 
        ("animate__animated animate__rotateInDownLeft");
    }, {offset: "65%"});

});

