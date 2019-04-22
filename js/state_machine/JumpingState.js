var StateMachineExample = StateMachineExample || {};

StateMachineExample.JumpingState = function (name, prefab, jumping_speed) {
    "use strict";
    StateMachineExample.State.call(this, name, prefab);
    this.jumping_speed = jumping_speed;
    this.jumping_animation = this.prefab.animations.add('jumping01', ["f01.gif","f02.gif","f03.gif","f04.gif","f05.gif","f06.gif","f07.gif","f08.gif"],10,true);
};

StateMachineExample.JumpingState.prototype = Object.create(StateMachineExample.State.prototype);
StateMachineExample.JumpingState.prototype.constructor = StateMachineExample.JumpingState;

StateMachineExample.JumpingState.prototype.enter = function () {
    "use strict";
    console.log("Entered Jumping State");
    // set vertical velocity
    this.prefab.body.velocity.y = -this.jumping_speed;
    this.jumping_animation.play();
};

StateMachineExample.JumpingState.prototype.exit = function () {
    "use strict";
    // stop animation and set velocity to zero
    this.jumping_animation.stop();
};

StateMachineExample.JumpingState.prototype.handle_input = function (command) {
    "use strict";
    switch (command.name) {
    case "stop":
        return "standing";
    }
    StateMachineExample.State.prototype.handle_input.call(this, command);
};
