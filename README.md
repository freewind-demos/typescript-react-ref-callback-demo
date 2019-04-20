JavaScript React Ref Callback Demo
================================

在当前的React中，使用字符串形式的`ref`已经不再推荐使用，替代品是传入一个function，
以参数的形式拿到相应的component instance的值，保存起来供后续使用。

虽然React已经提供了`createRef`和`useRef`等来简化，但是使用ref callback有一个作用
是它们替代不了的：就是如这个Demo中所示，当我们需要在ref改变的时候做些事情，只能使用这种callback

```
npm install
npm run demo
```
