var StateMachineExample = StateMachineExample || {};

StateMachineExample.State = function (name, prefab) {
    "use strict";
    this.name = name;
    this.prefab = prefab;
};

StateMachineExample.State.prototype.enter = function () {
    "use strict";
};

StateMachineExample.State.prototype.exit = function () {
    "use strict";
};

StateMachineExample.State.prototype.handle_input = function (command) {
    "use strict";
    return this.name;
};