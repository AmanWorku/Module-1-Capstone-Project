// Menu popup

const hamBtn = document.querySelector('.fa-bars');
const closeBtn = document.querySelector('.fa-xmark, .menu ul li');

hamBtn.addEventListener('click',() => {
    document.querySelector('.menu').style.display = 'flex';
});

closeBtn.addEventListener('click', () => {
    document.querySelector('.menu').style.display = 'none';
})

// Dynamic Insertion

const musicians = document.querySelector('.musicians');

let musicianData = [
    {
        imgFile: 'bese.jpg',
        personName: 'Besufkad Alemu',
        occupation: 'Music Producer, Composer, Arranger and songwriter, PhD from Berklee School of Music',
        desc: 'Created his own choir which is well known to create music without an instrument which is called acapella.',
    },
    {
        imgFile: 'babi.jpg',
        personName: 'Beabtsega Likoyu',
        occupation: 'Music Producer, Bass Guitarist, songwriter, Masters Degree from Oakwood Universty',
        desc: 'Created his own choir which is well known to create music without an instrument which is called acapella.',
    },
    {
        imgFile: 'yidne.jpg',
        personName: 'Yidne Kassahun',
        occupation: 'Singer, Composer, Vocal Coach, Arranger and songwriter, PhD Degree from Berklee School of Music',
        desc: 'Created his own choir which is well known to create music without an instrument which is called acapella.',
    },
    {
        imgFile: 'aman.jpg',
        personName: 'Amanuel Worku',
        occupation: 'Music Producer, Composer, Arranger Bachelors Degree from Berklee School of Music',
        desc: 'Created his own choir which is well known to create music without an instrument which is called acapella.',
    },
    {
        imgFile: 'prantosh.jpg',
        personName: 'Prantosh Biswas',
        occupation: 'Music Producer, Composer, Arranger and songwriter, PhD from Savitribai Phule Pune University',
        desc: 'Created his own choir which is well known to create music without an instrument which is called acapella.',
    },
    {
        imgFile: 'salwa.jpg',
        personName: 'Salwa Ballouti',
        occupation: 'Violinist, Composer, Arranger, Choir Director and songwriter, PhD from Mohammed V University in Rabat',
        desc: 'Created his own choir which is well known to create music without an instrument which is called acapella.',
    },
];

musicians.innerHTML = '';

for (let i = 0; i < musicianData.length; i++){
    musicians.innerHTML += `
    <div class="musician">
            <div class="single_musician"><img src="assets/${musicianData[i].imgFile}" width="130" height="130"></div>
            <div class="music_desc">
            <h3>${musicianData[i].personName}</h3>
            <h4>${musicianData[i].occupation}</h4>
            <span class="musician_line"></span>
            <p>${musicianData[i].desc}</p>
            </div>
            </div>
    `;
}