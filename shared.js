// ===== EBIC Prototype – Shared JS =====
// State persisted via sessionStorage so it survives same-tab page navigation.

// --- i18n ---
const I18N = {
  zh: {
    // meta
    searchPlaceholder: '搜索：学前 / 小学 P1-P2 / P3-P4 / 中学、A/B 册...',
    login: '登录', member: '会员', logout: '注销',
    loginRegister: '登录 / 注册（示意）',
    memberZone: '会员专区',
    deviceAlert: '安全提示：同一账号同时仅允许一台设备登录。若在其他装置重新登录，本装置将自动登出（示意）。',
    currencyNoteBase: '商品定价以新加坡币（SGD）显示',
    currencyNoteUSD: '以当前汇率换算为美金（参考汇率：1 SGD ≈ {rate} USD）',
    // nav
    navHome: '首页', navProducts: '商品', navSeries: '系列/年级',
    navPolicy: '购买/自取/售后政策', navMember: '会员专区',
    // header
    brandTagline: '教材套装｜电子教材｜培训视频',
    cartLabel: '购物车',
    memberStatusLabel: '会员状态',
    notLoggedIn: '未登录',
    memberSubDefault: '登录后可进入会员专区（团队授权/书库/订单）',
    // footer
    footerDesc: 'Prototype：前台电商 + 会员专区（登录后才可见：团队授权/书库/订单自取售后）。',
    footerPolicy: '政策',
    footerPolicyLink1: '购买/自取/售后政策',
    footerPolicyLink2: '不退货与14天瑕疵换货',
    footerPolicyLink3: '线下交易与核款',
    footerStatus: '系统状态（示意）',
    footerLoginLabel: '登录：',
    footerRoleLabel: '角色：',
    // index
    tagBundle: '套书固定组合',
    tagDigital: '电子教材（2年效期）',
    tagVideo: '5人份附赠培训视频',
    heroTitle: '主日学教材数字化平台',
    heroSubtitle: '电商选购 + 会员专区',
    heroDesc: '前台以电商 UI/UX 完成选购（Prototype 示意线下交易）。购买后，教会管理员可在会员专区指派教师席位；教师登录后可于「我的书库」观看 PDF 与（若方案包含）培训视频。电子内容具 2 年效期，到期自动锁定（可后台展延）。',
    btnShop: '开始选购', btnEnterMember: '进入会员专区',
    flowTitle: '流程（示意）',
    flow1: '1) 选购套装', flow1sub: '固定套书组合；加购需检核资格',
    flow2: '2) 线下汇款 → 后台核款', flow2sub: '核款后开通数字权限与席位',
    flow3: '3) 教会指派教师', flow3sub: '席位可解除/替换；5人份附赠视频',
    flow4: '4) 教师登录书库', flow4sub: 'PDF 在线阅读｜视频在线播放｜2年效期',
    feat1Title: '多国语系', feat1Desc: '支援简体中文 / English；预设简体中文（适合新加坡年长用户）',
    feat2Title: '多币别结帐', feat2Desc: '预设 SGD；海外购买可切换 USD 并依即时汇率换算显示',
    feat3Title: '单一装置登录', feat3Desc: '同帐号同时限一台装置登录，防止多人共用公用邮箱',
    feat4Title: '物流追踪', feat4Desc: '订单出货后显示单号，可直接前往物流查询货态',
    // products
    productsTitle: '商品',
    productsDesc: '加购商品不符合条件时按钮改为「需先买套装」并提示。',
    p1p2Name: '小学 P1-P2 套装教材（4人版）',
    p1p2Desc: '固定套书组合。含电子教材权限（依席位派发）。',
    p3p4Name: '小学 P3-P4 套装教材（5人份）',
    p3p4Desc: '5 人份套装：席位绑定教师可看 PDF + 视频（示意）。',
    addonName: '电子版教学手册（小学 P3-P4）',
    addonDesc: '加购条件：已购买/已加入对应年级套装（Prototype 先以「购物车」检核示意）。',
    addonHint: '需先有 P3-P4 套装教材 才能加购此商品（示意：可从购物车或历史订单检核）。',
    digitalName: '中学系列（全面数字化｜示意）',
    digitalDesc: '示意纯电子商品类型（可含 PDF/视频）。',
    cartTitle: '购物车', cartEmpty2: '尚未加入任何商品', cartClear: '清空',
    addOnRuleTitle: '加购规则',
    addOnRuleDesc: '加购品需先有对应年级套装（可检核购物车/历史订单）。不符合时，商品页会提示「需先买套装」。',
    btnCheckout: '前往结帐（线下交易示意）',
    checkoutNote: '结帐需显示并同意：预约自取、不退货、14天瑕疵换货。',
    // series
    seriesTitle: '系列 / 年级',
    seriesDesc: '示意分类：学前、小学 P1-P2、P3-P4…；A/B 册（上半年/下半年）',
    gradePreschool: '学前', gradePreschoolDesc: '教材 +（可能）视频分类，适合学前儿童课程使用。',
    gradeP1P2: '小学 P1-P2', gradeP1P2Desc: 'A/B 册属性管理，4人版套装，含 PDF 电子教材。',
    gradeP3P4: '小学 P3-P4', gradeP3P4Desc: '5人份套装可联动培训视频，附赠教师培训影片。',
    gradeJunior: '中学系列', gradeJuniorDesc: '全面数字化，含 PDF 及培训视频（示意）。',
    viewProducts: '查看相关商品 →',
    abNote: 'A/B 册说明',
    abNoteDesc: 'A 册：对应上半年（1-6月）课程；B 册：对应下半年（7-12月）课程。购买时请确认所需年级与册别。',
    // policy
    policyTitle: '购买 / 自取 / 售后政策',
    policyPayTitle: '金流',
    policyPayDesc: '在线支付申请中；初期采线下交易（汇款/人工核款）。核款后可开通数字权限（书库/席位/视频）。多币别结帐：SGD 为标准定价；海外购买可按即时汇率换算 USD（示意）。',
    policyDelivTitle: '交付（含物流）',
    policyDelivDesc: '新加坡本地：暂支援预约自取或实体派送（示意）。出货后系统显示出货单号，可于前台订单页前往物流查询货态。取货状态：未预约 / 已预约 / 运送中 / 已取货。',
    policyAfterTitle: '售后',
    policyAfterDesc: '不接受退款退货。仅限 14 天内印刷瑕疵换货（需提供照片/订单信息）。',
    policyDigitalTitle: '数字内容效期',
    policyDigitalDesc: '电子版教材注册/开通后有效 2 年；到期自动上锁/隐藏。可由后台人工展延（含纪录）。',
    policyDeviceTitle: '装置登录限制',
    policyDeviceDesc: '同一会员账号同时仅允许在一台装置上登录使用，以防止多人共用教师账号。若于其他装置登录，原装置将自动登出。',
    // member
    memberTitle: '会员专区',
    memberGateDesc: '需登录后才可查看：团队授权管理（教会）、我的书库（PDF + 影音）、订单 / 自取 / 售后。',
    btnLoginDemo: '登录（示意）',
    btnBrowse: '先去逛商品',
    loggedInLabel: '已登录',
    quickEntry: '快速入口',
    myLibrary: '我的书库', myOrders: '订单', teamAuth: '团队授权', termsLabel: '条款',
    pillTeam: '团队授权管理（教会）', pillLibrary: '我的书库（PDF + 影音）',
    pillOrders: '订单 / 自取 / 售后', pillPolicy: '政策/条款',
    deviceNotice: '单一装置登录：同帐号同时仅允许一台装置在线，防止公用帐号滥用。',
    teamTabTitle: '团队授权管理（教会）',
    teamTabDesc: '列出教会购买的多套教材授权，管理员可逐套指派席位。',
    switchTeacher: '切成教师', switchAdmin: '切成管理员',
    insufficientPerm: '权限不足',
    insufficientPermDesc: '你目前不是教会管理员，因此看不到「团队授权管理」。（Prototype 可用右上角切换角色观看示意）',
    authOverview: '授权总览（示意）', authOverviewDesc: '共 3 套教材授权｜可用席位依各套装方案计算',
    manageChurch: '管理教会库名单',
    assignSeat: '指派席位', revoke: '解除',
    boundLabel: '已绑定',
    ruleNote: '规则提示',
    ruleNoteDesc: '名额额满时，需先解除绑定发布名额才能替换。5 人份套装：被绑定教师同时取得培训视频观看权限（示意）。',
    libTabTitle: '我的书库（PDF + 影音）',
    libTabDesc: '清单式呈现：先好找、好读，再进入阅读/播放。',
    segPdf: 'PDF 教材', segVideo: '培训视频',
    libSearchPlaceholder: '搜索：年级/册别/关键字（示意）',
    allGrades: '全部年级', allStatus: '全部状态',
    statusActive: '可使用', statusExpired: '已到期', statusRestricted: '条件限制',
    libHint: '点「阅读/播放」进入内容（示意）',
    libColContent: '内容', libColGrade: '年级', libColExpiry: '效期/状态', libColAction: '操作',
    libEmptyMsg: '找不到符合条件的内容（示意）',
    libSecurityNote: '安全提示（Prototype）',
    libSecurityDesc: '此处仅示意「禁下载/禁拷贝」与播放接口。正式版需：鉴权、反盗连、DRM/加密、浮水印、稽核等策略。',
    btnRead: '阅读', btnUnavailable: '不可用', btnPlay: '播放', btnViewCond: '查看条件',
    validUntil: '有效至：',
    ordersTitle: '订单 / 物流 / 售后',
    ordersDesc: '付款状态、出货单号与物流查询、售后申请（瑕疵换货）。',
    btnRequestExchange: '申请瑕疵换货',
    myOrdersTitle: '我的订单',
    ordersStatusHint: '状态：待汇款 / 待确认 / 已付款 / 已开通 / 运送中 / 已取货 / 换货中',
    btnViewPayment: '查看付款指示',
    btnViewDelivery: '查看配送',
    btnViewProgress: '查看进度',
    logisticsNotShipped: '备货中',
    logisticsNotShippedNote: '出货单号：— （付款确认后出货）',
    logisticsShipped: '已出货',
    logisticsCarrier: '承运：SingPost｜预计 2026-04-23 送达',
    trackingLink: '前往物流查询 →',
    policyTabTitle: '政策 / 条款（会员区）',
    policyTabDesc: '关键条款同步展示，结帐/订单页亦会重复揭露。',
    viewFullPolicy: '查看完整政策页',
    memberPayPolicy: '金流',
    memberPayPolicyDesc: '线下汇款 / 人工核款（示意）\n多币别：SGD 标准价；可换算 USD',
    memberDelivPolicy: '物流 / 自取',
    memberDelivPolicyDesc: '出货后可于订单页查询单号并前往物流追踪',
    memberAfterPolicy: '售后',
    memberAfterPolicyDesc: '不退货；14 天内瑕疵换货',
    memberDigitalTitle: '数字内容效期',
    memberDigitalDesc: '电子版教材开通后有效 2 年；到期自动上锁。可由后台人工展延（含纪录）。',
    memberDeviceTitle: '🔒 单一装置登录',
    memberDeviceDesc: '同一会员账号同时仅允许一台装置在线，防止多位教师共用同一账号。',
    // cart modal
    cartModalTitle: '你的购物车',
    cartModalEmpty: '尚未加入任何商品',
    cartCheckoutPolicy: '结帐政策：线下汇款、预约自取、不退货（14天瑕疵换货）',
    btnCartClear: '清空', btnCartCheckout: '前往结帐',
    // login modal
    loginTitle: '会员登录', loginSubtitle: '登录（示意）',
    labelEmail: 'Email', labelName: '姓名', labelRole: '角色（Prototype）',
    roleTeacher: '受邀教师', roleAdmin: '教会管理员',
    btnCancel: '取消', btnLogin: '登录',
    // unbind/bind modals
    unbindTitle: '确认解除绑定？', unbindSubtitle: '解除绑定（示意）',
    btnConfirmRevoke: '确认解除',
    bindTitle: '指派教师授权', bindSubtitle: '指派席位（示意）',
    btnConfirmAssign: '确认指派',
    // reader/video
    readerTitle: '安全阅读器（PDF｜示意）', readerBack: '← 返回',
    readerDemoText: '此处示意 PDF 在线阅读，不提供下载/拷贝（仅 UX 示意）。',
    readerPlaceholder: '[ PDF 页面示意 ]',
    videoTitle: '视频播放器（示意）',
    videoPlayNote: '正式版可接 HLS/DASH、DRM、浮水印、续播、倍速等',
    videoControlNote: '播放控制（示意）：播放/暂停、音量、倍速、全屏幕（禁止下载/外连）',
    videoListTitle: '视频清单（示意）', videoListDesc: '依系列/年级分类，登录后依权限显示',
    videoSecNote: '安全播放（Prototype）', videoSecDesc: '此页仅示意播放接口；正式版需鉴权、反盗连、DRM/加密、浮水印、稽核。',
    // device banner
    deviceBannerTitle: '装置登录限制',
    // add to cart
    btnAddToCart: '加入购物车',
    btnNeedBundle: '需先买套装',
    tagTypeBundle: '套书', tagTypeAddon: '加购', tagTypeDigital: '数字',
    tagRemove: '移除',
    // member state
    roleChurchAdmin: '教会管理员', roleTeacherInvited: '受邀教师',
  },

  en: {
    searchPlaceholder: 'Search: Preschool / P1-P2 / P3-P4 / Secondary, Book A/B...',
    login: 'Login', member: 'Member', logout: 'Sign Out',
    loginRegister: 'Login / Register (Demo)',
    memberZone: 'Member Zone',
    deviceAlert: 'Security Notice: Only one device may be logged in per account. Logging in elsewhere will sign you out here (demo).',
    currencyNoteBase: 'Prices shown in Singapore Dollar (SGD)',
    currencyNoteUSD: 'Converted to USD at reference rate: 1 SGD ≈ {rate} USD',
    navHome: 'Home', navProducts: 'Products', navSeries: 'Series/Grade',
    navPolicy: 'Purchase/Pickup/Return Policy', navMember: 'Member Zone',
    brandTagline: 'Curriculum Bundles｜Digital Materials｜Training Videos',
    cartLabel: 'Cart',
    memberStatusLabel: 'Member Status',
    notLoggedIn: 'Not Logged In',
    memberSubDefault: 'Log in to access: Team Auth / Library / Orders',
    footerDesc: 'Prototype: Storefront + Member Zone (login required for team auth / library / orders).',
    footerPolicy: 'Policy',
    footerPolicyLink1: 'Purchase/Pickup/Return Policy',
    footerPolicyLink2: 'No Refunds — 14-Day Defect Exchange',
    footerPolicyLink3: 'Offline Payment & Verification',
    footerStatus: 'System Status (Demo)',
    footerLoginLabel: 'Logged In: ',
    footerRoleLabel: 'Role: ',
    tagBundle: 'Fixed Bundle',
    tagDigital: 'Digital (2-Year Access)',
    tagVideo: 'Training Videos (5-Seat)',
    heroTitle: 'Sunday School Curriculum Digital Platform',
    heroSubtitle: 'Shop Online + Member Zone',
    heroDesc: 'Select and purchase curriculum bundles via an e-commerce interface (demo: offline payment). After purchase, church admins assign teacher seats in the Member Zone. Teachers access PDFs and training videos in "My Library" for 2 years.',
    btnShop: 'Start Shopping', btnEnterMember: 'Enter Member Zone',
    flowTitle: 'Process (Demo)',
    flow1: '1) Select Bundle', flow1sub: 'Fixed bundle sets; add-ons require eligibility check',
    flow2: '2) Offline Payment → Admin Verification', flow2sub: 'Digital access and seats activated after payment confirmed',
    flow3: '3) Church Assigns Teachers', flow3sub: 'Seats can be released/replaced; 5-seat bundles include training videos',
    flow4: '4) Teacher Accesses Library', flow4sub: 'PDF online reading | Video streaming | 2-year validity',
    feat1Title: 'Multi-Language', feat1Desc: 'Supports Simplified Chinese & English; defaults to Chinese for Singapore elderly users',
    feat2Title: 'Multi-Currency', feat2Desc: 'Default SGD; overseas buyers can switch to USD with live rate conversion',
    feat3Title: 'Single-Device Login', feat3Desc: 'One device per account to prevent shared login abuse',
    feat4Title: 'Logistics Tracking', feat4Desc: 'Tracking number displayed after shipment; link to carrier tracking page',
    productsTitle: 'Products',
    productsDesc: 'Add-on products show "Need Bundle First" button when eligibility not met.',
    p1p2Name: 'Primary P1-P2 Curriculum Bundle (4-Seat)',
    p1p2Desc: 'Fixed bundle set. Includes digital material access (assigned per seat).',
    p3p4Name: 'Primary P3-P4 Curriculum Bundle (5-Seat)',
    p3p4Desc: '5-seat bundle: assigned teachers can access PDF + training videos (demo).',
    addonName: 'Digital Teacher\'s Manual (Primary P3-P4)',
    addonDesc: 'Add-on condition: must have corresponding grade bundle in cart or order history.',
    addonHint: 'A P3-P4 bundle is required before adding this item (demo: checked via cart or order history).',
    digitalName: 'Secondary Series (Fully Digital | Demo)',
    digitalDesc: 'Demo of digital-only product type (may include PDF/video).',
    cartTitle: 'Cart', cartEmpty2: 'No items in cart', cartClear: 'Clear',
    addOnRuleTitle: 'Add-On Rules',
    addOnRuleDesc: 'Add-ons require a corresponding bundle in cart or order history. Otherwise, the button shows "Need Bundle First".',
    btnCheckout: 'Checkout (Offline Payment Demo)',
    checkoutNote: 'Checkout requires agreement to: Scheduled Pickup, No Refunds, 14-Day Defect Exchange.',
    seriesTitle: 'Series / Grade',
    seriesDesc: 'Categories: Preschool, Primary P1-P2, P3-P4…; Book A/B (first/second half of year)',
    gradePreschool: 'Preschool', gradePreschoolDesc: 'Curriculum + optional video materials for preschool classes.',
    gradeP1P2: 'Primary P1-P2', gradeP1P2Desc: 'Book A/B attribute management, 4-seat bundle, includes PDF.',
    gradeP3P4: 'Primary P3-P4', gradeP3P4Desc: '5-seat bundle includes training videos for assigned teachers.',
    gradeJunior: 'Secondary Series', gradeJuniorDesc: 'Fully digital, includes PDF and training videos (demo).',
    viewProducts: 'View Related Products →',
    abNote: 'Book A/B Guide',
    abNoteDesc: 'Book A: First half of year (Jan–Jun). Book B: Second half (Jul–Dec). Please confirm grade and book before purchase.',
    policyTitle: 'Purchase / Logistics / After-Sales Policy',
    policyPayTitle: 'Payment',
    policyPayDesc: 'Online payment pending; currently offline transfer + manual verification. Digital access granted after verification. Multi-currency: SGD standard; USD available at live rate (demo).',
    policyDelivTitle: 'Delivery (incl. Logistics)',
    policyDelivDesc: 'Singapore local: scheduled pickup or physical delivery (demo). Tracking number shown in order page after shipment. Status: Not Scheduled / Scheduled / In Transit / Collected.',
    policyAfterTitle: 'After-Sales',
    policyAfterDesc: 'No refunds or returns. Defect exchange within 14 days only (photo + order info required).',
    policyDigitalTitle: 'Digital Content Validity',
    policyDigitalDesc: '2 years from activation; auto-locked when expired. Admin can extend (with audit log).',
    policyDeviceTitle: 'Device Login Restriction',
    policyDeviceDesc: 'Only one device may be logged in per account to prevent shared teacher logins. Logging in elsewhere signs out the original device.',
    memberTitle: 'Member Zone',
    memberGateDesc: 'Login required to access: Team Authorization (Church), My Library (PDF + Video), Orders / Pickup / After-Sales.',
    btnLoginDemo: 'Login (Demo)',
    btnBrowse: 'Browse Products',
    loggedInLabel: 'Logged In',
    quickEntry: 'Quick Access',
    myLibrary: 'My Library', myOrders: 'Orders', teamAuth: 'Team Auth', termsLabel: 'Terms',
    pillTeam: 'Team Authorization (Church)', pillLibrary: 'My Library (PDF + Video)',
    pillOrders: 'Orders / Pickup / After-Sales', pillPolicy: 'Policy / Terms',
    deviceNotice: 'Single-device login: only one device active per account to prevent shared logins.',
    teamTabTitle: 'Team Authorization (Church)',
    teamTabDesc: 'View all curriculum license bundles; admins can assign seats per bundle.',
    switchTeacher: 'Switch to Teacher', switchAdmin: 'Switch to Admin',
    insufficientPerm: 'Insufficient Permission',
    insufficientPermDesc: 'You are not a church admin and cannot view Team Authorization. (Demo: use role switch above)',
    authOverview: 'Authorization Overview (Demo)', authOverviewDesc: '3 curriculum bundles | Seats calculated per bundle plan',
    manageChurch: 'Manage Church Member List',
    assignSeat: 'Assign Seat', revoke: 'Revoke',
    boundLabel: 'Assigned',
    ruleNote: 'Rule Note',
    ruleNoteDesc: 'When seats are full, revoke one to make room for replacement. 5-seat bundles: assigned teacher also gets training video access (demo).',
    libTabTitle: 'My Library (PDF + Video)',
    libTabDesc: 'List view for easy browsing; click to read or play.',
    segPdf: 'PDF Materials', segVideo: 'Training Videos',
    libSearchPlaceholder: 'Search by grade / book / keyword (demo)',
    allGrades: 'All Grades', allStatus: 'All Status',
    statusActive: 'Available', statusExpired: 'Expired', statusRestricted: 'Restricted',
    libHint: 'Click "Read/Play" to access content (demo)',
    libColContent: 'Content', libColGrade: 'Grade', libColExpiry: 'Expiry/Status', libColAction: 'Action',
    libEmptyMsg: 'No matching content found (demo)',
    libSecurityNote: 'Security Notice (Prototype)',
    libSecurityDesc: 'Demo only — no download/copy. Production requires: auth, anti-hotlink, DRM, watermark, audit.',
    btnRead: 'Read', btnUnavailable: 'Unavailable', btnPlay: 'Play', btnViewCond: 'View Conditions',
    validUntil: 'Valid until: ',
    ordersTitle: 'Orders / Logistics / After-Sales',
    ordersDesc: 'Payment status, tracking number, logistics query, and defect exchange requests.',
    btnRequestExchange: 'Request Defect Exchange',
    myOrdersTitle: 'My Orders',
    ordersStatusHint: 'Status: Pending / Confirming / Paid / Activated / In Transit / Collected / Exchanging',
    btnViewPayment: 'View Payment Details',
    btnViewDelivery: 'View Delivery',
    btnViewProgress: 'View Progress',
    logisticsNotShipped: 'Preparing',
    logisticsNotShippedNote: 'Tracking No.: — (shipped after payment confirmed)',
    logisticsShipped: 'Shipped',
    logisticsCarrier: 'Carrier: SingPost | Est. delivery: 2026-04-23',
    trackingLink: 'Track Shipment →',
    policyTabTitle: 'Policy / Terms (Member)',
    policyTabDesc: 'Key terms shown here; also repeated at checkout and order pages.',
    viewFullPolicy: 'View Full Policy Page',
    memberPayPolicy: 'Payment',
    memberPayPolicyDesc: 'Offline transfer / manual verification (demo)\nMulti-currency: SGD standard; USD available',
    memberDelivPolicy: 'Logistics / Pickup',
    memberDelivPolicyDesc: 'Track shipment via tracking number in order page',
    memberAfterPolicy: 'After-Sales',
    memberAfterPolicyDesc: 'No refunds; 14-day defect exchange only',
    memberDigitalTitle: 'Digital Content Validity',
    memberDigitalDesc: '2 years from activation; auto-locked when expired. Admin can extend (with audit log).',
    memberDeviceTitle: '🔒 Single-Device Login',
    memberDeviceDesc: 'Only one device per account to prevent shared logins among multiple teachers.',
    cartModalTitle: 'Your Cart',
    cartModalEmpty: 'No items in cart',
    cartCheckoutPolicy: 'Policy: Offline Payment, Scheduled Pickup, No Refunds (14-Day Defect Exchange)',
    btnCartClear: 'Clear', btnCartCheckout: 'Checkout',
    loginTitle: 'Member Login', loginSubtitle: 'Login (Demo)',
    labelEmail: 'Email', labelName: 'Name', labelRole: 'Role (Prototype)',
    roleTeacher: 'Invited Teacher', roleAdmin: 'Church Admin',
    btnCancel: 'Cancel', btnLogin: 'Login',
    unbindTitle: 'Confirm Revoke?', unbindSubtitle: 'Revoke Seat (Demo)',
    btnConfirmRevoke: 'Confirm Revoke',
    bindTitle: 'Assign Teacher Authorization', bindSubtitle: 'Assign Seat (Demo)',
    btnConfirmAssign: 'Confirm Assign',
    readerTitle: 'Secure Reader (PDF | Demo)', readerBack: '← Back',
    readerDemoText: 'Demo: PDF online reading. Download and copy are disabled.',
    readerPlaceholder: '[ PDF Page Demo ]',
    videoTitle: 'Video Player (Demo)',
    videoPlayNote: 'Production: HLS/DASH, DRM, watermark, resume, speed control, etc.',
    videoControlNote: 'Controls (demo): Play/Pause, Volume, Speed, Fullscreen (no download/external links)',
    videoListTitle: 'Video List (Demo)', videoListDesc: 'Filtered by series/grade; shown by permission after login',
    videoSecNote: 'Secure Playback (Prototype)', videoSecDesc: 'Demo only; production requires auth, anti-hotlink, DRM, watermark, audit.',
    deviceBannerTitle: 'Device Login Restriction',
    btnAddToCart: 'Add to Cart',
    btnNeedBundle: 'Need Bundle First',
    tagTypeBundle: 'Bundle', tagTypeAddon: 'Add-On', tagTypeDigital: 'Digital',
    tagRemove: 'Remove',
    roleChurchAdmin: 'Church Admin', roleTeacherInvited: 'Invited Teacher',
    notAssignedYet: 'No teachers assigned yet (demo)',
  }
};

