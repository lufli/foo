/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    var stack = [];
    for(var i=0;i<s.length;i++) {
        if(s.charAt(i)==='(' || s.charAt(i)==='[' || s.charAt(i)==='{') stack.push(s.charAt(i));
        else {
            var buff = stack.pop();
            if(s.charAt(i)===')' && buff!=='(') return false;
            if(s.charAt(i)===']' && buff!=='[') return false;
            if(s.charAt(i)==='}' && buff!=='{') return false;
        }
    }
    return stack.length===0;
};
