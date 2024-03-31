let foods = [
    {
        id: 1,
        name: 'Sharbat-e Tokhm Sharbati',
        type: 'Baverage',
        desc: 'If you are looking for a sweet drink with some lemon taste, this drink would be a great choice for you. The drink consists of Chia seeds, lemon juice, Sekanjebin, and water. The hydrated seeds become jelly when added to the water. These seeds are a good source of necessary minerals and vitamins for the body and are very good for reducing blood pressure.',
        img: 'Img/Sharbat-e Tokhm Sharbati.jpg'
    },

    {
        id: 2,
        name: 'Sharbat-e Khake Shir',
        type: 'Baverage',
        desc: 'Sharbat-e Khake Shir is a popular thirst quencher drink in summer which prevents people from dehydration. This drink is not only refreshing but also has many benefits for health such as a natural detox for the liver, and healthier skin.The tiny reddish- brown seeds are from Sisymbrium Irio, known as London Rocket, which is served with Sekanjebin and ice cubes.',
        img: 'Img/Sharbat-e-Khakshir.jpg'
    },


    {
        id: 4,
        name: 'Damnoosh-e Gol Gav Zaban (Borage Tea)',
        type: 'Baverage',
        desc: 'Borage or "Gol Gav Zaban" is a purple-colored plant that is popular in Iran since ancient times due to its calming effect. It is also believed that the plant has antimicrobial and anti-diarrhea effects. It has a sour taste, and therefore it is usually served with Nabat. To give it the most flavor and taste, some people add extra ingredients such as valerian and lime.',
        img: 'Img/Damnoosh-e Gol Gav Zaban.jpg'
    },

    {
        id: 5,
        name: 'Abgoosht & Dizi',
        type: 'Dinner',
        desc: 'Abgoosht (Ab stands for water and goosht for meat) is one of the most traditional Iranian stew in Iran. When Abgoosht cooked and served in stone crock pots it’s called Dizi. Whether the name is Abgoosht or Dizi, you should absolutely try this local cuisine when you travel to Iran.',
        img: 'Img/Abgoosht & Dizi.jpg'
    },

    {
        id: 6,
        name: 'Sharbat-e Sekanjebin',
        type: 'Baverage',
        desc: 'Sekanjebin is a type of syrup that is a mixture of Angebin (natural honey), white vinegar, and mint extract. It is very popular to prepare and serve the drink with chopped cucumber and mint.',
        img: 'Img/Sharbat-e Sekanjebin.jpg'
    },


    {
        id: 7,
        name: 'Kabab Koobideh',
        type: 'Dinner',
        desc: 'There are different types of Kebab in Iran and the world, however, the Koobideh is the signature of Iranian Kabab and the most famous one between local and international tourists. It is cooked from ground lamb or beef with chopped onions. Sometimes you can find it with chicken but it is not very common and popular.',
        img: 'Img/Kabab Koobideh.jpg'
    },

    {
        id: 8,
        name: 'Dolmeh Barg-e Mo',
        type: 'Dinner',
        desc: 'One of the most types of Dolma which is cooked in Iran is the Dolmeh Barg-e Mo (Barg stands for leaves and Mo stands for grape tree). In Azeri, it is called Yarpakh Dolmasi.',
        img: 'Img/Dolmeh Barg-e Mo.jpg'
    },

    {
        id: 9,
        name: 'Kufteh Tabrizi',
        type: 'Dinner',
        desc: 'This delicious Iranian cuisine has different types of ingredients and recipes. Some people cook it sweet and some sour, in some you can find berries and nuts and the others without these ingredients. However, the main ingredients are beef, yellow split peas, rice, onion, and egg.Tomato, cinnamon, and savory are added to the sauce.',
        img: 'Img/Dolmeh Barg-e Mo.jpg'
    },

    {
        id: 3,
        name: 'Sharbat-e Saffron',
        type: 'Baverage',
        desc: 'You can find Saffron of the best quality in Iran. Therefore, it is very common for people to use it as a flavor in their food to give it a taste and wonderful color. To prepare Sharbat-e Saffron, first, it should be added to boiling water to extract its color and taste, then Sekanjebin, and cold water added. Some people also add some cinnamon to the ingredient.',
        img: 'Img/saffron-syrup.jpg'
    },

    {
        id: 10,
        name: 'Khoresht-e Fesenjan (Walnut Stew)',
        type: 'Lunch',
        desc: 'Fesenjan is the kind of stew that has different recipe among Iranian. in Persian recipe, Some people cook Fesenjan with chicken and some with meatballs. Some cook it sweet and some sour. Whatever you choose as meat the major ingredient is crushed walnut with pomegranate taste.',
        img: 'Img/Khoresht-e Fesenjan (Walnut Stew).jpg'
    },

    {
        id: 11,
        name: 'Sabzi Polow Mahi (Fresh herbs with rice and fried fish)',
        type: 'Lunch',
        desc: 'This cuisine is the most popular one all over the country. The rice is cooked with a mixture of fresh herbs and usually served with fried fish (usually Caspian kutum or Rutilus kutum or Caspian white fish). It is the custom in Iran that people have Sabzi Polow Mahi for lunch or dinner on the first day of the Persian new year, however, you can find it also in most Iranian restaurants.',
        img: 'Img/Sabzi Polow Mahi.jpg'
    },

    {
        id: 12,
        name: 'Ghalieh Mahi (Spicy Fish with fresh herbs)',
        type: 'Lunch',
        desc: 'This Persian cuisine is mostly cooked in the southern part of the country, especially in Khuzestan province. The main ingredients to marinate the fish are cilantro, fenugreek, tamarind pulp or tamarind paste. Traditionally, this stew-like cuisine is cooked with Sangsar (Trumpeter), Hamoor (Rankin cod), Shooride (long tooth Salmon).',
        img: 'Img/Ghalieh Mahi.jpg'
    },

    {
        id: 13,
        name: 'Tahchin (Layered Saffron Rice & Chicken)',
        type: 'Lunch',
        desc: 'Tahchin is one of the most delicious Iranian dishes which is mostly cooked in Tehran. It is cooked with different layers of rice and cooked chicken or eggplant. To prepare the food, first, the rice cooked and mixed with saffron, yogurt, and egg. Then layers of rice and cooked chicken, meat, or eggplant put in the stockpot and cooked.',
        img: 'Img/Tahchin.jpg'
    },

    {
        id: 14,
        name: 'Faloodeh Shirazi',
        type: 'Dessert',
        desc: "Faloodeh is a chewy, sweet, sour, and incredibly refreshing traditional Iranian sorbet that will blow your taste buds away from the first bite. This Persian rosewater granita is mainly consumed in the steamy days of summer. Faloodeh is one of Iran's oldest frozen desserts prepared with vermicelli rice noodles and frozen sugar syrup infused with rose water and lime.",
        img: 'Img/Tahchin.jpg'
    },

    {
        id: 15,
        name: 'Saffron Ice Cream ',
        type: 'Dessert',
        desc: "Bastani Sonnati means traditional ice cream. It is a unique freshening Saffron ice cream with an intense flavour of saffron and flakes of frozen cream. Bastani Sonnati is made from milk, eggs, sugar, rose water, saffron, and pistachios crumbs.It is an ancient Iranian dessert first invented during the Achaemenid dynasty(500 BC).",
        img: 'Img/Saffron Ice Cream.jpg'
    },

    {
        id: 16,
        name: 'Halva',
        type: 'Dessert',
        desc: "Halva is one of the oldest Persian desserts. Its name originated from old Persian stories and poems. However, It has become a constant basis for special ceremonies and traditional holidays and sometimes reminds us of bitter moments. It is also served women after childbirth and sick children to boost their energy for a speedy recovery.",
        img: 'Img/Halva.jpg'
    },

    {
        id: 17,
        name: 'Sholeh Zard',
        type: 'Dessert',
        desc: "Sholeh Zard is a famous Iranian dessert with a lovely visual, alluring aroma, and delicious flavour; this Persian saffron rice pudding is bound to give your palate a royal taste and keep you craving more.",
        img: 'Img/Sholeh Zard.jpg'
    },

    {
        id: 18,
        name: 'Ashe Reshteh',
        type: 'Dessert',
        desc: "Ash is one of the traditional Iranian dishes, which is known as the simplest dish, not so easy to prepare the ingredients though. Ash Reshteh is one of the most common dishes that is cooked in different ways in different cities. Vegetables include spinach, coriander, parsley, dill, and leek, which is sold as Ash vegetable. The amount of beans and chickpeas in Ash is also arbitrary, which is completely a matter of taste. They also add noodles (Reshteh)..",
        img: 'Img/Ashe-Reshteh.JPG'
    },

    {
        id: 19,
        name: 'Kuku-Sabzi',
        type: 'Dinner',
        desc: "Kuku Sabzi and Sibzamini Kuku are some of the Kuku-s that most people like. It is often used for dinner or a snack, and it is very easy to cook. Kuku Sabzi is one of the most popular types of Kuku among Iranians. The most important component of this dish is the vegetables. Every city has its own Kuku Sabzi, for example, Mazandarani people use different vegetables from what Tabrizi people use.",
        img: 'Img/Kuku-Sabzi.JPG'
    },

    {
        id: 20,
        name: 'Albaloo Polo',
        type: 'Lunch',
        desc: "With its beautiful and colorful appearance, cherry (Albaloo) is considered a ceremonial food and is served at many parties and formal events. Albaloo Polo is one of the most delicious Iranian dishes and it is made with both red meat and chicken. Making Albaloo Polo requires special skills and not everyone can make it well.",
        img: 'Img/Albaloo-Polo.jpg'
    },

    {
        id: 21,
        name: 'Lubia Polo',
        type: 'Lunch',
        desc: "Lubia Polo is one of the most delicious Iranian dishes, which has special customs served. Iranians usually eat this food with bread or potato Tahdig, Shirazi salad, vegetables, and yogurt, which is a very delicious combination. To prepare this dish they use rice, chopped green beans combined with ground meat, onion, tomato paste, and various spices and placed it on low heat until it is ready.",
        img: 'Img/Lubia Polo.JPG'
    },

    {
        id: 22,
        name: 'Dougho Gooshfil',
        type: 'Dessert',
        desc: "One of the delicious and famous combinations of Iran, which most people consider to belong to the beautiful city of Isfahan, is Dougho Gooshfil(Iranian drinks). First of all, it is very surprising for people who have never tried this, how two completely different flavors (salty and sweet) can be combined. Many of those who have resisted trying these two combinations, when they do completely change their minds and even recommend them to others. The name of the sweet (goosh fil) is derived from its resemblance to an elephant’s (fil) ear (goosh). Goosh Fil, as well as Zoolbia and Bamia, is very common and popular in the month of Ramadan.",
        img: 'Img/Dougho-Gooshfil.JPG'
    },


    {
        id: 23,
        name: 'Zulbia',
        type: 'Dessert',
        desc: "Zoolbia and Bamiyeh are famous and very popular Iranian sweets that are used as special sweets in the holy month of Ramadan for iftar. Bamieh sweets are very similar to Arabic Legimat sweets. Zoolbia and Bamiya have existed since the time of Naser al-Din Shah. But it is not possible to find the exact date of the origin of Zoolbia and Bamieh. To make Zoolbia you need yogurt, white pastry flour, corn starch, liquid oil, instant yeast, sugar, lukewarm water, and ground saffron.",
        img: 'Img/Dougho-Gooshfil.JPG'
    },

    {
        id: 24,
        name: 'Dolmeh',
        type: 'Lunch',
        desc: "There are many types of dolma, and the most famous ones are grape leaf dolma (Dolmeh Barg Mo), tomato dolma, eggplant, and bell pepper. However, Barge Mo Dolma is more popular and many Iranians prepare this in the spring when the leaves are fresh, sour, and delicious. In Iran, dolmeh is considered one of the local dishes of the West and East Azerbaijan provinces, however, today this delicious dish is cooked all over Iran. The ingredients inside the dolma are a combination of ground meat, dolma vegetables, onions, split beans, etc.",
        img: 'Img/Dolmeh Barg-e Mo.jpg'
    },

    {
        id: 25,
        name: 'Kufteh Tabrizi',
        type: 'Dinner',
        desc: "Kufteh Tabrizi, as its name suggests, is originally from Tabriz, but today it is prepared all over the country. and it is considered one of the most delicious Iranian dishes. Today we have many kinds of Kufteh, but Kufteh Tabrizi is the most famous and delicious. They use a combination of meat, split beans, vegetables, hard-boiled eggs, plums, walnuts, fried onions, and barberry to make the meatballs.",
        img: 'Img/Dolmeh Barg-e Mo.jpg'
    },

    {
        id: 26,
        name: 'Khoresh Bademjan',
        type: 'Lunch',
        desc: "Eggplant (Bademjan) is used in many Iranian dishes and Iranian people love it. One of the most delicious dishes prepared with eggplant is eggplant stew (Khoresh Bademjan). To prepare this stew, they cook meat with onions and spices and then add fried eggplants and lots of sour grapes. Iranians often serve Eggplant stew with white or saffron rice.",
        img: 'Img/Khoresh Bademjan.JPG'
    },

    {
        id: 27,
        name: 'Kale Pache',
        type: 'Breakfast',
        desc: "Kale Pache is a traditional dish in the Middle East and South Caucasus. The cooking method is almost the same in different countries. This dish is a traditional and old food that is still famous among people from the past until today. Early in the morning, many go to the serving stores to buy some or eat it there. Kale Pache is a very energetic and fatty food, and those who have high blood fat or high cholesterol and uric acid in their blood and suffer from gout should avoid eating it. Usually, it takes time to cook this food, and the cook must have good skills to cook it.",
        img: 'Img/Kale Pache.JPG'
    },

    {
        id: 28,
        name: 'Pashmak',
        type: 'Dessert',
        desc: "Pashmak(Persian snack) is a type of sweet that is prepared with simple ingredients. And its texture is in the form of thin strands and fibers that dissolve easily in the mouth. Maybe many suppose that this sweet has no benefits. But because cardamom, flour, vegetable oils, cocoa powder, sugar, saffron, and other additives are in it, it benefits the body.",
        img: 'Img/Pashmak.JPG'
    },

    {
        id: 29,
        name: 'Qottab',
        type: 'Dessert',
        desc: "Qotab is a popular sweet in Iran. It is interesting to know that this sweet is one of the famous sweets of Yazd and Kerman. The Yazdi Qottab consists of two parts, the outer layer, and the inner core. Its outer layer, which is bread fried in oil, consists of wheat flour, milk or yogurt, and egg yolk, which is rolled in powdered sugar after cooking. The inner core of this sweet is made of a mixture of almond powder, sugar powder, and cardamom, ground walnut. In Qutab Asali (Qutab with honey), the main sweetener is honey instead of powdered sugar.",
        img: 'Img/Qottab.JPG'
    },

    {
        id: 30,
        name: 'Salad Shirazi',
        type: 'Dessert',
        desc: "Shirazi Salad is a very delicious combination of cucumber, tomato, and onion, which has a unique taste when seasoned with lemon juice. You can serve it with almost all the dishes you eat with rice. Above all, it is very easy to make. To make this salad, it is enough to finely chop cucumber, tomato, and onion. Then mix all three together and add a little lemon juice, water, and salt to it and serve.In this salad, you can use some chopped parsley or dried mint, as well.It may be interesting to know that instead of using lime juice from the store if you use fresh lime and squeeze it, you will experience a more unique and hearty taste.",
        img: 'Img/Salad Shirazi.JPG'
    },

    {
        id: 31,
        name: 'Tahdig',
        type: 'Dessert',
        desc: "When making the rice, first they boil it and when it is a little soft, they put it in a colander. Now it’s time to make Tahdig. They pour some oil into the pot and add some cardamom, saffron, etc. to the oil and fry a little bit of the rice, bread, or potato depending on what Tahdig they are going to make. For instance, for potato Tahdig they cover the whole bottom of the pot with potato slices and fry them. When the slices are fried and ready, They add the rice on top of the potato slices and leave it on slow heat. All this, in order to make delicious Iranian rice with a yummy Tahdig.",
        img: 'Img/Tahdig.JPG'
    },

    {
        id: 32,
        name: 'Halim',
        type: 'Breakfast',
        desc: "Haleem Gandom (Wheat) is one of the most delicious foods that are in great demand during the months of Muharram and Ramadan. It is also considered an extremely delicious and appropriate Iftar in the month of Ramadan. This delicious dish is usually served for breakfast in other months than Ramadan. You can prepare this food in different ways, but the most common way to prepare Halim is to make it with wheat and bulgur. Red meat, especially lamb or turkey, is preferably used to make delicious Halim. But sometimes some people also prepare it with chicken, which is relatively less tasty.",
        img: 'Img/Halim.JPG'
    },

    {
        id: 33,
        name: 'Kotlet',
        type: 'Dinner',
        desc: "The way to prepare Kotlets is similar to Kuku, with the difference that the minced meat is mixed with grated potatoes and onions, eggs, a little flour, and spices. They take small proportions of the mixture and shape them like a semi-flat circle and fry them. They serve this dish with bread, vegetables, tomato, and pickled cucumber. Meat cutlets, fish cutlets, chicken cutlets, and soy cutlets are among the types of Kotlets.",
        img: 'Img/Kotlet.JPG'
    },

    {
        id: 34,
        name: 'Sosis Bandari',
        type: 'Dinner',
        desc: "Bandari sausage (Sosis) is one of the types of Iranian sandwich foods, whose origin belongs to the southern provinces of our country. This delicious and instant food was gradually transferred from the south of our country to all Iranian cities due to its extremely delicious taste. And today it has become one of the most popular sandwich dishes. The original Bandari sausage is prepared with a combination of sausage, onion and flavorings, but in some restaurants, in addition to these ingredients, they also add mushrooms, cheese slices, etc.",
        img: 'Img/Sosis Bandari.JPG'
    },


];

export { foods }