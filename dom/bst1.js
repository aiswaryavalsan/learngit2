class Node{
    constructor(data){
        this.data=data;
        this.left=null;
        this.right=null;
    }
    
};
class bst{
    constructor(){
        this.root=null;
    }
    insert(data){
       var newNode=new Node(data);
       if(this.root===null){
        this.root=newNode;
       }
       else{
       this.insertnewnode(this.root,newNode);
       }
    }
    getRootNode(){
        return(this.root);
     }

insertnewnode(node,newNode){
    if(newNode.data<node.data){
        if(node.left===null){
            node.left=newNode;
        }
        else{
            this.insertnewnode(node.left,newNode);
        }
    }
    else{
        if(node.right==null){
            node.right=newNode;
        }
        else{
            this.insertnewnode(node.right,newNode);
        }

    }
 }
  search(node,data)
 {
    if(node===null)
    return false;
    else if(data<node.data){
        return this.search(node.left,data);
    }
    else if(data>node.data){
        return this.search(node.right,data);
    }
    else
    return true;
 }
};
 
 const bst1=new bst();
 bst1.insert(5);
 bst1.insert(6);
 bst1.insert(7);
 bst1.insert(8);
 bst1.insert(9);
const root=bst1.getRootNode();
document.write(bst1.search(root,7));
 
 
