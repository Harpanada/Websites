// const arraySaya =[]

// arraySaya [0]= '🥑'
// arraySaya [1]= '🍑'
// arraySaya [2]= '🥭'
// arraySaya [3]= '🍉'
// arraySaya [4]= '🍊'


// const buahDicari = '🍉'
// const posisiBuah = arraySaya.indexOf(buahDicari)
// console.log(posisiBuah)
// if(posisiBuah >= -1){
    
//     const posisiSebelum = posisiBuah -1
//     const posisiSesudah = posisiBuah +1 
//     let sebelum= arraySaya[posisiSebelum]
//     const sesudah = arraySaya[posisiSesudah]
//     if(posisiSebelum < 0){
//         sebelum = 'tidak ada'
//     }
//     console.log(`Buah ini ada di dalam array,Buah ini berada di index ke ${posisiBuah},buah sebelum buah ini adalah ${sebelum},buah sesudah buah ini adalah ${sesudah}`)
// }else{
//     console.log('Buah ini tidak ada di dalam array')
// }



// const arraySaya =[]

// arraySaya [0]= 10
// arraySaya [1]= '🍑'
// arraySaya [2]= {nama: 'Ovan', umur: 15}
// arraySaya [3]= ['makan','malam']
// arraySaya [4]= function(){
//     console.log('Halo')
// }

// console.log(arraySaya  [4]() )


// const datas =[
//     {
//         nama: 'Ovan',
//         umur: 25,
//         skiil: 'php'
        
//     },
//     {
//         nama: 'Rizky',
//         umur: 16,
//         skiil: 'python'
//     },
//     {
//         nama: 'Aldi',
//         umur: 37,
//         skiil: 'javascript'
//     },
//     {
//         nama: 'Fadil',
//         umur: 28,
//         skiil: 'java'
//     }
    
// ]
// console.log(datas[0].nama)
// const nama = [datas[0].nama, datas[1].nama, datas[2].nama, datas[3].nama]
// const umur = [datas[0].umur, datas[1].umur, datas[2].umur, datas[3].umur]
// console.log(nama, umur)
1

// //mengeluarkan hanya item tertentu
// console.log('mengeluarkan hanya item tertentu')
// datas.map((values, index)=>{
//     console.log(index,values.nama, values.umur )
// })

// //menyortir dari item usia tertua
// console.log('mengenyortir dari item usia tertua')
// datas.sort((a,b)=> b.umur - a.umur).map((values)=> console.log(values))

// //menyortir hanya usia dibawah 30
// console.log('mengenyortir hanya usia dibawah 30')
// datas.sort((a,b)=> b.umur-a.umur).filter((x)=> x.umur < 30).map((values)=> console.log(values))

// //menyortir hanya usia diatas 30
// console.log('mengenyortir hanya usia diatas 30')
// datas.sort((a,b)=> b.umur-a.umur).filter((x)=> x.umur > 30).map((values)=> console.log(values))


//DOM
// document.title = 'Belajar DOM'
// const body= document.body

// const h1 = document.createElement('h1')

// h1.textContent = 'Belajar DOM bos'
// body.append(h1)

// const namaKu =document.createElement('p')
// namaKu.innerHTML = '<marquee>Nama saya adalah Ovan</marquee>'

// body.append(namaKu)

// const namaMu = document.createElement('h2')
// namaMu.innerText = 'Nama kamu siapa?'
// body.append(namaMu)


document.title = 'Belajar DOM'

const btn1= document.getElementById('btn1')
const btn2= document.getElementById('btn2')
const body= document.body
// const namaSaya= document.createElement('h1')
// namaSaya.innerHTML = '<h2>Nama saya Ovan</h2>'

// btn1.addEventListener('click',()=>{
//     alert('Tombol 1 di klik')
// })



// let style= btn1.style

// style.border = 'none'
// style.padding = '8px'
// style.fontSize = '16px'
// style.backgroundColor = 'blue'

// function clickEd(){
// btn2.style.backgroundColor = 'red'
// const newText=document.createElement('p')
// newText.textContent = 'Tombol 2 di klik'
// body.append(newText)
// }
// let newText
// function clicked(){
//     newText= document.createElement('h1')
//     newText.textContent = 'Liyovan Harpanada'
//     body.append(newText)
//    newText.style.color = 'black'
// }

// function mouseOut(){
//     newText.style.color = 'red'
// }
 b