<script submit lang="ts">
interface Coordinates {
  x: number
  y: number
  direction: string
}
export default {
  data() {
    const data = {
      initialPosition: {
        x: 0,
        y: 0,
        direction: 'N'
      } as Coordinates,
      instructions: '',
      finalPosition: null as Coordinates | null
    }
    return {
      rovers: [{ data }]
    }
  },
  methods: {
    addRover() {
      this.rovers.push({
        data: {
          initialPosition: {
            x: 0,
            y: 0,
            direction: 'N'
          },
          instructions: '',
          finalPosition: null
        }
      })
    },
    async submit(i: number) {
      const result = await fetch('http://localhost:3000/v1/instructions', {
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(this.rovers[i].data),
        method: 'POST'
      }).then((response) => response.json())
      this.rovers[i].data.finalPosition = result as Coordinates
    },
    isInstruction(key: string) {
      const ALLOWED_MOVE_KEYS = ['L', 'M', 'R']
      return ALLOWED_MOVE_KEYS.includes(key.toUpperCase())
    },
    isDigit: function (key: string) {
      return key >= '0' && key <= '9'
    },
    allowKeyDown: function (evt: KeyboardEvent, cb: (key: string) => boolean) {
      console.log(this.rovers)
      if (cb(evt.key)) return true
      evt.preventDefault()
    }
  }
}
</script>

<template>
  <div v-for="({ data }, index) in rovers" :key="index" class="greetings">
    <h3>
      Initial Landing Position
      <p>
        X:
        <input
          style="width: 25%"
          v-model="data.initialPosition.x"
          @keypress="($event) => allowKeyDown($event, isDigit)"
        />
      </p>
      <p>
        Y:
        <input
          style="width: 25%"
          v-model="data.initialPosition.y"
          @keypress="($event) => allowKeyDown($event, isDigit)"
        />
      </p>
      <p>
        Direction:
        <input v-model="data.initialPosition.direction" />
      </p>
    </h3>
    <h3>
      <p>
        Instructions:
        <input
          v-model="data.instructions"
          @keypress="($event) => allowKeyDown($event, isInstruction)"
        />
      </p>
    </h3>
    <button @click="() => submit(index)">Submit</button>
    <div v-if="data.finalPosition">
      <p>"{{ data.finalPosition }}"</p>
    </div>
  </div>
  <button @click="addRover">Add Rover</button>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
