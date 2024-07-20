function sing() {
    const chorus = "let it be";
    
    let lyrics = "";

    for (let i = 0; i < 4; i++) {
        lyrics += `${chorus}, `;
    }
    
    lyrics += "there will be an answer, ";

    for (let i = 0; i < 5; i++) {
        lyrics += `${chorus}, `;
    }
    
    lyrics += "whisper words of wisdom, ";
    
    lyrics += chorus;
    
    return lyrics.trim();
}

console.log(sing());