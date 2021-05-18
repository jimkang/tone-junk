import { Sequence, FMSynth, Transport } from 'tone';

var started = false;

function start() {
  if (started) {
    return;
  }

  started = true;

  var synthA = new FMSynth().toDestination();
  new Sequence(
    (time, note) => {
      synthA.triggerAttackRelease(note, '4n', time);
    },
    ['C2', 'C#2', 'D2', 'D#2', 'E2', 'F2', 'F#2', 'G2']
  ).start(0);

  Transport.start();
}

function backUp() {
  const adjustedTicks = Transport.ticks - Transport.toTicks('4n');
  if (adjustedTicks >= 0) {
    Transport.ticks = adjustedTicks;
  }
}

document.getElementById('start-button').addEventListener('click', start);
document.getElementById('back-up-button').addEventListener('click', backUp);

export default {};
