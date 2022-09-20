var maxDepth = function(root,counter = 0) {
    if (!root){
        return counter
    }
    counter ++
    return Math.max(maxDepth(root.left,counter),maxDepth(root.right,counter))
};