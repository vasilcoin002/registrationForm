# Registration Form
Registration Form with custom properties redacting in JSON file

## Installing project

## Start using this project
1. Install [Node.js](https://nodejs.org/en) from official site
2. Install **yarn** from node package manager. Execute this in terminal:
   ```
   npm install --global yarn
   ```
   
3. Move to project's folder in terminal with command `cd path`, for example `cd G:/Projects/React/registrationForm`, then execute command below in terminal to install dependencies:
   ```
   yarn
   ```

4. Execute this to run local server
   ```
   yarn dev
   ```
   
5. Follow the local server's link you've got, for example: [http://localhost:5173/](http://localhost:5173/)

## Make your own form
You can make your own form's options, redacting `Views.json` located in `src` folder

Here is a structure of `Views.json`:
``` json
{
  "View-1": {
    "title": "View title"
    "items": [
      {
        "title": "Option Title",
        "keyName": "OptionName",
        "optionType": "Type of form field",
        "options": [],
        "obligatoryToFill" : true,
        "id": 1
      },
      {
        "title": "Option Title 2",
        "keyName": "Option name 2",
        "optionType": "Type of form field 2",
        "options": [],
        "obligatoryToFill" : false,
        "id": 2
      }
    ]
  },
  "View-2": {
    ...
  }
}
```
### 1. Create Views
So, you have to create views(`View-number`):
``` json
{
  "View-1": {},
  "View-2": {},
  "View-3": {}
}
```
or more. In my example i will use only 1 view
### 2. View structure
Each view has it's own `title`, and form options(`items`):
``` json
{
  "View-1": {
    "title": "View Title",
    "items": []
  }
}
```
### 3. View items
View's items are `objects` which contain required info about form's field. Recomend you to use 4 items
``` json
{
  "View-1": {
    "title": "View Title",
    "items": [
      {},
      {},
      {},
      {}
    ]
  }
}
```
### 4. Item parameters
There are 6 parameters inside item, here they are: `title`, `keyName`, `optionType`, `options`, `obligatoryToFill`, `id`
#### 1. title:
```"title": "Title of field"``` \
Title of your form field. Can receive **text you type**

#### 2. optionType:
```"optiontype": "input"``` \
Type of form field, can be `input`, `password`, `select`, `checkbox`
+ **input**: you can type text here
+ **password**: you can also type text here, but it will be hidden
+ **select**: you can choose of the options
+ **checkbox**: just a tick
  
#### 3. options:
Options for optionType parameter
+ **input**: option for input defines input's placeholder(background input's text). `"options": ["input's placeholder"]` \
![Input](https://i.imgur.com/e1jkowR.png)
+ **password**: same as for input. `"options": ["password's placeholder"]` \
![Password](https://i.imgur.com/zRj6H8s.png)
+ **select**: receives options of selection. `"options": ["option1", "option2", "option3"]` \
![Select](https://i.imgur.com/vt5TGnH.png)
+ **checkbox**: just an empty array `"options": []`
  
#### 4. obligatoryToFill:
```"obligatoryToFill": false``` \
You can click continue only if all the fields with `"obligatoryToFill": true` are filled. Can receive `true` or `false`

#### 5. id:
```"id": 1``` \
Id of form's field on a current view

#### 6. keyName:
```"keyName": "getNews"``` \
All the user's data contains at an object lovated in App.jsx, named "AllUserData" and you can get necessary data from it with it's key name. For example, you have an item with parameters `"keyName": "education"`, `"optionType": "select"`, `"options": ["High School", "Bachelor", "Master", "Science Doctor"]`. User selected "Master", and you can get this info at AllUserData \

> console.log(AllUserData.education) \
> // Master

You should write a value of keyName without gaps
