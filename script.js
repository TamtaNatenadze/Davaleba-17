function compareWords() {
    let word1 = prompt("ჩაწერეთ პირველი სიტყვა:");
    let word2 = prompt("ჩაწერეთ მეორე სიტყვა:");
    if (word1.length === word2.length) {
        alert(true);
    } else {
        alert(false);
    }
}
compareWords();
