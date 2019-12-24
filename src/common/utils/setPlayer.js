export const setPlayer = (properties) => {
  properties.forEach(property => {
    const key = Object.keys(property)
    const value = Object.values(property)

    document
      .documentElement.style.setProperty(`--${key}`, value);
  })
}
