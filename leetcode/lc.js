//1480
//https://leetcode-cn.com/problems/running-sum-of-1d-array/
//通过javascript中数组的高阶函数reduce来处理，每一次加上一次的累加值，直接修改nums本身，最后返回nums
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    nums.reduce((prev, curr, index) => {
        nums[index] = prev + curr
        return nums[index]
    }, 0)
    return nums
};

//1431
//https://leetcode-cn.com/problems/kids-with-the-greatest-number-of-candies/
//直接找到candies的最大值, 判断candies每项 加上 extraCandies 后是否大于或等于 这个最大值
/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let max = Math.max(...candies)
    return candies.map(item => {
        return item + extraCandies >= max
    })
};

//二叉树，lc没看见，只不过是太火了，写一下练练手
//数据部分
var tree = {
    value: '-',
    left: {
        value: '+',
        left: {
            value: 'a'
        },
        right: {
            value: '*',
            left: {
                value: 'b'
            },
            right: {
                value: '-',
                left: {
                    value: 'c'
                },
                right: {
                    value: 'd'
                }
            }
        }
    },
    right: {
        value: '/',
        left: {
            value: 'e'
        },
        right: {
            value: 'd'
        }
    }
}

//前序遍历
//递归
function preOrder(treeNode) {
    if (treeNode) {
        console.log(treeNode.value); // 打印出来代表访问这个节点
        preOrder(treeNode.left);
        preOrder(treeNode.right);
    }
}
//非递归
function preOrder(treeNode) {
    if (treeNode) {
        var stack = [treeNode]; //将二叉树压入栈
        while (stack.length !== 0) {
            treeNode = stack.pop(); // 取栈顶
            document.getElementById('text').appendChild(document.createTextNode(treeNode.value)); // 访问节点
            if (treeNode.right) stack.push(treeNode.right); // 把右子树入栈
            if (treeNode.left) stack.push(treeNode.left); // 把左子树入栈
        }
    }
}

//中序遍历
//递归
function InOrder(treeNode) {
    if (treeNode) {
        InOrder(treeNode.left);
        document.getElementById('text').appendChild(document.createTextNode(treeNode.value));
        InOrder(treeNode.right);
    }
}
//非递归
function InOrder(node) {
    if (node) {
        var stack = []; // 建空栈
        //如果栈不为空或结点不为空，则循环遍历
        while (stack.length !== 0 || node) {
            if (node) { //如果结点不为空
                stack.push(node); //将结点压入栈
                node = node.left; //将左子树作为当前结点
            } else { //左子树为空，即没有左子树的情况
                node = stack.pop(); //将结点取出来
                document.getElementById('text').appendChild(document.createTextNode(node.value));
                node = node.right; //将右结点作为当前结点
            }
        }
    }
}

//后序遍历
//递归
function postOrder(node) {
    if (node) { //判断二叉树是否为空
        postOrder(node.left); //递归遍历左子树
        postOrder(node.right); //递归遍历右子树
        document.getElementById('text').appendChild(document.createTextNode(node.value));
    }
}
//非递归
function postOrder(node) {
    if (node) { //判断二叉树是否为空
        var stack = [node]; //将二叉树压入栈
        var tmp = null; //定义缓存变量
        while (stack.length !== 0) { //如果栈不为空，则循环遍历
            tmp = stack[stack.length - 1]; //将栈顶的值保存在tmp中
            if (tmp.left && node !== tmp.left && node !== tmp.right) { //如果存在左子树,node !== tmp.left && node !== tmp.righ 是为了避免重复将左右子树入栈
                stack.push(tmp.left); //将左子树结点压入栈
            } else if (tmp.right && node !== tmp.right) { //如果结点存在右子树
                stack.push(tmp.right); //将右子树压入栈中
            } else {
                document.getElementById('text').appendChild(document.createTextNode(stack.pop().value));
                node = tmp;
            }
        }
    }
}

//按层遍历
function breadthTraversal(node) {
    if (node) { //判断二叉树是否为空
        var que = [node]; //将二叉树放入队列
        while (que.length !== 0) { //判断队列是否为空
            node = que.shift(); //从队列中取出一个结点
            document.getElementById('text').appendChild(document.createTextNode(node.value)); //将取出结点的值保存到数组
            if (node.left) que.push(node.left); //如果存在左子树，将左子树放入队列
            if (node.right) que.push(node.right); //如果存在右子树，将右子树放入队列
        }
    }
}

