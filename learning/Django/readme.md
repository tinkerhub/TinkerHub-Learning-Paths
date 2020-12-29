# How to learn Django for Web Development:snake:

<i> "The web framework for perfectionists with deadlines." </i> :sparkles:
<br><br>
Learning path for Django curated by [Irene](https://github.com/irenekurien/):bowtie:

## Why learn Django :question:
Django is a popular web framework built on top of python. It helps programmers rapidly create maintainable and flexiable web applications powered by an SQL Database. <br>
<br>
Django takes care of much of the hassle of web development, so you can focus on writing your app without needing to reinvent the wheel. It is free and open source, has a thriving and active community, great documentation, and many options for free and paid-for support. 

## Install and setup stuffs :construction:

Things you need and need not.

1. A :computer: with any OS :white_check_mark:
2. A good light weight editor: [VSCode](https://code.visualstudio.com/), [Atom](https://atom.io/), [Sublime text](https://www.sublimetext.com/) :white_check_mark:
3. Using super light Notepad Text Editor :x:
4. Basic programming knowledge in Python :white_check_mark:
> Familiarity with the basics of python OOP 
5. Basic Web development knowledge :white_check_mark:
6. Basic knowledge of using a terminal/command line :white_check_mark:
> You should know how to install software packages on computer's operating system.

### Installing system-wide or in a Python virtual environment?

If you install Django into the global environment then you will only be able to one version of Django on the computer. And if you want to create websites using the latest version of Django while still maintaining websites that rely on older versions, then you'll have a problem here.

Thus, it is better to run apps within independent Python virtual environments which enables multiple different Django environments on a single computer.

### Install Python :star2:

Being a Python Web framework, Django requires Python. 
<br>
What version of Python should be used? :hushed:
<br>
The python version supported by the your target [django release](https://docs.djangoproject.com/en/3.1/faq/install/#faq-python-version-support) can be used.

### Install Django :star2:

There are three ways to download Django:
1. Installing an official release with pip. 
> This is the best way to get the latest stable version of Django.
2. Use a version from your computer's package manager.
3. Installing the development version.

Head over to the [Django documentation](https://docs.djangoproject.com/en/3.1/topics/install/#installing-official-release) and install django into your system/virtual environment.

## Building Web Apps using Django :boom:

Django provides us with an amazing documentation which makes it easy for anyone new to web development to understand the concepts and get ahead with building their dream project.

1.  Follow the official tutorial provided in the Django Documentation and build a  [basic poll application](https://docs.djangoproject.com/en/3.1/intro/tutorial01/).

2. Challenge yourself! It's time to try out a project of your own. 

Project :bulb: Create a blogging website.

3. While working on your project learn more about using [models](https://docs.djangoproject.com/en/3.1/topics/db/models/), [making queries](https://docs.djangoproject.com/en/3.1/topics/db/queries/), and the [QuerySetAPI Reference](https://docs.djangoproject.com/en/3.1/ref/models/querysets/).

4. Learn more about the Django [administration](https://docs.djangoproject.com/en/3.1/ref/contrib/admin/) site.

5. Get a grasp on [writing views](https://docs.djangoproject.com/en/3.1/topics/http/views/), [templates](https://docs.djangoproject.com/en/3.1/topics/templates/), [managing static files](https://docs.djangoproject.com/en/3.1/howto/static-files/), and the [URL dispatcher](https://docs.djangoproject.com/en/3.1/topics/http/urls/).

6. Learn to write [class based views](https://docs.djangoproject.com/en/3.1/topics/class-based-views/intro/), [built-in class-based generic views](https://docs.djangoproject.com/en/3.1/topics/class-based-views/generic-display/#built-in-class-based-generic-views), and [pagination](https://docs.djangoproject.com/en/3.1/topics/pagination/)

7. Learn how to use [sessions](https://docs.djangoproject.com/en/3.1/topics/http/sessions/).

8. Learn about [User Authentication](https://docs.djangoproject.com/en/3.1/topics/auth/) in Django and how to use the [Django Authentication System](https://docs.djangoproject.com/en/3.1/topics/auth/default/).

9. Learn more about working with [forms](https://docs.djangoproject.com/en/3.1/topics/forms/) and the [forms API](https://docs.djangoproject.com/en/3.1/ref/forms/api/), creating forms from [models](https://docs.djangoproject.com/en/3.1/topics/forms/modelforms/).

### Testing you Django Application

It's nearly impossible to develop a website that would run perfectly in the first go, so it is necessary to test your application. But as your project grows its is not practical to manually test your app, to resolve this Django provides you a [test framework](https://docs.djangoproject.com/en/3.1/topics/testing/overview/) to automate unit testing.

Check out the [Workshop: Test-Driven Web Development with Django](https://test-driven-django-development.readthedocs.io/en/latest/index.html) by San Diego Python's Workshop.

### Deploying Django

Now that you have developed a fully tested website you might want to deploy it as well, to do so check out the Django [documentation](https://docs.djangoproject.com/en/3.1/howto/deployment/) where they explain the different ways to do the same.

You can also head over to the [Heroku docs](https://devcenter.heroku.com/articles/django-app-configuration) and learn how to configure you Django apps for Heroku.

## Building RESTful APIs with Django :muscle:

Django REST framework is a powerful and flexible toolkit for building Web APIs. 


## Steps for doing projects :woman_technologist:

Some good starting projects:

1. To-Do List
2. Library management system
3. Event website for College Fest

:heart_eyes: All the best :smile:
