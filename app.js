//Requirements for lab:
var resume = {
    name: "Samuel Foster Bonner",
    career: "Junior Software Developer",
    description: "Previously a barbeque superstar, now a newbie coder.",
    age: 35
};
console.log("Name: " + resume.name.toUpperCase());
console.log("Career: " + resume.career);
console.log("Description: " + resume.description);
console.log("\n"); // blank line for output readability 
var interests = ['Trail Running', 'Reading', 'Cooking', 'My Cats'];
//Interests Section
console.log("Interests: ");
for (var i = 0; i < interests.length; i++) {
    console.log("* " + interests[i] + "\n");
}
;
console.log("\n"); // blank line for output readability 
var previousExperience = [{
        company: 'JNN',
        title: 'Project Manager',
        role: 'Project Management for an entire company'
    }, {
        company: 'JNN',
        title: 'Culinary Training Manager',
        role: 'Culinary training for an entire company'
    }, {
        company: 'JNN',
        title: 'Special Catering Manager',
        role: 'Catering for an entire state'
    }];
function displayPosition(company, title, description) {
    console.log("Company: " + company + "\n");
    console.log("Title: " + title + "\n");
    console.log("Description: " + description + "\n");
    console.log("\n");
}
console.log("Previous Experience: ");
for (var i = 0; i < previousExperience.length; i++) {
    displayPosition(previousExperience[i].company, previousExperience[i].title, previousExperience[i].role);
}
;
// Skills section
var skills = [{
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
function displaySkills(theSkill, isItCool) {
    if (isItCool == true) {
        console.log("* BAM: " + theSkill);
    }
    else {
        console.log("*" + theSkill);
    }
}
console.log("\n");
console.log("My Skills:");
for (var i = 0; i < skills.length; i++) {
    displaySkills(skills[i].skill, skills[i].isCool);
}