const FX = { SGD: 1, USD: 0.74 };
const CURRENCY_SYMBOL = { SGD: 'S$', USD: 'US$' };
const PRICES_SGD = {
  'bundle-p1p2-4': 98,
  'bundle-p3p4-5': 138,
  'addon-manual-p3p4': 28,
  'digital-junior': 68,
};

// --- State (sessionStorage-backed) ---
function _loadState() {
  try {
    const s = sessionStorage.getItem('ebic_state');
    return s ? JSON.parse(s) : null;
  } catch { return null; }
}
function saveState() {
  try { sessionStorage.setItem('ebic_state', JSON.stringify(state)); } catch {}
}
const _saved = _loadState();
const state = _saved || {
  isLoggedIn: false,
  role: null,
  name: '王晓明',
  email: 'xiaoming.w@gmail.com',
  org: '圣光教会',
  cart: [],
  libraryView: 'pdf',
  lang: 'zh',
  currency: 'SGD',
  library: {
    pdf: [
      { id:'pdf-1', title:'小学 P3-P4 B 册（电子教材）', grade:'P3-P4', term:'B', status:'active', expires:'2028-03-31' },
      { id:'pdf-2', title:'小学 P3-P4 教师手册（电子）', grade:'P3-P4', term:'-', status:'active', expires:'2028-03-31' },
      { id:'pdf-3', title:'小学 P1-P2 A 册（电子教材）', grade:'P1-P2', term:'A', status:'expired', expires:'2025-01-01' },
      { id:'pdf-4', title:'学前 A 册（电子教材）', grade:'学前', term:'A', status:'active', expires:'2027-10-01' },
    ],
    video: [
      { id:'v-1', title:'P3-P4 教师培训：课程导读（Part 1）', grade:'P3-P4', status:'active', note:'来源：5人份套装附赠' },
      { id:'v-2', title:'P3-P4 教师培训：带领技巧（Part 2）', grade:'P3-P4', status:'active', note:'来源：5人份套装附赠' },
      { id:'v-3', title:'中学系列：教学法示范（预览）', grade:'中学', status:'restricted', note:'示意：需符合对应订购/授权' },
    ]
  }
};

