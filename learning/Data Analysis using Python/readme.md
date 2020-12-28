# Data Analysis :chart: using Python :snake:

A learning path for learning data analysis using python curated by [shaji-stark](https://github.com/shaji-stark)

## Why is python an excellent option for data analysis :question: :thinking:
1. **Easy to learn**

    Python is focused on simplicity as well as readability, providing a host of helpful options for data analysts/scientists simultaneously. Thus, newbies can easily utilize its pretty simple syntax to build effective solutions even for complex scenarios.

2. **Well-supported**

    Being in widespread use in industrial alongside academic areas, Python has a broad array of helpful libraries with tons of helpful and support materials. The great benefit is that all the libraries are available at no cost.

3. **Graphics and Visualization Tools**

    You can make the data more accessible and easier-to-use by means of creating various charts and graphics, as well as web-ready interactive plots. Yes, Python provides you with the capability to get a good sense of data.

4. **Extended packs of analytics tools available**

    Straight after you gather data, you’re to handle it. Python suits this purpose supremely well. So, seeking for the perfect tool for complex data processing or self-service analytics, we can’t but mention Python’s built-in data analytics tools.

## Future and scope of the field

As companies are becoming more tech-driven and fast-paced now,   data analysis professional are already playing an increasingly crucial role in businesses. Both startups and tech giants in India are adding data analysts to their workforce who are able of recording, analyzing and dissecting data to drive efficient decision-making.


# Install and setup (Optional) :construction:

For running the tools for data analysis you have two options:
## :one: **Anaconda and Jupyter Notebooks**
## :two: **Google Collaboratory**
## We've given the instructions for :one: below, because there's no setting up to do for :two:!!
## 1. Install Anaconda

Anaconda puts nearly all of the tools that we're going to need into a neat little package: the Python core language, an improved REPL environment called **Jupyter**, numeric computing libraries **(NumPy, pandas)**, plotting libraries **(seaborn, matplotlib)**, and statistics and machine learning libraries **(SciPy, scikit-learn, statsmodels)**. We'll use Anaconda's installer to handle setting up the environment that we'll work in.
In order to keep the size of the download small, we actually use a minimum set of packages called Miniconda.
### Miniconda installer packages:
* ### [Windows 64-bit with python 3.8](https://repo.anaconda.com/miniconda/Miniconda3-latest-Windows-x86_64.exe)
* ### [Mac OSX 64-bit with python 3.8](https://repo.anaconda.com/miniconda/Miniconda3-latest-MacOSX-x86_64.sh)

Not on the system with that variant or needed another version? Check out the conda documantation [at this link](https://docs.conda.io/en/latest/miniconda.html).
Note: It's easiest just to use Anaconda's defaults in the installer. You don't have to change anything unless you're sure you want something different.

## 2. Set up your environment

Check out the environment files for windows and osx that we've given in this sub-repo `win-environment.yml` and `osx-environment.yml`. Copy it to your device and save it in a location, preferrably as `environment.yml`.
#### Once that's done, open the command line by doing the following:

Windows - Hit "Start" and then type "Command Prompt" and use that terminal.
OSX - Type `Cmd+Space` and then enter Terminal in the search box to open the terminal.

#### Run the following commands, which will install the package and put you in the tutorial environment.

`conda env create -f <PATH_TO_ENVIRONMENT.YML>` 
        - You'll need to replace <PATH_TO_ENVIRONMENT.YML> with the actual path where the file was downloaded.
        
For OSX, that's often `(/Users/<USERNAME>/Downloads/environment.yml)`.
For Windows, it is usually `C:/Users/<USERNAME>/Downloads/environment.yml`.
You'll have to replace <USERNAME> with your username on your machine. 

That will download all the set of packages that are commonly used for data science in Python. When it finishes, you can activate the environment with the following command:

Windows - `activate tutorial`
OSX - `source activate tutorial`

## 3. Run the jupyter notebook!

In this step, we'll make sure everything is working by running the Jupyter Notebook. Jupyter Notebook is a tool for doing interactive data science work in your browser. 
In your command prompt with the tutorial environment activated (Note: you'll be able to tell because your command prompt will say (tutorial) at the start of it.)
Type the following command: 
`jupyter notebook` 
A browser window will open, showing the Jupyer environment. By default, you will be in a file browser view. 
In the file browser, find where you have a Jupyter notebook. **Check out the materials we've attached by the end of each curriculum documantation**, if you wanna see it run! 
### Click on one of the notebook (*.ipynb) files to get started!

## 4. Stop the notebook

Hit `Ctrl+c` to stop the Jupyter notebook server running on your machine. (Make sure to use `Ctrl+s` in the notebook to save it first!)

## 5. Leave the tutorial environment 

* Windows: `deactivate tutorial`
* osx: `source deactivate tutorial`


# 1. Let's start with numpy :hash: 
<img src="https://numpy.org/images/logos/numpy.svg" width=100>

So we'll start off with numpy, a highly useful python module for numerical analysis of data and arrays

1. **You'll learn numerical computing using numpy here!**

### :bulb: [Resource](https://github.com/shaji-stark/TinkerHub-Learning-Paths/blob/main/learning/Data%20Analysis%20using%20Python/reference/numpy-array-operations.ipynb)
### [Resource](https://github.com/shaji-stark/TinkerHub-Learning-Paths/blob/main/learning/Data%20Analysis%20using%20Python/reference/numerical-computing-with-numpy.ipynb)

# 2. Pandas :panda_face:
<img src="https://pandas.pydata.org/static/img/pandas_white.svg" width=100>

Pandas is another useful python module in reading and handling data
Things you'll learn here are:
1. **Creating Data Frames using Pandas module**
2. **Handling Tabular data**
3. **Reading different file formats such as CSV, JSON, HTML and Excel files**      
4. **Data Cleaning and Preprocessing**
5. **Handling missing data**
6. **Normalization technique**
7. **Filling Missing values**
8. **Dealing with outliers**


## :bulb: [Resource](https://github.com/shaji-stark/TinkerHub-Learning-Paths/blob/main/learning/Data%20Analysis%20using%20Python/reference/pandas-data-analysis.ipynb)

## 3. Matplotlib and Seaborn

We'll get introduced to two efficient modules for data visualization, **Matplotlib and Seaborn**
Things you'll learn here are:
1. **Data visualization with Matplotlib & Seaborn modules**
2. **Creating Scatter plot, Box plot, Histogram & Pie chart with Matplotlib module**
3. **Distribution plots and Categorical Plots with Seaborn Module**

## :bulb:

## 4. More on data analysis

Finally we'll be going through some types of data analysis. Here you'll be learning:
1. **Univariate,Bivariate and MultiVariate Analysis**
2. **Exploratory Data Analysis ( EDA ) on a Dataset covering all the previously taught topics**

## Handling errors & finding solutions :detective:

- Finding bugs may be considered as comparatively easier since execution stops right when an error is encountered.
- As they say, "help with always be found for those who ask for it", you'll find a large and vast community online to clear your doubts and help you with bugs and fixes. You'll find solutions in stackoveflow or you can always clarify doubts in our discord server!

## Happy learning ;)