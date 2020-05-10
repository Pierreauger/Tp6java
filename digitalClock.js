function addSegments(digitId){
for (let i = 0; i<7; i++ ){
    let segment = document.createElement("div");
    segment.className = "segment off segment"+i;
    document.getElementById(digitId).appendChild(segment);
}
}

function updateDigit(digitId, value){
    let segmentStates = [
        [1, 1, 1, 0, 1, 1, 1],
        [0, 0, 1, 0, 0, 1, 0],
        [1, 0, 1, 1, 1, 0, 1],
        [1, 0, 1, 1, 0, 1, 1],
        [0, 1, 1, 1, 0, 1, 0],
        [1, 1, 0, 1, 0, 1, 1],
        [1, 1, 0, 1, 1, 1, 1],
        [1, 0, 1, 0, 0, 1, 0],
        [1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 0, 1, 1]
    ];
    let ti = segmentStates[value];
    for ( let i = 0; i< ti.length; i++){
        if (ti[i] == 1){
            let segment = document.createElement("div");
            segment.className = "segment segment"+i;
            document.getElementById(digitId).appendChild(segment);
        }
        else if ( ti[i] == 0 ){
            let segment = document.createElement("div");
            segment.className = "segment off segment"+i;
            document.getElementById(digitId).appendChild(segment);
        }
    }

}




function init(){
addSegments("hours-tens");
addSegments("hours-units");
addSegments("minutes-tens");
addSegments("minutes-units");
    
}



function main(){
init();
updateDigit("hours-tens", 2);
}


main();
