BootState = {};

BootState.prototype = Object.create(Phaser.State.prototype);
BootState.prototype.constructor = BootState;

BootState.prototype.init = function () {
};

BootState.prototype.preload = function () {
    game.load.image('progressBar', 'assets/sprites/preloader.png');
    game.load.image('progressBarBg', 'assets/sprites/preloaderbg.png');
    game.load.image('loader', 'assets/sprites/loader.png');
};

BootState.prototype.create = function () {
    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    game.scale.pageAlignHorizontally = true;
    game.scale.pageAlignVertically = true;
    this.game.state.start("LoadingState");
};
