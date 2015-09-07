{
    init: function(elevators, floors) {
        var elevator = elevators[0]; // Let's use the first elevator
        var floor0 = floors[0];
        var floor1 = floors[1];
        var floor2 = floors[2];
        var floor3 = floors[3];
        var floor4 = floors[4];

        // Whenever the elevator is idle (has no more queued destinations) ...
        elevator.on("idle", function() {
            elevator.goToFloor(2);
        });
        elevator.on("floor_button_pressed", function(floorNum){
            elevator.goToFloor(floorNum);
        });
        
    },
    update: function(dt, elevators, floors) {
        // We normally don't need to do anything here
    }
}