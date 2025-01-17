| 标题                | 标签                                 |
| ------------------- | ------------------------------------ |
| bifurcate(划分数组) | array,intermediate(数组，两者之间的) |

根据给定过滤器数组的结果将值分成两组。

- 使用 `Array.prototype.reduce()` 和 `Array.prototype.push()` 根据过滤器将元素添加到组中。
- 如果过滤器有任何元素的真值，则将其添加到第一组，否则将其添加到第二组。

> 代码如下:

```js
const bifurcate = (arr, filter) =>
  arr.reduce(
    (acc, val, i) => (acc[filter[i] ? 0 : 1].push(val), acc),
    [[], []]
  );
//或者 const bifurcate = (arr,filter) => arr.reduce((acc,val,i) => (acc[Number(!filter[i])].push(val),acc),[[],[]]);
```

ts 代码如下:

<div class="code-editor" data-url="codes/javascript/ts/bifurcate.ts" data-language="typescript"></div>

> 调用方式:

```js
bifurcate(['beep', 'boop', 'foo', 'bar'], [true, true, false, true]);
// [ ['beep', 'boop', 'bar'], ['foo'] ]
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/bifurcate.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/bifurcate.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/bifurcate.html"></iframe>
