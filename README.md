# **[CCAPDEV] Pro-Ject Frontend**

This repository contains the frontend for Group 11's project, which is a
forum website (Pro-Ject).

**Sample image:**
![image](https://github.com/user-attachments/assets/b8ff0105-c63f-4b3e-ad85-3ffe21790e62)


**Relevant links:**  
🔗[Project UI](https://www.canva.com/design/DAGcEE4oUvk/ejur2PAXneqDyrMRT5bAHQ/edit?utm_content=DAGcEE4oUvk&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton)  
🔗[Project Proposal](https://docs.google.com/document/d/1PL1ZH4hzbeEBXcMdTVPAzfnHorN40NQg/edit?](url)fbclid=IwZXh0bgNhZW0CMTAAAR0ejRBZqVoqxnEFNZzFsD6DtOUQK-uBrMwa4_m0jaAR_OptCiDFNuGfqXM_aem_0Fr80NR0YtmHPPZR9lpk7Q)  

## **Usage**
> [!IMPORTANT]
> **NOTE: What to do after `git pull`**
> ```bash
> npm install
> ```


1. `Run the program`
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

2.`Visit the localhost website:`  
![image](https://github.com/user-attachments/assets/359e642c-6c64-4f3a-b1af-095c841e512a)




## **Sample File Structure**
This is the current file structure organization of the project.
**NOTE:**
* Put your pages into pages/
* utilize the components/ as much as possible for reusability (NavBars, buttons, etc.)

`directory:`
```
src/
├── assets/ 
│   ├── fonts/     
├── components/
│   ├── Houses all reusable React components, grouped logically by feature or section.
│   ├── Header/
│   |   ├── Contains components related to the header section
│   ├── Home/
│   |   ├── Contains components specific to the home section
├── hooks/
|   ├── Contains the React hooks used
├── pages/
|   ├── Contains the different pages of the website
├── services/
|   ├── Contains microservices such as APIs and formatting modules
├── App.css
├── App.jsx
├── index.css
├── main.jsx
```
