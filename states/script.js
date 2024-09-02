let next = document.querySelector('.next')
let prev = document.querySelector('.prev')
const f1=document.getElementById("base1");
const f2=document.getElementById("base2");
 
next.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
})

prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length - 1]) // here the length of items = 6
})
const carousel = document.querySelector(".carousel"),
firstImg = carousel.querySelectorAll("img")[0],
arrowIcons = document.querySelectorAll(".wrapper i");

let isDragStart = false, isDragging = false, prevPageX, prevScrollLeft, positionDiff;

const showHideIcons = () => {
    // showing and hiding prev/next icon according to carousel scroll left value
    let scrollWidth = carousel.scrollWidth - carousel.clientWidth; // getting max scrollable width
    arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
    arrowIcons[1].style.display = carousel.scrollLeft == scrollWidth ? "none" : "block";
}

arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        let firstImgWidth = firstImg.clientWidth + 14; // getting first img width & adding 14 margin value
        // if clicked icon is left, reduce width value from the carousel scroll left else add to it
        carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
        setTimeout(() => showHideIcons(), 60); // calling showHideIcons after 60ms
    });
});

const autoSlide = () => {
    // if there is no image left to scroll then return from here
    if(carousel.scrollLeft - (carousel.scrollWidth - carousel.clientWidth) > -1 || carousel.scrollLeft <= 0) return;

    positionDiff = Math.abs(positionDiff); // making positionDiff value to positive
    let firstImgWidth = firstImg.clientWidth + 14;
    // getting difference value that needs to add or reduce from carousel left to take middle img center
    let valDifference = firstImgWidth - positionDiff;

    if(carousel.scrollLeft > prevScrollLeft) { // if user is scrolling to the right
        return carousel.scrollLeft += positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
    }
    // if user is scrolling to the left
    carousel.scrollLeft -= positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
}

const dragStart = (e) => {
    // updatating global variables value on mouse down event
    isDragStart = true;
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    // scrolling images/carousel to left according to mouse pointer
    if(!isDragStart) return;
    e.preventDefault();
    isDragging = true;
    carousel.classList.add("dragging");
    positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
    carousel.scrollLeft = prevScrollLeft - positionDiff;
    showHideIcons();
}

const dragStop = () => {
    isDragStart = false;
    carousel.classList.remove("dragging");

    if(!isDragging) return;
    isDragging = false;
    autoSlide();
}

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("touchstart", dragStart);

document.addEventListener("mousemove", dragging);
carousel.addEventListener("touchmove", dragging);