//二叉树求层深
//很典型的一道题，大一刷过
// 3
// / \
// 9  20
// /  \
// 15   7
//树
const tree = {
        value: 3,
        left: {
            value: 9
        },
        right: {
            value: 20,
            left: { value: 15 },
            right: { value: 9 }
        }
    }
    //递归算法
    //先拿到左子树最深层，再拿到右子树最深层，取他们最大值就是树的深度。
var maxDepth = function(root) {
    if (!root) {
        return 0;
    }
    const leftDeep = maxDepth(root.left) + 1;
    const rightDeep = maxDepth(root.right) + 1;
    return Math.max(leftDeep, rightDeep);
};
/*
maxDepth(root) = maxDepth(root.left) + 1  = 2
maxDepth(root.left) = maxDepth(root.left.left) + 1 = 1
maxDepth(root.left.left) = 0;
  
maxDepth(root) = maxDepth(root.right) + 1 = 3
maxDepth(root.right) = maxDepth(root.right.right) + 1 = 2
maxDepth(root.right.right) = maxDepth(root.right.right.right) + 1 = 1
maxDepth(root.right.right.right) = 0
*/

//二叉树求所有路径
//   3
//   / \
//  9  20
//    /  \
//   15   7

// 返回：['3->9', '3->20->15', '3->20->7']
//递归
var binaryTreePaths = function(root) {
    if (!root) return [];
    const res = [];

    function dfs(curNode, curPath) {
        if (!curNode.left && !curNode.right) {
            res.push(curPath);
        }
        if (curNode.left) {
            dfs(curNode.left, `${curPath}->${curNode.left.value}`)
        }
        if (curNode.right) {
            dfs(curNode.right, `${curPath}->${curNode.right.value}`)
        }
    }
    dfs(root, `${root.value}`);
    return res;
};

//0167
//有序直接二分搜索
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let len = numbers.length,
        left = 0,
        right = len - 1,
        mid = 0
    for (let i = 0; i < len; ++i) {
        left = i + 1
        while (left <= right) {
            mid = parseInt((right - left) / 2) + left
            if (numbers[mid] == target - numbers[i]) {
                return [i + 1, mid + 1]
            } else if (numbers[mid] > target - numbers[i]) {
                right = mid - 1
            } else {
                left = mid + 1
            }
        }
    }
    return [-1, -1]
}

//1512
//一个暴力，一个哈希；这里用暴力
/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    if (!nums.length) return 0
    let count = 0
    let j = 0
    for (let i = 0; i < nums.length; j++) {
        if (j === nums.length) i++, j = 0
        i < j && nums[j] === nums[i] && count++
    }
    return count
};

//
var quickSort = function(arr) {
    if (arr.length <= 1) { return arr; }
    var pivot = arr.splice(0, 1)[0];
    var left = [];
    var right = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return quickSort(left).concat([pivot], quickSort(right));
};

function fn() {
    var x = true;
    return function() {
        console.log(x ? 1 : 2);
        x = !x;
    }
}
var a = fn();


//lc 009
//https://leetcode-cn.com/problems/palindrome-number/
var isPalindrome = function(x) {
    return x.toString() == x.toString().split("").reverse().join("");
}

//lc 013
//https://leetcode-cn.com/problems/roman-to-integer/
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const map = {
        I: 1,
        IV: 4,
        V: 5,
        IX: 9,
        X: 10,
        XL: 40,
        L: 50,
        XC: 90,
        C: 100,
        CD: 400,
        D: 500,
        CM: 900,
        M: 1000
    };
    let ans = 0;
    for (let i = 0; i < s.length;) {
        if (i + 1 < s.length && map[s.substring(i, i + 2)]) {
            ans += map[s.substring(i, i + 2)];
            i += 2;
        } else {
            ans += map[s.substring(i, i + 1)];
            i++;
        }
    }
    return ans;
};

//手写new
function _new(fn, ...arg) {
    const obj = Object.create(fn.prototype);
    const ret = fn.apply(obj, arg);
    return ret instanceof Object ? ret : boj;
}

//数组扁平化
//已知如下数组：
//var arr = [ [1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14] ] ] ], 10];
//编写一个程序将数组扁平化去并除其中重复部分数据，最终得到一个升序且不重复的数组
function f(arr) {
    return Array.from(new Set(arr.flat(Infinity))).sort((a, b) => { return a - b });
}


//lc 100
//https://leetcode-cn.com/problems/same-tree/submissions/
//深搜判断每一个节点是不是相等
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    if (p == null && q == null) {
        return true;
    } else if (p == null || q == null) {
        return false;
    } else if (p.val != q.val) {
        return false;
    } else {
        return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
    }
};


