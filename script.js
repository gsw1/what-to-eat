// 初始化数据源
const foodArray = ["家常菜", "清真窗口", "石锅饭", "自选菜", "麻辣烫", "炸串", "烤鸭拌饭", "葱油面", "石锅拌饭", "部队火锅", "麻辣香锅", "炸鸡饭", "茶缸饭", "豆浆油条", "家常菜", "自助餐", "重庆小面", "馄饨", "小笼包", "各类面", "炒饭", "汤面"];

// 推荐句子字典
const sentenceDictionary = {
    "家常菜": ["香喷喷的家常菜，温暖你的胃，治愈你的心", "家常菜的味道，是家的味道，是爱的味道", "今天就吃家常菜吧，简单又美味，营养又健康"],
    "清真窗口": ["清真美食，风味独特，让你回味无穷", "清真窗口的美食，干净卫生，味道正宗", "试试清真窗口的特色，给你的味蕾新体验"],
    "石锅饭": ["热气腾腾的石锅饭，香气四溢，口感丰富", "石锅饭的滋滋声，是最美妙的用餐序曲", "石锅饭的焦香，让你一口接一口停不下来"],
    "自选菜": ["自选菜，随心所欲，想吃什么拿什么", "丰富的自选菜，满足你的所有口味需求", "自选菜的多样性，让你的午餐不再单调"],
    "麻辣烫": ["麻辣烫，又麻又辣又香，让你欲罢不能", "一碗麻辣烫，温暖你的身心，激活你的味蕾", "麻辣烫的麻辣鲜香，是冬日里的最佳选择"],
    "炸串": ["金黄酥脆的炸串，香气扑鼻，口感绝佳", "炸串的诱惑，谁能抵挡？快来尝一尝吧", "炸串的外酥里嫩，让你一口就爱上"],
    "烤鸭拌饭": ["烤鸭拌饭，鸭肉香嫩，米饭入味，完美搭配", "烤鸭的油脂与米饭交融，每一口都是享受", "烤鸭拌饭，营养均衡，味道鲜美，不容错过"],
    "葱油面": ["葱油面的葱香，扑鼻而来，简单却美味", "一碗葱油面，清淡爽口，回味无穷", "葱油面的鲜香，让你感受到平凡中的幸福"],
    "石锅拌饭": ["石锅拌饭，食材丰富，色彩斑斓，营养均衡", "石锅的高温让米饭焦香，与配菜完美融合", "石锅拌饭的层次感，让你的味蕾充满惊喜"],
    "部队火锅": ["部队火锅，食材丰富，汤汁浓郁，温暖身心", "部队火锅的热闹氛围，最适合和朋友分享", "部队火锅的辣中带甜，让你欲罢不能"],
    "麻辣香锅": ["麻辣香锅，又麻又辣又香，让你胃口大开", "麻辣香锅的香气，隔着几条街都能闻到", "麻辣香锅的重口味，是嗜辣者的最爱"],
    "炸鸡饭": ["炸鸡饭，鸡肉酥脆，米饭香软，完美组合", "炸鸡的金黄酥脆，搭配香甜的米饭，绝配", "炸鸡饭的满足感，让你一整天都充满活力"],
    "茶缸饭": ["茶缸饭，创意十足，味道独特，值得一试", "茶缸饭的复古风格，让用餐更有仪式感", "茶缸饭的分量十足，让你吃得饱饱的"],
    "豆浆油条": ["豆浆油条，经典搭配，营养健康，开启美好一天", "油条的酥脆，搭配豆浆的香浓，完美早餐", "豆浆油条的传统味道，让你回味无穷"],
    "自助餐": ["自助餐，品种丰富，想吃多少拿多少，超值享受", "自助餐的多样性，满足你所有的美食欲望", "自助餐的自由选择，让你的用餐更有乐趣"],
    "重庆小面": ["重庆小面，麻辣鲜香，面条劲道，正宗风味", "重庆小面的麻辣，让你大汗淋漓却停不下来", "重庆小面的浓郁汤底，是其灵魂所在"],
    "馄饨": ["馄饨，皮薄馅大，汤清味鲜，暖心又暖胃", "馄饨的鲜香，让你感受到家的温暖", "一碗馄饨，简单却美味，是冬日里的最佳选择"],
    "小笼包": ["小笼包，皮薄馅嫩，汤汁鲜美，一口爆汁", "小笼包的精致，让用餐成为一种艺术", "小笼包的鲜美汤汁，是其最大的亮点"],
    "各类面": ["各类面，品种繁多，满足你的所有面食需求", "一碗好面，温暖你的胃，治愈你的心", "各类面的不同风味，让你的味蕾充满惊喜"],
    "炒饭": ["炒饭，粒粒分明，香气四溢，简单却美味", "炒饭的锅气，是其最迷人的地方", "一碗炒饭，快速又美味，是忙碌时的最佳选择"],
    "汤面": ["汤面，汤清味鲜，面条劲道，暖心又暖胃", "汤面的热汤，温暖你的身心，激活你的味蕾", "一碗汤面，简单却营养，是日常饮食的好选择"]
};

