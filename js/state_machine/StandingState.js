var StateMachineExample = StateMachineExample || {};

StateMachineExample.StandingState = function (name, prefab, frame) {
    "use strict";
    StateMachineExample.State.call(this, name, prefab);

    //this.standing_animation = this.prefab.animations.add('idle', [0,1,2,3,4,5,6,7,8,9],10,true);
    this.standing_animation = this.prefab.animations.add('idle', ["idle-01.gif","idle-02.gif","idle-03.gif","idle-04.gif","idle-05.gif","idle-06.gif","idle-07.gif","idle-08.gif","idle-09.gif","idle-10.gif"],10,true);

    this.frame = frame;
};

StateMachineExample.StandingState.prototype = Object.create(StateMachineExample.State.prototype);
StateMachineExample.StandingState.prototype.constructor = StateMachineExample.StandingState;

StateMachineExample.StandingState.prototype.enter = function () {
    "use strict";
    // set standing frame and velocity to 0
    console.log("Entered Standing State");

    this.standing_animation.play();

    //this.prefab.frame = this.frame;
    this.prefab.body.velocity.x = 0;
};

StateMachineExample.StandingState.prototype.handle_input = function (command) {
    "use strict";
    switch (command.name) {
    case "walk":
        if (command.direction === "left") {
            return "walking_left";
        } else {
            return "walking_right";
        }
    case "jump":
        return "jumping";
    case "duck":
        return "ducking";
    case "attack":
        return "attacking";
    }
    StateMachineExample.State.prototype.handle_input.call(this, command);
};
