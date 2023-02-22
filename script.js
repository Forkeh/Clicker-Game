"use strict";

window.addEventListener("load", start);

// ---------- GAME VARIABLES ---------- //
let crystalHP = 100;
let crystalHPSpeed = 300;
let countdown = 60;
let mana = 4;
let kills = 0;
let orcsAttacking = 0;
let orbClicked = false;
let stopFunction = false;
let orc1SpawnTimerId;
let orc2SpawnTimerId;
let crystalHPTimerId;

// ---------- GAME ELEMENTS ---------- //
const energyContainer = document.querySelector("#energy_container");
const energySprite = document.querySelector("#energy_sprite");
const crystalContainer = document.querySelector('#crystal_container');
const crystalsprite = document.querySelector('#crystal_sprite');
const wizardContainer = document.querySelector("#wizard_container");
const orc1_container = document.querySelector("#orc1_container");
const orc1_sprite = document.querySelector("#orc1_sprite");
const orc2_container = document.querySelector("#orc2_container");
const orc2_sprite = document.querySelector("#orc2_sprite");

// ---------- GAME START ---------- //
function start() {
  console.log("START");

  crystalHealth(crystalHPSpeed); // How fast crystal loses hp

  document.querySelector("#game").addEventListener("mousedown", clickScreen);

  countDown();
  Orc1Spawn();
  Orc2Spawn();
  spawnOrb();
}

// ---------- ORC RANDOM SPAWN DELAY ---------- //
function randomSpawnDelay() {
  const delay = Math.floor(Math.random() * 3000) + 1000;
  return delay;
}
