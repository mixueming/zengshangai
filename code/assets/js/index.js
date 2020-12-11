/**
 * 
 * @authors cherish yii2 (cherish@cherish.pw)
 * @date    2020-12-10 16:48:28
 * @version v1.0
 * @description the core js of todolist project
 * 
 * ━━━━━━神兽出没━━━━━━
 * 　　   ┏┓　 ┏┓
 * 　┏━━━━┛┻━━━┛┻━━━┓
 * 　┃              ┃
 * 　┃       ━　    ┃
 * 　┃　  ┳┛ 　┗┳   ┃
 * 　┃              ┃
 * 　┃       ┻　    ┃
 * 　┃              ┃
 * 　┗━━━┓      ┏━━━┛ Code is far away from bugs with the animal protecting.
 *       ┃      ┃     神兽保佑,代码无bug。
 *       ┃      ┃
 *       ┃      ┗━━━┓
 *       ┃      　　┣┓
 *       ┃      　　┏┛
 *       ┗━┓┓┏━━┳┓┏━┛
 *     　  ┃┫┫　┃┫┫
 *     　  ┗┻┛　┗┻┛
 *
 * ━━━━━━感觉萌萌哒━━━━━━
 */

// 请根据考试说明文档中列出的需求进行作答
// 预祝各位顺利通过本次考试，see you next week！
// ...
const oll = document.querySelector('.demo-box')
const ull = document.querySelector('.donelist')

const h22 = document.querySelector('.h22')
const h2_2 = document.querySelector('.h2_2')
var inp = document.querySelector('.inp')
var frg = document.createDocumentFragment()
const a = document.querySelectorAll('ol >li >a')
//添加
inp.onkeydown = function(e){
    e = e || window.event
    var code = e.KeyCode || e.which
    const ipname = inp.value
    const li = document.createElement('li')
    
    let str =`
            <input type="checkbox" />
            <p onclick="edit(1)">${ipname}</p>
            <a href="javascript:remove(1)">-</a>
        `
    li.innerHTML = str
    if(code === 13 && ipname !== ''){
        oll.appendChild(li)
        e.preventDefault()
        console.log(ipname)
        frg.innerHTML = str
        oll.appendChild(frg)
        inp.value = ''
        const lis = document.querySelectorAll('.demo-box>li')
        console.log(lis.length)
        h22.innerText = lis.length

    }
   
}
//删除
oll.onclick = ( e => {
    e = e || window.event
    const target = e.target || e.srcElement
    if(target.nodeName === "A"){
        target.parentNode.remove()
        const lis = document.querySelectorAll('.demo-box>li')
        h22.innerText = lis.length
    }

    if(target.nodeName === "INPUT"){
        
        console.log('我是11')
        $('.donelist').append( target.parentNode)
        const lis = document.querySelectorAll('.demo-box>li')
        h22.innerText = lis.length
        console.log(h22)
        const lis2 = document.querySelectorAll('.donelist>li')
        h2_2.innerText = lis2.length 
        console.log(h2_2)

    }
    
})

ull.onclick = ( e => {
    e = e || window.event
    const target = e.target || e.srcElement
    if(target.nodeName === "A"){
        target.parentNode.remove()
        const lis2 = document.querySelectorAll('.donelist>li')
        h2_2.innerText = lis2.length 
    }



    if(target.nodeName === "INPUT"){
        
        console.log('我是11')
        $('.demo-box').append( target.parentNode)
        const lis = document.querySelectorAll('.demo-box>li')
        h22.innerText = lis.length
        console.log(h22)
        const lis2 = document.querySelectorAll('.donelist>li')
        h2_2.innerText = lis2.length 
        console.log(h2_2)

    }
})

