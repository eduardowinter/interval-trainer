import * as Tone from "tone";

export function PlayInterval(note1: string, note2: string) {
  const sampler = new Tone.Sampler({
    urls: {
      "C4": "C4.mp3",
      "D#4": "Ds4.mp3",
      "F#4": "Fs4.mp3",
      "A4": "A4.mp3",
    },
    release: 1,
    baseUrl: "https://tonejs.github.io/audio/salamander/",
  }).toDestination();

  const now = Tone.now()

  console.log(note1)
  Tone.loaded().then(() => {
    sampler.triggerAttackRelease(note1, 1, now);
  })

  console.log(note2)
  Tone.loaded().then(() => {
    sampler.triggerAttackRelease(note2, 1, now + 1);
  })
}
