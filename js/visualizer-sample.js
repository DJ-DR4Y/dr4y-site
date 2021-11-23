/*
 * Copyright 2013 Boris Smus. All Rights Reserved.

 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


let WIDTH = 435
let HEIGHT = 128

// Interesting parameters to tweak!
let SMOOTHING = 0.9
let FFT_SIZE = 2048

class visualizerSample {
  constructor() {
    this.analyser = context.createAnalyser()

    this.analyser.connect(context.destination)
    this.analyser.minDecibels = -100
    this.analyser.maxDecibels = 0
    loadSounds(this, {
      buffer: "./audio/DancingKing.wav"
    }, onLoaded)
    this.freqs = new Uint8Array(this.analyser.frequencyBinCount)
    this.times = new Uint8Array(this.analyser.frequencyBinCount)

    function onLoaded() {
      let button = document.querySelector("button")
      button.removeAttribute("disabled")
      button.innerHTML = "Jouer/pause"
    }

    this.isPlaying = false
    this.startTime = 0
    this.startOffset = 0
  }
  // Toggle playback
  togglePlayback() {
    if (this.isPlaying) {
      // Stop playback
      this.source[this.source.stop ? "stop" : "noteOff"](0)
      this.startOffset += context.currentTime - this.startTime
      // console.log("paused at", this.startOffset)
      // Save the position of the play head.
    } else {
      this.startTime = context.currentTime
      // console.log("started at", this.startOffset)
      this.source = context.createBufferSource()
      // Connect graph
      this.source.connect(this.analyser)
      this.source.buffer = this.buffer
      this.source.loop = true
      // Start playback, but make sure we stay in bound of the buffer.
      this.source[this.source.start ? "start" : "noteOn"](0, this.startOffset % this.buffer.duration)
      // Start visualizer.
      requestAnimationFrame(this.draw.bind(this))
    }
    this.isPlaying = !this.isPlaying
  }
  draw() {
    this.analyser.smoothingTimeConstant = SMOOTHING
    this.analyser.fftSize = FFT_SIZE

    // Get the frequency data from the currently playing music
    this.analyser.getByteFrequencyData(this.freqs)
    this.analyser.getByteTimeDomainData(this.times)

    let width = Math.floor(1 / this.freqs.length, 10)

    let canvas_wave = document.querySelector("#wave canvas")
    let drawContext = canvas_wave.getContext("2d")
    canvas_wave.width = WIDTH
    canvas_wave.height = HEIGHT
    // Draw the frequency domain chart.
    for (let i = 0; i < this.analyser.frequencyBinCount; i++) {
      let value = this.freqs[i]
      let percent = value / 256
      let height = HEIGHT * percent
      let offset = HEIGHT - height - 1
      let barWidth = WIDTH / this.analyser.frequencyBinCount
      let hue = i / this.analyser.frequencyBinCount * 360
      drawContext.fillStyle = "hsl(" + hue + ", 100%, 50%)"
      drawContext.fillRect(i * barWidth, offset, barWidth, height)
    }

    // Draw the time domain chart.
    for (let i = 0; i < this.analyser.frequencyBinCount; i++) {
      let value = this.times[i]
      let percent = value / 256
      let height = HEIGHT * percent
      let offset = HEIGHT - height - 1
      let barWidth = WIDTH / this.analyser.frequencyBinCount
      drawContext.fillStyle = "white"
      drawContext.fillRect(i * barWidth, offset, 1, 2)
    }

    if (this.isPlaying) {
      requestAnimationFrame(this.draw.bind(this))
    }
  }
  getFrequencyValue(freq) {
    let nyquist = context.sampleRate / 2
    let index = Math.round(freq / nyquist * this.freqs.length)
    return this.freqs[index]
  }
}





