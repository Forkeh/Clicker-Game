"use strict";

window.addEventListener("load", start);

// ---------- GAME VARIABLES ---------- //
let countdown = 60;
let kills = 0;
let orcsAttacking = 0;
let crystalHP = 100;
let mana = 3;

const energyContainer = document.querySelector('#energy_container');
const energySprite = document.querySelector('#energy_sprite');
const orc1_container = document.querySelector("#orc_container");
const orc1_sprite = document.querySelector("#orc_sprite");

// ---------- GAME START ---------- //

function start() {
  console.log("START");

  setInterval(crystalHealth, 300); // How fast crystal loses hp
  countDown();
  spawnOrc();
}

// ---------- COUNTDOWN ---------- //

function countDown() {
  const countdownDisplay = document.querySelector("#countdownText");

  for (let i = countdown; i >= 0; i--) {
    setTimeout(() => {
      countdownDisplay.innerHTML = i;
      if (i === 0) {
        winScreen();
      }
    }, (countdown - i) * 1000);
  }
}

// ---------- CRYSTAL HEALTH ---------- //

function crystalHealth() {
  // console.log("CRYSTAL HEALTH: " + crystalHP);
  const crystalHealthDisplay = document.querySelector("#healthText");

  crystalHealthDisplay.innerHTML = crystalHP + "%";

  if (orcsAttacking > 0) {
    crystalHP--;
  }
  if (crystalHP === 0) {
    console.log("YOU LOSE");
    gameOverScreen();
    return;
  }
}

// ---------- SHOW GAME SCREENS ---------- //

function winScreen() {
  document.querySelector("#win").style.visibility = "visible";
  document.querySelector(
    "#orcs-killed-win"
  ).innerHTML = `You killed ${kills} orcs!`;
}

function gameOverScreen() {
  document.querySelector("#game_over").style.visibility = "visible";
  document.querySelector(
    "#orcs-killed-lose"
  ).innerHTML = `You killed ${kills} orcs!`;
}

// ---------- ORC FUNCTIONS ---------- //

function orcClick() {
  console.log("CLICK ORC");

  orc1_sprite.removeEventListener("mousedown", orcClick);

  orc1_container.classList.add("pauseAnimation");
  // orc1_sprite.classList.add("orc_death");
  void orc1_sprite.offsetLeft;
  orc1_sprite.classList.remove("orc_attack");

  orc1_sprite.setAttribute("src", "images/Orc/orc_death.png");

  setTimeout(() => {
    orc1_container.style.visibility = "hidden";
    void orc1_container.offsetLeft;
    orc1_sprite.classList.remove("orc_death");
    orc1_container.classList.remove("pauseAnimation");
    orc1_container.classList.remove("orc_run");
    spawnOrc();
  }, 1500);

  //Hvorfor skal der være setTimeout på for at tilføje orc_run?!
  setTimeout(() => {}, 1500);

  kills++;
  console.log(`Kills: ${kills}`);

  if (orcsAttacking > 0) {
    orcsAttacking--;
  }
}

function spawnOrc() {
  console.log("SPAWN ORC");

  //Hvorfor skal der være setTimeout på for at tilføje orc_run?!
  setTimeout(() => {
    orc1_container.classList.add("orc_run");
    orc1_container.style.visibility = "visible";

    orc1_sprite.setAttribute("src", "images/Orc/orc_run.png");
    orc1_container.addEventListener("animationend", orcAttack);
  }, 1000);

  document.querySelector("#orc_sprite").addEventListener("mousedown", orcClick);
}

function orcAttack() {
  if (orcsAttacking >= 0) {
    orcsAttacking++;
  }
  console.log("ORCS ATTACKING: " + orcsAttacking);

  orc1_container.removeEventListener("animationend", orcAttack);

  orc1_sprite.classList.add("orc_attack");
  orc1_sprite.setAttribute("src", "images/Orc/orc_attack.png");
}


// ---------- WIZARD ATTACK ---------- //

document.addEventListener("click", wizardAttack);

function wizardAttack() {
  const sprite = document.querySelector("#wizard_sprite");
  document.removeEventListener("click", wizardAttack);

  sprite.classList.add("wizard_attack");
  sprite.setAttribute("src", "images/Wizard/wizard_attack.png");

  setTimeout(() => {
    sprite.setAttribute("src", "images/Wizard/wizard_idle.png");
    document.addEventListener("click", wizardAttack);
    sprite.classList.remove("wizard_attack");
  }, 400);
}


// ---------- MANA ORB ---------- //

document.querySelector('#energy_sprite').addEventListener('mousedown', clickOrb);

function clickOrb() {
  console.log('CLICK ORB: ' + mana + ' mana');

  if(mana < 3) {
mana++
  }

  document
    .querySelector("#energy_sprite")
    .removeEventListener("mousedown", clickOrb);


  energyContainer.classList.add('pauseAnimation');
  energySprite.classList.add('energy_click');

}