new Vue({
  el: '#app',
  data: {
    beginning: false,
    userAttacking: false,
    userAttackName: '',
    enemyAttacking: false,
    enemyAttackName: '',
    userHeal: false,
    userWait: false,
    selected: {
      player: {
        name: '',
        image: ''
      },
      monster: {
        name: '',
        image: '',
        types: [],
        attacks: [],
        hp: 300
      }
    },
    opponent: {
      player: {
        name: '',
        image: ''
      },
      monster: {
        name: '',
        image: '',
        types: [],
        attacks: [],
        hp: 300
      }
    },
    players: [
      {
        name: 'Anon',
        image: './logo/anon.png',
      },
      {
        name: 'Doxbin',
        image: './logo/dox.png',
      },
      {
        name: 'FBI',
        image: './logo/FBI.png'
      }
    ],
    monsters: [
      {
        name: 'Zavoe',
        image: './doxmon/zavoe.png',
        types: ['grass', 'poison',],
        attacks: [
          {
            name: 'cry',
            moveType: 'normal',
            category: 'normal',
            power: 40,
            accuracy: 100
          },
          {
            name: 'roleplay ip pulling',
            moveType: 'grass',
            category: 'special',
            power: 45,
            accuracy: 100
          },
          {
            name: 'scream',
            moveType: 'grass',
            category: 'special',
            power: 55,
            accuracy: 95
          },
          {
            name: 'get beamed',
            moveType: 'grass',
            category: 'special',
            power: 120,
            accuracy: 100
          }
        ]
      },
      {
        name: 'white',
        image: './doxmon/white.png',
        types: ['fire'],
        attacks: [
          {
            name: 'buy doxbin',
            moveType: 'normal',
            category: 'normal',
            power: 40,
            accuracy: 100
          },
          {
            name: 'leak your doxbin pass',
            moveType: 'fire',
            category: 'special',
            power: 40,
            accuracy: 100
          },
          {
            name: 'sim swap',
            moveType: 'normal',
            category: 'normal',
            power: 70,
            accuracy: 100
          },
          {
            name: 'remove admin',
            moveType: 'fire',
            category: 'special',
            power: 90,
            accuracy: 100
          }
        ]
      },
      {
        name: 'sleepthegod',
        image: './doxmon/sleepthegod.png',
        types: ['water'],
        attacks: [
          {
            name: 'smoke meth',
            moveType: 'normal',
            category: 'normal',
            power: 40,
            accuracy: 100
          },
          {
            name: 'root doxbin',
            moveType: 'water',
            category: 'special',
            power: 40,
            accuracy: 100
          },
          {
            name: 'kill own kid',
            moveType: 'dark',
            category: 'special',
            power: 60,
            accuracy: 0
          },
          {
            name: 'get fedded',
            moveType: 'water',
            category: 'special',
            power: 110,
            accuracy: 80
          }
        ]
      },
      {
        name: 'Mourn',
        image: './doxmon/Mourn.png',
        types: ['bug'],
        attacks: [
          {
            name: 'cut self',
            moveType: 'normal',
            category: 'normal',
            power: 40,
            accuracy: 0
          },
          {
            name: 'groom kid',
            moveType: 'normal',
            category: 'normal',
            power: 40,
            accuracy: 0
          }
        ]
      },
      {
        name: 'frxsty',
        image: './doxmon/frxsty.png',
        types: ['bug', 'poison'],
        attacks: [
          {
            name: 'False claim',
            moveType: 'normal',
            category: 'normal',
            power: 15,
            accuracy: 100
          },
          {
            name: 'Fail to extort',
            moveType: 'normal',
            category: 'normal',
            power: 40,
            accuracy: 0
          },
          {
            name: 'Groom 11 yr old',
            moveType: 'normal',
            category: 'normal',
            power: 40,
            accuracy: 0
          }
        ]
      },
      {
          name: 'zonehax',
          image: './doxmon/zonehax.png',
          types: ['bug', 'poison'],
          attacks: [
            {
              name: 'buys bots',
              moveType: 'normal',
              category: 'normal',
              power: 15,
              accuracy: 100
            },
            {
              name: 'compair funds',
              moveType: 'normal',
              category: 'normal',
              power: 40,
              accuracy: 0
            },
            {
              name: 'moves to net hotel',
              moveType: 'normal',
              category: 'normal',
              power: 40,
              accuracy: 0
            },
            {
              name: 'fake funds',
              moveType: 'normal',
              category: 'normal',
              power: 40,
              accuracy: 0
            }
          ]
        },
        {
            name: 'TCP Solid',
            image: './doxmon/tcps.png',
            types: ['bug', 'poison'],
            attacks: [
              {
                name: 'groom kid',
                moveType: 'normal',
                category: 'normal',
                power: 15,
                accuracy: 100
              },
              {
                name: 'buy stripprs',
                moveType: 'normal',
                category: 'normal',
                power: 40,
                accuracy: 0
              },
              {
                name: 'post tweet',
                moveType: 'normal',
                category: 'normal',
                power: 40,
                accuracy: 0
              },
              {
                name: 'get catfished',
                moveType: 'normal',
                category: 'normal',
                power: 40,
                accuracy: 0
            }
        ]
      },
      {
            name: 'i4n',
            image: './doxmon/i8n.png',
            types: ['idk dawg'],
            attacks: [
          {
            name: 'hack fbi',
            moveType: 'normal',
            category: 'normal',
            power: 40,
            accuracy: 100
          },
          {
            name: 'harass kittens',
            moveType: 'fire',
            category: 'special',
            power: 40,
            accuracy: 100
          },
          {
            name: 'be poor',
            moveType: 'normal',
            category: 'normal',
            power: 70,
            accuracy: 100
          },
          {
            name: 'reverse groom e-women',
            moveType: 'fire',
            category: 'special',
            power: 90,
            accuracy: 100
          }
        ]
    ]
  },
  computed: {
    opponentName: function () {
      var vm = this;
      var opponentIndex = parseInt(Math.random() * (vm.monsters.length - 1));
      vm.opponent.monster.name = vm.monsters[opponentIndex].name;
      vm.opponent.monster.image = vm.monsters[opponentIndex].image;
      vm.opponent.monster.types = vm.monsters[opponentIndex].types;
      vm.opponent.monster.attacks = vm.monsters[opponentIndex].attacks;
      if (vm.selected.player.name == 'Lass') {
        vm.opponent.player.name = vm.players[0].name;
        vm.opponent.player.image = vm.players[0].image;
        vm.beginning = true;
        setTimeout(function () {
          vm.beginning = false;
        }, 2000);
        return vm.opponent.player.name;
      }
      if (vm.selected.player.name == 'Youngster') {
        vm.opponent.player.name = vm.players[1].name;
        vm.opponent.player.image = vm.players[1].image;
        vm.beginning = true;
        setTimeout(function () {
          vm.beginning = false;
        }, 2000);
        return vm.opponent.player.name;
      }
    },
    hpWidthPlayer: function () {
      var vm = this;
      if (vm.selected.monster.hp <= 0) {
        if (confirm(vm.selected.monster.name + ' fainted!\n' + vm.opponent.player.name + ' won the battle. Do you want to play again?')) {
          window.location.reload(true);
        } else {
          return {width: 0}
        }
      } else {
        return {
          width: parseInt(100 * (vm.selected.monster.hp / 300)) + '%'
        }
      }
    },
    hpWidthOpponent: function () {
      var vm = this;
      if (vm.opponent.monster.hp <= 0) {
        if (confirm('Enemy ' + vm.opponent.monster.name + ' fainted!\n' + 'You won the battle. Do you want to play again?')) {
          window.location.reload(true);
        } else {
          return {width: 0}
        }
      } else {
        return {
          width: parseInt(100 * (vm.opponent.monster.hp / 300)) + '%'
        }
      }
    }
  },
  methods: {
    selectedPlayer: function(event) {
      var vm = this;
      event.currentTarget.classList.add('selected');
      vm.selected.player.name = event.currentTarget.id;
      for (var player in vm.players) {
        if (vm.players[player].name == vm.selected.player.name) {
          vm.selected.player.image = vm.players[player].image;
        }
      }
    },
    selectedMonster: function (event) {
      var vm = this;
      event.currentTarget.classList.add('selected');
      vm.selected.monster.name = event.currentTarget.id;
      for (var monster in vm.monsters) {
        if (vm.monsters[monster].name == vm.selected.monster.name) {
          vm.selected.monster.image = vm.monsters[monster].image;
          vm.selected.monster.types = vm.monsters[monster].types;
          vm.selected.monster.attacks = vm.monsters[monster].attacks;
        }
      }
    },
    attackMove: function (event) {
      var vm = this;
      var attackName = event.currentTarget.id;
      vm.userAttackName = attackName;
      vm.userAttacking = true;
      var userMonster = document.getElementById('player-monster-image');
      var attackDamage;
      for (var attack in vm.selected.monster.attacks) {
        if (vm.selected.monster.attacks[attack].name == attackName) {
          attackDamage = vm.selected.monster.attacks[attack].power;
        }
      }
      userMonster.classList.add('animation-target');
      var opponentMonster = document.getElementById('opponent-monster-image');
      var opponentAttackIndex = parseInt(Math.random() * (vm.opponent.monster.attacks.length - 1));
      var opponentAttackName = vm.opponent.monster.attacks[opponentAttackIndex].name;
      var opponentAttackPower = vm.opponent.monster.attacks[opponentAttackIndex].power;
      vm.enemyAttackName = opponentAttackName;
      setTimeout(function() {
        userMonster.classList.remove('animation-target');
        vm.opponent.monster.hp -= attackDamage;
        vm.userAttacking = false;
      }, 1500);
      setTimeout(function() {
        opponentMonster.classList.add('animation-reverse-target');
        vm.enemyAttacking = true;
      }, 2500);
      setTimeout(function() {
        opponentMonster.classList.remove('animation-reverse-target');
        vm.selected.monster.hp -= opponentAttackPower;
        vm.enemyAttacking = false;
      }, 4000);
    },
    healMove: function (event) {
      var vm = this;
      var attackName = event.currentTarget.id;
      var userMonster = document.getElementById('player-monster-image');
      userMonster.classList.add('healing-glow');
      var opponentMonster = document.getElementById('opponent-monster-image');
      var opponentAttackIndex = parseInt(Math.random() * (vm.opponent.monster.attacks.length - 1));
      var opponentAttackName = vm.opponent.monster.attacks[opponentAttackIndex].name;
      var opponentAttackPower = vm.opponent.monster.attacks[opponentAttackIndex].power;
      vm.enemyAttackName = opponentAttackName;
      vm.userHeal = true;
      setTimeout(function() {
        userMonster.classList.remove('healing-glow');
        vm.selected.monster.hp += 50;
        vm.userHeal = false;
      }, 1500);
      setTimeout(function() {
        opponentMonster.classList.add('animation-reverse-target');
        vm.enemyAttacking = true;
      }, 2500);
      setTimeout(function() {
        opponentMonster.classList.remove('animation-reverse-target');
        vm.selected.monster.hp -= opponentAttackPower;
        vm.enemyAttacking = false;
      }, 4000);
    },
    passMove: function (event) {
      var vm = this;
      var opponentMonster = document.getElementById('opponent-monster-image');
      var opponentAttackIndex = parseInt(Math.random() * (vm.opponent.monster.attacks.length - 1));
      var opponentAttackName = vm.opponent.monster.attacks[opponentAttackIndex].name;
      var opponentAttackPower = vm.opponent.monster.attacks[opponentAttackIndex].power;
      vm.enemyAttackName = opponentAttackName;
      vm.userWait = true;
      setTimeout(function() {
        vm.userWait = false;
      }, 1500);
      setTimeout(function() {
        opponentMonster.classList.add('animation-reverse-target');
        vm.enemyAttacking = true;
      }, 2500);
      setTimeout(function() {
        opponentMonster.classList.remove('animation-reverse-target');
        vm.selected.monster.hp -= opponentAttackPower;
        vm.enemyAttacking = false;
      }, 4000);
    }
  }
});
