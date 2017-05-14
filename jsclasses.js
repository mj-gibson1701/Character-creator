

function Race(raceName,ageMax,ageMin, heightMax, heightMin, weightMax,weightMin, strength,dexterity,constitution,intelligence,wisdom,charisma,flavor,mechanics,traitsString){
    this.name = raceName;
    this.maxAge = ageMax;
    this.minAge = ageMin;
    this.maxHeight = heightMax;
    this.minHeight = heightMin;
    this.maxWeight = weightMax;
    this.minWeight = weightMin;
    this.strBonus = strength;
    this.dexBonus = dexterity;
    this.conBonus = constitution;
    this.intBonus = intelligence;
    this.wisBonus = wisdom;
    this.chrBonus = charisma;
    this.flavorText = flavor;
    this.mechanicsText = mechanics;
    
    this.traits = traitsString.split(",");
    
    
    this.getName = function(){return this.name;}
    this.getAgeMin = function() {return this.minAge;}
    this.getAgeMax = function() {return this.maxAge;}
    this.getWeightMin = function() {return this.minWeight;}
    this.getWeightMax = function() {return this.maxWeight;}
    this.getHeightMin = function() {return this.minHeight;}
    this.getHeightMax = function() {return this.maxHeight;}
    this.getStrBonus = function getstr(){return this.strBonus;}
    this.getDexBonus = function getdex(){return this.dexBonus;}
    this.getConBonus = function getcon(){return this.conBonus;}
    this.getIntBonus = function getint(){return this.intBonus;}
    this.getWisBonus = function getwis(){return this.wisBonus;}
    this.getChrBonus = function getchr(){return this.chrBonus;}
    this.getTraits = function gettraits() {return this.traits;}
    
    /*
    var setName = function getname(newName){return name;}
    var setStrBonus = function getstr(newStr){return strBonus;}
    var setDexBonus = function getdex(newDex){return dexBonus;}
    var setConBonus = function getcon(newCon){return conBonus;}
    var setIntBonus = function getint(newInt){return intBonus;}
    var setWisBonus = function getwis(newWis){return wisBonus;}
    var setChrBonus = function getchr(newChr){return chrBonus;}
    var setTraits = function gettraits() {return traits;}
    */
    
    
}

function Class(className,classHitDie,classSkillBonus,classFlavorText, classMechanicsText,ClassTraits, classAlignments){
    this.name = className;
    this.hitDie = classHitDie;
    this.skillBonus = classSkillBonus;
    this.flavorText = classFlavorText;
    this.mechanicsText = classMechanicsText;
    
    this.traits = traitsString.split(",");
    
    this.alignment = alignmentString.split(",");
    
    this.getName = function getname(){return name;}
    this.getHitDie = function () {return hitDie;}
    this.getSkillPoints = function getskillpoints(totalInt){ return Number(skillBonus) + Number(totalInt);}
    this.getTraits = function gettraits() {return traits;}
    this.getAlignment = function() {return alignment;}
    
    
    
}

function Spell(spellName, spellDescription, spellClasses){
    this.name = spellName;
    this.description = spellDescription;
    this.classes = spellClasses;
    
    this.getName = function(){return name;}
    this.getDescription = function(){return description;}
    this.getClasses = function() {return classes;}
}

function Feat(featName, featAbilityScoreRequirement, featLevelRequirement, featMechanicsText){
    this.name;
    this.abilityScoreRequirement;
    this.levelRequirement;
    this.mechanicsText;
    
    this.getName = function() {return name;}
}





function loadRaces(){
    var text =[];
    var lines = [];
    function splitFile()
    {
        text = file.responseText;
        lines = text.split(/\r\n|\n/);
        for(var i=2; i<lines.length-2; i++){
            var raceinfo = lines[i].split(",");
            document.getElementById("test").innerHTML = raceinfo[0];
            var temprace = new Race(raceinfo[0],raceinfo[1],raceinfo[2],raceinfo[3],raceinfo[4],raceinfo[5],raceinfo[6],raceinfo[7],raceinfo[8],raceinfo[9],raceinfo[10],raceinfo[11],raceinfo[12],raceinfo[13],raceinfo[14],raceinfo[15]);
            
            alert(temprace.getName());
            
            races.push(temprace);
            alert(races[i-2].getName());
        }
        
    };

    var file = new XMLHttpRequest();
    file.open("GET", "/Races.csv", true);
    file.onreadystatechange = splitFile;
    file.send();
    
    
}


