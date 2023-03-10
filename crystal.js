"use strict";

// ---------- CRYSTAL STATES ---------- //

function crystalHealth() {
  // console.log("CRYSTAL HEALTH: " + crystalHP);
  const crystalHealthDisplay = document.querySelector("#healthText");

  crystalHPTimerId = setInterval(() => {
    crystalHealthDisplay.innerHTML = crystalHP + "%";

    if (orcsAttacking > 0) {
      crystalHP--;
      crystalAttacked();
    } else {
      document
        .querySelector("#crystal_sprite")
        .classList.remove("crystal_attacked");
    }
    if (crystalHP < 25) {
      document.querySelector("#healthText").classList.add("critical_health");
      soundHealthLow();
    }
    if (crystalHP === 0) {
      console.log("YOU LOSE");
      soundCrystalDeath();
      gameOverScreen();
      return;
    }
  }, crystalHPSpeed);
}

function crystalAttacked() {
  if (orcsAttacking > 0) {
    document.querySelector("#crystal_sprite").classList.add("crystal_attacked");

    orc1_sprite.addEventListener("animationiteration", soundCrystalHit);
    orc2_sprite.addEventListener("animationiteration", soundCrystalHit);
    orc3_sprite.addEventListener("animationiteration", soundCrystalHit);
    orc4_sprite.addEventListener("animationiteration", soundCrystalHit);
    orc5_sprite.addEventListener("animationiteration", soundCrystalHit);
    orc6_sprite.addEventListener("animationiteration", soundCrystalHit);
  }
}
