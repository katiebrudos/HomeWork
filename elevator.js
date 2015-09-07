{
    init: function(elevators, floors) {
        
		for(var elevatorNumber = 0; elevatorNumber < elevators.length; elevatorNumber++){
			
			elevators[elevatorNumber].on("floor_button_pressed", function(floorNum){
				elevators[elevatorNumber].goToFloor(floorNum);
			});
			
			elevators[elevatorNumber].on("passing);
		};
		
		for(var floorNumber = 0; floorNumber < floors.length;floorNumber.length){
			
			floors[floorNumber].on("up_button_pressed", function(){
				
			
			});
			
			floors[floorNumber].on("down_button_pressed", function(){
				
			});
			
			floors[floorNumber].on();
		};
        
    },
    update: function(dt, elevators, floors) {
        // We normally don't need to do anything here
    }
}