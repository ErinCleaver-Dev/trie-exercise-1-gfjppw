import "./style.css";

/* Class representing a Trie data structure */
export default class Trie {
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
  insert(str, pos = 0) {}

  /**
   * Return all words in Trie with a given prefix
   * @param  {String} str Prefix to search for
   * @return {Array} Array of strings that match for prefix
   */
  getAllWords(str = "") {}
}

// tests
const trie = new Trie();
trie.insert("cow");
trie.insert("cat");
trie.insert("dog");
trie.insert("dad");
console.log(trie.getAllWords());
