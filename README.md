# vCard - Personal portfolio

![GitHub repo size](https://img.shields.io/github/repo-size/codewithsadee/vcard-personal-portfolio)
![GitHub stars](https://img.shields.io/github/stars/codewithsadee/vcard-personal-portfolio?style=social)
![GitHub forks](https://img.shields.io/github/forks/codewithsadee/vcard-personal-portfolio?style=social)
[![Twitter Follow](https://img.shields.io/twitter/follow/codewithsadee_?style=social)](https://twitter.com/intent/follow?screen_name=codewithsadee_)
[![YouTube Video Views](https://img.shields.io/youtube/views/SoxmIlgf2zM?style=social)](https://youtu.be/SoxmIlgf2zM)

vCard is a fully responsive personal portfolio website, responsive for all devices, built using HTML, CSS, and JavaScript.

## Demo

![vCard Desktop Demo](./website-demo-image/desktop.png "Desktop Demo")
![vCard Mobile Demo](./website-demo-image/mobile.png "Mobile Demo")

## Prerequisites

Before you begin, ensure you have met the following requirements:

* [Git](https://git-scm.com/downloads "Download Git") must be installed on your operating system.

## Installing vCard

To install **vCard**, follow these steps:

Linux and macOS:

```bash
sudo git clone https://github.com/codewithsadee/vcard-personal-portfolio.git
```

Windows:

```bash
git clone https://github.com/codewithsadee/vcard-personal-portfolio.git
```

## Contact

If you want to contact me you can reach me at [Twitter](https://www.x.com/codewithsadee_).

## License

MIT


## How to edit in Builder

- Open this project in Builder visual editor. The page is still static HTML/CSS; only data attributes were added.
- Inline editable text fields are marked with data-builder-field (e.g., hero.name, about.paragraph1, service item titles/descriptions, testimonials, timeline items, project/blog titles, categories/excerpts, and contact headings/placeholders).
- Images are replaceable via media picker where data-builder-attr="src" is present (avatar, service icons, project/blog images, client logos).
- Repeatable lists support add/reorder/delete in the editor:
  - services-list, testimonials-list, clients-list, projects-list, blogposts-list, education-list, experience-list.
- Each list item has a stable data-builder-item-id for targeting. Links expose data-builder-attr="href".
- Light theme stays intact; no layout/CSS changes were made.
