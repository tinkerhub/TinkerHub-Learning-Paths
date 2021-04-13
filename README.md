# TinkerHub Learning Paths :sparkles:
![happy learning](https://user-images.githubusercontent.com/8397274/114326193-3774f480-9b51-11eb-88d3-e899e5673e98.jpg)

## Hola, this repository contains curated learning paths for various technologies 

:bulb: Visit [tinkerhub.org/learn/python](https://tinkerhub.org/learn/python) for the python path.

### How to add a new path
#### Requirements
- Download and install [Hugo](https://gohugo.io/getting-started/installing/)

#### Creating a new learning path
- Run the following command
```shell
 hugo new path-name/index.md
```
You can see that hugo generated a new file named path-name/index.md under the [content](./content) directory
- Modify the file contents and metadata
- Run `hugo serve` to preview your changes on the browser
- If you are good with your changes Open a pull request to this repository

#### Creating a new sub learning path
Some paths may contain sub paths, you can visit [tinkerhub.org/learn/lutter](https://tinkerhub.org/learn/flutter) for an example. Follow the steps below to create it.

- Run the command below to create a path
```shell
 hugo new path-name/_index.md
```
- Remove the entire contents of the file after the following lines:
```yaml
---
...metadata
---
```
- Modify the metadata for your path
- Create sub paths using the following commands
```shell
hugo new path-name/subpath1.md
hugo new path-name/subpath2.md
```
- Modify metadata of path-name/subpath1.md and path-name/subpath1.md and change `sub` to true
- Update the generated files with instructions
- Run `hugo serve` to preview your changes on the browser
- If you are good with your changes Open a pull request to this repository

#### About path/sub-path metadata
```yaml
title: Title of the path/sub path
date: date (automatically generated)
draft: true (makes path path public)
featured: true (adds path to the featured list)
# Remove the comments after reading
# add image to /static folder eg: static/images/learning-pathname/image.png
# 1024*512px resolution preferred
# note: Don't prefix with /static
image: /images/learning-path-name/image.png
# Specifies weather the path is a sub path
sub: false (specifies if a path is path or subpath)
keywords: ["keyword1", "keyword2"] (search terms for path, used by the seach bar)
tags: ["tag1", "tag2"] (used to generate tag pages)
```