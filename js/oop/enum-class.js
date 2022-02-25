// Season enums can be grouped as static members of a class
class Season {
  // Create new instances of the same class as static attributes
  static Summer = new Season("summer")
  static Autumn = new Season("autumn")
  static Winter = new Season("winter")
  static Spring = new Season("spring")

  constructor(name) {
    this.name = name
  }
}

// Now we can access enums using namespaced assignments
// this makes it semantically clear that "Summer" is a "Season"
let season = Season.Summer

// We can verify whether a particular variable is a Season enum
console.log(season instanceof Season)
// true
console.log(Symbol('something') instanceof Season)
//false

// We can explicitly check the type based on each enums class
console.log(season.constructor.name)
// 'Season

Object.keys(Season).forEach(season => console.log("season:", season))
// season: Summer
// season: Autumn
// season: Winter
// season: Spring
'
