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
]

export { foods }