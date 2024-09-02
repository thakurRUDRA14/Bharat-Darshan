const x = document.getElementById("map_title")
const a = document.getElementById("map_content")
const b = document.getElementById("map_img")
const f1 = document.getElementById("base1");
const f2 = document.getElementById("base2");
let y, z;

let jk = [
    { name: 'Kashmir', image: 'https://www.bontravelindia.com/wp-content/uploads/2021/12/Best-Places-to-Visit-in-Kashmir-Dal-Lake-scaled.jpg' },
    { name: 'Sri Nagar', image: 'https://www.holidify.com/images/bgImages/SRINAGAR.jpg' },
    { name: 'Mata Vaishno Devi', image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/34/98/37/lrm-export-31665251117501.jpg?w=900&h=600&s=1' },
    { name: 'Dal Lake', image: 'https://www.holidify.com/images/cmsuploads/compressed/800px-Dal_Lake_Kashmir_20200716133708.jpg' }
];
function hello(i) {
    if (i == 'up') {
        y = 'Uttar Pradesh';
        z = "Uttar Pradesh is India’s largest state in terms of population and often acts as the center of gravity of northern Indian politics. Underdeveloped and historically seen as ungovernable, Uttar Pradesh struggles with almost every challenge modern India faces: poverty, communal tension, poor infrastructure, etc. Yet the state has seen growth in recent years, and the scale of its problems offers an unbeatable opportunity to test innovative solutions";
    }

    if (i == 'uk') {
        y = 'Uttrakhand'
        z = "Uttarakhand, which was broken off from Uttar Pradesh in 2001, is divided between the plains and the Himalayan foothills and is home to some of the holiest religious sites in India.  Due to the strong growth in capital investments, Uttarakhand is one of the fastest growing states in India.  The four focus areas for investment in the state are agro-based industries, tourism, pharmaceuticals, and information technology."
    }

    if (i == 'jk') {
        y = 'Jammu and Kashmir'
        z = "The Jammu and Kashmir Reorganization Bill, 2019 converted the erstwhile state of Jammu and Kashmir into two separate union territories, namely the Union Territory of Jammu and Kashmir and the Union Territory of Ladakh. Governments at the helm of affairs in the erstwhile state and present union territory have prioritized infrastructure development within the state to improve connectivity, and better integrate it with the rest of India. Jammu & Kashmir is largely dependent on agriculture, handicrafts and tourism, although the lowland Jammu region has had more success at building"

    }
    if (i == 'pj') {
        y = 'Punjab'
        z = "Punjab (/pʌnˈdʒɑːb/ ⓘ;[8] Punjabi: [pənˈdʒɑːb] ⓘ) is a state in northwestern India. Forming part of the larger Punjab region of the Indian subcontinent, the state is bordered by the Indian states of Himachal Pradesh to the north and northeast, Haryana to the south and southeast, and Rajasthan to the southwest; by the Indian union territories of Chandigarh to the east and Jammu and Kashmir to the north. It shares an international border with Punjab, a province of Pakistan to the west.[9] The state covers an area of 50,362 square kilometres (19,445 square miles), which is 1.53% of India's total geographical area,[10] making it the 19th-largest Indian state by area out of 28 Indian states (20th largest, if Union Territories are considered)."
    }

    if (i == 'hr') {
        y = 'Haryana'
        z = "Haryana (/hʌriˈɑːnə/; Hindi: [ɦəɾɪˈjɑːɳɑː]; ISO: Hariyāṇā) is an Indian state located in the northern part of the country. It was carved out after the linguistic reorganisation of Punjab on 1 November 1966. It is ranked 21st in terms of area, with less than 1.4% (44,212 km2 or 17,070 sq mi) of India's land area.[2][8] The state capital is Chandigarh, which it shares with the neighbouring state of Punjab; and the most populous city is Faridabad, a part of the National Capital Region. The city of Gurgaon is among India's largest financial and technology hubs.[9] Haryana has 6 administrative divisions, 22 districts, 72 sub-divisions, 93 revenue tehsils, 50 sub-tehsils, 140 community development blocks, 154 cities and towns, 7,356 villages, and 6,222 villages panchayats.[8][10]"
    }
    if (i == 'dl') {
        y = 'Delhi'
        z = "Delhi,[a] officially the National Capital Territory (NCT) of Delhi, is a city and a union territory of India containing New Delhi, the capital of India. Straddling the Yamuna river, but spread chiefly to the west, or beyond its right bank, Delhi shares borders with the state of Uttar Pradesh in the east and with the state of Haryana in the remaining directions. Delhi became a union territory on 1 November 1956 and the NCT in 1995.[18] The NCT covers an area of 1,484 square kilometres (573 sq mi).[5] According to the 2011 census, Delhi's city proper population was over 11 million,[6][19] while the NCT's population was about 16.8 million.[7]"
    }
    if (i == 'hp') {
        y = 'Himachal Pardesh'
        z = "Himachal Pradesh (/hɪˌmɑːtʃəl prəˈdɛʃ/; Hindi: [ɦɪˈmäːtʃəl pɾəˈd̪eːʃ] ⓘ; lit. Snow-laden Mountain Province[9]) is a state in the northern part of India. Situated in the Western Himalayas, it is one of the thirteen mountain states and is characterised by an extreme landscape featuring several peaks and extensive river systems. Himachal Pradesh is the northernmost state of India and shares borders with the union territories of Jammu and Kashmir and Ladakh to the north, and the states of Punjab to the west, Haryana to the southwest, Uttarakhand to the southeast and a very narrow border with Uttar Pradesh to the south. The state also shares an international border to the east with the Tibet Autonomous Region in China."
    }
    if (i == 'mz') {
        y = 'Mizoram'
        z = "Mizoram (English: /mɪˈzɔːrəm/ ⓘ) is a state in northeastern India, with Aizawl as its seat of government and largest city. Within India's northeast region, it is the southernmost state, sharing borders with three of the Seven Sister States, namely Tripura, Assam and Manipur, and also shares a 722-kilometre (449 mi) border with the neighbouring countries of Bangladesh and Myanmar.[5] The state spans over an area of approximately 21,087 square kilometres,[6] of which approximately 91% is forested.[7] With an estimated population of 1.25 million in 2023, it is the second least populous state in the country.[8]"
    }
    if (i == 'mn') {
        y = 'Manipur'
        z = "Manipur (/ˌmʌnɪˈpʊər/,[8] US also /ˌmænɪˈpʊər/;[9] Meitei: Kangleipak[a][10][11][12]) is a state in northeast India, with the city of Imphal as its capital.[13] It is bounded by the Indian states of Nagaland to the north, Mizoram to the south and Assam to the west. It also borders two regions of Myanmar, Sagaing Region to the east and Chin State to the south. The state covers an area of 22,327 km2 (8,621 sq mi). The official and most widely spoken language is the Meitei language (officially known as Manipuri). Native to the Meitei people, it is also used as a lingua franca by smaller communities, who speak a variety of other Tibeto-Burman languages.[14]"
    }
    if (i == 'mp') {
        y = 'Madhya Pardesh'
        z = "Madhya Pradesh (/ˌmɑːdjə prəˈdɛʃ/,[9] Hindi: [ˈməd̪ʱjə pɾəˈdeːʃ] ⓘ; meaning 'central province') is a state in central India. Its capital is Bhopal, and the largest city is Indore, with Gwalior, Jabalpur, Ujjain, Dewas, Sagar, and Rewa being the other major cities. Madhya Pradesh is the second largest Indian state by area and the fifth largest state by population with over 72 million residents. It borders the states of Uttar Pradesh to the northeast, Chhattisgarh to the east, Maharashtra to the south, Gujarat to the west, and Rajasthan to the northwest.[10]"
    }
    if (i == 'tl') {
        y = 'Telegram'
        z = "Andhra Pradesh (English: /ˌɑːndrə prəˈdeɪʃ/, Telugu: [aːndʱrɐ prɐdeːʃ] ⓘ abbr. AP) is a state in the southern coastal region of India. It is the seventh-largest state and the tenth-most populous in the country. Telugu, one of India's classical languages, is the primary official language and the most widely spoken language. Amaravati is the state capital, while the largest city is Visakhapatnam. The state shares borders with Telangana to the northwest, Odisha to the northeast, Chhattisgarh to the north, Karnataka to the southwest, Tamil Nadu to the south, and the Bay of Bengal to the southeast. It has the second-longest coastline in India at about 974 km (605 mi)."
    }
    if (i == 'ap') {
        y = 'Andhra Pradesh'

    }
    if (i == 'jk') {
        y = 'Jammu and Kashmir'
        z = "Jammu[b] and Kashmir[c] is a region administered by India as a union territory[1] and consists of the southern portion of the larger Kashmir region, which has been the subject of a dispute between India and Pakistan since 1947 and between India and China since 1959.[3] The Line of Control separates Jammu and Kashmir from the Pakistani-administered territories of Azad Kashmir and Gilgit-Baltistan in the west and north. It lies to the north of the Indian states of Himachal Pradesh and Punjab and to the west of Ladakh which is administered by India as a union territory.[2]"
    }
    if (i == 'ar') {
        y = 'Arunachal Pradesh'
        z = "Arunachal Pradesh (/ərʊˌnɑːtʃəl prəˈdeɪʃ/,[19] lit. 'Dawn-Lit Mountain Province')[20] is a state in northeast India. It was formed from the North-East Frontier Agency (NEFA) region, and India declared it as a state on 20 February 1987. Itanagar is its capital and largest town. It borders the Indian states of Assam and Nagaland to the south. It shares international borders with Bhutan in the west, Myanmar in the east, and a disputed 1,129 km border with China's Tibet Autonomous Region in the north at the McMahon Line.[21] Arunachal Pradesh is claimed by China as part of the Tibet Autonomous Region;[22] China occupied some regions of Arunachal Pradesh in 1962 but later withdrew its forces.[23][24]"
    }
    if (i == 'an') {
        y = 'Andaman and Nicobar Islands'
        z = "The Andaman and Nicobar Islands is a union territory of India. It consists of 836 islands (of which only 31 are inhabited) grouped into two island groups: the northern Andaman Islands and the southern Nicobar Islands, separated by a 150 km (93 mi) wide channel. Port Blair is the capital and largest city of the territory, located about 1,190 km (740 mi) from Chennai and 1,255 km (780 mi) from Kolkata in mainland India. The islands are sandwiched between the Bay of Bengal to the west and the Andaman Sea to the east with the northern-most point located 901 km (560 mi)"
    }
    if (i == 'as') {
        y = 'Assam'
        z = "Assam (/əˈsæm, æˈsæm/ ə-SAM, a-SAM,[11][12] Assamese: [ɔ'xɔm] ⓘ) is a state in northeastern India, south of the eastern Himalayas along the Brahmaputra and Barak River valleys. Assam covers an area of 78,438 km2 (30,285 sq mi). It is the second largest state in northeastern India by area and the largest in terms of population, with more than 31 million inhabitants. The state is bordered by Bhutan and Arunachal Pradesh to the north; Nagaland and Manipur to the east; Meghalaya, Tripura, Mizoram and Bangladesh to the south; and West Bengal to the west via the Siliguri Corridor, a 22-kilometre-wide (14 mi) strip of land that connects the state to the rest of India."
    }
    if (i == 'br') {
        y = 'Bihar'
        z = "Bihar (/bɪˈhɑːr/; Hindi pronunciation: [bɪˈɦaːr] ⓘ) is a state in Eastern India. It is the third largest state by population, the 12th largest by area, and the 15th largest by GDP in 2021.[10][11][12] Bihar borders Uttar Pradesh to its west, Nepal to the north, the northern part of West Bengal to the east, and Jharkhand to the south. Bihar is split by the river Ganges, which flows from west to east.[3] On 15 November 2000, southern Bihar was ceded to form the new state of Jharkhand.[13] Only 11.27% of the population of Bihar lives in urban areas as per a 2020 report.[14] Additionally, almost 58% of Biharis are below the age of 25, giving Bihar the highest proportion of young people of any Indian state.[15] The official language is Hindi, which shares official status alongside that of Urdu"
    }
    if (i == 'ct') {
        y = 'Chandigarh'
        z = "Chandigarh (/ˌtʃʌndɪˈɡɑːr/) is a city and union territory in northern India, serving as the shared capital of the states of Punjab and Haryana. Situated near the foothills of the Himalayas, it borders Haryana to the east and Punjab in the remaining directions. Chandigarh constitutes the bulk of the Chandigarh Capital Region or Greater Chandigarh, which also includes the adjacent satellite cities of Panchkula in Haryana and Mohali in Punjab. It is located 260 km (162 miles) north of New Delhi and 229 km (143 miles) southeast of Amritsar."
    }
    if (i == 'dd') {
        y = 'Daman and Diu'
        z = "Daman and Diu (/dəˈmɑːn ... ˈdiːuː/; locallyⓘ) was a union territory in northwestern India. With an area of 112 km2 (43 sq mi), it was the smallest administrative subdivision of India on the mainland. The territory comprised two districts, Daman and Diu island, geographically separated by the Gulf of Khambat. The state of Gujarat and the Arabian Sea bordered the territory. A Portuguese colony since the 1500s, the territories were taken by India with the Annexation of Goa in 1961. Daman and Diu were administered as part of the union territory of Goa, Daman and Diu between 1961 and 1987. After the Goa Opinion Poll, they became a separate union territory. "
    }
    if (i == 'dn') {
        y = 'Dadra and Nagar Haveli'
        z = "Dadra and Nagar Haveli is a district of the union territory of Dadra and Nagar Haveli and Daman and Diu in western India. It is composed of two separate geographical entities: Nagar Haveli, wedged in between Maharashtra and Gujarat states 1 kilometre (0.62 mi) to the north-west, and the smaller enclave of Dadra, which is surrounded by Gujarat. Silvassa is the administrative headquarters of Dadra and Nagar Haveli."
    }
    if (i == 'ga') {
        y = 'Goa'
        z = "Goa (Konkani pronunciation: [ɡõːj], Portuguese: [ˈɡoɐ] ⓘ) is a state on the southwestern coast of India within the Konkan region, geographically separated from the Deccan highlands by the Western Ghats.[9][10] It is bound by the Indian states of Maharashtra to the north, and Karnataka to the east and south, with the Arabian Sea in the west. It is India's smallest state by area and fourth-smallest by population. Goa has the highest GDP per capita among all Indian states,[6][11] two and a half times as high as the GDP per capita of the country as a whole.[12] "
    }
    if (i == 'lw') {
        y = 'Lakshadweep'
        z = "Lakshadweep (Malayalam: [lɐkʂɐd̪βʷiːbɨ̆]) is a union territory of India. It is an archipelago of 36 islands[b] divided into three island subgroups: the Laccadive Islands in the middle with the Amindivi Islands in the north separated roughly by the 11th parallel north and the atoll of Minicoy to the south separated by the Nine Degree Channel along the 9th parallel north. The islands are sandwiched between the Arabian Sea to the west and the Laccadive Sea to the east with the islands located about 220–440 km (140–270 mi) off the Malabar Coast of mainland India."
    }
    if (i == 'kl') {
        y = 'Kerala'
        z = "Kerala (English: /ˈkɛrələ/ ⓘ/ KERR-ə-lə), called Keralam in Malayalam (Malayalam: [keːɾɐɭɐm] ⓘ), is a state on the Malabar Coast of India.[15] It was formed on 1 November 1956, following the passage of the States Reorganisation Act, by combining Malayalam-speaking regions of the erstwhile regions of Cochin, Malabar, South Canara, and Travancore.[16][17] Spread over 38,863 km2 (15,005 sq mi), Kerala is the 21st largest Indian state by area. It is bordered by Karnataka to the north and northeast, Tamil Nadu to the east and south, and the Lakshadweep Sea[18] to the west. "
    }
    if (i == 'ka') {
        y = 'Karnataka'
        z = "Karnataka (/kərˈnɑːtəkə/; ISO: Karnāṭaka, Kannada: [kɐɾˈnaːʈɐkɐ]) is a state in the southwestern region of India. It was formed as Mysore State on 1 November 1956, with the passage of the States Reorganisation Act, and renamed Karnataka in 1973. The state is bordered by the Lakshadweep Sea to the west, Goa to the northwest, Maharashtra to the north, Telangana to the northeast, Andhra Pradesh to the east, Tamil Nadu to the southeast, and Kerala to the southwest. With 61,130,704 inhabitants at the 2011 census, Karnataka is the eighth-largest state by population, comprising 31 districts."
    }
    if (i == 'jh') {
        y = 'Jharkhand'
        z = "Jharkhand (/ˈdʒɑːrkənd/;[8] Hindi: [d͡ʒʱɑːɾkʰəɳɖ]; lit. 'the land of forests') is a state in eastern India.[9] The state shares its border with the states of West Bengal to the east, Chhattisgarh to the west, Uttar Pradesh to the northwest, Bihar to the north and Odisha to the south. It is the 15th largest state by area, and the 14th largest by population. Hindi is the official language of the state.[3] The city of Ranchi is its capital and Dumka its sub-capital. The state is known for its waterfalls, hills and holy places; Baidyanath Dham, Parasnath, Dewri and Rajrappa are major religious sites.[10][11] "
    }
    if (i == 'gj') {
        y = 'Gujarat'
        z = "Gujarat (/ˌɡʊdʒəˈrɑːt/ GUUJ-ə-RAHT, Gujarati: [ˈɡudʒəɾat̪] ⓘ) is a state along the western coast of India. Its coastline of about 1,600 km (990 mi) is the longest in the country, most of which lies on the Kathiawar peninsula. Gujarat is the fifth-largest Indian state by area, covering some 196,024 km2 (75,685 sq mi); and the ninth-most populous state, with a population of 60.4 million in 2011. It is bordered by Rajasthan to the northeast, Dadra and Nagar Haveli and Daman and Diu to the south, Maharashtra to the southeast, Madhya Pradesh to the east, and the Arabian Sea and the Pakistani province of Sindh to the west. "
    }
    if (i == 'mh') {
        y = 'Maharashtra'
        z = "Maharashtra (ISO: Mahārāṣṭra; Marathi: [məhaːɾaːʂʈɾə] ⓘ) is a state in the western peninsular region of India occupying a substantial portion of the Deccan Plateau. It is bordered by the Arabian Sea to the west, the Indian states of Karnataka and Goa to the south, Telangana to the southeast and Chhattisgarh to the east, Gujarat and Madhya Pradesh to the north, and the Indian union territory of Dadra and Nagar Haveli and Daman and Diu to the northwest.[17] Maharashtra is the second-most populous state in India"
    }
    if (i == 'mg') {
        y = 'Meghalaya'
        z = "Meghalaya (/ˌmeɪɡəˈleɪə/,[6] or /meɪˈɡɑːləjə/,[7] lit. the abode of clouds[8]) is a state in northeast India. Meghalaya was formed on 21 January 1972 by carving out two districts from the state of Assam: (a) the United Khasi Hills and Jaintia Hills and (b) the Garo Hills.[9] The estimated population of Meghalaya in 2014 was 3,211,474.[10] Meghalaya covers an area of approximately 22,429 square kilometres, with a length-to-breadth ratio of about 3:1.[11]"
    }
    if (i == 'nl') {
        y = 'Nagaland'
        z = "Nagaland (/ˈnɑːɡəlænd/) is a state in the north-eastern region of India. It is bordered by the Indian states of Arunachal Pradesh to the north, Assam to the west, Manipur to the south, and the Naga Self-Administered Zone of the Sagaing Region of Myanmar (Burma) to the east. Its capital city is Kohima and its largest city is the twin Chümoukedima–Dimapur. The state has an area of 16,579 square kilometres (6,401 sq mi) with a population of 1,980,602 as per the 2011 Census of India, making it one of the smallest states of India.[4]"
    }
    if (i == 'or') {
        y = 'Odisha'
        z = "Odisha (English: /əˈdɪsə/,[17] Odia: [oɽiˈsa] ⓘ), formerly Orissa ([18] the official name until 2011), is an Indian state located in Eastern India. It is the eighth-largest state by area, and the eleventh-largest by population, with over 41 million inhabitants. The state also has the third-largest population of Scheduled Tribes in India.[19] It neighbours the states of Jharkhand and West Bengal to the north, Chhattisgarh to the west, and Andhra Pradesh to the south. Odisha has a coastline of 485 kilometres (301 mi) along the Bay of Bengal in the Indian Ocean.[20]"
    }
    if (i == 'rj') {
        y = 'Rajastan';
        z = "Rajasthan (/rɑːdʒəˈstɑːn/; Hindi: [raːdʒəsˈtʰaːn] ⓘ; lit. 'Land of Kings')[12] is a state in northwestern India.[13][14][15] It covers 342,239 square kilometres (132,139 sq mi) or 10.4 per cent of India's total geographical area. It is the largest Indian state by area and the seventh largest by population. It is on India's northwestern side, where it comprises most of the wide and inhospitable Thar Desert (also known as the Great Indian Desert) and shares a border with the Pakistani provinces of Punjab to the northwest and Sindh to the west, along the Sutlej-Indus River valley"
    }

    if (i == 'tri') {

        y = 'Tripura'
        z = "Tripura (/ˈtrɪpʊrə, -ərə/)[10] is a state in Northeast India. The third-smallest state in the country, it covers 10,491 km2 (4,051 sq mi); and the seventh-least populous state with a population of 3.67 million.[11] It is bordered by Assam and Mizoram to the east and by Bangladesh to the north, south and west.[12] Tripura is divided into 8 districts and 23 sub-divisions, where Agartala is the capital and the largest city in the state. Tripura has 19 different tribal communities[13] with a majority Bengali population. Bengali, English and Kokborok are the state's official languages.[7]"
    }
    if (i == 'tn') {
        y = 'Tamil Nadu'
        z = "Tamil Nadu (/ˌtæmɪl ˈnɑːduː/; Tamil: [ˈtamiɻ ˈnaːɽɯ] ⓘ, abbr. TN) is the southernmost state of India. The tenth largest Indian state by area and the sixth largest by population, Tamil Nadu is the home of the Tamil people, who speak the Tamil language, one of the longest surviving classical languages and which serves as its official language. The capital and largest city is Chennai."

    }
    if (i == 'wb') {
        y = 'West Bengal'
        z = "West Bengal (/bɛnˈɡɔːl/, Bengali: Poshchim Bongo, pronounced [ˈpoʃtʃim ˈbɔŋɡo] ⓘ, abbr. WB) is a state in the eastern portion of India. It is situated along the Bay of Bengal, along with a population of over 91 million inhabitants within an area of 88,752 km2 (34,267 sq mi) as of 2011. The population estimate as of 2023 is 102,552,787.[12] West Bengal is the fourth-most populous and thirteenth-largest state by area in India, as well as the eighth-most populous country subdivision of the world. As a part of the Bengal region of the Indian subcontinent, it borders Bangladesh in the east, and Nepal and Bhutan in the north."

    }
    x.innerHTML = y;
    a.innerHTML = z;
    b.innerHTML = `<section class="container">
      <div class="card">
        <div class="image">
          <img src="${jk.image[1]}" alt="" />
        </div>
        <h2>${jk.name[1]}</h2>
      </div>
      <div class="card">
        <div class="image">
         <img src="images/img2.jpg" alt="" />
        </div>
        <h2>Someone Name</h2>
      </div>
      <div class="card">
        <div class="image">
          <img src="images/img3.jpg" alt="" />
        </div>
        <h2>Someone Name</h2>
      </div>
      <div class="card">
        <div class="image">
          <img src="images/img4.jpg" alt="" />
        </div>
        <h2>Someone Name</h2>
      </div>
    </section>`
}
var swiper = new Swiper(".slide-container", {
    slidesPerView: 4,
    spaceBetween: 20,
    sliderPerGroup: 4,
    loop: true,
    centerSlide: "true",
    fade: "true",
    grabCursor: "true",
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        1000: {
            slidesPerView: 4,
        },
    },
});



