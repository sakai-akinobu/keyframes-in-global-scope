keyframes-in-global-scope
---

**Input code**

```scss
:global {
  .foo {
    animation: bar;
  }

  @keyframes bar {
    to {
      transform: rotate(1turn);
    }
  }
}
```

**Output code**

```css
.foo {
  animation: bar; }

@keyframes _3JiVK9uv-J1IL7-vVXySmE {
  to {
    transform: rotate(1turn); } }
```