//lc 026
//https://leetcode-cn.com/problems/shu-de-zi-jie-gou-lcof/
/**
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 */
var isSubStructure = function(A, B) {
    // 约定空树不是任意一个树的子结构
    if (!A || !B) {
        return false;
    }
    return isSameTree(A, B) || isSubStructure(A.left, B) || isSubStructure(A.right, B)
};

/**
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 */
var isSameTree = function(A, B) {
    // B子树是空子树 ok
    if (!B) {
        return true;
    }
    // A子树是空子树 且 B 非空，不 ok
    if (!A) {
        return false;
    }
    // 当前节点的值不相等，不 ok
    if (A.val !== B.val) {
        return false;
    }
    // 递归考察左子树、右子树
    return isSameTree(A.left, B.left) && isSameTree(A.right, B.right);
};

//lc 053
//https://leetcode-cn.com/problems/maximum-subarray/
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let ans = 0,
        maxa = nums[0];
    nums.forEach((x) => {
        ans = Math.max(x, ans + x);
        maxa = Math.max(ans, maxa);
    });
    return maxa;
};


//lc 111
//https://leetcode-cn.com/problems/minimum-depth-of-binary-tree/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
    if (root == null) {
        return 0;
    }
    if (root.left == null && root.right == null) {
        return 1;
    }
    let ans = Infinity;
    if (root.left != null) {
        ans = Math.min(ans, minDepth(root.left));
    }
    if (root.right != null) {
        ans = Math.min(ans, minDepth(root.right));
    }
    return ans + 1;
};

//lc 557
//https://leetcode-cn.com/problems/reverse-words-in-a-string-iii/
//直接暴力翻转
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    const len = s.length;
    const ret = [];
    let i = 0;
    while (i < len) {
        let start = i;
        while (i < len && s.charAt(i) != ' ') {
            i++;
        }
        for (let p = start; p < i; p++) {
            ret.push(s.charAt(start + i - 1 - p));
        }
        while (i < len && s.charAt(i) == ' ') {
            i++;
            ret.push(' ');
        }
    }
    return ret.join('');
};

//lc 14
//https://leetcode-cn.com/problems/longest-common-prefix/
//暴力遍历
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length == 0)
        return "";
    let ans = strs[0];
    for (let i = 1; i < strs.length; i++) {
        let j = 0;
        for (; j < ans.length && j < strs[i].length; j++) {
            if (ans[j] != strs[i][j])
                break;
        }
        ans = ans.substr(0, j);
        if (ans === "")
            return ans;
    }
    return ans;
};

//lc 20
//https://leetcode-cn.com/problems/valid-parentheses/
///基础栈思想
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    const mapper = {
        "{": "}",
        "[": "]",
        "(": ")",
    };

    for (let i in s) {
        const v = s[i];
        if (["(", "[", "{"].indexOf(v) > -1) {
            stack.push(v);
        } else {
            const peak = stack.pop();
            if (v !== mapper[peak]) {
                return false;
            }
        }
    }

    if (stack.length > 0) return false;

    return true;
};

//lc 21
//https://leetcode-cn.com/problems/merge-two-sorted-lists/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    if (l1 === null) {
        return l2;
    } else if (l2 === null) {
        return l1;
    } else if (l1.val < l2.val) {
        l1.next = mergeTwoLists(l1.next, l2);
        return l1;
    } else {
        l2.next = mergeTwoLists(l1, l2.next);
        return l2;
    }
};

//lc 841
//https://leetcode-cn.com/problems/keys-and-rooms/submissions/
/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
const canVisitAllRooms = (rooms) => {
    const visited = new Set();

    const dfs = (curRoom) => {
        visited.add(curRoom);
        const nextRooms = rooms[curRoom];
        for (let i = 0; i < nextRooms.length; i++) {
            const next = nextRooms[i];
            if (!visited.has(next)) {
                dfs(next);
            }
        }
    };

    dfs(0);

    if (visited.size == rooms.length) {
        return true;
    } else {
        return false;
    }
};

//lc 26
//https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array/
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if (nums.length == 0) return 0;
    let i = 0;
    for (let j = 1; j < nums.length; j++) {
        if (nums[j] != nums[i]) {
            i++;
            nums[i] = nums[j];
        }
    }
    return i + 1;
};

//lc 486
//https://leetcode-cn.com/problems/predict-the-winner/
/**
 * @param {number[]} nums
 * @return {boolean}
 */
