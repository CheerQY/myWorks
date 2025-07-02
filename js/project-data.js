// 项目数据配置
const projectData = {
  'project1': {
    title: '中望职业技能认证平台',
    description: '打造标准化、智能化的能力认证平台，科学评估用户CAD/3D/CAE能力，建立认证-培训-就业商业闭环。',
    category: '认证平台',
    image: 'images/project1.jpg',
    tags: ['产品规划', '用户体验', '数据分析'],
    stats: {
      tag1: { label: '年认证用户', value: '5万+', color: 'blue' },
      tag2: { label: '自动化率', value: '90%+', color: 'green' },
      tag3: { label: '已上线证书', value: '7个', color: 'purple' }
    },
    prototype: 'https://app.mockplus.cn/s/Vxk_Le6In?',
    background: {
      industryPain: {
        title: '行业痛点',
        description: '制造业数字化转型，企业对CAD/3D/CAE技能人才的需求日益增长，但缺乏统一的技能评估标准和认证体系。',
        list: [
          '技能评估标准不统一',
          '认证流程复杂且效率低',
          '缺乏与就业市场的有效对接',
          '培训资源分散且质量参差不齐'
        ]
      },
      companyNeed: {
        title: '企业需求',
        description: '中望软件需建立行业标准体系，增强品牌影响力。',
        list: [
          '推动行业标准制定，提升整体竞争力',
          '打造权威认证体系，助力人才培养',
          '增强品牌影响力，扩大市场份额'
        ]
      }
    },
    goals: [
      {
        title: '建立标准化认证体系',
        description: '制定统一的CAD/3D/CAE技能评估标准，建立科学、公正的认证体系。',
        icon: 'fas fa-chart-line',
        color: 'blue'
      },
      {
        title: '实现智能化评估',
        description: '利用AI技术实现自动化技能评估，提高认证效率和准确性。',
        icon: 'fas fa-robot',
        color: 'green'
      },
      {
        title: '构建就业生态',
        description: '连接认证、培训、就业环节，形成完整的商业闭环。',
        icon: 'fas fa-handshake',
        color: 'purple'
      }
    ],
    results: {
      data: [
        { label: '认证用户数', value: '5万+', percentage: 30, color: 'blue' },
        { label: '自动化率', value: '90%', percentage: 90, color: 'green' },
        { label: '已上线证书', value: '7个', percentage: 50, color: 'purple' }
      ],
      business: [
        {
          title: '标准化认证体系',
          description: '建立了覆盖CAD/3D/CAE全领域的技能评估标准',
          color: 'blue'
        },
        {
          title: '智能化评估系统',
          description: 'AI自动评分系统准确率达到95%，大幅提升认证效率。',
          color: 'green'
        },
        {
          title: '就业生态闭环',
          description: '与多家企业建立合作关系，认证用户就业率达到80%。',
          color: 'purple'
        }
      ]
    },
    showcase: [
      { image: 'images/rz1.jpg', title: '培训认证体系', description: '中望普/职/高认证体系' },
      { image: 'images/rz2.jpg', title: '认证商品详情', description: '报名/学习/练习入口' },
      { image: 'images/rz3.jpg', title: '课程视频学习', description: '证书配套的学习资料' },
      { image: 'images/rz4.jpg', title: '在线考试系统', description: '智能抽题组卷，智能防作弊。' },
      { image: 'images/rz5.jpg', title: '证书生成系统', description: '可视化证书模板生成调试发放系统' },
      { image: 'images/rz6.jpg', title: '证书查询', description: '一键证书查询，证书防伪' }
    ],
    videos: [
      {
        id: 'demo-video',
        title: '证书模板生成',
        description: '此项目片段为证书模板生成系统，支持可视化设计模板，批量生成证书，提高证书发放效率。',
        poster: 'images/project1.jpg',
        sources: [
          { src: 'videos/Certificate.mp4', type: 'video/mp4' }
        ],
        duration: '3:45',
        quality: '1080p',
        type: 'demo'
      }
    ],
    techStack: [
      { name: 'React', icon: 'fab fa-react', color: 'blue', description: '前端框架' },
      { name: 'Node.js', icon: 'fab fa-node-js', color: 'green', description: '后端服务' },
      { name: 'MongoDB', icon: 'fas fa-database', color: 'purple', description: '数据库' },
      { name: 'AWS', icon: 'fas fa-cloud', color: 'blue', description: '云服务' }
    ],
    summary: {
      success: [
        '深入的竞品调研为产品设计提供了方向',
        '敏捷开发方法确保了项目的快速迭代',
        'AI技术的应用显著提升了系统智能化水平'
      ],
      future: [
        '扩展更多高级技术领域的认证体系',
        '加强AI算法优化，提升AI评分准确性',
        '建立更广泛的校企合作，推动岗课赛证的融合'
      ]
    },
    personalDuties: [
      '搭建全自动化流程：报名→学习→练习→考试→评分→发证全流程自动化',
      '搭建底层服务：搭建用户中心、考试中心、电商中心、证书中台等底层服务',
      '使用AI赋能：AI抽题组卷(实现千人千卷)；智能防作弊(人脸识别、视频监控、异常行为检测）；AI评分(实操题自动评分)'
    ]
  },
  
  'project2': {
    title: '中教云智慧教学平台',
    description: '建设AI赋能型教学平台，融合全学段/学科/多版本数字教材与资源，助力"停课不停学"与教育信息化升级。',
    category: 'B端教育',
    image: 'images/project2.jpg',
    tags: ['平台设计', 'AI赋能', '资源管理'],
    stats: {
      tag1: { label: '注册用户', value: '400万+', color: 'blue' },
      tag2: { label: '接入学校', value: '1万+', color: 'green' },
      tag3: { label: '数字资源', value: '160万+', color: 'purple' },
    },
    prototype: 'https://app.mockplus.cn/s/67U8QNPja?',
    background: {
      industryPain: {
        title: '行业痛点',
        description: '2019年疫情爆发，教育部提倡"停课不停学"。为响应《教育信息化2.0行动计划》"三全两高一大"目标，解决以下挑战。',
        list: [
          '教育资源分散，优质内容难以共享',
          '学情追踪与个性化分析困难',
          '区域教育发展不均衡，城乡差距大'
        ]
      },
      companyNeed: {
        title: '平台建设目标',
        description: '为解决上述行业痛点，建设一个融合全学段、全学科、多版本数字教材和数字资源的AI赋能型教学平台。',
        list: [
          '打造覆盖全学段、全学科的数字教材应用平台',
          '集成多版本数字资源，满足多样化教学需求',
          '利用AI技术提升资源推荐与学情分析能力'
        ]
      }
    },
    goals: [
      {
        title: '构建智能教学平台',
        description: '打造集教学、学习、评估于一体的智能化教育平台。',
        icon: 'fas fa-chalkboard-teacher',
        color: 'blue'
      },
      {
        title: '实现个性化学习',
        description: '基于AI算法为学生提供个性化学习路径和资源推荐。',
        icon: 'fas fa-user-graduate',
        color: 'green'
      },
      {
        title: '提升教学效率',
        description: '为教师提供丰富的教学工具和资源，提升教学效果。',
        icon: 'fas fa-tachometer-alt',
        color: 'purple'
      }
    ],
    results: {
      data: [
        { label: '注册用户', value: '400万+', percentage: 60, color: 'blue' },
        { label: '接入学校', value: '1万+', percentage: 30, color: 'green' },
        { label: '数字资源', value: '160万+', percentage: 70, color: 'purple' }
      ],
      business: [
        {
          title: '教学效率提升',
          description: '教师备课时间减少60%，学生学习效率提升40%。',
          color: 'blue'
        },
        {
          title: '资源精准推荐',
          description: 'AI推荐准确率达到88%，教师满意度达到90%。',
          color: 'green'
        },
        {
          title: '资源整合',
          description: '整合全国优质教育资源，覆盖K12全学段全学科。',
          color: 'purple'
        }
      ]
    },
    showcase: [
      { image: 'images/smartTeach6.jpg', title: '教学平台主页', description: '直观易用的教学界面，支持多种教学模式。' },
      { image: 'images/smartTeach2.jpg', title: '资源详情页', description: '智能推荐教学资源，提高教师备课效率。' },
      { image: 'images/smartTeach1.jpg', title: '资源管理中心', description: '海量教育资源管理，支持多维度检索。' },
      { image: 'images/smartTeach4.jpg', title: '学习数据分析', description: '学习数据监控，科学评估学习效果。' },
      { image: 'images/smartTeach5.jpg', title: '数字教材', description: '搭配数字教材，实现配套教学。' },
      { image: 'images/smartTeach3.jpg', title: '智能组卷', description: '支持按章节、知识点智能抽题组卷' }
    ],
    videos: [
      {
        id: 'demo-video',
        title: '资源中心介绍视频',
        description: '资源中心亮点功能介绍。',
        poster: 'images/project2.jpg',
        sources: [
          { src: 'videos/SmartTeaching.mp4', type: 'video/mp4' }
        ],
        duration: '3:45',
        quality: '1080p',
        type: 'demo'
      },
    ],
    techStack: [
      { name: 'Vue.js', icon: 'fab fa-vuejs', color: 'green', description: '前端框架' },
      { name: 'Python', icon: 'fab fa-python', color: 'blue', description: '后端开发' },
      { name: 'MySQL', icon: 'fas fa-database', color: 'orange', description: '数据库' },
      { name: 'TensorFlow', icon: 'fas fa-brain', color: 'purple', description: 'AI框架' }
    ],
    summary: {
      success: [
        '准确把握教育行业痛点，产品定位精准',
        'AI技术在教育场景的有效应用',
        '大规模用户测试确保了产品稳定性',
      ],
      future: [
        '扩展更多教育场景和学科',
        '加强AI算法优化，提升推荐准确性',
        '构建教育生态闭环'
      ]
    },
    personalDuties: [
      'AI基础打造：资源结构化改造，构建AI驱动的多维度资源标标签体系，建设学科知识图谱，为实现个性化教与学（资源智能推荐、学情深度分析）提供AI基础',
      '智能组卷设计：基于AI算法支持章节、知识点、难度、题型等多维度策略抽题，设计并实现抽题过程中的自适应容错机制。'
    ]
  },
  
  'project3': {
    title: '数字教材制作工具',
    description: '开发数字教材制作工具，实现制作→审核→发布→授权闭环，支撑个性化学习分析。',
    category: '工具设计',
    image: 'images/project3.jpg',
    tags: ['工具设计', '流程优化', '效率提升', '内容管理'],
    stats: {
      tag1: { label: '多终端适配', value: '3个', color: 'blue' },
      tag2: { label: '效率提升', value: '4倍', color: 'green' },
      tag3: { label: '制作质量', value: '95%', color: 'purple' },
    },
    prototype: 'https://app.mockplus.cn/s/prt7EaOIo?',
    background: {
      industryPain: {
        title: '行业痛点',
        description: '传统教材数字化存在瓶颈，主要体现在资源整合效率低、跨终端适配成本高、学习行为追踪困难等方面。',
        list: [
          '教材与资源整合效率低，难以快速响应教学需求',
          '多终端适配成本高，数字内容难以统一管理',
          '学习行为追踪与数据分析困难，难以实现个性化教学'
        ]
      },
      companyNeed: {
        title: '产品建设目标',
        description: '为破解上述难题，开发数字教材制作工具，实现制作→审核→发布→授权流程闭环，并建设教材-资源-用户行为三元数据体系，支撑个性化学习分析。',
        list: [
          '开发一体化数字教材制作与管理工具',
          '实现教材制作、审核、发布、授权全流程闭环',
          '建设教材-资源-用户行为三元数据体系，支撑个性化学习分析'
        ]
      }
    },
    goals: [
      {
        title: '提升制作效率',
        description: '通过工具化手段大幅提升教材制作效率和质量。',
        icon: 'fas fa-tools',
        color: 'blue'
      },
      {
        title: '标准化流程',
        description: '建立标准化的教材制作、审核、发布流程。',
        icon: 'fas fa-sitemap',
        color: 'green'
      },
      {
        title: '支持个性化',
        description: '为个性化学习提供内容制作和分析支持。',
        icon: 'fas fa-user-cog',
        color: 'purple'
      }
    ],
    results: {
      data: [
        { label: '多终端适配', value: '3个', percentage: 90, color: 'blue' },
        { label: '效率提升', value: '4倍', percentage: 100, color: 'green' },
        { label: '制作质量', value: '95%', percentage: 95, color: 'purple' }
      ],
      business: [
        {
          title: '制作效率大幅提升',
          description: '教材制作时间从4个月缩短到1个月，效率提升4倍。',
          color: 'blue'
        },
        {
          title: '标准化流程建立',
          description: '建立了完整的制作→审核→发布→授权闭环流程。',
          color: 'green'
        },
        {
          title: '不限终端阅读',
          description: '通过编辑器制作的教材可以在电脑手机和pad上查看。',
          color: 'purple'
        }
      ]
    },
    showcase: [
      { image: 'images/BookStudio1.jpg', title: '工具启动页面', description: '支持创建空白文档或从PDF导入' },
      { image: 'images/BookStudio3.jpg', title: '制作工具界面', description: '直观易用的可视化制作工具，支持多种内容类型。' },
      { image: 'images/BookStudio5.jpg', title: '多终端适配', description: '发布文件支持PC/移动端/Pad端阅读。' },
      { image: 'images/BookStudio4.jpg', title: '阅读器主页', description: '配套BookReader端查看教材'},
      { image: 'images/BookStudio2.jpg', title: '教材阅读界面', description: '支持画笔、聚焦多种阅读工具' },
      { image: 'images/BookStudio6.jpg', title: '综合管理平台', description: '支持教材审核/授权/版本发布等。' }
    ],
    videos: [
      {
        id: 'demo-video',
        title: '项目片段',
        description: '展示教材编辑器的部分功能，更直观的感受教材编辑的便捷性',
        poster: 'images/project3.jpg',
        sources: [
          { src: 'videos/BookStudio.mp4', type: 'video/mp4' }
        ],
        duration: '3:45',
        quality: '1080p',
        type: 'demo'
      }
    ],
    techStack: [
      { name: 'Angular', icon: 'fab fa-angular', color: 'red', description: '前端框架' },
      { name: 'Java', icon: 'fab fa-java', color: 'orange', description: '后端开发' },
      { name: 'PostgreSQL', icon: 'fas fa-database', color: 'blue', description: '数据库' },
      { name: 'Docker', icon: 'fab fa-docker', color: 'blue', description: '容器化' }
    ],
    summary: {
      success: [
        '准确把握用户需求，工具功能设计合理',
        '可视化编辑显著提升了制作效率',
        '多终端适配降低了研发成本，提升了用户体验',
      ],
      future: [
        '加强AI辅助制作功能',
        '探索云端协作模式',
        '构建内容生态平台'
      ]
    },
    personalDuties: [
      '独立Owner产品：完成需求分析，里程碑规划，MVP产品打造，版本规划迭代10次+',
      '生态体系构建：设计"制作-管理-阅读"三端协同架构，制作端支持100%可视化编辑',
      '结构化存储：6类交互组件+3类高级插件+12种资源类型，构建教材元数据，实现结构化存储'
    ]
  },
  
  'project4': {
    title: '智慧园区解决方案',
    description: '打造SaaS化智慧园区系统，融合物联网/大数据/AI，服务管理方、企业与员工，支撑智能楼宇运营。',
    category: '解决方案',
    image: 'images/project4.jpg',
    tags: ['SaaS平台', '物联网', '大数据', '智能楼宇'],
    stats: {
      tag1: { label: '落地园区', value: '10+', color: 'blue' },
      tag2: { label: '硬件设备', value: '20+', color: 'green' },
      tag3: { label: '子系统', value: '30+', color: 'purple' },
    },
    prototype: 'https://app.mockplus.cn/s/ULw44yHQx?',
    background: {
      industryPain: {
        title: '行业痛点',
        description: '传统园区管理与服务模式难以满足多元化、智能化的管理和生活需求，信息孤岛、数据分散、服务体验不佳等问题突出。',
        list: [
          '管理、办公、生活服务割裂，信息化水平低',
          '多系统数据分散，缺乏统一整合与分析',
          '园区决策缺乏数据支撑，运营效率低'
        ]
      },
      companyNeed: {
        title: '平台建设目标',
        description: '为园区提供从管理到生活的多维度信息化服务，打造智慧园区SaaS系统，融合物联网、大数据、AI等技术，提升园区智能化水平。',
        list: [
          '高度融合管理、办公、生活、服务于一体',
          '打造优质互联网智能楼宇应用，已实现30+子系统',
          '整合人/车/物/设备等多维度数据，数据驱动决策'
        ]
      }
    },
    goals: [
      {
        title: '构建统一管理平台',
        description: '打造覆盖园区全场景的一体化管理平台。',
        icon: 'fas fa-building',
        color: 'blue'
      },
      {
        title: '实现智能化运营',
        description: '通过物联网和AI技术实现园区智能化运营。',
        icon: 'fas fa-cogs',
        color: 'green'
      },
      {
        title: '提升运营效率',
        description: '大幅提升园区运营效率，降低管理成本。',
        icon: 'fas fa-chart-line',
        color: 'purple'
      }
    ],
    results: {
      data: [
        { label: '服务园区', value: '10+', percentage: 10, color: 'blue' },
        { label: '连接设备', value: '20+', percentage: 30, color: 'green' },
        { label: '建设子系统', value: '30+', percentage: 70, color: 'purple' }
      ],
      business: [
        {
          title: '运营效率显著提升',
          description: '园区运营效率提升，管理成本降低。',
          color: 'blue'
        },
        {
          title: '智能化水平提升',
          description: '实现设备自动化管理，人工干预减少。',
          color: 'green'
        },
        {
          title: '数据驱动决策',
          description: '基于大数据分析，支持科学决策和优化。',
          color: 'purple'
        }
      ]
    },
    showcase: [
      { image: 'images/yuanqu1.jpg', title: '园区管理平台', description: '统一的园区管理界面，支持多园区管理。' },
      { image: 'images/yuanqu2.jpg', title: '移动端应用', description: '随时随地管理园区，支持移动办公。' },
      { image: 'images/yuanqu3.jpg', title: '软硬结合系统', description: '对接会议机、消费机、访客机等硬件。' },
      { image: 'images/yuanqu4.jpg', title: '能源管理系统', description: '实时监控，精准调控降能耗' },
      { image: 'images/yuanqu5.jpg', title: '原型图片段', description: '电子巡查app首页原型图。' },
      { image: 'images/yuanqu6.jpg', title: '数据分析大屏', description: '园区运营数据可视化，支持决策分析。' }
    ],
    videos: [
      {
        id: 'demo-video',
        title: '原型片段',
        description: '电子巡查系统的原型片段，从系统的设计到app、后台的功能规划全覆盖。',
        poster: 'images/yuanqu5.jpg',
        sources: [
          { src: 'videos/yuanqu.mp4', type: 'video/mp4' }
        ],
        duration: '3:45',
        quality: '1080p',
        type: 'demo'
      }
    ],
    techStack: [
      { name: 'Spring Boot', icon: 'fas fa-leaf', color: 'green', description: '后端框架' },
      { name: 'Vue.js', icon: 'fab fa-vuejs', color: 'green', description: '前端框架' },
      { name: 'Redis', icon: 'fas fa-database', color: 'red', description: '缓存数据库' },
      { name: 'Kafka', icon: 'fas fa-stream', color: 'blue', description: '消息队列' }
    ],
    summary: {
      success: [
        '准确把握园区管理痛点，产品定位精准',
        '技术架构设计合理，支持大规模部署',
        '完善的客户服务体系'
      ],
      future: [
        '扩展更多园区场景',
        '加强AI智能化的应用',
        '构建园区生态平台'
      ]
    },
    personalDuties: [
      '负责多个终端设计：【智卡】的移动端、小程序、桌面端、后台管理需求分析和原型设计',
      '负责多模块升级：负责门禁、考勤、视频监控、物业服务、会议管理、食堂消费等模块的优化升级',
      '新系统01规划 ：负责电子巡查、信息发布、资产管理等8个新增子系统0到1的产品设计与项目推进'
    ]
  }
};

// 导出项目数据
if (typeof module !== 'undefined' && module.exports) {
  module.exports = projectData;
} 