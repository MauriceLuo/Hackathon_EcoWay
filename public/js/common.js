// 共享的翻译配置
const translations = {
    'zh-CN': {
        dashboard: '控制面板',
        virtualHome: '虚拟家园',
        carbonCredits: '碳积分',
        settings: '设置',
        family: '家庭社交',
        familyMembers: '家庭成员',
        friends: '好友列表',
        familyRanking: '家庭排名',
        inviteFriend: '邀请好友',
        addFamily: '添加家人',
        // 控制面板相关
        todayPower: '今日用电量',
        monthlyWater: '本月用水量',
        carbonBalance: '碳积分余额',
        energyTrend: '能源使用趋势',
        livingRoomAC: '客厅空调',
        waterHeater: '热水器',
        tempSetting: '温度设置',
        energyTask: '节能任务',
        acChallenge: '空调26℃挑战',
        realTimeAdvice: '实时能源建议',
        weather: '天气预报',
        powerSavingTip: '建议调高空调温度2℃，可节省15%用电量',
        heaterTip: '检测到热水器待机中，建议关闭',
        weatherDesc: '多云转雨，建议开启节能模式',
        // 虚拟家园相关
        level: '等级',
        buildingUpgrade: '建筑升级',
        experience: '经验值',
        solarPanel: '太阳能板',
        solarPanelDesc: '减少20%用电量',
        rainCollector: '雨水收集器',
        rainCollectorDesc: '减少15%用水量',
        buildingProps: '建筑属性',
        energyEfficiency: '能源效率',
        ecoIndex: '环保指数',
        achievements: '成就系统',
        energyPioneer: '节能先锋',
        ecoMaster: '环保达人',
        // 台风任务相关
        typhoonMission: '台风任务',
        typhoonAlert: '台风警报：天鸽',
        windSpeed: '当前风力',
        rainfall: '降雨量',
        emergencyTips: '紧急提示',
        tip1: '关闭所有窗户，确保门窗密封',
        tip2: '检查排水系统，预防积水',
        tip3: '准备应急照明设备',
        challenge: '台风期间节能挑战',
        progress: '当前进度',
        reward: '奖励',
        carbonPoints: '碳积分',
        lightingTask: '应急照明任务',
        lightingDesc: '使用LED应急照明，减少用电量',
        waterTask: '雨水回收任务',
        waterDesc: '收集雨水用于日常用水',
        complete: '完成任务',
        energyMonitor: '实时能源监测',
        powerUsage: '用电量',
        waterUsage: '用水量',
        powerReduction: '较平时减少70%',
        waterReduction: '较平时减少55%',
        emergency: '紧急联系',
        emergencyHotline: '紧急热线',
        propertyMgmt: '物业管理',
        maintenance: '维修服务',
        // 碳积分相关
        carbonHistory: '积分历史',
        carbonExchange: '积分兑换',
        carbonRanking: '节能排行',
        // 设置相关
        accountSettings: '账户设置',
        notifications: '通知设置',
        deviceManagement: '设备管理',
        about: '关于我们'
    },
    'zh-TW': {
        dashboard: '控制面板',
        virtualHome: '虛擬家園',
        carbonCredits: '碳積分',
        settings: '設置',
        // ... 其他翻译
    },
    'en': {
        dashboard: 'Dashboard',
        virtualHome: 'Virtual Home',
        carbonCredits: 'Carbon Credits',
        settings: 'Settings',
        family: 'Family & Social',
        familyMembers: 'Family Members',
        friends: 'Friend List',
        familyRanking: 'Family Ranking',
        inviteFriend: 'Invite Friend',
        addFamily: 'Add Family Member',
        // Dashboard related
        todayPower: "Today's Electricity Usage",
        monthlyWater: "This Month's Water Usage",
        carbonBalance: 'Carbon Credit Balance',
        energyTrend: 'Energy Usage Trends',
        livingRoomAC: 'Living Room AC',
        waterHeater: 'Water Heater',
        tempSetting: 'Temperature Setting',
        energyTask: 'Energy Saving Tasks',
        acChallenge: 'AC 26°C Challenge',
        realTimeAdvice: 'Real-time Energy Suggestions',
        weather: 'Weather Forecast',
        powerSavingTip: 'Suggest increasing AC temperature by 2°C to save 15% electricity',
        heaterTip: 'Water heater detected on standby, suggest turning off',
        weatherDesc: 'Cloudy with chance of rain, suggest enabling energy saving mode',
        // Virtual Home related
        level: 'Level',
        buildingUpgrade: 'Building Upgrade',
        experience: 'Experience',
        solarPanel: 'Solar Panel',
        solarPanelDesc: 'Reduces electricity usage by 20%',
        rainCollector: 'Rain Collector',
        rainCollectorDesc: 'Reduces water usage by 15%',
        buildingProps: 'Building Attributes',
        energyEfficiency: 'Energy Efficiency',
        ecoIndex: 'Eco Index',
        achievements: 'Achievement System',
        energyPioneer: 'Energy Pioneer',
        ecoMaster: 'Eco Master',
        // Typhoon Mission related
        typhoonMission: 'Typhoon Mission',
        typhoonAlert: 'Typhoon Alert: Hato',
        windSpeed: 'Current Wind Force',
        rainfall: 'Rainfall',
        emergencyTips: 'Emergency Tips',
        tip1: 'Close all windows and ensure they are sealed.',
        tip2: 'Check drainage systems to prevent flooding.',
        tip3: 'Prepare emergency lighting equipment.',
        challenge: 'Energy Saving Challenge During Typhoon',
        progress: 'Current Progress',
        reward: 'Reward',
        carbonPoints: 'Carbon Credits',
        lightingTask: 'Emergency Lighting Task',
        lightingDesc: 'Use LED emergency lighting to reduce electricity consumption.',
        waterTask: 'Rainwater Harvesting Task',
        waterDesc: 'Collect rainwater for daily use.',
        complete: 'Complete Mission',
        energyMonitor: 'Real-time Energy Monitoring',
        powerUsage: 'Power Usage',
        waterUsage: 'Water Usage',
        powerReduction: '70% less than usual',
        waterReduction: '55% less than usual',
        emergency: 'Emergency Contact',
        emergencyHotline: 'Emergency Hotline',
        propertyMgmt: 'Property Management',
        maintenance: 'Maintenance Service',
        // Carbon Credits related
        carbonHistory: 'Credit History',
        carbonExchange: 'Redeem Points',
        carbonRanking: 'Energy Saving Ranking',
        // Settings related
        accountSettings: 'Account Settings',
        notifications: 'Notification Settings',
        deviceManagement: 'Device Management',
        about: 'About Us'
    },
    'ja': {
        dashboard: 'ダッシュボード',
        virtualHome: '仮想ホーム',
        carbonCredits: 'カーボンクレジット',
        settings: '設定',
        // ... 其他翻译
    },
    'fr': {
        dashboard: 'Tableau de Bord',
        virtualHome: 'Maison Virtuelle',
        carbonCredits: 'Crédits Carbone',
        settings: 'Paramètres',
        // ... 其他翻译
    },
    'es': {
        dashboard: 'Panel de Control',
        virtualHome: 'Hogar Virtual',
        carbonCredits: 'Créditos de Carbono',
        settings: 'Configuración',
        // ... 其他翻译
    }
};

