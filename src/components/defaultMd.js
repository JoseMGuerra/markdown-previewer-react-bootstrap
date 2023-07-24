const defaultMd = ` # Markdown Previewer

## What is it?

A Markdown previewer and a Markdown reference created using [![ReactJs](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/) and [![React-Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)](https://react-bootstrap.netlify.app/).

One of the project required to obtain the front end libraries certification from [**freeCodeCamp**](https://www.freecodecamp.org/).


### There are six markdown headers.

H1 tag
# H1 tag

H2 tag
## H2 tag

H3 tag
### H3 tag

H4 tag
#### H4 tag

H5 Tag
##### H5 tag

H6 tag
###### H6 tag

---

### Add *~~**Emphasis**~~* in Markdown

**How to make text bold:**

Add double asterisks around your text. It'll make that text appear bold, (eg: **Bold text**).

*How to make your text italic:*

Add single asterisks around your text to make it appear in italics, (eg: *Italics text*).

~~How to Strike through certain text:~~

If you want to "cross something out" in text, use the strikethrough method, (eg: ~~Strike through~~).

---

### Write <sub>Subscripts</sub> Or

If you want to write the chemical symbol for carbon dioxide, you can make a subscript "2" by typing \`CO~2~\`.

This results in: CO<sub>2</sub>.

## Write <sup>Superscripts</sup> in Markdown

If you want to write an exponent - or superscript. You do that like this: \`X^2^\` which results in this: X<sup>2</sup>.

---

### This is how you create an unordered list:

- STP
- UTP
- Fiber Optic

### And this is how you create an ordered list:

1. bit
2. Byte
3. Megabit

---

### 🔗 Add Links

[![github](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/)

[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/)

[![twitter](https://img.shields.io/badge/twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/)

### and Badges

Add badges from sites like: [shields.io](https://shields.io/) or [Envoy-VC/awesome-badges](https://github.com/Envoy-VC/awesome-badges)

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)
[![AGPL License](https://img.shields.io/badge/license-AGPL-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)

---

### Create a Table

| Name  | Age | Gender |
| ----- | --- | ------ |
| Alice | 25  | Female |
| Bob   | 32  | Male   |
| Carol | 19  | NB     |                    

---

### Add Code or Syntax Block

 \`\`\`javascript
 import Component from 'my-project'
 
 function App() {
   return <Component />
 }
 \`\`\`

 \`\`\`bash
npm install my-project
cd my-project
\`\`\`
 
> "example of blockquote" - Anonymous

### Acknowledgements

 - [Awesome README](https://github.com/matiassingers/awesome-readme)
 - [How to write a Good readme](https://bulldogjob.com/news/449-how-to-write-a-good-readme-for-your-github-project)

`;

export default defaultMd;
