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