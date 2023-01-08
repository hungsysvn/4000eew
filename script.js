const audio = document.getElementById("audio");
const lyrics = document.getElementById("lyrics");
let context;
let source;
let analyser;
let currentTime = 0;

function startAudio() {
  context = new AudioContext();
  source = context.createMediaElementSource(audio);
  analyser = context.createAnalyser();

  source.connect(analyser);
  analyser.connect(context.destination);

  audio.play();
  requestAnimationFrame(updateLyrics);
}

function updateLyrics() {
  currentTime = audio.currentTime;
  const currentLine = script.find(
    (line) => currentTime >= line.start && currentTime < line.end
  );
  if (currentLine) {
    lyrics.textContent = currentLine.text;
    lyrics.classList.add("highlight");
  } else {
    lyrics.textContent = "";
    lyrics.classList.remove("highlight");
  }
  requestAnimationFrame(updateLyrics);
}

document.addEventListener("click", startAudio);

const script = [
  {
    start: 0,
    end: 2,
    text: "[Music]",
  },
  {
    start: 2,
    end: 8,
    text: "[Music] the amalfi coast",
  },
  {
    start: 8,
    end: 14,
    text: "the amalfi coast in italy is a beautiful place to travel it's a beautiful area with an",
  },
  {
    start: 14,
    end: 22,
    text: "interesting culture located on the taranian sea next to the mediterranean in southern italy",
  },
  {
    start: 22,
    end: 27,
    text: "the amalfi coast has high mountains and amazing beaches",
  },
  {
    start: 27,
    end: 32,
    text: "amalfi is on the west coast of italy and it takes less than four hours to",
  },
  {
    start: 32,
    end: 38,
    text: "drive there from rome the country's capital you'll love it from the moment you",
  },
  {
    start: 38,
    end: 46,
    text: "arrive there there are many activities for travelers including beautiful beaches for swimming",
  },
  {
    start: 46,
    end: 53,
    text: "you can also play games on the beach and catch free space a boat trip is a good way to spend the",
  },
  {
    start: 53,
    end: 59,
    text: "day and you may see ducks and other birds sitting on the water",
  },
  {
    start: 59,
    end: 64,
    text: "fishing is also a popular activity there are dozens of villages on the",
  },
  {
    start: 64,
    end: 70,
    text: "amalfi coast and you can visit one of them to see how a typical local person",
  },
  {
    start: 70,
    end: 76,
    text: "lives if you're friendly you might even get invited into someone's house to enjoy",
  },
  {
    start: 76,
    end: 82,
    text: "home-cooked italian food italians like drinking alcohol",
  },
  {
    start: 82,
    end: 89,
    text: "especially wine the amalfi coast has lots of gardens to explore",
  },
  {
    start: 89,
    end: 96,
    text: "italy is famous for its pizza and pasta however the amalfi coast is also well",
  },
  {
    start: 96,
    end: 102,
    text: "known for fish and octopus because it is located next to the water",
  },
  {
    start: 102,
    end: 108,
    text: "pastries are a popular breakfast food on the amalfi coast",
  },
  {
    start: 108,
    end: 113,
    text: "august is a popular month to travel to the amalfi coast because the weather is",
  },
  {
    start: 113,
    end: 118,
    text: "warm it's easy to spend a week traveling around the area",
  },
  {
    start: 118,
    end: 125,
    text: "make sure to take a camera so you can take a lot of photos we're sure you'll agree that it's a",
  },
  {
    start: 125,
    end: 131,
    text: "great place [Music]",
  },
  {
    start: 131,
    end: 137,
    text: "the laboratory mia's father had a laboratory but she",
  },
  {
    start: 137,
    end: 144,
    text: "had no idea what was in it her dad always closed and locked the door when he went in",
  },
  {
    start: 144,
    end: 150,
    text: "she knew that he used it to do projects for work he never told mia what these projects",
  },
  {
    start: 150,
    end: 158,
    text: "were one night mia approached the door to the laboratory she stopped and thought",
  },
  {
    start: 158,
    end: 165,
    text: "i wonder what crazy experiment he is doing now suddenly she heard a loud noise",
  },
  {
    start: 165,
    end: 171,
    text: "it sounded like an evil laugh the noise scared her so she walked",
  },
  {
    start: 171,
    end: 176,
    text: "quickly back to her room the next night her friend liz came to",
  },
  {
    start: 176,
    end: 182,
    text: "her house when liz arrived mia told her about the night before",
  },
  {
    start: 182,
    end: 188,
    text: "oh it was terrible she said why don't we see what is in there",
  },
  {
    start: 188,
    end: 195,
    text: "liz asked it will be a fun adventure mia felt nervous about going into her",
  },
  {
    start: 195,
    end: 202,
    text: "father's laboratory but she agreed as always the door was locked",
  },
  {
    start: 202,
    end: 209,
    text: "they waited until mia's father left the laboratory to eat dinner he didn't lock the door",
  },
  {
    start: 209,
    end: 214,
    text: "liz said let's go the laboratory was dark",
  },
  {
    start: 214,
    end: 221,
    text: "the girls walked down the stairs carefully mia smelled strange chemicals",
  },
  {
    start: 221,
    end: 228,
    text: "what terrible thing was her father creating suddenly they heard an evil laugh",
  },
  {
    start: 228,
    end: 236,
    text: "it was even worse than the one mia heard the night before what if a monster was going to kill them",
  },
  {
    start: 236,
    end: 244,
    text: "mia had to do something she shouted for help mia's father ran into the room and",
  },
  {
    start: 244,
    end: 251,
    text: "turned on the lights oh no he said you must have learned my secret",
  },
  {
    start: 251,
    end: 258,
    text: "your monster tried to kill us mia said monster he asked",
  },
  {
    start: 258,
    end: 265,
    text: "you mean this he had a pretty doll in his hands the doll laughed",
  },
  {
    start: 265,
    end: 271,
    text: "the laugh didn't sound so evil anymore i made this for your birthday",
  },
  {
    start: 271,
    end: 278,
    text: "i wanted to give it to you then but you can have it now i hope you like it",
  },
  {
    start: 278,
    end: 284,
    text: "[Music] the report",
  },
  {
    start: 284,
    end: 290,
    text: "lee sat among the books at the library and thought about his group project",
  },
  {
    start: 290,
    end: 296,
    text: "they had to turn it in soon but he hadn't even started his part jack and",
  },
  {
    start: 296,
    end: 303,
    text: "claire were in his group they had worked hard they were also very smart and lee didn't",
  },
  {
    start: 303,
    end: 308,
    text: "want them to get a bad grade jack did the report",
  },
  {
    start: 308,
    end: 314,
    text: "he wrote a lot of very good sentences and described things clearly and carefully",
  },
  {
    start: 314,
    end: 323,
    text: "claire drew a nice map of the stars now lee needed to do his part of the project",
  },
  {
    start: 323,
    end: 328,
    text: "well i suppose i need to start my model lee thought",
  },
  {
    start: 328,
    end: 335,
    text: "making a model of a planet was really hard lee tried to read several books but he",
  },
  {
    start: 335,
    end: 341,
    text: "couldn't understand any of the charts we're going to fail because of me",
  },
  {
    start: 341,
    end: 347,
    text: "lee said he put his head down on the table and said",
  },
  {
    start: 347,
    end: 355,
    text: "i wish i could see a planet and an alien instead of having to read about it",
  },
  {
    start: 355,
    end: 361,
    text: "suddenly he had a great idea that would help him solve his problem",
  },
  {
    start: 361,
    end: 368,
    text: "why not go on the web and look for photographs of the earth and other planets taken from space",
  },
  {
    start: 368,
    end: 375,
    text: "they would give him a really good view of the planets they had to talk about in their report",
  },
  {
    start: 375,
    end: 380,
    text: "instead of a bad grade his group would have the best project ever",
  },
  {
    start: 380,
    end: 386,
    text: "the photos of earth showed lots of clouds but you could still see the shapes of",
  },
  {
    start: 386,
    end: 393,
    text: "land and seas on earth he also looked at photos of mars",
  },
  {
    start: 393,
    end: 399,
    text: "lee now had plenty of ideas for making a model of the planet mars",
  },
  {
    start: 399,
    end: 404,
    text: "all he had to do was to turn his ideas into a model",
  },
  {
    start: 404,
    end: 410,
    text: "he used a small ball to help him make the shape he wanted and then painted it",
  },
  {
    start: 410,
    end: 416,
    text: "to look like the photos of mars that he had seen sometimes seeing is much more helpful",
  },
  {
    start: 416,
    end: 422,
    text: "than just reading [Music]",
  },
  {
    start: 422,
    end: 429,
    text: "the dog's bell john's dog was a bad dog",
  },
  {
    start: 429,
    end: 434,
    text: "he bit people frequently john was concerned about this",
  },
  {
    start: 434,
    end: 441,
    text: "it was not an appropriate way for a dog to behave his friends in the village always",
  },
  {
    start: 441,
    end: 447,
    text: "expected the dog to bite them the news about john's dog spread through",
  },
  {
    start: 447,
    end: 452,
    text: "the village none of the people wanted to go to john's house",
  },
  {
    start: 452,
    end: 458,
    text: "john tried to instruct the dog to behave but it never worked",
  },
  {
    start: 458,
    end: 465,
    text: "he tried to be patient and teach the dog to be calm that also didn't work",
  },
  {
    start: 465,
    end: 473,
    text: "john didn't want to punish the dog how will i stop my dog's bad habit",
  },
  {
    start: 473,
    end: 479,
    text: "john asked himself john's friend came to talk to him about the issue",
  },
  {
    start: 479,
    end: 485,
    text: "during their important meeting his friend said the people in the village asked me to",
  },
  {
    start: 485,
    end: 491,
    text: "represent them we want your dog to stop this habit",
  },
  {
    start: 491,
    end: 497,
    text: "why don't you put a bell around the dog's neck this way we would hear your dog coming",
  },
  {
    start: 497,
    end: 502,
    text: "down the street john thought this was a great idea",
  },
  {
    start: 502,
    end: 508,
    text: "now people could stay away from the dog he would not be able to bite anyone",
  },
  {
    start: 508,
    end: 515,
    text: "anymore the dog liked the bell too people looked at him when they heard his",
  },
  {
    start: 515,
    end: 521,
    text: "bell this made the dog very content he liked the sound the bell made when he",
  },
  {
    start: 521,
    end: 526,
    text: "walked one day john's dog strolled through the village",
  },
  {
    start: 526,
    end: 532,
    text: "and met some other dogs he expected them to want a bell like his",
  },
  {
    start: 532,
    end: 539,
    text: "but they laughed at his bell they said the bell made people avoid him",
  },
  {
    start: 539,
    end: 545,
    text: "john's dog shook his head no they look at me because they like the",
  },
  {
    start: 545,
    end: 551,
    text: "bell the other dog said you have the wrong idea about what makes",
  },
  {
    start: 551,
    end: 558,
    text: "you popular of course they like your bell it tells them where you are so they can",
  },
  {
    start: 558,
    end: 563,
    text: "avoid you you aren't able to bite them anymore",
  },
  {
    start: 563,
    end: 573,
    text: "you see being popular isn't something positive when it's for the wrong reason",
  },
  {
    start: 573,
    end: 580,
    text: "iron man races have you heard of the iron man triathlon",
  },
  {
    start: 580,
    end: 589,
    text: "it's considered one of the most challenging sporting events in the world competitors swim ride a bike and run",
  },
  {
    start: 589,
    end: 595,
    text: "the race consists of a 3.86 kilometer swim a",
  },
  {
    start: 595,
    end: 601,
    text: "180.25 kilometer bicycle ride and a 42.2 kilometer run",
  },
  {
    start: 601,
    end: 607,
    text: "there are no breaks during the race so competitors must keep going no matter",
  },
  {
    start: 607,
    end: 614,
    text: "what people who choose to enter this race must be healthy and prepared in both",
  },
  {
    start: 614,
    end: 619,
    text: "mind and body iron ironman races are held all over the",
  },
  {
    start: 619,
    end: 626,
    text: "world some well-known competitions take place in new zealand germany and california in",
  },
  {
    start: 626,
    end: 633,
    text: "the united states there are several rules for those who want to compete in the ironman",
  },
  {
    start: 633,
    end: 639,
    text: "the minimum age of racers is 18 so everyone who competes is an adult",
  },
  {
    start: 639,
    end: 646,
    text: "training for the ironman can take more than a year people who train often start practicing",
  },
  {
    start: 646,
    end: 651,
    text: "the events at shorter distances first and then increase the amount of length",
  },
  {
    start: 651,
    end: 658,
    text: "and time they swim bike and run training can be difficult because people",
  },
  {
    start: 658,
    end: 665,
    text: "need to find a balance of strength and endurance training without enough training people can get",
  },
  {
    start: 665,
    end: 671,
    text: "bad injuries some people even gain weight when training because their bodies store",
  },
  {
    start: 671,
    end: 677,
    text: "calories instead of using them for energy all people in training should drink",
  },
  {
    start: 677,
    end: 682,
    text: "plenty of water doctors believe that exercise is good",
  },
  {
    start: 682,
    end: 688,
    text: "for people's health and helps the heart people participate in other sports and",
  },
  {
    start: 688,
    end: 695,
    text: "games such as golf or american football but the iron man is a challenging way to",
  },
  {
    start: 695,
    end: 700,
    text: "stay fit even though it is hard it can still be fun",
  },
  {
    start: 700,
    end: 706,
    text: "it's a great way to stay active and enjoy life",
  },
  {
    start: 706,
    end: 714,
    text: "[Music] the twins katie and alice were twins",
  },
  {
    start: 714,
    end: 721,
    text: "they were so alike that few people could tell them apart they were almost like seeing one person",
  },
  {
    start: 721,
    end: 726,
    text: "looking in a mirror they even spoke in the same way as each other",
  },
  {
    start: 726,
    end: 732,
    text: "they were best friends the twins attributes were not all",
  },
  {
    start: 732,
    end: 737,
    text: "exactly the same alice preferred sports and was a star",
  },
  {
    start: 737,
    end: 744,
    text: "athlete in soccer katie preferred foreign languages and was bilingual and fringe",
  },
  {
    start: 744,
    end: 751,
    text: "katie decided to be a participant at a summer camp in france alice wasn't interested in the french",
  },
  {
    start: 751,
    end: 756,
    text: "language so she didn't go but she was angry that katie wanted to",
  },
  {
    start: 756,
    end: 763,
    text: "spend the summer away from her two months later katie returned",
  },
  {
    start: 763,
    end: 769,
    text: "alice dashed to the airport to greet her sister but when alice saw katie she was",
  },
  {
    start: 769,
    end: 776,
    text: "surprised katie now spoke french and she looked completely different",
  },
  {
    start: 776,
    end: 782,
    text: "she was wearing fashionable clothes and she looked taller",
  },
  {
    start: 782,
    end: 788,
    text: "alice felt very messy next to her she was just wearing an old t-shirt and",
  },
  {
    start: 788,
    end: 794,
    text: "her hair looked untidy when alice asked katie about friends",
  },
  {
    start: 794,
    end: 801,
    text: "katie was vague and didn't say much it made alice feel tense and filled her",
  },
  {
    start: 801,
    end: 807,
    text: "with disgust because in the past they'd always told each other everything",
  },
  {
    start: 807,
    end: 814,
    text: "now there was a huge gulf between them over the weeks the sisters spoke even",
  },
  {
    start: 814,
    end: 822,
    text: "less two months later it was the twins birthday all their lives they'd had a ritual",
  },
  {
    start: 822,
    end: 829,
    text: "before their birthday they'd talk all night long that night alice came into katie's",
  },
  {
    start: 829,
    end: 834,
    text: "bedroom i'm sorry i haven't spoken to you much lately",
  },
  {
    start: 834,
    end: 840,
    text: "katie said i understand you have new friends now",
  },
  {
    start: 840,
    end: 846,
    text: "said alice angrily katie said my french friends don't write much",
  },
  {
    start: 846,
    end: 852,
    text: "nowadays for a while i thought they were more exciting than my friends at home",
  },
  {
    start: 852,
    end: 859,
    text: "but i was wrong you're my sister and you'll always be my best friend",
  },
  {
    start: 859,
    end: 865,
    text: "alice said i'm sorry too i wanted our relationship to stay the",
  },
  {
    start: 865,
    end: 872,
    text: "same forever but it's totally natural for twins to have different interests we can still be",
  },
  {
    start: 872,
    end: 877,
    text: "best friends without being together all the time",
  },
  {
    start: 877,
    end: 883,
    text: "[Music] the best prince",
  },
  {
    start: 883,
    end: 888,
    text: "king minos was very sick his condition was getting worse",
  },
  {
    start: 888,
    end: 897,
    text: "he had three sons he loved them all he had to announce who would become king",
  },
  {
    start: 897,
    end: 902,
    text: "two of the princes stood waiting outside the king's room",
  },
  {
    start: 902,
    end: 907,
    text: "theseus was the oldest and strongest he thought his father would make him",
  },
  {
    start: 907,
    end: 913,
    text: "king pilias the second son thought differently",
  },
  {
    start: 913,
    end: 919,
    text: "he was an expert in fighting he thought the king would choose him",
  },
  {
    start: 919,
    end: 926,
    text: "when i'm king theseus told peelias i'll let you contribute to protect our",
  },
  {
    start: 926,
    end: 932,
    text: "country you can lead the army peleast became angry",
  },
  {
    start: 932,
    end: 937,
    text: "father knows i'm famous for my fighting skills he'll make me king",
  },
  {
    start: 937,
    end: 944,
    text: "you theseus said he won't choose you the kingdom is mine",
  },
  {
    start: 944,
    end: 951,
    text: "pilias claimed father will give it to me or i'll use force to take it",
  },
  {
    start: 951,
    end: 959,
    text: "theseus made a sudden move to take out his sword then peleast did the same",
  },
  {
    start: 959,
    end: 964,
    text: "beating me will be a challenge theseus said fight me now",
  },
  {
    start: 964,
    end: 970,
    text: "the winner gets the kingdom pelias agreed",
  },
  {
    start: 970,
    end: 978,
    text: "king minos could hear his sons fighting the youngest son jason stood beside him",
  },
  {
    start: 978,
    end: 985,
    text: "he sensed his father's sadness the king laid his hand on jason's arm",
  },
  {
    start: 985,
    end: 990,
    text: "your brother's fight too much the king told him",
  },
  {
    start: 990,
    end: 998,
    text: "i must protect my kingdom from all harm they'll divide it between them",
  },
  {
    start: 998,
    end: 1003,
    text: "the people won't know what to do there'll be war",
  },
  {
    start: 1003,
    end: 1008,
    text: "i can't allow either of them to be king therefore",
  },
  {
    start: 1008,
    end: 1014,
    text: "i'm making you king your kindness has always made you",
  },
  {
    start: 1014,
    end: 1020,
    text: "special it's the difference between you and your brothers",
  },
  {
    start: 1020,
    end: 1025,
    text: "you can bring peace they can't",
  },
  {
    start: 1025,
    end: 1030,
    text: "then the king died theseus and pelias heard that their",
  },
  {
    start: 1030,
    end: 1036,
    text: "youngest brother was king they were surprised",
  },
  {
    start: 1036,
    end: 1042,
    text: "they realized that their fighting was wrong it had kept them from saying goodbye to",
  },
  {
    start: 1042,
    end: 1047,
    text: "their father they agreed to have jason as their king",
  },
  {
    start: 1047,
    end: 1054,
    text: "he was the best choice [Music]",
  },
  {
    start: 1054,
    end: 1061,
    text: "how the sun and the moon were made do you ever wonder where the moon and",
  },
  {
    start: 1061,
    end: 1067,
    text: "the sun came from the inuit people of alaska have a theory",
  },
  {
    start: 1067,
    end: 1072,
    text: "they tell a story about a beautiful girl she was very nice",
  },
  {
    start: 1072,
    end: 1081,
    text: "in contrast her brother was a mean little boy one day he proposed something",
  },
  {
    start: 1081,
    end: 1086,
    text: "we should go to a party he said the girl accepted",
  },
  {
    start: 1086,
    end: 1092,
    text: "first it was necessary for her to get ready she arranged her hair and put on nice",
  },
  {
    start: 1092,
    end: 1099,
    text: "clothes this required a lot of time but the girl worked hard and soon she",
  },
  {
    start: 1099,
    end: 1106,
    text: "was satisfied she looked perfect they attended the party together",
  },
  {
    start: 1106,
    end: 1111,
    text: "the girl was having fun later she walked into the bathroom",
  },
  {
    start: 1111,
    end: 1117,
    text: "suddenly the lights were turned off someone grabbed her hair and tore her",
  },
  {
    start: 1117,
    end: 1125,
    text: "clothes she ran out of the bathroom she wanted to know who did this to her",
  },
  {
    start: 1125,
    end: 1133,
    text: "then she had an idea she fixed her hair again this time it was even more beautiful",
  },
  {
    start: 1133,
    end: 1139,
    text: "she even arranged beautiful jewels in it she wanted to encourage the person to",
  },
  {
    start: 1139,
    end: 1146,
    text: "grab it again she put black dirt in her hair the purpose of this was to catch the",
  },
  {
    start: 1146,
    end: 1153,
    text: "person she went to the bathroom again and it was the same pattern",
  },
  {
    start: 1153,
    end: 1161,
    text: "the lights went off and someone grabbed her hair when he released it his hand was black",
  },
  {
    start: 1161,
    end: 1166,
    text: "the girl returned to the party she knew there was only a single person",
  },
  {
    start: 1166,
    end: 1172,
    text: "with a black hand when she saw that person he was very familiar",
  },
  {
    start: 1172,
    end: 1179,
    text: "it was her brother he ran into the woods the girl ran after him",
  },
  {
    start: 1179,
    end: 1185,
    text: "they both carried fire so they could see in the dark the smoke went into the air",
  },
  {
    start: 1185,
    end: 1193,
    text: "as they ran they grew they became huge then they went into space",
  },
  {
    start: 1193,
    end: 1199,
    text: "when the girl's fire went out she hung in the sky she became the moon",
  },
  {
    start: 1199,
    end: 1206,
    text: "and her brother became the sun they chase each other forever",
  },
  {
    start: 1206,
    end: 1212,
    text: "[Music] service animals",
  },
  {
    start: 1212,
    end: 1220,
    text: "have you ever seen a blind person on the bus with a dog this dog is most likely a service animal",
  },
  {
    start: 1220,
    end: 1227,
    text: "a service animal is an animal that is trained to do things for people who cannot do them alone because of a",
  },
  {
    start: 1227,
    end: 1235,
    text: "disability dogs are most usually used as service animals because they are intelligent",
  },
  {
    start: 1235,
    end: 1243,
    text: "animals they also have a good sense of smell and can sense dangerous situations",
  },
  {
    start: 1243,
    end: 1250,
    text: "in addition dogs are easy to train and are loyal to their owners",
  },
  {
    start: 1250,
    end: 1257,
    text: "when they are close to their owners dogs will do anything to keep them safe",
  },
  {
    start: 1257,
    end: 1263,
    text: "service dogs are sometimes called guide dogs or hearing dogs",
  },
  {
    start: 1263,
    end: 1268,
    text: "these dogs can help people who cannot see or hear",
  },
  {
    start: 1268,
    end: 1275,
    text: "they are trained to open and close a door push a button and listen to a command",
  },
  {
    start: 1275,
    end: 1281,
    text: "these dogs can also help people who have a hurt leg and need to use a wheelchair",
  },
  {
    start: 1281,
    end: 1286,
    text: "to get around service dogs are strong and can even",
  },
  {
    start: 1286,
    end: 1293,
    text: "pull wheelchairs if these people ever need medical attention the dogs are trained to bark",
  },
  {
    start: 1293,
    end: 1300,
    text: "and get help dogs can also be used as therapy dogs",
  },
  {
    start: 1300,
    end: 1307,
    text: "therapy dogs may visit a school or hospital to help people who are feeling lonely or",
  },
  {
    start: 1307,
    end: 1312,
    text: "anxious their bad feelings can create health problems",
  },
  {
    start: 1312,
    end: 1318,
    text: "therapy dogs can provide kindness and love to improve a person's mood which",
  },
  {
    start: 1318,
    end: 1324,
    text: "can then improve that person's health although dogs are the most common",
  },
  {
    start: 1324,
    end: 1330,
    text: "service animals there are other animals that can be trained to be service animals as well",
  },
  {
    start: 1330,
    end: 1337,
    text: "you might see a cat a rabbit or a horse that is used as a service animal",
  },
  {
    start: 1337,
    end: 1342,
    text: "these animals can keep a person company and become a good friend",
  },
  {
    start: 1342,
    end: 1349,
    text: "many people depend on service animals for help service animals can do jobs that people",
  },
  {
    start: 1349,
    end: 1358,
    text: "cannot do alone and they can help improve the health of people by making them feel",
  },
  {
    start: 1358,
    end: 1366,
    text: "happy the first peacock argos lived in ancient greece",
  },
  {
    start: 1366,
    end: 1373,
    text: "he was a husband and a proud father he worked hard and did well at his job",
  },
  {
    start: 1373,
    end: 1380,
    text: "but one thing about him wasn't normal he was born with 100 eyes",
  },
  {
    start: 1380,
    end: 1388,
    text: "having many eyes was usually a benefit to him he had a chance to see many things",
  },
  {
    start: 1388,
    end: 1395,
    text: "also since he had so many eyes he was very good at guarding things",
  },
  {
    start: 1395,
    end: 1402,
    text: "while sleeping he only rested a few eyes at a time the others stayed open",
  },
  {
    start: 1402,
    end: 1408,
    text: "he worked for hera a great goddess his primary function was to guard a",
  },
  {
    start: 1408,
    end: 1413,
    text: "special cow the cow was very important to hera",
  },
  {
    start: 1413,
    end: 1420,
    text: "she loved it the most essential part of his job was to keep the cow alone",
  },
  {
    start: 1420,
    end: 1428,
    text: "it had to be kept separate from all the other cows and far away from people",
  },
  {
    start: 1428,
    end: 1434,
    text: "this was an easy job for argos the cow just ate grass all day",
  },
  {
    start: 1434,
    end: 1440,
    text: "but the god zeus wanted the cow he wanted to take it away from hera",
  },
  {
    start: 1440,
    end: 1448,
    text: "he had a plan he found a great music player he asked the man to play a beautiful",
  },
  {
    start: 1448,
    end: 1454,
    text: "song for argos zeus was certain argos would go to sleep",
  },
  {
    start: 1454,
    end: 1460,
    text: "the song had an immediate effect argos couldn't focus on his job",
  },
  {
    start: 1460,
    end: 1466,
    text: "he fell asleep zeus saw this and he took the cow",
  },
  {
    start: 1466,
    end: 1472,
    text: "hara was very angry with argos she turned him into a peacock",
  },
  {
    start: 1472,
    end: 1478,
    text: "she put his many eyes on his tail argos was very sad",
  },
  {
    start: 1478,
    end: 1484,
    text: "zeus saw how much trouble he had given argos he made another plan",
  },
  {
    start: 1484,
    end: 1490,
    text: "he turned argos into a group of stars he wanted argos to remain in the sky",
  },
  {
    start: 1490,
    end: 1496,
    text: "forever even today argos's image remains there above the",
  },
  {
    start: 1496,
    end: 1506,
    text: "site where all his problems began we can still see him in the night sky",
  },
  {
    start: 1506,
    end: 1512,
    text: "keeping our earth clean across the world",
  },
  {
    start: 1512,
    end: 1517,
    text: "places are increasing their efforts to recycle and help the environment",
  },
  {
    start: 1517,
    end: 1525,
    text: "recycling is when trash is reused and not thrown away in recent history more and more cities",
  },
  {
    start: 1525,
    end: 1531,
    text: "and countries have started recycling these places have developed their",
  },
  {
    start: 1531,
    end: 1537,
    text: "recycling programs to stop our earth from being covered with trash and black",
  },
  {
    start: 1537,
    end: 1544,
    text: "dirty air according to the environmental protection agency in the united states",
  },
  {
    start: 1544,
    end: 1550,
    text: "recycling also helps save energy the agency encourages the recycling of",
  },
  {
    start: 1550,
    end: 1556,
    text: "glass and plastic bottles paper and aluminum cans",
  },
  {
    start: 1556,
    end: 1564,
    text: "many european countries have strong recycling programs as well austria germany and norway are well",
  },
  {
    start: 1564,
    end: 1569,
    text: "known for being leaders in recycling and south korea and wales are countries",
  },
  {
    start: 1569,
    end: 1575,
    text: "that have a lot of recycling as well there are many reasons why some",
  },
  {
    start: 1575,
    end: 1580,
    text: "countries recycle more than others the fact is that these governments",
  },
  {
    start: 1580,
    end: 1587,
    text: "support recycling and they are aware of its importance there is also a lot of money spent on",
  },
  {
    start: 1587,
    end: 1594,
    text: "recycling however it is also necessary for people to try hard to recycle what they can",
  },
  {
    start: 1594,
    end: 1601,
    text: "from their own homes other ways to fight the waste problem also exist",
  },
  {
    start: 1601,
    end: 1607,
    text: "many cities place recycling bins on their streets there are recycling projects across some",
  },
  {
    start: 1607,
    end: 1613,
    text: "cities and in these projects companies advertise the need to recycle",
  },
  {
    start: 1613,
    end: 1620,
    text: "this helps keep the city streets clean electric cars are another way to keep",
  },
  {
    start: 1620,
    end: 1627,
    text: "the environment clean the motors of these cars are electric they get their power from electricity",
  },
  {
    start: 1627,
    end: 1634,
    text: "and batteries rather than from gas the hope is that eventually all cities",
  },
  {
    start: 1634,
    end: 1640,
    text: "in all countries will recycle and make our earth a cleaner place",
  },
  {
    start: 1640,
    end: 1646,
    text: "we must protect nature and never stop thinking about how to protect it",
  },
  {
    start: 1646,
    end: 1654,
    text: "so think before you throw away something that can be recycled",
  },
  {
    start: 1654,
    end: 1659,
    text: "[Music] the crazy artist",
  },
  {
    start: 1659,
    end: 1664,
    text: "friendhoffer was the best artist in the world everyone loved him",
  },
  {
    start: 1664,
    end: 1671,
    text: "the quality of his paintings was very high he always used the best materials",
  },
  {
    start: 1671,
    end: 1676,
    text: "he made a big profit from his paintings he had delicious meals with his rich",
  },
  {
    start: 1676,
    end: 1682,
    text: "neighbors he taught art classes life was good",
  },
  {
    start: 1682,
    end: 1689,
    text: "then his attitude changed he stopped selling paintings and teaching",
  },
  {
    start: 1689,
    end: 1695,
    text: "he tried a new method of painting he stayed alone in his apartment all day",
  },
  {
    start: 1695,
    end: 1702,
    text: "he worked all day and all night rarely eating soon frenhofer became very thin",
  },
  {
    start: 1702,
    end: 1710,
    text: "but he kept working on the same painting for many years he worked as hard as he could",
  },
  {
    start: 1710,
    end: 1716,
    text: "finally he finished the painting he was very happy and invited other",
  },
  {
    start: 1716,
    end: 1722,
    text: "artists to see it i want your professional opinion he said",
  },
  {
    start: 1722,
    end: 1729,
    text: "he wanted them to judge it and compare it to other paintings everyone was very excited as they went",
  },
  {
    start: 1729,
    end: 1735,
    text: "up the stairs to his apartment friendhoffer was excited to show his painting",
  },
  {
    start: 1735,
    end: 1741,
    text: "and the artists were excited to see it they'll love it he thought",
  },
  {
    start: 1741,
    end: 1746,
    text: "but they did not they were surprised by his painting",
  },
  {
    start: 1746,
    end: 1754,
    text: "there was no white anywhere friendhoffer filled the whole painting with lines and colors",
  },
  {
    start: 1754,
    end: 1760,
    text: "there was no space for a normal picture it was full of strange shapes",
  },
  {
    start: 1760,
    end: 1765,
    text: "it looked bad to the other artists he used symbols and they didn't",
  },
  {
    start: 1765,
    end: 1772,
    text: "understand them they thought it was terrible why did you paint this strange picture",
  },
  {
    start: 1772,
    end: 1777,
    text: "someone asked they didn't understand its beauty",
  },
  {
    start: 1777,
    end: 1783,
    text: "but after some time many people began to like his painting",
  },
  {
    start: 1783,
    end: 1789,
    text: "people wrote articles about it in magazines they said it was his best work",
  },
  {
    start: 1789,
    end: 1794,
    text: "they loved his strange symbols they loved his strange colors",
  },
  {
    start: 1794,
    end: 1800,
    text: "frenhofer's painting reminded everyone that just because something was new",
  },
  {
    start: 1800,
    end: 1807,
    text: "didn't mean that it was bad he also helped them to realize that sometimes it takes people a little time",
  },
  {
    start: 1807,
    end: 1812,
    text: "to understand great things",
  },
  {
    start: 1812,
    end: 1818,
    text: "[Music] the taxi driver",
  },
  {
    start: 1818,
    end: 1824,
    text: "peter's job was driving a taxi downtown he made a small salary",
  },
  {
    start: 1824,
    end: 1830,
    text: "but he liked his job because it wasn't dull every day he saw new things that",
  },
  {
    start: 1830,
    end: 1836,
    text: "appealed to him peter was practical about the future maybe i can get a scholarship for",
  },
  {
    start: 1836,
    end: 1842,
    text: "college he thought i could study accounting and get a job at a bank",
  },
  {
    start: 1842,
    end: 1849,
    text: "i could help clients invest their money peter stopped to pick up a passenger",
  },
  {
    start: 1849,
    end: 1854,
    text: "where to he asked go to the 4th street bank and don't talk",
  },
  {
    start: 1854,
    end: 1862,
    text: "to me i've had a rough day the man said peter was a peaceful person so he was",
  },
  {
    start: 1862,
    end: 1868,
    text: "not angry when they stopped the man's fare came to ten dollars and twenty five cents",
  },
  {
    start: 1868,
    end: 1874,
    text: "he put his hands in his pockets i can't find my wallet",
  },
  {
    start: 1874,
    end: 1879,
    text: "he said i can't pay the fare peter said",
  },
  {
    start: 1879,
    end: 1884,
    text: "i'll give you a temporary loan you can borrow ten dollars and a quarter from me",
  },
  {
    start: 1884,
    end: 1889,
    text: "the man was embarrassed and said i was mean to you but now i want to help",
  },
  {
    start: 1889,
    end: 1895,
    text: "you i founded this bank i want to give you a hundred dollars",
  },
  {
    start: 1895,
    end: 1901,
    text: "that much money was like a treasure to peter the man urged him to take the money but",
  },
  {
    start: 1901,
    end: 1908,
    text: "he didn't you're an honest person the man said",
  },
  {
    start: 1908,
    end: 1913,
    text: "i assumed you would take it i want you to work for me",
  },
  {
    start: 1913,
    end: 1922,
    text: "the next day peter started his job at the bank he was happy to leave his former job",
  },
  {
    start: 1922,
    end: 1928,
    text: "[Music] a magical book",
  },
  {
    start: 1928,
    end: 1935,
    text: "sarah loved to read she read novels and poems she loved the beautiful descriptions and",
  },
  {
    start: 1935,
    end: 1940,
    text: "phrases she loved reading work by poets and writers",
  },
  {
    start: 1940,
    end: 1946,
    text: "she didn't like video games or technology she was on the basketball team",
  },
  {
    start: 1946,
    end: 1951,
    text: "but she didn't like sports her parents made her play basketball",
  },
  {
    start: 1951,
    end: 1959,
    text: "in fact sarah's parents made her do many things but she didn't want to do those things",
  },
  {
    start: 1959,
    end: 1964,
    text: "she just wanted to sit and read all day",
  },
  {
    start: 1964,
    end: 1969,
    text: "one day a small book came in the mail it was for sarah",
  },
  {
    start: 1969,
    end: 1975,
    text: "the book looked very special it was printed on sheets of gold",
  },
  {
    start: 1975,
    end: 1982,
    text: "sarah began to read the outline of the story was simple it was about a magical place",
  },
  {
    start: 1982,
    end: 1987,
    text: "strange things happened there one example from the book was about a",
  },
  {
    start: 1987,
    end: 1993,
    text: "boy who could control people in one scene he made his friends tell funny",
  },
  {
    start: 1993,
    end: 2000,
    text: "jokes sarah loved the book she read it all the time",
  },
  {
    start: 2000,
    end: 2006,
    text: "then something strange happened the book gave sarah a special power",
  },
  {
    start: 2006,
    end: 2011,
    text: "she could control other people she was like the boy in the book",
  },
  {
    start: 2011,
    end: 2019,
    text: "during one exam she made her friend tell silly jokes her friend got in trouble",
  },
  {
    start: 2019,
    end: 2029,
    text: "after school sarah did not make a direct trip home on the way she went to the local store",
  },
];
