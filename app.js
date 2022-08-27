const child = document.querySelector(".child");

let position = 0;
let topPosition = 0;

const move = () => {
  if (position <= 368 && topPosition == 0) {
    position += 16;
    child.style.left = `${position}px`;
    setTimeout(move, 160);
  } else if (position >= 368 && topPosition <= 368) {
    topPosition += 16;
    child.style.top = `${topPosition}px`;
    setTimeout(move, 160);
  } else if (topPosition >= 368 && position != 0) {
    position -= 16;
    child.style.left = `${position}px`;
    setTimeout(move, 160);
  } else if (position == 0 && topPosition != 0) {
    topPosition -= 16;
    child.style.top = `${topPosition}px`;
    setTimeout(move, 160);
  }
};
move();

setInterval(function() {
	console.log('secunds');
}, 1000);


