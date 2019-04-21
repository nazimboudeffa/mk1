var StateMachineExample = StateMachineExample || {};

StateMachineExample.Prefab = function (game_state, name, position, properties) {
    "use strict";
    Phaser.Sprite.call(this, game_state.game, position.x, position.y, "raiden", 'idle-01.gif');

    this.game_state = game_state;

    this.name = name;
/*
    this.game_state.groups[properties.group].add(this);
    this.frame = +properties.frame;

    if (properties.scale) {
        this.scale.setTo(properties.scale.x, properties.scale.y);
    }

    this.game_state.prefabs[name] = this;
*/
};

StateMachineExample.Prefab.prototype = Object.create(Phaser.Sprite.prototype);
StateMachineExample.Prefab.prototype.constructor = StateMachineExample.Prefab;
