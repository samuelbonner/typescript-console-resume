//Requirements for lab:

// Your name should print in all capital letters, but you must not type it as all capitalized in your code (i.e. you will need to use JavaScript to capitalize it)
// You must have a function called displayPosition that takes parameters for company name, job title, and description. The function should console.log those three items in a format similar to the entries in the "My Previous Experience" section of the example below. You will call displayPosition several times with different data to create each entry for the "My Previous Experience" section.
// You must have a function called displaySkill that takes parameters for skill name and a boolean value for whether the skill is cool (true/false). Inside the function, you should print BAM: in front of the skill name only if the skill is cool. If you don't have any cool skills, make some up. Use this function to display each entry in the "My Skills" section.

//Name(IN CAPS) + Header Section
interface resumeInterface {
    name: string,
    career: string,
    description: string,
    age: number
}

let resume: resumeInterface = {
    name: "Samuel Foster Bonner",
    career: "Junior Software Developer",
    description: "Previously a barbeque superstar, now a newbie coder.",
    age: 35
};

console.log("Name: " + resume.name.toUpperCase());
console.log("Career: " + resume.career);
console.log("Description: " + resume.description);
console.log("\n") // blank line for output readability 
let interests : string[] = ['Trail Running', 'Reading', 'Cooking', 'My Cats'];


//Interests Section
console.log("Interests: ");

for (let i = 0; i < interests.length; i++) {
    console.log("* " + interests[i] + "\n")
};

console.log("\n") // blank line for output readability 


//Previous Experience Section
interface previousExperienceInterface {
    company: string,
    title: string,
    role: string
}

let previousExperience : previousExperienceInterface[] = [{
    company: 'JNN',
    title: 'Project Manager',
    role: 'Project Management for an entire company',
}, {
    company: 'JNN',
    title: 'Culinary Training Manager',
    role: 'Culinary training for an entire company',
}, {
    company: 'JNN',
    title: 'Special Catering Manager',
    role: 'Catering for an entire state'
}];

function displayPosition(company : string, title : string, description : string) {
    console.log("Company: " + company + "\n")
    console.log("Title: " + title + "\n")
    console.log("Description: " + description + "\n")
    console.log("\n")
}


console.log("Previous Experience: ");

for (let i = 0; i < previousExperience.length; i++) {
displayPosition(previousExperience[i].company, previousExperience[i].title, previousExperience[i].role)
};

interface skillsInterface {
    skill: string;
    isCool: boolean
}


// Skills section
let skills: skillsInterface[] = [{
    skill: 'JavaScript',
    isCool: false
}, {
    skill: 'Reading and Writing',
    isCool: false
}, {
    skill: 'Technical Writing',
    isCool: false
}, {
    skill: 'Project Management',
    isCool: false
}, {
    skill: 'High level of BS acceptance',
    isCool: false
}, {
    skill: 'Scale entire buildings in one jump (sometimes two)',
    isCool: true
}, {
    skill: 'Save any deserving children from burning buildings',
    isCool: true
}, {
    skill: 'Great with animals of all demeanors',
    isCool: true
}];


function displaySkills(theSkill: string, isItCool: boolean) {
    if (isItCool == true) {
        console.log("* BAM: " + theSkill)
    } else {
        console.log("*" + theSkill)
    }
}

console.log("\n")
console.log("My Skills:")


for (let i = 0; i < skills.length; i++) {
    displaySkills(skills[i].skill, skills[i].isCool)
}