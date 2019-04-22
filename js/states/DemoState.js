var StateMachineExample = StateMachineExample || {};

StateMachineExample.DemoState = function () {
    "use strict";
    Phaser.State.call(this);

    this.prefab_classes = {
        'player': StateMachineExample.Hero.prototype.constructor
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
    //var position = {"x":50,"y":100};
    var properties = {
            'key' : 'raiden',
            'texture' : 'idle-01.gif'
        };
    //this.add.sprite(50, 100, 'raiden', 'idle-01.gif');
    this.prefabs = {};
    var prefab = new this.prefab_classes['player'](this, 'raiden', 50, 100, properties);
    //this.prefabs['raiden'] = prefab;

};
