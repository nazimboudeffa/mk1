var StateMachineExample = StateMachineExample || {};

StateMachineExample.DuckingState = function (name, prefab, Ducking_speed) {
    "use strict";
    StateMachineExample.State.call(this, name, prefab);
    this.Ducking_speed = Ducking_speed;
    this.Ducking_animation = this.prefab.animations.add('Ducking01', ["d01.gif","d02.gif","d03.gif"],10,false);
};

StateMachineExample.DuckingState.prototype = Object.create(StateMachineExample.State.prototype);
StateMachineExample.DuckingState.prototype.constructor = StateMachineExample.DuckingState;

StateMachineExample.DuckingState.prototype.enter = function () {
    "use strict";
    console.log("Entered Ducking State");
    // set vertical velocity
    this.prefab.body.velocity.y = -this.Ducking_speed;
    this.Ducking_animation.play();
};

StateMachineExample.DuckingState.prototype.exit = function () {
    "use strict";
    // stop animation and set velocity to zero
    this.Ducking_animation.stop();
};

StateMachineExample.DuckingState.prototype.handle_input = function (command) {
    "use strict";
    switch (command.name) {
    case "stop":
        return "standing";
    }
    StateMachineExample.State.prototype.handle_input.call(this, command);
};