let currentLang = state.lang || 'zh';
let currentCurrency = state.currency || 'SGD';

function t(key) { return (I18N[currentLang] || I18N.zh)[key] || key; }
function fmtPrice(sgd) {
  return CURRENCY_SYMBOL[currentCurrency] + '\u00a0' + (sgd * FX[currentCurrency]).toFixed(2);
}

// --- i18n / currency ---
// --- applyI18n: update all [data-i18n] elements ---
function applyI18n() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const val = t(el.dataset.i18n);
    if (val) el.innerText = val;
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    el.placeholder = t(el.dataset.i18nPlaceholder);
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const val = t(el.dataset.i18nHtml);
    if (val) el.innerHTML = val;
  });
}

function switchLang(lang) {
  currentLang = lang;
  state.lang = lang;
  saveState();
  ['zh','en'].forEach(l => {
    const btn = document.getElementById('lang-' + l);
    if (btn) btn.classList.toggle('active', l === lang);
  });
  renderProductPrices();
  applyI18n();
  renderHeaderMember();
  if (typeof renderLibrary === 'function' && document.getElementById('libList')) renderLibrary();
  renderCartPanels();
  refreshAddonCTAs();
}
function switchCurrency(cur) {
  currentCurrency = cur;
  state.currency = cur;
  saveState();
  ['SGD','USD'].forEach(c => {
    const btn = document.getElementById('cur-' + c);
    if (btn) btn.classList.toggle('active', c === cur);
  });
  renderProductPrices();
}
function renderProductPrices() {
  Object.entries(PRICES_SGD).forEach(([id, sgd]) => {
    const el = document.getElementById('price-' + id);
    if (el) el.innerText = fmtPrice(sgd);
  });
  const note = document.getElementById('currencyNote');
  if (note) {
    note.innerText = currentCurrency === 'USD'
      ? t('currencyNoteUSD').replace('{rate}', FX.USD)
      : t('currencyNoteBase');
  }
}

