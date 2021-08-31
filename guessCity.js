function guessCity(capital, coastal, famous, ancient) {
    if (ancient && famous && capital && !coastal) {
        return "Jerusalem"
    } else if (famous && coastal && !capital && !ancient) {
        return "Tel Aviv"
    } else if (coastal && ancient && !famous && !capital) {
        return "Acre"
    } else if (ancient && !coastal && !famous && !capital) {
        return "Katzrin"
    } else if (!ancient && coastal && !famous && !capital) {
        return "Zikim"
    } else if (!ancient && !coastal && !famous && !capital) {
        return "Musmus"
    } else {
        return "Not a city"
    }
}

console.log(guessCity(false, false, false, false));
 