document.addEventListener("mouseup", dragStop);
carousel.addEventListener("touchend", dragStop);
let x;
function des(x){
if(x=="General"){
f1.innerHTML="Uttar Pradesh is bordered by the state of Uttarakhand and the country of Nepal to the north, the state of Bihar to the east, the states of Jharkhand and Chhattisgarh to the southeast, the state of Madhya Pradesh to the south, and the states of Rajasthan and Haryana and the national capital territory of Delhi to the west. On January 26, 1950, when India became a republic, the state was given its present name, Uttar Pradesh (literally, “Northern State”). Its capital is Lucknow, in the west-central part of the state. Area 93,933 square miles (243,286 square km). Pop. (2011) 199,581,477."
f2.innerHTML="Uttar Pradesh is located between 23°52’N and 31°28’N latitude and 77°3’N and 84°39’N longitude. It is divided into 18 divisions and 75 districts. On 9 November 2000, a new state, Uttaranchal (now Uttarakhand), was created from Uttar Pradesh's western Himalayan hill region. The two major rivers of the state, the Ganges and its tributary Yamuna, meet at the Triveni Sangam in Prayagraj, a Hindu pilgrimage site. Other notable rivers are Gomti and Saryu. The forest cover in the state is 6.1 per cent of the state's geographical area. The cultivable area is 82 per cent of the total geographical area, and the net area sown is 68.5 per cent of the cultivable area."
}
if(x=="land"){
    f1.innerHTML="The state can be divided into two physiographic regions: the central plains of the Ganges (Ganga) River and its tributaries (part of the Indo-Gangetic Plain) and the southern uplands. The vast majority of Uttar Pradesh lies within the Gangetic Plain, which is composed of alluvial deposits brought down from the Himalayas to the north by the vast Ganges network. Most of that area is a featureless, though fertile, plain varying in elevation from about 1,000 feet (300 metres) in the northwest to about 190 feet (60 metres) in the extreme east. The southern uplands form part of the highly dissected and rugged Vindhya Range, which rises generally toward the southeast. The elevation of that region rarely exceeds 1,000 feet."
    f2.innerHTML="The state is well drained by a number of rivers originating in either the Himalayas to the north or the Vindhya Range to the south. The Ganges and its main tributaries—the Yamuna, the Ramganga, the Gomati, the Ghaghara, and the Gandak rivers—are fed by the perpetual snows of the Himalayas. The Chambal, the Betwa, and the Ken, originating from the Vindhya Range, drain the southwestern part of the state before joining the Yamuna. The Son, also originating in the Vindhya Range, drains the southeastern part of the state and joins the Ganges beyond the state borders (in Bihar).";

}
if(x=="education"){
    f1.innerHTML="Beginning in the 1950s, both the number of schools in Uttar Pradesh and the number of students enrolled at all levels grew dramatically. In 1951 less than one-eighth of the population was literate, but six decades later that figure exceeded two-thirds. The literacy rate for females, however, continued to significantly lag behind that for males. Hindi is the medium of instruction at the primary-school level (English is used at some private schools); Hindi and English are required courses for high school students; and English is generally the medium of instruction at the university level."
    f2.innerHTML="The state has more than a dozen universities, hundreds of affiliated colleges, and several medical colleges. Some of the oldest universities in Uttar Pradesh are Aligarh Muslim University (1875), founded by Sir Sayyid Ahmad Khan; Banaras Hindu University (1916) in Varanasi, founded by Pandit Madan Mohan Malaviya; and the University of Lucknow (1921). Among the state’s many institutes for specialized studies and research are the Indian Institute of Technology at Kanpur (1959), the Indian Institute of Management at Lucknow (1984), the Indian Institute of Information Technology at Allahabad (1999), and several polytechnic schools, engineering institutes, and industrial training institutes.";
}
if(x=="economy")
{   
    f1.innerHTML="Agriculture is the mainstay of the state’s economy. The chief crops are rice, wheat, and sugarcane. Since the late 1960s, with the introduction of high-yielding varieties of seed for wheat and rice, greater availability of fertilizers, and increased use of irrigation, the state has become a major producer of food grains in the country. Many of its farmers, however, still suffer from two major constraints: small landholdings and insufficient resources to invest in the technology required for improved production. Livestock and dairy farming often provide a supplementary source of income."
    f2.innerHTML="Silica, limestone, and coal are found in considerable quantities in Uttar Pradesh. There also are small reserves of gypsum, magnesite, phosphorite, and bauxite. The national government has supported the development of coal fields in the southeastern area around Mirzapur.The state often suffers from shortages of power. Installed capacity has greatly increased since Indian independence, but the gap between supply and demand remains wide. A large amount of power is generated at the Obra-Rihand complex in southeastern Uttar Pradesh, one of India’s biggest thermal stations. Other facilities include a growing number of small and large hydroelectric power plants in various parts of the state and at a nuclear power station in the western district of Bulandshahr (near Delhi).";

}
if(x=="climate"){
f1.innerHTML="The climate of Uttar Pradesh is the tropical monsoon type, with warm weather year-round. Average high temperatures in Lucknow range from about 70 °F (low 20s C) in January to over 100 °F (38 °C) in May and June. High temperatures of about 120 °F (50 °C) have been recorded at Gonda, northwest of Faizabad.";
f2.innerHTML="Annual rainfall in the state ranges from 40–80 inches (1,000–2,000 mm) in the east to 24–40 inches (600–1,000 mm) in the west. About 90 percent of the rainfall occurs during the southwest monsoon, lasting from about June to September. With most of the rainfall concentrated during that four-month period, floods are a recurring problem and can cause fatalities and heavy damage to crops and property, particularly in the eastern part of the state. Periodic failure of monsoons results in drought conditions.";
}
if(x=="population"){
    f1.innerHTML="Some one-fifth of the state’s people are classified officially as Scheduled Castes (formerly called “untouchables”; groups that officially occupy a low position within the caste system). A much tinier proportion of the people are officially classified as Scheduled Tribes (generally applied to indigenous peoples who fall outside the predominant Indian social hierarchy). The vast majority of the people, including members of all levels of the caste hierarchy, are Hindus. Muslims are the largest religious minority. There also are relatively small groups of Sikhs, Christians, Jains, and Buddhists. Hindi is an official language of the state and the mother tongue of most of the people. Urdu, additionally an official state language, is primarily spoken by Muslims. The vernacular Hindustani is widely understood."  
    f2.innerHTML="The majority of the state’s population lives in rural areas. The rural settlements are characterized by compact villages in the western part of the state, groupings of hamlets in the eastern part, and a combination of the two in the central part. A traditional village in Uttar Pradesh is a cluster of mud huts with roofs made of thatch (such as straw) or clay tiles and few amenities of modern living. Villages near the cities, however, are likely to have cement-plastered homes, paved roads, and electricity.";
}
}
