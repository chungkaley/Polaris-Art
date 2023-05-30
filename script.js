var sentence= [
  'Draw someone in a post-apocalyptic world holding flowers.', 'Draw a person looking through a fish tank when they see someone staring back at them.', 'Draw an ice skater starting their rountine.', 'Draw a red-haired girl lying on the ground.', 'Draw someone trying to solve a rubix cube.', 'Draw a landscape with purple flowers.', 'Draw a greek god watching a human.', 'Draw someone staring in the mirror and crying.', 'Draw someone looking at a large red temple.', 'Draw a green dragon.', 'Draw Hello Kitty with a knife.', 'Draw someone skatebording near the beach when they almost crash into someone else.', 'Draw someone in the waiting room for the doctor when they see a rotting corpse.', 'Draw a man hanging out with animals in a forest.', 'Draw ghosts having a party.', 'Draw an old knight fighting with a dragon.', 'Draw a man fishing with a frog.', 'Draw a bunch of vegetables escaping from the kitchen.', 'Draw a group of gods fighting each other.', 'Draw someone drinking coffee with their cat in the morning.', 'Draw a cat playing with a butterfly.', 'Draw a king with a rusted crown.', 'Draw a hungry zombie.', 'Draw a child riding a bicycle in the sunset.', 'Draw a woman talking to a swan.', 'Draw two artists drawing each other.', 'Draw someone racing with a mythical creature.', 'Draw someone riding on a dragon.', 'Draw a robot talking to a man in a run-down laboratory.', 'Draw a garden full of monstrous plants.', 'Draw a witch having tea with a wizard.', 'Draw a man alone in a dark building.'
] 

var button = $(".newQuote")
button.on("click", newQuote)

function newQuote(){
  var randomNumber= sentence[Math.floor(Math.random()*sentence.length)];
    console.log(randomNumber)

 var secretContainer= $('.quoteDisplay')
 secretContainer.empty();
 secretContainer.append(randomNumber)
}

var randomImage = ["https://i.pinimg.com/564x/32/e1/1d/32e11da860134c13f74e51fc9885f13c.jpg", "https://i.pinimg.com/564x/6d/a5/74/6da5741842194a7a697bfb9d4271b253.jpg", "https://i.pinimg.com/564x/01/94/b5/0194b543135058d0554c228ddf616300.jpg","https://i.pinimg.com/564x/21/0b/2a/210b2a82742d6073a21a3c2dd903e443.jpg","https://i.pinimg.com/564x/9f/71/28/9f7128c017780e85acef13a830d3bc2c.jpg","https://i.pinimg.com/564x/bf/1d/79/bf1d79bd02b37045fb381945998574e8.jpg","https://i.pinimg.com/564x/8a/b5/cc/8ab5ccbce78fff58c0d1d7dd90d90b2b.jpg", "https://i.pinimg.com/564x/55/26/2e/55262e41333374d460d01961887409b1.jpg", "https://i.pinimg.com/236x/34/8c/4c/348c4c72003c44677ade0218b56beeb9.jpg", "https://i.pinimg.com/236x/ae/ef/1e/aeef1e6479f97fb3e5c373e1f5526a16.jpg", "https://i.pinimg.com/236x/e5/57/d0/e557d015ec864984e39c5d3cada2b88a.jpg", "https://i.pinimg.com/236x/ae/ef/1e/aeef1e6479f97fb3e5c373e1f5526a16.jpg", "https://i.pinimg.com/236x/5d/0c/d5/5d0cd58fd388c7cb1262b3768278b4cf.jpg", "https://i.pinimg.com/236x/7c/5c/ec/7c5cec9dbb3c98997de7898d705f98ce.jpg","https://i.pinimg.com/236x/e0/8e/96/e08e96cd4df0d2c6e5f03a682aeac596.jpg", "https://i.pinimg.com/236x/43/93/fe/4393fe1a1cc9aef949a9d0d52b0925ea.jpg", "https://i.pinimg.com/236x/43/93/fe/4393fe1a1cc9aef949a9d0d52b0925ea.jpg", "https://i.pinimg.com/236x/9d/bf/14/9dbf1459eab766891b92e538d36fc545.jpg","https://i.pinimg.com/236x/6f/0e/55/6f0e5543e41504b0ce87d71a3368d039.jpg", "https://i.pinimg.com/236x/c4/93/fd/c493fd550b555bb416ab1dcf6e5d0fb4.jpg", "https://i.pinimg.com/236x/56/b5/c7/56b5c79dd5d98f5a7d51fccee917191e.jpg","https://i.pinimg.com/236x/21/69/11/216911e1c2f9c27b781cef57742813aa.jpg", "https://i.pinimg.com/236x/92/ff/42/92ff428e1da4ad45956dca5ab08343e8.jpg","https://i.pinimg.com/236x/09/b3/75/09b375796ffc5e97d108ac287238ba85.jpg","https://i.pinimg.com/236x/83/59/bc/8359bcfcdfe78ae265b8c118a79a2b8f.jpg","https://i.pinimg.com/236x/10/b8/57/10b8575e119464c6ecd9368e1fb9ff61.jpg","https://i.pinimg.com/236x/5a/c4/e6/5ac4e661d4912609f828f98a4af8d9e1.jpg","https://i.pinimg.com/236x/20/7d/37/207d374a00ead766819ce6cdcc6e1f9d.jpg","https://i.pinimg.com/236x/a1/06/69/a10669fac7fda4fa5286fd64a5e38c6e.jpg","https://i.pinimg.com/236x/cb/c7/70/cbc7703e22244a32d4b0eef7816cb1c7.jpg" ]  

function shuffle(array) {
  var currentIndex = array.length,  randomIndex;

  while (0 !== currentIndex) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

shuffle(randomImage);

randomImage.forEach(function randomize(image){
  $(".result").append(`<img src ="${image}" class = "pictureSize">`)
}
)