//dfs
const PredictTheWinner = (nums) => {
    const helper = (i, j) => { // i，j是两端的索引
        if (i == j) { // 递归的出口，此时只有一个选择，并且没有剩余的可选
            return nums[i];
        }
        const pickI = nums[i] - helper(i + 1, j); // 选择左端
        const pickJ = nums[j] - helper(i, j - 1); // 选择右端
        return Math.max(pickI, pickJ); // 取较大者
    };
    return helper(0, nums.length - 1) >= 0;
};
//dp
const PredictTheWinner = (nums) => {
    const len = nums.length;

    const dp = new Array(len);
    for (let i = 0; i < len; i++) {
        dp[i] = new Array(len);
    }
    // base case
    for (let i = 0; i < len; i++) {
        dp[i][i] = nums[i];
    }
    // iteration
    for (let i = len - 2; i >= 0; i--) {
        for (let j = i + 1; j < len; j++) {
            const pickI = nums[i] - dp[i + 1][j];
            const pickJ = nums[j] - dp[i][j - 1];
            dp[i][j] = Math.max(pickI, pickJ);
        }
    }

    return dp[0][len - 1] >= 0;
};

//lc 27
//https://leetcode-cn.com/problems/remove-element/
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let i = 0;
    for (let k = 0; k < nums.length; k++) {
        if (nums[k] != val) {
            nums[i] = nums[k];
            i++;
        }
    }
    return i;
};

//lc 28
//https://leetcode-cn.com/problems/implement-strstr/
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if (needle == "") return 0;
    for (let i = 0; i <= haystack.length - needle.length; i++) {
        if (haystack[i] == needle[0]) {
            for (let j = 0; j < needle.length; j++) {
                if (haystack[i + j] != needle[j]) break;
                if (j == needle.length - 1) return i;
            }
        }
    }
    return -1;
};
//内置函数
var strStr = function(haystack, needle) {
    return haystack.indexOf(needle)
};

//lc 35
//https://leetcode-cn.com/problems/search-insert-position/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    const n = nums.length;
    let left = 0,
        right = n - 1,
        ans = n;
    while (left <= right) {
        let mid = ((right - left) >> 1) + left;
        if (target <= nums[mid]) {
            ans = mid;
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return ans;
};

//lc 38
//https://leetcode-cn.com/problems/count-and-say/
//正则，不会，抄的
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    let prev = '1'
    for (let i = 1; i < n; i++) {
        prev = prev.replace(/(\d)\1*/g, item => `${item.length}${item[0]}`)
    }
    return prev
};

//lc 58
//https://leetcode-cn.com/problems/length-of-last-word/
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let end = s.length - 1;
    while (end >= 0 && s[end] == ' ') end--;
    if (end < 0) return 0;
    let start = end;
    while (start >= 0 && s[start] != ' ') start--;
    return end - start;
};

//lc 66
//https://leetcode-cn.com/problems/plus-one/
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let i = digits.length - 1;
    digits[i]++;
    while (i > 0 && digits[i] == 10) {
        digits[i - 1]++;
        digits[i] = 0;
        i--;
    }
    if (digits[0] == 10) {
        digits[0] = 0;
        digits.splice(0, 0, 1);
    }
    return digits;
};

//lc 67
//https://leetcode-cn.com/problems/add-binary/
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let ans = "";
    let ca = 0;
    for (let i = a.length - 1, j = b.length - 1; i >= 0 || j >= 0; i--, j--) {
        let sum = ca;
        sum += i >= 0 ? parseInt(a[i]) : 0;
        sum += j >= 0 ? parseInt(b[j]) : 0;
        ans += sum % 2;
        ca = Math.floor(sum / 2);
    }
    ans += ca == 1 ? ca : "";
    return ans.split('').reverse().join('');
};

//lc 69
//https://leetcode-cn.com/problems/sqrtx/
//只能2分，暴力T
/**
 * @param {number} x
 * @return {number}
 */
const mySqrt = (x) => {
    if (x < 2) return x;
    let left = 1;
    let right = x >>> 1; // 除以2并取整，缩小一下遍历的范围
    while (left + 1 < right) { // 退出循环时，它们相邻
        let mid = (left + right) >>> 1;
        if (mid == x / mid) {
            return mid;
        } else if (mid < x / mid) {
            left = mid;
        } else {
            right = mid;
        }
    }
    return right > x / right ? left : right;
};

