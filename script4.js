let styles = ['Джаз','Блюз']
styles[styles.length+1] = 'Рок-н-ролл'
styles[styles.length/2] = 'Класика'
styles.splice(0,1)
let st = ["Реп","Реггі"]
const sty = st.concat(styles) 
styles = sty
console.log(styles)