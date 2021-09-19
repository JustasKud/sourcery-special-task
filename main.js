const convertToHex = (colorVal) => {
    let hex = colorVal.toString(16).toUpperCase();
    return hex.length == 1 ? "0" + hex : hex
}
  
const rgbToHex = (rgb) => {
    let hex = rgb.split(",").map(x => convertToHex(parseInt(x)));
    return "#" + hex.join("")
}

const checkForErr = (text) => {
    let regExp = /^[0-9,]*$/;
    let commas = (text.match(/,/g) || []).length;
    let numOfDigits = /\d{4,}/.test(text)
    
    if (!regExp.test(text) || (commas !== 2) || numOfDigits) {
        return "Please enter a valid RGB value.";
    }
    return "Success!";
}

const handleSubmit = () => {
    rgb = document.getElementById("input").value;
    rgbEval = checkForErr(rgb);
    if (rgbEval !== "Success!") {
        document.getElementById("answer").innerHTML = rgbEval;
    }
    else {
        hex = rgbToHex(rgb);
        document.getElementById("answer").innerHTML = hex;
    }    
}

