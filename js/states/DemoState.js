var StateMachineExample = StateMachineExample || {};

StateMachineExample.DemoState = function () {
    "use strict";
    Phaser.State.call(this);

    this.prefab_classes = {
        "hero": StateMachineExample.Hero.prototype.constructor
    };
};

StateMachineExample.DemoState.prototype = Object.create(Phaser.State.prototype);
StateMachineExample.DemoState.prototype.constructor = StateMachineExample.DemoState;

StateMachineExample.DemoState.prototype.init = function () {
    "use strict";

    // start physics system
    this.game.physics.startSystem(Phaser.Physics.ARCADE);
    this.game.physics.arcade.gravity.y = 1000;

};

StateMachineExample.DemoState.prototype.create = function () {
    "use strict";

    this.background = game.add.image(0, 0, 'arena');
    var position = {"x":50,"y":100};
    var properties = {"texture":"idle-01.gif"}
    var prefab = new this.prefab_classes["hero"](this, "raiden", position, properties);

};
