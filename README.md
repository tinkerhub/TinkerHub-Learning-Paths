# TinkerHub Learning Paths :sparkles: [![Netlify Status](https://api.netlify.com/api/v1/badges/562e1c1a-0f23-4d27-92cf-4be923e8ef91/deploy-status)](https://app.netlify.com/sites/th-learn/deploys)

![happy learning](https://user-images.githubusercontent.com/8397274/114326193-3774f480-9b51-11eb-88d3-e899e5673e98.jpg)

## Hola, this repository contains curated learning paths for various technologies

:bulb: Visit [paths.tinkerhub.org/python](https://paths.tinkerhub.org/python) for the python path.

### How to add a new learning path
You can create a learning path via one of the following methods.

#### 1. Using Netlify CMS
This is the easiest way of adding a new learning path. If you are familiar with GitHub and you consider youself as a CLI person, skip to the [Using Hugo CLI](#2-using-hugo-cli) section.

- Log in to the site's CMS at [paths.tinkerhub.org/admin](https://paths.tinkerhub.org/admin) using your github account
- To add a new learning path click on the **New Learning Path** button

#### About writing in Learning Path Collection

| Field                       | Description                                                                                                                       | Example              |
| --------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | -------------------- |
| `title`                     | Title of the path                                                                                                                 | `How to learn java`  |
| `publish date`              | Date which the path is created                                                                                                    | `08/15/2021 3:50 PM` |
| `category`                  | Set the category of the path to <ul><li>`language`</li><li>`framework`</li><li>`devops`</li><li>`ai-ml`</li><li>`other`</li></ul> | `language`           |
| `image`                     | Upload an image or insert its url                                                                                                 |     `images/java.png`         |
| `tags` (comma seperated)    | Search terms for the learning path, used by the search bar to do fuzzy search                                                     | `python, backend`    |
| `authors` (comma seperated) | GitHub usernames of authors                                                                                                       | `author1, author2`   |
| `body` | Learning path content                                                                                                                                  |                      |

#### 2. Using Hugo CLI
We will be using hugo, git and your favourite text editor to add the learning new path.

- Download and install [Hugo](https://gohugo.io/) and [Git](https://git-scm.com/)
- Fork the repository to your profile
- Clone the repository by running the following command:
```bash
git clone https://github.com/{your-username}/TinkerHub-Learning-Paths.git
```
- Create a new branch by running the following command:
```bash
git checkout -b "learning-path-name"
```
- Run the following command to create a new learning path
```bash
 hugo new path-name.md
```
You can see that hugo generated a new file named `path-name.md` under the [content](./content) directory.

- Modify the file contents and metadata using your favourite text editor
- Run `hugo server` to preview your changes on the browser
- If you are good with your changes, commit, push and open a pull request to this repository

### Code of conduct
Make sure that you follow [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) while contributing and engaging in the discussions.

### Thanks
- Netlify for sponsoring the [pro plan](https://www.netlify.com/pricing/)
<a href="https://www.netlify.com">
  <img src="https://www.netlify.com/img/global/badges/netlify-color-accent.svg" alt="Deploys by Netlify" />
</a>

### Some tech stuff
- This project uses Hugo Paired with Netlify CMS

### License

This project is licensed under [MIT License](LICENSE)
