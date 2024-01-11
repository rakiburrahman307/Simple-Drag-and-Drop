const div = document.getElementById('div');
const div1 = document.getElementById('div1');
const div2 = document.getElementById('div2');
const div3 = document.getElementById('div3');
const allDiv =[div, div1, div2, div3];

const paragraph1 = document.getElementById('para1');
const paragraph2 = document.getElementById('para2');
const paragraph3 = document.getElementById('para3');
const paragraph4 = document.getElementById('para4');
const paragraph5 = document.getElementById('para5');
const paragraph6 = document.getElementById('para6');

const allParagraphs = [paragraph1, paragraph2, paragraph3, paragraph4, paragraph5, paragraph6];

allParagraphs.map(paragraph => {
    paragraph.addEventListener('dragstart',(e)=>{
        e.dataTransfer.setData('peraId', e.target.id)
    })
})
allDiv.map(div => {
    div.addEventListener('dragover',(e)=>{
        e.preventDefault();
    });
})

allDiv.map(div =>{
    div.addEventListener('drop',(e)=>{
        const id = e.dataTransfer.getData('peraId');
        const getParagraph = document.getElementById(id);
        div.appendChild(getParagraph);
    });

})