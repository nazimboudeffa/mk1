var player, enemy;
var healthBar;
var cursors;
var punch01;
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

    player = game.add.sprite(50, 100, 'raiden','idle-01.gif');
    game.physics.arcade.enable(player);
    player.body.collideWorldBounds=true;

    player.animations.add('idle', [0,1,2,3,4,5,6,7,8,9],10,true);
    player.animations.add('walking-right', [16,17,18,19,20,21,22,23,24],10,true);
    player.animations.add('walking-left', [24,23,22,21,20,19,18,17,16],10,true);
    player.animations.add('punching01', [10,11,12,13,14,15],10,false);

    enemy = game.add.sprite(320, 100, 'raiden','idle-01.gif');
    game.physics.arcade.enable(enemy);
    enemy.body.collideWorldBounds=true;
    enemy.scale.x = -1;

    enemy.animations.add('idle', [0,1,2,3,4,5,6,7,8,9],10,true);
    enemy.animations.add('walking-right', [16,17,18,19,20,21,22,23,24],10,true);
    enemy.animations.add('walking-left', [24,23,22,21,20,19,18,17,16],10,true);
    enemy.animations.add('punching01', [10,11,12,13,14,15],10,false);

    this.drawHealthBar('#ff0000');
    this.drawHealthBar('#00ff00');

  },
  drawHealthBar: function(color){
    var bmd = game.add.bitmapData(200, 40);
    bmd.ctx.beginPath();
    bmd.ctx.rect(0, 0, 150, 10);
    bmd.ctx.fillStyle = color;
    bmd.ctx.fill();

    healthBar = game.add.sprite(20, 40, bmd);
    healthBar.anchor.y = 0.5;
  },
  update: function(){

    barWidth = healthBar.width;
    LIFE = 40;
    healthBar.width = barWidth - barWidth/LIFE;

    if (cursors.left.isDown)
    {
        player.animations.play('walking-left');
        player.body.velocity.x = -90;
    }
    else if (cursors.right.isDown)
    {
        player.animations.play('walking-right');
        player.body.velocity.x = 90;
    }
    else {
      player.animations.play('idle');
      player.body.velocity.x = 0;

      enemy.animations.play('idle');
      enemy.body.velocity.x = 0;
    }

    if (game.input.keyboard.justPressed(Phaser.Keyboard.C)){
        player.animations.play('punching01');
    }

  }
},

game = new Phaser.Game(400, 254);

game.state.add('boot', bootState),
game.state.add('load', loadState),
game.state.add('play', playState),

game.state.start('boot');
