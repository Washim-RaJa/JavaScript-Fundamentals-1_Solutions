let TypeOfPackage = "standard";
switch(TypeOfPackage){
    case "standard" : console.log("Your delivery might take 3-5 days");
    break;
    case "express" : console.log("Your delivery might take 1-2 days");
    break;
    case "overnight" : console.log("Your package would be delivered the next day");
    break;
    default : console.log("Please select a valid package type !");
}