const users = [
  { username: "佐藤", email: "sato@example.com" },
  { username: "鈴木", email: "suzuki@example.com" },
  { username: "高橋", email: "takahashi@example.com" },
  { username: "田中", email: "tanaka@example.com" },
  { username: "伊藤", email: "ito@example.com" },
  { username: "山本", email: "yamamoto@example.com" },
  { username: "中村", email: "nakamura@example.com" },
  { username: "小林", email: "kobayashi@example.com" },
  { username: "加藤", email: "kato@example.com" },
  { username: "吉田", email: "yoshida@example.com" },
];

const thoughtText = [
  "日本の茶道の優雅さと精密さに魅了されています。それらは日本文化の美しい反映です。",
  "陶芸や木工などの日本の伝統工芸品の細部への注意は本当に素晴らしいです。それぞれの作品が物語を語っています。",
  "日本の料理は味と食感の豊かな交響曲です。寿司からラーメンまで、いつも私の味覚を満足させてくれます。",
  "日本庭園に見られる調和に深い感銘を受けています。それらは日常生活の混沌からの平和な逃避を提供してくれます。",
  "折り紙の芸術は、日本の文化の創造性と忍耐力を見事に示しています。一枚の紙から何が作り出せるか、驚くべきです。",
  "着物、伝統的な日本の衣装は、芸術性と優雅さの傑作です。優美さと文化遺産の象徴です。",
  "禅仏教の哲学は、マインドフルネス、シンプリシティ、内なる平和を強調し、日本の文化に大きな影響を与えています。",
  "箏や三味線の美しいメロディーなど、伝統的な日本の音楽は静寂とノスタルジアを呼び起こします。",
  "日本のアニメとマンガは世界的な現象となり、ユニークなストーリーテリングと鮮やかなキャラクターで観客を魅了しています。",
  "日本の文化における自然への敬意は鼓舞されます。桜や紅葉、四季の変化は大きな意味を持っています。",
  "空手や柔道などの日本の武道の精度と技術に畏敬の念を抱いています。それらは規律と自己修業を体現しています。",
  "古代の寺院から現代の超高層ビルまでの日本の建築は、伝統と革新を見事に融合させ、素晴らしい構造物を生み出しています。",
  "「おもてなし」という概念は日本の文化に深く根付いており、訪れた人々に歓迎され、価値を感じさせます。",
  "日本の社会における強い共同体意識に敬意を表します。調和と協力に重点を置く姿勢は本当に鼓舞されます。",
  "花見、桜の下での集まりは、自然の美しさを祝う日本の大切な伝統です。",
  "刀鍛冶の技術と芸術性を証明する伝統的な日本の刀剣の職人技に感銘を受けています。",
  "能や歌舞伎などの伝統的な日本の演劇形式は、その豊かな歴史と象徴性によって魅了的です。",
  "わびさびという概念は、不完全さを受け入れ、シンプルさの中に美を見出すという価値ある教訓です。",
  "源氏物語などの古典的な作品から現代の小説まで、日本の文学は人間の経験に深い洞察を提供しています。",
  "生け花（いけばな）という花のアレンジメントの芸術は、自然の美と移ろいの精華を捉える瞑想的な実践です。",
  "古代の伝統と現代の技術が融合した日本の魅力に魅了されています。それが国を特徴付けるユニークな並置です。",
  "Japanese street fashion is a vibrant expression of individuality, with bold colors, unconventional styles, and fearless creativity.",
  "The precision and artistry of Japanese pottery, such as the delicate beauty of porcelain, is a testament to the country's rich artistic heritage.",
  "The traditional Japanese art of bonsai, creating miniature trees, requires patience and meticulous care, resulting in living works of art.",
  "Japanese folklore and mythology are rich with fascinating tales of gods, spirits, and legendary creatures that have shaped the culture.",
  "The concept of 'ma' in Japanese arts, the appreciation of space and silence, adds depth and serenity to various art forms.",
  "Japanese hot springs, or onsen, offer not just relaxation but also a sense of rejuvenation and a connection to nature's healing powers.",
  "The intricate and colorful world of Japanese geisha is a captivating blend of history, tradition, and refined artistry.",
  "The traditional Japanese tea houses, with their minimalist design and serene atmosphere, provide an oasis of calm in the bustling cities.",
  "Japanese calligraphy, or shodo, is a beautiful art form that combines skilled brushwork with the expression of emotions and ideas.",
  "The concept of 'mottainai,' the respect for resources and the aversion to waste, reflects the mindful approach of Japanese culture.",
  "I'm enthralled by the captivating beauty of Japanese temples and shrines, each with its unique architectural style and spiritual significance.",
  "The innovation and futuristic vision of Japanese technology are evident in advancements like robotics, high-speed trains, and cutting-edge gadgets.",
  "The traditional Japanese festival, or matsuri, is a vibrant celebration of culture, with lively parades, fireworks, and joyful gatherings.",
  "Japanese cinema, from classic masterpieces to contemporary works, offers a glimpse into the country's diverse storytelling and cinematic artistry.",
  "The discipline and dedication of Japanese martial arts practitioners, honing their skills through rigorous training, is truly admirable.",
  "The concept of 'kawaii,' the appreciation of cuteness, is an endearing aspect of Japanese culture that has gained global popularity.",
  "The tranquility and beauty of Japanese rock gardens, with their carefully arranged stones and raked gravel, inspire a sense of inner peace.",
  "Japanese street food is a delightful culinary adventure, with mouthwatering treats like takoyaki, yakitori, okonomiyaki, and taiyaki.",
  "The craftsmanship of Japanese knives, renowned for their sharpness and quality, is a testament to the country's rich culinary tradition.",
];