// --- Navigation ---
const PAGE_URLS = {
  home: 'index.html',
  products: 'products.html',
  series: 'series.html',
  policy: 'policy.html',
  member: 'member.html',
};
function goto(page) {
  saveState();
  window.location.href = PAGE_URLS[page] || 'index.html';
}
function gotoMemberOrLogin() {
  if (!state.isLoggedIn) openLogin();
  else goto('member');
}

// --- Member menu ---
function toggleMemberMenu() {
  document.getElementById('memberMenu').classList.toggle('hidden');
}
function closeMemberMenu() {
  document.getElementById('memberMenu').classList.add('hidden');
}
document.addEventListener('click', e => {
  const menu = document.getElementById('memberMenu');
  if (!menu) return;
  const btn = document.getElementById('memberBtnText')?.parentElement;
  const within = menu.contains(e.target) || (btn && btn.contains(e.target));
  if (!within) closeMemberMenu();
});

// --- Login / Logout ---
function openLogin() {
  document.getElementById('loginModal').classList.remove('hidden');
  closeMemberMenu();
}
function closeLogin() {
  document.getElementById('loginModal').classList.add('hidden');
}
function login() {
  const email = document.getElementById('loginEmail').value.trim();
  const name  = document.getElementById('loginName').value.trim();
  const role  = document.getElementById('loginRole').value;
  state.isLoggedIn = true;
  state.email = email || state.email;
  state.name  = name  || state.name;
  state.role  = role;
  saveState();
  closeLogin();
  renderHeaderMember();
  const banner     = document.getElementById('deviceLoginBanner');
  const bannerText = document.getElementById('deviceBannerText');
  if (banner && bannerText) {
    bannerText.innerText = t('deviceAlert');
    banner.classList.remove('hidden');
    setTimeout(() => banner.classList.add('hidden'), 8000);
  }
  const btnI18n = document.getElementById('memberBtnTextI18n');
  if (btnI18n) { btnI18n.dataset.loggedin = '1'; btnI18n.innerText = t('member'); }
  goto('member');
}
function logout() {
  state.isLoggedIn = false;
  state.role = null;
  saveState();
  const btnI18n = document.getElementById('memberBtnTextI18n');
  if (btnI18n) { btnI18n.dataset.loggedin = '0'; btnI18n.innerText = t('login'); }
  renderHeaderMember();
  closeMemberMenu();
  goto('home');
}
function setRole(role) {
  if (!state.isLoggedIn) { alert('请先登录（示意）'); return; }
  state.role = role;
  saveState();
  if (typeof renderMemberGate === 'function') renderMemberGate();
  renderHeaderMember();
}
function renderHeaderMember() {
  const bi = document.getElementById('memberBtnTextI18n');
  if (bi) {
    bi.dataset.loggedin = state.isLoggedIn ? '1' : '0';
    bi.innerText = state.isLoggedIn ? t('member') : t('login');
  }
  const mst = document.getElementById('memberStateText');
  if (mst) mst.innerText = state.isLoggedIn ? `${state.name}（${t('loggedInLabel')}）` : t('notLoggedIn');
  const msub = document.getElementById('memberSubText');
  if (msub) msub.innerText = state.isLoggedIn
    ? `${t('labelRole').replace('（Prototype）','')}：${state.role === 'churchAdmin' ? t('roleChurchAdmin') : t('roleTeacherInvited')}`
    : t('memberSubDefault');
  const lmb = document.getElementById('loginMenuBtn');
  if (lmb) lmb.classList.toggle('hidden', state.isLoggedIn);
  const lob = document.getElementById('logoutMenuBtn');
  if (lob) lob.classList.toggle('hidden', !state.isLoggedIn);
  const fl = document.getElementById('footerLogin');
  if (fl) fl.innerText = state.isLoggedIn ? t('loggedInLabel') : t('notLoggedIn');
  const fr = document.getElementById('footerRole');
  if (fr) fr.innerText = state.isLoggedIn ? (state.role === 'churchAdmin' ? t('roleChurchAdmin') : t('roleTeacherInvited')) : '—';
}

