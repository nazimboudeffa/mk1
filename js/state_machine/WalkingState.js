var StateMachineExample = StateMachineExample || {};

StateMachineExample.WalkingState = function (name, prefab, direction, walking_speed) {
    "use strict";
    StateMachineExample.State.call(this, name, prefab);

    this.walking_animation_right = this.prefab.animations.add('walking-right', [16,17,18,19,20,21,22,23,24],10,true);
    this.walking_animation_left = this.prefab.animations.add('walking-left', [24,23,22,21,20,19,18,17,16],10,true);

    this.direction = direction;
    this.walking_speed = walking_speed;
};

StateMachineExample.WalkingState.prototype = Object.create(StateMachineExample.State.prototype);
StateMachineExample.WalkingState.prototype.constructor = StateMachineExample.WalkingState;

StateMachineExample.WalkingState.prototype.enter = function () {
    "use strict";
    // start animation and set velocity
    console.log("Entered Walking State");

    this.prefab.body.velocity.x = this.direction * this.walking_speed;

    if (this.direction === 1) {
        //this.prefab.scale.setTo(-1, 1);
        this.walking_animation_right.play();
    } else {
        //this.prefab.scale.setTo(1, 1);
        this.walking_animation_left.play();
    }
};

StateMachineExample.WalkingState.prototype.exit = function () {
    "use strict";
    // stop animation and set velocity to zero
    this.walking_animation_right.stop();
    this.walking_animation_left.stop();
};

StateMachineExample.WalkingState.prototype.handle_input = function (command) {
    "use strict";
    switch (command.name) {
    case "stop":
        return "standing";
    //case "jump":
    //    return "jumping";
    }
    StateMachineExample.State.prototype.handle_input.call(this, command);
};
