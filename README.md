![image](https://github.com/user-attachments/assets/339a934f-272f-4777-81d9-edc4a94b4522)
# **[CCAPDEV] Pro-Ject Frontend**

This repository contains the frontend for Group 11's project, which is a
forum website (Pro-Ject).

**Relevant links:**  
🔗[Project UI](https://www.canva.com/design/DAGcEE4oUvk/ejur2PAXneqDyrMRT5bAHQ/edit?utm_content=DAGcEE4oUvk&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton)  
🔗[Project Proposal](https://docs.google.com/document/d/1PL1ZH4hzbeEBXcMdTVPAzfnHorN40NQg/edit?](url)fbclid=IwZXh0bgNhZW0CMTAAAR0ejRBZqVoqxnEFNZzFsD6DtOUQK-uBrMwa4_m0jaAR_OptCiDFNuGfqXM_aem_0Fr80NR0YtmHPPZR9lpk7Q)  

## IMPORTANT
> **What to do after `git pull`**
> ```bash
> npm install
> ```

## **Usage**

1. Run the program
```bash
npm run dev
```
`response`:
```bash
  VITE v6.0.11  ready in 139 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```

2. Visit the localhost website:
![image](https://github.com/user-attachments/assets/9cf3fc7b-b7e9-4392-976d-fa679d74c057)




## **Sample File Structure**
This is the current file structure organization of the project.
**NOTE:**
* Put your pages into pages/
* utilize the components/ as much as possible for reusability (NavBars, buttons, etc.)

`directory:`
```
src/
├── assets/
|   ├── fonts/
|   |   Garet.ttf
├── pages/
|   ├── Home.jsx
|   ├── Home.css
├── components/
│   ├── Header.css
│   ├── Header.jsx
│   ├── Nav.css
│   ├── Nav.jsx
│   ├── SearchBar.css
│   ├── SearchBar.jsx
├── App.css
├── App.jsx
├── index.css
├── main.jsx
```




## **TODO**
- [x] `Migrating Tyrelle's HTML to React JS`
- [ ] `Main Page` **(Tyrelle)**
  - [x] Posts (hardcoded)
  - [x] Sidebars
  - [x] Navigation bar
  - [ ] Account drop-down
- [ ] `Front Page` **(Pat)**
- [ ] `Log In Page` **(Pat)**
  - [ ] Fields
  - [ ] Submit button
  - [ ] Etc.
- [ ] `Sign Up Page` **(Pat)**
  - [ ] Fields
  - [ ] Submit button
  - [ ] Etc.
- [ ] `View Post Page` **(Andrei)**
  - [ ] Full content in text
  - [ ] Comments
  - [ ] Upvote/Downvote
- [ ] `Create/Edit Project Page` **(Roe)**
  - [ ] Fields
  - [ ] Post button
  - [ ] Upload attachments button
- [ ] `Profile Page` **(Jeff)**
  - [ ] Header Info
  - [ ] Profile navigation bar
    - [ ] Projects
    - [ ] Comments
    - [ ] Upvotes
    - [ ] Downvotes


## **Setup**

### NOT IMPORTANT
**`Project (Vite + ReactJS) Setup`**
```bash
npm create vite@latest
```

`**TailwindCSS Setup**`
```bash
npm install -d tailwindcss@3.4.17
npm install postcss autoprefixer
npx tailwindcss init -p
```
