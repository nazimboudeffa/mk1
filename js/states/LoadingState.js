var StateMachineExample = StateMachineExample || {};

StateMachineExample.LoadingState = function () {
    "use strict";
    Phaser.State.call(this);
};

StateMachineExample.LoadingState.prototype = Object.create(Phaser.State.prototype);
StateMachineExample.LoadingState.prototype.constructor = StateMachineExample.LoadingState;

StateMachineExample.LoadingState.prototype.init = function (level_data, next_state) {
    "use strict";
    this.level_data = level_data;
    this.next_state = next_state;
};

StateMachineExample.LoadingState.prototype.preload = function () {
    "use strict";
    /*
    var assets, asset_loader, asset_key, asset;
    assets = this.level_data.assets;
    for (asset_key in assets) { // load assets according to asset key
        if (assets.hasOwnProperty(asset_key)) {
            asset = assets[asset_key];
            switch (asset.type) {
            case "image":
                this.load.image(asset_key, asset.source);
                break;
            case "spritesheet":
                this.load.spritesheet(asset_key, asset.source, asset.frame_width, asset.frame_height, asset.frames, asset.margin, asset.spacing);
                break;
            case "tilemap":
                this.load.tilemap(asset_key, asset.source, null, Phaser.Tilemap.TILED_JSON);
                break;
            }
        }
    }
    */
    var a = game.add.image(game.world.centerX, game.world.centerY, 'loader');
    a.anchor.setTo(.5, .5);
    var b = game.add.sprite(game.world.centerX, game.world.centerY + 50, 'progressBarBg');
    b.anchor.setTo(.5, .5);
    var c = game.add.sprite(game.world.centerX, game.world.centerY + 50, 'progressBar');
    c.anchor.setTo(.5, .5),
    game.load.setPreloadSprite(c),

    game.load.image('logo', 'assets/sprites/phaser2.png');
    game.load.image('arena', 'assets/arena/01.png');

    //game.load.spritesheet('raiden', 'assets/raiden/raiden.png', 73, 138, 20);
    game.load.atlasJSONArray(
        'raiden',
        'assets/raiden/texturepacker.png',
        'assets/raiden/texturepacker.json'
    );
};

StateMachineExample.LoadingState.prototype.create = function () {
    "use strict";
    this.game.state.start("DemoState");
};
