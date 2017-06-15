function Heap(myFunction) {

	this.head = null;
	var self = this;

	self.myCompare = myFunction || function(a, b) {
		if(a===b) return 0;
		if(a<b) return -1;
		if(a>b) return 1;
	}

	self.insert = function(a) {
		var current = self.head;
		if(self.myCompare(a, current)>0) {
			var buff = a.val;
			a.val = current.val;
			current.val = buff;
			current = 
	}

}