//lc 51
//https://leetcode-cn.com/problems/n-queens/
//N皇后标准问题，不知道为什么归到困难里面了，可能绘图难？
const solveNQueens = (n) => {
    const board = new Array(n);
    for (let i = 0; i < n; i++) {
        board[i] = new Array(n).fill('.');
    }

    const cols = new Set(); // 列集，记录出现过皇后的列
    const diag1 = new Set(); // 正对角线集
    const diag2 = new Set(); // 反对角线集
    const res = [];

    const helper = (row) => {
        if (row == n) {
            const stringsBoard = board.slice();
            for (let i = 0; i < n; i++) {
                stringsBoard[i] = stringsBoard[i].join('');
            }
            res.push(stringsBoard);
            return;
        }
        for (let col = 0; col < n; col++) {
            if (!cols.has(col) && !diag1.has(row + col) && !diag2.has(row - col)) {
                board[row][col] = 'Q';
                cols.add(col);
                diag1.add(row + col);
                diag2.add(row - col);
                helper(row + 1);
                board[row][col] = '.';
                cols.delete(col);
                diag1.delete(row + col);
                diag2.delete(row - col);
            }
        }
    };
    helper(0);
    return res;
};

//lc 257
//https://leetcode-cn.com/problems/binary-tree-paths/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    const paths = [];
    const dfs = (root, path) => {
        if (root) {
            path += root.val.toString();
            if (root.left == null && root.right == null) {
                paths.push(path);
            } else {
                path += "->";
                dfs(root.left, path);
                dfs(root.right, path);
            }
        }
    }
    dfs(root, "");
    return paths;
};

//lc 322
//https://leetcode-cn.com/problems/coin-change/
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    let dp = new Array(amount + 1).fill(Infinity);
    dp[0] = 0;
    for (let i = 1; i <= amount; i++) {
        for (let coin of coins) {
            if (i - coin >= 0) {
                dp[i] = Math.min(dp[i], dp[i - coin] + 1);
            }
        }
    }
    return dp[amount] === Infinity ? -1 : dp[amount];
};

//lc 70
//https://leetcode-cn.com/problems/climbing-stairs/
//三种，傻瓜dp，矩阵快速幂，数学公式
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if (n < 4) return n;
    let x = 2,
        y = 3,
        z;
    for (let i = 4; i <= n; i++) {
        z = x + y;
        x = y;
        y = z;
    }
    return z;
};

var climbStairs = function(n) {
    const sqrt_5 = Math.sqrt(5);
    const fib_n = Math.pow((1 + sqrt_5) / 2, n + 1) - Math.pow((1 - sqrt_5) / 2, n + 1);
    return Math.round(fib_n / sqrt_5);
};

//lc 60
//https://leetcode-cn.com/problems/permutation-sequence/solution/
/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {
    const nums = [];
    let fac = 1;
    for (let i = 1; i <= n; i++) {
        nums.push(i);
        fac = fac * i;
    }
    k--;
    let ans = '';
    while (nums.length > 0) {
        fac = fac / nums.length;
        const index = k / fac | 0;
        ans += nums[index];
        nums.splice(index, 1);
        k = k % fac;
    }
    return ans;
};

//lc 83
//https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    let ans = head;
    while (ans != null && ans.next != null) {
        if (ans.val == ans.next.val) ans.next = ans.next.next;
        else ans = ans.next;
    }
    return head;
};

//lc 88
//https://leetcode-cn.com/problems/merge-sorted-array/
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let len1 = m - 1;
    let len2 = n - 1;
    let len = m + n - 1;
    while (len1 >= 0 && len2 >= 0) {
        // 注意--符号在后面，表示先进行计算再减1，这种缩写缩短了代码
        nums1[len--] = nums1[len1] > nums2[len2] ? nums1[len1--] : nums2[len2--];
    }

    function arrayCopy(src, srcIndex, dest, destIndex, length) {
        dest.splice(destIndex, length, ...src.slice(srcIndex, srcIndex + length));
    }
    // 表示将nums2数组从下标0位置开始，拷贝到nums1数组中，从下标0位置开始，长度为len2+1
    arrayCopy(nums2, 0, nums1, 0, len2 + 1);
};

//lc 107
//https://leetcode-cn.com/problems/binary-tree-level-order-traversal-ii/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
const levelOrderBottom = (root) => {
    if (root == null) {
        return [];
    }
    const queue = [];
    queue.push(root);
    const res = [];

    while (queue.length) {
        const subRes = [];
        const levelSize = queue.length;
        for (let i = 0; i < levelSize; i++) {
            const cur = queue.shift();
            subRes.push(cur.val);
            if (cur.left) {
                queue.push(cur.left);
            }
            if (cur.right) {
                queue.push(cur.right);
            }
        }
        res.unshift(subRes);
    }
    return res;
}

