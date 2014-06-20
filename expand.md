---
layout: page
title: artoo.autoExpand
id: expand
---

# {{ page.title }}

---

**artoo.js**' autoExpand methods let you expand web pages' contents programmatically.

This is useful in pages that require user input like clicking on buttons triggering ajax requests or in pages featuring an infinite scroll.

---

* [artoo.autoExpand](#expand)
* [artoo.autoScroll](#scroll)

---

<h2 id="expand">artoo.autoExpand</h2>
Programmatically expand page's content by performing some action and waiting for their results.

```js
artoo.autoExpand(params, [callback]);
```

*Examples*

```js
// Basic
artoo.autoExpand({
  elements: '.posts',
  expand: '.expand-button',
  limit: 2,
  done: function() {
    console.log('Done expanding posts twice!');
  }
});

// Complex
artoo.autoExpand({
  expand: function($) {
    $('.expand-button').simulate('click');
  },
  canExpand: '.expand-button',
  isExpanding: function($) {
    return $('.post-loading-gif').is(':visible');
  },
  throttle: 5000,
  done: function() {
    console.log('Done expanding every posts!');
  }
});
```

*Arguments*

* **params** *object* : an object of parameters.
  * **expand** *function | css selector* : a required function programmatically performing the action needed to expand the desired content. You can alternatively pass a css selector as the expand parameter and **artoo** will assume he has to click the selected elements.
  * **elements** *css selector* : selector on the watched elements. For instance, if you want to expand posts and posts have the class `.posts`, the `autoExpand` method will wait until more of those elements exist to assert the expansion has worked.
  * **canExpand** *?function | ?css selector* : a function returning a boolean and asserting whether content can or cannot be expanded. Alternatively, a selector meaning true if at least one of the elements is present.
  * **isExpanding** *?function | ?css selector* : a function returning a boolean and asserting whether content is currently expanding. This typically tracks the visibility or existence of a loading animation or gif. Alternatively a selector meaning true if at least one of the elements is present.
  * **limit** *?integer* : maximum number of expansions.
  * **throttle** *?integer* : time to wait between each expansion in milliseconds.
  * **timeout** *?integer* : time in milliseconds before triggering a timeout.
  * **done** *?function* : same as `callback` argument.
* **callback** *?function* : a function to be fired when expansion is eventually finished.


---

<h2 id="scroll">artoo.autoScroll</h2>
The `autoScroll` method is an `autoExpand` variant that does not take an expand function as it assumes this one has only to scroll the page to its bottom.

You remain free to pass any parameters to the `autoScroll` method the same way you would with the `autoExpand` one.

```js
artoo.autoScroll([params, callback]);
```

*Example*

```js
artoo.autoScroll({
  elements: '.posts',
  limit: 3,
  done: function() {
    console.log('Finished scrolling three times!');
  }
});
```