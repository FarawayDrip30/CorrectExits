//world.stage.room

var roomExitPoints = [["tavern","port",1290,240,-862.5,0],["cellar","tavern",316,403,0,0],["crash_site","cellar",615,400,0,0],["shack","port",570,220,-144,0],
["jungle","port",650,223,-223,0],["bridge","port",143,256,0,0]];
var lastRoom = world.room.roomId;

world.on("joinRoom", function(_) { 
    for(let i = 0; i < roomExitPoints.length; i++){
        if(lastRoom == roomExitPoints[i][0]){
            if(world.room.roomId == roomExitPoints[i][1]){
                world.stage.room.localPlayer.x = roomExitPoints[i][2];
                world.stage.room.localPlayer.y = roomExitPoints[i][3];
                world.stage.room.x = roomExitPoints[i][4];
                world.stage.room.y = roomExitPoints[i][5];

                world.moveTo(roomExitPoints[i][2],roomExitPoints[i][3]);
                break;
            }
        }
    }
    lastRoom = world.room.roomId;
}); 

function roomGet(){
    console.log(world.stage.room.localPlayer.x);
    console.log(world.stage.room.localPlayer.y);
    console.log(world.stage.room.x);
    console.log(world.stage.room.y);
}