//lc 347
//https://leetcode-cn.com/problems/top-k-frequent-elements/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const topKFrequent = (nums, k) => {
    const freq = {}; // 存储数字出现的频次
    const uniqueNums = []; // 不重复的数字
    for (const num of nums) {
        if (freq[num]) { // 出现过，频次+1
            freq[num]++;
        } else { // 没出现过，频次为1
            freq[num] = 1;
            uniqueNums.push(num);
        }
    }

    const heap = []; // 代表heap的数组

    const swap = (i, j) => { // 交换heap数组的元素
        const t = heap[i];
        heap[i] = heap[j];
        heap[j] = t;
    };

    const bubbleUp = (index) => {
        while (index > 0) {
            const parent = (index - 1) >>> 1; // 找到父节点在heap数组中的位置
            if (freq[heap[parent]] > freq[heap[index]]) { // 如果父节点数字对应的频率要高于插入的数字的频次
                swap(parent, index); // 交换它们的位置
                index = parent; // index更新
            } else { // 满足最小堆的特点，break
                break;
            }
        }
    };

    const bubbleDown = (index) => { // 做“下沉”
        while (2 * index + 1 < heap.length) { // 
            let child = 2 * index + 1;
            if (child + 1 < heap.length && freq[heap[child + 1]] < freq[heap[child]]) { // 左右孩子中取较小的去比较
                child++;
            }
            if (freq[heap[index]] > freq[heap[child]]) {
                swap(index, child); // 交换
                index = child; // 更新 index
            } else { // 如果满足最小堆的属性，break
                break;
            }
        }
    };

    for (const num of uniqueNums) {
        if (heap.length < k) { // heap数组的长度还不够k
            heap.push(num); // 推入heap数组
            bubbleUp(heap.length - 1); // 执行上浮，频率小的上浮上去
        } else if (freq[num] > freq[heap[0]]) { // 如果当前数字的频次比堆顶数字的频率要大
            heap[0] = num; // 堆顶的数字要更换
            bubbleDown(0); // 然后要做下沉，下沉到合适的位置
        }
    }
    return heap.sort((a, b) => { // 最终它前面是频次少的，最后返回是要逆序回来
        return freq[b] - freq[a];
    });
};

//lc offer 40
//https://leetcode-cn.com/problems/zui-xiao-de-kge-shu-lcof/
/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
//1
var getLeastNumbers = function(arr, k) {
    return arr.sort((a, b) => a - b).slice(0, k);
};


var getLeastNumbers = function(arr, k) {
    let len = arr.length
    if (!len || !k) return []
    let heap = new Heap()
        // 建立最小堆，O(N) 复杂度
    heap.init(arr)
    let res = []
    while (k) {
        // 依次从堆顶弹出最小元素，O(logN) 复杂度
        res.push(heap.delete())
        k--
    }
    return res
}

function Heap() {
    this.heap = [-Infinity]
}
Heap.prototype.init = function(arr) {
    this.heap = [-Infinity]
    this.heap.push(...arr)
    let size = arr.length
        // 从最后一个元素的父节点开始实现最小堆，类似删除操作中将最后一个元素放在堆顶进行调整。
    for (let pos = parseInt(size / 2); pos > 0; pos--) {
        let tmp = this.heap[pos]
        let parent, child
        for (parent = pos; parent * 2 <= size; parent = child) {
            child = parent * 2
            if (child + 1 <= size && this.heap[child + 1] < this.heap[child]) child++
                if (tmp < this.heap[child]) break
                else this.heap[parent] = this.heap[child]
        }
        this.heap[parent] = tmp
    }
}
Heap.prototype.delete = function() {
    let size = this.heap.length - 1
    let res = this.heap[1]
        // 拿到最后一个元素
    let tmp = this.heap[size]
    this.heap.length--
        size--
        // 将最后一个元素放在堆顶，并调整最小堆
        let parent, child
    for (parent = 1; parent * 2 <= size; parent = child) {
        child = parent * 2
        if (child + 1 <= size && this.heap[child + 1] < this.heap[child]) child++
            if (tmp < this.heap[child]) break
            else this.heap[parent] = this.heap[child]
    }
    this.heap[parent] = tmp
    return res
}


