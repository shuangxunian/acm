//1480
//https://leetcode-cn.com/problems/running-sum-of-1d-array/
//没啥好说的，直接当前+上一个和给当前就好
class Solution {
public:
    vector<int> runningSum(vector<int>& nums) {
        for(int i=1;i<nums.size();i++){
            nums[i]+=nums[i-1];
        }
        return nums;
    }
};

//1431
//https://leetcode-cn.com/problems/kids-with-the-greatest-number-of-candies/
//candies[i]+ex>=max就是true
class Solution {
public:
    vector<bool> kidsWithCandies(vector<int>& candies, int extraCandies) {
        int n=candies.size();
        int mx=*max_element(candies.begin(),candies.end());
        vector<bool>ans;
        for(int i=0;i<n;i++){
            ans.push_back(candies[i]+extraCandies>=mx);
        }
        return ans;
    }
};

//二叉树，lc没看见，只不过是太火了，写一下练练手
//节点结构体
struct Node{
    int value;
    Node * left;
    Node * right;
    Node(int value):value(value),left(NULL),right(NULL){}
};
//构建二叉树
void inertNode(Node *node,int value){
    if(value<=node->value){
        if(!node->left){
            node->left=new Node(value);
        }
        else{
            inertNode(node->left,value);
        }
    }
    else{
        if(!node->right){
            node->right=new Node(value);
        }
        else{
            inertNode(node->right,value);
        }
    }
}
//前序遍历递归实现
void preOrder(Node *node){
    if(node){
        std::cout<<node->value;
        preOrder(node->left);
        preOrder(node->right);
    }

}
//前序遍历非递归实现
void preOrder1(Node *node){
    if(node==NULL){
        return;
    }
    std::stack<Node *> nstack;
    nstack.push(node);
    while(!nstack.empty()){
        Node *temp=nstack.top();
        std::cout<<temp->value;
        nstack.pop();
        if(temp->right){
            nstack.push(temp->right);
        }
        if(temp->left){
            nstack.push(temp->left);
        }
    }

}
//中序遍历递归实现
void inOrder(Node *node){
    if(node){
        inOrder(node->left);
        std::cout<<node->value;
        inOrder(node->right);
    }
}
//中序遍历非递归实现
void inOrder1(Node *node){
    std::stack<Node *> nstack;
    Node *temp=node;
    while(temp||!nstack.empty()){
        if(temp){
            nstack.push(temp);
            temp=temp->left;
        }
        else{
            temp=nstack.top();
            std::cout<<temp->value;
            nstack.pop();
            temp=temp->right;
        }
    }
}
//后序遍历递归实现
void posOrder(Node *node){
    if(node){
        posOrder(node->left);
        posOrder(node->right);
        std::cout<<node->value;
    }
}
//后序遍历非递归实现
void posOrder1(Node *node){
    if(node==NULL)
        return;
    std::stack<Node *> nstack1, nstack2;
    nstack1.push(node);
    while (!nstack1.empty()){
        Node *temp=nstack1.top();
        nstack1.pop();
        nstack2.push(temp);
        if(temp->left)
            nstack1.push(temp->left);
        if(temp->right)
           nstack1.push(temp->right);
    }
    while(!nstack2.empty())
    {
        std::cout<<nstack2.top()->value;
        nstack2.pop();
    }
}

//广度优先遍历
void broadOrder(Node *node){
    if(!node){
        return;
    }
    std::queue<Node *> qnodes;
    qnodes.push(node);
    while(!qnodes.empty()){
        Node * temp=qnodes.front();
        std::cout<<temp->value;
        qnodes.pop();
        if(temp->left){
            qnodes.push(temp->left);
        }
        if(temp->right){
            qnodes.push(temp->right);
        }

    }
}
int main(){
    int n;
    while(std::cin>>n){
        n--;
        int value;
        std::cin>>value;
        Node root(value);
        while(n--){
            int newValue;
            std::cin>>newValue;
            inertNode(&root,newValue);
        }
        std::cout<<"preOrder is:";
        preOrder(&root);
        std::cout<<std::endl;
        std::cout<<"inOrder is:";
        inOrder(&root);
        std::cout<<std::endl;
        std::cout<<"PosOrder is:";
        posOrder(&root);
        std::cout<<std::endl;
        std::cout<<"PreOrder without recursion is:";
        preOrder1(&root);
        std::cout<<std::endl;
        std::cout<<"inOrder without recursion is:";
        inOrder1(&root);
        std::cout<<std::endl;
        std::cout<<"PosOrder without recursion is:";
        posOrder1(&root);
        std::cout<<std::endl;
        std::cout<<"BroadOrder is:";
        broadOrder(&root);
    }
}

//快速排序
void sortwyl(int t[],int l,int r)
{
    if(l<r){
        int i=l,j=r,x=t[l];
        while (i<j)
        {
            while(i<j&&t[j]>=x) j--;
            if(i<j) t[i++]=t[j];
            while(i<j&&t[i]<x) i++;
            if(i<j) t[j--]=t[i];
        }
        t[i]=x;
        sortwyl(t,l,i-1);
        sortwyl(t,i+1,j);
    }
}
int main()
{
    int arr[105];
    int len=sizeof(arr)/sizeof(int);
    sortwyl(arr,0,len-1);
    for(int i=0;i<len;i++){
        cout<<arr[i]<<endl;
    }
}

