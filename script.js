// Дані для адвент-календаря
const daysData = [
    {
        title: "How Christmas lights helped guerrillas put down their guns\n",
        time: "15 minutes",
        description: "Unfortunately \"In my lifetime, I have never lived one day of peace in my country,\" says Jose Miguel Sokoloff. This ad executive from Colombia saw a chance to help guerrilla fighters choose to come home -- with smart marketing. He shares how some creative, welcoming messages have helped thousands of guerrillas decide to put down their weapons -- and the key insights behind these surprising tactics.\n ",
        link: "https://www.ted.com/talks/jose_miguel_sokoloff_how_christmas_lights_helped_guerrillas_put_down_their_guns?subtitle=en"
    },
    {
        title: "10 facts about Christmas",
        time: "4 minutes",
        description: "10 Awesome Facts About Christmas You Didn't Know 🎅 🎄\n",
        link: "https://www.youtube.com/watch?v=frSJiHU4gKQ"
    },
    {
        title: "The myth behind the Chinese zodiac",
        time: "5 minutes",
        description: "What’s your sign? In Western astrology, it’s a constellation determined by when your birthday falls in the calendar. But according to the Chinese zodiac (生肖), it’s your shuxiang, meaning the animal assigned to your birth year. And of the many myths explaining these animal signs and their arrangement, the most enduring one is that of The Great Race. Megan Campisi and Pen-Pen Chen recount this classic myth.",
        link: "https://youtu.be/may2s9j4RLk"
    },
    {
        title: "How to love, according to Rumi",
        time: "6 minutes",
        description: "According to legend, the renowned scholar Jalaluddin Muhammad Rumi was giving a lecture when a disheveled man approached and asked him the meaning of his academic books. Rumi didn’t know it yet, but this question and this man would change his life. So, who was this mysterious figure, and how did he influence Rumi’s worldview? Stephanie Honchell Smith details the life of the celebrated poet.﻿\n" +
            "\n",
        link: "https://youtu.be/MNw9x53Ybos"
    },
    {
        title: "The Most Talented Human in History",
        time: "14 minutes",
        description: "Leonardo da Vinci was a scientist, engineer, and artist.",
        link: "https://www.youtube.com/watch?v=8oOZMY3g9KE/"
    },
    {
        title: "Why do we feel nostalgia?",
        time: "4 minutes",
        description: "Nostalgia was once considered an illness confined to specific groups of people. Today, people all over the world report experiencing and enjoying nostalgia. But how does nostalgia work? And is it healthy? Clay Routledge details the way our understanding of nostalgia has changed since the term was first coined in the late 17th century.",
        link: "https://youtu.be/WiTgn5QH_HU"
    },
    {
        title: "Why Nonalcoholic Beer Is So Popular Now ",
        time: "7 minutess",
        description: "Nonalcoholic beer is one of the fastest growing segments of the beer industry, and Athletic Brewing is on top. So far in 2024, Athletic has outsold its nonalcoholic beer competitors including Heineken, Budweiser, Guinness and Corona in the U.S. Since its founding, Athletic has invested over $100 million into manufacturing and developing its own process of production. \n.",
        link: "https://www.youtube.com/watch?v=IZbGqxnR1sE"
    },
    {
        title: "Franz Kafka & Kafkaesque",
        time: "7 minutes",
        description: "Discovering the Meaning of ‘Kafkaesque’",
        link: "https://makingsensephilosophy.wordpress.com/2016/09/16/franz-kafka-kafkaesque/"
    },
    {
        title: "The science of falling in love",
        time: "7 minutess",
        description: "Love is often described as heartwarming, heart-wrenching, or even heartbreaking— and your brain is responsible for all these feelings. The journey from first spark to the last tear is guided by a symphony of neurochemicals and brain systems. Shannon Odell explores what happens in your brain when you fall in love, how it responds to a relationship, and how it reacts to a breakup." ,
        link: "https://youtu.be/f_OPjYQovAE"
    },
    {
        title: "Quantum Computers",
        time: "17 minutess",
        description: "Quantum computers aren’t what you've been told...\n. You’ve heard about quantum computers. Maybe you’ve seen the “race for quantum supremacy” between governments and companies, or read that quantum computers will break all encryption, or heard terms like “qubits” or “superposition” or “quantum mechanics” in a confusing tv segment. But you might be wondering… what does a quantum computer actually DO? And how could it actually affect my life?\n",
        link: "https://www.youtube.com/watch?v=e3fz3dqhN44&t=8s/"
    },
    {
        title: "How Duolingo Turned a Free Language App Into a $7.7B Business",
        time: "8 minutes",
        description: "Duolingo has been the top education app in Apple’s App Store for most of the past decade, making the company a revenue of around $500 million annually. But most people who use the language lesson app do not pay. So how does a free educational app manage to have a valuation of $7.7 billion?\n",
        link: "https://www.youtube.com/watch?v=9KqrnBiyBQ8"
    },
    {
        title: "How the UN Translates Everything in Real-Time\n",
        time: "7 minutes",
        description: "The secret of fast translating in UN.",
        link: "https://www.youtube.com/watch?v=0lbFEMqO_gg/"
    },
    {
        title: "A simple guide to chaos theory",
        time: "5 minutes",
        description: "According to classical physics and the laws of Isaac Newton, it should be easy to predict the behaviour of objects throughout the universe with relative ease.\n",
        link: "https://www.youtube.com/watch?v=r_ahZOgPTsk&t=12s"
    },
    {
        title: "Why do cats act so weird?",
        time: "15 хв",
        description: "They’re cute, they’re lovable, and judging by the 26 billion views on over 2 million YouTube videos of them, one thing is certain: cats are very entertaining. But their strange feline behaviors, both amusing and baffling, leave many of us asking: Why do cats do that? Tony Buffington explains the science behind some of your cat’s strangest behaviors.\n" +
            "\n",
        link: "https://youtu.be/sI8NsYIyQ2A"
    },
    {
        title: "Why should you read “Kafka on the Shore”?",
        time: "5 minutes",
        description: "Desperate to escape his tyrannical father and the family curse he feels doomed to repeat, Haruki Murakami’s teenage protagonist renames himself “Kafka” after his favorite author and runs away from home. So begins “Kafka on the Shore”— an epic literary puzzle filled with time travel, hidden histories and magical underworlds. Iseult Gillespie dives into Murakami’s mind-bending and whimsical novel.\n" +
            "\n",
        link: "https://youtu.be/mB4FO1itCi0"
    },
    {
        title: "How to enter ‘flow state’ on command ",
        time: "7 minutes",
        description: "Peak performance mind hack explained in 7 minutes.\n Flow is described as a state of  'effortless effort,' where we feel like we're propelled through an activity, and everything else seems to disappear. \n" +
            "\n" +
            "More specifically, flow refers to any moments of rapt attention and total absorption. You're so focused on the task at hand that everything else seems to disappear.\n" +
            "\n" +
            "Researchers have discovered 22 catalysts that can help you prepare your environment and quickly drop into a flow state. A few of these include distraction management, dopamine triggering, and concentration. \n",
        link: "https://www.youtube.com/watch?v=znwUCNrjpD4"
    },
    {
        title: "Is there a disease that makes us love cats?",
        time: "5 minutes",
        description: "Today, about a third of the world’s population is infected with a strange disease called toxoplasmosis — and most of them never even know it. And while the parasite can multiply in practically any host, it can only reproduce sexually in the intestines of cats. Could this disease be the reason so many people love cats and keep them as pets? Jaap de Roode shares what we know about toxoplasmosis.\n" +
            "\n",
        link: "https://youtu.be/rqno7K2zXi4/"
    },
    {
        title: "How do we smell?",
        time: "4 minutes",
        description: "An adult human can distinguish up to 10,000 odors. You use your nose to figure out what to eat, what to buy and even when it’s time to take a shower. But how do the molecules in the air get translated into smells in your brain? Rose Eveleth charts the smelly journey through your olfactory epithelium and explains why scent can be so subjective.\n",
        link: "https://youtu.be/snJnO6OpjCs"
    },
    {
        title: "Why do cats have vertical pupils? ",
        time: "5 minutes",
        description: "Peering into the eyes of different animals, you’ll see some extraordinarily shaped pupils. House cats, for one, are twilight hunters with vertically elongated pupils. Many grazing animals, like goats, have rectangular pupils. Other animals have crescent- or heart-shaped pupils. So, what’s going on? Why are there so many different pupil shapes? Emma Bryce digs into the science of animal vision.\n" +
            "\n",
        link: "https://youtu.be/jdrNjHPYKz4"
    },
    {
        title: "Schrödinger's cat: A thought experiment in quantum mechanics",
        time: "5 minutes",
        description: "Austrian physicist Erwin Schrödinger, one of the founders of quantum mechanics, posed this famous question: If you put a cat in a sealed box with a device that has a 50% chance of killing the cat in the next hour, what will be the state of the cat when that time is up? Chad Orzel investigates this thought experiment.\n" +
            "\n.",
        link: "https://youtu.be/UjaAxUO6-Uw"
    },
    {
        title: "Why do you want to squeeze cute things?",
        time: "6 minutes",
        description: "Watching a kitten fumbling around, it might feel as if you’ve never encountered anything so devastatingly adorable in your mortal life. You may want to pet its soft fur and kiss its tiny head. But you may also feel the conflicting urge… to squeeze or smush the kitten, maybe even stuff it in your mouth. What is this peculiar phenomenon? Joshua Paul Dale explores the urge known as cute aggression.\n" +
            "\n",
        link: "https://youtu.be/yxsoE3jO8HM"
    },
    {
        title: "How do dogs \"see\" with their noses? ",
        time: "4 minutes",
        description: "You may have heard the expression that dogs ‘see with their noses.’ But these creature’s amazing nasal architecture actually reveals a whole world beyond what we can see. Alexandra Horowitz illustrates how the dog’s nose can smell the past, the future and even things that can’t be seen at all.\n" +
            "\n.",
        link: "https://youtu.be/p7fXa2Occ_U"
    },
    {
        title: "The gory history of barber surgeons",
        time: "5 minutess",
        description: "Before you go to hairdresser, why iy looks like that. It was a cold morning in 15th century France and you’re off to the barber for a shave and haircut. You hear the familiar sound of singing inside and eye a bowl of blood in the window. You grab a cup of ale and examine the array of teeth strung from the walls. Suddenly, a scream sounds from one of the chairs. What's going on? Stephanie Honchell Smith shares the surprising history of barber-surgeons.\n" +
            "\n",
        link: "https://youtu.be/fGPPy__YnrI"
    },
    {
        title: "How to master your sense of smell",
        time: "4 minutess",
        description: "Some perfumers can distinguish individual odors in a fragrance made of hundreds of scents; tea-experts have been known to sniff out the exact location of a particular tea; and the NYC Transit Authority once had a employee responsible only for sniffing out gas leaks. But can anyone learn to smell with the sensitivity of those experts? Alexandra Horowitz shares three simple steps to a better nose.\n",
        link: "https://youtu.be/ynrbxy36erE"
    }
];