// --- Member gate + tabs (member.html only) ---
function renderMemberGate() {
  const gate = document.getElementById('memberGate');
  const area = document.getElementById('memberArea');
  if (!gate || !area) return;
  if (!state.isLoggedIn) { gate.classList.remove('hidden'); area.classList.add('hidden'); return; }
  gate.classList.add('hidden');
  area.classList.remove('hidden');
  document.getElementById('memberName').innerText = state.name;
  document.getElementById('memberEmail').innerText = state.email;
  const wu = document.getElementById('watermarkUser'); if (wu) wu.innerText = state.email;
  const rw = document.getElementById('readerWatermark'); if (rw) rw.innerText = state.email;
  document.getElementById('avatar').innerText = (state.name || 'U').slice(0,1);
  document.getElementById('orgTag').innerText = `所属：${state.org}`;
  document.getElementById('roleTag').innerText = state.role === 'churchAdmin' ? t('roleChurchAdmin') : t('roleTeacherInvited');
  const teamGate  = document.getElementById('teamGate');
  const teamPanel = document.getElementById('teamPanel');
  const isAdmin   = state.role === 'churchAdmin';
  if (teamGate)  teamGate.classList.toggle('hidden', isAdmin);
  if (teamPanel) teamPanel.classList.toggle('hidden', !isAdmin);
  setLibraryView(state.libraryView, true);
}
function setMemberTab(tabId) {
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  const tab = document.getElementById(tabId);
  if (tab) tab.classList.add('active');
  const map = { 'tab-team':'pill-team', 'tab-library':'pill-library', 'tab-orders':'pill-orders', 'tab-policy':'pill-policy' };
  Object.values(map).forEach(id => { const el = document.getElementById(id); if (el) el.classList.remove('pill-active'); });
  const pill = document.getElementById(map[tabId]);
  if (pill) pill.classList.add('pill-active');
  if (tabId === 'tab-library') renderLibrary();
}

