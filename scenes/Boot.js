export default class Boot extends Phaser.Scene {
    constructor() {
        super({ key: 'Boot' });
    }

    preload() {
        this.load.image("bg", "assets/bg.png");
        this.load.image("mainGround", "assets/tiles/ground.png");
        this.load.image("platform", "assets/tiles/platform.png");
        this.load.spritesheet("player", "assets/player.png", {
            frameWidth: 540,
            frameHeight: 540
        });
        this.load.spritesheet("patrolEnemy", "assets/patrolEnemy.png", {
            frameWidth: 540,
            frameHeight: 540
        });
        this.load.spritesheet("chaseEnemy", "assets/chaseEnemy.png", {
            frameWidth: 540,
            frameHeight: 540
        });
        this.load.image("star", "assets/star.png");
        this.load.image("bomb", "assets/bomb.png");
        this.load.image("heart", "assets/heart.png");
        this.load.image("particle", "assets/particle.png");

        this.load.audio('jump', 'assets/sounds/jump.mp3');
        this.load.audio('collect', 'assets/sounds/collect.mp3');
        this.load.audio('hurt', 'assets/sounds/hurt.mp3');
        this.load.audio('gameover', 'assets/sounds/gameover.mp3');
        this.load.audio('bgm', 'assets/sounds/bgm.mp3');
        this.load.audio('kill', 'assets/sounds/kill.mp3');
    }

    create() {
        this.scene.start('Game');
    }
}