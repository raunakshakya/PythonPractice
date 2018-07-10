myData = [
[32.9857619,-96.7500993, '800 W Campbell Rd, Richardson, TX 75080, USA'],
[50.06688579999999,19.9136192, 'aleja Adama Mickiewicza 30, 30-059 Kraków, Poland'],
[52.2394019,21.0150792, 'Krakowskie Przedmieście 5, 00-068 Warszawa, Poland'],
[30.018923,31.499674, 'AUC Avenue، New Cairo، Cairo Governorate 11835, Egypt'],
[33.4242399,-111.9280527, 'Tempe, AZ 85281, USA'],
[38.0399391,23.8030901, 'Monumental Plaza, Building C, 1st Floor, Leof. Kifisias 44, Marousi 151 25, Greece'],
[28.3639976,75.58696809999999, 'VidyaVihar Campus, street number 41, Pilani, Rajasthan 333031, India'],
[6.8946472,3.7174267, 'Ilishan-Remo, Nigeria'],
[25.2677203,82.99125819999999, 'Ajagara, Varanasi, Uttar Pradesh 221005, India'],
[12.9527314,77.5157387, 'Gnana Bharathi Campus, Gnana Bharathi Main Rd, Teachers Colony, Nagarbhavi, Bengaluru, Karnataka 560056, India'],
[31.5497007,-97.1143046, '1301 S University Parks Dr, Waco, TX 76706, USA'],
[39.9619537,116.3662615, '19 Xinjiekou Outer St, BeiTaiPingZhuang, Haidian Qu, Beijing Shi, China, 100875'],
[53.8938988,27.5460609, 'Praspyekt Nyezalyezhnastsi 4, Minsk, Belarus'],
[44.8184339,20.4575676, 'Studentski trg 1, Beograd, Serbia'],
[42.5030333,-89.0309048, '700 College St, Beloit, WI 53511, USA'],
[53.8938988,27.5460609, 'Praspyekt Nyezalyezhnastsi 4, Minsk, Belarus'],
[31.262218,34.801461, 'שד בן-גוריון 1, Beersheba, Israel'],
[10.6779085,78.74454879999999, 'Palkalaiperur, Tiruchirappalli, Tamil Nadu 620024, India'],
[42.3504997,-71.1053991, 'Boston, MA 02215, USA'],
[35.3050053,-120.6624942, 'San Luis Obispo, CA 93407, USA'],
[34.1821786,-117.3235324, '5500 University Pkwy, San Bernardino, CA 92407, USA'],
[51.5210038,-0.1746353, '25 Paddington Green, London W2 1NB, UK'],
[40.8075355,-73.9625727, '116th St & Broadway, New York, NY 10027, United States'],
[52.074041,-0.6282032, 'College Rd, Bedford MK43 0AL, UK'],
[50.1030364,14.3912841, 'Zikova 1903/4, 166 36 Praha 6, Czechia'],
[43.7044406,-72.2886935, 'Hanover, NH 03755, USA'],
[37.3188255,-122.0449458, 'Stevens Creek Blvd, Cupertino, CA 95014, USA'],
[51.3767548,7.495643100000001, 'Universitätsstraße 25, 58097 Hagen, Germany'],
[48.4331922,35.0427966, 'Haharina Ave, 72, Dnipropetrovsk, Dnipropetrovsk Oblast, Ukraine, 49000'],
[38.4306911,27.1369201, 'Kültür Mahallesi, Cumhuriyet Blv No:144, 35220 Konak/İzmir, Turkey'],
[39.9566127,-75.18994409999999, '3141 Chestnut St, Philadelphia, PA 19104, USA'],
[30.2849185,-97.7340567, 'Austin, TX 78712, USA'],
[36.0014258,-78.9382286, 'Durham, NC 27708, USA'],
[45.786447,4.764139000000001, '23 Avenue Guy de Collongue, 69130 Écully, France'],
[48.7085753,2.163919, '3 Rue Joliot Curie, 91190 Gif-sur-Yvette, France'],
[36.1027527,-79.50235669999999, '50 Campus Drive, Elon, NC 27244, USA'],
[-2.1481458,-79.9644885, 'Vía Perimetral 5, Guayaquil, Ecuador'],
[51.1895079,6.795360499999999, 'Gebäude 23.31/32, Universitätsstraße, 40225 Düsseldorf, Germany'],
[47.72336,13.0871409, 'Urstein Süd 1, 5412 Puch bei Hallein, Austria'],
[-23.6958721,-46.54702839999999, 'Av. Pereira Barreto, 400 - Baeta Neves, São Bernardo do Campo - SP, 09751-000, Brazil'],
[45.2461012,19.8516968, 'Trg Dositeja Obradovića 6, Novi Sad 106314, Serbia'],
[40.7529512,-73.4267093, '2350 Broadhollow Rd, Farmingdale, NY 11735, USA'],
[-19.8690878,-43.9663841, 'Av. Pres. Antônio Carlos, 6627 - Pampulha, Belo Horizonte - MG, 31270-901, Brazil'],
[26.3734854,-80.1022151, '777 Glades Rd, Boca Raton, FL 33431, USA'],
[42.7793667,-72.0560856, '40 University Dr, Rindge, NH 03461, USA'],
[26.1546284,91.66469889999999, 'Jalukbari, Guwahati, Assam, India'],
[38.8314875,-77.3119442, '4400 University Dr, Fairfax, VA 22030, USA'],
[38.8977953,-77.0129087, '600 New Jersey Ave NW, Washington, DC 20001, USA'],
[33.753068,-84.38528190000001, 'Atlanta, GA 30302, USA'],
[42.9097484,-85.7630885, 'Michigan, USA'],
[50.8748769,4.7077753, 'Andreas Vesaliusstraat 13, 3000 Leuven, Belgium'],
[21.0056183,105.8433475, '1 Đại Cồ Việt, Bách Khoa, Hai Bà Trưng, Hà Nội, Vietnam'],
[31.7945578,35.2414009, 'Jerusalem'],
[17.445388,78.3482302, 'Near DLF Building, Gachibowli, Hyderabad, Telangana 500032, India'],
[26.5123388,80.2329, 'Kalyanpur, Kanpur, Uttar Pradesh 208016, India'],
[59.3954769,24.6643815, 'Raja 4, 12616 Tallinn, Estonia'],
[45.4376934,12.3223365, 'Santa Croce, 191, 30135 Venezia VE, Italy'],
[41.8348731,-87.6270059, '10 W 35th St, Chicago, IL 60616, USA'],
[41.5333799,-88.0970978, '500 Wilcox St, Joliet, IL 60435, USA'],
[22.3149835,87.3111337, 'IIT Kharagpur, Kharagpur, West Bengal 721302, India'],
[23.8143819,86.44120219999999, 'Police Line, Sardar Patel Nagar, Hirapur, Dhanbad, Jharkhand 826004, India'],
[39.1745704,-86.5129458, '107 S Indiana Ave, Bloomington, IN 47405, USA'],
[39.1745704,-86.5129458, '107 S Indiana Ave, Bloomington, IN 47405, USA'],
[12.3779749,-1.5470898, 'Ouagadougou, Burkina Faso'],
[18.487876,-69.96229199999999, 'Av. de Los Próceres 49, Santo Domingo 10602, Dominican Republic'],
[17.445388,78.3482302, 'Near DLF Building, Gachibowli, Hyderabad, Telangana 500032, India'],
[52.2766124,104.2777287, 'Ulitsa Karla Marksa, 1, Irkutsk, Irkutskaya oblast, Russia, 664003'],
[22.5009615,88.36990089999999, '196, Raja Subodh Chandra Mallick Rd, Jadavpur University Campus Area, Jadavpur, Kolkata, West Bengal 700032, India'],
[17.49328,78.39163839999999, 'Kukatpally, Hyderabad, Telangana 500085, India'],
[28.540214,77.1661949, 'New Mehrauli Road, New Delhi, Delhi 110067, India'],
[32.4950392,35.9912257, 'Ar Ramtha, Irbid، Jordan'],
[39.1974437,-96.5847249, 'Manhattan, KS 66506, USA'],
[42.290035,-85.598145, '1200 Academy St, Kalamazoo, MI 49006, USA'],
[54.9039509,23.9594779, 'Studentų g. 65, Kaunas 51369, Lithuania'],
[54.898991,23.912825, 'K. Donelaičio g. 73, Kaunas 44249, Lithuania'],
[55.790447,49.1214349, 'Kremlyovskaya St, 18, Kazan, Respublika Tatarstan, Russia, 420008'],
[41.1490629,-81.34146489999999, '800 E Summit St, Kent, OH 44240, USA'],
[13.6511842,100.4941512, '126 Pracha Uthit Rd, Khwaeng Bang Mot, Khet Thung Khru, Krung Thep Maha Nakhon 10140, Thailand'],
[50.4488824,30.4572542, 'просп. Перемоги, 37, Kyiv, Ukraine, 03056'],
[50.4488824,30.4572542, 'просп. Перемоги, 37, Kyiv, Ukraine, 03056'],
[50.4420868,30.5104023, 'Volodymyrska St, 60, Kyiv, Ukraine, 01033'],
[46.4667708,-80.9742332, '935 Ramsey Lake Rd, Sudbury, ON P3E 2C6, Canada'],
[51.7537146,19.4517176, 'Stefana Żeromskiego 116, 90-924 Łódź, Poland'],
[49.8406108,24.0225099, 'Universytetska St, 1, Lviv, Lviv Oblast, Ukraine, 79000'],
[22.322474,73.18092299999999, 'Pratapgunj, Vadodara, Gujarat 390002, India'],
[13.0660293,80.28317190000001, 'Navalar Nagar, Chepauk, Triplicane, Chennai, Tamil Nadu 600005, India'],
[53.4221438,58.9826396, 'Prospekt Karla Marksa, 38, Magnitogorsk, Chelyabinskaya oblast, Russia, 455000'],
[34.304073,48.8452846, 'Hamadan Province, Malayer, University Blvd, Iran'],
[39.4145456,-81.4491067, '215 5th St, Marietta, OH 45750, USA'],
[24.4330231,54.619113, 'Near Home WTC AUH, Airport Road، Masdar City - Abu Dhabi - United Arab Emirates'],
[44.8195126,20.459315, 'Studentski trg 16, Beograd 105104, Serbia'],
[42.701848,-84.4821719, '220 Trowbridge Rd, East Lansing, MI 48824, USA'],
[39.8910203,32.7780027, 'Üniversiteler Mh., Eskişehir Yolu No:1, 06800 Çankaya/Ankara, Turkey'],
[37.9539358,-91.7720046, '106 Parker Hall 300 W. 13th Street, Rolla, MO 65409, USA'],
[-37.9105238,145.1362182, 'Scenic Blvd & Wellington Road, Clayton VIC 3800, Australia'],
[-37.9105238,145.1362182, 'Scenic Blvd & Wellington Road, Clayton VIC 3800, Australia'],
[-38.311211,146.429409, 'Northways Rd, Churchill VIC 3842, Australia'],
[25.6515649,-100.28954, 'Av. Eugenio Garza Sada 2501 Sur, Tecnológico, 64849 Monterrey, N.L., Mexico'],
[55.649567,37.6638742, 'Kashira Highway, 31, Moskva, Russia, 115409'],
[55.9297243,37.5199434, 'Institutskiy Pereulok, 9, Dolgoprudny, Moskovskaya oblast, Russia, 141701'],
[55.70393490000001,37.5286696, 'ul. Leninskiye Gory, 1, Moskva, Russia, 119991'],
[22.2534697,84.9011321, 'Sector 1, Rourkela, Odisha 769008, India'],
[40.72951339999999,-73.9964609, 'New York, NY 10003, USA'],
[21.1468555,79.050062, 'Amravati Road, Ram Nagar, Nagpur, Maharashtra 440033, India'],
[1.3483099,103.6831347, '50 Nanyang Ave, Singapore 639798'],
[31.3961507,75.5353566, 'Grand Trunk Road, Bye pass, Jalandhar, Punjab 144011, India'],
[25.0173405,121.5397518, 'No. 1, Section 4, Roosevelt Rd, Da’an District, Taipei City, Taiwan 10617'],
[-12.0218663,-77.0490087, 'Lima District 15333, Peru'],
[41.772834,-88.14340709999999, '30 N Brainard St, Naperville, IL 60540, USA'],
[42.3398067,-71.0891717, '360 Huntington Ave, Boston, MA 02115, USA'],
[42.0564594,-87.67526699999999, '633 Clark St, Evanston, IL 60208, USA'],
[55.1372019,36.6064735, 'Студенческий городок, 1, Obninsk, Kaluzhskaya oblast, Russia, 249034'],
[36.8856104,-76.3067777, '5115 Hampton Blvd, Norfolk, VA 23529, USA'],
[42.2586823,-121.7836222, '3201 Campus Dr, Klamath Falls, OR 97601, USA'],
[35.8012314,51.5028533, 'Tehran Province, Tehran, اتوبان ارتش کوی نفت, Nakhl St, Iran'],
[40.7982133,-77.8599084, 'Old Main, State College, PA 16801, USA'],
[45.47809059999999,9.2282377, 'Piazza Leonardo da Vinci, 32, 20133 Milano MI, Italy'],
[44.4386064,26.0494925, 'Splaiul Independenței 313, București 060042, Romania'],
[45.753954,21.225356, 'Piața Victoriei 2, Timișoara 300006, Romania'],
[12.0219328,79.85748319999999, 'Kalapet, Puducherry, 605014, India'],
[-33.4411279,-70.6407933, 'Av Libertador Bernardo OHiggins 340, Santiago, Región Metropolitana, Chile'],
[45.5111102,-122.6833424, '1825 SW Broadway, Portland, OR 97201, USA'],
[39.7738832,-86.1763393, '420 University Blvd, Indianapolis, IN 46202, USA'],
[42.730172,-73.67880300000002, '110 8th St, Troy, NY 12180, USA'],
[41.0815079,-74.1746234, '505 Ramapo Valley Rd, Mahwah, NJ 07430, USA'],
[43.0845894,-77.67434449999999, '1 Lomb Memorial Dr, Rochester, NY 14623, USA'],
[10.7285151,79.0184082, 'Trichy-Tanjore Road, Thirumalaisamudram, Thanjavur, Tamil Nadu 613401, India'],
[59.941894,30.2989199, 'Университетская наб., 7/9, Санкт-Петербург, г. Санкт-Петербург, Russia, 199034'],
[59.929491,30.2966081, 'Bolshaya Morskaya Ulitsa, 67, Sankt-Peterburg, Russia, 190000'],
[60.00729829999999,30.3729168, 'Politekhnicheskaya Ulitsa, 29, Sankt-Peterburg, Russia, 195251'],
[37.721897,-122.4782094, '1600 Holloway Ave, San Francisco, CA 94132, USA'],
[37.3351874,-121.8810715, '1 Washington Sq, San Jose, CA 95192, United States'],
[31.201001,121.432841, '1954 Huashan Rd, JiaoTong DaXue, Xuhui Qu, Shanghai Shi, China, 200000'],
[35.7036366,51.351593, 'Tehran, Azadi Avenue، Iran'],
[10.408363,-66.8755735, 'Sartenejas, Caracas, Miranda, Venezuela'],
[49.2780937,-122.9198833, '8888 University Dr, Burnaby, BC V5A 1S6, Canada'],
[54.7845032,32.0452469, 'Ulitsa Przhevalskogo, 4, Smolensk, Smolenskaya oblast, Russia, 214000'],
[38.3409236,-122.6730656, '1801 E Cotati Ave, Rohnert Park, CA 94928, USA'],
[47.224719,39.728334, 'ул. /42, Bolshaya Sadovaya Ulitsa, 105, Rostov-on-Don, Rostov Oblast, Russia, 344006'],
[44.4332166,26.1009718, 'Strada Ion Ghica 13, București 030167, Romania'],
[37.4274745,-122.169719, '450 Serra Mall, Stanford, CA 94305, USA'],
[-22.8184393,-47.0647206, 'Cidade Universitária Zeferino Vaz - Barão Geraldo, Campinas - SP, 13083-970, Brazil'],
[43.4514291,-76.5443166, '7060 NY-104, Oswego, NY 13126, USA'],
[-33.9328078,18.864447, 'Stellenbosch Central, Stellenbosch, 7599, South Africa'],
[42.0590153,-71.0806276, '320 Washington St, North Easton, MA 02357, USA'],
[59.438742,24.771645, 'Narva maantee 25, 10120 Tallinn, Estonia'],
[59.395884,24.671431, 'Ehitajate tee 5, 12616 Tallinn, Estonia'],
[61.4497952,23.8586408, 'Korkeakoulunkatu 10, 33720 Tampere, Finland'],
[30.7924391,30.9991409, 'El-Gaish, Tanta Qism 2, Tanta, Gharbia Governorate, Egypt'],
[32.7474661,-97.3278753, '1500 Houston St, Fort Worth, TX 76102, USA'],
[46.769299,23.585613, 'Strada Memorandumului 28, Cluj-Napoca 400114, Romania'],
[32.7767783,35.0231271, 'Haifa, 3200003, Israel'],
[32.1133141,34.8043877, 'Tel Aviv-Yafo, Israel'],
[31.7691587,35.1937099, 'יעקב שרייבום 26, Jerusalem, 9103501, Israel'],
[56.95080979999999,24.1163132, 'Raiņa bulvāris 19, Centra rajons, Rīga, LV-1586, Latvia'],
[53.4668498,-2.2338837, 'Oxford Rd, Manchester M13 9PL, UK'],
[-25.7676588,28.1992637, 'Preller St, Muckleneuk, Pretoria, 0002, South Africa'],
[45.6451546,25.5891184, 'Bulevardul Eroilor 29, Brașov 500036, Romania'],
[42.4074843,-71.1190232, '419 Boston Ave, Medford, MA 02155‎, USA'],
[37.8715926,-122.272747, 'California, USA'],
[34.068921,-118.4451811, 'Los Angeles, CA 90095, USA'],
[32.8800604,-117.2340135, '9500 Gilman Dr, La Jolla, CA 92093, USA'],
[40.1019523,-88.2271615, 'Champaign, IL, USA'],
[38.9869183,-76.9425543, 'College Park, MD 20742, USA'],
[-25.7676588,28.1992637, 'Preller St, Muckleneuk, Pretoria, 0002, South Africa'],
[-34.5998875,-58.37306949999999, 'Viamonte 430, 1053 Buenos Aires, Argentina'],
[41.406498,2.1945432, 'Rambla del Poblenou, 156, 08018 Barcelona, Spain'],
[43.076592,-89.4124875, 'Madison, WI 53706, USA'],
[10.4883502,-66.8891696, 'Caracas, Capital District, Venezuela'],
[40.4478246,-3.728587199999999, 'Av. Séneca, 2, 28040 Madrid, Spain'],
[3.390851,-76.55116699999999, 'Cra. 73 #2a-80, Cali, Valle del Cauca, Colombia'],
[19.3228313,-99.18657739999999, 'Av Universidad 3000, Cd. Universitaria, Coyoacán, 04510 Ciudad de México, CDMX, Mexico'],
[9.998686099999999,-84.11118580000002, 'Heredia Province, Heredia, Costa Rica'],
[4.6381938,-74.08404639999999, 'Cra 45, Bogotá, Colombia'],
[-16.500656,-68.134299, 'Colombia 154, La Paz, Bolivia'],
[-34.5998875,-58.37306949999999, 'Viamonte 430, 1053 Buenos Aires, Argentina'],
[38.99404390000001,-3.9204979, 'Avda. Camilo José Cela, s/n, 13071 Ciudad Real, Cdad. Real, Spain'],
[4.6014855,-74.06644570000002, 'Cra. 1 #18a-12, Bogotá, Colombia'],
[10.1732454,-64.6525884, 'Via Alterna, Puerto La Cruz 6001, Anzoátegui, Venezuela'],
[14.5863885,-90.5528132, 'Avenida 11, Guatemala 01012, Guatemala'],
[41.6569271,-4.7140547, 'C/Plaza de Santa Cruz, 8, 47002 Valladolid, Spain'],
[4.8615787,-74.0325368, 'Chía, Cundinamarca, Colombia'],
[14.603762,-90.48924799999999, '18 Avenida 11-95, Ciudad de Guatemala 01015, Guatemala'],
[-7.1377875,-34.8459439, 'Cidade Universitária, s/n - Castelo Branco III, João Pessoa - PB, 58051-085, Brazil'],
[-27.6007034,-48.5191775, 'Campus Reitor João David Ferreira Lima, s/n - Trindade, Florianópolis - SC, 88040-900, Brazil'],
[-30.0338248,-51.21882799999999, 'Av. Paulo Gama, 110 - Farroupilha, Porto Alegre - RS, 90040-060, Brazil'],
[-22.9541412,-43.1753638, 'Av. Pedro Calmon, 550 - Cidade Universitária, Rio de Janeiro - RJ, 21941-901, Brazil'],
[38.7368192,-9.138705, 'Av. Rovisco Pais 1, 1049-001 Lisboa, Portugal'],
[-23.5613991,-46.7307891, 'São Paulo - State of São Paulo, 03178-200, Brazil'],
[41.5607319,-8.3962368, 'R. da Universidade, 4710-057 Braga, Portugal']
];
