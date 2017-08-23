function Node(data) {
  this.data = data;
  this.isWord = false;
  this.count = 0;
  this.children = {};
}

function Trie() {
  this.root = new Node('');
}
// add a word to Trie
Trie.prototype.add = function(word) {
  if(!this.root) return null;
  this._addNode(this.root, word);
}

Trie.prototype._addNode = function(node, word) {
  if(!node || !word) return null;
  node.count++;
  var letter = word.charAt(0);
  var child = node.children[letter];
  if(!child) {
    node.children[letter] = new Node(letter);
  }
  var remainder = word.substring(1);
  if(!remainder) {
    node.children[letter].isWord = true;
  }
  this._addNode(node.children[letter], remainder);
}

// If or not contain a word
Trie.prototype.contains = function(word) {
  if(!this.root) {
    return false;
  }
  return this._contains(this.root, word);
}

Trie.prototype._contains = function(node, word) {
  if(!node) return false;
  if(word==='') {
    if(node.isWord) return true;
    else return false;
  }
  var letter = word.charAt(0);
  if(!node.children[letter]) return false;
  else return this._contains(node.children[letter], word.substring(1));
}

// remove a word
Trie.prototype.remove = function(word) {
  if(!this.root) return false;
  if(this.contains(word)) return this._removeNode(this.root, word);
  else return false;
}

Trie.prototype._removeNode = function(node, word) {
  if(!node || !word) return false;
  var letter = word.charAt(0);
  var remainder = word.substring(1);
  var child = node.children[letter];
  this.count--;
  if(remainder) {
    if(child.count === 1) {
      delete node.children[letter];
    } else {
      this._removeNode(child, remainder);
    }
  } else {
    if(child.count === 0) {
      // why not delete child
      delete node.children[letter];
    } else {
      child.isWord = false;
    }
  }
}

// Get all words
Trie.prototype.getWords = function() {
  var words = [];
  var word = '';
  this._getWords(this.root, words, word);
  return words;
}

Trie.prototype._getWords = function(node, words, word) {
  for(var child in node.children) {
    if(node.children.hasOwnProperty(child)) {
      word += child;
      if(node.children[child].isWord) {
        words.push(word);
      }
      this._getWords(node.children[child], words, word);
      word = word.substring(0, word.length-1);
    }
  }
};

var trie = new Trie();
trie.add('one');
trie.add('two');
trie.add('three');
console.log(trie.contains('one'));
console.log(trie.contains('two'));
console.log(trie.getWords());
trie.remove('one');
console.log(trie.getWords());
trie.remove('two');
console.log(trie.getWords());
