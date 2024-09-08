let dados = [
    {
        titulo: "Citrus",
        autora: "Saburouta",
        capitulos: 100,
        descricao: "Uma história de amor entre duas garotas de personalidades opostas que se encontram em uma nova escola."
    },
    {
        titulo: "Bloom Into You",
        autora: "Nami Sonobe",
        capitulos: 80,
        descricao: "Yuu Koito, uma garota que sempre se apaixonou facilmente, busca por um amor intenso, mas se sente confusa ao conhecer a popular e serena Touko Aoi."
    },
    {
        titulo: "A Tropical Fish Yearns for Snow",
        autora: "Makoto Hagino",
        capitulos: 34,
        descricao: "Konatsu está se esforçando ao máximo para se adaptar à sua nova escola, mas ser obrigada a participar de um clube introduziu pressões adicionais. Sua amiga colega de classe Kaede a convida para se juntar ao Clube de Economia Doméstica, mas Konatsu ainda não teve tempo de considerar que clube ela está interessada. Enquanto isso, Koyuki é como um raio de sol no mundo nublado de Konatsu. Konatsu vai entrar no Clube do Aquário?"
    },
    {
        titulo: "Dallae",
        autora: "Chunae",
        capitulos: 24,
        descricao: "Bo-Eun recentemente adquiriu uma pequena e peluda companheira chamada Dallae (coreano para azaléia), que ela conheceu em um campo de azaléias. Dallae tem seu próprio horário, no entanto, e vem e vai como bem entende. Enquanto isso, Bo-Eun não consegue parar de sonhar com uma amizade perdida no ensino médio - seu nome é Sae-Yeon. Curiosamente, foi por volta da época em que Dallae começou a aparecer que Bo-Eun começou a ter sonhos recorrentes de Sae-Yeon... Esta história tem dois (ou três?) personagens principais, e todos estão escondendo um segredo um do outro."
    },
    {
        titulo: "Handsome Girl and Sheltered Girl",
        autora: "Mochi Au Lait",
        capitulos: 18,
        descricao: "Quando a amiga de Okuma Satomi pede sua ajuda para atrair garotos para um café de travestis, Satomi acaba com um namorado! Mais ou menos. Depois de pedir ao seu bonito e distante colega de classe, Kanda Mizuki, para ajudar no café, Mizuki concorda, mas com uma condição: os dois devem sair em um encontro. Satomi concorda entusiasmada, feliz por ter um cara tão bonito interessado nela, mas Mizuki percebe que Satomi entendeu completamente algo crucial: Mizuki é uma garota! Esse caso de identidade equivocada florescerá em algo bonito ou a verdade deixará ambas as meninas de coração partido?"
    },
    {
        titulo: "I Love Amy",
        autora: "Eonni",
        capitulos: 56,
        descricao: "Bibi é uma garota animada que é profundamente obcecada por Peter, o garoto mais bonito de sua escola. Então, quando ela vê uma garota aleatória falando com ele, Bibi a convida para dormir com más intenções... só para ter um tempo surpreendentemente bom! Foi assim que ela fez amizade com Amy, uma garota tímida e doce que concorda em ajudar Bibi a ficar com Peter. Mas à medida que elas tramam todo tipo de esquemas amorosos para conquistar Peter, o lugar de Amy no coração de Bibi cresce cada vez mais a cada dia..."
    },
    {
        titulo: "I Married My Best Friend to Shut My Parents Up",
        autora: "Naoko Kodama",
        capitulos: 5,
        descricao: "Morimoto, uma jovem profissional no Japão, está cansada de afastar as perguntas de seus pais sobre ela ser solteira. Eles querem que ela se case com um homem e se estabeleça, e eles insistirão em criticar sua escolha de noivo até a morte. Em um movimento inesperado, outra mulher no escritório - que tem uma queda por ela - oferece ser sua esposa em um casamento falso, o que pode fazer seus pais recuarem. Mas esse casamento \"falso\" pode descobrir algo muito real!"
    },
    {
        titulo: "My Lesbian Experience With Loneliness",
        autora: "Kabi Nagata",
        capitulos: 7,
        descricao: "Um quadrinho extremamente popular no Pixiv, My Lesbian Experience With Loneliness oferece aos leitores uma visão honesta e sincera da exploração da sexualidade, do bem-estar mental e do crescimento de uma jovem mulher em nossa era moderna."
    },
    {
        titulo: "My Princess Charming",
        autora: "Teunteun",
        capitulos: 40,
        descricao: "Yuna, de vinte e um anos, está cansada de ser abordada por garotos o tempo todo. Apesar de ser popular, ela é solteira a vida toda. Justo quando ela decide fazer um namorado para afastar os caras, ela conhece um cara bonito que parece bom o suficiente para ser seu namorado. Mas espere, o cara na verdade é uma garota! Na verdade, diz-se que Min é lésbica. Mesmo assim, os dois decidem fingir que estão em um relacionamento romântico."
    },
    {
        titulo: "Nana",
        autora: "Ai Yazawa",
        capitulos: 84,
        descricao: "Esta é a história de duas mulheres de 20 anos que compartilham o mesmo nome. Mesmo vindo de origens completamente diferentes, elas se encontram de alguma forma e se tornam melhores amigas. O mundo de Nana é um mundo explodindo de sexo, música, moda, fofocas e festas até de madrugada."
    },
    {
        titulo: "Puella Magi Madoka Magica",
        autora: "Magica Quartet",
        capitulos: 12,
        descricao: "Quando uma nova garota se junta à sua classe, Madoka Kaname acha que reconhece a misteriosa estudante de cabelos escuros transferida de um de seus sonhos... um sonho onde ela é abordada por uma criatura felina que oferece a Madoka a oportunidade de mudar o destino. Madoka sempre pensou que a magia era coisa de fantasia... até ver a estudante transferida lutando com o mesmo gato do seu sonho! E assim como no sonho de Madoka, o gato lhe dá uma escolha. Madoka se tornará uma garota mágica em troca de seu desejo mais querido? Qual será o custo de realizar seu desejo?"
    },
    {
        titulo: "She Is Also Cute Today",
        autora: "Ghost",
        capitulos: 125,
        descricao: "'Estou interessada em alguém.' Cang Shu, uma estudante com notas excelentes que sempre se entrega aos estudos e não tem paixão pelo contato social, anuncia publicamente que gosta da estudante pobre Qi Lin?! Graças a um mal-entendido, as duas começam a se conhecer. Quando uma garota que despreza fazer amigos encontra outra garota que deseja ser amada, o que acontecerá entre elas?"
    },
    {
        titulo: "The Guy She Was Interested In Wasn't a Guy at All",
        autora: "Sumiko Arai",
        capitulos: 99,
        descricao: "A estudante do ensino médio Aya, fashionista e animada, se apaixona perdidamente por um funcionário de uma loja de CDs local. Ele tem um ar misterioso, ótimo estilo e um gosto impecável por música. Pouco ela sabe: esse suposto funcionário masculino é na verdade sua colega de classe feminina, Mitsuki! Mitsuki geralmente é reservada, mas como seu lugar é logo ao lado de Aya, ela não pode deixar de estar extremamente ciente da paixão da outra. Revelar a verdade está fora de questão para Mitsuki—mas talvez se aproximar de Aya não seja tão ruim..."
    },
    {
        titulo: "The Summer You Were There",
        autora: "Yuama",
        capitulos: 32,
        descricao: "Shizuku é uma garota tímida que mal fala com outras pessoas. Em vez disso, ela se perde na escrita criativa, criando um romance que ela nunca planeja mostrar a ninguém. Mas quando Kaori, a fofa e popular colega de classe de Shizuku, consegue o manuscrito de Shizuku, tudo muda. Kaori é uma grande fã e sugere que Shizuku pode obter inspiração para sua escrita se as duas começarem a namorar! Essas jovens tão diferentes podem criar sua própria história de amor juntas?"
    },
    {
        titulo: "What Does the Fox Say?",
        autora: "Team Gaji",
        capitulos: 132,
        descricao: "Como a mais nova contratada de um estúdio de desenvolvimento de jogos, a bela Seong-Ji atrai toda a atenção de seus colegas de trabalho - mas é sua chefe autoritária e direta, Su-Min, que a intriga. O amor é um jogo completamente novo para Seong-Ji, e com o presidente da empresa, Se-Ju, quebrando (ou será que estava lançando?) as regras, essa nova garota tem seu trabalho cortado para ela se quiser vencer. Será que ela conseguirá dar a Su-Min o que ela quer?"
    }
]