
/* Class representing a Trie data structure */
class Trie {
  /**
   * Creates a Trie
   * @return {Object} Trie
   */
  constructor() {
    this.end = false;
    this.prefixes = 0;
    this.children = {};
  }

  /**
   * Insert a string into the Trie
   * @param  {String} str String to add
   * @param  {Number} pos Optional position in Trie
   * @return {}
   */
  insert(str, pos = 0) {
    if(str.length === pos) {
      this.end = true;
      return;
    }
    let key = [str[pos]];
    if(!this.children[key]) {
      this.children[key] = new Trie();
    }
    this.children[key].insert(str, pos + 1);

  }



  
  /**
   * Return all words in Trie with a given prefix
   * @param  {String} str Prefix to search for
   * @return {Array} Array of strings that match for prefix
   */
  getAllWords(str = "") {


    
  }
}

// tests
const trie = new Trie();
trie.insert("cow");
trie.insert("cat");
trie.insert("dog");
trie.insert("dad");
console.log(JSON.stringify(trie))
console.log(trie.getAllWords());
