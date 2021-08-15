# TinkerHub Learning Paths :sparkles: [![Netlify Status](https://api.netlify.com/api/v1/badges/562e1c1a-0f23-4d27-92cf-4be923e8ef91/deploy-status)](https://app.netlify.com/sites/th-learn/deploys)

![happy learning](https://user-images.githubusercontent.com/8397274/114326193-3774f480-9b51-11eb-88d3-e899e5673e98.jpg)

## Hola, this repository contains curated learning paths for various technologies

:bulb: Visit [tinkerhub.org/learn/python](https://tinkerhub.org/learn/python) for the python path.

### How to add a new learning path

#### Requirements

- Download and install [Hugo](https://gohugo.io/getting-started/installing/)

#### Getting started

- Fork the repository to your profile by clicking [here](https://github.com/tinkerhub-org/TinkerHub-Learning-Paths/fork)
- Clone the forked repository by running the follwing command:

```bash
git clone https://github.com/{Your-github-username-here}/TinkerHub-Learning-Paths.git
```

- Create a new branch from **main** by typing the following command:

```bash
git checkout -b learning-path-name
```

- Follow the next steps to create a new learning path or sub path

#### Creating a new learning path

- Run the following command

```bash
 hugo new path-name/index.md
```

You can see that hugo generated a new file named path-name/index.md under the [content](./content) directory

- Modify the file contents and metadata
- Run `hugo server` to preview your changes on the browser
- If you are good with your changes, open a pull request to this repository

#### About path metadata

| Name       | Type    | Description                                                                                         | Example                     |
| ---------- | ------- | --------------------------------------------------------------------------------------------------- | --------------------------- |
| `title`    | String  | Title of the path                                                                           | `How to learn java`         |
| `date`     | Date    | Date which the path is created                                                                      | `2021-04-12T13:35:55+05:30` |
| `category` | String  | Set the category of the path to <ul><li>`language`</li><li>`framework`</li><li>`devops`</li><li>`ai-ml`</li><li>`other`</li></ul> | `language` |
| `image`    | String  | Image path. Images should be uploaded to static/images/path-name  | `images/java/image.png`     |
| `tags`     | Array   | Search terms for the learning path, used by the search bar to do fuzzy search                       | `["python", "backend"]`     |
| `authors`  | Array   | GitHub usernames of authors                                                                         | `["author1", "author2"]`    |
| `mainpage` | boolean | Marks a page as main page eg:index                                                            | `false` |
### License

This project is licensed under [MIT License](LICENSE)
