- [Getting Started](#getting-started)
  - [Before you begin](#before-you-begin)
  - [Next steps](#next-steps)
  - [Code block](#code-block)
- [Heading 1](#heading-1)
  - [Heading 2](#heading-2)
    - [Heading 3](#heading-3)
      - [Heading 4](#heading-4)
        - [Heading 5](#heading-5)
          - [Heading 6](#heading-6)
  - [Linking](#linking)
  - [Insering images](#insering-images)
  - [Tables](#tables)
  - [Info Elements](#info-elements)
  - [TOC](#toc)
  - [Tasklist](#tasklist)
  - [Footnotes](#footnotes)
  - [Creating collapsible sections](#creating-collapsible-sections)
        - [Troubleshooting](#troubleshooting)
    - [Where to go from here?](#where-to-go-from-here)


# Getting Started

`**The content here includes practicals from Day 2 of the training**`


Welcome to our *product documentation*. Microsoft Copilot Studio **RND**_***versionnumber*** is a graphical, low-code studio for building and managing agents and **workflows**.   

In this module, you explore the three agent harnesses and compare the classic, now called ***standard harness***, authoring experience with the new GitHub Copilot harness experience. The _procedures_ for topics, generative __orchestration__, and the test panel use the ___standard harness___ unless otherwise noted.

List of guides you will find in this manual:

- Getting started guide
- User guide
- Installation guide
  - Configuration guide
    - Experience guide
  - Unintsalling guide
- Troubleshooting guide


## Before you begin
Make sure you have an active account.

## Next steps
Continue with the installation guide. Perform the following:

1. Press `shift+enter`. Use thematic spacebreaks thrice   
   a. Nest step   
   b. Next step
2. Go to **File>Open Folder**   
   A new line
3. Go to **View>Command Palette**

## Code block

```
javascript
function greet(name) {
  return `Hello, ${name}.`;
}
 
console.log(greet("world"));
```

# Heading 1
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6

## Linking

File outside hierarchy: [Readme.md](../README.md)

For more information, see [Product page](https://learn.microsoft.com/en-us/training/modules/power-virtual-agents-bots/)

For more details, see [Tables](#tables)


## Insering images

![](/Images/TW.jpg)

<img src="/Images/Birthday Greetings 2.jpg" width="200" height="100" />

## Tables

A list of team members

| Writer | Product Family | Product name |
| :--- | :---: | ---: |
| Pamela | DevX | File-AID |
| Smita | <b>Storage</b> | IAM |
| Revathi | Security | Session Monitor |

| Syntax | Description |
| - | - |
| *Stem sentence*:  <ol> <li>First nested item</li>  <li>Second nested item</li>  </ol>   | Text |
| Paragraph </br> next line  </br>next next line | Text |

## Info Elements

> **Important:** 
> This is an important note

> [!Note]
> This is an important note

> [!Tip]
> Install Markdown Preview Enhanced

> [!Warning]
> Do not press Enter

> [!Example]
> This is an example

> [!Important]
> Install Gitbash

> [!Error]

## TOC

Go to **View>Command Palette>Markdown All in One: Create Table of Contents**



## Tasklist

- [x] Set up the editor
- [x] Write some markdown
- [x] Connect a cloud service
- [ ] Export the finished document

## Footnotes

Markdown is commonly used for documentation.[^1]
GitHub supports GitHub FlavoredMarkdown (GFM).[^2]
 
[^1]: Markdown is designed to be easy to read and write.
[^2]: GFM extends standard Markdown with additional features.

## Creating collapsible sections

<details>
<summary>Click to expand</summary>
 
This content is hidden by default.
 
You can include following types of content:
 
- Text
- Lists
- Code
- Links
- Images
 
</details>

<details>
<summary>Click to expand</summary>
 
This content is hidden by default.
 
You can include following types of content:
 
- Text
- Lists
- Code
- Links
- Images
 
</details>   

Opened collapsible
 
<details open>
<summary>Prerequisites</summary>
 
Before you begin, make sure you have:
 
- Git installed
- VS Code installed
- A GitHub account
 
</details>

##### Troubleshooting
 
<details>
<summary>Why can't I push my changes?</summary>
 
Make sure you:
 
1. Have committed your changes.
2. Are connected to the correct remote repository.
3. Have permission to push to the repository.

### Where to go from here?

For next steps, see [Use guide](user-guide.md)

Stage all file by mentioning `git -A` or git `--all` or `git add .`(for entore repo and not folder specific)

git commit --amend -m "need to fix a typo" (to pull back a file that was Saved)

















