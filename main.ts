let strawberry_price = 0
let coins = 0
let chicken_leg_quantity = 3
let chicken_leg_price = 7
let apple_price = 2
let apple_quantity = 2
let strawberries_quantity = 6
strawberries_quantity = 3
scene.setBackgroundColor(5)
game.splash("You " + coins + " coins from the start")
coins = coins + apple_price * apple_quantity
game.splash("You " + coins + " coins after selling the apples")
coins = coins + chicken_leg_price * chicken_leg_quantity
game.splash("You " + coins + " coins after selling the chicken legs")
coins = coins + strawberry_price * strawberries_quantity
game.splash("You " + coins + " coins after selling the straberries")
