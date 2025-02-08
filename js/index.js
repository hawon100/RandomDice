function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function pickRandomCharacter() {
  const characters = {
    1: "아무무",
    2: "파우더",
    3: "다리우스",
    4: "드레이븐",
    5: "스텝",
    6: "이렐리아",
    7: "럭스",
    8: "모르가나",
    9: "바이올렛",
    10: "메디",
    11: "신지드",
    12: "트런들",
    13: "벡스",
    14: "자이라",
  };

  let random = rand(1, 14);
  document.getElementById(
    "result"
  ).textContent = `선택된 캐릭터: ${characters[random]}`;
}
