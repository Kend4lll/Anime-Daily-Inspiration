// object function to hold selected animes, their character, and a responding quote(s)
const showCharacterQuote = {
    'Hunter x Hunter': {
        Ging: {
            quote1: "You Should Enjoy The Little Detours To The Fullest. Because That's Where You'll Find The Things More Important Than What You Want.",
            quote2: "An Apology Is A Promise To Do Things Differently Next Time, And To Keep The Promise"

        },
        Knov: {
            quote1: "Whenever Humans Encounter The Unknown, They Tend To Lose Perspective."

        },
        Killua: {
            quote1: "When I Say It Doesn't Hurt Me, That Means I Can Bear It."

        },
        Hisoka: {
            quote1: "It Takes A Mere Second For Treasure To Turn To Trash."

        },
        Netero: {
            quote1: "Human Potential For Evolution Is Limitless."

        }
    },
    'Dragon Ball Z': {
        Piccolo: {
            quote1: "Sometimes, we have to look beyond what we want and do what's best."
        },
        Vegeta: {
            quote1: "Push through the Pain. Giving Up Hurts More.",
            quote2: "I do not fear this new challenge. Rather like a true warrior I will rise to meet it.",
            quote3: "Even the Mightiest Warriors Experience fears. What makes them a true Warrior is the courage that they possess to overcome their fears."
        },
        Goku: {
            quote1: "Sometimes life is too uncertain to have regrets.",
            quote2: "I must overcome everyone that comes in my way!"
        }
    },
    'Demon Slayer': {
        Giyu: {
            quote1: "Feel the rage. The powerful, pure rage of not being able to forgive will become your unswerving drive to take action."
        },
        Taniro: {
            quote1: "All I can do is work hard! That's the story of my life!",
            quote2: "I can do it. I know I can do it. I'm the guy who gets it done, broken bones or not. No matter what, I can do it! I can fight!"
        },
        Zenitsu: {
            quote1: "If you can do one thing, hone it to perfection. Hone it to the utmost limit.",
            quote2: "Don't ever give up. Even if it's painful, even if it's agonizing, don't try to take the easy way out."
        }
    },
    'Full Metal Alchemist Brotherhood': {
        'Roy Mustang': {
            quote1: "Nothing's perfect, the world's not perfect, but it's there for us, trying the best it can. That's what makes it so damn beautiful."
        },
        'Edward Elric': {
            quote1: "Stand up and walk. Keep moving forward. You've got two good legs. So get up and use them. You're strong enough to make your own path.",
            quote2: "A lesson without pain is meaningless. That's because no one can gain without sacrificing something. But by enduring that pain and overcoming it, he shall obtain a powerful, unmatched heart… a Fullmetal heart."
        }
    },
    'Naruto': {
        Naruto: {
            quote1: "HARD WORK IS WORTHLESS FOR THOSE THAT DON'T BELIEVE IN THEMSELVES.",
            quote2: "IF YOU DON'T LIKE THE HAND THAT FATE'S DEALT YOU WITH, FIGHT FOR A NEW ONE.",
            quote3: "SOMEBODY TOLD ME I'M A FAILURE, I'LL PROVE THEM WRONG.",
            quote4: "WHEN YOU GIVE UP, YOUR DREAMS AND EVERYTHING ELSE, THEY'RE GONE."
        },
        Itachi: {
            quote1: "GROWTH OCCURS WHEN ONE GOES BEYOND ONE'S LIMITS. REALIZING THAT IS ALSO PART OF TRAINING."
        },
        Jiraya: {
            quote1: "WHEN PEOPLE GET HURT, THEY LEARN TO HATE… WHEN PEOPLE HURT OTHERS, THEY BECOME HATED AND RACKED WITH GUILT. BUT KNOWING THAT PAIN ALLOWS PEOPLE TO BE KIND. PAIN ALLOWS PEOPLE TO GROW… AND HOW YOU GROW IS UP TO YOU."
        }
    }
}

// Provide the selected show
const showKey = Object.getOwnPropertyNames(showCharacterQuote);
// console.log(showKey);
const show = showKey[Math.floor(Math.random() * showKey.length)];
console.log("Today's show is " + show);

// provide the character based on the random show
const characterKey = Object.getOwnPropertyNames(showCharacterQuote[show]);
// console.log(characterKey);
const character = characterKey[Math.floor(Math.random() *characterKey.length)];
console.log(character + " has come to inspire you!");

// Select a random quote from the character
const quoteKey = Object.values(showCharacterQuote[show][character]);
const quote = quoteKey[Math.floor(Math.random() * quoteKey.length)];
console.log('"' + quote + '"');

// console.log(Object.getOwnPropertyNames(showCharacterQuote));
// console.log(Object.getOwnPropertyNames(showCharacterQuote["Demon Slayer"]));