const reactions = [
  [
    "I completely agree! Japanese tea ceremonies are a true art form.",
    "私も完全に同意です！日本の茶道は本当に芸術です。",
  ],
  [
    "The precision and grace of tea ceremonies always leave me in awe.",
    "茶道の精密さと優雅さにいつも感動します。",
  ],
  [
    "Traditional Japanese crafts are a testament to the country's rich cultural heritage.",
    "伝統的な日本の工芸品は、豊かな文化遺産の証です。",
  ],
  [
    "I love how each craft tells a unique story and carries so much history.",
    "日本の工芸品は独自のストーリーを語り、多くの歴史を背負っている点が好きです。",
  ],
  [
    "Japanese cuisine is a culinary delight. The flavors and presentation are unmatched.",
    "日本料理は味覚の楽園です。その風味と盛り付けは他に類を見ません。",
  ],
  [
    "I can never get enough of the umami goodness in Japanese dishes.",
    "和食の旨味にはいつまでも飽きることがありません。",
  ],
  [
    "Japanese gardens are like a serene oasis in the midst of the bustling world.",
    "日本庭園は喧騒の中の静かなオアシスのようです。",
  ],
  [
    "The balance and harmony in Japanese gardens create a peaceful atmosphere.",
    "日本庭園のバランスと調和が平和な雰囲気を作り出します。",
  ],
  [
    "Origami is such a fascinating art. It requires patience and skill to create intricate designs.",
    "折り紙は非常に魅力的な芸術です。複雑なデザインを作るには忍耐と技術が必要です。",
  ],
  [
    "I love how a simple piece of paper can transform into something beautiful.",
    "シンプルな紙から美しいものが生まれることが好きです。",
  ],
  [
    "Kimono is a symbol of elegance and tradition. It's truly a work of art.",
    "着物はエレガンスと伝統の象徴です。それは本当に芸術作品です。",
  ],
  [
    "The vibrant colors and patterns of kimono never fail to amaze me.",
    "着物の鮮やかな色彩とパターンにいつも驚かされます。",
  ],
  [
    "The principles of Zen Buddhism have had a profound impact on my life.",
    "禅の教えは私の人生に深い影響を与えました。",
  ],
  [
    "Practicing mindfulness and simplicity has brought me inner peace.",
    "マインドフルネスとシンプリシティの実践によって内なる平和を得ることができました。",
  ],
  [
    "Japanese music has a soothing effect on my soul. The melodies are incredibly calming.",
    "日本の音楽は私の心に響きます。そのメロディーは非常に落ち着きます。",
  ],
  [
    "The sound of traditional Japanese instruments is simply enchanting.",
    "伝統的な日本の楽器の音色は本当に魅了的です。",
  ],
  [
    "Anime and manga have become a significant part of my life. The storytelling is captivating.",
    "アニメとマンガは私の人生の重要な一部となりました。ストーリーテリングが魅力的です。",
  ],
  [
    "I love how anime and manga explore a wide range of emotions and themes.",
    "アニメとマンガがさまざまな感情やテーマを探求する点が好きです。",
  ],
  [
    "Nature holds a special place in Japanese culture, and it's evident in the changing seasons.",
    "自然は日本の文化に特別な意味を持っており、四季の移り変わりでそれが分かります。",
  ],
  [
    "The beauty of cherry blossoms fills my heart with joy and appreciation.",
    "桜の美しさは私の心を喜びと感謝で満たしてくれます。",
  ],
  [
    "Martial arts are a disciplined practice that promotes physical and mental strength.",
    "武道は身体と精神の強さを育む訓練です。",
  ],
  [
    "The dedication and focus required in martial arts are admirable.",
    "武道に必要な集中力と粘り強さは素晴らしいです。",
  ],
  [
    "Japanese architecture is a perfect blend of tradition and modernity. It's awe-inspiring.",
    "日本の建築は伝統と現代性の完璧な融合です。それは畏敬の念を抱かせます。",
  ],
  [
    "The attention to detail in Japanese architectural designs is truly remarkable.",
    "日本の建築デザインの細部への注意は本当に素晴らしいです。",
  ],
  [
    "The hospitality in Japan is unparalleled. The people go above and beyond to make you feel welcome.",
    "日本のおもてなしは比類のないものです。人々はあなたが歓迎されるように最大限の努力をします。",
  ],
  [
    "Experiencing omotenashi firsthand was a heartwarming experience.",
    "おもてなしを直接体験することは心温まる経験でした。",
  ],
  [
    "The sense of community in Japan is inspiring. Everyone comes together and supports each other.",
    "日本のコミュニティの結束力は感銘を受けます。みんなが団結し、互いに支え合います。",
  ],
  [
    "The strong bonds formed in Japanese communities are something to cherish.",
    "日本のコミュニティで形成される強い絆は大切なものです。",
  ],
  [
    "Hanami is a beautiful tradition. Enjoying cherry blossoms with loved ones is a memorable experience.",
    "花見は美しい伝統です。大切な人と桜を楽しむことは忘れられない経験です。",
  ],
  [
    "The atmosphere during hanami is filled with joy and appreciation for nature.",
    "花見の雰囲気は喜びと自然への感謝で満たされています。",
  ],
  [
    "The artistry of Japanese swords is breathtaking. The craftsmanship is unparalleled.",
    "日本の刀剣の芸術性は息をのむほどです。その職人技は類を見ないものです。",
  ],
  [
    "The history and symbolism behind Japanese swords make them truly fascinating.",
    "日本の刀剣の歴史と象徴性は本当に魅力的です。",
  ],
  [
    "Noh and Kabuki are mesmerizing forms of theater. The performances are truly captivating.",
    "能と歌舞伎は魅惑的な劇形式です。その演技は本当に魅了的です。",
  ],
  [
    "I'm in awe of the costumes and the skill of the performers.",
    "衣装と演者の技術に感動しています。",
  ],
  [
    "The concept of wabi-sabi resonates with me. Finding beauty in imperfection is a valuable lesson.",
    "侘び寂びのコンセプトは私に共鳴します。不完全さの中に美を見つけることは貴重な教訓です。",
  ],
  [
    "Wabi-sabi reminds us to appreciate the simple and transient moments in life.",
    "侘び寂びは、生活の中でのシンプルで一時的な瞬間を大切にするように私たちに思い起こさせてくれます。",
  ],
  [
    "Japanese literature offers profound insights into the human experience. It's truly enlightening.",
    "日本の文学は人間の経験に深い洞察を与えてくれます。本当に啓発的です。",
  ],
  [
    "Exploring Japanese literature has broadened my perspective on life.",
    "日本の文学を探求することで人生の視野が広がりました。",
  ],
  [
    "Ikebana is a meditative art form. Creating floral arrangements brings me a sense of peace.",
    "生け花は瞑想的な芸術形式です。花のアレンジメントを作ることで私は平和な気持ちになります。",
  ],
  [
    "I love the harmonious balance achieved in ikebana arrangements.",
    "生け花のアレンジメントで実現される調和の取れたバランスが好きです。",
  ],
  [
    "Japanese hot springs are a haven of relaxation and rejuvenation. They are a must-visit.",
    "日本の温泉はリラックスと活力の宝庫です。必見の場所です。",
  ],
  [
    "Soaking in the hot springs is an incredible way to unwind and connect with nature.",
    "温泉に浸ることはリラックスし、自然とつながる素晴らしい方法です。",
  ],
  [
    "Geisha culture is fascinating. The dedication and training involved are truly remarkable.",
    "芸者文化は魅力的です。その専心と訓練は本当に素晴らしいです。",
  ],
  [
    "The grace and elegance of geisha performances are mesmerizing.",
    "芸者の演技の優雅さとエレガンスに魅了されます。",
  ],
  [
    "Japanese calligraphy is a beautiful art that requires precision and mindfulness.",
    "書道は精密さとマインドフルネスを要する美しい芸術です。",
  ],
  [
    "The brushstrokes in Japanese calligraphy are expressive and filled with meaning.",
    "書道の筆使いは表現豊かで意味に満ちています。",
  ],
  [
    "The concept of ma in Japanese culture is intriguing. Embracing the silence and emptiness is powerful.",
    "日本の文化における「間」の概念は興味深いです。沈黙と空虚を受け入れることは力強いです。",
  ],
  [
    "Finding beauty in the pauses and gaps is a valuable lesson from the concept of ma.",
    "間の概念からの美を見つけることは貴重な教訓です。",
  ],
  [
    "Japanese festivals are vibrant and lively. The atmosphere is filled with excitement.",
    "日本の祭りは活気に満ちています。雰囲気は興奮に満ちています。",
  ],
  [
    "Participating in a matsuri is an immersive cultural experience.",
    "祭りに参加することは没入型の文化体験です。",
  ],
  [
    "I'm grateful for the influence of Japanese culture in my life. It has enriched me in countless ways.",
    "日本の文化の影響に感謝しています。それは私を無数の方法で豊かにしてくれました。",
  ],
];

module.exports = { users, thoughtText, reactions };
