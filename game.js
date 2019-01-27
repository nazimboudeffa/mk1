var raiden;
var cursors;
bootState = {
  preload: function() {
    game.load.image('progressBar', 'assets/sprites/preloader.png'),
    game.load.image('progressBarBg', 'assets/sprites/preloaderbg.png'),
    game.load.image('loader', 'assets/sprites/loader.png')

  },
  create: function() {
    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    game.scale.pageAlignHorizontally = true;
    game.scale.pageAlignVertically = true;
    game.state.start('load')
  }
},
loadState = {
    preload: function() {
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

    },
    create: function() {
      game.state.start('play')
    }
  },
playState = {
  create: function(){
    back = game.add.image(0, 0, 'arena');
    game.physics.startSystem(Phaser.Physics.ARCADE);

    cursors = game.input.keyboard.createCursorKeys();

    raiden = game.add.sprite(50, 100, 'raiden','idle-01.gif');
    game.physics.arcade.enable(raiden);
    raiden.body.collideWorldBounds=true;
    
    raiden.animations.add('idle', [0,1,2,3,4,5,6,7,8,9],10,true);
    raiden.animations.add('walking-right', [10,11,12,13,14,15,16,17,18],10,true);
    raiden.animations.add('walking-left', [18,17,16,15,14,13,12,11,10],10,true);

  },
  update: function(){
    if (cursors.left.isDown)
    {
        raiden.animations.play('walking-left');
        raiden.body.velocity.x = -90;
    }
    else if (cursors.right.isDown)
    {
        raiden.animations.play('walking-right');
        raiden.body.velocity.x = 90;
    } else {
      raiden.animations.play('idle');
      raiden.body.velocity.x = 0;
    }
  }
},

game = new Phaser.Game(400, 254);

game.state.add('boot', bootState),
game.state.add('load', loadState),
game.state.add('play', playState),

game.state.start('boot');
