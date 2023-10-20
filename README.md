# Frontend Mentor - Loopstudios landing page solution

This is a solution to the [Loopstudios landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/loopstudios-landing-page-N88J5Onjw). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![](images/desktop-screenshot.png)
![](images/mobile-screenshot.png)

### Links

- [Solution URL](https://github.com/mishael-codes/loopstudios-landing-page-main)
- [Live site URL](https://mishael-codes.github.io/loopstudios-landing-page-main/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [Google fonts](https://fonts.google.com/)

### What I learned

I learned that I could change the styles of the children when you hover on their parent container. For example, 
```html
<section>
  <h2>Hello</h2>
  <p>World</p>
</section>
```

```css
section:hover p{
  color: blue;
}
```

In the above code, when section is hovered, the color of the `<p>` tag changes to blue without directly being hovered on.


## Author

- Website - [Mishael Enyi](https://mishaelenyi.netlify.app)
- Twitter - [@mishael_codes](https://www.twitter.com/mishael_codes)
- Instagram - [@mishael_codes](https://www.instagram.com/mishael_codes)
- Frontend Mentor - [@mishael-codes](https://www.frontendmentor.io/profile/mishael-codes)

## Acknowledgments

I was tied down on how to make the ```creation-name``` change after hovering on the image itself but with a few digging here and there, I found [Valeriia's](https://www.frontendmentor.io/profile/Magic1vy) code solution which gave me an idea of how to make that feature work.
