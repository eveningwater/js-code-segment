|  标题   | 标签  |
|  ----  | ----  |
| minN(返回数组中n个最小元素) | array,math(数组，数学) |

从提供的数组中返回 n 个最小元素。

* 使用 Array.prototype.sort() 结合扩展运算符 (...) 创建数组的浅表克隆并按升序对其进行排序。
* 使用 Array.prototype.slice() 获取指定数量的元素。
* 省略第二个参数 n 以获得单元素数组。
* 如果 n 大于或等于提供的数组长度，则返回原始数组（按升序排序）。

```js
const minN = (arr,n = 1) => [...arr].sort((a,b) => a - b).slice(0,n); 
```

> 调用方式:

```js
minN([1, 2, 3]); // [1]
minN([1, 2, 3], 2); // [1, 2]
```

> 应用场景