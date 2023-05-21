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
    "日本の茶道の優雅さと精密さに魅了されています。それらは日本文化の美しい反映です。",
    "I am fascinated by the elegance and precision of Japanese tea ceremony. It beautifully reflects the Japanese culture.",
  ],
  [
    "陶芸や木工などの日本の伝統工芸品の細部への注意は本当に素晴らしいです。それぞれの作品が物語を語っています。",
    "The attention to detail in traditional Japanese crafts like pottery and woodworking is truly amazing. Each piece tells a story.",
  ],
  [
    "日本の料理は味と食感の豊かな交響曲です。寿司からラーメンまで、いつも私の味覚を満足させてくれます。",
    "Japanese cuisine is a symphony of flavors and textures. From sushi to ramen, it always satisfies my taste buds.",
  ],
  [
    "日本庭園に見られる調和に深い感銘を受けています。それらは日常生活の混沌からの平和な逃避を提供してくれます。",
    "I am deeply impressed by the harmony found in Japanese gardens. They provide a peaceful escape from the chaos of everyday life.",
  ],
  [
    "折り紙の芸術は、日本の文化の創造性と忍耐力を見事に示しています。一枚の紙から何が作り出せるか、驚くべきです。",
    "The art of origami beautifully showcases the creativity and patience of Japanese culture. It's amazing what can be created from a single sheet of paper.",
  ],
  [
    "着物、伝統的な日本の衣装は、芸術性と優雅さの傑作です。優美さと文化遺産の象徴です。",
    "Kimono, the traditional Japanese attire, is a masterpiece of artistry and elegance. It symbolizes grace and cultural heritage.",
  ],
  [
    "禅仏教の哲学は、マインドフルネス、シンプリシティ、内なる平和を強調し、日本の文化に大きな影響を与えています。",
    "The philosophy of Zen Buddhism emphasizes mindfulness, simplicity, and inner peace, greatly influencing Japanese culture.",
  ],
  [
    "箏や三味線の美しいメロディーなど、伝統的な日本の音楽は静寂とノスタルジアを呼び起こします。",
    "Traditional Japanese music, with its beautiful melodies from instruments like koto and shamisen, evokes tranquility and nostalgia.",
  ],
  [
    "日本のアニメとマンガは世界的な現象となり、ユニークなストーリーテリングと鮮やかなキャラクターで観客を魅了しています。",
    "Japanese anime and manga have become a global phenomenon, captivating audiences with unique storytelling and vibrant characters.",
  ],
  [
    "日本の文化における自然への敬意は鼓舞されます。桜や紅葉、四季の変化は大きな意味を持っています。",
    "I am inspired by the reverence for nature in Japanese culture. Cherry blossoms, autumn leaves, and the changing seasons hold great significance.",
  ],
  [
    "空手や柔道などの日本の武道の精度と技術に畏敬の念を抱いています。それらは規律と自己修業を体現しています。",
    "I have deep respect for the precision and technique of Japanese martial arts like karate and judo. They embody discipline and self-improvement.",
  ],
  [
    "古代の寺院から現代の超高層ビルまでの日本の建築は、伝統と革新を見事に融合させ、素晴らしい構造物を生み出しています。",
    "Japanese architecture, from ancient temples to modern skyscrapers, beautifully combines tradition and innovation, creating stunning structures.",
  ],
  [
    "「おもてなし」という概念は日本の文化に深く根付いており、訪れた人々に歓迎され、価値を感じさせます。",
    "The concept of 'omotenashi' is deeply rooted in Japanese culture, making visitors feel welcomed and valued.",
  ],
  [
    "日本の社会における強い共同体意識に敬意を表します。調和と協力に重点を置く姿勢は本当に鼓舞されます。",
    "I have great respect for the strong sense of community in Japanese society. The emphasis on harmony and cooperation is truly inspiring.",
  ],
  [
    "花見、桜の下での集まりは、自然の美しさを祝う日本の大切な伝統です。",
    "Hanami, gathering under cherry blossoms, is a cherished Japanese tradition celebrating the beauty of nature.",
  ],
  [
    "刀鍛冶の技術と芸術性を証明する伝統的な日本の刀剣の職人技に感銘を受けています。",
    "I am impressed by the craftsmanship of traditional Japanese swords, which demonstrate the skill and artistry of swordsmiths.",
  ],
  [
    "能や歌舞伎などの伝統的な日本の演劇形式は、その豊かな歴史と象徴性によって魅了的です。",
    "Traditional Japanese theatrical forms like Noh and Kabuki are captivating with their rich history and symbolism.",
  ],
  [
    "わびさびという概念は、不完全さを受け入れ、シンプルさの中に美を見出すという価値ある教訓です。",
    "The concept of 'wabi-sabi' is a valuable lesson in embracing imperfections and finding beauty in simplicity.",
  ],
  [
    "源氏物語などの古典的な作品から現代の小説まで、日本の文学は人間の経験に深い洞察を提供しています。",
    "From classic works like 'The Tale of Genji' to contemporary novels, Japanese literature offers profound insights into the human experience.",
  ],
  [
    "生け花（いけばな）という花のアレンジメントの芸術は、自然の美と移ろいの精華を捉える瞑想的な実践です。",
    "The art of flower arrangement, known as 'ikebana,' is a meditative practice that captures the beauty and transience of nature.",
  ],
  [
    "古代の伝統と現代の技術が融合した日本の魅力に魅了されています。それが国を特徴付けるユニークな並置です。",
    "I am fascinated by the enchanting blend of ancient traditions and modern technology that characterizes Japan.",
  ],
  [
    "Japanese street fashion is a vibrant expression of individuality, with bold colors, unconventional styles, and fearless creativity.",
    "日本のストリートファッションは個性の鮮やかな表現であり、大胆な色使いや異例なスタイル、勇敢な創造性が特徴です。",
  ],
  [
    "The precision and artistry of Japanese pottery, such as the delicate beauty of porcelain, is a testament to the country's rich artistic heritage.",
    "日本の陶芸の精密さと芸術性、例えば繊細な美しさの磁器は、その豊かな芸術的遺産を物語っています。",
  ],
  [
    "The traditional Japanese art of bonsai, creating miniature trees, requires patience and meticulous care, resulting in living works of art.",
    "ボンサイという伝統的な日本の芸術は、ミニチュアの木を作り上げることで、忍耐と細心の注意を必要とし、生きた芸術作品を生み出します。",
  ],
  [
    "Japanese folklore and mythology are rich with fascinating tales of gods, spirits, and legendary creatures that have shaped the culture.",
    "日本の民話や神話は、神々、精霊、伝説的な生物の魅力的な物語で溢れており、文化を形作ってきました。",
  ],
  [
    "The concept of 'ma' in Japanese arts, the appreciation of space and silence, adds depth and serenity to various art forms.",
    "日本の芸術における「間」という概念は、空間と静寂の鑑賞によって、様々な芸術形式に深さと平穏をもたらします。",
  ],
  [
    "Japanese hot springs, or onsen, offer not just relaxation but also a sense of rejuvenation and a connection to nature's healing powers.",
    "日本の温泉、または「温泉（おんせん）」は、リラクゼーションだけでなく、若返りと自然の癒しの力とのつながりをもたらします。",
  ],
  [
    "The elegance and grace of traditional Japanese dance, such as Nihon buyo, captivate the audience with their refined movements and storytelling.",
    "日本舞踊、例えば日本舞踊は、洗練された動きとストーリーテリングで観客を魅了する、優雅さと優美さがあります。",
  ],
  [
    ("日本の茶道の優雅さと精密さに魅了されています。それらは日本文化の美しい反映です。",
    "I am fascinated by the elegance and precision of Japanese tea ceremony. It beautifully reflects the Japanese culture."),
  ],
  [
    "陶芸や木工などの日本の伝統工芸品の細部への注意は本当に素晴らしいです。それぞれの作品が物語を語っています。",
    "The attention to detail in traditional Japanese crafts like pottery and woodworking is truly amazing. Each piece tells a story.",
  ],
  [
    "日本の料理は味と食感の豊かな交響曲です。寿司からラーメンまで、いつも私の味覚を満足させてくれます。",
    "Japanese cuisine is a symphony of flavors and textures. From sushi to ramen, it always satisfies my taste buds.",
  ],
  [
    "日本庭園に見られる調和に深い感銘を受けています。それらは日常生活の混沌からの平和な逃避を提供してくれます。",
    "I am deeply impressed by the harmony found in Japanese gardens. They provide a peaceful escape from the chaos of everyday life.",
  ],
  [
    "折り紙の芸術は、日本の文化の創造性と忍耐力を見事に示しています。一枚の紙から何が作り出せるか、驚くべきです。",
    "The art of origami beautifully showcases the creativity and patience of Japanese culture. It's amazing what can be created from a single sheet of paper.",
  ],
  [
    "着物、伝統的な日本の衣装は、芸術性と優雅さの傑作です。優美さと文化遺産の象徴です。",
    "Kimono, the traditional Japanese attire, is a masterpiece of artistry and elegance. It symbolizes grace and cultural heritage.",
  ],
  [
    "禅仏教の哲学は、マインドフルネス、シンプリシティ、内なる平和を強調し、日本の文化に大きな影響を与えています。",
    "The philosophy of Zen Buddhism emphasizes mindfulness, simplicity, and inner peace, greatly influencing Japanese culture.",
  ],
  [
    "箏や三味線の美しいメロディーなど、伝統的な日本の音楽は静寂とノスタルジアを呼び起こします。",
    "Traditional Japanese music, with its beautiful melodies from instruments like koto and shamisen, evokes tranquility and nostalgia.",
  ],
  [
    "日本のアニメとマンガは世界的な現象となり、ユニークなストーリーテリングと鮮やかなキャラクターで観客を魅了しています。",
    "Japanese anime and manga have become a global phenomenon, captivating audiences with unique storytelling and vibrant characters.",
  ],
  [
    "日本の文化における自然への敬意は鼓舞されます。桜や紅葉、四季の変化は大きな意味を持っています。",
    "I am inspired by the reverence for nature in Japanese culture. Cherry blossoms, autumn leaves, and the changing seasons hold great significance.",
  ],
  [
    "空手や柔道などの日本の武道の精度と技術に畏敬の念を抱いています。それらは規律と自己修業を体現しています。",
    "I have deep respect for the precision and technique of Japanese martial arts like karate and judo. They embody discipline and self-improvement.",
  ],
  [
    "古代の寺院から現代の超高層ビルまでの日本の建築は、伝統と革新を見事に融合させ、素晴らしい構造物を生み出しています。",
    "Japanese architecture, from ancient temples to modern skyscrapers, beautifully combines tradition and innovation, creating stunning structures.",
  ],
  [
    "「おもてなし」という概念は日本の文化に深く根付いており、訪れた人々に歓迎され、価値を感じさせます。",
    "The concept of 'omotenashi' is deeply rooted in Japanese culture, making visitors feel welcomed and valued.",
  ],
];

module.exports = { users, thoughtText, reactions };