// 配色字典
const colorDictionary = {
    "家常菜": ["#FFF5E1", "#FF6B6B"],
    "清真窗口": ["#E1F5FF", "#3498DB"],
    "石锅饭": ["#E1FFEB", "#2ECC71"],
    "自选菜": ["#FFE1F5", "#9B59B6"],
    "麻辣烫": ["#FFE1E1", "#E74C3C"],
    "炸串": ["#FFF5CD", "#F1C40F"],
    "烤鸭拌饭": ["#FFF5E1", "#E67E22"],
    "葱油面": ["#F5FFE1", "#8E44AD"],
    "石锅拌饭": ["#EBEBFF", "#667EEA"],
    "部队火锅": ["#FFE1EB", "#E74C93"],
    "麻辣香锅": ["#FFF5CD", "#D35400"],
    "炸鸡饭": ["#E1FFF5", "#3498DB"],
    "茶缸饭": ["#F5E1E1", "#F39C12"],
    "豆浆油条": ["#FFFFE1", "#F1C40F"],
    "自助餐": ["#E1F5FF", "#2ECC71"],
    "重庆小面": ["#FFE1E1", "#D35400"],
    "馄饨": ["#E1FFF5", "#1ABC9C"],
    "小笼包": ["#FFF5E1", "#E67E22"],
    "各类面": ["#EBEBFF", "#3498DB"],
    "炒饭": ["#FFF5CD", "#F1C40F"],
    "汤面": ["#E1FFEB", "#2ECC71"]
};

// 随机食物函数
function randomFood() {
    // 随机选择食物
    const randomIndex = Math.floor(Math.random() * foodArray.length);
    const selectedFood = foodArray[randomIndex];
    
    // 更新食物标签
    const foodLabel = document.querySelector('.food-label');
    foodLabel.textContent = selectedFood;
    
    // 获取推荐句子
    const sentences = sentenceDictionary[selectedFood];
    const sentenceLabel = document.querySelector('.sentence-label');
    if (sentences && sentences.length > 0) {
        const sentenceIndex = Math.floor(Math.random() * sentences.length);
        const selectedSentence = sentences[sentenceIndex];
        sentenceLabel.textContent = selectedSentence;
    } else {
        sentenceLabel.textContent = "美味的食物，值得一试！";
    }
    
    // 更新界面颜色
    updateUIWithColorForFood(selectedFood);
    
    // 添加动画效果
    addAnimation();
}

// 更新界面颜色函数
function updateUIWithColorForFood(food) {
    // 获取对应食物的颜色方案
    const colors = colorDictionary[food];
    if (colors && colors.length >= 2) {
        const backgroundColor = colors[0];
        const accentColor = colors[1];
        
        // 更新背景颜色
        document.body.style.backgroundColor = backgroundColor;
        
        // 更新按钮颜色
        const randomButton = document.querySelector('.random-button');
        randomButton.style.backgroundColor = accentColor;
        
        // 更新标题颜色
        const title = document.querySelector('.title');
        title.style.color = accentColor;
        
        // 更新结果卡片阴影颜色
        const resultCard = document.querySelector('.result-card');
        resultCard.style.boxShadow = `0 4px 8px rgba(${hexToRgb(accentColor)}, 0.2)`;
    }
}

// 十六进制颜色转RGB函数
function hexToRgb(hex) {
    // 移除#号
    hex = hex.replace(/^#/, '');
    
    // 解析RGB值
    const bigint = parseInt(hex, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    
    return `${r}, ${g}, ${b}`;
}

// 添加动画效果函数
function addAnimation() {
    const foodLabel = document.querySelector('.food-label');
    const sentenceLabel = document.querySelector('.sentence-label');
    
    // 添加食物标签动画
    foodLabel.classList.remove('animate');
    void foodLabel.offsetWidth; // 触发重排
    foodLabel.classList.add('animate');
    
    // 添加推荐句子标签动画
    sentenceLabel.classList.remove('animate');
    void sentenceLabel.offsetWidth; // 触发重排
    sentenceLabel.classList.add('animate');
}

// 初始化默认颜色
function initDefaultColor() {
    updateUIWithColorForFood('家常菜');
}

// 页面加载完成后初始化
window.onload = function() {
    initDefaultColor();
};