var StateMachineExample = StateMachineExample || {};

StateMachineExample.JumpingState = function (name, prefab, jumping_speed) {
    "use strict";
    StateMachineExample.State.call(this, name, prefab);
    this.jumping_speed = jumping_speed;
};

StateMachineExample.JumpingState.prototype = Object.create(StateMachineExample.State.prototype);
StateMachineExample.JumpingState.prototype.constructor = StateMachineExample.JumpingState;

StateMachineExample.JumpingState.prototype.enter = function () {
    "use strict";
    // set vertical velocity
    this.prefab.body.velocity.y = -this.jumping_speed;
};

StateMachineExample.JumpingState.prototype.handle_input = function (command) {
    "use strict";
    switch (command.name) {
    case "fall":
        return "standing";
    }
    StateMachineExample.State.prototype.handle_input.call(this, command);
};