// 导航配置
const navigation = [
    { id: 'dashboard', icon: 'bxs-dashboard', href: 'dashboard.html', textKey: 'dashboard' },
    { id: 'virtualHome', icon: 'bx-home', href: 'virtual-home.html', textKey: 'virtualHome' },
    { id: 'carbonCredits', icon: 'bx-coin-stack', href: 'carbon-credits.html', textKey: 'carbonCredits' },
    { id: 'settings', icon: 'bx-cog', href: 'settings.html', textKey: 'settings' }
];

// 更新导航栏
function updateNavigation(currentLang, currentPage) {
    const navContainer = document.querySelector('.nav-pills');
    navContainer.innerHTML = navigation.map(item => `
        <a class="nav-link ${currentPage === item.id ? 'active' : ''}" href="${item.href}">
            <i class='bx ${item.icon}'></i>
            <span class="nav-text">${translations[currentLang][item.textKey]}</span>
        </a>
    `).join('');
    // Update project name in sidebar
    const projectNameElement = document.querySelector('.sidebar h4');
    if (projectNameElement) {
        projectNameElement.textContent = 'EcoWay';
    }
}

// 更新语言选择器
function updateLanguageSelector(currentLang) {
    const selector = document.getElementById('languageSelect');
    if (selector) {
        selector.value = currentLang;
    }
}

// 初始化页面
function initializePage(pageName) {
    const savedLang = localStorage.getItem('preferred-language') || 'en'; // Default to English
    document.documentElement.lang = savedLang;
    updateNavigation(savedLang, pageName);
    updateLanguageSelector(savedLang);
    // Update page titles based on the selected language
    const pageTitleKey = pageName;
    if (translations[savedLang] && translations[savedLang][pageTitleKey]) {
        document.title = `EcoWay - ${translations[savedLang][pageTitleKey]}`;
    } else {
        document.title = 'EcoWay'; // Default title
    }
    return savedLang;
}

// 导出函数和变量
window.translations = translations;
window.updateNavigation = updateNavigation;
window.initializePage = initializePage; 