var StateMachineExample = StateMachineExample || {};

StateMachineExample.WalkingState = function (name, prefab, direction, walking_speed) {
    "use strict";
    StateMachineExample.State.call(this, name, prefab);

    this.walking_animation_right = this.prefab.animations.add('walking-right', ["walking-01.gif","walking-02.gif","walking-03.gif","walking-04.gif","walking-05.gif","walking-06.gif","walking-07.gif","walking-08.gif","walking-09.gif"],10,true);
    this.walking_animation_left = this.prefab.animations.add('walking-left', ["walking-09.gif","walking-08.gif","walking-07.gif","walking-06.gif","walking-05.gif","walking-04.gif","walking-03.gif","walking-02.gif","walking-01.gif"],10,true);

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
    case "jump":
        return "jumping";
    case "duck":
        return "ducking"
    };
    StateMachineExample.State.prototype.handle_input.call(this, command);
};