//0167有序两数之和
//有序直接二分搜索
class Solution {
public:
    vector<int> twoSum(vector<int>& numbers, int target) {
        for(int i=0;i<numbers.size();i++){
            int out2=target-numbers[i];
            int low = i+1;
            int high= numbers.size()-1;
            while(low<=high){
                int mid=(low+high)/2;
                if(numbers[mid]==out2){
                    return {i+1;mid+1};
                }
                else if(numbers[mid]<out2){
                    low=mid+1;
                }
                else if(numbers[mid]>out2){
                    high=mid-1;
                }
            }
        }
        return {-1,-1};
    }
};

//1512
//一个暴力，一个哈希；这里用哈希
class Solution {
public:
    int numIdenticalPairs(vector<int>& nums) {
        unordered_map <int, int> m;
        for (int num: nums) {
            ++m[num];
        }

        int ans = 0;
        for (const auto &[k, v]: m) {
            ans += v * (v - 1) / 2;
        }

        return ans;
    }
};

//剑指 Offer 14- I. 剪绳子
//直接看题解吧这道题，题解写的真的好
//https://leetcode-cn.com/problems/jian-sheng-zi-lcof/solution/mian-shi-ti-14-i-jian-sheng-zi-tan-xin-si-xiang-by/
class Solution {
public:
    int cuttingRope(int n) {
        if(n<4)
            return n-1;
        int a=n/3,b=n%3;
        if(b==0) return pow(3,a);
        if(b==1) return pow(3,a-1)*4;
        return pow(3,a)*2;
    }
};

//lc 110
//求树高，判断差值
//https://leetcode-cn.com/problems/balanced-binary-tree
class Solution {
public:
    int height(TreeNode* root){
        if(root==NULL) return 0;
        else return max(height(root->left),height(root->right))+1;
    }
    bool isBalanced(TreeNode* root) {
        if(root==NULL) return true;
        else return abs(height(root->left)-height(root->right))<=1&&isBalanced(root->left)&&isBalanced(root->right);
    }
};

//lc 007
//直接翻转，判断一下溢出就好
//https://leetcode-cn.com/problems/reverse-integer/
class Solution {
public:
    int reverse(int x) {
        int rev = 0;
        while (x != 0) {
            int pop = x % 10;
            x /= 10;
            if (rev > INT_MAX/10 || (rev == INT_MAX / 10 && pop > 7)) return 0;
            if (rev < INT_MIN/10 || (rev == INT_MIN / 10 && pop < -8)) return 0;
            rev = rev * 10 + pop;
        }
        return rev;
    }
};


//lc 009
//https://leetcode-cn.com/problems/palindrome-number/
class Solution {
public:
    bool isPalindrome(int x) {
        if (x < 0 || (x % 10 == 0 && x != 0)) {
            return false;
        }

        int revertedNumber = 0;
        while (x > revertedNumber) {
            revertedNumber = revertedNumber * 10 + x % 10;
            x /= 10;
        }
        return x == revertedNumber || x == revertedNumber / 10;
    }
};

//lc 112
//https://leetcode-cn.com/problems/path-sum/
/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode(int x) : val(x), left(NULL), right(NULL) {}
 * };
 */
class Solution {
public:
    bool hasPathSum(TreeNode* root, int sum) {
        if(root==NULL){
            return false;
        }
        if(root->left==NULL&&root->right==NULL){
            return sum==root->val;
        }
        return hasPathSum(root->left,sum-root->val)||hasPathSum(root->right,sum-root->val);
    }
};


//lc 100
//https://leetcode-cn.com/problems/same-tree/submissions/
//深搜判断每一个节点是不是相等
class Solution {
public:
    bool isSameTree(TreeNode* p, TreeNode* q) {
        if (p == nullptr && q == nullptr) {
            return true;
        } else if (p == nullptr || q == nullptr) {
            return false;
        } else if (p->val != q->val) {
            return false;
        } else {
            return isSameTree(p->left, q->left) && isSameTree(p->right, q->right);
        }
    }
};


//lc 053
//https://leetcode-cn.com/problems/maximum-subarray/
class Solution {
public:
    int maxSubArray(vector<int>& nums) {
        int x=0,ans=nums[0];
        for(int i=0;i<nums.size();i++){
            x=max(x+nums[i],nums[i]);
            ans=max(x,ans);
        }
        return ans;
    }
};


//lc 111
//https://leetcode-cn.com/problems/minimum-depth-of-binary-tree/
/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode(int x) : val(x), left(NULL), right(NULL) {}
 * };
 */
class Solution {
public:
    int minDepth(TreeNode* root) {
        if(root==NULL){
            return 0;
        }
        if(root->left==NULL&&root->right==NULL){
            return 1;
        }
        int ans=1e9;
        if(root->left!=NULL){
            ans=min(ans,minDepth(root->left));
        }
        if(root->right!=NULL){
            ans=min(ans,minDepth(root->right));
        }
        return ans+1;
    }
};