// Calendar creating
const calendarContainer = document.getElementById("calendar");
daysData.forEach((day, index) => {
    const dayElement = document.createElement("div");
    dayElement.classList.add("st-dec");
    dayElement.textContent = index + 1;

    // 6th and 24th December
    if (index + 1 === 6 || index + 1 === 24) {
        dayElement.style.backgroundColor = "#fca5a5"; // Червоний фон
        dayElement.style.color = "#b91c1c"; // Темно-червоний текст
        dayElement.style.fontWeight = "bold";
    }

    dayElement.addEventListener("click", () => showDayInfo(index));
    calendarContainer.appendChild(dayElement);
});

// Показ модального вікна
function showDayInfo(dayIndex) {
    const day = daysData[dayIndex];
    const modalContent = `
        <div class="modal">
            <h2>${day.title}</h2>
            <p><strong>Duration :</strong> ${day.time}</p>
            <p>${day.description}</p>
            <a href="${day.link}" target="_blank" class="resource-link">Redirect Me!</a>
            <button onclick="closeModal()">Close</button>
        </div>
        <div class="overlay" onclick="closeModal()"></div>
    `;

    const modalContainer = document.createElement("div");
    modalContainer.id = "modal-container";
    modalContainer.innerHTML = modalContent;
    document.body.appendChild(modalContainer);
}

// Закриття модального вікна
function closeModal() {
    const modalContainer = document.getElementById("modal-container");
    if (modalContainer) {
        document.body.removeChild(modalContainer);
    }
}

// Christmas Countdown
const countdownTimer = document.getElementById("countdown-timer");
const christmasDate = new Date(new Date().getFullYear(), 11, 25, 0, 0, 0);

function updateCountdown() {
    const now = new Date();
    const diff = christmasDate - now;

    if (diff <= 0) {
        countdownTimer.textContent = "Merry Christmas!";
        document.getElementById("happy-christmas").style.display = "block";
        clearInterval(countdownInterval);
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutess = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    countdownTimer.textContent = `${days} days ${hours} hr ${minutess} m ${seconds} s`;
}

const countdownInterval = setInterval(updateCountdown, 1000);
updateCountdown();
