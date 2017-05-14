<!DOCTYPE HTML>
<html>
<script>

function Race(raceName, strength,dexterity,constitution,intelligence,wisdom,charisma,flavor,mechanics,traitsString,){
    var name = raceName;
    var strBonus = strength;
    var dexBonus = dexterity;
    var conBonus = constitution;
    var intBonus = intelligence;
    var wisBonus = wisdom;
    var chrBonus = charisma;
    var flavorText = flavor;
    var mechanicsText = mechanics;
    
    var traits = traitsString.split(",");
    
    
    var getName = function getname(){return name;}
    var getStrBonus = function getstr(){return strBonus;}
    var getDexBonus = function getdex(){return dexBonus;}
    var getConBonus = function getcon(){return conBonus;}
    var getIntBonus = function getint(){return intBonus;}
    var getWisBonus = function getwis(){return wisBonus;}
    var getChrBonus = function getchr(){return chrBonus;}
    var getTraits = function gettraits() {return traits;}
    
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

function Class(className,classSkillBonus,classFlavorText, classMechanicsText,ClassTraits, classAlignments){
    var name = className;
    var skillBonus = classSkillBonus;
    var flavorText = classFlavorText;
    var mechanicsText = classMechanicsText;
    
    var traits = traitsString.split(",");
    
    var alignment = alignmentString.split(",");
    
    var getName = function getname(){return name;}
    var getSkillPoints = function getskillpoints(totalInt){ return Number(skillBonus) + Number(totalInt);}
    var getTraits = function gettraits() {return traits;}
    var getAlignment = function() {return alignment;}
    
    
    
}

function Spell(spellName, spellDamage, spellRange, spellComponents, spellFlavorText){
    var name = spellName;
    var damage = spellDamage;
    var range = spellRange;
    var components = spellComponents;
    var flavorText = spellFlavorText;
    
    var getName = function(){return name;}
    var getDamage = function(){return damage;}
    var getRagne = function() {return range;}
    var getComponents = function() {return components;}
    var getFlavorText = function() {return flavorText;}
}

function Feat(featName, featAbilityScoreRequirement, featLevelRequirement, featMechanicsText){
    var name;
    var abilityScoreRequirement;
    var levelRequirement;
    var mechanicsText;
    
    var getName = function() {return name;}
}





function import(){
    var text =[];
    var lines = [];

    var file = new XMLHttpRequest();
    file.open("GET", "/classes.csv", true);
    file.onreadystatechange = function()
    {
        text = file.responseText;
        lines = text.split(/\r\n|\n/);
        
    };
}


</script>



</html>