// ac地址：https://leetcode-cn.com/problems/zui-xiao-de-kge-shu-lcof/
// 原文地址：https://xxoo521.com/2020-02-21-least-nums/

/**
 *
 * @param {number[]} arr
 * @param {number} start
 * @param {number} end
 * @return {number}
 */
function partition(arr, start, end) {
    const k = arr[start];
    let left = start + 1,
        right = end;
    while (1) {
        while (left <= end && arr[left] <= k) ++left;
        while (right >= start + 1 && arr[right] >= k) --right;

        if (left >= right) {
            break;
        }

        [arr[left], arr[right]] = [arr[right], arr[left]];
        ++left;
        --right;
    }
    [arr[right], arr[start]] = [arr[start], arr[right]];
    return right;
}


function partition(arr, start, end) {
    const k = arr[start];
    let left = start + 1,
        right = end;
    while (1) {
        while (left <= end && arr[left] <= k) ++left;
        while (right >= start + 1 && arr[right] >= k) --right;

        if (left >= right) {
            break;
        }

        [arr[left], arr[right]] = [arr[right], arr[left]];
        ++left;
        --right;
    }
    [arr[right], arr[start]] = [arr[start], arr[right]];
    return right;
}

var getLeastNumbers = function(arr, k) {
    const length = arr.length;
    if (k >= length) return arr;
    let left = 0,
        right = length - 1;
    let index = partition(arr, left, right);
    while (index !== k) {
        if (index < k) {
            left = index + 1;
            index = partition(arr, left, right);
        } else if (index > k) {
            right = index - 1;
            index = partition(arr, left, right);
        }
    }

    return arr.slice(0, k);
};

//lc 77
//https://leetcode-cn.com/problems/combinations/
//py 3
//我不会，就是看太神奇了就给抄下来了
/*
class Solution:
    def combine(self, n: int, k: int) -> List[List[int]]:
        return list(itertools.combinations(range(1,n+1),k))
*/
var combine = function(n, k) {
    const temp = [];
    const ans = [];
    // 初始化
    // 将 temp 中 [0, k - 1] 每个位置 i 设置为 i + 1，即 [0, k - 1] 存 [1, k]
    // 末尾加一位 n + 1 作为哨兵
    for (let i = 1; i <= k; ++i) {
        temp.push(i);
    }
    temp.push(n + 1);

    let j = 0;
    while (j < k) {
        ans.push(temp.slice(0, k));
        j = 0;
        // 寻找第一个 temp[j] + 1 != temp[j + 1] 的位置 t
        // 我们需要把 [0, t - 1] 区间内的每个位置重置成 [1, t]
        while (j < k && temp[j] + 1 == temp[j + 1]) {
            temp[j] = j + 1;
            ++j;
        }
        // j 是第一个 temp[j] + 1 != temp[j + 1] 的位置
        ++temp[j];
    }
    return ans;
};

//lc 39
//https://leetcode-cn.com/problems/combination-sum/
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const ans = [];
    const dfs = (target, combine, idx) => {
        if (idx === candidates.length) return;
        if (target === 0) {
            ans.push(combine);
            return;
        }
        dfs(target, combine, idx + 1);
        if (target - candidates[idx] >= 0) {
            dfs(target - candidates[idx], [...combine, candidates[idx]], idx);
        }
    }
    dfs(target, [], 0);
    return ans;
};

//今天就做一道每日一题，今天最右笔试
//lc 40
//https://leetcode-cn.com/problems/combination-sum-ii/
const combinationSum2 = (candidates, target) => {
    candidates.sort(); // 排序
    const res = [];

    const dfs = (start, temp, sum) => { // start是索引 当前选择范围的第一个
        if (sum >= target) { // 爆掉了，不用继续选了
            if (sum == target) { // 满足条件，加入解集
                res.push(temp.slice()); // temp是地址引用，后续还要用，所以拷贝一份
            }
            return; // 结束当前递归
        }
        for (let i = start; i < candidates.length; i++) { // 枚举出选择
            if (candidates[i - 1] == candidates[i] && i - 1 >= start) { // 当前选项和隔壁选项一样，跳过
                continue;
            }
            temp.push(candidates[i]); // 作出选择
            dfs(i + 1, temp, sum + candidates[i]); // 递归，向下选择，并更新sum
            temp.pop(); // 撤销选择，
        }
    };

    dfs(0, [], 0);
    return res;
};

