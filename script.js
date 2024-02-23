// script.js
document.addEventListener('DOMContentLoaded', function() {
    const chapters = {
        "Chapter 1": "Avära käläshim, Jafetäl, sünü türüm bän.",
        "Chapter 2": "Kürüsim vän, lävüsim pän, ädüsim jän.",
        "Chapter 3": "Nüväm pärisim, düväm ärisim, sümüväm jär.",
        "Chapter 4": "Lärüsöm värim, kävüsöm tärim, järüsöm märin.",
        "Chapter 5": "Pävär ävüm, sünäräv jüm, käräv lum.",
        "Chapter 6": "Tärüm särü, lümüm kärü, nävüm däru.",
        "Chapter 7": "Käräsim näv, säräsim läv, märäsim täv.",
        "Chapter 8": "Jävüm sün, dävüm kün, lävüm mün.",
        "Chapter 9": "Särüm jäl, värüm mäl, tävüm päl.",
        "Chapter 10": "Mävärüm lün, pävärüm sün, lävärüm dün.",
        "Chapter 11": "Kürvüm mä, lüvüm sä, nävüm jä.",
        "Chapter 12": "Tävär jüm, särär küm, mävär lüm.",
        "Chapter 13": "Pävüm näv, sävüm läv, kärüm jäv.",
        "Chapter 14": "Lävär süm, mävär küm, tävär jüm.",
        "Chapter 15": "Nävüm sär, lüvüm mär, kärüm tär.",
        "Chapter 16": "Jävär düm, lävär kü, mävär tü.",
        "Chapter 17": "Sävüm mär, kärüm lär, tävüm sär.",
        "Chapter 18": "Lüvär püm, jävär süm, nävär küm.",
        "Chapter 19": "Kävüm lä, sävüm nä, mävüm jä.",
        "Chapter 20": "Tärüm vä, lärüm mä, särüm jä.",
        "Chapter 21": "Pävär lüm, tävär dü, kärär sün.",
        "Chapter 22": "Nävärüm mün, lüvärüm dün, jävärüm sün.",
        "Chapter 23": "Särärüm vä, kärärüm nä, lävärüm tä.",
        "Chapter 24": "Mävüm sär, tävüm lär, kävüm mär.",
        "Chapter 25": "Jävärüm kün, nävärüm lün, särärüm tün."
        // Add more chapters as needed
    };

    const chapterNav = document.getElementById('chapterNav');
    const textSection = document.getElementById('text');

    for (let chapter in chapters) {
        let link = document.createElement('a');
        link.textContent = chapter;
        link.href = "#";
        link.onclick = function() {
            textSection.textContent = chapters[chapter];
            return false;
        };
        chapterNav.appendChild(link);
    }
});