let m;
function des(m) {
    if (m == "General") {
        f1.innerHTML = "India, officially the Republic of India (ISO: Bhārat Gaṇarājya),[21] is a country in South Asia. It is the seventh-largest country by area; the most populous country with effect from June 2023;[22][23] and from the time of its independence in 1947, the world's most populous democracy.[24][25][26] Bounded by the Indian Ocean on the south, the Arabian Sea on the southwest, and the Bay of Bengal on the southeast, it shares land borders with Pakistan to the west;[j] China, Nepal, and Bhutan to the north; and Bangladesh and Myanmar to the east. In the Indian Ocean, India is in the vicinity of Sri Lanka and the Maldives; its Andaman and Nicobar Islands share a maritime border with Thailand, Myanmar, and Indonesia."
        f2.innerHTML = "Modern humans arrived on the Indian subcontinent from Africa no later than 55,000 years ago.[28][29][30] Their long occupation, initially in varying forms of isolation as hunter-gatherers, has made the region highly diverse, second only to Africa in human genetic diversity.[31] Settled life emerged on the subcontinent in the western margins of the Indus river basin 9,000 years ago, evolving gradually into the Indus Valley Civilisation of the third millennium BCE.[32] By 1200 BCE, an archaic form of Sanskrit, an Indo-European language, had diffused into India from the northwest.[33][34] Its evidence today is found in the hymns of the Rigveda. Preserved by an oral tradition that was resolutely vigilant, the Rigveda records the dawning of Hinduism in India."
    }
    if (m == "land") {
        f1.innerHTML = "India has a unique culture and is one of the oldest and greatest civilizations of the world. India has achieved all-round socio-economic progress since its Independence. India covers an area of 32,87,263 sq. km, extending from the snow-covered Himalayan heights to the tropical rain forests of the south. As the 7th largest country in the world, India stands apart from the rest of Asia, marked off as it is by mountains and the sea, which give the country a distinct geographical entity. Bounded by the Great Himalayas in the north, it stretches southwards and at the Tropic of Cancer, tapers off into the Indian Ocean between the Bay of Bengal on the east and the Arabian Sea on the west."
        f2.innerHTML = "Lying entirely in the northern hemisphere, the mainland extends between latitudes 8° 4' and 37° 6' north, longitudes 68° 7' and 97° 25' east and measures about 3,214 km from north to south between the extreme latitudes and about 2,933 km from east to west between the extreme longitudes. It has a land frontier of about 15,200 km. The total length of the coastline of the mainland, Lakshadweep Islands and Andaman & Nicobar Islands is 7,516.6 km.";

    }
    if (m == "education") {
        f1.innerHTML = "Education in India is primarily managed by the state-run public education system, which falls under the command of the government at three levels: central, state and local.[7] Under various articles of the Indian Constitution and the Right of Children to Free and Compulsory Education Act, 2009, free and compulsory education is provided as a fundamental right to children aged 6 to 14. The approximate ratio of the total number of public schools to private schools in India is 10:3.[8]Education in India covers different levels and types of learning, such as early childhood education, primary education, secondary education, higher education, and vocational education. It varies significantly according to different factors, such as location (urban or rural), gender, caste, religion, language, and disability.."
        f2.innerHTML = "Education in India has much room for growth, such as improving access to education, increasing the quality of education,[9] reducing disparities, lowering dropout rates, increasing enrolment and completion rates,[10] enhancing learning outcomes and employability, strengthening governance and accountability, promoting innovation and technology, and addressing the impact of COVID-19 pandemic. It is influenced by various policies and programmes at the national and state levels, such as the National Education Policy 2020, the Samagra Shiksha Abhiyan, the Rashtriya Madhyamik Shiksha Abhiyan, the Midday Meal Scheme, the Beti Bachao Beti Padhao Scheme, and the National Digital Education Architecture. It is also supported by various stakeholders and partners, such as UNICEF, UNESCO, World Bank, civil society organizations, academic institutions, private sector entities, and media outlets.";
    }
    if (m == "economy") {
        f1.innerHTML = "The economy of India is a developing mixed economy with a notable public sector in strategic sectors.[5] It is the world's fifth-largest economy by nominal GDP and the third-largest by purchasing power parity (PPP); on a per capita income basis, India ranked 136th by GDP (nominal) and 125th by GDP (PPP).[60] From independence in 1947 until 1991, successive governments followed the Soviet model and promoted protectionist economic policies, with extensive Sovietization, state intervention, demand-side economics, natural resources, bureaucrat driven enterprises and economic regulation. This is characterised as dirigism, in the form of the Licence Raj.[61][62] The end of the Cold War and an acute balance of payments crisis in 1991 led to the adoption of a broad economic liberalisation in India and indicative planning.[63][64] "
        f2.innerHTML = "Since the start of the 21st century, annual average GDP growth has been 6% to 7%.,[5] India has about 1,900 public sector company,[65] Indian state has complete control and ownership of railways, highways; majority control and stake in banking,[66] insurance,[67] farming,[68] dairy, fertilizers & chemicals,[69] airports,[70] nuclear, mining, digitization, defense, steel, rare earths, water, electricity, oil and gas industries and power plants,[71] and has substantial control over digitalization, Broadband as national infrastructure, telecommunication, supercomputing, space, port and shipping industries,[72] among other industries, were effectively nationalised in the mid-1950s.[73][61][62]";

    }
    if (m == "climate") {
        f1.innerHTML = "The climate of India consists of a wide range of weather conditions across a vast geographic scale and varied topography. Based on the Köppen system, India encompasses a diverse array of climatic subtypes. These range from arid and semi-arid regions in the west to highland, sub-arctic, tundra, and ice cap climates in the northern Himalayan regions, varying with elevation. The northern lowlands experience subtropical conditions, with some areas at higher altitudes, like Srinagar, touching continental climates. In contrast, much of the south and the east exhibit tropical climate conditions, which support lush rainforests in these territories. Many regions have starkly different microclimates, making it one of the most climatically diverse countries in the world. The country's meteorological department follows the international standard of four seasons with some local adjustments: winter (December to February), summer (March to May), monsoon or rainy season (June to September), and a post-monsoon period (October and November).";
        f2.innerHTML = "India's geography and geology are climatically pivotal: the Thar Desert in the northwest and the Himalayas in the north work in tandem to create a culturally and economically important monsoonal regime. As Earth's highest and most massive mountain range, the Himalayas bar the influx of frigid katabatic winds from the icy Tibetan Plateau and northerly Central Asia. Most of North India is thus kept warm or is only mildly chilly or cold during winter; the same thermal dam keeps most regions in India hot in summer. The climate in South India is generally warmer, and more humid due to its coastlines. However some hill stations in South India such as Ooty are well known for their cold climate.";
    }
    if (m == "population") {
        f1.innerHTML = "India is the most populous country in the world with one-sixth of the world's population. According to estimates from the United Nations (UN), India has overtaken China as the country with the largest population in the world, with a population of 1,425,775,850 at the end of April 2023.[6][7][8][9]Between 1975 and 2010, the population doubled to 1.2 billion, reaching the billion mark in 2000. According to the UN's World Population dashboard, India's population now stands at slightly over 1.428 billion, edging past China's population of 1.425 billion people, as reported by the news agency Bloomberg.[9] In 2015, India's population was predicted to reach 1.7 billion by 2050.[10][11] In 2017 its population growth rate was 0.98%, ranking 112th in the world; in contrast, from 1972 to 1983, India's population grew by an annual rate of 2.3%.[12]"
        f2.innerHTML = "In 2022, the median age of an Indian was 28.7 years,[13] compared to 38.4 for China and 48.6 for Japan; and, by 2030; India's dependency ratio will be just over 0.4.[14] However, the number of children in India peaked more than a decade ago and is now falling. The number of children under the age of five peaked in 2007, and since then the number has been falling. The number of Indians under 15 years old peaked slightly later (in 2011) and is now also declining.[15]India has many ethnic groups,[16] and every major religion is represented, as are four major families of languages ";
    }
}