//lc 216
//https://leetcode-cn.com/problems/combination-sum-iii/
/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
    const temp = [];
    const res = [];
    const dfs = (cur, n, k, sum, res) => {
        if (temp.length + (n - cur + 1) < k || temp.length > k) {
            return;
        }
        if (temp.length === k && temp.reduce((previous, value) => previous + value, 0) === sum) {
            res.push(temp.slice());
            return;
        }
        temp.push(cur);
        dfs(cur + 1, n, k, sum, res);
        temp.pop();
        dfs(cur + 1, n, k, sum, res);
    }

    dfs(1, 9, k, n, res);
    return res;
};

//lc 637
//https://leetcode-cn.com/problems/average-of-levels-in-binary-tree/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var averageOfLevels = function(root) {
    const res = [];
    const queue = [];
    queue.push(root);
    while (queue.length) {
        const l = queue.length;
        let ln = 0;
        for (let i = 0; i < l; i++) {
            let rootson = queue.shift();
            ln += rootson.val;
            if (rootson.left) {
                queue.push(rootson.left);
            }
            if (rootson.right) {
                queue.push(rootson.right);
            }
        }
        res.push(ln / l);
    }
    return res;
};

//lc 94
//https://leetcode-cn.com/problems/binary-tree-inorder-traversal/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
//常规
var inorderTraversal = function(root) {
    const res = [];
    const ino = (root) => {
        if (!root) return;
        ino(root.left);
        res.push(root.val);
        ino(root.right);
    }
    ino(root);
    return res;
};
//显式栈
var inorderTraversal = function(root) {
    const res = [];
    const sta = [];
    while (root || sta.length) {
        while (root) {
            sta.push(root);
            root = root.left;
        }
        root = sta.pop();
        res.push(root.val);
        root = root.right;
    }
    return res;
}

//lc 37
//https://leetcode-cn.com/problems/sudoku-solver/
//第一道困难题
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
const solveSudoku = (board) => {
    const rows = new Array(9); // 存放每一行对应的可选数集
    const cols = new Array(9); // 存放每一列对应的可选数集
    const blocks = new Array(9); // 存放每一框对应的可选数集
    const options = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
    for (let i = 0; i < 9; i++) { // 集合的初始化
        rows[i] = new Set(options);
        cols[i] = new Set(options);
        blocks[i] = new Set(options);
    }

    const getBlockIndex = (i, j) => { // 根据坐标，获取所在的小框的索引
        return (i / 3 | 0) * 3 + j / 3 | 0; // |0 是向下取整
    };

    for (let i = 0; i < 9; i++) { // 根据现有的已填的数字，更新set们
        for (let j = 0; j < 9; j++) {
            if (board[i][j] != ".") {
                rows[i].delete(board[i][j]); // 当前行出现过这个数字，这个数字就不能在这一行出现，删除该选项
                cols[j].delete(board[i][j]);
                blocks[getBlockIndex(i, j)].delete(board[i][j]);
            }
        }
    }

    const fill = (i, j) => {
        if (j == 9) { // 列越界，就填下一行
            i++;
            j = 0;
            if (i == 9) return true; // 都填完了 返回true
        }
        if (board[i][j] != ".") return fill(i, j + 1); // 如果不是空白格，递归填下一格

        const blockIndex = getBlockIndex(i, j); // 获取所在小框的索引

        for (let num = 1; num <= 9; num++) { // 枚举出所有选择：1-9
            const s = String(num);
            // 当前选择必须在三个set中都存在，如果有一个不存在，就说明发生了冲突，跳过该选择
            if (!rows[i].has(s) || !cols[j].has(s) || !blocks[blockIndex].has(s)) continue;

            board[i][j] = s; // 作出选择
            rows[i].delete(s); // 更新set们，删掉这个可填选项
            cols[j].delete(s);
            blocks[blockIndex].delete(s);

            if (fill(i, j + 1)) return true; // 如果基于当前选择，填下一个，最后可解出数独，直接返回真
            // 基于当前选择，填下一个，怎么填都不行，回溯，恢复为空白格
            board[i][j] = ".";
            rows[i].add(s); // set们，将之前删掉的当前数字，加回来
            cols[j].add(s);
            blocks[blockIndex].add(s);
        }
        return false; // 尝试了1-9，每个都往下递归，都不能做完，返回false
    };

    fill(0, 0); // 填格子的起点
    return board;
};

//lc 226
//https://leetcode-cn.com/problems/invert-binary-tree/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if (root === null) return null;
    const left = invertTree(root.left);
    const right = invertTree(root.right);
    root.left = right;
    root.right = left;
    return root;
};