// --- Library ---
function setLibraryView(view, skipRender) {
  state.libraryView = view; saveState();
  const sp = document.getElementById('segPdf');   if (sp) sp.classList.toggle('active', view === 'pdf');
  const sv = document.getElementById('segVideo'); if (sv) sv.classList.toggle('active', view === 'video');
  const lt = document.getElementById('libTitle'); if (lt) lt.innerText = view === 'pdf' ? t('segPdf') : t('segVideo');
  if (!skipRender) renderLibrary();
}
function renderLibrary() {
  const q      = (document.getElementById('libSearch')?.value || '').trim().toLowerCase();
  const grade  = document.getElementById('libGrade')?.value  || '';
  const status = document.getElementById('libStatus')?.value || '';
  const list   = document.getElementById('libList');
  const empty  = document.getElementById('libEmpty');
  if (!list || !empty) return;
  const items = state.library[state.libraryView]
    .filter(x => !grade  || x.grade  === grade)
    .filter(x => !status || x.status === status)
    .filter(x => !q      || x.title.toLowerCase().includes(q) || (x.grade||'').toLowerCase().includes(q));
  list.innerHTML = '';
  if (items.length === 0) { empty.classList.remove('hidden'); return; }
  empty.classList.add('hidden');
  items.forEach(x => {
    const chip  = x.status === 'active' ? `<span class="tag tag-emerald">${t('statusActive')}</span>`
                : x.status === 'expired' ? `<span class="tag tag-rose">${t('statusExpired')}</span>`
                : `<span class="tag tag-amber">${t('statusRestricted')}</span>`;
    const btn   = state.libraryView === 'pdf'
      ? (x.status === 'active'
          ? `<button class="px-4 py-2 rounded-2xl bg-blue-600 text-white text-sm font-black hover:bg-blue-700" onclick="openReaderWithTitle('${escapeHtml(x.title)}')">${t('btnRead')}</button>`
          : `<button class="px-4 py-2 rounded-2xl bg-slate-300 text-slate-600 text-sm font-black btn-disabled" onclick="return false;">${t('btnUnavailable')}</button>`)
      : (x.status === 'active'
          ? `<button class="px-4 py-2 rounded-2xl bg-slate-900 text-white text-sm font-black hover:bg-slate-800" onclick="openVideoWithTitle('${escapeHtml(x.title)}')">${t('btnPlay')}</button>`
          : `<button class="px-4 py-2 rounded-2xl bg-slate-300 text-slate-600 text-sm font-black" onclick="alert('示意：需符合对应订购/授权条件才可播放。')">${t('btnViewCond')}</button>`);
    const meta  = state.libraryView === 'pdf'
      ? `<div class="text-xs text-slate-500 mt-1">${t('validUntil')}${x.expires || '—'}</div>`
      : `<div class="text-xs text-slate-500 mt-1">${x.note || ''}</div>`;
    const termTag = x.term && x.term !== '-' ? `<span class="tag tag-amber">${x.term} 册</span>` : '';
    const row = document.createElement('div');
    row.className = 'px-5 py-4 grid grid-cols-1 md:grid-cols-12 gap-3 items-start';
    row.innerHTML = `
      <div class="md:col-span-5"><div class="font-black text-slate-900">${x.title}</div>${meta}</div>
      <div class="md:col-span-2"><div class="flex flex-wrap gap-2 mt-1 md:mt-0"><span class="tag tag-blue">${x.grade}</span>${termTag}</div></div>
      <div class="md:col-span-2 flex items-center gap-2">${chip}</div>
      <div class="md:col-span-3 md:text-right">${btn}</div>
    `;
    list.appendChild(row);
  });
}
function openReaderWithTitle(title) { document.getElementById('readerTitle').innerText = title; openReader(); }
function openVideoWithTitle(title)  { setVideoTitle(title); openVideo(); }
function setVideoTitle(title)       { document.getElementById('videoTitle').innerText = title; }
function escapeHtml(str) {
  return (str||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#039;');
}

// --- Cart ---
function updateCartCount() {
  const el = document.getElementById('cartCount');
  if (el) el.innerText = state.cart.length;
}
function hasBundleForGrade(grade) {
  return state.cart.some(x => x.type === 'bundle' && x.meta?.grade === grade);
}
function refreshAddonCTAs() {
  const eligible = hasBundleForGrade('P3-P4');
  const btn  = document.getElementById('btn-addon-p3p4');
  const hint = document.getElementById('addonHintP3P4');
  if (!btn || !hint) return;
  if (eligible) {
    btn.classList.remove('btn-disabled','bg-slate-300','text-slate-600');
    btn.classList.add('bg-slate-900','text-white');
    btn.innerText = t('btnAddToCart');
    hint.classList.add('hidden');
  } else {
    btn.classList.add('btn-disabled');
    btn.classList.remove('bg-slate-900','text-white');
    btn.classList.add('bg-slate-300','text-slate-600');
    btn.innerText = t('btnNeedBundle');
    hint.classList.remove('hidden');
  }
}
function handleAddonClick(grade, id, name) {
  if (!hasBundleForGrade(grade)) {
    const hint = document.getElementById('addonHintP3P4');
    hint?.classList.remove('hidden');
    hint?.scrollIntoView({ behavior:'smooth', block:'center' });
    return;
  }
  addToCart(id, name, 'addon', { grade });
}
function addToCart(id, name, type, meta = {}) {
  state.cart.push({ id, name, type, meta }); saveState();
  renderCartPanels(); updateCartCount(); refreshAddonCTAs();
}
function removeCartAt(i) {
  state.cart.splice(i, 1); saveState();
  renderCartPanels(); updateCartCount(); refreshAddonCTAs();
}
function clearCart() {
  state.cart.length = 0; saveState();
  renderCartPanels(); updateCartCount(); refreshAddonCTAs();
}
function _buildCartRow(item, idx) {
  const row = document.createElement('div');
  row.className = 'p-4 rounded-2xl border border-slate-200 bg-white flex items-start justify-between gap-3';
  const typeTag = item.type==='bundle' ? 'tag-blue' : item.type==='addon' ? 'tag-amber' : 'tag-emerald';
  const typeLabel = item.type==='bundle' ? t('tagTypeBundle') : item.type==='addon' ? t('tagTypeAddon') : t('tagTypeDigital');
  row.innerHTML = `
    <div class="min-w-0">
      <div class="text-sm font-black text-slate-900 truncate">${item.name}</div>
      <div class="mt-2 flex flex-wrap gap-2">
        <span class="tag ${typeTag}">${typeLabel}</span>
        ${item.meta?.includesVideo ? `<span class="tag tag-rose">${currentLang==='en'?'incl. Video':'含视频'}</span>` : ''}
        ${item.meta?.grade ? `<span class="tag tag-blue">${item.meta.grade}</span>` : ''}
      </div>
    </div>
    <button class="text-xs text-slate-500 hover:underline font-black" data-i="${idx}">${t('tagRemove')}</button>
  `;
  row.querySelector('button').addEventListener('click', e => {
    removeCartAt(parseInt(e.currentTarget.getAttribute('data-i'), 10));
  });
  return row;
}
function renderCartPanels() {
  [['cartEmpty','cartList'],['cartModalEmpty','cartModalList']].forEach(([eId,lId]) => {
    const empty = document.getElementById(eId);
    const list  = document.getElementById(lId);
    if (!empty || !list) return;
    list.innerHTML = '';
    if (state.cart.length === 0) {
      empty.classList.remove('hidden'); list.classList.add('hidden');
    } else {
      empty.classList.add('hidden'); list.classList.remove('hidden');
      state.cart.forEach((item, idx) => list.appendChild(_buildCartRow(item, idx)));
    }
  });
}
function checkout() {
  if (state.cart.length === 0) { alert('购物车为空（示意）'); return; }
  alert('结帐示意：线下汇款/人工核款；交付为预约自取；不退货、仅14天瑕疵换货。');
  closeCart();
}
function openCart()  { document.getElementById('cartModal').classList.remove('hidden'); }
function closeCart() { document.getElementById('cartModal').classList.add('hidden'); }

// --- Reader / Video ---
function openReader()  { document.getElementById('readerModal').classList.remove('hidden'); }
function closeReader() { document.getElementById('readerModal').classList.add('hidden'); }
function openVideo()   { document.getElementById('videoModal').classList.remove('hidden'); }
function closeVideo()  { document.getElementById('videoModal').classList.add('hidden'); }
document.addEventListener('contextmenu', e => {
  const inR = !document.getElementById('readerModal')?.classList.contains('hidden');
  const inV = !document.getElementById('videoModal')?.classList.contains('hidden');
  if (inR || inV) e.preventDefault();
});
document.addEventListener('keydown', e => {
  const inR = !document.getElementById('readerModal')?.classList.contains('hidden');
  const inV = !document.getElementById('videoModal')?.classList.contains('hidden');
  if ((inR || inV) && (e.ctrlKey || e.metaKey) && ['c','p','s'].includes(e.key)) e.preventDefault();
});

// --- Team modals ---
function openUnbindModal(name) {
  document.getElementById('unbindText').innerText =
    `解除「${name}」后，该教师将失去对应教材（以及若方案包含之培训视频）的在线权限，并发布席位供替换。`;
  document.getElementById('unbindModal').classList.remove('hidden');
}
function openBindModal(scope) {
  document.getElementById('bindText').innerText =
    `确认指派席位${scope ? ' ' + scope : ''}？指派后教师可在「我的书库」看到对应 PDF；若该套装为 5 人份方案，亦可观看培训视频（示意）。`;
  document.getElementById('bindModal').classList.remove('hidden');
}
function closeModal(id) { document.getElementById(id).classList.add('hidden'); }

// --- Page init (called inline in each page) ---
function pageInit(pageName) {
  // Restore lang/currency toggle state
  ['zh','en'].forEach(l => {
    const btn = document.getElementById('lang-' + l);
    if (btn) btn.classList.toggle('active', l === currentLang);
  });
  ['SGD','USD'].forEach(c => {
    const btn = document.getElementById('cur-' + c);
    if (btn) btn.classList.toggle('active', c === currentCurrency);
  });
  // Highlight active nav link
  document.querySelectorAll('[data-nav]').forEach(a => {
    const active = a.dataset.nav === pageName;
    a.classList.toggle('nav-active', active);
  });
  renderHeaderMember();
  renderCartPanels();
  updateCartCount();
  refreshAddonCTAs();
  renderProductPrices();
  applyI18n();
  // Member page: render gate
  if (pageName === 'member') renderMemberGate();
}
