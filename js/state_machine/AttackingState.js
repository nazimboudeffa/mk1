var StateMachineExample = StateMachineExample || {};

StateMachineExample.AttackingState = function (name, prefab, jumping_speed) {
    "use strict";
    StateMachineExample.State.call(this, name, prefab);

    this.punching01_animation = this.prefab.animations.add('punching01', ["punching01-01.gif","punching01-02.gif","punching01-03.gif","punching01-04.gif","punching01-05.gif","punching01-06.gif"],10,true);
};

StateMachineExample.AttackingState.prototype = Object.create(StateMachineExample.State.prototype);
StateMachineExample.AttackingState.prototype.constructor = StateMachineExample.AttackingState;

StateMachineExample.AttackingState.prototype.enter = function () {
    "use strict";
    console.log("Entered Attacking State");
    this.punching01_animation.play();
};

StateMachineExample.AttackingState.prototype.exit = function () {
    "use strict";
    // stop animation and set velocity to zero
    this.punching01_animation.stop();
};

StateMachineExample.AttackingState.prototype.handle_input = function (command) {
    "use strict";
    switch (command.name) {
    case "stop":
        return "standing";
    }
    StateMachineExample.State.prototype.handle_input.call(this, command);
};
