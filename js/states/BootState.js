var StateMachineExample = StateMachineExample || {};

StateMachineExample.BootState = function () {
    "use strict";
    Phaser.State.call(this);
};

StateMachineExample.BootState.prototype = Object.create(Phaser.State.prototype);
StateMachineExample.BootState.prototype.constructor = StateMachineExample.BootState;

StateMachineExample.BootState.prototype.init = function () {
    "use strict";
};

StateMachineExample.BootState.prototype.preload = function () {
    "use strict";
    game.load.image('progressBar', 'assets/sprites/preloader.png');
    game.load.image('progressBarBg', 'assets/sprites/preloaderbg.png');
    game.load.image('loader', 'assets/sprites/loader.png');
};

StateMachineExample.BootState.prototype.create = function () {
    "use strict";
    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    game.scale.pageAlignHorizontally = true;
    game.scale.pageAlignVertically = true;
    this.game.state.start("LoadingState");
};
