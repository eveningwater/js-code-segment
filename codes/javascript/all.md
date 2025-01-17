| 标题                                  | 标签                         |
| ------------------------------------- | ---------------------------- |
| all(返回一个元素集合是否符合给定条件) | array,beginner(数组，初学者) |

为一个元素集合检查传入的回调函数的条件中是否返回`true`。

- 使用`Array.prototype.every()`测试集合中的所有元素是否基于`fn`返回`true`。
- 如果不传入第二个参数，`fn`,则使用默认值`Boolean`构造函数。

> 代码如下:

```js
const all = (arr, fn = Boolean) => arr.every(fn);
```

ts代码如下:

<div class="code-editor" data-url="codes/javascript/ts/all.ts" data-language="typescript"></div>

> 调用方式:

```js
all([4, 2, 3], x => x > 1); // true
all([1, 2, 3]); // true
all([1, 2, 3], x => x < 2); //false
```


> 应用场景

以下是一个实战<a href="codes/javascript/html/all.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/all.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/all.html"></iframe>
