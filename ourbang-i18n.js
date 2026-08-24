(() => {
  'use strict';

  const supported = ['en', 'ko', 'ja', 'zh'];
  const htmlLang = { en: 'en', ko: 'ko', ja: 'ja', zh: 'zh-CN' };
  const menuLabel = { en: 'Open menu', ko: '메뉴 열기', ja: 'メニューを開く', zh: '打开菜单' };

  const text = {
    ja: {
      'ALL ITEMS': 'すべてのアイテム',
      'ALL': 'すべて',
      'ART · PERFORMANCE · ARCHIVE': 'アート · パフォーマンス · アーカイブ',
      'ARTIST WORLD': 'アーティスト・ワールド',
      'ARTIST': 'アーティスト',
      'ARTISTS': 'アーティスト',
      'ARTS': 'アート',
      'All videos and collectible objects from the experience, gathered in one place.': '体験を構成するすべての映像とコレクタブル・オブジェクトを、ひとつの場所に集めました。',
      'Artist development, musical direction and long-term creative identity.': 'アーティスト育成、音楽ディレクション、そして長期的なクリエイティブ・アイデンティティ。',
      'BACK TO COLLECTIONS': 'コレクションへ戻る',
      'BACK TO EXPLORE': 'EXPLOREへ戻る',
      'BACK TO ICE UNICORN': 'ICE UNICORNへ戻る',
      'BACK TO TIKOONZ': 'TIKOONZへ戻る',
      'BROADCAST SPACE': 'ブロードキャスト空間',
      'BUILD': '構築',
      'Build the future through music, visual and space.': '音楽、ビジュアル、空間から未来をつくります。',
      'CHANNELS': 'チャンネル',
      'CINEMATIC STORY': 'シネマティック・ストーリー',
      'COLLECTION': 'コレクション',
      'COLLECTIONS': 'コレクション',
      'CONTACT': 'お問い合わせ',
      'CREATE ONCE. LIVE EVERYWHERE.': '一度の創作が、あらゆる場所で息づきます。',
      'CREATIVE IDENTITY': 'クリエイティブ・アイデンティティ',
      'Capture real spaces through photography, LiDAR and spatial data.': '写真、LiDAR、空間データを用いて現実の空間を精密に記録します。',
      'Contact OURBANG for projects, partnerships and creative collaborations.': 'プロジェクト、パートナーシップ、クリエイティブな協業についてOURBANGへお問い合わせください。',
      'Create digital twins, virtual buildings and showcase worlds.': 'デジタルツイン、バーチャル建築、ショーケース・ワールドを構築します。',
      'DIGITAL CONSTRUCTION': 'デジタル構築',
      'DIGITAL EXHIBITION · OURBANG': 'デジタル展示 · OURBANG',
      'DYNAMIC IMAGE': '動くイメージ',
      'Digital environments, virtual buildings and immersive experiences.': 'デジタル環境、バーチャル建築、没入型体験。',
      'Digital spaces grow into living creative assets.': 'デジタル空間を、生きた創造資産へと育てます。',
      'Discover the artists and creative identities represented by AK ENM.': 'AK ENMとともに活動するアーティストと、その創造的な個性をご覧ください。',
      'Discover the first creative collections available on OURBANG.': 'OURBANGで公開される最初のクリエイティブ・コレクションをご覧ください。',
      'Dragon 88 pendant': 'Dragon 88 ペンダント',
      'EMAIL': 'メール',
      'ENTER COLLECTIONS': 'コレクションへ',
      'ENTER WORLD': 'ワールドへ',
      'ENTER': '入る',
      'ENTERTAINMENT · MEDIA · CULTURE': 'エンターテインメント · メディア · カルチャー',
      'EXPLORE': '探索',
      'Enter the ARA KOREA virtual building through OURBANG.': 'OURBANGからARA KOREAのバーチャル空間へ入ります。',
      'Enter the official home of AK ENM and its IP projects.': 'AK ENMの公式サイトとIPプロジェクトをご覧ください。',
      'Every creator keeps a distinctive voice and world.': 'すべてのクリエイターの固有の声と世界観を守ります。',
      'FILM': 'フィルム',
      'HOME': 'ホーム',
      'IDENTITY': 'アイデンティティ',
      'IMMERSIVE WORLD': '没入型ワールド',
      'IP, artists and original creative content.': 'IP、アーティスト、そしてオリジナルのクリエイティブ・コンテンツ。',
      'Ice logo necklace set': 'ICE ロゴ・ネックレスセット',
      'LISTEN': '聴く',
      'LIVE EXPERIENCE': 'ライブ体験',
      'LIVE': 'ライブ',
      'Live sets, audiovisual shows and performance-driven experiences.': 'ライブセット、オーディオビジュアル・ショー、パフォーマンスを軸にした体験。',
      'MARKET': 'マーケット',
      'MOTION': 'モーション',
      'MUSIC · ARTIST · CULTURE': '音楽 · アーティスト · カルチャー',
      'MUSIC': '音楽',
      'Motion graphics, title design and dynamic visual systems.': 'モーショングラフィックス、タイトルデザイン、動的なビジュアルシステムを制作します。',
      'Moving image, cinematic direction and visual storytelling.': '映像、シネマティック・ディレクション、ビジュアル・ストーリーテリング。',
      'Music channel': '音楽チャンネル',
      'Music videos, artist films and cinematic branded content.': 'ミュージックビデオ、アーティストフィルム、シネマティックなブランドコンテンツを制作します。',
      'NEXT EXPERIENCE': '次の体験',
      'NEXT LIVE': '次のライブ',
      'NO LIVE BROADCAST NOW': '現在ライブ配信はありません',
      'Neon mesh cap': 'ネオン・メッシュキャップ',
      'OFFICIAL SOUND': '公式サウンド',
      'OFFICIAL VISUAL': '公式ビジュアル',
      'OFFICIAL WEBSITE': '公式ウェブサイト',
      'OFFICIAL WORLD': '公式ワールド',
      'OFFICIAL': '公式サイト',
      'OPEN CHANNEL': 'チャンネルを開く',
      'OPEN EXPERIENCE': '開かれた体験',
      'ORIGINAL IP': 'オリジナルIP',
      'ORIGINAL SOUND': 'オリジナル・サウンド',
      'OUR VISION': '私たちのビジョン',
      'OURBANG brings independent brands, artists and creative projects into one connected platform. Through Scan, Create, Mirror and Explore, physical spaces become immersive digital experiences while every creator keeps a unique identity.': 'OURBANGは独立したブランド、アーティスト、創造的プロジェクトをひとつのつながったプラットフォームへ導きます。Scan、Create、Mirror、Exploreを通じて現実の空間は没入型デジタル体験へ広がり、すべてのクリエイターは固有のアイデンティティを保ちます。',
      'OURBANG connects music, visual media and digital space into one continuous world. Each idea becomes a performance, an image and a place people can enter.': 'OURBANGは音楽、ビジュアルメディア、デジタル空間をひとつの連続する世界へつなぎます。ひとつのアイデアがパフォーマンスとなり、イメージとなり、人が入ることのできる場所になります。',
      'OURBANG connects performances, conversations and audiences in real time.': 'OURBANGはパフォーマンス、対話、観客をリアルタイムでつなぎます。',
      'OURBANG connects spaces, creators and communities into one evolving digital ecosystem.': 'OURBANGは空間、クリエイター、コミュニティをひとつの進化するデジタル・エコシステムへつなぎます。',
      'OURBANG develops sound beyond a single track—into identity, content, performance and a world audiences can enter.': 'OURBANGはサウンドを一曲の枠から解き放ち、アイデンティティ、コンテンツ、パフォーマンス、そして観客が入ることのできる世界へ発展させます。',
      'OURBANG transforms images and storytelling into memorable brand and artist experiences.': 'OURBANGはイメージとストーリーテリングを、記憶に残るブランドとアーティストの体験へ変換します。',
      'OURBANG transforms physical places into living digital worlds ready to explore, share and experience.': 'OURBANGは現実の場所を、探索し、共有し、体験できる生きたデジタル世界へ変換します。',
      'Official artist page': '公式アーティストページ',
      'Official performance': '公式パフォーマンス',
      'One beginning.': 'ひとつの始まり。',
      'Original music, arranging, recording and release-ready production.': 'オリジナル音楽、編曲、録音、リリースに向けたプロダクション。',
      'Original music, sound identity and performance-driven production.': 'オリジナル音楽、サウンド・アイデンティティ、パフォーマンスを軸にしたプロダクション。',
      'PERFORMANCE': 'パフォーマンス',
      'PLATFORM': 'プラットフォーム',
      'PRINCIPLES': '基本理念',
      'PRODUCTION': 'プロダクション',
      'PRODUCTS': 'プロダクト',
      'Pendant': 'ペンダント',
      'Physical places become immersive digital worlds.': '現実の場所を没入型デジタル世界へ広げます。',
      'Publish web-accessible environments for audiences, collections and communities.': '観客、コレクション、コミュニティがウェブから直接体験できる環境として公開します。',
      'SCAN': 'スキャン',
      'SEND EMAIL': 'メールを送る',
      'SHOP': 'ショップ',
      'SOUND. IMAGE. IMPACT.': 'サウンド。イメージ。インパクト。',
      'SPACE': '空間',
      'SPATIAL CAPTURE': '空間記録',
      'START A CONVERSATION': '対話を始める',
      'START': '始める',
      'STEP INSIDE THE BOOM BOOM BOOM WORLD.': 'BOOM BOOM BOOMの世界へ。',
      'STUDIO': 'スタジオ',
      'Silver 925 pendant': 'シルバー925ペンダント',
      'THE OFFICIAL RELEASE BY ICE UNICORN.': 'ICE UNICORNによる公式リリース。',
      'THE OFFICIAL VISUAL CONTENT AND PERFORMANCE.': '公式ビジュアルコンテンツとパフォーマンス。',
      'TIKOONZ · AK ENM · ARA KOREA': 'TIKOONZ · AK ENM · ARA KOREA',
      'Technology stays behind the experience. We begin with curated Showcase Worlds and evolve toward a platform where every digital space becomes a living asset connecting creators, communities and marketplaces.': '技術は体験の背後にあります。厳選されたShowcase Worldから始まり、すべてのデジタル空間がクリエイター、コミュニティ、マーケットプレイスをつなぐ生きた資産となるプラットフォームへ進化します。',
      'Three original worlds.': '三つのオリジナル・ワールド。',
      'Upcoming broadcasts will appear here. Live notifications will be added with the OURBANG app.': '今後の配信予定はここに表示されます。OURBANGアプリにはライブ通知機能も追加される予定です。',
      'VALUE': '価値',
      'VIDEOS & OBJECTS': '映像とオブジェクト',
      'VIDEOS': '映像',
      'VIRTUAL BUILDING': 'バーチャル空間',
      'VISION': 'ビジョン',
      'VISIT SITE': 'サイトを見る',
      'VISIT': '訪問',
      'VISUAL LANGUAGE': 'ビジュアル言語',
      'VISUAL': 'ビジュアル',
      'Visit the official ARA KOREA website.': 'ARA KOREAの公式ウェブサイトをご覧ください。',
      'Visual direction, campaigns and distinctive image language.': 'ビジュアル・ディレクションとキャンペーンを通じて、独自のイメージ言語を構築します。',
      'WATCH THE CHANNELS.': 'チャンネルを見る。',
      'WATCH': '視聴する',
      'WORK': '作品',
      'WORLDS': 'ワールド',
      "Watch AK ENM's original media series and creative stories.": 'AK ENMのオリジナル・メディアシリーズと創造的なストーリーをご覧ください。',
      '← BACK TO EXPLORE': '← EXPLOREへ戻る',
      '← BACK TO ICE UNICORN': '← ICE UNICORNへ戻る',
      '← BACK TO STUDIO': '← STUDIOへ戻る'
    },
    zh: {
      'ALL ITEMS': '全部项目',
      'ALL': '全部',
      'ART · PERFORMANCE · ARCHIVE': '艺术 · 演出 · 档案',
      'ARTIST WORLD': '艺人世界',
      'ARTIST': '艺人',
      'ARTISTS': '艺人',
      'ARTS': '艺术',
      'All videos and collectible objects from the experience, gathered in one place.': '体验中的全部视频与收藏物件汇集于此。',
      'Artist development, musical direction and long-term creative identity.': '艺人发展、音乐指导与长期创意身份塑造。',
      'BACK TO COLLECTIONS': '返回精选',
      'BACK TO EXPLORE': '返回 EXPLORE',
      'BACK TO ICE UNICORN': '返回 ICE UNICORN',
      'BACK TO TIKOONZ': '返回 TIKOONZ',
      'BROADCAST SPACE': '播出空间',
      'BUILD': '构建',
      'Build the future through music, visual and space.': '以音乐、视觉与空间构建未来。',
      'CHANNELS': '频道',
      'CINEMATIC STORY': '电影化叙事',
      'COLLECTION': '精选',
      'COLLECTIONS': '精选',
      'CONTACT': '联系',
      'CREATE ONCE. LIVE EVERYWHERE.': '一次创作，在每个地方持续生长。',
      'CREATIVE IDENTITY': '创意身份',
      'Capture real spaces through photography, LiDAR and spatial data.': '通过摄影、LiDAR与空间数据精确记录真实空间。',
      'Contact OURBANG for projects, partnerships and creative collaborations.': '如需项目、合作伙伴关系或创意协作，请联系OURBANG。',
      'Create digital twins, virtual buildings and showcase worlds.': '构建数字孪生、虚拟建筑与展示世界。',
      'DIGITAL CONSTRUCTION': '数字构建',
      'DIGITAL EXHIBITION · OURBANG': '数字展览 · OURBANG',
      'DYNAMIC IMAGE': '动态影像',
      'Digital environments, virtual buildings and immersive experiences.': '数字环境、虚拟建筑与沉浸式体验。',
      'Digital spaces grow into living creative assets.': '让数字空间成长为持续运作的创意资产。',
      'Discover the artists and creative identities represented by AK ENM.': '探索AK ENM旗下艺人与各具特色的创意身份。',
      'Discover the first creative collections available on OURBANG.': '探索OURBANG首批上线的创意精选。',
      'Dragon 88 pendant': 'Dragon 88 吊坠',
      'EMAIL': '电子邮件',
      'ENTER COLLECTIONS': '进入精选',
      'ENTER WORLD': '进入世界',
      'ENTER': '进入',
      'ENTERTAINMENT · MEDIA · CULTURE': '娱乐 · 媒体 · 文化',
      'EXPLORE': '探索',
      'Enter the ARA KOREA virtual building through OURBANG.': '通过OURBANG进入ARA KOREA虚拟空间。',
      'Enter the official home of AK ENM and its IP projects.': '进入AK ENM官方网站，探索其IP项目。',
      'Every creator keeps a distinctive voice and world.': '保留每位创作者独特的声音与世界。',
      'FILM': '影像',
      'HOME': '首页',
      'IDENTITY': '身份',
      'IMMERSIVE WORLD': '沉浸式世界',
      'IP, artists and original creative content.': 'IP、艺人与原创创意内容。',
      'Ice logo necklace set': 'ICE 标志项链套装',
      'LISTEN': '聆听',
      'LIVE EXPERIENCE': '现场体验',
      'LIVE': '直播',
      'Live sets, audiovisual shows and performance-driven experiences.': '现场演出、视听表演与以演出为核心的体验。',
      'MARKET': '市场',
      'MOTION': '动态视觉',
      'MUSIC · ARTIST · CULTURE': '音乐 · 艺人 · 文化',
      'MUSIC': '音乐',
      'Motion graphics, title design and dynamic visual systems.': '制作动态图形、标题设计与动态视觉系统。',
      'Moving image, cinematic direction and visual storytelling.': '动态影像、电影化指导与视觉叙事。',
      'Music channel': '音乐频道',
      'Music videos, artist films and cinematic branded content.': '制作音乐视频、艺人影像与电影化品牌内容。',
      'NEXT EXPERIENCE': '下一场体验',
      'NEXT LIVE': '下一场直播',
      'NO LIVE BROADCAST NOW': '当前暂无直播',
      'Neon mesh cap': '霓虹网眼帽',
      'OFFICIAL SOUND': '官方声音',
      'OFFICIAL VISUAL': '官方视觉',
      'OFFICIAL WEBSITE': '官方网站',
      'OFFICIAL WORLD': '官方世界',
      'OFFICIAL': '官方网站',
      'OPEN CHANNEL': '打开频道',
      'OPEN EXPERIENCE': '开放体验',
      'ORIGINAL IP': '原创IP',
      'ORIGINAL SOUND': '原创声音',
      'OUR VISION': '我们的愿景',
      'OURBANG brings independent brands, artists and creative projects into one connected platform. Through Scan, Create, Mirror and Explore, physical spaces become immersive digital experiences while every creator keeps a unique identity.': 'OURBANG将独立品牌、艺人与创意项目汇入一个相互连接的平台。通过Scan、Create、Mirror与Explore，真实空间转化为沉浸式数字体验，同时保留每位创作者独特的身份。',
      'OURBANG connects music, visual media and digital space into one continuous world. Each idea becomes a performance, an image and a place people can enter.': 'OURBANG将音乐、视觉媒体与数字空间连接成一个连续的世界。每个创意都可以成为演出、影像，以及人们能够进入的场所。',
      'OURBANG connects performances, conversations and audiences in real time.': 'OURBANG实时连接演出、对话与观众。',
      'OURBANG connects spaces, creators and communities into one evolving digital ecosystem.': 'OURBANG将空间、创作者与社群连接成一个持续演进的数字生态系统。',
      'OURBANG develops sound beyond a single track—into identity, content, performance and a world audiences can enter.': 'OURBANG让声音超越单曲，发展为身份、内容、演出，以及观众能够进入的世界。',
      'OURBANG transforms images and storytelling into memorable brand and artist experiences.': 'OURBANG将影像与叙事转化为令人难忘的品牌与艺人体验。',
      'OURBANG transforms physical places into living digital worlds ready to explore, share and experience.': 'OURBANG将真实场所转化为可探索、可分享、可体验的鲜活数字世界。',
      'Official artist page': '官方艺人页面',
      'Official performance': '官方演出',
      'One beginning.': '一个起点。',
      'Original music, arranging, recording and release-ready production.': '原创音乐、编曲、录音与面向发行的制作。',
      'Original music, sound identity and performance-driven production.': '原创音乐、声音身份与以演出为核心的制作。',
      'PERFORMANCE': '演出',
      'PLATFORM': '平台',
      'PRINCIPLES': '核心理念',
      'PRODUCTION': '制作',
      'PRODUCTS': '产品',
      'Pendant': '吊坠',
      'Physical places become immersive digital worlds.': '将真实场所转化为沉浸式数字世界。',
      'Publish web-accessible environments for audiences, collections and communities.': '发布可供观众、精选项目与社群直接通过网页体验的环境。',
      'SCAN': '扫描',
      'SEND EMAIL': '发送邮件',
      'SHOP': '商店',
      'SOUND. IMAGE. IMPACT.': '声音。影像。冲击。',
      'SPACE': '空间',
      'SPATIAL CAPTURE': '空间采集',
      'START A CONVERSATION': '开始交流',
      'START': '开始',
      'STEP INSIDE THE BOOM BOOM BOOM WORLD.': '进入BOOM BOOM BOOM的世界。',
      'STUDIO': '工作室',
      'Silver 925 pendant': '925银吊坠',
      'THE OFFICIAL RELEASE BY ICE UNICORN.': 'ICE UNICORN官方发行。',
      'THE OFFICIAL VISUAL CONTENT AND PERFORMANCE.': '官方视觉内容与演出。',
      'TIKOONZ · AK ENM · ARA KOREA': 'TIKOONZ · AK ENM · ARA KOREA',
      'Technology stays behind the experience. We begin with curated Showcase Worlds and evolve toward a platform where every digital space becomes a living asset connecting creators, communities and marketplaces.': '技术始终服务于体验。我们从精选Showcase World出发，逐步发展为一个让每个数字空间成为连接创作者、社群与市场的鲜活资产的平台。',
      'Three original worlds.': '三个原创世界。',
      'Upcoming broadcasts will appear here. Live notifications will be added with the OURBANG app.': '即将开始的直播会显示在这里。OURBANG应用也将加入直播提醒功能。',
      'VALUE': '价值',
      'VIDEOS & OBJECTS': '视频与物件',
      'VIDEOS': '视频',
      'VIRTUAL BUILDING': '虚拟空间',
      'VISION': '愿景',
      'VISIT SITE': '访问网站',
      'VISIT': '访问',
      'VISUAL LANGUAGE': '视觉语言',
      'VISUAL': '视觉',
      'Visit the official ARA KOREA website.': '访问ARA KOREA官方网站。',
      'Visual direction, campaigns and distinctive image language.': '通过视觉指导与宣传活动建立独特的影像语言。',
      'WATCH THE CHANNELS.': '观看频道。',
      'WATCH': '观看',
      'WORK': '作品',
      'WORLDS': '世界',
      "Watch AK ENM's original media series and creative stories.": '观看AK ENM原创媒体系列与创意故事。',
      '← BACK TO EXPLORE': '← 返回 EXPLORE',
      '← BACK TO ICE UNICORN': '← 返回 ICE UNICORN',
      '← BACK TO STUDIO': '← 返回 STUDIO'
    }
  };

  const richText = {
    ja: {
      'THE FIRST<br>ARTIST WORLD.': '最初の<br>アーティスト・ワールド。',
      'WORN BY<br>K-POP ICONS.<br><br>FOR THE<br>NEXT CULTURE.': 'K-POPアイコンが<br>選ぶマーケット。<br><br>次の文化の<br>ための空間。',
      'THE OFFICIAL<br>TIKOONZ WORLD.': 'TIKOONZの<br>公式ワールド。',
      'BROADCAST.<br>PERFORMANCE.<br>CULTURE IN MOTION.': '放送。<br>パフォーマンス。<br>動き続ける文化。'
    },
    zh: {
      'THE FIRST<br>ARTIST WORLD.': '首个<br>艺人世界。',
      'WORN BY<br>K-POP ICONS.<br><br>FOR THE<br>NEXT CULTURE.': 'K-POP偶像<br>选择的市场。<br><br>面向下一种<br>文化。',
      'THE OFFICIAL<br>TIKOONZ WORLD.': 'TIKOONZ<br>官方世界。',
      'BROADCAST.<br>PERFORMANCE.<br>CULTURE IN MOTION.': '播出。<br>演出。<br>流动中的文化。'
    }
  };

  const custom = {
    contact: {
      hero: {
        en: '<span>New projects begin.</span><span class="accentLine">Different worlds meet</span><span>through one connection.</span>',
        ko: '<span>새로운 프로젝트가 시작되고,</span><span class="accentLine">서로 다른 세계가</span><span>하나의 연결로 완성됩니다.</span>',
        ja: '<span>新しいプロジェクトが始まり、</span><span class="accentLine">異なる世界が</span><span>ひとつのつながりで結ばれます。</span>',
        zh: '<span>新的项目由此开始，</span><span class="accentLine">不同的世界</span><span>因一次连接而汇聚。</span>'
      },
      'email-description': {
        en: '<span>Contact OURBANG for projects, partnerships</span><span>and new creative collaborations.</span>',
        ko: '<span>프로젝트와 파트너십, 새로운 창작 협업을 위해</span><span>OURBANG에 메시지를 보내주세요.</span>',
        ja: '<span>プロジェクト、パートナーシップ、新しい創造的な協業について</span><span>OURBANGへメッセージをお送りください。</span>',
        zh: '<span>如需项目、合作伙伴关系与新的创意协作，</span><span>欢迎向OURBANG发送消息。</span>'
      },
      'network-title': {
        en: '<span>OUR WORLDS CONNECT</span><span>AS ONE NETWORK.</span>',
        ko: '<span>OURBANG의 세계는</span><span>하나의 네트워크로 연결됩니다.</span>',
        ja: '<span>OURBANGの世界は</span><span>ひとつのネットワークで結ばれます。</span>',
        zh: '<span>OURBANG的世界</span><span>连接成一个网络。</span>'
      },
      statement: {
        en: '<span class="statementSoft">ONE CONNECTION</span><span>BEGINS</span><span>THE NEXT WORLD.</span>',
        ko: '<span class="statementSoft">새로운 연결이,</span><span>다음 세계를</span><span>시작합니다.</span>',
        ja: '<span class="statementSoft">新しいつながりが、</span><span>次の世界を</span><span>始めます。</span>',
        zh: '<span class="statementSoft">新的连接，</span><span>开启</span><span>下一个世界。</span>'
      },
      'closing-copy': {
        en: 'A project can begin with one message.<br>Share your idea, space or story with OURBANG.',
        ko: '하나의 메시지에서 새로운 프로젝트가 시작됩니다.<br>당신의 아이디어와 공간, 이야기를 OURBANG과 나눠주세요.',
        ja: 'ひとつのメッセージから、新しいプロジェクトが始まります。<br>あなたのアイデア、空間、物語をOURBANGと共有してください。',
        zh: '一个消息便能开启新的项目。<br>与OURBANG分享你的创意、空间或故事。'
      }
    },
    live: {
      hero: {
        en: '<span>Performance connects.</span><span class="accentLine">New moments begin</span><span>in real time.</span>',
        ko: '<span>공연과 대화가 연결되고,</span><span class="accentLine">새로운 순간이</span><span>실시간으로 시작됩니다.</span>',
        ja: '<span>パフォーマンスと対話がつながり、</span><span class="accentLine">新しい瞬間が</span><span>リアルタイムで始まります。</span>',
        zh: '<span>演出与对话相连，</span><span class="accentLine">新的瞬间</span><span>实时发生。</span>'
      },
      'live-title': {
        en: '<span>THE NEXT LIVE</span><span>EXPERIENCE IS COMING.</span>',
        ko: '<span>다음 라이브 경험을</span><span>준비하고 있습니다.</span>',
        ja: '<span>次のライブ体験を</span><span>準備しています。</span>',
        zh: '<span>下一场直播体验</span><span>正在准备中。</span>'
      },
      'live-description': {
        en: '<span>Upcoming broadcasts will appear here.</span><span>Live alerts will arrive through the OURBANG app.</span>',
        ko: '<span>예정된 방송이 이곳에 표시됩니다.</span><span>OURBANG 앱에서는 방송 알림 기능도 제공할 예정입니다.</span>',
        ja: '<span>今後の配信予定はここに表示されます。</span><span>OURBANGアプリではライブ通知も提供予定です。</span>',
        zh: '<span>即将开始的直播会显示在这里。</span><span>OURBANG应用也将提供直播提醒。</span>'
      },
      statement: {
        en: '<span class="statementSoft">LIVE MOMENTS BECOME</span><span>SHARED EXPERIENCES.</span>',
        ko: '<span class="statementSoft">하나의 순간이,</span><span>하나의 경험으로</span><span>확장됩니다.</span>',
        ja: '<span class="statementSoft">ひとつの瞬間が、</span><span>共有する体験へ</span><span>広がります。</span>',
        zh: '<span class="statementSoft">每一个瞬间，</span><span>都延展为</span><span>共同的体验。</span>'
      },
      'statement-description': {
        en: 'OURBANG brings performance, conversation<br>and audiences together in real time.',
        ko: 'OURBANG은 공연과 대화, 관객을<br>실시간으로 연결하여 새로운 경험을 만듭니다.',
        ja: 'OURBANGはパフォーマンス、対話、観客を<br>リアルタイムでつなぎ、新しい体験を生み出します。',
        zh: 'OURBANG实时连接演出、对话与观众，<br>创造新的体验。'
      }
    },
    music: {
      hero: {
        en: '<span>Sound shapes identity.</span><span class="accentLine">Production brings</span><span>the world to life.</span>',
        ko: '<span>사운드는 정체성을 만들고,</span><span class="accentLine">프로덕션은 그 세계를</span><span>현실로 확장합니다.</span>',
        ja: '<span>サウンドが個性を形づくり、</span><span class="accentLine">プロダクションがその世界を</span><span>現実へ広げます。</span>',
        zh: '<span>声音塑造身份，</span><span class="accentLine">制作让那个世界</span><span>成为现实。</span>'
      },
      statement: {
        en: '<span class="statementSoft">SOUND BECOMES</span><span>IDENTITY.</span>',
        ko: '<span class="statementSoft">하나의 사운드가,</span><span>하나의 세계를</span><span>완성합니다.</span>',
        ja: '<span class="statementSoft">ひとつのサウンドが、</span><span>ひとつの世界を</span><span>完成させます。</span>',
        zh: '<span class="statementSoft">一种声音，</span><span>完成</span><span>一个世界。</span>'
      }
    },
    space: {
      hero: {
        en: '<span>Spaces become worlds.</span><span class="accentLine">Audiences enter</span><span>and explore freely.</span>',
        ko: '<span>공간은 새로운 세계가 되고,</span><span class="accentLine">관객은 그 안을</span><span>자유롭게 탐험합니다.</span>',
        ja: '<span>空間が新しい世界となり、</span><span class="accentLine">観客はその中を</span><span>自由に探索します。</span>',
        zh: '<span>空间成为新的世界，</span><span class="accentLine">观众进入其中</span><span>自由探索。</span>'
      },
      statement: {
        en: '<span class="statementSoft">SPACE BECOMES</span><span>A WORLD.</span>',
        ko: '<span class="statementSoft">하나의 공간이,</span><span>하나의 세계를</span><span>완성합니다.</span>',
        ja: '<span class="statementSoft">ひとつの空間が、</span><span>ひとつの世界を</span><span>完成させます。</span>',
        zh: '<span class="statementSoft">一个空间，</span><span>完成</span><span>一个世界。</span>'
      }
    },
    visual: {
      hero: {
        en: '<span>Images shape emotion.</span><span class="accentLine">Stories turn moments</span><span>into memory.</span>',
        ko: '<span>이미지는 감정을 만들고,</span><span class="accentLine">이야기는 그 순간을</span><span>기억으로 남깁니다.</span>',
        ja: '<span>イメージが感情を生み、</span><span class="accentLine">物語がその瞬間を</span><span>記憶へ変えます。</span>',
        zh: '<span>影像塑造情感，</span><span class="accentLine">故事让那个瞬间</span><span>成为记忆。</span>'
      },
      statement: {
        en: '<span class="statementSoft">IMAGE BECOMES</span><span>EXPERIENCE.</span>',
        ko: '<span class="statementSoft">하나의 이미지가,</span><span>하나의 기억을</span><span>완성합니다.</span>',
        ja: '<span class="statementSoft">ひとつのイメージが、</span><span>ひとつの記憶を</span><span>完成させます。</span>',
        zh: '<span class="statementSoft">一幅影像，</span><span>完成</span><span>一段记忆。</span>'
      }
    },
    vision: {
      hero: {
        en: '<span>Every space holds value.</span><span class="accentLine">Every story expands</span><span>into a new world.</span>',
        ko: '<span>모든 공간에는 가치가 있고,</span><span class="accentLine">모든 이야기는</span><span>새로운 세계로 확장됩니다.</span>',
        ja: '<span>すべての空間には価値があり、</span><span class="accentLine">すべての物語が</span><span>新しい世界へ広がります。</span>',
        zh: '<span>每个空间都有价值，</span><span class="accentLine">每个故事都延展为</span><span>一个新的世界。</span>'
      },
      'vision-title': {
        en: '<span class="visionSoft">EVERY SPACE</span><span>BECOMES</span><span>A STORY.</span>',
        ko: '<span class="visionSoft">모든 공간은,</span><span>하나의 이야기가</span><span>됩니다.</span>',
        ja: '<span class="visionSoft">すべての空間が、</span><span>ひとつの物語に</span><span>なります。</span>',
        zh: '<span class="visionSoft">每个空间，</span><span>都成为</span><span>一个故事。</span>'
      },
      'vision-copy-1': {
        en: '<span>OURBANG brings independent brands, artists</span><span>and creative projects into one connected platform.</span><span>Through Scan, Create, Mirror and Explore,</span><span>physical spaces become immersive digital experiences.</span>',
        ko: '<span>OURBANG은 독립 브랜드와 아티스트, 창작 프로젝트를</span><span>하나의 연결된 플랫폼으로 이어갑니다.</span><span>Scan, Create, Mirror, Explore를 통해 실제 공간은</span><span>몰입형 디지털 경험으로 확장됩니다.</span>',
        ja: '<span>OURBANGは独立したブランド、アーティスト、創造的プロジェクトを</span><span>ひとつのつながったプラットフォームへ導きます。</span><span>Scan、Create、Mirror、Exploreを通じて、</span><span>現実の空間は没入型デジタル体験へ広がります。</span>',
        zh: '<span>OURBANG将独立品牌、艺人与创意项目</span><span>汇入一个相互连接的平台。</span><span>通过Scan、Create、Mirror与Explore，</span><span>真实空间转化为沉浸式数字体验。</span>'
      },
      'vision-copy-2': {
        en: '<span>Technology stays behind the experience.</span><span>We begin with curated Showcase Worlds</span><span>and evolve toward living digital spaces</span><span>connecting creators, communities and marketplaces.</span>',
        ko: '<span>기술은 경험의 뒤에 머뭅니다.</span><span>OURBANG은 Showcase World에서 시작하여,</span><span>모든 디지털 공간이 창작자와 커뮤니티, 마켓플레이스를</span><span>연결하는 살아 있는 자산으로 발전하도록 만듭니다.</span>',
        ja: '<span>技術は体験の背後にあります。</span><span>OURBANGはShowcase Worldから始まり、</span><span>すべてのデジタル空間をクリエイター、コミュニティ、マーケットプレイスを</span><span>つなぐ生きた資産へと発展させます。</span>',
        zh: '<span>技术始终服务于体验。</span><span>OURBANG从Showcase World出发，</span><span>让每个数字空间发展为连接创作者、社群与市场的</span><span>鲜活资产。</span>'
      },
      statement: {
        en: '<span class="statementSoft">EVERY SPACE CONNECTS</span><span>EVERY POSSIBILITY.</span>',
        ko: '<span class="statementSoft">모든 공간이,</span><span>모든 가능성을</span><span>연결합니다.</span>',
        ja: '<span class="statementSoft">すべての空間が、</span><span>あらゆる可能性を</span><span>つなぎます。</span>',
        zh: '<span class="statementSoft">每个空间，</span><span>连接</span><span>每一种可能。</span>'
      },
      'closing-copy': {
        en: '<span>OURBANG connects spaces, creators and communities into one evolving digital ecosystem.</span>',
        ko: '<span>OURBANG은 공간과 창작자, 커뮤니티를 하나의 성장하는 디지털 생태계로 연결합니다.</span>',
        ja: '<span>OURBANGは空間、クリエイター、コミュニティをひとつの進化するデジタル・エコシステムへつなぎます。</span>',
        zh: '<span>OURBANG将空间、创作者与社群连接成一个持续演进的数字生态系统。</span>'
      }
    },
    create: {
      statement: {
        en: '<span class="soft">CREATE ONCE.</span><span class="strong">LIVE EVERYWHERE.</span>',
        ko: '<span class="soft">한 번의 창작이,</span><span class="strong">모든 곳에서 살아갑니다.</span>',
        ja: '<span class="soft">一度の創作が、</span><span class="strong">あらゆる場所で息づきます。</span>',
        zh: '<span class="soft">一次创作，</span><span class="strong">在每个地方持续生长。</span>'
      }
    }
  };

  function normalize(lang) {
    return supported.includes(lang) ? lang : 'ko';
  }

  function translate(source, lang) {
    const safe = normalize(lang);
    if (safe === 'en') return source;
    if (safe === 'ko') return source;
    return text[safe]?.[source] ?? source;
  }

  function choose(english, korean, lang) {
    const safe = normalize(lang);
    if (safe === 'ko') return korean;
    if (safe === 'en') return english;
    return text[safe]?.[english] ?? english;
  }

  function translateRich(source, lang) {
    const safe = normalize(lang);
    if (safe === 'en') return source;
    if (safe === 'ko') return source;
    return richText[safe]?.[source] ?? source;
  }

  function customHtml(page, key, lang) {
    const safe = normalize(lang);
    return custom[page]?.[key]?.[safe] ?? custom[page]?.[key]?.en ?? '';
  }

  function installAttributes() {
    document.querySelectorAll('[data-en][data-ko]').forEach((el) => {
      const source = el.getAttribute('data-en');
      el.setAttribute('data-ja', text.ja[source] ?? source);
      el.setAttribute('data-zh', text.zh[source] ?? source);
    });

    document.querySelectorAll('[data-en-html][data-ko-html]').forEach((el) => {
      const source = el.getAttribute('data-en-html');
      el.setAttribute('data-ja-html', richText.ja[source] ?? source);
      el.setAttribute('data-zh-html', richText.zh[source] ?? source);
    });

    const style = document.createElement('style');
    style.id = 'ourbang-four-language-fit';
    style.textContent = '@media(max-width:640px){.nav,.ourNav{gap:8px!important}.langs,.ourLangs{gap:2px!important}.langBtn,.ourLangBtn{width:28px!important;height:30px!important;border-radius:10px!important;font-size:9px!important}.langBtn[data-lang="zh"],.ourLangBtn[data-lang="zh"]{width:34px!important}.menuBtn,.ourMenuBtn{width:38px!important}}';
    document.head.appendChild(style);
  }

  function applyDocumentLanguage(lang) {
    const safe = normalize(lang);
    document.documentElement.lang = htmlLang[safe];
    document.querySelectorAll('.langBtn, .ourLangBtn').forEach((button) => {
      button.setAttribute('aria-pressed', String(button.dataset.lang === safe));
    });
    document.querySelectorAll('.menuBtn, .ourMenuBtn').forEach((button) => {
      button.setAttribute('aria-label', menuLabel[safe]);
    });
    return safe;
  }

  window.OURBANG_I18N = {
    supported,
    normalize,
    translate,
    choose,
    translateRich,
    customHtml,
    applyDocumentLanguage
  };

  installAttributes();
})();
